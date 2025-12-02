fetch("http://localhost:3000/getschedule?id=4").then(data => data.text().then(data => console.log("normal",data)))

fetch("http://localhost:3000/getschedule_ida?id=4").then(data => data.text().then(data => console.log("ida", data)))

fetch("http://localhost:3000/getschedule_vuelta?id=4").then(data => data.text().then(data => console.log("vuelta", data)))

