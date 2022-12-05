import { DomElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {

  constructor(private firestore: AngularFirestore) { }

  addEmployment(employment: any): Promise<any> {
    return this.firestore.collection('employment').add(employment);
  }

  getEmployments(): Observable<any> {
    return this.firestore.collection('employment', ref => ref.orderBy('lastName', 'asc')).snapshotChanges();
  }

  deleteEmployment(id: string): Promise<any> {
    return this.firestore.collection('employment').doc(id).delete();
  }

  getEmploymentById(id: string): Observable<any> {
    return this.firestore.collection('employment').doc(id).snapshotChanges();
  }

  updateEmployment(id: string, data: any): Promise<any> {
    return this.firestore.collection('employment').doc(id).update(data);
  }
}