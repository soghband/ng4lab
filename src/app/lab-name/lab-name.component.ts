import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-name',
  templateUrl: './lab-name.component.html',
  styleUrls: ['./lab-name.component.css']
})
export class LabNameComponent implements OnInit {
    @Input() child;
    child_data = [];
  constructor() { }

  ngOnInit() {
    this.child_data = this.child;
  }
    testEvent(val) {
      console.log(val);
    }
}
