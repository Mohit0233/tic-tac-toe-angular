import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  flag = false;
  boxes: string[];
  winner: string;
  xTurn: boolean;
  value: 'X' | 'O';
  d = false;
  count: number = 0;

  ngOnInit(): void {
    this.newGame();
    this.value = 'X';
  }

  newGame() {
    this.boxes = Array(9).fill(null);
    this.xTurn = true;
    this.winner = null;
    this.d = false;
    this.count = 0;
  }

  changeValue() {
    this.value == 'O' ? this.value = 'X' : this.value = 'O';
    this.value == 'X' ? this.xTurn = true : this.xTurn = false;
  }

  get player() {
    return this.xTurn ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.boxes[idx]) {
      this.boxes.splice(idx, 1, this.player);
      this.xTurn = !this.xTurn;
    }
    
      this.winner = this.calculateWinner();
      if (this.winner != null) {
        this.d = true;
      }
    this.count = this.count + 1;
    if (this.count == 9 && this.winner == null) {
      this.winner = 'Nobody';
      this.d = true;
    }
    
      
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.boxes[a] &&
        this.boxes[a] === this.boxes[b] &&
        this.boxes[a] === this.boxes[c]
      ) {
        return this.boxes[a];
      }
    }
    return null;
  }
}
