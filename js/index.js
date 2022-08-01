var submitBtn = document.querySelector('.submit')
var card1 = document.querySelector('.card-1')
var card2 = document.querySelector('.card-2')
const mainContainer = document.querySelector('.container')
var ratingBtn = document.querySelectorAll('.btn')
var rateNum = document.getElementById("rate-num")
var rateScore = 0

card2.remove()
// for assigning a rate
ratingBtn.forEach(rate => {
    rate.addEventListener('click',()=>{
    rateScore = rate.textContent
    })
})


// for submitting the rate
submitBtn.addEventListener('click', submit)
   
function submit(){
    card1.remove()
    mainContainer.append(card2)
    rateNum.textContent = rateScore
}




