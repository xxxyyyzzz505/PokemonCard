import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from '../data.service';
import { PokemonResponse } from '../pokemon.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  selectdata: {pokemonName: string};
  selectPokemon: PokemonResponse;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {pokemonName: string},
    private dataAPI: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectdata = this.data
    this.dataAPI.getPokemonResponse(this.selectdata.pokemonName).subscribe(
      res => {
        this.selectPokemon = res as PokemonResponse;
      }
    )
  }

  onClick() {
    this.dataAPI.finalSelectedPokemon = this.selectPokemon;
    console.log(this.dataAPI.finalSelectedPokemon);
    this.router.navigate(['selected']);
  }

}
