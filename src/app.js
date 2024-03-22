import './styles.css'
import { TestModule } from './modules/test.module'
import { ContextMenu } from './menu'
import { TimerModule } from './modules/timer.module'

const testModule = new TestModule('test', 'TestModuleMenu')
const timerModule = new TimerModule('timer', 'TimerModule')

const contextMenu = new ContextMenu('.menu')
contextMenu.add(testModule)
contextMenu.add(timerModule)