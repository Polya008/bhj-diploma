/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';


    let url = options.url;
    if(options.method === 'GET'){
        if(options.data){
            for (let key in options){
                url += key +'='+ options[key]+'&';
            }
            url.slice(0, -1);
        }
    }else {

        let formData = new FormData();
        for (let key in options){
           url +=  formData.append(key, options.data[key]);
            }
       // xhr.open('POST', 'http://localhost:8000/' );
       // xhr.send(formData);
    }

   xhr.open(options.method, url);
   xhr.send(options.method !== 'GET' ? formData : null);



   xhr.addEventListener('load', () => {
    
            //let err = null;
            //let response = xhr.response;
            options.callback(null, xhr.response);
        }
      );
}