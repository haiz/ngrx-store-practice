import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent implements OnInit {
  @Output() updateFilter = new EventEmitter;

  update(filter) {
    console.log(filter);
    this.updateFilter.emit(filter);
  }
  constructor() { }

  ngOnInit() {
  }

}
