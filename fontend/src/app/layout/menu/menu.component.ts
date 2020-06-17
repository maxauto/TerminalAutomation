import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthService, public alertify: AlertifyService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  loggedIn(){
    return this.authService.loggedIn();
  }
  logout(){
    this.toastr.success('logged out');
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
