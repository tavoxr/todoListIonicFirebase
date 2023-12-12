import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Tarea } from '../models/models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

  tareas : Tarea[] =[];

  constructor(private firestore: FirestoreService) {}


  ngOnInit(): void {
    this.getTareas();
  }

  getTareas(){
    this.firestore.getColleccion<Tarea>('Tareas').subscribe((respuesta)=>{
      console.log("Esta es la collection ", respuesta);
      
      //Ordenar por completados y luego pendientes
      respuesta.sort((comp, pend)=>{
        return  Number(pend.completado) - Number(comp.completado);
      })
      this.tareas = respuesta;
    })

  }

  getDatosTarea(tarea:Tarea){
    console.log(tarea.id);
    console.log(tarea.completado);
    
  
    const updateData ={
      ...tarea,
      completado: tarea.completado,
    }
    console.log("updateData", updateData)
    //console.log(this.dataEntrante.completado);
    this.firestore.updateDocument(updateData, 'Tareas',tarea.id);
  
  
  }











  /*
getDatosTarea(tarea:Tarea){
  console.log(tarea.id);
  //return tarea.id;

  const updateData ={
    ...tarea,
    completado: tarea.completado,
  }
  console.log("updateData", updateData)
  return
  //this.firestore.updateDocument(updateData, 'Tareas',tarea.id)


}
*/





}
