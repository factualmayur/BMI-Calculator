const form = document.querySelector(`form`);

form.addEventListener(`submit`, (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector(`#height`).value);
  const weight = parseInt(document.querySelector(`#weight`).value);
  const results = document.querySelector(`#results`);

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height`;
    results.classList.add('show');
    return;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight`;
    results.classList.add('show');
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  // Show the results
  results.innerHTML = `<span>${bmi}</span>`;
  results.classList.add('show');
});
