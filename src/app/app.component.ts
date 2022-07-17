import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder {
    this.form = this.formBuilder.group( {
      user:['',[]],
      mail: ['',[]],
      password: ['',[]]
    })
  })
  
  ngOnInit() {}
}

export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
