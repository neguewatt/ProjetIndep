import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'ngx-simulateur',
  templateUrl: './simulateur.component.html',
  styleUrls: ['./simulateur.component.scss']
})


export class SimulateurComponent  {
    
    registerForm: FormGroup;
    radioSimu: string;
    sasu:boolean;
    eurl:boolean;
    auto:boolean;
    autre:boolean;

    constructor(){

    }

    onChange(event) {
      if(this.radioSimu == "sasu"){
        this.sasu = true;
        this.eurl = false;
        this.auto = false;
        this.autre = false;
      }
      if(this.radioSimu == "eurl"){
        this.sasu = false;
        this.eurl = true;
        this.auto = false;
        this.autre = false;
      }
      if(this.radioSimu == "auto"){
        this.sasu = false;
        this.eurl = false;
        this.auto = true;
        this.autre = false;
      }
      if(this.radioSimu == "autre"){
        this.sasu = false;
        this.eurl = false;
        this.auto = false;
        this.autre = true;
      }

    }


}
