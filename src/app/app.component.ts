import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Social App';
  private persons: any;
  constructor(public http:HttpClient) {}

  ngOnInit() {
    this.http.get("assets/data.json").subscribe(data => {
      this.persons = data;
    });
  }
  x:number
  name:string
  n:number=0;
  i:number=0
  l:number=0
  y:number
  a:number
  z:number
  user() {

    (function () {
      
      var old = console.log;
      var logger = document.getElementById('log');
      logger.innerHTML=" ";
      console.log = function (message) {
          if (typeof message == 'object') {
              logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
          } else {
              logger.innerHTML += message + '<br />';
          }
        }
    })();
    if(this.x==undefined|| this.x==null||this.x==0){
      for(var n = 0; n<20; n++)
      {
        if(this.persons[n]["firstName"]==this.name){
          this.x = n + 1;
          console.log(this.x)
          console.log("The user:")
          console.log("");
          console.log("ID:"+"      "+this.persons[this.x-1]["id"]),
          console.log("Name:"+"      "+this.persons[this.x-1]["firstName"]+"      "+this.persons[this.x-1]["surname"]),
          console.log("age:"+"      "+this.persons[this.x-1]["age"]), 
          console.log("gender:"+"      "+this.persons[this.x-1]["gender"],);
          console.log("");
          console.log("");
        }
        
      }
    }
    else
        {
          console.log("The user:")
          console.log("");
          console.log("ID:"+"      "+this.persons[this.x-1]["id"]),
          console.log("Name:"+"      "+this.persons[this.x-1]["firstName"]+"      "+this.persons[this.x-1]["surname"]),
          console.log("age:"+"      "+this.persons[this.x-1]["age"]), 
          console.log("gender:"+"      "+this.persons[this.x-1]["gender"],);
          console.log("");
          console.log("");
        }

  }


  
  friends(){
    console.log("His Friends:")
    console.log("");
    this.a=this.x;
    while(this.persons[this.x-1]["friends"][this.i]){
      this.y=this.persons[this.x-1]["friends"][this.i]
      console.log("ID:"+"      "+this.persons[this.y-1]["id"]),
      console.log("Name:"+"      "+this.persons[this.y-1]["firstName"]+"      "+this.persons[this.y-1]["surname"]),
      console.log("age:"+"      "+this.persons[this.y-1]["age"]), 
      console.log("gender:"+"      "+this.persons[this.y-1]["gender"],);
      console.log("");
      console.log("");
      this.i++;
      }
    }
  
  friendsOfFriends(){
    let friends = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    for (var friendID of this.persons[this.x-1]["friends"]) {
      for (var friendOfFriendID of this.persons[<any>friendID - 1]["friends"]) {
        friends[<any>friendOfFriendID - 1] = true;
      }
    }
    console.log("friends of friends\n");
    for(var FOF in friends){
      if(friends[FOF]&& (<any>FOF+1!=this.x)){
        
      console.log("ID:"+"      "+this.persons[FOF]["id"]),
      console.log("Name:"+"      "+this.persons[FOF]["firstName"]+"      "+this.persons[FOF]["surname"]),
      console.log("age:"+"      "+this.persons[FOF]["age"]), 
      console.log("gender:"+"      "+this.persons[FOF]["gender"],);
      }
    }
  }
  
  suggestedFriends(){
    let friends =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (var friendID of this.persons[this.x-1]["friends"]) {
      for (var friendOfFriendID of this.persons[<any>friendID - 1]["friends"]) {
        friends[<any>friendOfFriendID - 1]++ ;
      }
    }
    console.log("Suggested friends\n");
    console.log("")
    console.log("")
    for(var SF in friends){
      if(friends[SF]>=2 && (<any>SF+1!=this.x))
      {
      console.log("ID:"+"      "+this.persons[SF]["id"]),
      console.log("Name:"+"      "+this.persons[SF]["firstName"]+"      "+this.persons[SF]["surname"]),
      console.log("age:"+"      "+this.persons[SF]["age"]), 
      console.log("gender:"+"      "+this.persons[SF]["gender"],);
      }
    }
  }


}
    