    // object key is 1 value is Jan
    // getEventsByMonth(){
    //     return fetch(`http://localhost:8088/events/?userId=${sessionStorage.getItem("userId")}`)
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
    //         //Sort date and time in ascending order
    //         parsedEvents.sort((a, b) => {          
    //             if (a.date === b.date) {
    //                return parseInt(a.time) - parseInt(b.time);
    //             }
    //             return a.date > b.date ? 1 : -1;
    //          });

    //         //Create today's date
    //         var today = new Date()                    
    //         today = `${today.getFullYear()}-${(today.getMonth()+ 1) > 9 ? "" + (today.getMonth()+ 1): "0" + (today.getMonth()+ 1)}-${today.getDate() > 9 ? "" + today.getDate(): "0" + today.getDate()}`

    //         for (const monthNum in monthNames){
    //             const eventsPerMonth = parsedEvents.filter(event => {
    //                 let perMonth = false

    //                 if(event.date >= today && parseInt(event.date.split("-")[1]) === parseInt(monthNum) ){
    //                     perMonth = true
    //                 }
    //                 return perMonth
    //             })
    //             console.log(eventsPerMonth)
    //             console.log(eventsPerMonth.length)
    //             console.log(monthNames[monthNum])
    //             if(eventsPerMonth.length !== 0){
    //                 event_domPrinter.printAccordion(monthNames[monthNum], eventsPerMonth, eventsPerMonth.length)
    //             }
    //         }
    //     })
                
    // }

