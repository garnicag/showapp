import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html'
})
export class TrailerComponent {
  @Input() videoId: string;
  @Output() closeTrailer: EventEmitter<boolean> = new EventEmitter<boolean>();
  videoUrl;
  safeVideoUrl;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoUrl = 'https://www.youtube.com/embed/' + this.videoId;
    this.safeVideoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  closeModal() {
    this.closeTrailer.emit(false);
  }
}