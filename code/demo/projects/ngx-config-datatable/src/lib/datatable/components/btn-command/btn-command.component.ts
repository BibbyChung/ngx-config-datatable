import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cdt-btn-command',
  templateUrl: './btn-command.component.html',
  styleUrls: ['./btn-command.component.scss']
})
export class BtnCommandComponent implements OnInit {

  @Input() id: string;
  @Input() text: string;
  @Input() className: string;

  @Output() clickLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickIt(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    this.clickLink.emit(this.id);
  }

}
