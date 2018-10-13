import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    
    this.activateRoute.params.subscribe( 
      params => {
        console.log(params)
        let usNM=params.usNm;
      let usPwd=params.usPwd;
      });
    
    

  }
}
