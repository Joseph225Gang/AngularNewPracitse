import { Component, OnInit, Attribute } from '@angular/core';
import { AppHelloWorldDirective} from '../custom-button.directive';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {

  num: number = 5;
  
  constructor(@Attribute('color')private color:string) { 
    alert(color);
  }

  ngOnInit() {
  }

  onClick(){
    alert('fontSize');
    this.num = 10;
  }

}
