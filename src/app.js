import './styles.css'
import { ContextMenu } from './menu'
import { TimerModule } from './modules/timer.module'
import { BackgroundModule } from './modules/background.module'
import { SoundModule } from './modules/sound.module'
import { CatModule } from './modules/cat.module'
import { SpinnerModule } from './modules/spinner.module'


const timerModule = new TimerModule('timer', 'TimerModule')
const backgroundModule = new BackgroundModule('background', 'Random background')
const soundModule = new SoundModule('sound', 'Random sound')
const catModule = new CatModule('cat', 'Add Cat')
const spinnerModule = new SpinnerModule('spinner', 'Add spinner')


const contextMenu = new ContextMenu('.menu')
contextMenu.add(timerModule)
contextMenu.add(backgroundModule)
contextMenu.add(soundModule)
contextMenu.add(catModule)
contextMenu.add(spinnerModule)