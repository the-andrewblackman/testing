export class DogTable{

  constructor( public id:number,public apiid:string,public trainingtime:number,public foodconsumption:string,
    public exerciseroutine:string,public energy:number,public friendliness:number,public affectionlevel:number,
    public shedding:number ) {
      this.id = id;
      this.apiid = apiid;
      this.trainingtime = trainingtime;
      this.foodconsumption = foodconsumption;
      this.exerciseroutine = exerciseroutine;
      this.energy = energy;
      this.friendliness = friendliness;
      this.affectionlevel = affectionlevel;
      this.shedding = shedding;
    }
  }