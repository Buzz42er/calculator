function insert(ent) {
    document.getElementById('text').innerHTML+=ent;
    console.log('single')
}

function clearL() {
    var del = document.getElementById('text').innerHTML;
    document.getElementById('text').innerHTML=del.substring(0,del.length-1);
    console.log("del single");
}

function clearALL() {
    var text = document.getElementById('text');
    var AC = text.innerHTML;
    text.innerHTML=AC.substring(0, AC.length-clearALL)
    
}

function equal(){
    if(document.getElementById('text').innerHTML!='')    
    document.getElementById('output').innerHTML=eval(document.getElementById('text').innerHTML);
    
    }