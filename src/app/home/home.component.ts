import { Component, OnInit } from '@angular/core';
import {Gym} from "../model/gym";
import {User} from "../model/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gyms: Gym[];
  user: User = {} as User;
  username: any;
  constructor() { }

  ngOnInit(): void {
  }

  logout(id: string){

  }

}
