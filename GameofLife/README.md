# GameofLife

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are directly horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
Any live cell with fewer than two live neighbours dies, as if by loneliness.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any live cell with two or three live neighbours lives, unchanged, to the next generation.
Any dead cell with exactly three live neighbours comes to life.


The initial pattern constitutes the 'seed' of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed — births and deaths happen simultaneously, and the discrete moment at which this happens is sometimes called a tick. (In other words, each generation is a pure function of the one before.) The rules continue to be applied repeatedly to create further generations.

The inputs below the horizontal line represent the cells in the universe as X or O, where X is a live cell and O is a dead cell or no cell. The inputs below provide the provide pattern or initial cells in the universe. The output is the state of the system in the next tick (one run of the application of all the rules), represented in the same format.

The Challenge:
Build a program of the Game of Life, as it is described above, in objected oriented way.

Input A:
(Block pattern)  
  X X  
  X X  

Output A:  
  X X  
  X X  
 
Input B:
(Boat pattern)  
  X X O  
  X O X  
  O X O  
 
Output B:  
  X X O  
  X O X  
  O X O  

Input C:
(Blinker pattern)  
 	O X O  
 	O X O  
 	O X O  
 
Output C:  
 	O O O  
 	X X X  
 	O O O  

Input D:
(Toad pattern)  
  O X X X  
  X X X O  
 
Output D:  
  X O O X  
  X O O X  


## Build Instructions

* Eclipse:  
  1) Download and extract file.  
  2) Click open existing and import the file into workspace and right click the project select Run As -> Maven install.  
  3) Right Click again Run As -> Maven Build -> -Dtest=AllTests test. 
  
