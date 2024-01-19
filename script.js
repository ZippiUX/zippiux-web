document.addEventListener('DOMContentLoaded', function () {
  var endDate = new Date('2024-03-01T12:00:00+01:00').getTime();
  var countdownTimer = setInterval(function () {
    var now = new Date().getTime();
    var timeLeft = endDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (timeLeft < 0) {
      clearInterval(countdownTimer);
      document.getElementById('countdown').innerText =
        'Tiden har gått ut, hemsidan bör uppdateras inom kort annars kan du kontakta oss!';
    }
  }, 1000);
});
