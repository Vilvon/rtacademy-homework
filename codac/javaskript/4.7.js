for (let i = 2; i <= 32; i += 2) {
  ilog = i;
  switch (0) {
    case i % 10:
      ilog = "^" + ilog;
    case i % 4:
      ilog = "*" + ilog;
    default:
      console.log(ilog);
  }
}

//на For
/*
let ilog
for (let i = 1; i <= 32; i++) {
     ilog = i;
    if (i % 2 == 0) {
        switch (0) {
          case i % 10:
            ilog = "^" + ilog;

          case i % 4:
            ilog = "*" + ilog;
          default:
            console.log(ilog);
        }
      }
}



//на while
let j=1,jlog;
while (j<=33) {
    jlog = j;
    if (j % 2 == 0) {
        switch (0) {
          case j % 10:
            jlog = "^" + jlog;

          case j % 4:
            jlog = "*" + jlog;
          default:
            console.log(jlog);
        }
      }
    j++;
}
*/
