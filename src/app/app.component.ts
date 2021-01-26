import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'intro2angular';

  name = "rah";
  getName(){
    return this.name +"ul";
  }

  obj={
    a : "one",
    b : 2
  }
  
  arr = [9,8,7,6];

  getSome(){
    alert("Rahul P Rajesh");
  };

  getSome2(name){
    alert(name);
  }
}
