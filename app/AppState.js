import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  /**@type {import('./models/Project.js').Project[]} */
  projects = []
  /**@type {import('./models/Project.js').Project} */
  activeProject = null
}

export const AppState = createObservableProxy(new ObservableAppState())