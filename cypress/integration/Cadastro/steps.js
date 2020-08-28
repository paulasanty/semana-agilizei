/// <reference types="cypress"/>
const faker = require('faker')
let Chance = require('chance');
let chance = new Chance();

When(/^informar meus dados$/, () => {
    // types
    let password = chance.hash({ length: 5, casing: 'lower' }) + chance.hash({ length: 5, casing: 'upper' })
    cy.get('input[placeholder="First Name"]').type(faker.name.firstName());
    cy.get('input[ng-model^="LastName"]').type(chance.last());
    cy.get('textarea[ng-model^="Adress"]').type(chance.address());
    cy.get('input[ng-model^="EmailAdress"]').type(chance.email());
    cy.get('input[ng-model^="Phone"]').type(chance.phone({ formatted: false }));
    cy.get('#firstpassword').type(password);
    cy.get('#secondpassword').type(password);
    cy.get('input[value=FeMale]').check();
    cy.get('input[type=checkbox]').check('Cricket');
    cy.get('input[type=checkbox]').check('Hockey');
    cy.get('select#Skills').select('Javascript');
    cy.get('select#countries').select('Australia');
    cy.get('select#country').select('India', { force: true })
    cy.get('select#yearbox').select(chance.year({ min: 1900, max: 2015 }));
    cy.get('select[placeholder="Month"]').select(faker.date.month());
    cy.get('select#daybox').select('15');

    // attachFile -> input file (anexando arquivo)
    cy.get('input#imagesrc').attachFile('image.png');
});

When(/^salvar$/, () => {
    cy.get('button#submitbtn').click()
});

Then(/^devo ser cadastrado com sucesso$/, () => {
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
});
