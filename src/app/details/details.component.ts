import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {

  @Input() product:any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.product=changes['product']['currentValue']
  }
}
