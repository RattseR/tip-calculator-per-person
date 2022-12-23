function active(event)  {
    event.target.style.color = "hsl(183, 100%, 15%)";
    event.target.style.background = "hsl(172, 67%, 45%)";
    
    event.target.setAttribute("state", "active");
    document.getElementById("custom-percentage").setAttribute("state", "inactive");
    document.getElementById("reset").style.opacity = "1";
    document.getElementById("reset").style.opacity = "1";document.getElementById("reset").style.cursor = "pointer";
    let bill= parseInt(document.getElementById("bill-amount").value);
    let tiprate = parseInt(event.target.value)/100 ;
    let numberOfPeople =  parseInt(document.getElementById("people-amount").value);
    let tipperperson = bill*tiprate/numberOfPeople;
    let total = (bill*tiprate+bill)/numberOfPeople;
    console.log(Math.round(100*tipperperson)/100);
    document.getElementById("tipperperson").innerText = "$"+Math.round(100*tipperperson)/100;
    document.getElementById("totalperperson").innerText = "$"+Math.round(100*total)/100;
    let parent = event.target.parentNode;
    for (let i= 0; i<parent.children.length; i++){
        let child = parent.children[i];
        if (child.getAttribute("class")=="default-value" && child.value!=event.target.value) {
            child.style.color = "hsl(0, 0%, 100%)";
            child.style.background = "hsl(183, 100%, 15%)";
            child.style.hover
            child.setAttribute("state", "inactive");
    }
}
}

function active2 (event) {
    event.target.style.color = "hsl(183, 100%, 15%)";
    event.target.style.background = "hsl(172, 67%, 45%)";
    event.target.setAttribute("state", "active");
    let bill=document.getElementById("bill-amount").value;
    let tiprate = event.target.value;
    let parent = event.target.parentNode;
    for (let i= 0; i<parent.children.length; i++){
        let child = parent.children[i];
        if (child.getAttribute("class")=="default-value" && child.value!=event.target.value) {
            child.style.color = "hsl(0, 0%, 100%)";
            child.style.background = "hsl(183, 100%, 15%)";
            child.setAttribute("state", "inactive");
    }
}
}

