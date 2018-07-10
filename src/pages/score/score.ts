import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import arr from '../../app/Team';
import homeScoreArr from '../../app/homeScoreArr';
import awayScoreArr from '../../app/awayScoreArr';
import  { Home } from '../../app/Home';
import { Task } from '../../app/Task';
import { Away } from '../../app/Away';


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
  arrScore = homeScoreArr;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

 

  box(Number){
    this.Team=Number;
  }

//method for scores addition
//adding score to Array

score;
index;
index2;
tryP = 5;
penalty = 3;
conversion = 2;


  addScore (Number){
        if(this.Team==1){

           if(Number == 5){

              this.homeScore+=this.tryP;
              this.score = new Home(this.tryP);
              homeScoreArr.push(this.score);
              console.log(homeScoreArr);
                  }
          
        else 
            if(Number == 3){

            this.homeScore+=this.penalty;
            this.score = new Home(this.penalty);
            homeScoreArr.push(this.score);
            console.log(homeScoreArr);

        }else 
              if(Number == 2){

                this.homeScore+=this.conversion;
                this.score = new Home(this.conversion);
                homeScoreArr.push(this.score);
                console.log(homeScoreArr);
      }
    }
      else  if(this.Team==2){
            if(Number == 5){

              this.awayScore+=this.tryP;
              this.score = new Away(this.tryP);
              awayScoreArr.push(this.score);
              console.log(awayScoreArr);

        }else 
            if(Number == 3){

            this.awayScore+=this.penalty;
            this.score = new Away(this.penalty);
            awayScoreArr.push(this.score);
            console.log(awayScoreArr);

        }else 
              if(Number == 2){

                this.awayScore+=this.conversion;
                this.score = new Away(this.conversion);
                awayScoreArr.push(this.score);
                console.log(awayScoreArr);
            }            
        }
    }
    
//method for scores subtraction
//subtract score from Array OR
// reversing scores incase of mistake

subScore(Number){

  if(this.Team == 1){
      if(Number == 5){
        for(var A = 0; A < homeScoreArr.length; A++){
            if(homeScoreArr[A].homePoints == 5){
            this.index2 = A;
            homeScoreArr.splice(this.index2,1);
            this.homeScore-=this.tryP;
            break;
        }
      }
      console.log(this.index2);
        if(this.homeScore < 0){
          this.homeScore = 0;
        }
      }   

      else if(Number == 3){
        for(var B = 0; B < homeScoreArr.length; B++){
            if(homeScoreArr[B].homePoints == 3){
            this.index2 = B;
            homeScoreArr.splice(this.index2,1);
            this.homeScore-=this.penalty;
            break;
        }
      }
      console.log(this.index2);
        if(this.homeScore < 0){
          this.homeScore = 0;
        }
      }
        else if(Number == 2){
          for(var C = 0; C < homeScoreArr.length; C++){
                if(homeScoreArr[C].homePoints == 2){
                this.index2 = C;
                homeScoreArr.splice(this.index2,1);
                this.homeScore-=this.conversion;
                break;
          }
        }
        console.log(this.index2);
          if(this.homeScore < 0){
            this.homeScore = 0;
          }   
        } 
      }
else if(this.Team == 2){
    if(Number == 5){
      for(var D = 0; D < awayScoreArr.length; D++){
        if(awayScoreArr[D].awayPoints == 5){
        this.index2 = D;
        awayScoreArr.splice(this.index2,1);
        this.awayScore-=this.tryP;
        break;
      }
    }
    console.log(this.index2);
      if(this.awayScore < 0){
        this.awayScore = 0;
      }
    }
    else if(Number == 3){
      for(var E = 0; E < awayScoreArr.length; E++){
        if(awayScoreArr[E].awayPoints == 3){
        this.index2 = E;
        awayScoreArr.splice(this.index2,1);
        this.awayScore-=this.penalty;
        break;
      }
    }
    console.log(this.index2);
      if(this.awayScore < 0){
        this.awayScore = 0;
      }
    }
      else if(Number == 2){
        for(var F = 0; F < awayScoreArr.length; F++){
          if(awayScoreArr[F].awayPoints == 2){
          this.index2 = F;
          awayScoreArr.splice(this.index2,1);
          this.awayScore-=this.conversion;
          break;
        }
      }
      console.log(this.index2);
        if(this.awayScore < 0){
          this.awayScore = 0;
          }       
        }
      }
  }
      resetScore (){
        this.navCtrl.setRoot(HomePage);
      }
}
