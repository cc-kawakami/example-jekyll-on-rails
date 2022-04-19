import { Controller } from '@hotwired/stimulus'

export class FrameController extends Controller {
  connect () {
    console.log('connected')
    console.log(this.element)
    //this.element.removeAttribute('src')
  }

  intercept (e) {
    console.log(['intercept', e])
    if (e.detail.fetchResponse.failed) {
      this.element.style = 'display: none'
    }
  }

  beforeFetch (e) {
    console.log(['before-fetch', e])
  }
  
  beforeVisit (e) {
    console.log(['beforeVisit', e])      
  }
  
  frameRender (e) {
    console.log(['frameRender', e])
  }

  frameLoad (e) {
    console.log(['frameLoad', e])
  }
  
  check (e) {
    console.log(e)
  }
}
