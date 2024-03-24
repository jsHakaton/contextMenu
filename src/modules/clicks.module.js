import { Module } from '../core/module'
import { TimerModule } from '../modules/timer.module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {            
        const timerModule = new TimerModule('timer', 'TimerModule');
        timerModule.createTimer(10);
        let totalSingleClicks = 0;
        let totalDoubleClicks = 0;

        setTimeout(() => {
            document.body.addEventListener('click', onClick);
            document.body.addEventListener('dblclick', onDoubleClick);

        }, 1000)
       
        setTimeout(() => {
            document.body.removeEventListener('click', onClick);
            document.body.removeEventListener('dblclick', onDoubleClick);

            totalSingleClicks = totalSingleClicks - totalDoubleClicks * 2;

            alert(`Всего одинарных кликов: ${totalSingleClicks}. Всего двойных кликов: ${totalDoubleClicks}.`)
            totalSingleClicks = 0;
            totalDoubleClicks = 0;                
        }, 11500)  
        
        function onClick() {
            totalSingleClicks += 1;
            console.log('Одиночный клик')
        }

        function onDoubleClick() {
            totalDoubleClicks += 1;
            console.log('Двойной клик');
        }
    }

    result() {
        document.body.removeEventListener('click', this.onClick);
        document.body.removeEventListener('dblclick', this.onDoubleClick);
        this.totalSingleClicks = this.totalSingleClicks - this.totalDoubleClicks * 2;
        alert(`Всего одинарных кликов: ${this.totalSingleClicks}. Всего двойных кликов: ${this.totalDoubleClicks}.`);
    }
}