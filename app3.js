const getJokesButton = document.querySelector('.get-jokes');


getJokesButton.addEventListener('click', getJokes);


function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function() {
    if(this.status ===200) {
      console.log(this.responseText);
      const jokes = JSON.parse(this.responseText);
      let output = '';
      if(jokes.type === 'success'){
        jokes.value.forEach(function(joke){
          // <div class="col">${joke.joke}</div>
          output += `
              <div class="card text-white bg-info mb-3 mx-auto" >
                <div class="card-header"> </div>
                <div class="card-body">
                  <p class="card-text">${joke.joke}</p>
                </div>
              </div>
          `
        });
      } else {
        output += "<li>Something went wrong.</li>"
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();
  e.preventDefault();

}
