const form = document.querySelector('form')
let div = document.querySelector('div')
let input = document.querySelector('select')

form.addEventListener('submit', e => {
    e.preventDefault();

    console.log(input.value)

    axios.get(`http://54.183.167.242/char/${input.value}`).then((res) => {
        console.log(res.data)
        div.innerHTML = res.data
    }).catch(err => console.log(err))
})