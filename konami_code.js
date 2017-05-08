const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // your code here
  document.body.addEventListener('keydown', onKeyDownHandler);

  var index = 0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if(key === code[index]) {
      index++;

    if(index === code.length) {
      index = 0
      alert("Congrats!")
    }
  }
  else {
    index = 0;
  }
}
}
