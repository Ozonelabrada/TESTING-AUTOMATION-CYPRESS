
let userToken = '';
let baseUrl = '';

describe('Home to login page.', ()=>{
    it('Positive Testing!', ()=>{
        cy.visit("https://hims-v2.vercel.app")
        cy.title().should('eql','Home')
    })

    it('Login Testing!', ()=>{
        cy.visit("https://hims-v2.vercel.app")
        cy.get("[href='/login']").click()
        cy.title().should('eql','Home')
        cy.get("input[name='userName']").type("testjake")
        cy.get("input[name='password']").type("Password#123")
        cy.get("[type='submit']").click()
        cy.get("#composition-button").click()
        cy.get('.MuiList-root > a > .MuiButtonBase-root').click()
        cy.get("[data-testid='MenuRoundedIcon']").click()
        cy.get('[href="/client/appointments"] > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root').click()
    })

})
