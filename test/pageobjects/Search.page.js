const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    url_link2 = 'https://develop.terapeutica.digital/#/search';


    //Mapeo de los botones físicos de la páginal principal - Douglas Obando
    get btn_Fisica () { return $('a=Física') }
    get btn_Lenguaje () { return $('a=Lenguaje') }
    get btn_Ocupacional () { return $('a=Ocupacional') }
    get DocList () { return $('h3=Maria') }
    get inputSearch () { return $('.form=control') }
    get btn_Submit () { return $('value=Buscar') }
    get btn_GMaps () { return $('.icon-map-1') }

    
    /**
     * overwrite specifc options to adapt it to page object
     */

    getDocName(){
        return this.DocList.getText();
    }

    doSearchBySpecName(name){
        this.inputSearch.setValue(name);
        this.btn_Submit.waitForClickable([])
    }

    open () {
        return super.open('https://develop.terapeutica.digital/#/search');
    }
}

module.exports = new SearchPage();
