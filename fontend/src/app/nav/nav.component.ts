import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, public alertify: AlertifyService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.toastr.success('logged in successfully','success!');
      this.router.navigate(['/dashboard1']);
    }, error => {
      this.toastr.error(error,'Error!');
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }
}
