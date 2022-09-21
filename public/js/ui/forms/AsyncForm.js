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
    const myform = document.querySelectorAll('.form');
    myform.forEach(item => 
    item.addEventListener('submit', (event) => {
        event.preventDefault();
        let formData = new FormData(item);
         if(this.status === 200 && this.readyState == 4){
          this.submit();
       }
      })
    )};


  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData(){
    //const formData = new FormData(document.forms.this);
    //const key = formData.querySelector('[name]').value;
    //const keyValue = formData.querySelector('[value]').value;
   const getDataObject = {};

    for (let {key, keyValue} of this.formData.entries()) {
      getDataObject.push([key, keyValue]);
    }    
    return getDataObject = { key : keyValue};
  }

  onSubmit(options){

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    this.onSubmit(getDataObject);
  }
}