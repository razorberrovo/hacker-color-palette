import { Component, OnInit } from '@angular/core';
import * as flatJson from './../../../assets/json/material.json';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.scss']
})
export class FlatComponent implements OnInit {

  flatColors = (flatJson as any).default;
  constructor() { }

  ngOnInit(): void {
  }

}
