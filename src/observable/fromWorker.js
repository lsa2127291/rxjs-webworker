import { createWorker } from '../utils/web-worker'
import { Observable } from 'rxjs'
/**
 * create an observable from a passed in web worker
 * or create a new worker from a function or a path
 * @param {Object} webWorker
 * @param {Object|String} initMessage
 */
export const fromWorker = (webWorker, initMessage = 'init') => {
  return Observable.create(observer => {
    let worker
    if (webWorker instanceof Worker) {
      worker = webWorker
    } else {
      try {
        worker = createWorker(webWorker)
      } catch (err) {
        observer.error(err)
      }
    }
    worker.onmessage = e => {
      observer.next(e.data)
    }
    worker.onerror = err => observer.error(err)
    worker.postMessage(initMessage)
  })
}