import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmploymentService } from 'src/app/services/employment.service';

@Component({
  selector: 'app-employment-create',
  templateUrl: './employment-create.component.html',
  styleUrls: ['./employment-create.component.css']
})
export class EmploymentCreateComponent implements OnInit{
  
  formEmployment: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titleForm = 'Registro de empleados';

  constructor(private fb: FormBuilder, private _employmentService: EmploymentService,
              private router: Router, private toastr: ToastrService, 
              private aRoute: ActivatedRoute) {
    this.formEmployment = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getEmploymentId();
  }

  saveEmployment() {
    this.submitted = true;

    if(this.formEmployment.invalid) {
      return;
    }

    if(this.id == null) {
      this.createEmployment();
    } else {
      this.updateEmployment(this.id);
    }
  }

  createEmployment () {

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
  
  updateEmployment(idDoc: string) {
    
    const employment: any = {
      lastName: this.formEmployment.value.lastName,
      firstName: this.formEmployment.value.firstName,
      address: this.formEmployment.value.address,
      phone: this.formEmployment.value.phone,
      birthDate: this.formEmployment.value.birthDate,
      dateUpdate: new Date()
    }

    this.loading = true;

    this._employmentService.updateEmployment(idDoc, employment).then(()=>{
      this.toastr.info('Empleado '+ employment.firstName +' ' + employment.lastName + ' actualizado con exito!!!', 
                        'Actualizar usuario',
                        {positionClass: 'toast-bottom-right'});
    this.loading = false;
    this.router.navigate(['list-employments']);
    })
  }

  getEmploymentId() {
    this.titleForm = 'Editar empleado';
    this.loading = true;
    if(this.id != null) {
      this._employmentService.getEmploymentById(this.id).subscribe(data => {
        this.loading = false;
        console.log(data.payload.data()['lastName']);
        this.formEmployment.setValue({
          lastName: data.payload.data()['lastName'],
          firstName: data.payload.data()['firstName'],
          address: data.payload.data()['address'],
          phone: data.payload.data()['phone'],
          birthDate: data.payload.data()['birthDate']
        });
      });
    } else {
      this.loading = false;
    }
  }
}