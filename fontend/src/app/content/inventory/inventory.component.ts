import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';
import { DataIncome } from 'src/app/models/data/data.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  trick: boolean;
  datastock: DataIncome[];
  constructor(private networkService: NetworkService, private toastr: ToastrService) { }

  ngOnInit(): void {
  } 

  searchdata(month: string){
    this.networkService.getIncome(month).subscribe(
      output =>
      {

        this.datastock = output.result;
        this.trick = true;
      }
    );
  }

}
