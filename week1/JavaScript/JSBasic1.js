// Exercise 1

(5 > 2) && false                    //false
!("knife" === "sword")              //true
(1 < 2) || (-1 > -1) || !false      //true
""                                  //false
(31 % 5) == "1"                     //true
!!true                              //true
"5th Avenue" != "5th Avenue"        //false
52 !== "52"                         //true
(undefined || null)                 //false



// Exercise 2

let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b

// a=b=c=3
