let roster = document.getElementById('tableRoster')
let table = roster.getElementsByTagName('tbody')[0]
let rows = [...table.children]

const isATCO = (row) => row.className.includes('person highlight')


let calendar = []
rows.forEach((row, i) => {
  let columns = []
  if(isATCO(row)) {
    columns = [...row.children]
    columns.forEach((col, j) => {
      if (j === 0) {
        
      }
      calendar.push({ id: col.id, name: col.textContent })
    })
  }
})

console.log(calendar)