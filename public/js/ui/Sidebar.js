/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
      const sidebarBody = document.querySelector('.sidebar-mini');
      const sidebarButton = document.querySelector('.sidebar-toggle');
      sidebarButton.addEventListener('click', (event) => {
        event.preventDefault();
        sidebarBody.classList.toggle('sidebar-open');
        sidebarBody.classList.toggle('sidebar-collapse');
      })

      
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const registerButton = document.querySelector('.menu-item_register');
    registerButton.onclick = function() {
      //const modalRegister = document.getElementById('#modal-register');
      //const modalRegister = App.getModal('#modalRegister');
      //this.open(modalRegister);
      this.open(App.getModal('modalRegister'));
    }
  }
}