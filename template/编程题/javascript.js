// 手写 jsonStringify

function jsonStringify (obj) {
  let type = typeof obj;
  if(type === undefined){
    return null
  }
  if (type !== "object" || type === null) {
    if (/string|undefined|function/.test(type)) {
      obj = '"' + obj + '"';
    }
    return String(obj);
  } else {
    let json = []
    const isArray = Array.isArray(obj)
    for (let k in obj) {
      let v = obj[k];
      let type = typeof v;
      if (/string|undefined|function/.test(type)) {
        v = '"' + v + '"';
      } else if (type === "object") {
        v = jsonStringify(v);
      }
      json.push((isArray ? "" : '"' + k + '":') + String(v));
    }
    return (isArray ? "[" : "{") + String(json) + (isArray ? "]" : "}")
  }
}
// console.log(jsonStringify({ x: 5 }))
// "{"x":5}"
// console.log(jsonStringify([1, "false", false]))
// "[1,"false",false]"
// console.log(jsonStringify({ b: undefined }))
// "{"b":"undefined"}"
// const a = jsonStringify({ b: [1,{name: 'xiao'}] })
// console.log(a)


// image = [[1,1,1],[1,1,0],[1,0,1]] 
// sr = 1, sc = 1, newColor = 2
// 输出：[[2,2,2],[2,2,0],[2,0,1]]

function floodFill (image, sr, sc, newColor){

  const oldColor = image[sr][sc]

  if(oldColor === newColor) return image

  const x = image[0].length
  const y = image.length

  const buffer = [[0,1], [0,-1], [1,0], [-1,0]]

  const fill = function(image, w, h){

    if(w >= x || w < 0 || h < 0 || h >= y) return

    if(image[h][w] !== oldColor) return
    if(image[h][w] === newColor) return
    image[h][w] =  newColor

    for(let i = 0; i<buffer.length; i++){

      const buf = buffer[i]
      fill(image, w+buf[0], h+buf[1])

    }
  }

  fill(image, sr, sc)
  return image
}

floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)