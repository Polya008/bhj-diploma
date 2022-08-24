/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element){
      this.element = element;
      //this.element = document.querySelectorAll('[data-dismiss]');
      if(!element) {
        throw new Error ('Передан пустой элемент');
      };
      this.registerEvents();
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    const closeButtons = Array.from(document.querySelectorAll('[data-dismiss ="modal"]'));
      closeButtons.forEach((item) => {
          item.addEventListener("click", this.onClose());
        });
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
        e.forEach((item) => {
          item.addEventListener("click", this.close());
        });
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.style.display = "block";
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
   this.removeAttribute("style");
  }
}