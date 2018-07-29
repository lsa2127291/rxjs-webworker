import { createInlineWorker } from '../utils/web-worker-inline'
import { Observable } from 'rxjs'
let workerMap = new Map()
/**
 * 将函数映射为worker的算子
 * @param {Function} fn
 */
export const mapWorker = fn => source => new Observable(observer => {
  const workerString = fn.toString()
  let worker
  if (workerMap.has(workerString)) {
    worker = workerMap.get(workerString)
  } else {
    worker = createInlineWorker(fn)
    workerMap.set(workerString, worker)
  }
  worker.onmessage = e => observer.next(e.data)
  worker.onerror = err => observer.next(err)
  return source.subscribe(
    value => worker.postMessage(value)
  )
})
