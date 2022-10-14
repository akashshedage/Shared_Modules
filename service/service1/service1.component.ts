import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this._router.navigate(['service']);
  } 

}
