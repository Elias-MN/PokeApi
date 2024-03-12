import { Component, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { TextPipe } from '../../pipes/text.pipe';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [TextPipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  @Input({ required: true }) pokemon?: Pokemon;

}
