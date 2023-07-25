let id=setInterval (()=> {
    console.log("Rahul Khandait");
}, 2000);

setTimeout (()=> {
    clearInterval(id);
    console.log("Interval Time out");
}, 10000);  