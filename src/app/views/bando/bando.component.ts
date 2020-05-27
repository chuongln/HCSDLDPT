// import { BanDoService } from './../../services/bando.service';
import { LoaderInterceptor } from './../../services/loader.interceptor';
import { DefaultLayoutComponent } from './../../containers/default-layout/default-layout.component';
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { icon, latLng, Map, marker, point, polyline, tileLayer, featureGroup, FeatureGroup, DrawEvents, map } from 'leaflet';
import './../../../../node_modules/leaflet.fullscreen/Control.FullScreen.js';
import * as L from 'leaflet';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from './../../services/common.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LeafletDirective } from '@asymmetrik/ngx-leaflet';
import { DialogUpdateDuongComponent } from './dialog/dialog-update-duong.component';

@Component({
  selector: 'app-bando',
  templateUrl: './bando.component.html',
  styleUrls: ['./bando.component.css']
})


export class BanDoComponent implements OnInit {
  @ViewChild(LeafletDirective)
  leafletDirective: LeafletDirective;
  map: any;
  data: any = '';
  routeData: any[] = [];
  layer: any;
  layerChoise: FeatureGroup = featureGroup();
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  summit = marker([46.8523, -121.7603], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    }
    )
  });
  toado ='[[21.0323359718089,105.77975749969482],[21.023042634544993,105.77855587005617],[20.974323257310385,105.81597805023195],[20.97223950847962,105.81941127777101],[20.971117477846402,105.82438945770265],[20.966949861762313,105.83331584930421],[20.965507198358384,105.84413051605226],[20.96630867974568,105.84807872772218],[20.963904222695998,105.86455821990967],[20.964385117198955,105.87279796600343],[20.971758639239518,105.88120937347414],[20.976281754366422,105.88600516319276],[20.98205190849771,105.89141249656677]]'; 
  paradise = marker([46.78465227596462, -121.74141269177198], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'leaflet/marker-icon.png',
      iconRetinaUrl: 'leaflet/marker-icon-2x.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  }).bindPopup('This is the Transamerica Pyramid').openPopup();
  obj: any[] = [
    {
      value: 123123,
      color: 'blue',
      name: 'Đường vành đai 3 trên cao',
      code: 'VD3',
      loaiDuong: 'Đường cao tốc',
      tuyenDuong: 'Đường cao tốc trên cao',
      diemDau: 'Km159 + 258',
      diemCuoi: 'Km182 + 930 (cầu Mai Dịch)',
      chieuDai: '23.672',
      chieuRongMatDuong: '6m',
      ketCauMatDuong: "Bê tông cốt thép",
      ghiChu: 'Tuyến đường vành đai 3 trên cao',
      toado:  (this.toado)
    }
  ];
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    overlays: {
      // 'Mt. Rainier Summit': this.routeData,
      'Mt. Rainier Paradise Start': null,
      'Mt. Rainier Climb Route': this.paradise,
    }
  };
  options = {
    layers: [this.streetMaps, this.summit, this.paradise],
    zoom: 12,
    center: latLng([21.028511, 105.804817]),
  };

  drawOptions = {
    position: 'topright',
    draw: false,
    edit: {
      featureGroup: this.layerChoise,
      remove: false
    }
  };
  constructor(
    private defaultLayoutComponent: DefaultLayoutComponent,
    private fb: FormBuilder,
    private common: CommonService,
    public dialog: MatDialog,
    // public banDoService: BanDoService,
    private zone: NgZone
  ) {
    this.defaultLayoutComponent.sidebarOff = 'false';

  }
  ngOnInit() {
    for (let i = 0; i < this.obj.length; i++) {
      this.routeData.push(polyline(JSON.parse(this.obj[i].toado)).bindPopup(JSON.stringify({ index: i, ... this.obj[i] }))
        .setStyle({ color: this.obj[i].color })
        .on('click', (e) => {
          this.zone.run(() => this.onMapClick(e));
        }));
      this.options.layers.push(this.routeData[i]);
    }
    this.layersControl = {
      baseLayers: {
        'Street Maps': this.streetMaps,
        'Wikimedia Maps': this.wMaps
      },
      overlays: {
        // 'Mt. Rainier Summit': this.routeData,
        'Mt. Rainier Paradise Start': L.layerGroup(this.routeData),
        'Mt. Rainier Climb Route': this.paradise,
      }
    }
  }
  onMapClick(e) {
    this.data = JSON.parse(e.target._popup._content);
    this.layerChoise.clearLayers();
    this.layerChoise.addLayer(this.routeData[this.data.index]);
    if (this.layer) {
      this.layer.setStyle({
        color: 'red',
        opacity: 1,
        weight: 5
      });
    }
    this.layer = e.target;
    this.layer.closePopup();
    this.layer.setStyle({
      color: 'blue',
      opacity: 1,
      weight: 5
    });
  }
  saveChangeLocal(data: any) {
    console.log(data);
    // this.banDoService.getKyHieuChamCong(data, 123).subscribe
  }
  openDialogUpdateDuong(data: any): void {
    const dialogRef = this.dialog.open(DialogUpdateDuongComponent, {
      width: '700px',
      height: '80%',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.onSearch();
        this.common.messageRes(result);
      }
    });
  }
  convertDataToSaveDb(data: any, array: any) {
    data = JSON.parse(data);
    let arrayData = [];
    for (let i = 0; i < array.length; i++) {
      let arrayCheck = [array[i].lat, array[i].lng];
      arrayData.push(arrayCheck);
    }
    data.toado = arrayData;
    return (data);
  }
  convertLatLng(array: any) {
    let arrayData = [];
    for (let i = 0; i < array.length; i++) {
      let arrayCheck = [array[i].lat, array[i].lng];
      arrayData.push(arrayCheck);
    }
    return (arrayData);
  }
  btn_drawPolyLine() {
    var polylineDrawer = new L.Draw.Polyline(this.map, {
      shapeOptions: {
        color: 'red'
      }
    });
    polylineDrawer.enable();
  }
  btn_drawMarker() {
    var markerDrawer = new L.Draw.Marker(this.map, {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
    })
    });
    markerDrawer.enable();
  }
  // btn_editPolyLine() {
  //   var   polylineEdit = new L.Edit.Polyline(this.map)
  //   polylineEdit.enable();
  // }
  onMapReady(map: L.Map) {
    // L.drawLocal.draw.toolbar.buttons.polyline = 'Draw a sexy polygon!';
    this.map = map;
    L.control.fullscreen({
      position: 'topleft',
      title: 'Show me the fullscreen !',
      titleCancel: 'Exit fullscreen mode',
      content: null,
      forceSeparateButton: true,
      forcePseudoFullscreen: false,
      fullscreenElement: false
    }).addTo(this.map);

    this.map.on('enterFullscreen', () => map.invalidateSize());
    this.map.on('exitFullscreen', () => map.invalidateSize());
    this.map.on('draw:edited', (e) => {
      const layers = e.layers;
      layers.eachLayer((layer) => {
        this.data = this.convertDataToSaveDb(layer._popup._content, layer._latlngs);
        this.saveChangeLocal(this.data);
      });
    });
    this.map.on('draw:created', (e) => {
      var type = e.layerType,
        layer = e.layer;
        console.log(layer._latlngs);
        console.log(layer._latlngs.toString());
        console.log(this.convertLatLng(layer._latlngs))
        console.log(this.convertLatLng(layer._latlngs).toString())
        if (type === 'marker') {
        // Do marker specific actions
      }
      if (type === 'polyline') {
        this.openDialogUpdateDuong({toado: this.convertLatLng(layer._latlngs)})
        // Do marker specific actions
      }
      
      // Do whatever else you need to. (save to db, add to map etc)
      map.addLayer(layer);
    });
  }
}