<?php
function randomId($lg)
{
	$result = '';
	$letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	for ($i=0; $i< $lg; $i++) {
		$random = rand(0, 25);
		$result.=$letter[$random];
	};
	echo $result;
	return $result;
}
?>
