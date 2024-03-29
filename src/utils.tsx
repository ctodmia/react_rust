export interface DataCircle {
  x: number, 
  y: number,
  r: number,
  color: number
}

export function getData() {
  let numItems = 20 + Math.floor(20 * Math.random())
  let data: DataCircle[] = []
  for (let i = 0; i < numItems; i++) {
    data.push({
      x: Math.random(),
      y: Math.random(),
      r: Math.random(),
      color: i % 5,
    })
  }
  return data
}
