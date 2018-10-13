import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onGo(usNm:string,pwd:string){
    console.log('username-->',usNm , 'Password-->',pwd);
    if(usNm === "android" && pwd === "android"){
      this.router.navigate(['/second',{'usNm':usNm,'usPwd':pwd}]);
    }

  }

}
