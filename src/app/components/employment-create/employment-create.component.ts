import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmploymentService } from 'src/app/services/employment.service';

@Component({
  selector: 'app-employment-create',
  templateUrl: './employment-create.component.html',
  styleUrls: ['./employment-create.component.css']
})
export class EmploymentCreateComponent  implements OnInit{
  
  formEmployment: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder, private _employmentService: EmploymentService,
              private router: Router, private toastr: ToastrService) {
    this.formEmployment = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  createEmployment() {
    this.submitted = true;

    if(this.formEmployment.invalid) {
      return;
    }

    const employment: any = {
      lastName: this.formEmployment.value.lastName,
      firstName: this.formEmployment.value.firstName,
      address: this.formEmployment.value.address,
      phone: this.formEmployment.value.phone,
      birthDate: this.formEmployment.value.birthDate,
      dateRegister: new Date(),
      dateUpdate: new Date()
    }

    this.loading = true;

    this._employmentService.addEmployment(employment).then(()=> {
    this.toastr.success('Empleado '+ employment.firstName +' ' + employment.lastName + ' registrado con exito!!!', 
                        'Registro de usuario',
                        {positionClass: 'toast-bottom-right'});
    this.loading = false;
    this.router.navigate(['list-employments']);
    }).catch(error => {
      console.log(error)
      this.loading = false;
    });
  }
}