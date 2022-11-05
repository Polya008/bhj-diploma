/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let formData = new FormData();
    let url = options.url;
  
    if(options.method === 'GET'){
        
        if(options.data){
            for (let key in options.data){
                url += key +'='+ options[key]+'&';
            }
            url.slice(0, -1);
        }
    }else {

        
        for (let key in options.data){
           formData.append(key, options.data[key]);
        }
       // xhr.open('POST', 'http://localhost:8000/' );
       // xhr.send(formData);
    }


try{
   xhr.open(options.method,options.url);
   //xhr.send(options.method !== 'GET' ? formData : null);
   xhr.send(formData)
} catch(e){
    options.callback(e);
}


   xhr.addEventListener('load', () => {
       if (xhr.status === 200 && xhr.readyState === 4) {
                options.callback(xhr.err, xhr.response);
            } else {
                options.callback(xhr.response,eroor, xhr.response);
            }
        }
      );
}