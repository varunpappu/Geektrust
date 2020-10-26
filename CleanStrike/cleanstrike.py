from tabulate import tabulate
import outcomeConstants
from random import randint


class CleanStrikeBoard:
    """
    The Clean Strike Board consists of different possibilites
    a player can hit during the course of the game
    """

    def __init__(self):
        self.black = 9
        self.red = 1

    def strike(self):
        """
        When a player pockets a coin he/she wins a point
        The black coin gets reduced by 1

        :return: 1 if coin present else return 0
        """
        if self.black == 0:
            return 0

        self.black = self.black - 1
        return 1

    def multiStrike(self):
        """
        When a player pockets more than one coin he/she wins 2 points. All, but 2
        coins, that were pocketed, get back on to the carrom-board
        The black coin and red coin is reset to 7 and 1 respectively.

        :return: 2 if Coin present else return 0
        """
        if self.black == 0:
            return 0

        self.black = 7
        self.red = 1
        return 2

    def redStrike(self):
        """
        When a player pockets red coin he/she wins 3 points
        The Red Coin gets reduced by 1

        :return: 3 if Coin is present else return 0
        """
        if self.red == 0:
            return 0

        self.red = self.red - 1
        return 3

    def striker(self):
        """
        When a player pockets the striker he/she loses a point

        :return: -1
        """
        return -1

    def defunt(self):
        """
        When a coin is thrown out of the carrom-board, due to a strike, the player
        loses 2 points, and the coin goes out of play
        The Black Coin gets reduced by 1

        :return: -2
        """
        if self.black == 0:
            return 0

        self.black = self.black - 1
        return -2

    def emptyStrike(self):
        """
        No coin is put inside the pocket.

        :return: 0
        """
        return 0

    def coinCheck(self):
        """
        The following checks if the coins are pocketed or not.

        :return: True if all coins are pocketed else False
        """
        if self.black == 0 and self.red == 0:
            return True
        else:
            return False


class Players:
    """
    The Players class will consists of players score and their history of moves made during the game.
    """

    def __init__(self, player1score=0, player2score=0, player1history=[], player2history=[]):
        """

        :type player1history: object, player2history: object
        """
        self.player1score = player1score
        self.player2score = player2score
        self.player1history = player1history
        self.player2history = player2history

    def checkplayerscore(self):
        """
        The following checks if a player score has exceeded by 5 points
        :return: True if score exceeds or equal to 5
        """
        if self.player1score >= 5 or self.player2score >= 5:
            return True

        return False

    def updateplayerscore(self, player, score):
        """
        The following updates a player score based on the player
        :param player: integer
        :param score: integer
        """
        if player == 1:
            self.player1score = self.player1score + score
            if self.player1score < 0:
                self.player1score = 0
        else:
            self.player2score = self.player2score + score
            if self.player2score < 0:
                self.player2score = 0

    def getplayerhistory(self, player):
        """
        The following returns a particular player history based on the player
        :param player: integer
        :return: If player1 return player1history else player2history
        """
        if player == 1:
            return self.player1history
        else:
            return self.player2history

    def gethistorymoves(self):
        """
        The following returns all the moves made by both the players.
        :return: object
        """
        return {"Player1": self.player1history,
                "Player2": self.player2history}

    def updateplayerhistory(self, player, outcome):
        """
        The following updates a player history based on the player
        :param player: integer
        :param outcome: String
        """
        if player == 1:
            self.player1history.append({"outcome": outcome,
                                        "score": self.player1score})
        else:
            self.player2history.append({"outcome": outcome,
                                        "score": self.player2score})

    def gameresult(self):
        """
        The following checks the score of a player and returns the result.
        :return: object containing result, player1score, player2score
        """
        if self.player1score > self.player2score and self.player1score - self.player2score >= 3:
            return {"result": "Player1",
                    "player1score": self.player1score,
                    "player2score": self.player2score}

        elif self.player1score < self.player2score and self.player2score - self.player1score >= 3:
            return {"result": "Player2",
                    "player1score": self.player1score,
                    "player2score": self.player2score}

        return {"result": "Draw",
                "player1score": self.player1score,
                "player2score": self.player2score}

    def playeremptymoves(self, player):
        """
        When a player does not pocket a coin for 3 successive turns he/she loses a point
        The following function checks last 3 moves of a player to see if the outcome is equal to Empty
        :param player: integer
        """

        if player == 1:
            moves = self.player1history
        else:
            moves = self.player2history

        count = 0
        j = 0

        for i in reversed(moves):
            if j > 3:
                break
            if i['outcome'] == outcomeConstants.EMPTY:
                count = count + 1

            j = j + 1

        if count >= 3:
            self.updateplayerscore(player, -1)

    def playerfoulcount(self, player):
        """
        When a player ​fouls 3 times (a ​foul is a turn where a player loses, at least, 1 point),
        he/she loses an additional point
        The following function checks last 3 moves of a player to see if the outcome is equal to
        DEFUNCT_COIN or STRIKER_STRIKE
        :param player: integer
        """
        if player == 1:
            moves = self.player1history
        else:
            moves = self.player2history

        count = 0
        j = 0
        for i in reversed(moves):
            if j > 3:
                break
            if i['outcome'] == outcomeConstants.DEFUNCT_COIN or i['outcome'] == outcomeConstants.STRIKER_STRIKE:
                count = count + 1

            j = j + 1

        if count >= 3:
            self.updateplayerscore(player, -1)

    def scoredifference(self):
        """
        The following presents the score difference of a players based on higher points
        :return: Difference of score between two players
        """
        if self.player1score > self.player2score:
            return self.player1score - self.player2score
        else:
            return self.player2score - self.player1score

