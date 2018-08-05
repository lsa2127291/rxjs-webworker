import { fromWorker } from '../dist/index.min'

const fromWorker$ = fromWorker(e => {
  const msg = e.data
  self.postMessage(msg)
}, 'from worker')
fromWorker$.subscribe(val => {
  console.log('val', val)
})
