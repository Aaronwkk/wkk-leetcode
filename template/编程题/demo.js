const deepCopy = function(obj){

  if(typeof obj !== 'object') return obj

  let temp = Array.isArray(obj) ? []:{}

  for(let k in  obj){
    const val = obj[k]
    temp[k] = deepCopy(obj)
  }
  return temp
}