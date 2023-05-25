function showMessage() {
  console.log("hello i am working");
  let overlay = document.querySelector('.overlay');
 let message = document.getElementById('message');
 let messageText = document.getElementById('messageText');
  let buttonText = document.getElementById("buttonText")

  var random = Math.random()
  if (random < 0.5) {
    messageText.textContent = 'Ошибка';
    messageText.style.color ="#DD2C28"
    buttonText.textContent ="Закрыть"
  } else {
    messageText.textContent = 'Успешно отправлено';
    buttonText.textContent="Хорошо"
    
  }

  overlay.style.display = 'block';
  message.style.display = 'block';

  setTimeout(function() {
    overlay.style.display = 'none';
    message.style.display = 'none';
  }, 3000);
}
