import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../../services/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { icon, latLng, Map, marker, point, polyline, tileLayer, featureGroup, FeatureGroup, DrawEvents, map } from 'leaflet';
import './../../../../node_modules/leaflet.fullscreen/Control.FullScreen.js';
import * as L from 'leaflet';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  obj: any[] = [
    {
      name: 'Nhà hàng A',
      code: 'NHA',
      hour: '8AM-10PM',
      local: '121 Lê Thanh Nghị',
      ghiChu: 'Món ngon nhất vùng',
      monAn: '7 món',
      toado:  [21.01649288718999,105.80580199686152]
    },
    {
      name: 'Nhà hàng B',
      code: 'NHB',
      hour: '8AM-10PM',
      local: '122 Lê Thanh Nghị',
      monAn: '7 món',
      ghiChu: 'Món ngon nhất vùng',
      toado:  [21.028511, 105.804816]
    }
  ];
  options = {
    layers: [this.streetMaps],
    zoom: 12,
    center: latLng([21.028511, 105.804817]),
  };
  markerData: any[] = [];
  data: any = '';
  map: any;
  fileToUpload: File;
  public files: Array<File> = [];
  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private zone: NgZone
  ) { }

  ngOnInit(): void {
    this.createSearchForm();
    for (let i = 0; i < this.obj.length; i++) {
      this.markerData.push(marker(this.obj[i].toado)
      .bindPopup(JSON.stringify({ index: i, ... this.obj[i] }))
      .bindTooltip(this.obj[i].name)
      .on('click', (e) => {
          this.zone.run(() => this.onMapClick(e));
        }));
    }
    console.log(this.markerData);
  }
  onMapClick(e) {
    e.target.closePopup();
    this.map.setView(e.latlng, 13);
    this.data = JSON.parse(e.target._popup._content);
  }
  createSearchForm() {
    this.searchForm = this.fb.group(
      {
        name: [''],
        local: ['']
      });
  }
  onSearch() {
    // this.getProject();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }
  form = new FormData();

  onSubmit() {
    if (this.fileToUpload) {
      
      
    var  reader = new FileReader();
   reader.readAsDataURL( this.fileToUpload);
   this.form.append('image', reader.result.toString())
   reader.onload = ()=> {
    this.form.append('image', reader.result.toString())

     console.log( this.form);
     console.log(JSON.stringify(this.form))

     this.form.forEach((value,key) => {
        console.log(key+" "+value)
      });
     if( this.form) {
      this.searchService.get(reader.result.toString())
      .subscribe(res => {
        console.log(res)
      });
     }

   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
    } else {
      this.searchService.getData('123')
        .subscribe(res => {
          console.log(res)
        });
    }

  }
  cancelFile(file: File) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }
  onMapReady(map: L.Map) {

    this.map = map;

    map.attributionControl.setPrefix(''); // Don't show the 'Powered by Leaflet' text.
    L.control.scale().addTo(this.map);

    L.control.fullscreen({
      position: 'topleft',
      title: 'Show Full Screen',
      titleCancel: 'Exit Full Screen',
      content: null,
      forceSeparateButton: true,
      forcePseudoFullscreen: true,
      fullscreenElement: false
    }).addTo(this.map);

    this.map.on('enterFullscreen', () => map.invalidateSize());
    this.map.on('exitFullscreen', () => map.invalidateSize());

  }
}