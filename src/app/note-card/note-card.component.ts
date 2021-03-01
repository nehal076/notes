import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input('title') title: string;
  @Input('body') body: string;
  @Input() link: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator', { static: false }) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() { }

  ngAfterViewInit() {
    const { offsetHeight, scrollHeight } = this.bodyText.nativeElement;
    if (offsetHeight >= scrollHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, "display", "none");
    }
  }

  onXButtonClick() {
    this.deleteEvent.emit();

  }

}


