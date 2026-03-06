const companions = {
rahul:{
name:"Rahul",
age:"Age: 24",
bio:"Friendly guy for coffee, city walks and deep talks.",
price:"₹500 / hour",
img:"images/rahul.jpg"
},

anita:{
name:"Anita",
age:"Age: 22",
bio:"Love movies, cafes and meaningful conversations.",
price:"₹600 / hour",
img:"images/anita.jpg"
}
};

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if(companions[name]){

document.getElementById("profile-img").src = companions[name].img;

document.getElementById("profile-name").innerText =
companions[name].name;

document.getElementById("profile-age").innerText =
companions[name].age;

document.getElementById("profile-bio").innerText =
companions[name].bio;

document.getElementById("profile-price").innerText =
companions[name].price;

document.getElementById("book-link").href =
"booking.html?name=" + name;

}
// Companions filter logic
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('search-name');
  const genderSelect = document.getElementById('filter-gender');
  const ageSelect = document.getElementById('filter-age');
  const locationInput = document.getElementById('filter-location');
  const cards = document.querySelectorAll('.companion-card');

  if (!nameInput || !genderSelect || !ageSelect || !locationInput || cards.length === 0) {
    return; // not on companions page
  }

  function matchesAgeRange(cardAge, rangeValue) {
    if (!rangeValue) return true;
    const age = parseInt(cardAge, 10);
    if (rangeValue === '18-22') return age >= 18 && age <= 22;
    if (rangeValue === '23-27') return age >= 23 && age <= 27;
    if (rangeValue === '28-35') return age >= 28 && age <= 35;
    return true;
  }

  function filterCards() {
    const nameQuery = nameInput.value.trim().toLowerCase();
    const genderValue = genderSelect.value; // male / female / other / ""
    const ageRange = ageSelect.value;
    const locationQuery = locationInput.value.trim().toLowerCase();

    cards.forEach(card => {
      const cardName = card.dataset.name || '';
      const cardGender = card.dataset.gender || '';
      const cardAge = card.dataset.age || '';
      const cardLocation = card.dataset.location || '';

      const nameOk = !nameQuery || cardName.includes(nameQuery);
      const genderOk = !genderValue || cardGender === genderValue;
      const ageOk = matchesAgeRange(cardAge, ageRange);
      const locationOk = !locationQuery || cardLocation.includes(locationQuery);

      if (nameOk && genderOk && ageOk && locationOk) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  nameInput.addEventListener('input', filterCards);
  genderSelect.addEventListener('change', filterCards);
  ageSelect.addEventListener('change', filterCards);
  locationInput.addEventListener('input', filterCards);
});
