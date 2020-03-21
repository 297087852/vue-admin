const throttle = function (func, wait, options = {}) {
  options = Object.assign({ leading: true, trailing: true }, options)
  let now; let previous = 0; let context; let args; let timer; let result

  const later = function () {
    previous = options.leading ? +new Date() : 0
    result = func.apply(context, args)
    timer = null
  }

  return function () {
    now = +new Date()
    context = this
    args = arguments
    if (!previous && !options.leading) previous = now

    const remaining = wait - (now - previous)

    if (remaining < 0) {
      previous = now
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      result = func.apply(context, arguments)
    } else if (!timer && options.trailing) {
      timer = setTimeout(later, remaining)
    }

    return result
  }
}

export { throttle }
