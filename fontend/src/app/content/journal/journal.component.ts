import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';
import { Datajournal } from 'src/app/models/data/data.model';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  trick: boolean;
  datajournal: Datajournal[];
  debitdata: any;
  jRef: string;
  ref: number;
  constructor(private networkService: NetworkService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Searchjournal(date: string){
    this.networkService.getJournal(date).subscribe(
      output =>
      {
        this.trick = true;
        this.datajournal = output.result;
        this.debitdata = Array((this.datajournal.length / 2)).fill(1);
        this.ref = +date.slice(8);
        this.jRef = "J" + this.ref.toString();
        
      }
    );
  }

}
