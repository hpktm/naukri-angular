import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // constructor() { }

  profileForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  

  ngOnInit() {
  }

  // profileForm = new FormGroup({

  //   firstname : new FormControl(""),
  //   lastname : new FormControl(""),

  // });

  updateName() {
    // this.name.setValue('Nancy');
  }

  onSubmit(){

      // TODO: Use EventEmitter with form value
      console.log(this.profileForm.value);
  }

}

