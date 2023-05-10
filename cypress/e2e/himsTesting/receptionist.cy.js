
let userToken = '';
let baseUrl = 'https://hims-v2-re2zdhj37-wacanam.vercel.app';

describe('Home to login page.', ()=>{
    it('Login Testing!', ()=>{
        cy.visit(baseUrl)
        cy.get("[href='/login']").click()
        cy.title().should('eql','Home')
        cy.get("input[name='userName']").type("carlT")
        cy.get("input[name='password']").type("@Ustp1234")
        cy.get("[type='submit']").click()
        cy.get("#composition-button").click()
        cy.get('.MuiList-root > a > .MuiButtonBase-root').click()
        cy.get("[data-testid='MenuRoundedIcon']").click()
        cy.get('[href="/client/appointments"] > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root').click()
    })

})
