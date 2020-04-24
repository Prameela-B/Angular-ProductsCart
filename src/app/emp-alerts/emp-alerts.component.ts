import { Component, OnInit } from '@angular/core'; 
import { Input } from '@angular/core'; 
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-alerts',
  templateUrl: './emp-alerts.component.html',
  styleUrls: ['./emp-alerts.component.css']
})
export class empAlertsComponent implements OnInit {

  @Input() emp; 
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}