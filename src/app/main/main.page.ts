import { Component } from '@angular/core';
import { log } from 'util';
declare var Tone: any;
@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class Beatbox {
  constructor() {

  }
  sounds = {
    sound1: new Tone.Player("./mp3/top_1.mp3").toMaster(),
    sound2: new Tone.Player("./mp3/top_2.mp3").toMaster(),
    sound3: new Tone.Player("./mp3/top_3.mp3").toMaster(),
    sound4: new Tone.Player("./mp3/top_4.mp3").toMaster(),
    sound5: new Tone.Player("./mp3/middle_1.mp3").toMaster(),
    sound6: new Tone.Player("./mp3/middle_2.mp3").toMaster(),
    sound7: new Tone.Player("./mp3/middle_3.mp3").toMaster(),
    sound8: new Tone.Player("./mp3/middle_4.mp3").toMaster(),
    sound9: new Tone.Player("./mp3/bottom_1.mp3").toMaster(),
    sound10: new Tone.Player("./mp3/bottom_2.mp3").toMaster(),
    sound11: new Tone.Player("./mp3/bottom_3.mp3").toMaster(),
    sound12: new Tone.Player("./mp3/bottom_4.mp3").toMaster(),
    sound13: new Tone.Player("./mp3/horns.mp3").toMaster(),
    sound14: new Tone.Player("./mp3/guitarron.mp3").toMaster()
  }
  Debil_vardan(sound) {
    Tone.context.resume().then(() => { this.sounds[sound].start() });
  }
  objectKeys = Object.keys;
  tones = {
    kick: {
      exp: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
      }, 
      sounds: new Tone.Player("./mp3/top_1.mp3").toMaster()
    },
    snare: {
      exp: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
      },
      sound: new Tone.Player("./mp3/middle_1.mp3").toMaster()
    },
  
    shaker: {
      exp: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
      },
      sound: new Tone.Player("./mp3/bottom_1.mp3").toMaster()
    },
  }
  ind = { count: 0 };
  ngOnInit() {
    let ind = this.ind;
    let step = this.ind.count % 4;
    let tones = this.tones;
    Tone.Transport.scheduleRepeat(function () { repeat(); }, "8n");
    Tone.Transport.start();
    function repeat() {
      for (let tone in tones) {
        if (ind.count == 8) ind.count = 0;
        let currTone = tones[tone];
        let count = +"1" + ind.count;
        if (currTone.exp[count]) {
          Tone.context.resume().then(() => {
            currTone.sound.start();
          })
        }
      }
      setTimeout(() => { ind.count++ }, 0);
    }
    setInterval(() => { repeat(); }, 500)
  }
}