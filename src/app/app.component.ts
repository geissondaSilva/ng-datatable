import { Component, ElementRef, ViewChild } from '@angular/core';

export interface Contato {
  id: number;
  nome: string;
  cidade: string;
  telefone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('table') public table?: ElementRef<HTMLLegendElement>;

  public dados: Contato[] = [
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 2,
      nome: "Rogerio de Lara",
      cidade: "Francisco Beltrão - PR",
      telefone: "(46) 9 9944-3498"
    },
    {
      id: 3,
      nome: "João Carlos Gomes",
      cidade: "Sulina - PR",
      telefone: "(46) 9 9876-5632"
    },
    {
      id: 4,
      nome: "Pedro Henrique Graciola",
      cidade: "Curitiba - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    },
    {
      id: 1,
      nome: "Felipe marques da silva",
      cidade: "Pato Branco - PR",
      telefone: "(46) 9 9954-6798"
    }
  ];

}
