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
  friendsOfFriendsArray: any[] = [];
  SuggestedFriendsArray: any[] = [];
  FriendsArray: any[] = [];
  user:any;
  GetUser() {
    this.FriendsArray = [];
    this.SuggestedFriendsArray=[];
    this.friendsOfFriendsArray = [];
    if(this.x==undefined|| this.x==null||this.x==0){
      for(var n = 0; n<20; n++)
      {
        if(this.persons[n]["firstName"]==this.name){
          this.x = n + 1;
          this.user=this.persons[this.x-1]
        }
        
      }
    }
    else
        {
          this.user=this.persons[this.x-1]

        }

  }


  
  friends(){
    for (var f of this.user["friends"]) {
      if(this.user["friends"]!=this.user["id"]){
      this.FriendsArray.push(this.persons[f-1]);
      }
    }    
  }
  
  friendsOfFriends(){
    let friends = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    for (var friendID of this.persons[this.x-1]["friends"]) {
      for (var friendOfFriendID of this.persons[<any>friendID - 1]["friends"]) {
        if(friendOfFriendID!=this.user["id"]){
        friends[<any>friendOfFriendID - 1] = true;
      }
    }

  }
  for(var FOF in friends){
    if(friends[FOF]&& (<any>FOF+1!=this.x)){
      this.friendsOfFriendsArray.push(this.persons[FOF]);
    }
  }
}
  suggestedFriends(){
    let friends =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (var friendID of this.persons[this.x-1]["friends"]) {
      for (var friendOfFriendID of this.persons[<any>friendID - 1]["friends"]) {
        if(friendOfFriendID!=this.user["id"]){
          friends[<any>friendOfFriendID - 1]++ ;
      }
    }

    }

    for(var SF in friends){
      if(friends[SF]>=2 && (<any>SF+1!=this.x))
     {
       this.SuggestedFriendsArray.push(this.persons[SF]);
       }
   }
  }
}