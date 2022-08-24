/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
      this.element =  element;
      if(!element){
        throw new Error ('Передан пустой элемент');
      }
      this.registerEvents();
  }

  /**
   * Необходимо запретить отправку формы и в момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
   // this.addEventListener('submit', (event) => {
      //event.preventDefault();
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('readystatechange', () =>{
        if(xhr.readystate === xhr.DONE){
          this.submit();
        }
    //  });
      //xhr.open('GET', ); не знаю надо ли это прописывать вообще, а если надо -верное ли место я выбрала?и где взять URL?
      //xhr.send();
    })
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData(){
    const formData = new FormData(this);
    const key = formData.querySelector('[name]').value;
    const keyValue = formData.querySelector('[value]').value;
    return getDataObject = { key : keyValue};
  }

  onSubmit(options){

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    getDataObject();
  }
}