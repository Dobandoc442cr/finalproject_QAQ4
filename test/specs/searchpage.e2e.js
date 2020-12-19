const SearchPage = require('../pageobjects/search.page');
const MainPage = require('../pageobjects/Main.page');

//Definicion de las URL de los especialistas
FisicaURL = 'https://develop.terapeutica.digital/#/search?sp=phisical';
LenguajeURL = 'https://develop.terapeutica.digital/#/search?sp=language';
OcupacionalURL = 'https://develop.terapeutica.digital/#/search?sp=ocupational';


describe('Terapeutica page', () => {

	beforeEach( () => {
        browser.reloadSession();
        SearchPage.open();
    });



    it('CASE 2.A -> Al cambiar entre las diferentes especialidades la URL cambia', () => {

        
        SearchPage.doClickBtn(SearchPage.btn_Fisica);

        //Definicion de expectativas
        expect(browser).toHaveUrl(FisicaURL);


        SearchPage.doClickBtn(SearchPage.btn_Lenguaje);

        //Definicion de expectativas
        expect(browser).toHaveUrl(LenguajeURL);


        SearchPage.doClickBtn(SearchPage.btn_Ocupacional);

        //Definicion de expectativas
        expect(browser).toHaveUrl(OcupacionalURL);  

              
    });

    it('CASE 2.B -> Al ingresar el texto -Maria-, y hacer clic en Buscar la pagina es refrescada', () => {
    

        SearchPage.doSearchBySpecName('Maria');

        //Definicion de expectativas
        expect(SearchPage.DocList).toHaveText('Maria José Miranda');

    });


    it('CASE 2.C -> Validar que al cambiar entre mapa y lista el mapa desaparece de la página', () => {
        
        SearchPage.doClickBtn(SearchPage.btn_GMaps);
        
        //Definicion de expectativas
        expect(SearchPage.Map_Def).not.toBeDisplayed();
            
    });

    it('CASE 3.A -> Verificar que el webservice correcto', () => {
        const mock = browser.mock('https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41')
        MainPage.searchText()
        SearchPage.btn_Listing.click()

        //Definicion de expectativas
        expect(mock).toBeRequested()
    });

});
