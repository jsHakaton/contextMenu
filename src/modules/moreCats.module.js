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

        console.log(x, y)
        console.log(countColums, countRows)
        
        for (let i = 0; i < countRows; i++) {
                console.log('New string', i)
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

        // function createImageWithDelay(catNumber) {
        //     const img = document.createElement('img');
        //     img.src = `../../assets/images/cat_${catNumber}.svg`;
        //     img.alt = 'Кот';
        //     img.style.width = '100px';
        //     img.style.height = '100px';
        //     imageContainer.append(img);
        // }
        
        // for (let i = 0; i < countRows; i++) {
        //     console.log('New string', i);
        //     setTimeout(() => {
        //         for (let j = 0; j < countColums; j++) {
        //             const catNumber = random(1, 9);
        //             setTimeout(createImageWithDelay.bind(null, catNumber), j * 1000); // Задержка в 1 секунду между появлением картинок в одной строке
        //         }
        //     }, i * 1000); // Задержка в 1 секунду перед добавлением новой строки
        // }

        // setTimeout(() => {
            // img.remove()
        // }, 10000);
    }
}