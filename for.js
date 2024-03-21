// run the code seperately because i has been used frequently
// for loop
// let i;
// let j = "Praveen raj K"
// for (i = 0; i < j.length; i++) {
//     console.log(`${j[i] } ${i}`);
// }

// ----------------------------------------------//

// nested for loop
// let i;
// let j;
// for (i = 1; i <= 10; i++) {
//     for (j = 1; j <= i; j++) {
//         console.log(`i ${i} j ${j}`);
//     }
// }
// i = 1<=10 true = 1
// j = 1< = i1 true = 1
// j = 2< = i1 false skips
// i = 2<=10 true = 2
// j = 1< = i2 true = 1
// j = 2< = i2 true =2
// j = 3< = i2 false = skips
// i = 3<=10 true = 3
// j = 1< = i3 true = 1
// j = 2< = i3 true = 2
// j = 3< = i3 true = 3
// j = 4< = i3 false skips
// i = 4<=10 true = 4
// j = 1< = i4 true = 1
// j = 2< = i4 true = 2
// j = 3< = i4 true = 3
// j = 4< = i4 true = 4
// j = 5< = i4 false skips
// i = 5<=10 true = 5
// j = 1< = i5 true = 1
// j = 2< = i5 true = 2
// j = 3< = i5 true = 3
// j = 4< = i5 true = 4
// j = 5< = i5 true = 5
// j = 6< = i5 false skips
// i = 6<=10 true = 6
// j = 1< = 6i true = 1
// j = 2< = 6i true = 2
// j = 3< = 6i true = 3
// j = 4< = 6i true = 4
// j = 5< = 6i true = 5
// j = 6< = 6i true = 6
// j = 7< = 6i false skips
// i = 7<=10 true = 7
// j = 1< = 7i true = 1
// j = 2< = 7i true = 2
// j = 3< = 7i true = 3
// j = 4< = 7i true = 4
// j = 5< = 7i true = 5
// j = 6< = 7i true = 6
// j = 7< = 7i true = 7
// j = 8< = 8i false skips
// i = 8<=10 true = 8
// j = 1< = 8i true = 1
// j = 2< = 8i true = 2
// j = 3< = 8i true = 3
// j = 4< = 8i true = 4
// j = 5< = 8i true = 5
// j = 6< = 8i true = 6
// j = 7< = 8i true = 7
// j = 8< = 8i true = 8
// j = 9< = 8i false skips
// i = 9<=10 true = 9
// j = 1< = 9i true = 1
// j = 2< = 9i true = 2
// j = 3< = 9i true = 3
// j = 4< = 9i true = 4
// j = 5< = 9i true = 5
// j = 6< = 9i true = 6
// j = 7< = 9i true = 7
// j = 8< = 9i true = 8
// j = 9< = 9i true = 9
// j = 10< = 9i false skips
// i = 10<=10 true = 10
// j = 1< = 10i true = 1
// j = 2< = 10i true = 2
// j = 3< = 10i true = 3
// j = 4< = 10i true = 4
// j = 5< = 10i true = 5
// j = 6< = 10i true = 6
// j = 7< = 10i true = 7
// j = 8< = 10i true = 8
// j = 9< = 10i true = 9
// j = 10< = 10i true = 10
// j = 11< = 10i false skips
// i = 11<=10i false skips and end the iteration 

// for loop break
// let i;
// let j;
// break the loop if the break condition is true
// for(i=0;i<=10;i++){
//     if(i==3) break;
//     console.log(i);
// }
// continue
// skips the current iteration if the condition is true!
// for(i=0;i<=10;i++){
//     if(i==2) continue;
//     console.log(i);
// }