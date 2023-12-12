import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/models';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  tareasPendientes : Tarea[] =[];
  
  constructor(private firestore: FirestoreService) {}

  
  ngOnInit(): void {
    this.getTareas();
  }

  getTareas(){
    this.firestore.getColleccion<Tarea>('Tareas').subscribe((respuesta)=>{
      console.log("Esta es la collection ", respuesta);
      
      //Ordenar por completados y luego pendientes
      this.tareasPendientes = respuesta.filter((tareaPend)=>{
        return  tareaPend.completado ==false;
      })
      //this.tareasPendientes = respuesta;
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


}
