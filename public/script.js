const input = document.getElementById('msgInput');

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
