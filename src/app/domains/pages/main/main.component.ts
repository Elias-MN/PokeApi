import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PokemonComponent } from "../../components/pokemon/pokemon.component";
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [PokemonComponent]
})
export class MainComponent {

  private apiService = inject(ApiService);
  pokemon = signal<Pokemon | undefined>(undefined);

  ngOnInit() {

    let randomID = Math.floor(Math.random() * 151);

    this.apiService.getOnePokemon(randomID).subscribe({
      next: (data) => {
        let pkm: Pokemon = {
          name: data.name,
          imagen: data.sprites.front_default
        }
        this.pokemon.set(pkm);
      }
    });

  }

}
