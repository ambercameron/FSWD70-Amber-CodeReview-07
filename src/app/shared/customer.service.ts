import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;
  form = new FormGroup({
     $key: new FormControl(null),
     fullName: new FormControl('', Validators.required),
     mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
     service: new FormControl('', Validators.required),
     location: new FormControl('', Validators.required)
         });
   getCustomers(){
                 this.customerList = this.firebase.list('customers');
                 return this.customerList.snapshotChanges();
         }

insertCustomer(customer){
                 this.customerList.push({
                         fullName: customer.fullName,                     
                         mobile: customer.mobile,
                         service: customer.service,
                         location:customer.location
                  });
         }

populateForm(customer){
  this.form.setValue(customer);
}

updateCustomer(customer){
  this.customerList.update(customer.$key,{
    fullName: customer.fullName,
    mobile: customer.mobile,
    service: customer.service,
    location: customer.location
  });
}

deleteCustomer($key: string){
    this.customerList.remove($key);
  }
}
