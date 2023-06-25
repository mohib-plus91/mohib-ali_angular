import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  records: any[] = [];

  constructor() { 
        // Hardcoded data
    this.records = [
      { name: 'James', email: 'james@example.com', phone: '1234567890', address: '123 pune St' },
      { name: 'clara', email: 'clara@example.com', phone: '9876543210', address: '456 mumbai St' },
      { name: 'Wayne', email: 'wayne@example.com', phone: '9992288211', address: '890 mumbai St' },
      { name: 'Maya', email: 'maya@example.com', phone: '9515343210', address: '312 mumbai St' },
    ];

  }


  getRecords(): any[]  {
    return this.records;
  }

  createRecord(record: any) {
    this.records.push(record);
  }


  deleteRecord(index: number) {
    this.records.splice(index, 1);
  }

  getRecordDetails(index: number) {
    return this.records[index];
  }

  searchRecords(searchTerm: string): any[] {
    searchTerm = searchTerm.toLowerCase();
    return this.records.filter(record =>
      record.email.toLowerCase().includes(searchTerm)
    );
  }

}
