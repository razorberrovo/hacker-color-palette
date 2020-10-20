import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @Input() color: string;
  showCopyOption = false;
  constructor() { }

  ngOnInit() {
  }

  copyColor(colorCode) {
    console.log(this.color);
    colorCode.select();
    document.execCommand('copy');
    colorCode.setSelectionRange(0, 0);
  }

}
