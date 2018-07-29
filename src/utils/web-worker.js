// creates an inline web worker
export const createWorker = worker => {
  if (typeof worker === 'string') {
    return new Worker(worker)
  }

  const blob = new Blob(['self.onmessage = ', worker.toString()], { type: 'text/javascript' })
  const url = URL.createObjectURL(blob)
  return new Worker(url)
}
