import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { 
    this.source = '';
    this.title = ''
  }

  @Input() source: string;
  @Input() title: string;
  @Input() location: string = '';
  @Input() address: string = '';
  @Input() link: string = '';

  ngOnInit(): void {
  }

}
