// Executes when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const endDate = new Date('2024-05-01T12:00:00+02:00').getTime(); // Sommartid 31 mars
  const countdownInterval = 1000; // Interval set to 1 second for the countdown

  // Updates the countdown every second
  const countdownTimer = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeDifference = endDate - currentTime;

    // Calculate days, hours, minutes, and seconds from timeDifference
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the calculated time on the webpage
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Stop the countdown when the end date is reached
    if (timeDifference < 0) {
      clearInterval(countdownTimer);
      document.getElementById('countdown').innerText =
        'Tiden är ute och vår nya hemsida lanseras väldigt snart. Vi uppskattar ditt tålamod och ser fram emot att presentera vår nya plattform. Om du har några omedelbara frågor eller behöver hjälp, är du varmt välkommen att kontakta oss!';
    }
  }, countdownInterval);
});
