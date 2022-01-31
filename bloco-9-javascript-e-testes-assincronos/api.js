function append(data) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `${data.name} (${data.symbol}): ${data.priceUsd}`; 
    ul.appendChild(li);
}

const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCoin = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const response = await fetch(API_URL, myObject);
  const data = await response.json();

  const dataSorted = data.data.sort((a, b) => b.priceUsd - a.priceUsd).slice(0, 10);

  dataSorted.forEach(append);
};
window.onload = () => fetchCoin();