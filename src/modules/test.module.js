import {Module} from '../core/module'

export class TestModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        document.querySelector(`[data-type=${this.type}]`).addEventListener('click', () => {
            alert('TEST')
        })
    }
}