import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  searchValue: string | null = null;

  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.getPagedMovie(1);
  }
  getPagedMovie(page: number, searchValue?: string) {
    this.moviesService.searchMovies(page, searchValue).subscribe((response) => {
      this.movies = response;
    });
  }

  onPageChange(event: any) {
    if (this.searchValue) {
      this.getPagedMovie(event.page + 1, this.searchValue);
    } else {
      this.getPagedMovie(event.page + 1);
    }
  }
  searchMovie() {
    if (this.searchValue) {
      this.getPagedMovie(1, this.searchValue);
    }
  }
}
