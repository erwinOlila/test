import { Component, OnInit, Input } from '@angular/core';
//import { BspanelComponent } from '../bspanel/bspanel.component';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
@Input() title;
  constructor() { }

  ngOnInit() {
  }

}
