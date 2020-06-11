// filterEventsByMonth(){
//     return fetch(`http://localhost:8088/events/`)
//     .then(r => r.json())
//     .then(parsedEvents => {
//         const monthNames = {
//             1:"January", 
//             2:"February", 
//             3:"March", 
//             4:"April", 
//             5:"May", 
//             6:"June", 
//             7:"July", 
//             8:"August", 
//             9:"September", 
//             10:"October", 
//             11:"November", 
//             12:"December"
//         }
//         const monthNamesArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//         const dateArray = parsedEvents.map(event => event.date)
//         const monthArray = dateArray.sort((a,b) => a.split("-")[1] - b.split("-")[1]).map(date => parseInt(date.split("-")[1]))
//         console.log(monthArray)
//         console.log(monthNames["January"])
//         console.log(monthNamesArray[1])
//         console.log(monthArray[0])
//         for (let i = 0; i < parsedEvents.length; i++){
//             for (let n = 0; i < monthArray.length; n++){
//                 console.log("Inside second for loop")
//                 // if(monthNames[n + 1] === monthArray[i]){
//                 //     console.log(`${monthNames[n + 1]}`)
//                 // }
//             // if(monthArray[i] === monthNames[i]){
//             //     console.log(`${monthArray[i]} equals ${monthNames[n]}`)
//             //     document.querySelector("#events-container").innerHTML += `${monthNames[n]}`
//             // }
//             }
//         }
//     })
// }

