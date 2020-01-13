import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  submitted:boolean=false;
  xNew:number;
  yNew:number;
  position:number=0
  findNewLocation(x,y,direction:string){
    this.xNew=x;
    this.yNew=y;
    console.log("x ",x);
      console.log("y ",y);
    for(var char of direction) {
      
      
      if (char==="F") {
        console.log("char ",char)
        if (this.position===0){
          
          console.log("position0 ",this.position)
          this.yNew=this.yNew-(-1);
        }
        if (this.position===1){
            console.log("position1 ",this.position)
            this.xNew=this.xNew-1;
        }
          
        if (this.position===2){
          console.log("position2 ",this.position)
          this.yNew=this.yNew-1;
      }
          
        if (this.position===3){
          console.log("position3 ",this.position)
          this.xNew=this.xNew-(-1);
      }
    }
    else {
        if(char==="L"){
          console.log("char ",char)
          this.position=this.position+1
          if (this.position===4)
            this.position=0
          console.log("position ",this.position)
        }
          
        else{
          console.log("char ",char)
          this.position=this.position-1
          if(this.position===-1)
            this.position=3
          console.log("position ",this.position)
        }
      }
      this.submitted=true
      console.log("xNew ",this.xNew);
      console.log("yNew ",this.yNew);
    }
  }
  
}
