#! /usr/bin/php
<?php

class Voiture
{

	var $nb_roue = 4;
	var $has_chairs = true;
  var $vitesse;
	private $_code;

	function avance($howmuch){
		echo "avancing : ".$howmuch;

	}

	function tourner(){
		echo "turning : ".$howmuch;

	}
}

function getCode(){
return $this->code;
}
function setCode($code){
	$this->$code = $code;
}

?>
