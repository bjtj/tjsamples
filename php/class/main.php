<?php

class Person {
    public $name = "";
    public $age = 0;

    function __construct($name, $age) {
	$this->name = $name;
	$this->age = $age;
    }

    function __destruct() {
	/*  */
    }

    function hello() {
	echo "Hello $this->name ($this->age).\n";
    }
}

class Sasha extends Person {
    function __construct($age) {
	parent::__construct('Sasha', $age);
    }
}

$person = new Person('Steve', 30);
$person->hello();

$sasha = new Sasha(24);
$sasha->hello();
?>
