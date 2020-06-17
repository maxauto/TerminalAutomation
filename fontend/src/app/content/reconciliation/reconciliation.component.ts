import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';
import { DataPOPaper } from 'src/app/models/data/data.model';

@Component({
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.component.html',
  styleUrls: ['./reconciliation.component.css']
})
export class ReconciliationComponent implements OnInit {

  ReconciliationData: DataPOPaper[];
  trick: boolean;
  constructor(private networkService: NetworkService, private toastr: ToastrService) { }
  ngOnInit(): void {
    
  }
  searchre(month: string){

    this.networkService.getReconciliation(month).subscribe(
      output =>
      {
        this.trick = true;
        this.ReconciliationData = output.result;
        

      }
    );
  }
}
