import { fromWorker } from '../dist'

const fromWorker$ = fromWorker(e => {
  const msg = e.data
  self.postMessage(msg)
}, 'from worker')
fromWorker$.subscribe(val => {
  console.log('val', val)
})
