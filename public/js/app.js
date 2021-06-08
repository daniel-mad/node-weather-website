const getData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const weatherForm = document.querySelector('form');
const search = weatherForm.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  const location = search.value;
  try {
    messageOne.textContent = 'Loading...';
    const data = getData(`/weather?address=${location}`).then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  } catch (error) {
    console.log(error);
  }
});
