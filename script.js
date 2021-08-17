var testo="";
var pos=0;
var cursore="_";

function scriviTxt(elem,car) {
  if (elem.className == "tasto") {
    elem.className = "tasto2";
  } else if (elem.className == "tasto2") {
    elem.className="tasto";
  }
  testo=document.getElementById("testo").innerHTML;
  if (car == "x") {
    pos-=1;
    testo=testo.substring(0,pos) + testo.substring(pos+1);
  } else {
    //alert("pos "+pos);
    testo=testo.substring(0,pos)+ car + testo.substring(pos);
    pos+=1;
  }
  document.getElementById("testo").innerHTML = testo;
}

function muoviCursore(direzione) {
  testo=document.getElementById("testo").innerHTML;
  testo=testo.replace(cursore, "");
  //alert("pos"+pos+"lt "+testo.length);
  if (direzione == 99) {
    testo=testo+cursore;
    pos=testo.length-1;
    document.getElementById("testo").innerHTML = testo;
  } else if (pos+direzione >-1 && pos+direzione <= testo.length) {
    pos=pos+direzione;
    //alert("pos"+pos);
    testo=testo.substring(0,pos)+ cursore + testo.substring(pos);
    document.getElementById("testo").innerHTML = testo;
    //mySelect(pos);
  }
}

function mySelect(position) {
  a=1;
}

function myFunc() {
  a=0;
}

function attivaScroll() {
  if (document.body.style.overflow == "hidden") {
    document.body.style.overflow='visible';
  }
  else {
    document.body.style.overflow='hidden';
  }
}
