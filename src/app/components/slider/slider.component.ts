import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void<=>*', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;

  counter: number = 0;

  ngOnInit(): void {
    if (this.isBanner != true) {
      setInterval(() => {
        this.counter = ++this.counter % this.items.length;
      }, 5000);
    }
  }
}
