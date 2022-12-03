import { Component, OnInit } from '@angular/core';
import { AngularFirestore, fromCollectionRef } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { EmploymentService } from 'src/app/services/employment.service';

@Component({
  selector: 'app-employment-list',
  templateUrl: './employment-list.component.html',
  styleUrls: ['./employment-list.component.css']
})
export class EmploymentListComponent implements OnInit{
  
  employments: any[] = [];

  constructor(private _employmentList: EmploymentService) {
    
  }

  ngOnInit(): void {
    this.getEmployment();
  }
  
  getEmployment() {
    this._employmentList.getEmployment().subscribe(data => {
      this.employments = [];
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
}