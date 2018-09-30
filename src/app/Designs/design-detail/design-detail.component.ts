import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-design-detail',
  templateUrl: './design-detail.component.html',
  styleUrls: ['./design-detail.component.css']
})
export class DesignDetailComponent implements OnInit {
data;

  constructor(private api: ApiService) { }
  ngOnInit() {
    this.api.getservice().subscribe(res => {
      this.data = res;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
