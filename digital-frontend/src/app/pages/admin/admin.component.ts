import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = 'digital-frontend';
  conditionProduct: boolean = false;
  conditionProductkey: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(event: string) {
    this.title = event;
  }

  onCreateProductKey(){
    this.conditionProductkey = !this.conditionProductkey;
  }

}
