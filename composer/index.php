<?php

spl_autoload_register(function($class){
    $path = __DIR__."\\".$class.".php";
    //$path = dirname(__DIR__)."\\".$class.".php";
    //var_dump($path);
    //var_dump($class);
    if(file_exists($path)){
        require $path;
    }
});

use Class\Paypal\Payment as PaypalPayment;
use Class\Stripe\Payment as StripePayment;

$payment = new PaypalPayment();
$payment3 = new StripePayment();

var_dump($payment);
echo('<br>');
var_dump($payment3);