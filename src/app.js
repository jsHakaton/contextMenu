import './styles.css'
import { TestModule } from './modules/test.module'
import { ContextMenu } from './menu'
import { TimerModule } from './modules/timer.module'
import { BackgroundModule } from './modules/background.module'
import { SoundModule } from './modules/sound.module'
import { ClicksModule } from './modules/clicks.module'


const testModule = new TestModule('test', 'TestModuleMenu')
const timerModule = new TimerModule('timer', 'TimerModule')
const backgroundModule = new BackgroundModule('background', 'Random background')
const soundModule = new SoundModule('sound', 'Random sound')
const clicksModule = new ClicksModule('clicks', 'Click statistics')


const contextMenu = new ContextMenu('.menu')
contextMenu.add(testModule)
contextMenu.add(timerModule)
contextMenu.add(backgroundModule)
contextMenu.add(soundModule)
contextMenu.add(clicksModule)