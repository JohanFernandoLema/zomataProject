const meals = [
  {
    id: 1,
    category: 'breakfast',
    img: './images/shutterstock_1154073754@2x.png',
    desc: 'Start your day with exclusive breakfast options',
  },
  {
    id: 2,
    category: 'lunch',
    img: './images/shutterstock_1130181932@2x.png',
    desc: 'Start your day with exclusive breakfast options',
  },
  {
    id: 3,
    category: 'snacks',
    img: './images/snacks.jpeg',
    desc: 'Start your day with exclusive breakfast options',
  },
  {
    id: 4,
    category: 'dinner',
    img: './images/dinner.jpg',
    desc: 'Start your day with exclusive breakfast options',
  },
  {
    id: 5,
    category: 'drinks',
    img: './images/cocktails.jpg',
    desc: 'Start your day with exclusive breakfast options',
  },
  {
    id: 6,
    category: 'nightlife',
    img: './images/shutterstock_1304064250@2x.png',
    desc: 'Start your day with exclusive breakfast options',
  },
]

const mainContent = document.querySelector('.mainContent')

window.addEventListener('DOMContentLoaded', () => {
  displayMeals(meals)
})

function displayMeals(mealArray) {
  let mealsList = mealArray.map((list) => {
    return `<div class="d-flex flex-row cards mb-5">
          <img
            src=${list.img}
            alt=${list.category}
            class="galery me-2"
          />
          <div>
            <div class="p-4 d-inline-block">
              <h3 class="fw-bold">${list.category}</h3>
              <p>${list.desc}</p>
            </div>
          </div>
        </div>`
  })
  console.log(mealsList)
  mealsList = mealsList.join('')
  mainContent.innerHTML = mealsList
}
