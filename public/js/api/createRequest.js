/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    if(options.method === 'GET'){
        for (let key in options){
        xhr.open( 'GET', `${options.url}?mail=${options[key].mail}&password=${options[key].password}`);
        }
    }else {

        let formData = new FormData();
        for (let key in options){
            formData.append( key, options.data[key]);
            }
        xhr.open('POST', 'http://localhost:8000/' );
        xhr.send(formData);
    }

   xhr.addEventListener('load', () => {
    
            let err = null;
            let response = xhr.response;
            options.callback(err, response);
        }
      );
}