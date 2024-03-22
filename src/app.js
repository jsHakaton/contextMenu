import './styles.css'
import { TestModule } from './modules/test.module'
import { ContextMenu } from './menu'

const testModule = new TestModule('text', 'TestModuleMenu')

const contextMenu = new ContextMenu('.menu')
contextMenu.add(testModule)