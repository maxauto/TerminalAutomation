import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataAll, DataAllStation, DataAllBay, DataAllEG, DataAllPOPaper, DataAllInvoice, DataAlljournal, DataAllledger, DataAllIC } from '../models/data/data.model';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private readonly DIESEL_FillVol_url = "https://localhost:5000/api/DIESELdailyFillVolVal/";
  private readonly GASOHOL95_FillVol_url = "https://localhost:5000/api/GAS95dailyFillVolVal/";
  private readonly DIESEL_Cycle_url = "https://localhost:5000/api/DIESELavgCycleTVal/";
  private readonly GASOHOL95_Cycle_url = "https://localhost:5000/api/GAS95avgCycleTVal/";
  private readonly SaleOffice_waitT_url = "https://localhost:5000/api/SOdailyavgWaitTVal/";
  private readonly IW_waitT_url = "https://localhost:5000/api/IWBdailyAvgWaitTVal/";
  private readonly DIESAL_waitT_url = "https://localhost:5000/api/DIESELdailyAvgWaitTVal/";
  private readonly GASOHOL95_waitT_url = "https://localhost:5000/api/GAS95dailyAvgWaitTVal/";
  private readonly OW_waitT_url = "https://localhost:5000/api/OWBdailyAvgWaitTVal/";
  private readonly SO_NumQ_url = "https://localhost:5000/api/SOdailyAvgQVal/";
  private readonly IW_NumQ_url = "https://localhost:5000/api/IWBdailyAvgQVal/";
  private readonly DIESEL_NumQ_url = "https://localhost:5000/api/DIESELdailyAvgQVal/";
  private readonly GASOHOL95_NumQ_url = "https://localhost:5000/api/GAS95dailyAvgQVal/";
  private readonly OW_NumQ_url = "https://localhost:5000/api/OWBdailyAvgQVal/";
  private readonly SO_SCH_url = "https://localhost:5000/api/SOdailyAvgSchUVal/";
  private readonly IW_SCH_url = "https://localhost:5000/api/IWBdailyAvgSchUVal/";
  private readonly DIESEL_SCH_url = "https://localhost:5000/api/DIESELdailyAvgSchUVal/";
  private readonly GASOHOL95_SCH_url = "https://localhost:5000/api/GAS95dailyAvgSchUVal/";
  private readonly OW_SCH_url = "https://localhost:5000/api/OWBdailyAvgSchUVal/";
  private readonly DIESEL_WIP_url = "https://localhost:5000/api/DIESELdailyAvgWIPVal/";
  private readonly GASOHOL95_WIP_url = "https://localhost:5000/api/GAS95dailyAvgWIPVal/";
  private readonly Truck_In_url = "https://localhost:5000/api/dailyTruckInVal/";
  private readonly Truck_Out_url = "https://localhost:5000/api/dailyTruckOutVal/";
  private readonly DIESEL_FillVol_mo_url = "https://localhost:5000/api/DIESELmoFillVolVal/";
  private readonly GASOHOL95_FillVol_mo_url = "https://localhost:5000/api/GAS95moFillVolVal/";
  private readonly DIESEL_Cycle_mo_url = "https://localhost:5000/api/DIESELmoavgCycleTVal/";
  private readonly GASOHOL95_Cycle_mo_url = "https://localhost:5000/api/GAS95moavgCycleTVal/";
  private readonly SaleOffice_waitT_mo_url = "https://localhost:5000/api/SOmoavgWaitTVal/";
  private readonly IW_waitT_mo_url = "https://localhost:5000/api/IWBmoAvgWaitTVal/";
  private readonly DIESAL_waitT_mo_url = "https://localhost:5000/api/DIESELmoAvgWaitTVal/";
  private readonly GASOHOL95_waitT_mo_url = "https://localhost:5000/api/GAS95moAvgWaitTVal/";
  private readonly OW_waitT_mo_url = "https://localhost:5000/api/OWBmoAvgWaitTVal/";
  private readonly SO_NumQ_mo_url = "https://localhost:5000/api/SOmoAvgQVal/";
  private readonly IW_NumQ_mo_url = "https://localhost:5000/api/IWBmoAvgQVal/";
  private readonly DIESEL_NumQ_mo_url = "https://localhost:5000/api/DIESELmoAvgQVal/";
  private readonly GASOHOL95_NumQ_mo_url = "https://localhost:5000/api/GAS95moAvgQVal/";
  private readonly OW_NumQ_mo_url = "https://localhost:5000/api/OWBmoAvgQVal/";
  private readonly SO_SCH_mo_url = "https://localhost:5000/api/SOmoAvgSchUVal/";
  private readonly IW_SCH_mo_url = "https://localhost:5000/api/IWBmoAvgSchUVal/";
  private readonly DIESEL_SCH_mo_url = "https://localhost:5000/api/DIESELmoAvgSchUVal/";
  private readonly GASOHOL95_SCH_mo_url = "https://localhost:5000/api/GAS95moAvgSchUVal/";
  private readonly OW_SCH_mo_url = "https://localhost:5000/api/OWBmoAvgSchUVal/";
  private readonly DIESEL_WIP_mo_url = "https://localhost:5000/api/DIESELmoAvgWIPVal/";
  private readonly GASOHOL95_WIP_mo_url = "https://localhost:5000/api/GAS95moAvgWIPVal/";
  private readonly Truck_In_mo_url = "https://localhost:5000/api/moTruckInVal/";
  private readonly Truck_Out_mo_url = "https://localhost:5000/api/moTruckOutVal/";

  private readonly Truck_ID_SO_url = "https://localhost:5000/api/getSOData/Tid/";
  private readonly Truck_ID_IW_url = "https://localhost:5000/api/getIWBData/Tid/";
  private readonly Truck_ID_Bay_url = "https://localhost:5000/api/getBayData/Tid/";
  private readonly Truck_ID_OW_url = "https://localhost:5000/api/getOWBData/Tid/";
  private readonly Truck_ID_EG_url = "https://localhost:5000/api/getEGData/Tid/";
 
  private readonly PO_SO_url = "https://localhost:5000/api/getSOData/Po/";
  private readonly PO_IW_url = "https://localhost:5000/api/getIWBData/Po/";
  private readonly PO_Bay_url = "https://localhost:5000/api/getBayData/Po/";
  private readonly PO_OW_url = "https://localhost:5000/api/getOWBData/Po/";
  private readonly PO_EG_url = "https://localhost:5000/api/getEGData/Po/";

  private readonly DI_SO_url = "https://localhost:5000/api/getSOData/Din/";

  private readonly DO_EG_url = "https://localhost:5000/api/getEGData/Din/";

  private readonly Reconciliation_url = "https://localhost:5000/api/getReconShtData";
  private readonly POPaper_url = "https://localhost:5000/api/getpodata/";
  private readonly Invoice_url = "https://localhost:5000/api/getInvoiceData/";
 
  private readonly Journal_url = "https://localhost:5000/api/getjournaldata/"
  private readonly Ledger_url = "https://localhost:5000/api/GetLedger/"
  private readonly Income_url = "https://localhost:5000/api/getIncomeStm/"
  
  constructor(private httpClient: HttpClient) { }

  getDIESEL_FillVol(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESEL_FillVol_url + date);
  }

  getGASOHOL95_FillVol(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_FillVol_url + date);
  }
  getDIESEL_Cycle(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESEL_Cycle_url + date);
  }
  getGASOHOL95_Cycle(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_Cycle_url + date);
  }
  getSO_waitT(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.SaleOffice_waitT_url + date);
  }
  getIW_waitT(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.IW_waitT_url + date);
  }
  getDIESEL_waitT(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESAL_waitT_url + date);
  }
  getGASOHOL95_waitT(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_waitT_url + date);
  }
  getOW_waitT(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.OW_waitT_url + date);
  }
  getSO_Numq(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.SO_NumQ_url + date);
  }
  getIW_Numq(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.IW_NumQ_url + date);
  }
  getDIESEL_Numq(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESEL_NumQ_url + date);
  }
  getGASOHOL95_Numq(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_NumQ_url + date);
  }
  getOW_Numq(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.OW_NumQ_url + date);
  }
  getSO_Sch(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.SO_SCH_url + date);
  }
  getIW_Sch(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.IW_SCH_url + date);
  }
  getDIESEL_Sch(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESEL_SCH_url + date);
  }
  getGASOHOL95_Sch(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_SCH_url + date);
  }
  getOW_Sch(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.OW_SCH_url + date);
  }
  getDIESEL_wip(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESEL_WIP_url + date);
  }
  getGASOHOL95_wip(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_WIP_url + date);
  }
  getTRUCK_IN(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.Truck_In_url + date);
  }
  getTRUCK_OUT(date: string): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.Truck_Out_url + date);
  }
  getmoDIESEL_FillVol(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESEL_FillVol_mo_url);
  }

  getmoGASOHOL95_FillVol(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_FillVol_mo_url);
  }
  getmoDIESEL_Cycle(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESEL_Cycle_mo_url);
  }
  getmoGASOHOL95_Cycle(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_Cycle_mo_url);
  }
  getmoSO_waitT(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.SaleOffice_waitT_mo_url);
  }
  getmoIW_waitT(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.IW_waitT_mo_url);
  }
  getmoDIESEL_waitT(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESAL_waitT_mo_url);
  }
  getmoGASOHOL95_waitT(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_waitT_mo_url);
  }
  getmoOW_waitT(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.OW_waitT_mo_url);
  }
  getmoSO_Numq(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.SO_NumQ_mo_url);
  }
  getmoIW_Numq(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.IW_NumQ_mo_url);
  }
  getmoDIESEL_Numq(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESEL_NumQ_mo_url);
  }
  getmoGASOHOL95_Numq(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_NumQ_mo_url);
  }
  getmoOW_Numq(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.OW_NumQ_mo_url);
  }
  getmoSO_Sch(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.SO_SCH_mo_url);
  }
  getmoIW_Sch(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.IW_SCH_mo_url);
  }
  getmoDIESEL_Sch(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESEL_SCH_mo_url);
  }
  getmoGASOHOL95_Sch(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_SCH_mo_url);
  }
  getmoOW_Sch(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.OW_SCH_mo_url);
  }
  getmoDIESEL_wip(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.DIESEL_WIP_mo_url);
  }
  getmoGASOHOL95_wip(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.GASOHOL95_WIP_mo_url);
  }
  getmoTRUCK_IN(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.Truck_In_mo_url);
  }
  getmoTRUCK_OUT(): Observable<DataAll>{
    return this.httpClient.get<DataAll>(this.Truck_Out_mo_url);
  }

  getSOTruckByID(data:string): Observable<DataAllStation>{
    return this.httpClient.get<DataAllStation>(this.Truck_ID_SO_url + data);
  }
  getIWTruckByID(data:string): Observable<DataAllStation>{
    return this.httpClient.get<DataAllStation>(this.Truck_ID_IW_url + data);
  }
  getBayTruckByID(data:string): Observable<DataAllBay>{
    return this.httpClient.get<DataAllBay>(this.Truck_ID_Bay_url + data);
  }
  getOWTruckByID(data:string): Observable<DataAllStation>{
    return this.httpClient.get<DataAllStation>(this.Truck_ID_OW_url + data);
  }
  getEGTruckByID(data:string): Observable<DataAllEG>{
    return this.httpClient.get<DataAllEG>(this.Truck_ID_EG_url + data);
  }
  getSOTruckByPO(data:string): Observable<DataAllStation>{
    return this.httpClient.get<DataAllStation>(this.PO_SO_url + data);
  }
  getIWTruckByPO(data:string): Observable<DataAllStation>{
    return this.httpClient.get<DataAllStation>(this.PO_IW_url + data);
  }
  getBayTruckByPO(data:string): Observable<DataAllBay>{
    return this.httpClient.get<DataAllBay>(this.PO_Bay_url + data);
  }
  getOWTruckByPO(data:string): Observable<DataAllStation>{
    return this.httpClient.get<DataAllStation>(this.PO_OW_url + data);
  }
  getEGTruckByPO(data:string): Observable<DataAllEG>{
    return this.httpClient.get<DataAllEG>(this.PO_EG_url + data);
  }
  getSOTruckByDi(data: string): Observable<DataAllStation>{
    return this.httpClient.get<DataAllStation>(this.DI_SO_url + data);
  }
  getEGTruckByDo(data:string): Observable<DataAllEG>{
    return this.httpClient.get<DataAllEG>(this.DO_EG_url + data);
  }
  getReconciliation(month: string): Observable<DataAllPOPaper>{
    return this.httpClient.get<DataAllPOPaper>(this.Reconciliation_url);
  }
  getPOPaper(PO: string): Observable<DataAllPOPaper>{
    return this.httpClient.get<DataAllPOPaper>(this.POPaper_url + PO);
  }
  getInvoice(IV: string): Observable<DataAllInvoice>{
    return this.httpClient.get<DataAllInvoice>(this.Invoice_url + IV);
  }
  getJournal(date: string): Observable<DataAlljournal>{
    return this.httpClient.get<DataAlljournal>(this.Journal_url + date);
  }
  getLedger(ref: string): Observable<DataAllledger>{
    return this.httpClient.get<DataAllledger>(this.Ledger_url + ref);
  }
  getIncome(month: string): Observable<DataAllIC>{
    return this.httpClient.get<DataAllIC>(this.Income_url);
  }

}