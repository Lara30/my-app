import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-jeudi',
  templateUrl: './jeudi.component.html',
  styleUrls: ['./jeudi.component.css']
})
export class JeudiComponent implements OnInit {
  @Input() public fruit: string;
  @Output() public deleted: EventEmitter <string> = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
  }
  deleteFruit() {
    this.deleted.emit(this.fruit);
  }
}
