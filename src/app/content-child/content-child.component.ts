import { Component, OnInit, ContentChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {

  @ContentChild('lastHead', {static: false}) lastHead : ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onChangeColor() {
    console.dir(this.lastHead);
    this.lastHead.nativeElement.style.color = "blue";
  }
  
}
