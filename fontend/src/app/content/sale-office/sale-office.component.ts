import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';
import { DataPOPaper } from 'src/app/models/data/data.model';

@Component({
  selector: 'app-sale-office',
  templateUrl: './sale-office.component.html',
  styleUrls: ['./sale-office.component.css']
})
export class SaleOfficeComponent implements OnInit {

  POData: DataPOPaper[];

  constructor(private networkService: NetworkService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  searchpo(PO: string){

    this.networkService.getPOPaper(PO).subscribe(
      output =>
      {
        
        this.POData = output.result;

      }
    );
  }
}
 