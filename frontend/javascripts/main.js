import * as Turbo from '@hotwired/turbo'
import { Application } from '@hotwired/stimulus'
import { FrameController } from './controllers/frame-controller.js'

document.addEventListener('turbo:before-fetch-request', (e) => {
  console.log(['before fetch request outside of frame controller', e])
})

document.addEventListener('turbo:before-cache', (e) => {
  console.log(['before cache', e])
})

;window.onerror = (message, source, lineno, colno, error) => {
  console.log('window onerror')
  console.log(error)
}

const app = Application.start()
app.register('frame', FrameController)

Turbo.start()

