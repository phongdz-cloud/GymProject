import {Component, OnInit} from '@angular/core';
import {Gym} from "../model/gym";
import {User} from "../model/user";
import {SportsMan} from "../model/sports-man";
import {Train} from "../model/train";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  gym: Gym = {} as Gym;
  user: User = {} as User;
  sportsMan: SportsMan = {} as SportsMan;
  train: Train = {} as Train;
  showProgressBar = false;
  username: string;
  gender: any = {};
  constructor() {
  }

  ngOnInit(): void {
  }
  setGender(){
    this.sportsMan.sex = this.gender
  }
  addSportsMan(){

  }
  addGym(){

  }
  home(){

  }
  logout(id: string){

  }

}
