<?php

require_once('./class/Cart.php');

$cart = new Cart(1, 50);
$cart->setTotalPrice(40);
$cart->discount(10);

var_dump($cart->getTotalPrice());
