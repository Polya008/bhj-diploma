/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data.data, (err, response) => {
      if (response && response.succes) {
        data.data.reset();
        App.setState( 'user-logged' );
        const registerWindow = App.getState('register');
        registerWindow.close();
        }
    })
    }

  }
