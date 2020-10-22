# ROBOT MOVEMENTS #

## Problem Statement ## 

There is a robot which can move around on a grid. The robot is placed at point (0,0). From (x, y) the robot can move to (x+1,
y), (x-1, y), (x, y+1), and (x, y-1). Some points are dangerous and contain EMP Mines. To know which points are safe, we check
whether the sum digits of abs(x) plus the sum of the digits of abs(y) are less than or equal to 23. For example, the point (59,
75) is not safe because 5 + 9 + 7 + 5 = 26, which is greater than 23. The point (-51, -7) is safe because 5 + 1 + 7 = 13, which is
less than 23. 


## Programming Language ##
    -> Typescript  

## Running the Program ##

-> cd robotmovements  
-> npm i  
-> npm install and npm run build  
-> Two options to run the program:  
    -> 1) npm start --silent <absolute_path>  
    -> 2) Place all the input files in the assets and perform `npm run build`  
          Run `npm start` to execute the input files.  
        

