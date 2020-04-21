import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tagname',
  templateUrl: './tagname.component.html',
  styleUrls: ['./tagname.component.css']
})
export class TagnameComponent implements OnInit {
  tagvalues: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTagValue();
  }

  getTagValue(){
    this.http.get('https://localhost:5000/api/getdata').subscribe(response => {
      this.tagvalues = response;
    }, error => {
      console.log(error);
    });
  }

}
