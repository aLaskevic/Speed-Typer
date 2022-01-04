import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { toASCII } from 'punycode';
import { trigger, state, style, animate, transition} from '@angular/animations'

@Component({
  selector: 'app-wordapp',
  templateUrl: './wordapp.component.html',
  styleUrls: ['./wordapp.component.css'],
  animations: [
    trigger('vanish', [
      transition(':leave', [
        style({ opacity: '1'}),
        animate('50ms', style({ opacity: '0'}))
      ]),
      transition(':enter', [
        style({ opacity: '0'}),
        animate('100ms', style({ opacity: '1'}))
      ])
    ])
  ]
})
export class WordappComponent implements OnInit {
  @Input() currLetter:string = "";
  expecLetter:string = "";
  corrCounter:number = 0;
  multiplier:number = 1;
  streak:number = 0;
  life:boolean[] = [true,true,true];
  dead:boolean = false;
  start:boolean = false;
  constructor() { }


  timeLeft: number = 600;
  interval:any;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        if(this.life[0] == false || this.timeLeft <= 1){
          this.dead = true;
          this.pauseTimer()
        }
        this.timeLeft--;
      }
    },100)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  decLife(){
    for(let i = 2; i >= 0; i--){
      if(this.life[i] == true){
        this.life[i] = false;
        break;
      }
    }
  }
  ngOnInit() {
    for(let i = 0; i < 11; i++)
    {
      this.expecLetter += String.fromCharCode( Math.floor(Math.random() * (Math.floor(25) - Math.ceil(1)) + 97));
    }
  }

  @HostListener('window:keyup', ['$event'])
  eventInput(event: KeyboardEvent) {
    console.log(event);
    this.currLetter = event.key;
    if(!this.dead){
      if(this.start == false)
      {
        this.start = true;
        this.startTimer()
      }
    if(this.currLetter.charCodeAt(0) > 96 && this.currLetter.charCodeAt(0) < 122){
      if(this.currLetter == this.expecLetter[0]){
        this.expecLetter = this.expecLetter.substring(1)
        this.expecLetter += String.fromCharCode(Math.floor(Math.random() * (Math.floor(25) - Math.ceil(1)) + 97));
        this.corrCounter += 10 * this.multiplier;
        this.streak++;
        this.multiplier = 1 + this.streak * (1/10);
      }
      else{
      this.decLife()
      //Dead-case
      this.multiplier = 1;
      this.streak = 0;
    }
  }
  }
  if(this.dead == true && this.currLetter == "Enter")
    this.playAgain()
  }
  playAgain()
  {
    this.dead = false;
    this.life = [true,true,true];
    this.expecLetter = "";
    this.timeLeft = 600;
    this.start = false;
    for(let i = 0; i < 11; i++)
    {
      this.expecLetter += String.fromCharCode( Math.floor(Math.random() * (Math.floor(25) - Math.ceil(1)) + 97));
    }
  }
}
