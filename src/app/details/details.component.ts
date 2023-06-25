import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  record: any;


  constructor(   
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
    ) {}

  ngOnInit() {
    const index = this.route.snapshot.params['index'];
    this.record = this.dataService.getRecordDetails(index);
    if (!this.record) {
      // If the record is not found, navigate back to the home page
      this.router.navigate(['/']);
    }
  }
  goBack() {
    this.router.navigate(['/']);

  }
}
