/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {

  static url = '/account';
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback){
      return createRequest({id, method: 'GET', url: this.URL, responseType: 'json', callback});
  }
}
