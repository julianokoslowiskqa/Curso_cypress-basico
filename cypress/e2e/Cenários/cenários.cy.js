///<reference types="Cypress" />


  describe('Blip Portal Telas de Cadastro e Login', function() {
    beforeEach(function(){
        cy.visit('https://account.blip.ai')
    })
 
    it('Cenário 1 : Usuário Loga na Aplicação com dados Válidos', () => {
      cy.get('#email').type('julianokoslowisk@gmail.com')
        .should('have.value', 'julianokoslowisk@gmail.com')
      cy.get('#password').type('Koslowisk123!@#')
      cy.get('#blip-login').click()
      cy.get('#logout-link').click()    
    }) 

    it('Cenário 2: Usuário Tenta logar na aplicação com dados Inválidos', () => {
      cy.get('#email').type('julianokoslowisk@gmail.com')
      cy.get('#password').type('oslowisk123!@#')
      cy.get('#blip-login').click()        
      cy.get('.bottom-left > .hydrated').should('be.visible')        
    
  })
      
    it('Cenário 4: Usuário esqueceu a senha ', () => {
        cy.get('#login-forgot-password').click()
        cy.get('.bp-fw-bold')
        cy.get('#Email').type('julianokoslowisk@gmail.com')  
        cy.get('#submitButton').click()
        cy.get('.bp-c-rooftop')        
      
    })      

   /* it.only('Cenário 5: Efetua um novo Cadastro com dados válidos ', () => {
      cy.get('#blip-register').click()
      cy.get('#FullName').type('Juliano Koslowisk Martins dos Reis')
      cy.get('#Email').type('julianokoslowisk@gmail.com')
      cy.get('#Password').type('Koslowisk123!@#')
      cy.get('#PhoneNumber').type('62985008132')
      cy.get('#CompanySite').type('https://digital.take.net/')
      cy.get('#policyCheckbox').click()
      cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()      
      cy.get('#submitButton').click()
             
    
  }) */

   it('Cenário 5: Usuário tenta Efetuar um novo Cadastro com dados Inválidos ', () => {
    cy.get('#blip-register').click()
    cy.get('#FullName')
      .type('1')
      .clear()
      .should('have.value', '')
    cy.get('.error')
      .should('be.visible')
    cy.get('#Email')
      .type('julianokoslowisk@gmail,com')
    cy.get('.error')
      .should('be.visible')
    cy.get('#Password')
      .type('!@#')
    cy.get('.error').should('be.visible')
    cy.get('#PhoneNumber')
      .type('62')
    cy.get('.error')
      .should('be.visible')
    cy.get('#CompanySite')
      .type('https://digital.take.net/')
    cy.get('#policyCheckbox').click()
      
  })
})



  