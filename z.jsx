const timeoutID = setTimeout(function(){
    console.log('Zadziala za 5 sek !');
},5000);
clearTimeout(timeoutID);