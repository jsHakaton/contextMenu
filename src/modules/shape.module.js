import {Module} from '../core/module'
import {spinnerBlock} from '../libs/spinner'

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const body = document.querySelector('body')
        const spinnerHTML = spinnerBlock()
        body.append(spinnerHTML)
        setTimeout(() => { spinnerHTML.remove() }, 5000)
        
    }
}