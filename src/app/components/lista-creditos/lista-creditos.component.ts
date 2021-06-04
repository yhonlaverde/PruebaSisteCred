
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import { CreditosComponent } from '../creditos/creditos.component';
import { CreditoService } from '../../services/credito.service';
import { DataCreditos } from 'src/app/data/dataCreditos';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

export interface Credito{
  Nombres:string;
  Apellidos:string;
  NumeroCelular:number;
  CorreoElectrónico:string;
  TipoIdentificación:string;
  NumeroIdentificación:string;
  DireccionResidencia:string;
  Ubicación:string;
  ValorTotalCredito:number;
  NumeroCuotas:number;

}



@Component({
  selector: 'app-lista-creditos',
  templateUrl: './lista-creditos.component.html',
  styleUrls: ['./lista-creditos.component.scss']
})
export class ListaCreditosComponent implements OnInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  public items: any[] = [];

  public itemsupdate: any[] = [];
  public mostrarClick: boolean = false;
  id:any
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  clickedRows = new Set<Credito>();
  dataSource = new MatTableDataSource<Credito>(this.items);

  constructor(private router: Router,public dialog: MatDialog, private datacreditos: DataCreditos,  private creditoService: CreditoService,)
  {
     this.items = [];
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    let searchTerm = (event.target as HTMLInputElement).value;
    if (!searchTerm) {
      return;
    }
    if (searchTerm && searchTerm.trim() != "") {
      this.items = this.items.filter((item) => {
        return (
          item.Nombres.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) >
          -1 
        );
      });
    }
  }

  
  ngOnInit(): void {
    this.getCreditos();
  }

  addNew():void{
    
    const dialogRef = this.dialog.open(CreditosComponent, {
      data: this.itemsupdate, 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  updateCredit():void{

    const dialogRef = this.dialog.open(CreditosComponent, {
      data: this.itemsupdate, 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteCredit(){
    this.creditoService.deletecredito(this.id).then(() => {
    }, (error) => {
      console.log(error);
    });
  }

  SelectionClick(data:any):void {
    this.itemsupdate = data;
    this.clickedRows = data.data.Nombres;
    this.id = data.id;
    this.mostrarClick = true;
  }

  getCreditos(){
    this.creditoService.getcreditos().subscribe((Snapshot) => {
      this.items = [];
      Snapshot.forEach((catData: any) => {
        this.items.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })
    });
  }
  

}
