import { Component, ViewChild } from '@angular/core';
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
    const content = document.getElementById('popup-content');

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
      overlays: [overlay],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }

  // 93.131.131.42
  async onEnter(IP) {
    if (!validateIPaddress(IP)) {
      return;
    }
    const container = document.getElementById('popup');
    const closer = document.getElementById('popup-closer');
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
      location: { country_flag },
      city,
    } = data;
    this.map.addOverlay(popup);
    const me = [longitude, latitude];
    const webMe = fromLonLat(me);
    const hdms = toStringHDMS(toLonLat(webMe));
    // Niestety, żadne style nie chciały ze mną współpracować w pliku app.component.sccs,
    // więc musiałem wystylizować elementy tutaj...
    content.innerHTML = `<p><span style="font-weight: 700">Cooridnates:</span> ${hdms}</p>
    <p><span style="font-weight: 700">Continent Name:</span> ${continent_name}</p>
    <p><span style="font-weight: 700">Country Name:</span> ${country_name}</p>
    <p><span style="font-weight: 700">Region Name:</span> ${region_name}</p>
    <p><span style="font-weight: 700">City:</span> ${city}</p>
    <p><span style="font-weight: 700">Flag:</span> <img style="width: 15px; height: 15px" src="${country_flag}"></p>
        `;
    popup.setPosition(webMe);

    closer.onclick = function () {
      popup.setPosition(undefined);
      closer.blur();
      return false;
    };
  }
}
