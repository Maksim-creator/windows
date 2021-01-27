const validateByNum = (items) => {
    items.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '')
        })
    })
}

export default validateByNum;