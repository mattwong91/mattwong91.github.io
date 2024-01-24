import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  constructor() {
    console.log('This is the Home Controller')
    // @ts-ignore
    AOS.init()
  }

  testButton() {
    Pop.success('The button Works 😎')
  }
}