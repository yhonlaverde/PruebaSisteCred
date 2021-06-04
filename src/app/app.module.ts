import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCreditosComponent } from './components/lista-creditos/lista-creditos.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment'; 

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaCreditosComponent,
    CreditosComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    //se usa para controlar el error de NGMODEL en un formulario. error warning de la consola
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  exports: [DynamicFormComponent],
  providers: [{ provide: MatDialogRef, useValue: {} },],
  bootstrap: [AppComponent]
})
export class AppModule { }
