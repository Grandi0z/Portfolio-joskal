<?php

class Cart {
    // constructor
    function __construct(private int $quantity, private float $totalPrice)
    {
    }
    //getter
    function getTotalPrice(): float {
        return $this->totalPrice;
    }

    function setTotalPrice(float $totalPrice): void {
        $this->totalPrice = $totalPrice;
    }

    function discount(float $discount): void {
      $this->totalPrice -= $this->totalPrice * ($discount/100);
    }
}
