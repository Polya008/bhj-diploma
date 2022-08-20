/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    if(createRequest.method === 'GET'){
        xhr.open( 'GET', `${createRequest.url}?mail=${createRequest.data.mail}&password=${createRequest.data.password}`);
        xhr.send();

    }else {
        formData = new FormData;
        formData.append( 'mail', `createRequest.data.mail`);
        formData.append( 'password', `createRequest.data.password`);

        xhr.open('POST', 'https://example.com' );
        xhr.send(formData );
    }

    createRequest.addEventListener('readystatechange', callback => {
        if(this.readyState == 4 && this.status == 200){
           console.log(xhr.callback(err) )
           console.log('Ошибка')
        } else{
           console.log(xhr.callback(responseType) )
           console.log('Нет Ошибка')
        }
    });
}



