import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Creditos } from '../interfaces/credito';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor(private firestore: AngularFirestore) { }
  //Crea un nuevo credito
  public createcredito(data:Creditos) {
    return this.firestore.collection('credito').add(data);
  }
  // //Obtiene un credito
  // public getcredito(documentId: string) {
  //   return this.firestore.collection('creditos').doc(documentId).snapshotChanges();
  // }
  //Obtiene todos los credito
  public getcreditos() {
    return this.firestore.collection('credito').snapshotChanges();
  }
  //Actualiza un credito
  public updatecredito(documentId: string, data: Creditos) {
    return this.firestore.collection('credito').doc(documentId).set(data);
  }

  //elemina un credito
  public deletecredito(documentId: string) {
    return this.firestore.collection('credito').doc(documentId).delete();
  }
}
