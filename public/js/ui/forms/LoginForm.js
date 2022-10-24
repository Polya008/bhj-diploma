/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.login(data.data, (err, response) => {
      if (response && response.succes) {
        this.element.reset();
        App.setState( 'user-logged' );
        const loginWindow = App.getState( 'user-logged' );
        loginWindow.close();
        }
    })

  }
}