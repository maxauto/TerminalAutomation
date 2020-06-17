import { DebugEventListener } from '@angular/core'

export class DataValue { 
  Timestamp: string
  value: number
}

export class DataBay {
  serviceId: string
  dateIn: string
  timeIn: string
  poNo: string
  dateOut: string
  timeOut: string
  serviceTime: number
  gasType: string
  truckId: string
  quantity: number
}

export class DataEG {
  serviceId: string
  dateIn: string
  timeIn: string
  poNo: string
  truckId: string
}

export class DataStation {
  serviceId: string
  dateIn: string
  timeIn: string
  poNo: string
  dateOut: string
  timeOut: string
  serviceTime: number
  truckId: string
}


export class DataPOPaper {
  date: string
  poNo: string
  paymentNo: string
  invoiceNo: string
  gasType: string
  price: number
  quantity: number
  amount: number
  customerId: string
  name: string
  taxPayerId: string
  phoneNo: string
  truckId: string
  truckDriverName: string
}

export class DataInvoice {
  date: string
  poNo: string
  paymentNo: string
  invoiceNo: string
  gasType: string
  serviceTime: number
  price: number
  quantity: number
  amount: number
  customerId: string
  name: string
  taxPayerId: string
  address: string
}

export class  Datajournal {
  date: string
  description: string
  refNo: string
  amount: number
  type: string
  checkType: boolean
}

export class  Datalegger {
  transactionId: number
  date: string
  description: string
  refNo: string
  poNo: string
  amount: number
  type: string
  jRefNo: string
  balance: number
  debit: string
  credit: string
}

export class DataIncome {
  saleGAS95: number;
  saleDIESEL: number;
  totalSale: number;
  cogsgaS95: number;
  cogsdiesel: number;
  totalCOGS: number;
  grossProfit: number;
  salarySOS: number;
  salaryGC: number;
  totalSalary: number;
  utilityExp: number;
  depreciation: number;
  netIncome: number;
  beginGAS95: number;
  beginDIESEL: number;
  purchaseGAS95: number;
  purchaseDIESEL: number;
  endGAS95: number;
  endDIESEL: number;
}

export interface DataAllIC{
  result: DataIncome[],
  message: string
}

export interface DataAll {
  result: DataValue[],
  message: string
}
export interface DataAllStation {
  result: DataStation[],
  message: string
}

export interface DataAllBay {
  result: DataBay[],
  message: string
}
export interface DataAllEG {
  result: DataEG[],
  message: string
}

export interface DataAllPOPaper {
  result: DataPOPaper[],
  message: string
}

export interface DataAllInvoice{
  result: DataInvoice[],
  message: string
}

export interface DataAlljournal{
  result: Datajournal[],
  message: string
}

export interface DataAllledger{
  result: Datalegger[],
  message: string
}

