import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{

  cars:any[];
  hideCars:boolean;
  constructor(){
    this.hideCars=true;
    //array of cars
  this.cars=[
    {
      make:"Audi",
      model:"A5",
      year: 2019
  
    },
    {
      make:"Lamborgini",
      model:"L65gy",
      year: 2018
  
    },
    {
      make:"Mahindara",
      model:"Thar",
      year: 2019
  
    }
  
  ]
  }

  public getCars(){
    return this.cars;
  }

  toggleCars() {
    this.hideCars = !this.hideCars;
  }

  ngOnInit(): void {
  }

}