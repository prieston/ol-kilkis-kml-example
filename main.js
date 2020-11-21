//import the Map Class to create a new map
import Map from 'ol/Map';
//import the View Class to set the view parameters (center, zoom etc)
import View from 'ol/View';
//import the VectorSource Class to be able to load a Vector Layer (in our case the for KML Files)
import VectorSource from 'ol/source/Vector';
//import the KML Class to import KML VectorSource
import KML from 'ol/format/KML';
//import all Layer Classes to load the kml as a layer
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
//import the open street map to use it as a map background
import OSM from 'ol/source/OSM';

//create tha background
var backgroundMap = new TileLayer({
      source: new OSM(),
    });

//create the kml roads of kilkis layer
var RoadsKilkis = new VectorLayer({
  source: new VectorSource({
    url: './kml/RoadsKilkis.kml',
    format: new KML(),
  })
});

//create some other kml layer (in this case sundials)
var sundials = new VectorLayer({
  source: new VectorSource({
    url: './kml/sundials.kml',
    format: new KML(),
  })
});

var kilkisCoordinates = [2545512.405712809, 5011145.695362494];

//create a map with all the above features
var map = new Map({
layers: [ backgroundMap, RoadsKilkis, sundials ],
  target: document.getElementById('map'),
  view: new View({
    center: kilkisCoordinates,
    projection: 'EPSG:3857',
    zoom: 12.3,
  }),
});

//reference the map variable to the window object
//with this we can run in the chrome development tools (F12 or right click + inspect)
//things like window.map.getView().getCenter() to get the center coordinates
//and other openl layer map functions
//see https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html

window.map = map;