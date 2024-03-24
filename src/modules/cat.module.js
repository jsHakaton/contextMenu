import {Module} from '../core/module'
import { random } from '../utils'

// export class CatModule extends Module {
//     constructor(type, text) {
//         super(type, text)

//         this.existingCoordinates = []; // Массив для хранения занятых координат
//     }

//     generateRandomCoordinates() {
//         const x = Math.floor(Math.random() * (window.innerWidth - 150)); // Генерация рандомной координаты X
//         const y = Math.floor(Math.random() * (window.innerHeight - 150)); // Генерация рандомной координаты Y
//         return { x, y };
//     }

//     isCoordinateOccupied(x, y) {
//         console.log(this.existingCoordinates)
//         const result = this.existingCoordinates.some(coord => {
//             console.log(coord)
//             return (x >= coord.x && x <= coord.x + 150) || (y >= coord.y && y <= coord.y + 150);
//         });

//         console.log(result)
//         return result
//     }

//     trigger() {
//         const imageContainer = document.createElement('div')
//         imageContainer.classList.add('image-container')
//         document.body.appendChild(imageContainer)

//         let coordinates = this.generateRandomCoordinates();

//         while (this.isCoordinateOccupied(coordinates.x, coordinates.y)) {
//             coordinates = this.generateRandomCoordinates();
//         }

//         this.existingCoordinates.push(coordinates);

//         const img = document.createElement('img');

//         const catNumber = random(1,9)
//         img.style.position = 'absolute'
//         img.src = `../../assets/images/cat_${catNumber}.svg`;
//         img.style.left = `${coordinates.x}px`;
//         img.style.top = `${coordinates.y}px`;
//         img.style.width = '150px' 
//         img.style.height = '150px'

//         imageContainer.appendChild(img);


//         // const randomXOrY = (size) => Math.floor(Math.random() * size)
//         // const width = window.innerWidth - 200
//         // const height = window.innerHeight - 150

//         // const left = randomXOrY(width) 
//         // const top = randomXOrY(height)
//         // if(this.checkImageAtCoordinates(left, top)){
//         //     this.trigger()
//         // } else {


        
//         // // document.body.style.overflow = 'hidden'


//         // console.log(width)
//         // console.log(height)



//         // img.alt = 'Описание изображения';


//         // img.style.left = `${left}px`
//         // img.style.top = `${top}px`


//         // imageContainer.append(img);
//         // }
//     }

//     // checkImageAtCoordinates(x, y) {
//     //     console.log(x,y)
//     //     const elements = document.elementsFromPoint(x, y);
//     //     console.log(elements)

//     //     for (let element of elements) {
//     //         if (element.tagName === 'IMG' && element.width === '150px' && element.height === '150px') {
//     //             console.log('Изображение размером 150x150px найдено в координатах x:', x, 'y:', y);
//     //             return true;
//     //         }
//     //     }
    
//     //     console.log('Изображение размером 150x150px не найдено в координатах x:', x, 'y:', y);
//     //     return false;
//     // }
    
// }



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
        const x = Math.floor(Math.random() * (window.innerWidth - 150)); // Генерация рандомной координаты X
        const y = Math.floor(Math.random() * (window.innerHeight - 150)); // Генерация рандомной координаты Y
        return { x, y };
    }
}