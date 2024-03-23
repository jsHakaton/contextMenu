import { Module } from '../core/module'
import { getRandomColor } from '../utils'

export class BackgroundModule extends Module {
    trigger() {
        const body = document.querySelector('body');
        body.style.background = `linear-gradient(${getRandomColor() }, ${getRandomColor()}, ${getRandomColor()}) no-repeat`;
    }
}