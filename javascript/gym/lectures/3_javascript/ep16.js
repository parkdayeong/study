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
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    2] 삼각형1
    *
    **
    ***
    ****
    *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    3] 삼각형1-reverse
    *****
    ****
    ***
    **
    *
  */

  for (let i = 0; i < 5; i++) {
    //i = 0, 1, 2, 3, 4
    for (let j = 0; j < 5 - i; j++) {
      //i= 0, j = 0,1,2,3,4
      //i= 1, j = 0,1,2,3,4
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  /*
    4] 삼각형2
        *
       **
      ***
     ****
    *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
      document.write('&nbsp');
    }
    for (let k = 0; k < i + 1; k++) {
      document.write('*');
    }
    document.write('<br>');
  }

  document.write('<hr>');

  document.write('&nbsp;');
  document.write('&nbsp;');
  document.write('&nbsp;');
  document.write('&nbsp;');
  document.write('*');
  document.write('<br>');
  document.write('&nbsp;');
  document.write('&nbsp;');
  document.write('&nbsp;');
  document.write('*');
  document.write('*');
  document.write('<br>');
  document.write('&nbsp;');
  document.write('&nbsp;');
  document.write('*');
  document.write('*');
  document.write('*');
  document.write('<br>');
  document.write('&nbsp;');
  document.write('*');
  document.write('*');
  document.write('*');
  document.write('*');
  document.write('<br>');
  document.write('*');
  document.write('*');
  document.write('*');
  document.write('*');
  document.write('*');
  document.write('<br>');
  document.write('<hr>');
  /*
    5] 삼각형2-reverse
    *****
     ****
      ***
       **
        *
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      document.write('&nbsp');
    }
    for (let k = 5; k > i; k--) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    5] 정삼각형
        *
       ***
      *****
     ******* 
    ********* 
  */

  for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
      document.write('&nbsp');
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      document.write('*');
    }
    document.write('<br>');
  }

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
