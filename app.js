const numbers = document.querySelectorAll('.number');
const submitButton = document.querySelector('button[type="submit"]');
const thankyouCard = document.querySelector('.hide');
const ratingCard = document.querySelector('.rating-card');
const ratingSpan = document.querySelector('#rating-value');

numbers.forEach(num => {
    num.addEventListener('click', function () {
        if (![...numbers].some(num => num.classList.contains('selected'))) {
            this.classList.add('selected');
        } else {
            numbers.forEach(num => num.classList.remove('selected'));
            this.classList.add('selected');
        }
    })
})

submitButton.addEventListener('click', () => {
    const selectedNumber = [...numbers].filter(num => num.classList.contains('selected'));
    let valueOfSelected = selectedNumber[0].dataset.value;

    ratingCard.classList.add('fade-back');
    ratingCard.classList.remove('rating-card');
    thankyouCard.classList.add('thankyou-card');

    ratingSpan.innerText = valueOfSelected;

})