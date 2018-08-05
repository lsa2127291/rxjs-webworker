import { mapWorker } from '../dist/index.min'
import { of } from 'rxjs'
const mapWorker$ = of('start').pipe(
  mapWorker(val => {
    return `${val} to end`
  })
)
mapWorker$.subscribe(val => {
  console.log(val)
})
