import './styles.css'
import { TestModule } from './modules/test.module'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'

const testModule = new TestModule('text', 'TestModuleMenu')
const backgroundModule = new BackgroundModule('background', 'Random background')

const contextMenu = new ContextMenu('.menu')
contextMenu.add(testModule)
contextMenu.add(backgroundModule)