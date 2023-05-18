import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { TransferDetailsComponent } from './transfer-details/transfer-details.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomePageHeaderComponent } from './home-page-header/home-page-header.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustolerLoginComponent } from './custoler-login/custoler-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {MatSelectModule} from '@angular/material/select';
import { NgxPaginationModule } from 'ngx-pagination';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustolerLoginComponent,
    HomePageComponent,
    HomePageHeaderComponent,
    SideNavComponent,
    CustomerDetailsComponent,
    AccountDetailsComponent,
    TransferDetailsComponent,
    CreateAccountComponent,
    FundtransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTooltipModule,
    RouterModule.forRoot([]),
    MatMenuModule,
    RouterModule,
    MatButtonModule, 
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
