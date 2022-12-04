import { Component, OnInit, Optional, ViewChild} from '@angular/core';
import { FontSizeComponent} from './font-size/font-size.component';
import { Observable, Subject } from 'rxjs';
import { NumberService} from '../service/number.service';
import {NumServiceProvider} from '../service/number.service.provider';

@Component({
  selector: 'app-root',
  providers: [NumServiceProvider],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(FontSizeComponent, {static: true}) fontControl: FontSizeComponent;
  num: number = 0;
  title = 'angularNewTest';
  observableData1 = '';
  observableData2 = '';
  subjectData1 = '';
  subjectData2 = '';

  constructor(@Optional() private numService: NumberService)
  {
    console.log(this.numService.getNum());
  }

  ngOnInit(): void {
    this.fontControl.onClick();
    console.log(this.fontControl.num);
  }
  
  getObservableData(){
    let myObservable = new Observable<any>(observable => {
      observable.next(Math.floor(Math.random() * 99) + 1);
    })
    myObservable.subscribe(data =>{
      this.observableData1 = data;
    })

    myObservable.subscribe(data =>{
      this.observableData2 = data;
    })
  }

  getSubjectData(){
    let mySubject = new Subject();
    //mySubject.next("Please subscribe to WebTechTalk");
    mySubject.subscribe((data: string) => {
      this.subjectData1 = data;
    })
    mySubject.subscribe((data: string) => {
      this.subjectData2 = data;
    })
    mySubject.next(Math.floor(Math.random() * 99) + 1);
  }
}
