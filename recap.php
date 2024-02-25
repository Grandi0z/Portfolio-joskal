<?php

declare(strict_types=1);

class Ballom {
    private const  UNITE = 'm2';

    public function __construct(private string $name, private float $long, private float $min)
    {
    }

    private function validateNum(float $numb): bool {
        if($numb<=0) {
            throw new \InvalidArgumentException('Length must be greater than 0');
        }
        return true;
    }

    public function setLong(float $long): void {
        $this->validateNum($long);
        $this->long = $long;
    }

    public function setMin(float $min): void {
        $this->validateNum($min);
        $this->min = $min;
    }

    public function getLong(): float {
        return $this->long;
    }

}

$pont = new Ballom("marie", 23.0, 39.0);

var_dump($pont);