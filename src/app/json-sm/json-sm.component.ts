import { Component, OnInit  } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-json-sm',
  templateUrl: './json-sm.component.html',
  styleUrls: ['./json-sm.component.css']
})
export class JsonSmComponent implements OnInit{
  tasks: string[] = ["Tasksn: 001","Takssn:002" ];

  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit(){
    console.log(this.route.snapshot.params["jsonIndex"]);
}
}
