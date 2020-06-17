import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Dashboard1Component } from './content/dashboard1/dashboard1.component';
import { Dashboard2Component } from './content/dashboard2/dashboard2.component';
import { ProfileComponent } from './content/profile/profile.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BarChartComponent } from './content/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChart1Component } from './content/bar-chart1/bar-chart1.component';
import { BarChart2Component } from './content/bar-chart2/bar-chart2.component';
import { TucktrackingComponent } from './content/tucktracking/tucktracking.component';
import { JournalComponent } from './content/journal/journal.component';
import { LedgerComponent } from './content/ledger/ledger.component';
import { IncomeComponent } from './content/income/income.component';
import { ReconciliationComponent } from './content/reconciliation/reconciliation.component';
import { InventoryComponent } from './content/inventory/inventory.component';
import { PurchaseOrderComponent } from './content/purchase-order/purchase-order.component';
import { InvoiceComponent } from './content/invoice/invoice.component';
import { ReportComponent } from './content/report/report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BarChart3Component } from './content/bar-chart3/bar-chart3.component';
import { BarChart4Component } from './content/bar-chart4/bar-chart4.component';
import { BarChart5Component } from './content/bar-chart5/bar-chart5.component';
import { SaleOfficeComponent } from './content/sale-office/sale-office.component';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      HeaderComponent,
      MenuComponent,
      FooterComponent,
      Dashboard1Component,
      Dashboard2Component,
      ProfileComponent,
      BarChartComponent,
      BarChart1Component,
      BarChart2Component,
      TucktrackingComponent,
      JournalComponent,
      LedgerComponent,
      IncomeComponent,
      ReconciliationComponent,
      InventoryComponent,
      PurchaseOrderComponent,
      InvoiceComponent,
      ReportComponent,
      BarChart3Component,
      BarChart4Component,
      BarChart5Component,
      SaleOfficeComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      ChartsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
         timeOut: 1500,
         preventDuplicates: false,
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
     
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
