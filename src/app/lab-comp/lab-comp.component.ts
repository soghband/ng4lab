import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-comp',
  templateUrl: './lab-comp.component.html',
  styleUrls: ['./lab-comp.component.css']
})
export class LabCompComponent implements OnInit {
    test_lab = "Lab test show var";
    name = [{name:"a",child:["a1","a2","a3"]},
        {name:"b",child:["b1","b2"]},
        {name:"c",child:["c1","c2","c3","c4"]}]
  constructor() {

  }

  ngOnInit() {

  }

}
