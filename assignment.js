//feetToMile woodCalculator brickCalculator tinyFriends
//Problem1
function feetToMile(feet){
   if(feet<0){
      return  "Entter Positive Number";
   } 
   else{
    const mile = feet*0.000189394;
    return mile;
   }
 
}
//Problem2
function  woodCalculator(numOfChair,numberofTable,numberofBed){
       
     const char =1*numOfChair;
     const table =3*numberofTable;
     const bed = 5*numberofBed;

     const result = char+table+bed;
     return result;

}
//Problem3
function brickCalculator(noOfStorey){
    let noOfBricks;
    if(noOfStorey<=10){
        noOfBricks = 15 * 1000;  
    }
    else if(noOfStorey>10 && noOfStorey<20){
        noOfBricks = (15*1000) + (12* 1000);
    }
    else if(noOfStorey ==20){
        noOfBricks =12*1000;
    }
    else{
        noOfBricks = (12*1000) + (10*1000);
    }

    return noOfBricks;
  
}
//Problem4
function tinyFriend(friendsName){
      let tinyName = friendsName[0].length;
      let result = friendsName[0];

      for(let i=0;i<friendsName.length;i++){

          let currentNameLength = friendsName[i].length;

          if(currentNameLength < tinyName) {

                tinyName = currentNameLength;
                 
                 result = friendsName[i];   
           }
      }
      return "Tiny Friend Name is " + result;
}

//Debug Purerposes

console.log(feetToMile(-58));
console.log(woodCalculator(5,4,3));
console.log(brickCalculator(15));
console.log(tinyFriend(["abu","Sa","k","imran"]));