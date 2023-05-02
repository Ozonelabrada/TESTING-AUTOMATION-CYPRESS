
let userToken = '';
let baseUrl = 'https://brave-sea-07bed7310.3.azurestaticapps.net';
let SchoolUserName = "sAdmin"
let SchoolUserPass = "triple081"
let prName = '2023-001_FORMAT_PR_TEMPLATE_2023.xlsx'
let email = 'schoolAdmin@gmail.com'

describe('Home to login page.', ()=>{
    it('Login Dashboard', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolUserName)
        cy.get("input[name='password']").type(SchoolUserPass)
        cy.get("[type='submit']").click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('Upload Promotional Report and Student Evaluation', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolUserName)
        cy.get("input[name='password']").type(SchoolUserPass)
        cy.get("[type='submit']").click()
        //test upload PR
        cy.get("[data-testid='SummarizeRoundedIcon']").click()
        cy.get('.css-1i27l4i > .MuiBox-root > .MuiButtonBase-root').click()
        cy.get('input[type=file]')
        .attachFile( prName , { subjectType: 'drag-n-drop' });
        cy.get('.MuiButton-textPrimary').click()
        //Student Evaluation
        cy.get('[data-testid="MuiDataTableBodyCell-3-1"]').click()
        cy.get('[data-testid="MuiDataTableBodyCell-2-3"]').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('View Students', ()=>{   
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
    it('Update personal Info', ()=>{
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
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogContent-root').type('FirstName')
        cy.get('#middleName').clear()
        cy.get('#middleName').type('middle name')
        cy.get('#lastName').clear()
        cy.get('#lastName').type('lastname')
        cy.get('#designation').clear()
        cy.get('#designation').type('Api Automation')
        cy.get('#updateEditProfile').click()
        cy.wait(3000)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('Security Testing', ()=>{
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
