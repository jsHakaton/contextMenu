import './styles.css'
import { TestModule } from './modules/test.module'
import { ContextMenu } from './menu'
import { SoundModule } from './modules/sound.module'

const testModule = new TestModule('text', 'TestModuleMenu')
const soundModule = new SoundModule('sound', 'Random sound')

const contextMenu = new ContextMenu('.menu')
contextMenu.add(testModule)
contextMenu.add(soundModule)