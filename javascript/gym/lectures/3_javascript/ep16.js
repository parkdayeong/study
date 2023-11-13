'use strict';

window.onload = function () {
  /*
   - '*'      document.write('*');
   - 개행      document.write('<br>');
   - space    document.write('&nbsp;'); 
   - 가로선     document.write('<hr>');
   */
  /*
    1] 정사각형
    *****
    *****
    *****
    *****
    *****
  */
  // for (let i = 0; i < 5; i++) {
  //   for (let j = 0; j < 5; j++) {
  //     document.write('*');
  //   }
  //   document.write('<br>');
  // }
  /*
    2] 삼각형1
    *
    **
    ***
    ****
    *****
  */
  // for (let i = 0; i < 5; i++) {
  //   //[i = 0, 1 ,2, 3, 4]
  //   for (let j = 0; j < i + 1; j++) {
  //     // [i = 0], [j = 0, 1]
  //     // [i = 1], [j = 0, 1, 2]
  //     document.write('*');
  //   }
  //   document.write('<br>');
  // }
  /*
    3] 삼각형1-reverse
    *****
    ****
    ***
    **
    *
  */
  for (let i = 0; i < 5; i++) {
    for (let j = i; j < 5; j++) {
      // [i = 0], [j = ]
      document.write('*');
    }
    document.write('<br>');
  }
  /*
    4] 삼각형2
        *
       **
      ***
     ****
    *****
  */
  /*
    5] 삼각형2-reverse
    *****
     ****
      ***
       **
        *
  */
  /*
    5] 정삼각형
        *
       ***
      *****
     ******* 
    ********* 
  */
  /*
    5] 정삼각형-reverse
    ********* 
     ******* 
      *****
       ***
        *
  */
  /*
    5] 다이아몬드
        *
       ***
      *****
     ******* 
    ********* 
     ******* 
      *****
       ***
        *
  */
};
