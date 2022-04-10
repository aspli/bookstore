import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../shared/models/livros';
import { ConfigPrams } from '../shared/models/config-prams';
import { ConfigParamsService } from './config-params.service';

const url = 'http://localhost:3000/livros/';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient,
              private configService: ConfigParamsService) { }

  salvar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(url, livro);
  }

  editar(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(url + livro.id, livro);
  }

  listar(config: ConfigPrams): Observable<Livro[]> {
    const configPrams = this.configService.configurarParametros(config);
    return this.http.get<Livro[]>(url, {params: configPrams});
  }

  visualizar(id: number): Observable<Livro> {
    return this.http.get<Livro>(url + id);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
