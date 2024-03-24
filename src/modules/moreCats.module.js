import {Module} from '../core/module'
import { random } from '../utils'

export class MoreCatsModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const container = document.querySelector('.image-container')
        if(container){
            container.remove()
        }

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        imageContainer.style.display = 'flex'
        imageContainer.style.position = 'fixed'
        imageContainer.style.flexWrap = 'wrap'
        imageContainer.style.zIndex = '2'
        imageContainer.style.justifyItems = 'center'
        imageContainer.style.alignItems = 'center'
        document.body.appendChild(imageContainer)


        const x = window.innerWidth
        const y = window.innerHeight
        const countColums = Math.trunc(x / 100)
        const countRows = Math.trunc(y / 100)
        
        for (let i = 0; i < countRows; i++) {
            for (let j = 0; j < countColums; j++) {
                const catNumber = random(1,9)
                const img = document.createElement('img');
                img.src = `../../assets/images/cat_${catNumber}.svg`;
                img.alt = 'Кот';
                img.style.width = '100px'
                img.style.height = '100px'
                imageContainer.append(img);
            }
        }
    }
}