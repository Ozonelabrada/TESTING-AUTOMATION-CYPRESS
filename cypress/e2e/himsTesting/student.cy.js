
let userToken = '';
let baseUrl = 'https://hims-v2-re2zdhj37-wacanam.vercel.app';

describe('HIMS | Student Access Testing', ()=>{

    it('Login Testing!', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("[href='/login']").click()
        cy.title().should('eql','Home')
        cy.get("input[name='userName']").type("ethan")
        cy.get("input[name='password']").type("@Ustp1234")
        cy.get("[type='submit']").click()
    })
    it.only('Appointments!', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("[href='/login']").click()
        cy.title().should('eql','Home')
        cy.get("input[name='userName']").type("ethan")
        cy.get("input[name='password']").type("@Ustp1234")
        cy.get("[type='submit']").click()
        //access appointments
        cy.get('.css-1xhj18k > .MuiButtonBase-root').click()
        cy.get('[href="/client/appointments"] > .MuiListItem-root > .MuiListItemIcon-root').click()


    })


})
