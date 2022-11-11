import { Component } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularNewTest';
  observableData1 = '';
  observableData2 = '';
  subjectData1 = '';
  subjectData2 = '';

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
