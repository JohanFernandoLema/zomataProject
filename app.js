const meals = [
  {
    id: 1,
    category: 'breakfast',
    img: './images/shutterstock_1154073754@2x.png',
    desc: 'Start your day with exclusive breakfast options',
  },
  //   {
  //     id: 2,
  //     category: 'lunch',
  //     img: './images/shutterstock_1130181932@2x.png',
  //     desc: 'Start your day with exclusive breakfast options',
  //   },
  //   {
  //     id: 3,
  //     category: 'snacks',
  //     img: './images/shutterstock_476864884@2x.png',
  //     desc: 'Start your day with exclusive breakfast options',
  //   },
  //   {
  //     id: 4,
  //     category: 'dinner',
  //     img: './images/shutterstock_476864884@2x.png',
  //     desc: 'Start your day with exclusive breakfast options',
  //   },
  //   {
  //     id: 5,
  //     category: 'drinks',
  //     img: './images/shutterstock_476864884@2x.png',
  //     desc: 'Start your day with exclusive breakfast options',
  //   },
  //   {
  //     id: 6,
  //     category: 'nightlife',
  //     img: './images/shutterstock_1304064250@2x.png',
  //     desc: 'Start your day with exclusive breakfast options',
  //   },
]

const mainContent = document.querySelector('.mainContent')

window.addEventListener('DOMContentLoaded', () => {
  let loadMeals = meals.map((meal) => {
    return `<img
            src=${meal.img} alt=${meal.category}
            class="galery me-3 p-0"
          />
          <div class="text-center">
            <h3 class="fw-bold">Breakfast</h3>
            <p class="">
              ${meal.desc}
            </p>
          </div>`
  })
  loadMeals = loadMeals.join('')
  mainContent.innerHTML = loadMeals
})
