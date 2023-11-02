import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trab',
  templateUrl: './trab.component.html',
  styleUrls: ['./trab.component.css']
})
export class TrabComponent implements OnInit {
  Tarefas: any = [
    { id: 1, descricao: 'Limpar Casa', status: true },
    { id: 2, descricao: 'Cozinhar', status: false },
    { id: 3, descricao: 'Passear com cachorro', status: true },
    { id: 4, descricao: 'Ir no mercado', status: false },
    { id: 5, descricao: 'Jogar bola', status: false },
  ];

  ngOnInit(): void {}

  toggleConcluir(item: any) {
    item.status = !item.status;
  }
}
