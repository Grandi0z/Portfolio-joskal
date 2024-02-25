<?php
declare(strict_types=1); 
//declare permet d'indiquer à PHP un comportement spécifique pour 
//le fichier dans lequel nous nous trouvons
class User 
{
    public const STATUS_ACTIVE = 'active';
    public const STATUS_INACTIVE = 'inactive';

    public function __construct(
        private string $username, 
        private string $status = self::STATUS_ACTIVE)
    {
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): void
    {   
        if (!in_array($status, [self::STATUS_ACTIVE, self::STATUS_INACTIVE])) {
            throw new InvalidArgumentException('Invalid status');
        }
        $this->status = $status;
    }
}

class Admin extends User
{
    public function __construct(string $username)
    {
        parent::__construct($username, User::STATUS_INACTIVE);
    }
}