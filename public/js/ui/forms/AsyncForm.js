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
  //const myform = this.querySelector('.form');
 // const myform = document.querySelectorAll('.form');
  //this.forEach((item) => 
    this.element.addEventListener('submit', (event) => {
      event.preventDefault();
        this.submit();
       })
       }; 
  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData(){
    const getDataObject = {};
    const formData = new FormData(this.element);

    for (let [key, keyValue] of formData.entries()) {
      getDataObject[key] = keyValue;
    } 
    return getDataObject;
  }

  onSubmit(options){

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    let data = this.getData();
    this.onSubmit({data});
  }
}