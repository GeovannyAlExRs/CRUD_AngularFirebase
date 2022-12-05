import { Component, OnInit } from '@angular/core';
import { AngularFirestore, fromCollectionRef } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { EmploymentService } from 'src/app/services/employment.service';

@Component({
  selector: 'app-employment-list',
  templateUrl: './employment-list.component.html',
  styleUrls: ['./employment-list.component.css']
})
export class EmploymentListComponent implements OnInit{
  
  employments: any[] = [];
  loading = false;

  constructor(private _employmentList: EmploymentService, 
              private toastr: ToastrService) {
    
  }

  ngOnInit(): void {
    this.getEmployments();
  }
  
  getEmployments() {
    this.loading = true;
    
    this._employmentList.getEmployments().subscribe(data => {
      
      this.employments = [];
      this.loading = false;

      data.forEach((element: any) => {
        /*console.log(element.payload.doc.data());*/
        this.employments.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(this.employments)
    });
  }

  deleteEmployment(id: string) {
    this._employmentList.deleteEmployment(id).then(() => {
      this.toastr.error('Registro eliminado...!!!', 'Eliminar usuario',
                        {positionClass: 'toast-bottom-right'});
    }).catch(error => {
      console.log(error);
    });
  }
}