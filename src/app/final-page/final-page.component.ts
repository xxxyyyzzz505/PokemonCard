import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PokemonResponse } from '../pokemon.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css']
})
export class FinalPageComponent implements OnInit {
  pokemon: PokemonResponse;

  constructor(private dataAPI: DataService, private router: Router) { }

  ngOnInit(): void {
    this.pokemon = this.dataAPI.finalSelectedPokemon;
  }

  onClick() {
    this.router.navigate([''])
  }

}
