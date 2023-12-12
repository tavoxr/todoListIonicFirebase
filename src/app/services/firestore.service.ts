import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fireStore: AngularFirestore) { }



  crearDocumento(data:any, path:string, id:string){
    const collection = this.fireStore.collection(path);
    return collection.doc(id).set(data);
    //this.fireStore.collection('Tareas');
  }


  getId(){
    return this.fireStore.createId();
  }



  getColleccion<tipo>(path:string){
    const collection  =  this.fireStore.collection<tipo>(path);
    return collection.valueChanges();
  }


  getDoc<tipo>(path: string, id: string) {
    return this.fireStore.collection(path).doc<tipo>(id).valueChanges();
   }


  updateDocument(data:any, path:string,id:string){
    const collection = this.fireStore.collection(path);
    return collection.doc(id).update(data);
  }

  deleteDoc(path: string, id: string) {
    const collection = this.fireStore.collection(path);
    return collection.doc(id).delete();
  }

  getTareas(){ //obtener colleccion de tareas
    console.log("Voy a leer una coleccion desde un servicio");
    this.fireStore.collection('Tareas').valueChanges().subscribe((response)=>{
        console.log("reponse desde servicio", response)
      return response;
    })
  }

}
