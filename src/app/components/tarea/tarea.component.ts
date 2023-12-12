import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent  implements OnInit {
  @Input()  dataEntrante:any ='';

  isCompleted: boolean  = false;

  constructor(private firestore : FirestoreService) { }

  ngOnInit() {

    this.isCompleted = this.dataEntrante.completado;
    console.log(this.isCompleted)

  }




  getDatosTarea(tarea:Tarea){
    console.log(tarea.id);
    console.log("dataEntrante",this.dataEntrante.completado);
    //return tarea.id;
  
    const updateData ={
      ...tarea,
      completado: this.isCompleted,
    }
    console.log("updateData", updateData)
    //console.log(this.dataEntrante.completado);
    return
    //this.firestore.updateDocument(updateData, 'Tareas',tarea.id)
  
  
  }


}
