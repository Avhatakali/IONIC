import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import arr from '../../app/Team';
import { Task } from '../../app/Task';


/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})

export class ScorePage {

  Team;
  homeScore = 0;
  awayScore = 0;

  arrTeam = arr;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

  //method for scores

  box(num){
    this.Team=num;
  }
      tryScore (){
        if(this.Team==1){
          this.homeScore+=5;
        }
        else{
         this.awayScore+=5;
        }
      }

      penaltyScore (){
        if(this.Team==1){
          this.homeScore+=3;
        }
        else{
         this.awayScore+=3;
        }
      }

      conversionScore (){
        if(this.Team==1){
          this.homeScore+=2;
        }
        else{
         this.awayScore+=2;
        }
      }
      

      resetScore (){
        this.navCtrl.setRoot(HomePage);
      }


      trySub (){
        if(this.Team==1){
          this.homeScore-=5;

              if(this.homeScore < 0){
                this.homeScore = 0;
           }
        }
        else{
         this.awayScore-=5;

            if(this.awayScore < 0){
              this.awayScore = 0;
            }
        }
      }


      penaltySub (){
        if(this.Team==1){
          this.homeScore-=3;

          if(this.homeScore < 0){
            this.homeScore = 0;
           }
        }
        else{
         this.awayScore-=3;

         if(this.awayScore < 0){
          this.awayScore = 0;
            }
         }
      }


      conversionSub (){
        if(this.Team==1){
          this.homeScore-=2;

          if(this.homeScore < 0){
            this.homeScore = 0;
      }
        }
        else{
         this.awayScore-=2;

         if(this.awayScore < 0){
          this.awayScore = 0;
            }
        }
      }
}
