
let userToken = '';
let baseUrl = 'https://brave-sea-07bed7310-149.centralus.3.azurestaticapps.net';
let SuperAdminCHEDName = "superadmin"
let SuperAdminCHEDPassword = "Reversed123"

describe('Home to login page.', ()=>{

    it('Login Superadmin!', ()=>{
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SuperAdminCHEDName)
        cy.get("input[name='password']").type(SuperAdminCHEDPassword)
        cy.get("[type='submit']").click()
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
})
