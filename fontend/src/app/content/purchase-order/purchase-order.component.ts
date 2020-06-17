import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';
import { DataPOPaper } from 'src/app/models/data/data.model';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

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
