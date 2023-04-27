
let userToken = '';
let baseUrl = 'https://brave-sea-07bed7310-149.centralus.3.azurestaticapps.net';
let SuperAdminCHEDName = "superadmin"
let SuperAdminCHEDPassword = "Reversed123"
let CHEDAdminName = "superadmin"
let CHEDAdminPass = "Reversed123"
let CHEDUserName = "Regtsu.Lastname"
let CHEDUserPass = "*2po2bzi"
let SchoolAdminName = "ozone.labrada"
let SchoolAdminPass = "triple081"
let SchoolUserName = "ozone.labrada"
let SchoolUserPass = "triple081"

describe('Home to login page.', ()=>{

   
    it('Title validation Testing!', ()=>{
        cy.visit(baseUrl)
        cy.title().should('eql','Login - Enrollment Data Collection System')
    })

    it('Login Superadmin!', ()=>{
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SuperAdminCHEDName)
        cy.get("input[name='password']").type(SuperAdminCHEDPassword)
        cy.get("[type='submit']").click()
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })

    it('Login CHED ADMIN!', ()=>{
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
        cy.get("[type='submit']").click()
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })

    it('Login CHED User!', ()=>{
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDUserName)
        cy.get("input[name='password']").type(CHEDUserPass)
        cy.get("[type='submit']").click()
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })

    it('Login School ADMIN!', ()=>{
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    
    it('Login School ADMIN!', ()=>{
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolUserName)
        cy.get("input[name='password']").type(SchoolUserPass)
        cy.get("[type='submit']").click()
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
})
