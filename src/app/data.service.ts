import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonResponse } from './pokemon.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  finalSelectedPokemon: PokemonResponse;

  constructor(private http: HttpClient) { }

  getPokemonResponse(name: string): Observable<PokemonResponse> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase()).pipe(
      map(
        data => data as PokemonResponse
      )
    )
  }
}
