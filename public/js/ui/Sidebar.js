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
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    let elemBody = document.querySelector('body');
    sidebarToggle.addEventListener('click', () => {
      elemBody.classList.toggle('sidebar-open');
      elemBody.classList.toggle('sidebar-collapse');
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
    const btnLogin = document.querySelector('.menu-item_login');
    const btnRegister = document.querySelector('.menu-item_register');
    const btnLogOut = document.querySelector('.menu-item_logout');
    
    btnLogin.addEventListener('click', (event) => {
      event.preventDefault();
      App.getModal( 'login' ).open();
    })

    btnRegister.addEventListener('click', (event) => {
      event.preventDefault();
      App.getModal( 'register' ).open();
    })

    btnLogOut.addEventListener('click', (event) => {
      event.preventDefault();
      //let data = User.current();
      User.logout((err, response) => {
        if ((response && response.success)) {
          App.setState("init");
        }
       })
    })
  }
}