var form = document.getElementById('sum-form');
var sumResult = document.getElementById('sum-result');

form.addEventListener('submit', function (event) {

  event.preventDefault();

  var valueA = document.getElementById('sum-a');
  var valueB = document.getElementById('sum-b');

  console.log('Yo, u submitted a form? No! Lets socket.');

  socket.emit('sum', {a: valueA, b: valueB});

});

socket.on('sum-result', function(sum) {
  sumResult.innerHTML = sum.result;
});
