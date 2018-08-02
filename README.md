## rxjs-webworker
RXJS extenstions for web worker based on rxjs6

### Steps
`npm install rxjs-webworker`

### Observables

#### fromWorker()
Create an observable from a webworker, path, or function
``` javascript
const fromWorker$ = fromWorker(e => {
  const msg = e.data
  self.postMessage(msg)
}, 'from worker')
fromWorker$.subscribe(val => {
  console.log('val', val)
})
```
also you can post init messages
``` javascript
fromWorker(e => {
  while (count < 1000000) {
    count++
  }
  self.postMessage(`${e.data} ${count}`)
}, 'hello').subscribe(value => {
  // hello 1000000
  console.log(value)
})
```

### Operators
#### mapWorker()
simple map function that runs in a web worker
``` javascript
const mapWorker$ = of('start').pipe(
  mapWorker(val => {
    return `${val} to end`
  })
)
mapWorker$.subscribe(val => {
  console.log(val)
})
```
