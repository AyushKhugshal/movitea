import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieCredits, PhotoType, VideosType } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieID: number = 0;
  count: number = 0;

  movieResponse: Movie | null = null;
  movieVideo: VideosType[] = [];
  moviePhoto: PhotoType[] = [];
  movieCredits: MovieCredits[] = [];
  value: any = null;
  constructor(private route: ActivatedRoute, private movie: MoviesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.movieID = id;
    });

    this.movie.getSingleMovie(this.movieID).subscribe((res) => {
      this.movieResponse = res;
    });

    this.movie.getMovieVideo(this.movieID).subscribe((res) => {
      this.movieVideo = res;
    });

    this.movie.getMoviePhotos(this.movieID).subscribe((res) => {
      this.moviePhoto = res;
    });

    this.movie.getMovieCredits(this.movieID).subscribe((res) => {
      this.movieCredits = res;
    });
  }

  changeVideo(increase: number) {
    this.count = ++this.count % this.movieVideo.length;
  }
}
