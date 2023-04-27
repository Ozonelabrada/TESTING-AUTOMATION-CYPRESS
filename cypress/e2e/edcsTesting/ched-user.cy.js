
let userToken = '';
let baseUrl = 'https://brave-sea-07bed7310-149.centralus.3.azurestaticapps.net';
let CHEDUserName = "Regtsu.Lastname"
let CHEDUserPass = "*2po2bzi"

describe('Home to login page.', ()=>{

    it('Login CHED User!', ()=>{
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDUserName)
        cy.get("input[name='password']").type(CHEDUserPass)
        cy.get("[type='submit']").click()
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
})
