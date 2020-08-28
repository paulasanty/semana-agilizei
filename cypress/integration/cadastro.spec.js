/// <reference types="cypress"/>

const faker = require('faker');
let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {

    it('Cadastro de um usuário em um site', () => {
        //  POST 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
       //   POST 200 /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
      //    GET 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        cy.server();
        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**' )
        .as('postNewtable'); // apelidos
        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**' )
        .as('postUsertable');
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**' )
        .as('getNewtable');
        
        cy.visit('Register.html');

        // types
        let password = chance.hash({length: 5, casing:'lower'}) + chance.hash({length: 5, casing:'upper'})
        cy.get('input[placeholder="First Name"]').type(faker.name.firstName());
        cy.get('input[ng-model^="LastName"]').type(chance.last());
        cy.get('textarea[ng-model^="Adress"]').type(chance.address());
        cy.get('input[ng-model^="EmailAdress"]').type(chance.email());
        cy.get('input[ng-model^="Phone"]').type(chance.phone({ formatted: false}));
        cy.get('#firstpassword').type(password);
        cy.get('#secondpassword').type(password);
        cy.get('input[value=FeMale]').check();
        cy.get('input[type=checkbox]').check('Cricket');
        cy.get('input[type=checkbox]').check('Hockey');
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Australia');
        cy.get('select#country').select('India', {force: true})
        cy.get('select#yearbox').select(chance.year({min: 1916, max: 2015}));
        cy.get('select[placeholder="Month"]').select(faker.date.month());
        cy.get('select#daybox').select('15');

        // attachFile -> input file (anexando arquivo)
        cy.get('input#imagesrc').attachFile('image.png');
        cy.get('button#submitbtn').click()

        cy.wait('@postNewtable').then((resNewtable) => {
             // chai
             expect(resNewtable.status).to.eq(200)
        });
        cy.wait('@postUsertable').then((resUsertable) => {
            // chai
            expect(resUsertable.status).to.eq(200)
       });

        cy.wait('@getNewtable').then((resNewtable) => {
            expect(resNewtable.status).to.eq(200)
        });
        cy.url().should('contain', 'WebTable')
    })
})


// Elementos
// select#Skills
// select#countries
//  select#country
//  select#yearbox
//  select[placeholder="Month"]
//  select#daybox
// 
// 
// 
