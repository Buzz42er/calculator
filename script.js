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

function parenthesis() {
    //if there is odd number if left parenthesis => add right parenthesis else add left
    //if there is odd number of clicks on the button => add right parenthesis else add left

    //need to add counter and if 1 then ) else (its 0) then (
        //not shore how to do it jet
    var click = 0;
    
    if (click % 2) {
        document.getElementById("text").innerHTML += ")";
        click++;
        console.log(click);
    }
    else {
        document.getElementById("text").innerHTML += "(";
        console.log(click);
    }
    
}