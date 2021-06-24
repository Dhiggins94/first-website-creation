// 2820930967944502 is your apikey
// https://superheroapi.com/api/2820930967944502/287/biography   example of API in use (soley getting their biography)
// https://superheroapi.com/api/2820930967944502/287  = search character by ID (includes everything about character)
// https://superheroapi.com/api/2820930967944502/search/deadpool  = search by character name
// https://superheroapi.com/api/2820930967944502/644/image  = example of getting character by image
// info of the website
const domain_name = 'https://superheroapi.com/';
const apikey = '2820930967944502';
const urlName = 'https://superheroapi.com/api/2820930967944502'

// function for button
function buttonLog() {
  console.log(button.value)
  superHeroInfo(button)
}
const heroButton = document.querySelector('.doog')
const villainButton = document.querySelector('.dab')


// place where things will append to
let container = document.querySelector(".info-placement")

// getting the data from the api
const superHeroInfo = async (id) => {
  try {
    // const getApiUrl =  await axios.get(`https://intense-inlet-61203.herokuapp.com/superheroapi.com/api/2820930967944502&s=${button.value}`)
    const getApiUrl = ` https://intense-inlet-61203.herokuapp.com/superheroapi.com/api/2820930967944502/${id}`
    const response = await axios.get(getApiUrl)
    console.log(response)
    // const arrayId = getApiUrl
    // getList(arrayId)    // return response
  } catch (error) {
    console.error(error)
  }

}
superHeroInfo()

// iterate over the data and append heroes to the dom/button.

// good id = 1 2 3 7 8 9 10 11 14 16 17 19 30
// bad id  = 4 5 6 12 13 15 18 20 21 27 29 32


let heroId = [1, 2, 3, 7, 8, 9, 10, 11, 14, 16, 17, 19, 30]
let goodId = heroId[Math.floor(Math.random() * heroId.length -1)]
console.log(heroId[Math.floor(Math.random() * heroId.length -1)]
)

let villainsId = [4, 5, 6, 12, 13, 15, 18, 20, 21, 27, 29, 32]
let badId = (villainsId[Math.floor(Math.random() * villainsId.length - 1)])

console.log(villainsId[Math.floor(Math.random() * villainsId.length - 1)])


// iterate over the data and append villains to the dom/button
heroButton.addEventListener("click",() => {
  superHeroInfo(goodId)
})

villainButton.addEventListener("click", () => {
  superHeroInfo(badId)
})


// APPEND THINGS what do we need?
// we start with appending names, biography and finally image of their faces
// we should also make a new request to remove them from the dom once we select a new button\
// lets work from the bottom up.

// to remove old inputs from the dom
// function removeContents(content) {
//   while (content.lastChild) {
//     content.removeChild(content.lastChild)
//   }
// }

// removeContents(container)
// removeContents(images,superList,bioInfo)

function getList() {
  
  for (let i = 0; i < heroId.length; i++) {
    
    const bioInfo = document.createElement('div')
    bioInfo.textContent = heroId[i].biography
    container.append(bioInfo)
  }
}













// stuff we append things with

  
