
let userToken = '';
let baseUrl = 'https://brave-sea-07bed7310.3.azurestaticapps.net';
let CHEDAdminName = "superadmin"
let CHEDAdminPass = "Reversed123"

describe('Home to login page.', ()=>{

    it('Login CHED ADMIN!', ()=>{
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
        cy.get("[type='submit']").click()
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
})
