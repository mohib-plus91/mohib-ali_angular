import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-record-create',
  templateUrl: './record-create.component.html',
  styleUrls: ['./record-create.component.css']
})
export class RecordCreateComponent implements OnInit {
  public newRecord: any = {
    name: '',
    email: '',
    phone: '',
    address: '',
  }
  constructor(    
    private router: Router,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
  }


  createRecord() {
    if(this.validate() ){
    this.dataService.createRecord(this.newRecord);
    this.newRecord = {};
    this.router.navigate(['/']);
  }
  
}

// validate the fields 
validate() {

  if (this.newRecord.name == '') {
    alert('Please enter a name');

    return false;
  }
  if ( this.newRecord.email == '') {
    alert('Please Enter a Email');

    return false;
  }if ( !this.validateEmail( this.newRecord.email)) {
    alert('Please Enter Correct Email');

    return false;
  }
  if (this.newRecord.phone == '') {
    alert('Please enter a phone');

    return false;
  }
  if (this.newRecord.address == '') {
    alert('Please enter a address');

    return false;
  }
  return true;
}

validateEmail(email:string){
  return email.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
}
