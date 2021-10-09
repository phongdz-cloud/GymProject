import { Component, OnInit } from '@angular/core';
import {Gym} from "../../model/gym";
import {User} from "../../model/user";

@Component({
  selector: 'app-find-all-gyms',
  templateUrl: './find-all-gyms.component.html',
  styleUrls: ['./find-all-gyms.component.css']
})
export class FindAllGymsComponent implements OnInit {
  gym: Gym = {} as Gym;
  user: User = {} as User
  username: any;
  constructor() { }

  ngOnInit(): void {
  }

  openEditGym(id: string){

  }

  deleteGym(id:string){

  }

}
