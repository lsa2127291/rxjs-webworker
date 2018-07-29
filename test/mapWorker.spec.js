import { mapWorker } from '../dist'
import { of } from 'rxjs'
const mapWorker$ = of('start').pipe(
  mapWorker(val => {
    return `${val} to end`
  })
)
mapWorker$.subscribe(val => {
  console.log(val)
})