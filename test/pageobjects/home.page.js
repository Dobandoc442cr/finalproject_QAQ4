const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePahe extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('https://develop.terapeutica.digital/#/');
    }
}

module.exports = new HomePahe();
