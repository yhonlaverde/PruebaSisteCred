import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DataCreditos } from 'src/app/data/dataCreditos';
import { Creditos } from 'src/app/interfaces/credito';
import { CreditoService } from '../../services/credito.service';


export interface DialogData {
}
@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss']
})
export class CreditosComponent implements OnInit {
  fields: any[];
  items:any;
  identificacion:any;
  public accionCreate: boolean = false;
  public accionUpdate: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
   private datacreditos: DataCreditos, 
    private creditoService: CreditoService,
    public dialogRef: MatDialogRef<CreditosComponent>) { 
    console.log(data)
    this.items = data;
   if (this.items.length === 0) {
     this.accionCreate = true;
     this.accionUpdate = false;
    this.selectItem();
   }else{
    this.accionCreate = false;
    this.accionUpdate = true;
    this.identificacion = data;
    this.selectItemupdate(this.items.data)
   }
    
  }

  ngOnInit(): void {
    
  }

  selectItemupdate(dato:any){
    
    this.fields = this.datacreditos.selectCredito(dato);
  }

  selectItem(){
    
    this.fields = this.datacreditos.newCredito();
  }

  guardarCredito():void{
    const parameters: Creditos = {
      Nombres:"",
      Apellidos:"",
      NumeroCelular:0,
      CorreoElectronico:"",
      TipoIdentificacion:"",
      NumeroIdentificacion:"",
      DireccionResidencia:"",
      Ubicacion:"",
      ValorTotalCredito:0,
      NumeroCuotas: 0,
    };

    this.fields.map((field) => {
      switch (field?.descripcion) {
        case "Nombres":
          parameters.Nombres = field?.valor;
          break;
        case "Apellidos":
          parameters.Apellidos = field?.valor;
          break;
        case "Numero de celular":
          parameters.NumeroCelular = field?.valor;
          break;
        case "Correo Electronico":
          parameters.CorreoElectronico = field?.valor;
          break;
        case "Tipo de identificación":
          parameters.TipoIdentificacion = field?.valor;
          break;
        case "Número de identificación":
          parameters.NumeroIdentificacion = field?.valor;
          break;
          case "Ubicación(Ciudad, Barrio)":
          parameters.Ubicacion = field?.valor;
          break;
          case "Valor total del crédito":
          parameters.ValorTotalCredito = field?.valor;
          break;
          case "Numero de cuotas":
          parameters.NumeroCuotas = field?.valor;
          break;
      }
      return field;
    });

    this.creditoService.createcredito(parameters).then(() => {
      console.log('Documento editado exitósamente');
      this.selectItem();
      this.onClose();
    }, (error) => {
      console.log(error);
    });
  }
  updateCredito():void{
    let idIdentificacionN =this.identificacion.id;
    const parameters: Creditos = {
      Nombres:"",
      Apellidos:"",
      NumeroCelular:0,
      CorreoElectronico:"",
      TipoIdentificacion:"",
      NumeroIdentificacion:"",
      DireccionResidencia:"",
      Ubicacion:"",
      ValorTotalCredito:0,
      NumeroCuotas: 0,
    };

    this.fields.map((field) => {
      switch (field?.descripcion) {
        case "Nombres":
          parameters.Nombres = field?.valor;
          break;
        case "Apellidos":
          parameters.Apellidos = field?.valor;
          break;
        case "Numero de celular":
          parameters.NumeroCelular = field?.valor;
          break;
        case "Correo Electronico":
          parameters.CorreoElectronico = field?.valor;
          break;
        case "Tipo de identificación":
          parameters.TipoIdentificacion = field?.valor;
          break;
        case "Número de identificación":
          parameters.NumeroIdentificacion = field?.valor;
          break;
          case "Ubicación(Ciudad, Barrio)":
          parameters.Ubicacion = field?.valor;
          break;
          case "Valor total del crédito":
          parameters.ValorTotalCredito = field?.valor;
          break;
          case "Numero de cuotas":
          parameters.NumeroCuotas = field?.valor;
          break;
      }
      return field;
    });

    this.creditoService.updatecredito(idIdentificacionN, parameters).then(() => {
      console.log('Documento editado exitósamente');
      this.onClose();
      window.location.reload()
    }, (error) => {
      console.log(error);
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
