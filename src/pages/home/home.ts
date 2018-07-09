import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScorePage } from '../score/score';
import arr from '../../app/Team';
import { Task } from '../../app/Task';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

arrTeam = arr;

  addTeam = function(team1Name, team2Name){

    let obj = new Task(team1Name, team2Name);
    
    console.log(obj);

    if(obj != null && team1Name != team2Name){
 
      const confirm = this.alertCtrl.create({
        title: 'verify?',
        message: 'Do you agree to use entered names on scoreboard as Team names ?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
              this.navCtrl.push(HomePage);
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
              arr.push(obj);
              this.navCtrl.push(ScorePage);
            }
          }
        ]
      });
      confirm.present();
  
    } else
     if(obj != null && team1Name == team2Name){
 
      this.navCtrl.push(HomePage);
    }
     else (obj != null)
      {
        if( obj == null || team1Name == team2Name ){
          
          const alert = this.alertCtrl.create({
            title: '  ERROR MESSAGE !',
            subTitle: 'one name for both teams, Cannot accepted your request! Review',
            buttons: ['OK']   
          });

          alert.present();
          this.navCtrl.setRoot(HomePage);
      }
    }
  }
}
