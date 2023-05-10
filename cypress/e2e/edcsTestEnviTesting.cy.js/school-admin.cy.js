
let userToken = '';
let baseUrl = 'https://proud-bay-0c9dd9f00.2.azurestaticapps.net';
let SchoolUserName = "string"
let SchoolUserPass = "string"
let prName = 'string_FORMAT_PR_TEMPLATE_2023.xlsx'
let email = 'string@ustp.edu.ph'

describe('EDCS Testing Environment', ()=>{
    
    it('Upload Promotional Report | SCHOOL USER', ()=>{
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/login').as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolUserName)
        cy.get("input[name='password']").type(SchoolUserPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //upload PR
        cy.get("[data-testid='SummarizeRoundedIcon']").click()
        cy.get('.css-1i27l4i > .MuiBox-root > .MuiButtonBase-root').click()
        cy.get('input[type=file]')
        .attachFile( prName , { subjectType: 'drag-n-drop' });
        cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
        cy.wait(10000)
        cy.get("#handleUploadYes").click()
        cy.wait(15000)
        //Student Evaluation
        cy.scrollTo('bottom', {duration:1000})
        cy.scrollTo('top', {duration:500})
        cy.get(':nth-child(4) > .css-1193emu > .MuiListItemButton-root').click()
        cy.wait(1500)
        // //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('View Students | SCHOOL USER', ()=>{   
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolUserName)
        cy.get("input[name='password']").type(SchoolUserPass)
        cy.get("[type='submit']").click()
        //Students
        cy.get("[aria-label='Students']").click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .css-130bhjr').click()
        cy.get('#simple-tab-1').click()
        cy.scrollTo('bottom', {duration: 2000})
        cy.get('#simple-tab-0').click()
        //back to dashboard
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('Update personal Info | SCHOOL USER', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolUserName)
        cy.get("input[name='password']").type(SchoolUserPass)
        cy.get("[type='submit']").click()
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //update user info
        cy.get('#editButton').click()
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogContent-root').clear()
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogContent-root').type('string01')
        cy.get('#middleName').clear()
        cy.get('#middleName').type('U.')
        cy.get('#lastName').clear()
        cy.get('#lastName').type('string01')
        cy.get('#designation').clear()
        cy.get('#designation').type('USTP User')
        cy.get('#updateEditProfile').click()
        cy.wait(3000)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('Security Testing | SCHOOL USER', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolUserName)
        cy.get("input[name='password']").type(SchoolUserPass)
        cy.get("[type='submit']").click()
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //security
        cy.get('#Security').click()
        cy.get('#changePassword').click()
        cy.get('.MuiDialogContent-root > :nth-child(1) > .MuiInputBase-root > #email').clear()
        cy.get('.MuiDialogContent-root > :nth-child(1) > .MuiInputBase-root > #email').type(email)
        cy.get('#oldPassword').clear()
        cy.get('#oldPassword').type(SchoolUserPass)
        cy.get('#newPassword').clear()
        cy.get('#newPassword').type(SchoolUserPass)
        cy.get('#confirmPassword').clear()
        cy.get('#confirmPassword').type(SchoolUserPass)
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click()
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    })
})
