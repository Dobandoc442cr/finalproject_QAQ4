const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class MainPage extends Page {

     //Variables - Douglas Obando Camacho
    url_link = 'https://develop.terapeutica.digital/#/';
    time_out = 8000;
    /**
     * define selectors using getter methods
     */

    get inputSearch () {return $('#search-input')}
    get btn_Submit () {return $('[value-Buscar]')}
    get btn_Fisica () {return $(input[id="phisical"])}

    /**
     * overwrite specifc options to adapt it to page object
     */

     doEmptySearch(){
         this.inputSearch.waitForClickable({timeout:this.time_out});
         this.btn_Submit.waitForClickable({timeout:this.time_out});
         this.inputSearch.setValue('');
         this.btn_Submit.click();
    }

    doSearchDoc(){
        this.btn_Fisica.isSelected();
    }

    doSearchDocName(name){
        this.btn_Submit.waitForClickable({timeout:this.time_out});
        this.inputSearch.setValue(name)
        this.btn_Submit.click();
    }

    open () {
        return super.open(this.url_link);
    }
}

module.exports = new MainPage();
