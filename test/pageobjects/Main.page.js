const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class MainPage extends Page {

     //Variables - Douglas Obando Camacho
    url_link = 'https://develop.terapeutica.digital/#/';
    time_out = 15000;
    /**
     * define selectors using getter methods
     */

    get inputSearch () {return $('#search-input')}
    get btn_Submit () {return $('[value=Buscar]')}
    get btn_Fisica () {return $('label[for=phisical]')}
    get btn_Search () { return $('.btn_search')}

    /**
     * overwrite specifc options to adapt it to page object
     */

     doEmptySearch(){
         this.inputSearch.waitForClickable({timeout:15000});
         this.btn_Submit.waitForClickable({timeout:15000});
         this.inputSearch.setValue('');
         this.btn_Submit.click();
    }

    doSearchDoc(){
        this.btn_Fisica.isSelected();
    }

    doSearchDocName(name){
        this.btn_Submit.waitForClickable({timeout:15000});
        this.inputSearch.setValue(name)
        this.btn_Submit.click();
    }

    clickSearch () {
        
        this.btnSearch.click(); 
    }
    searchText () {
        this.btn_Search.setValue("Maria"); 
        this.btn_Submit.click(); 
    }

    open () {
        return super.open('https://develop.terapeutica.digital/#/');
    }
}

module.exports = new MainPage();
