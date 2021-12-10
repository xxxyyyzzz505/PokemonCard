import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PokemonResponse } from '../pokemon.interface';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  starterPokemon: Array<string> = [ "Bulbasaur", "Squirtle", "Charmander" ];
  pokemonList: Array<PokemonResponse> = [];

  constructor(
    private dataAPI: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.starterPokemon.forEach(
      name => {
        this.dataAPI.getPokemonResponse(name).subscribe(
          res => this.pokemonList.push(res)
        )
      }
    )
  }

  onClick(name: string) {
    this.dialog.open(DialogComponent, {
      // width: '250px',
      data: {pokemonName: name},
    })
  }

}
