//feetToMile woodCalculator brickCalculator tinyFriends
function feetToMile(feet){
  const mile = feet*0.000189394;
  return mile;
}
function  woodCalculator(numOfChair,numberofTable,numberofBed){
     const char =1*numOfChair;
     const table =3*numberofTable;
     const bed = 5*numberofBed;

     const result = char+table+bed;
     return result;

}
function brickCalculator(){

}
function tinyFriends(){

}
console.log(feetToMile(58));
console.log(woodCalculator(5,4,3));