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
  isData = true;
  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private zone: NgZone
  ) { }
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  obj: any[];
  myLocate: any;
  // = [
  //   {
  //     name: 'Nhà hàng A',
  //     code: 'NHA',
  //     hour: '8AM-10PM',
  //     local: '121 Lê Thanh Nghị',
  //     ghiChu: 'Món ngon nhất vùng',
  //     monAn: '7 món',
  //     toado: [21.01649288718999, 105.80580199686152]
  //   },
  //   {
  //     name: 'Nhà hàng B',
  //     code: 'NHB',
  //     hour: '8AM-10PM',
  //     local: '122 Lê Thanh Nghị',
  //     monAn: '7 món',
  //     ghiChu: 'Món ngon nhất vùng',
  //     toado: [21.028511, 105.804816]
  //   }
  // ];
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
  form = new FormData();
  img: any = '';
  fileName: any = '';
  category: string;
  ngOnInit(): void {
    this.createSearchForm();
    // this.onSearch();
  }
  onMapClick(e) {
    e.target.closePopup();
    this.map.setView(e.latlng, 13);
    this.data = JSON.parse(e.target._popup._content);
  }
  onChangeCategory(data: any) {
    this.category = data;
  }
  onRemove() {
    console.log(this.fileToUpload);
    this.fileToUpload = null;
    this.img = '';
    this.fileName = null;
    this.isData = true;
  }
  createSearchForm() {
    this.searchForm = this.fb.group(
      {
        name: [''],
        local: ['']
      });
  }
  onSearch() {
    this.form = new FormData();
    if (this.fileToUpload) {
      const reader = new FileReader();
      reader.readAsDataURL(this.fileToUpload);
      this.form.append('image', reader.result.toString());
      reader.onload = () => {
        this.form.append('image', reader.result.toString());
        this.img = reader.result;
        this.searchService.get(reader.result.toString().split(',')[1])
          .subscribe(res => {
            this.obj = res.restaurants;
            if (res.restaurants == 0) {
              this.isData = false;
            }
            for (let i = 0; i < this.obj.length; i++) {
              this.markerData.push(marker(this.obj[i].coordination, {
                icon: icon({
                  iconSize: [25, 45],
                  iconUrl: 'marker-icon.png',
                })
              }
              )
                .bindPopup(JSON.stringify({ index: i, ... this.obj[i] }))
                .bindTooltip(this.obj[i].name)
                .on('click', (e) => {
                  this.zone.run(() => this.onMapClick(e));
                }));
            }
          }, error => {
            this.isData = false;
          });
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    } else if (this.category) {
      // this.form.append('category', this.category);
      this.searchService.search(this.category)
        .subscribe(res => {
          console.log(res);
          this.obj = res.restaurants;
          if (res.restaurants == 0) {
            this.isData = false;
          }
          for (let i = 0; i < this.obj.length; i++) {
            this.markerData.push(marker(this.obj[i].coordination, {
              icon: icon({
                iconSize: [25, 45],
                iconUrl: 'marker-icon.png',
              })
            }
            )
              .bindPopup(JSON.stringify({ index: i, ... this.obj[i] }))
              .bindTooltip(this.obj[i].name)
              .on('click', (e) => {
                this.zone.run(() => this.onMapClick(e));
              }));
          }
        }, error => {
          this.isData = false;
        });
    }
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  cancelFile(file: File) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }
  // tslint:disable-next-line: no-shadowed-variable
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
    setTimeout(() => {
      return this.onLocationFound();
    }, 100);
  }
  onLocationFound() {
    if (!this.myLocate) {
      this.map.locate({ setView: true, maxZoom: 13, watch: true, enableHighAccuracy: true });
      this.map.on('locationfound', (e) => {
        this.zone.run(() => {
          this.myLocate = marker(e.latlng, {
            icon: icon({
              iconSize: [25, 40],
              iconUrl: 'marker-icon.png',
            })
          }).bindPopup('Bạn đang ở đây').openPopup();
          setTimeout(() => {
            return this.onLocationFound();
          }, 100);
        });
      });
    } else {
      this.map.setView(this.myLocate._latlng, 13);
      this.myLocate.openPopup();
    }
  }
}
