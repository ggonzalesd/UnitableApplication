import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recompensa, Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<Usuario[]>(`${this.apiBase}/usuarios`)
  }

  getUsuarioInfo() {
    return this.http.get<Usuario>(`${this.apiBase}/usuarios/info`)
  }

  getRecompensas(){
    return this.http.get<Recompensa[]>(`${this.apiBase}/usuarios/recompensas`)
  }

  deleteUsuario() {
    return this.http.delete<any>(`${this.apiBase}/usuarios/delete`)
  }
}