simple HTML/JS/CSS chess simulator and game solver

there is nothing new in this project to add, it is made in my spare time when bored...

**Game Roles**

- white pawn can move forward one step, can move two steps if in same initial position, can capture to right forward or left forward - or imposant
- black pawn has same moves, except it is in opposite direction

- *rock* can move left,right,up,down unlimited until blocked
- *bishop* can move diagnoal unlimited until blocked
- *knight* can move L shape [two steps in a direction followed by one step perpindicularS] (8 possible moves at most), cannot be blocked
- *queen* can move both like bishop and rock until blocked
- *king* can move all direction, except to a position where it is going to be attacked, and can only make one move only
- *king* can castle with rock eighter queen side or king side given that king is not at check, and after casteling cannot move 
to a position and be at check, there should be nothing between king and rock

cell positions are marked a1,a2,..,h8 where first character is the column name (file) and the second digit is the row number
chess board is composed of 64 cells:

|    |    |    |    |    |    |    |    |
|----|----|----|----|----|----|----|----|
| a8 | b8 | c8 | d8 | e8 | f8 | g8 | h8 |
| a7 | b7 | c7 | d7 | e7 | f7 | g7 | h7 |
| a6 | b6 | c6 | d6 | e6 | f6 | g6 | h6 |
| a5 | b5 | c5 | d5 | e5 | f5 | g5 | h5 |
| a4 | b4 | c4 | d4 | e4 | f4 | g4 | h4 |
| a3 | b3 | c3 | d3 | e3 | f3 | g3 | h3 |
| a2 | b2 | c2 | d2 | e2 | f2 | g2 | h2 |
| a1 | b1 | c1 | d1 | e1 | f1 | g1 | h1 |

white takes rows 1,2 and black takes rows 7,8 in the begining, white starts the game

- all peices cannot make a move if the move will result in making king attacked
- game ends when a player cannot make any move
- white is victorious if black king is checkmated
- black is victorious if white king is checkmated
- game is draw when in stalemate: king is not check and cannot make a move

** configuration setup:
- *p* : pawn
- *b* : bishop
- *n* : knight
- *q* : queen
- *k* : king

** players
- *w* : white
- *b* : black

for example: 
`
let configuration = {
    "d3": "p-w"
}
`
means that the board has only one peice which is pawn (white) placed in column D, row 3