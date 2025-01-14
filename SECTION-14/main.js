/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 * https://stanford.edu/~cpiech/karel/ide.html
 **/
function main() {
    //moveToEnd();
    //moveToEnd();
    //putBeeper();
    //hitDiagonal();
    //hitDiagonal();
    //hitDiagonal();
    //hitDiagonal();
    putBeeper();
    jumpOddFloor();
    jumpUPRight();
    jumpEvenFloor();
    jumpUPLeft();
    jumpOddFloor();
    jumpUPRight();
    jumpEvenFloor();
    jumpUPLeft();
    jumpOddFloor();
 }
 
 function moveToEnd() {
    move();
    move();
    move();
    move();
    turnLeft();
 }
 
 function hitDiagonal(){
    move();
    turnLeft();
    move();
    turnRight();
    putBeeper();
 }
 function jump(){
    move();
    move();
 }
 function jumpUPLeft(){
    move();
    turnRight();
    move();
    putBeeper();
    turnRight();
 }
 function jumpUPRight(){
    turnLeft();
    move();
    turnLeft();
 }
 function jumpOddFloor(){
    jump();
    putBeeper();
    jump();
    putBeeper();
 }
 function jumpEvenFloor(){
    move();
    putBeeper();
    jump();
    putBeeper();
 }
 