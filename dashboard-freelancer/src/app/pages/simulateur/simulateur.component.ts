import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'ngx-simulateur',
  templateUrl: './simulateur.component.html',
  styleUrls: ['./simulateur.component.scss']
})


export class SimulateurComponent  {
    
    registerForm: FormGroup;

    sasu:boolean;
    eurl:boolean;
    auto:boolean;
    autre:boolean;

    constructor(){

    }

    if (sasu = true){
       console.log('teste ok1');
    }


}
