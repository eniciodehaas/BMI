<?php
  $gewicht = $_GET["gewicht"];
  $lengte = $_GET["lengte"];
  BMIcalc($gewicht, $lengte);

function BMIcalc($gewicht, $lengte){
  $lengte = $lengte / 100;
  $BMI = round($gewicht / pow($lengte, 2), 1);
  switch ($BMI) {
    case $BMI < 18.5:
      $resultaat = "<font color=\"yellow\">u heeft ondergewicht</font>";
      break;
    case $BMI < 25:
      $resultaat = "<font color=\"green\">u heeft een normaal gewicht</font>";
      break;
    case $BMI < 30:
      $resultaat = "<font color=\"yellow\">u heeft licht overgewicht</font>";
      break;
    case $BMI < 35:
      $resultaat = "<font color=\"darkorange\">u heeft overgewicht</font>";
      break;
    case $BMI < 40:
      $resultaat = "<font color=\"red\">u heeft obesitas</font>";
      break;
    default:
      $resultaat = "<font color=\"red\">u heeft ernstige obesitas</font>";
      break;
  }
  echo "Uw bmi is " . $BMI . ", " . $resultaat;
  }
  ?>
