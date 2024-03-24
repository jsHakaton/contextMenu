import {Module} from '../core/module'
import {spinnerBlock} from '../libs/spinner'

export class SpinnerModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const body = document.querySelector('body')
        const spinnerContainer = document.querySelector('.spinner-container')
        if (spinnerContainer) {
            spinnerContainer.remove()
        }
        const spinnerHTML = spinnerBlock()
        body.append(spinnerHTML)
        // document.body.insertAdjacentElement('afterbegin', spinnerHTML)
        setTimeout(() => { spinnerHTML.remove() }, 50000)

    }
}