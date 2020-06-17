import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';
import { Datalegger } from 'src/app/models/data/data.model';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  dataledger: Datalegger[];
  trick: boolean;
  SearchBy: string;
  ref: string;
  constructor(private networkService: NetworkService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }



  Searchdata(ledger:string){

    this.networkService.getLedger(ledger).subscribe(
      output =>
      {
        this.trick = true;
        this.dataledger = output.result;
        this.dataledger.forEach((item)=>{
          if (item.type == "Debit"){
            item.debit = item.amount.toLocaleString();
            item.credit = " ";
          }
          else if (item.type == "Credit"){
            item.debit = " ";
            item.credit = item.amount.toLocaleString();
            item.description = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"+item.description;
          }
        });
        this.ref = ledger;
        if (ledger == "101"){
          this.SearchBy = "cash";
        }
        else if (ledger == "112"){
          this.SearchBy = "Account Receivable";
        }
        else if (ledger == "157"){
          this.SearchBy = "Inventory";
        }
        else if (ledger == "201"){
          this.SearchBy = "Account Payable";
        }
      }
    );
  }

}
