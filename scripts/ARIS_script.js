// Info to be fed from extension config; user preferences
let stamnummer = 5894

// To shorten custom error throwing
let err
const throwErr = (msg) => {
  err = msg
  alert(err)
  throw (err)
}

// Check if on correct page
let url = window.location.href
if (!url.includes('unitRoster')) {
  // This error should never throw if manifest.json is set correctly. Extension should only load/activate on unitRoster page.
  // Check correctness of the regex string match
  throwErr('Not on unitRoster page or unitRoster URL changed. Contact AMA')
}

// Check if the table has loaded
let roster = document.getElementById('tableRoster')
if (!roster) {
  throwErr('Unit tableRoster ID not found! Contact AMA')
}

// Check if table has a body
let table = roster.getElementsByTagName('tbody')[0]
if (!table) {
  throwErr('Table body is empty! Contact AMA')
}

// Check if the table body has rows
let allRows = [...table.children]
if (!allRows.length) {
  throwErr('The table has no rows! Contact AMA')
}

// Check if user's row is present
let myRow = allRows.find((row) => row.id.includes(stamnummer))
if (!myRow) {
  throwErr('Your schedule was not found, check your "stamnummmer" in the extension config. Contact AMA if problem persists')
}

// Spread childNodes into array and slice out first element = name
let myRowArray = [...myRow.childNodes]
let myName = myRowArray[0].innerHTML
let myRoster = myRowArray.slice(1)
console.log(myName)
console.log(myRoster)

//

// const getATCO = (row) => row.

// const isATCO = (row) => row.className.includes('person')


// let calendar = []
// myRow.forEach((row, i) => {
//   console.log(row)
//   let columns = []
//   if(isATCO(row)) {
//     columns = [...row.children]
//     columns.forEach((col, j) => {
//       if (j !== 0) {
//         calendar.push({ id: col.id, name: col.textContent })
//       }
//     })
//   }
// })

// console.log(calendar)