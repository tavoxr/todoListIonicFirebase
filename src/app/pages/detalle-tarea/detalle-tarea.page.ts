import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.page.html',
  styleUrls: ['./detalle-tarea.page.scss'],
})
export class DetalleTareaPage implements OnInit {

  idParam:any;

  tarea: any={
    titulo:'',
    descripcion: '',
    completado:false,
    id:''
  }

  constructor(
    private route:ActivatedRoute, 
    private firestore: FirestoreService,
    private interaction: InteractionService,
    private router: Router
    ) { }

  ngOnInit() {

    
    this.idParam =  this.route.snapshot.paramMap.get('id');

    console.log(this.idParam)
    this.getTarea(this.idParam);


  }


getTarea(id:string){
  this.firestore.getDoc<Tarea>('Tareas', id).subscribe(response=>{
    console.log(response)
    this.tarea = response;
  });
}


editarTarea(){
  this.interaction.showLoading("Editando...")

  console.log('editarTarea',this.tarea);
    
    this.firestore.updateDocument(this.tarea,'Tareas',this.idParam).then(res=>{
      this.interaction.closeLoading();
      this.interaction.presentToast("Tarea editada con exito!",'tertiary')

    });
   
}

eliminarTarea(){
  this.interaction.showLoading("Eliminando...")

  console.log('editarTarea',this.tarea);
    
    this.firestore.deleteDoc('Tareas',this.idParam).then(res=>{
      this.interaction.closeLoading();
      this.router.navigate(['']); 
      this.interaction.presentToast("Tarea Eliminada con exito!",'danger')

    });
   
}








}
