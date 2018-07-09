export class Task{

    team1Name:string;
    team2Name:string;

    
    
    constructor(team1Name:string, team2Name:string ){
        this.team1Name = team1Name;
        this.team2Name = team2Name;   
    }
}


export class gameScore{

    penalty:string;
    tryS:string;
    conversion:string;

    constructor(penalty:string, tryScore:string, conversion:string){
        this.penalty = penalty;
        this.tryS = tryScore;
        this.conversion = conversion;

    }
}