import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';
import { DataIncome } from 'src/app/models/data/data.model';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  dataIncome: DataIncome[];
  trick: boolean;
  constructor(private networkService: NetworkService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  searchincome(month: string){

    this.networkService.getIncome(month).subscribe(
      output =>
      {

        this.dataIncome = output.result;
        this.trick = true;
      }
    );
  }

}
 