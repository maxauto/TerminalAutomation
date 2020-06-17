import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './content/profile/profile.component';
import { Dashboard2Component } from './content/dashboard2/dashboard2.component';
import { Dashboard1Component } from './content/dashboard1/dashboard1.component';
import { TucktrackingComponent } from './content/tucktracking/tucktracking.component';
import { JournalComponent } from './content/journal/journal.component';
import { LedgerComponent } from './content/ledger/ledger.component';
import { IncomeComponent } from './content/income/income.component';
import { ReconciliationComponent } from './content/reconciliation/reconciliation.component';
import { InventoryComponent } from './content/inventory/inventory.component';
import { PurchaseOrderComponent } from './content/purchase-order/purchase-order.component';
import { InvoiceComponent } from './content/invoice/invoice.component';
import { ReportComponent } from './content/report/report.component';
import { AuthGuard } from './_guards/auth.guard';
import { SaleOfficeComponent } from './content/sale-office/sale-office.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'dashboard/dashboard1', component: Dashboard1Component},
            {path: 'dashboard/dashboard2', component: Dashboard2Component},
            {path: 'profile', component: ProfileComponent},
            {path: 'finance', component: JournalComponent},
            {path: 'finance/ledger', component: LedgerComponent},
            {path: 'finance/income', component: IncomeComponent},
            {path: 'finance/reconciliation', component: ReconciliationComponent},
            {path: 'finance/inventory', component: InventoryComponent},
            {path: 'finance/purchaseorder', component: PurchaseOrderComponent},
            {path: 'finance/invoice', component: InvoiceComponent},
            {path: 'trucktracking', component: TucktrackingComponent},
            {path: 'report', component: ReportComponent},
            {path: 'saleoffice', component: SaleOfficeComponent},
        ]
    },
    {path: '**', redirectTo: 'dashboard/dashboard1', pathMatch: 'full'},
]
