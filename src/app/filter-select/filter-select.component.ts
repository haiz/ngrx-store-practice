import { Component, Output, EventEmitter } from '@angular/core';
import { SHOW_ALL, SHOW_ATTENDING, SHOW_WITH_GUESTS } from "app/actions";

@Component({
  selector: 'filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent {
  public filters = [
        {friendly: "All", action: SHOW_ALL}, 
        {friendly: "Attending", action: SHOW_ATTENDING}, 
        {friendly: "Attending w/ Guests", action: SHOW_WITH_GUESTS}
      ];
  @Output() updateFilter: EventEmitter<String> = new EventEmitter<String>();

}
