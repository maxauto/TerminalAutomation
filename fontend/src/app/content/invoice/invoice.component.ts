import { Component, OnInit } from '@angular/core';
import { DataInvoice } from 'src/app/models/data/data.model';
import { NetworkService } from 'src/app/_services/network.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
 
  InvoiceData: DataInvoice[];

  constructor(private networkService: NetworkService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  print(): void {
    let printContents, popupWin;
    const stylesHtml = this.getTagsHtml('style');
    const linksHtml = this.getTagsHtml('link');
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
      <head>
      ${linksHtml}
      ${stylesHtml}
      </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
private getTagsHtml(tagName: keyof HTMLElementTagNameMap): string
{
    const htmlStr: string[] = [];
    const elements = document.getElementsByTagName(tagName);
    for (let idx = 0; idx < elements.length; idx++)
    {
        htmlStr.push(elements[idx].outerHTML);
    }

    return htmlStr.join('\r\n');
}

searchinvoice(IV: string){

  this.networkService.getInvoice(IV).subscribe(
    output =>
    {
      this.InvoiceData = output.result;

    }
  );
}
}
