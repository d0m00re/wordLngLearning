import GlobalApp from '../Entities/Global';

export {}

declare global {
  // Definition or type for the function.
  type Debug = (label: string) => (message: any, ...args: any[]) => void

  // If defining an object you might do something like this
  // interface IConfig { a: number, b: number }

  // Extend the Global interface for the NodeJS namespace.
  namespace NodeJS {
    interface Global {
      // Reference our above type, 
      // this allows global.debug to be used anywhere in our code.
      debug: Debug,
      globalApp : GlobalApp
    }
  }
  
  // This allows us to simply call debug('some_label')('some debug message')
  // from anywhere in our code.
  const debug: Debug
}

declare var __APP__DATA__ : GlobalApp;

