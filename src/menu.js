import {Menu} from './core/menu'

const menu = document.querySelector('.menu')
export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)

        document.addEventListener( "contextmenu", this.open);
    }

    open(event) {
        event.preventDefault()
        menu.classList.add('open')
        menu.style.top = `${event.clientY}px`
        menu.style.left = `${event.clientX}px`
    }

    close() {
        menu.classList.remove('open')
    }

    add(module) {
        const newElemnt = module.toHTML()
        menu.insertAdjacentHTML('beforeend', newElemnt)

        document.querySelector(`[data-type=${module.type}]`).addEventListener('click', () => {
            module.trigger()
            this.close()
        })

    }
}