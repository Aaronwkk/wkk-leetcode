let params = {
  a: [1,2,3],
  b: {
    c: 1,
    d: 2,
    z: [
      {
        a: 1,
        b: 2
      }
    ]
  }
}

function format(param){
  let ans = {}
  const dfs = function(obj, pre){
    const t = typeof obj
    if(t !== 'object') return t
    const isArray = Array.isArray(obj)
    if(isArray && obj.every(item => typeof item !== 'object')) return 'array'
    for(let k in obj){
      const key = pre ? `${pre}.${k}`: k
      dfs(obj[k], isArray ? pre : key)
    }
  }
  dfs(param)
  console.log(ans)
}

format(params)