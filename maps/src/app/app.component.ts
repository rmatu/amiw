import { Component } from '@angular/core';
import { API_KEY } from 'env';
import { Map, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import { toStringHDMS } from 'ol/coordinate.js';
import Overlay from 'ol/Overlay';
import { toLonLat, fromLonLat } from 'ol/proj.js';
import { validateIPaddress } from '../utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public map;
  constructor() {}

  ngOnInit() {
    const container = document.getElementById('popup');

    const overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }

  async onEnter(IP) {
    if (!validateIPaddress(IP)) {
      return;
    }
    console.log('here');
    const closer = document.getElementById('popup-closer');
    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');

    const popup = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });

    const res = await fetch(
      `http://api.ipstack.com/${IP}?access_key=${API_KEY}`
    );
    const data = await res.json();
    console.log(data);
    const {
      longitude,
      latitude,
      continent_name,
      country_name,
      region_name,
      city,
    } = data;
    this.map.addOverlay(popup);
    const me = [longitude, latitude];
    const webMe = fromLonLat(me);
    const hdms = toStringHDMS(toLonLat(webMe));
    content.innerHTML = `<p>Cooridnates: ${hdms}</p>
        <p>Continent Name: ${continent_name}</p>
        <p>Country Name: ${country_name}</p>
        <p>Region Name: ${region_name}</p>
        <p>City: ${city}</p>
        `;
    popup.setPosition(webMe);

    closer.onclick = function () {
      popup.setPosition(undefined);
      closer.blur();
      return false;
    };
  }
}
