<?php 

declare(strict_types=1);


class Bridge
{
    private const UNITE = 'm²';

    public function __construct(private float $length, private float $width)
    {
    }

    public static function validateLength(float $length): bool
    {
        if ($length <= 0) {
            throw new InvalidArgumentException('Length must be greater than 0');
        }
        return true;
    }

    public function setLength(float $length): void
    {
        self::validateLength($length);
        $this->length = $length;
    }

    public function setWidth(float $width): void
    {
        $this->width = $width;
    }

    public function getLength(): float
    {
        return $this->length;
    }

    public function getWidth(): float
    {
        return $this->width;
    }

    public function getSurface(): string
    {
        return $this->length * $this->width.' '.self::UNITE;
    } 
}

$pontNgaliema = new Bridge(23.3, 45.6);

var_dump($pontNgaliema->getSurface());