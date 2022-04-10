import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { MaterialModule } from '../shared/material/material.module';
import { ListagemLivrosComponent } from './listagem-livros/listagem-livros.component';
import { CamposModule } from '../shared/components/campos/campos.module';
import { VisualizarLivrosComponent } from './visualizar-livros/visualizar-livros.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule
  ],
  declarations: [CadastroLivrosComponent, ListagemLivrosComponent, VisualizarLivrosComponent]
})
export class LivrosModule { }
