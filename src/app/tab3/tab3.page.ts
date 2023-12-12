import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Tarea } from '../models/models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private firestore : FirestoreService) {}

  ngOnInit(): void {
    console.log("Hola estoy en crear nueva tarea");

  }







}
