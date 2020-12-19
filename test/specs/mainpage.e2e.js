
//Llamado a los pageobjects - Douglas Obando Camacho
const { expect } = require('chai');
const MainPage = require('../pageobjects/Main.page');
const SearchPage = require('../pageobjects/Search.page')

//Variables - Douglas Obando Camacho

name_doc = 'Maria';
exp_placeholder = '¿Buscas a alguien o algo en específico?';
exp_nameDoc = 'Maria José Miranda';

// Test Cases - Ejercicios
describe('Terapeutica page', () => {
    

    beforeEach (()=> {
        browser.reloadSession();
        MainPage.open();

    })
    
    it('CASE 1.A -> No redirigir al usuario', () => {
        const url_link;
        MainPage.doEmptySearch();
        
        //Definicion de expectativas
        expect(browser).toHaveUrl(MainPage.url_link);
 
    });

    it('CASE 1.B -> Obtener el foco y el placeholder del mismo', () => {
        MainPage.doSearchDoc();

        //Definicion de expectativas
        expect(MainPage.inputSearch).toBeFocused();
        expect(MainPage.inputSearch).toHaveAttribute('placeholder',this.exp_placeholder)
    
    });

    it('CASE 1.C -> Validar al ingresar a -Maria-', () => {
        MainPage.doSearchDocName(this.name_doc);

        //Definicion de expectativas
        expect(SearchPage.DocList).toHaveText(this.exp_nameDoc);
    
    });

});

