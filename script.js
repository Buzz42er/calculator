function insert(ent) {
    //inserts new caracter that you tiped in on input
    document.getElementById('text').innerHTML += ent;

    //shows how many times have you clicked on any input buttons that have insert() function 
    console.log('single')
}

function clearL() {
    //removes the last tiped caracter
    var del = document.getElementById('text').innerHTML;
    document.getElementById('text').innerHTML = del.substring(0, del.length - 1);

    //shows how many times you have clicked on /// button
    console.log("del single");
}

function clearALL() {
    //clears text div  
    var text = document.getElementById('text');
    var AC = text.innerHTML;
    text.innerHTML = AC.substring(0, AC.length - clearALL);

    //clears output div
    var output = document.getElementById('output');
    var DC = output.innerHTML;
    output.innerHTML = DC.substring(0, DC.length - clearALL);

}

function equal() {
    if (document.getElementById('text').innerHTML != '') {
        document.getElementById('output').innerHTML = eval(document.getElementById('text').innerHTML);
        console.log("action has been done")
    }

}