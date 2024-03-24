import './styles.css'
import { ContextMenu } from './menu'
import { TimerModule } from './modules/timer.module'
import { BackgroundModule } from './modules/background.module'
import { SoundModule } from './modules/sound.module'
import { CatModule } from './modules/cat.module'
import { MoreCatsModule } from './modules/moreCats.module'
import { SpinnerModule } from './modules/spinner.module'
import { ClicksModule } from './modules/clicks.module'


const timerModule = new TimerModule('timer', 'Таймер отсчета')
const backgroundModule = new BackgroundModule('background', 'Случайный фон')
const soundModule = new SoundModule('sound', 'Случайный звук')
const catModule = new CatModule('cat', 'Случайный котик')
const moreCatsModule = new MoreCatsModule('moreCats', 'Больше котиков!')
const spinnerModule = new SpinnerModule ('spinner', 'Спиннер')
const clicksModule = new ClicksModule('clicks', 'Аналитика кликов')


const contextMenu = new ContextMenu('.menu')
contextMenu.add(timerModule)
contextMenu.add(backgroundModule)
contextMenu.add(soundModule)
contextMenu.add(catModule)
contextMenu.add(moreCatsModule)
contextMenu.add(spinnerModule)
contextMenu.add(clicksModule)
