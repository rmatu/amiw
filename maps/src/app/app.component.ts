import { Component } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public map;
  public mousePosition;

  ngOnInit() {
    this.map = new Map({
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 4,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
    });
  }
}
