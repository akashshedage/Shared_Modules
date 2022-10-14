import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this._router.navigate(['service']);
  }

}
