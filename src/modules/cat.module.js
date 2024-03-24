import {Module} from '../core/module'
import { random } from '../utils'

export class CatModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const audio = new Audio(`../../assets/audio/meow.mp3`);
        audio.play();

        let coordinates = this.generateRandomCoordinates();
        const catNumber = random(1,9)

        console.log(coordinates.x)
        console.log(coordinates.y)

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        document.body.appendChild(imageContainer)

        const img = document.createElement('img');
        img.src = `../../assets/images/cat_${catNumber}.svg`;
        img.alt = 'Кот';
        img.style.position = 'absolute'
        img.style.left = `${coordinates.x}px`
        img.style.top = `${coordinates.y}px`
        img.style.width = '150px'
        img.style.height = '150px'
        imageContainer.append(img);
        setTimeout(() => {
            img.remove()
        }, 10000);
    }

    generateRandomCoordinates() {
        const x = Math.floor(Math.random() * (window.innerWidth - 150));
        const y = Math.floor(Math.random() * (window.innerHeight - 150));
        return { x, y };
    }
}