import validateByNum from './validateByNum';

const forms = (formSelector, inputsSelector, state) => {
    const form = document.querySelectorAll(formSelector),
        inputs = document.querySelectorAll(inputsSelector),
        phoneInput = document.querySelectorAll('input[name="user_phone"]')

    validateByNum(phoneInput)
        
    const message = {
        success: 'Отлично! Мы с вами свяжемся!',
        loading: 'Обработка данных...',
        failed: 'Что-то пошло не так'
    };

    

    const getData = async (url, data) => {
        let response = await fetch(url, {method: 'POST', body: data});

        return await response.text()
    }

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = ''
        })
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let resultMessage = document.createElement('div');
            resultMessage.classList.add('status');
            resultMessage.textContent = message.loading;
            document.querySelector('form').append(resultMessage);

            const formData = new FormData(item);
            console.log(state);
            if(item.getAttribute('data-calc') === 'end'){
                for(let key in state){
                    formData.append(key, state[key])
                }
                console.log(formData);
            }

            getData('assets/server.php', formData)
                .then((res) => {
                    console.log(res);
                    resultMessage.textContent = message.success
                    document.querySelector('form').append(resultMessage);
                    
                })
                .catch(err => {
                    resultMessage.textContent = message.failed
                    document.querySelector('form').append(resultMessage);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        resultMessage.remove()
                    }, 4000);
                })   
        })
    })
    
}

export default forms;