class CleanStrikeGame:


    def checkintvalue(self, gametype):
        """
        The following checks if the value is integer and lies between 1 to 6
        :return: value : integer
        """
        while True:
            try:
                if gametype == 1:
                    value = int(input())
                else:
                    value = randint(1, 6)
            except ValueError:
                print("Please choose a proper Integer between 1 to 6")
                continue
            else:
                if value < 1 or value > 6:
                    print("Please choose a proper Integer between 1 to 6")
                    continue
                else:
                    return value

    # 2 Players Game
    def letsplay(self, gametype):
        """
        The following the loop keeps running until a winner is decided.
        """
        player = 1

        # Intialize the Board and Players
        cleanstrikeboard = CleanStrikeBoard()
        gameplayers = Players()

        while True:

            player = (player + 1) % 2

            if (gameplayers.checkplayerscore() and gameplayers.scoredifference() >= 3) or (
                    cleanstrikeboard.coinCheck()):
                score = gameplayers.gameresult()
                print("Result", score['result'], "Final Score: ", score['player1score'], '-', score['player2score'])
                history = gameplayers.gethistorymoves()
                print(
                    tabulate(history['Player1'], headers={'outcome': 'Outcome', 'score': 'Points'},
                             tablefmt="fancy_grid"))
                print(
                    tabulate(history['Player2'], headers={'outcome': 'Outcome', 'score': 'Points'},
                             tablefmt="fancy_grid"))
                break

            print("Player ", player + 1, ": Choose an outcome from the list below")
            print("1. Strike")
            print("2. Multi Strike")
            print("3. Red strike")
            print("4. Striker strike")
            print("5. Defunct coin")
            print("6. None")

            if gametype == 1:

                option = self.checkintvalue(gametype)

            else:

                option = self.checkintvalue(gametype)

            if option == 1:

                result = cleanstrikeboard.strike()
                gameplayers.updateplayerscore(player + 1, result)
                gameplayers.updateplayerhistory(player + 1, outcomeConstants.STRIKE)

            elif option == 2:

                result = cleanstrikeboard.multiStrike()
                gameplayers.updateplayerscore(player + 1, result)
                gameplayers.updateplayerhistory(player + 1, outcomeConstants.MULTISTRIKE)

            elif option == 3:

                result = cleanstrikeboard.redStrike()
                gameplayers.updateplayerscore(player + 1, result)
                gameplayers.updateplayerhistory(player + 1, outcomeConstants.RED_STRIKE)

            elif option == 4:

                result = cleanstrikeboard.striker()
                gameplayers.updateplayerscore(player + 1, result)
                gameplayers.updateplayerhistory(player + 1, outcomeConstants.STRIKER_STRIKE)
                gameplayers.playerfoulcount(player + 1)

            elif option == 5:

                result = cleanstrikeboard.defunt()
                gameplayers.updateplayerscore(player + 1, result)
                gameplayers.updateplayerhistory(player + 1, outcomeConstants.DEFUNCT_COIN)
                gameplayers.playerfoulcount(player + 1)

            elif option == 6:

                result = cleanstrikeboard.emptyStrike()
                gameplayers.updateplayerscore(player + 1, result)
                gameplayers.updateplayerhistory(player + 1, outcomeConstants.EMPTY)
                gameplayers.playeremptymoves(player + 1)


def checkoption():
    """
    The following checks if the value is integer and lies between 1 to 2
    :return: value : integer
    """
    while True:
        try:
            value = int(input())
        except ValueError:
            print("Please choose a proper Integer between 1 to 2")
            continue
        else:
            if value < 1 or value > 2:
                print("Please choose a proper Integer between 1 to 2")
                continue
            else:
                return value


cleanstrike = CleanStrikeGame()
print("Choose the type of game you want to play?")
print("1. Player1 vs Player2")
print("2. StrikeBot1 vs StrikeBot2")

if checkoption() == 1:
    cleanstrike.letsplay(1)
else:
    cleanstrike.letsplay(2)