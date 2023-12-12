import { Component } from '@angular/core';
import { FirestoreService } from './services/firestore.service';
import { computeStackId } from '@ionic/angular/common/directives/navigation/stack-utils';

import { Tarea } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  
  tareas : any = [];
  constructor(private firestore: FirestoreService) {  }


ngOnInit(): void{

  this.tareas = this.firestore.getTareas();

}


}




