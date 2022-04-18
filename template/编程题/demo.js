function jsonStringify(obj){
  if(typeof obj !== 'object'){
    if(['function', 'string', 'underfind'].includes(typeof obj)){
      return '"' + obj + '"'
    }
    return '"' + obj + '"'
  } else {
    const res = []
    const isArray = Array.isArray(obj)
    for(const k in obj){
      let val = obj[k]
      if(['function', 'string', 'underfind'].includes(typeof obj)){
        val = '"' + obj + '"'
      } else if(typeof val === 'object'){
        val = jsonStringify(val)
      }
      res.push(isArray ? val: '"' + k + '"' + ':' + val)
    }
    return (isArray ? "[":"{") + String(res) + (isArray ? "]":"}")
  }
}

const a = jsonStringify({ b: [1,{name: 'xiao'}] })
console.log(a)