const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {

  let i = 0;

  document.body.addEventListener('keydown', function(e) {
    console.log(e.which)
    console.log(e.detail)
    const key = parseInt(e.which || e.detail);
    if (key === code[i]) {
      i++;

      if (i === code.length) {
        alert("Congratulations, you unlocked Super Powers!")
        i = 0;
      }
    } else {
      i = 0;
    }
  });
}
