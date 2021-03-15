const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active')
    })
})

// Alternative

// const buttons = document.querySelectorAll('.faq-toggle')
// const faqs = document.querySelectorAll('.faq')

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         if (button.parentElement.classList.contains('active')) {
//             activeOff()
//         } else {
//             activeOff()
//             button.parentElement.classList.add('active')
//         }
//     })
// })

// function activeOff() {
//     faqs.forEach((faq) => {
//         faq.classList.remove('active')
//     })
// }