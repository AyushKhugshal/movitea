import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie, MovieCreditsDTO, MovieDTO, MoviePhotoDTO, MovieVideoDTO } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '1673da4315bcaea57189bb7b0d20a76b';
  constructor(private http: HttpClient) {}

  getMovies(type: string, count: number) {
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}&language=en-US`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getSingleMovie(id: number) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MovieDTO>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}&language=en-US`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieVideo(id: number) {
    return this.http
      .get<MovieVideoDTO>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMoviePhotos(id: number) {
    return this.http.get<MoviePhotoDTO>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.backdrops);
      })
    );
  }

  getMovieCredits(id: number) {
    return this.http.get<MovieCreditsDTO>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.cast);
      })
    );
  }
}
