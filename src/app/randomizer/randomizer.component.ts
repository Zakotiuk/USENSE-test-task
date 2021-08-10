import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs'

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})

export class RandomizerComponent implements OnInit {

  constructor() { }
  model = "";
  abc = "abcdefghijklmnopqrstuvwxyz1234567890";
  counter = interval(3000);
  line = this.model;
  colorOfText = "";
  ngOnInit() { this.counter.subscribe(n => this.checkingLine()) }

  checkingLine() {
    this.randominLine();

    if (this.isPalindrome(this.model)) {
      this.colorOfText = "red";
    }

    else if (this.isOnlyNumbers(this.model)) {
      this.colorOfText = "blue";
    }

    else if (this.model.includes("0")) {
      this.colorOfText = "white";
    }

    else{
      this.colorOfText = "black";
    }
  }

  randominLine() {
    this.model = "";
    while (this.model.length < 5) {
      this.model += this.abc[Math.floor(Math.random() * this.abc.length)];
    }
  }

  isPalindrome(line: string) {
    var resLine = line.split('').reverse().join('');
    if (resLine == line)
      return true
    else
      return false;
  }

  isOnlyNumbers(line: string) {
    if (line.match(/^-{0,1}\d+$/))
      return true;
    else
      return false;
  }

}