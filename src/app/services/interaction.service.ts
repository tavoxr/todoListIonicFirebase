import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  loading : any;

  constructor(
    private toastController: ToastController,
    private loadingCtrl: LoadingController
    
    ) { }


  async presentToast(mensaje: string, color:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: 'top',
      color: color
    });
  
    toast.present();
}

async showLoading(mensaje: string) {
   this.loading = await this.loadingCtrl.create({
    message: mensaje,
  });

   await this.loading.present();
}

async closeLoading() {
  await this.loading.dismiss();
}



}