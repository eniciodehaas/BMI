let bereken = document.getElementById('bereken');
let leeftijd = document.getElementById('leeftijd');
let lengte = document.getElementById('lengte');
let gewicht = document.getElementById('gewicht');
let resultaat = document.getElementById("resultaat");
let input = document.getElementById("input");

bereken.addEventListener('click', function(){
  console.log("click");
  ajax(gewicht.value, lengte.value);
  clearResult();
})

function clearResult(){
  lengte.value = "";
  gewicht.value = "";
  leeftijd.value = "";
}

function ajax(gewicht, lengte){
  let debug = true;
  let controlScript = "BMI.php";
  let xmlhttp = new XMLHttpRequest();
  let httpString = controlScript + "?gewicht=" + gewicht + "&lengte=" + lengte;
  let httpResponse = "";
  if (debug) console.log(httpString);
    xmlhttp.open("GET", httpString, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        if (debug) console.log("http response = " + xmlhttp.responseText);
        httpResponse = xmlhttp.responseText;
        resultaat.innerHTML = httpResponse;
    }}
}
