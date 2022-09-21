/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    if(createRequest.method === 'GET'){
        xhr.open( 'GET', `${createRequest.url}?mail=${createRequest.data.mail}&password=${createRequest.data.password}`);

    }else {
        formData = new FormData();
        formData.append( 'mail', `createRequest.data.mail`);
        formData.append( 'password', `createRequest.data.password`);

        xhr.open('POST', 'http://localhost:8000' );
        xhr.send(formData);    
    }
     


    xhr.addEventListener('load', (err, response) => {
        if(this.readyState == 4 && this.status == 200){
           console.log(xhr.response); 
        } else{
           console.log('Ошибка!!!', xhr.err)

        }
    });
}



