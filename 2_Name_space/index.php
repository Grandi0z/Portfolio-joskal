<?php

require_once('./class/paypal/Payment.php');
require_once('./class/stripe/Payment.php');
require_once('./class/User.php');

use Class\Paypal\Payment as PaypalPayment;
use Class\Stripe\Payment as StripePayment;

$payment = new PaypalPayment();

var_dump($payment);