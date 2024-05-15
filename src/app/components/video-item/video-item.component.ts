import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideosType } from '../../models/movie';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  @Input() key: string = '';
  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
