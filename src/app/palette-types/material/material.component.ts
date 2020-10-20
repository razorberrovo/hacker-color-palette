import { Component, OnInit } from '@angular/core';
import * as materialJson from './../../../assets/json/material.json';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  materialColors = (materialJson as any).default;
  constructor() { }

  ngOnInit() {
  }

}
