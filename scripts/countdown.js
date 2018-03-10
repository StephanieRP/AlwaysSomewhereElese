const countdown = document.querySelector('.countdown');


//Set Launch updated
const launchDate = new Date('Sep 1, 2018 12:00:00').getTime();

//Update every seconds
const intvl = setInterval(() => {
  //get todays date and time (ms)
  const now = new Date().getTime();

  // distance from now to the launch Date
  const distance = launchDate - now;

  //time caluclations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

  //Display results
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${minutes}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>

  `;
  // checks timer to see if the distance is zero and if zero

      if(distance < 0){
        clearInterval(intvl);

        countdown.innerHTML = 'Launched';
      }


}, 1000);
