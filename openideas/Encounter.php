<?php 

declare(strict_types=1);

class Player {
    function __construct(private int $level)
    {
    }

    public function getLevel(): int
    {
        return $this->level;
    }

    public function setLevel(int $level): void
    {
        $this->level = $level;
    }
}
class Encouter {
    public $name;
    public const RESULT_WINNER = 1;
    public const RESULT_LOSER = -1;
    public const RESULT_DRAW = 0;
    public const RESULT_POSSIBILITIES = [self::RESULT_WINNER, self::RESULT_LOSER, self::RESULT_DRAW];

    private static function probabilityAgainst(int $levelPlayerOne, int $againstLevelPlayerTwo)
    {
        return 1/(1+(10 ** (($againstLevelPlayerTwo - $levelPlayerOne)/400)));
    }

    private static function setNewLevel(int &$levelPlayerOne, int $againstLevelPlayerTwo, int $playerOneResult)
    {
        if (!in_array($playerOneResult, self::RESULT_POSSIBILITIES)) {
            trigger_error(sprintf('Invalid result. Expected %s',implode(' or ', self::RESULT_POSSIBILITIES)));
        }

        $levelPlayerOne += (int) (32 * ($playerOneResult - self::probabilityAgainst($levelPlayerOne, $againstLevelPlayerTwo)));
    }   

    public function runProbabilities($player1, $player2)
    {
        echo sprintf(
            'Greg à %.2f%% chance de gagner face a Jade',
            self::probabilityAgainst($player1, $player2)*100
        ).PHP_EOL;
    }
    
    function runNewLevel($player1, $player2, $result)
    {
        self::setNewLevel($player1, $player2, $result);
        self::setNewLevel($player2, $player1, -$result);
    
        echo sprintf(
            'les niveaux des joueurs ont évolués vers %s pour Greg et %s pour Jade', $player1, $player2
        );
    }

};

$greg = new Player(400);
$jade = new Player(800);



$encounter = new Encouter();
$prob = $encounter->runProbabilities($greg->getLevel(), $jade->getLevel());
$level = $encounter->runNewLevel($greg->getLevel(), $jade->getLevel(), Encouter::RESULT_WINNER);

var_dump($prob);
echo'<br>'.PHP_EOL;
var_dump($level);