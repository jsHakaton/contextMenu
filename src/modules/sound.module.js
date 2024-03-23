import { Module } from '../core/module'
import * as util from '../utils'

export class SoundModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        document.querySelector(`[data-type=${this.type}]`).addEventListener('click', () => {
            const audioCtx = new window.AudioContext();
            const oscillator = audioCtx.createOscillator();
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(util.random(100, 3000), audioCtx.currentTime);
            oscillator.connect(audioCtx.destination);
            oscillator.start();
            setTimeout(e => oscillator.stop(), 300);
        })
    }
}