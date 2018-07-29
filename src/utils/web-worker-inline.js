// creates an inline web worker
export const createInlineWorker = fn => {
  const blob = new Blob(
    [
      'self.cb = ', fn.toString(), ';',
      'self.onmessage = function (e) { self.postMessage(self.cb(e.data)) }'
    ], {
      type: 'text/javascript'
    }
  )

  const url = URL.createObjectURL(blob)

  return new Worker(url)
}
