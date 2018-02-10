import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {MatInputModule,MatIconModule,MatSelectModule,MatProgressSpinnerModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,MatAutocompleteModule,MatCheckboxModule,MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import {MatInputModule,MatIconModule,MatSelectModule,MatProgressSpinnerModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,MatAutocompleteModule,MatCheckboxModule,MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatButtonModule} from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {DropdownModule, FileUploadModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrentCampaignsComponent } from './components/current-campaigns/current-campaigns.component';
enableProdMode();
const appRoutes = [
  {
    path:'',
    component:CurrentCampaignsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CurrentCampaignsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    DropdownModule,
    FileUploadModule,
    NoopAnimationsModule,
    NgbModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
