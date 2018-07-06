import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScorePage } from '../score/score';
import arr from '../../app/Team';
import { Task } from '../../app/Task';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

arrTeam = arr;

  addTeam = function(team1Name, team2name){

    let obj = new Task(team1Name, team2name);
    arr.push(obj);
      
  if(obj != null){
  
  console.log(obj);
    }
     else (obj != null)
      {
        this.navCtrl.setRoot(ScorePage);
      }
 }


    start(){
      this.navCtrl.push(ScorePage);
    }

}
