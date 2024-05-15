import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];

  upcomingMovies: Movie[] = [];

  topRated: Movie[] = [];

  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.moviesService.getMovies('popular', 20).subscribe((response) => {
      this.popularMovies = response;
    });

    this.moviesService.getMovies('upcoming', 12).subscribe((response) => {
      this.upcomingMovies = response;
    });

    this.moviesService.getMovies('top_rated', 12).subscribe((response) => {
      this.topRated = response;
    });
  }
}
