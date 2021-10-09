import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";
import {StorageService} from "../service/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {} as User;

  constructor(private router: Router, private storageService: StorageService) {
  }

  ngOnInit(): void {
  }

  login() {
    console.log("Vao event login!")
    this.storageService.findUserByUsername(this.user.username).subscribe(user => {
      console.log(user)
      if (user == null) {
        console.log("user == null")
        if (this.user.username == 'admin' && this.user.password == 'admin') {
          if (this.user != null) {
            this.user.isAdmin = true;
            this.storageService.addUser(this.user).subscribe(addUser => {
              this.user = addUser;
              console.log("admin dashboard")
              this.router.navigate(['/admin-dashboard/', this.user.username]);
              this.storageService.saveUsername(this.user.username)
            })
          }
        } else {
          console.log("user != null")
          if (this.user != null) {
            this.user.isAdmin = false;
            this.storageService.addUser(this.user).subscribe(addUser => {
              this.user = addUser;
              this.storageService.saveUsername(this.user.username);
              console.log("code a live!")
              this.router.navigate(['/home/', this.user.username]);
              console.log("code a router!")
            })
          }
        }
      } else {
        console.log("user != null else")
        this.storageService.findUserByUsername(this.user.username).subscribe(user => {
          if (this.user.username == 'admin' && this.user.password == 'admin') {
            if (this.user != null) {
              this.user.isAdmin = true;
              this.storageService.editUser(this.user, user.id).subscribe(addUser => {
                this.user = addUser;
                this.router.navigate(['/admin-dashboard', this.user.username]);
                this.storageService.saveUsername(this.user.username);
              })
            }
          } else {
            if (this.user != null) {
              this.user.isAdmin = false;
              this.storageService.editUser(this.user, user.id).subscribe(addUser => {
                this.user = addUser;
                this.storageService.saveUsername(this.user.username);
                this.router.navigate(['/home/', this.user.username]);
              })
            }
          }
        })
      }
    })
  }
}
