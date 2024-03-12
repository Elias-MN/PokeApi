import { Injectable, inject, signal } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  listPokemon = signal<Pokemon[]>([]);

  getAllPokemon() {
    let url = new URL('https://pokeapi.co/api/v2/generation/1');
    return this.http.get<any>(url.toString());
  }

  getOnePokemon(id: number) {
    let url = new URL('https://pokeapi.co/api/v2/pokemon/' + id);
    return this.http.get<any>(url.toString());
  }

}
