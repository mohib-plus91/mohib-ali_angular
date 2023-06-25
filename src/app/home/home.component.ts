import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  records: any[];
  searchTerm: string;
  filteredRecords: any[];


  constructor( private dataService: DataService) {}

  async ngOnInit() {
    this.records = await this.dataService.getRecords();
    this.filteredRecords = this.records;

  }
  
  deleteRecord(index: number) {
    this.dataService.deleteRecord(index);
  }

  
  search() {
    if (this.searchTerm) {
      this.filteredRecords = this.records.filter(record => record.email.includes(this.searchTerm));
    } else {
      this.filteredRecords = this.records;
    }
  }

}
