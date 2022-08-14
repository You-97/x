import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {

  conditionProductkey: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateProductKey() {
    this.conditionProductkey = ! this.onCreateProductKey;
  }

}
