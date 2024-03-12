import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pokemon } from '../../model/pokemon';
import { PokemonComponent } from "../../components/pokemon/pokemon.component";

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  imports: [PokemonComponent]
})
export class ListComponent {

  private apiService = inject(ApiService);
  listPokemon = signal<Pokemon[]>([]);

  ngOnInit() {
    this.apiService.getAllPokemon().subscribe({
      next: (data) => {
        console.log(data.pokemon_species);
        this.listPokemon.set(data.pokemon_species);
      }
    });
  }

}
