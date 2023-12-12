import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';


@Component({
  selector: 'app-form-nueva-tarea',
  templateUrl: './form-nueva-tarea.component.html',
  styleUrls: ['./form-nueva-tarea.component.scss'],
})
export class FormNuevaTareaComponent  implements OnInit {

  data: Tarea = {
    titulo: '',
    descripcion: '',
    completado: false,
    id: ''
  }


  constructor(
    private firestore: FirestoreService, 
    private interactiveController : InteractionService,
    private router: Router
    ) { }



  ngOnInit() {
    console.log("Estoy dentro de formulario");

  }

  
  crearNuevaTarea(){
    //console.log(this.data);
    this.interactiveController.showLoading("Cargando...");
    /* Prueba
    const data : Tarea = {
      titulo:'Leer',
      descripcion: "Leer 2 paginas de Harry Potter.", 
      completado:false
    }*/
      const id = this.firestore.getId();
      this.data.id = id;

      this.firestore.crearDocumento(this.data,'Tareas',id).then((res)=>{
        console.log("Guardado con exito ", res);
        this.interactiveController.closeLoading();
        this.router.navigate(['']); 
        this.interactiveController.presentToast("Tarea Creada con Exito!", 'success')

      });
  }

}
