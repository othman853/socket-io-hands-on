var form = document.getElementById('sum-form');
var sumResult = document.getElementById('sum-result');

form.addEventListener('submit', function (event) {

  event.preventDefault();

  var valueA = document.getElementById('sum-a').value;
  var valueB = document.getElementById('sum-b').value;

  socket.emit('sum', {a: valueA, b: valueB});

});

socket.on('sum-result', function(sum) {
  sumResult.innerHTML = sum.result;
});
