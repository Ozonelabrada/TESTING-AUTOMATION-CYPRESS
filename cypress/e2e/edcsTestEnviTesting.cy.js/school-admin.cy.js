
let userToken = '';
let baseUrl = 'https://proud-bay-0c9dd9f00.2.azurestaticapps.net';
let SchoolAdminName = "admin"
let SchoolAdminPass = "Reversed123"
let prName = '2023-001_FORMAT_PR_TEMPLATE_2023.xlsx'
let email = 'admin@ustp.edu.ph'

describe('EDCS Testing Process', ()=>{
    it('Login Dashboard', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
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
        cy.get('.css-gqos7x').scrollTo('bottomRight', {duration: 1000})
        cy.get('.MuiTableContainer-root').scrollTo('right', {duration:1000})
        cy.get('#cancelschoolInfoDetail').click()
        cy.get('[data-testid="MuiDataTableBodyCell-8-0"]').click()
        cy.get('#addDelete').click()
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()
        cy.wait(1500)
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
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //update user info
        cy.get('#editButton').click()
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogContent-root').clear()
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogContent-root').type('Jorge updated')
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-contained').click()
        // cy.get(':nth-child(2) > :nth-child(2) > .MuiChip-root > .MuiChip-label').clear()
        // cy.get(':nth-child(2) > :nth-child(2) > .MuiChip-root > .MuiChip-label').type('last name updated')
        cy.wait(3000)
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //update institutional profile
        cy.get('#InstitutionProfile').click()
        cy.get('#EditInstitutionalProfile').click()
        cy.get('#institutionalFormOfOwnership').clear()
        cy.get('#institutionalFormOfOwnership').type(' updated ownership')
        cy.get('#street').clear()
        cy.get('#street').type(' updated street')
        cy.get('#fax').clear()
        cy.get('#fax').type('123456')
        cy.get('#institutionalHeadTelephone').clear()
        cy.get('#institutionalHeadTelephone').type('0975-264-5486')
        cy.get('#yearConvertedtoCollegeStatus').clear()
        cy.get('#yearConvertedtoCollegeStatus').type('1996')
        cy.get('#nameofInstitutionalHead').clear()
        cy.get('#nameofInstitutionalHead').type('Edward Paul Walker')
        cy.get('#highestEducationalAttainmentoftheHead').clear()
        cy.get('#highestEducationalAttainmentoftheHead').type('PhD')
        cy.get('#longitude').clear()
        cy.get('#longitude').type(3)
        cy.get('#email').clear()
        cy.get('#email').type('info@email.com.ph')
        cy.get('#municipalityCity').clear()
        cy.get('#municipalityCity').type('updated municipality')
        cy.get('#zipCode').clear()
        cy.get('#zipCode').type(8715)
        cy.get('#latitude').clear()
        cy.get('#latitude').type(15)
        cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
        cy.wait(2000)
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //security
        cy.get('#Security').click()
        cy.get('#changePassword').click()
        cy.get('.MuiDialogContent-root > :nth-child(1) > .MuiInputBase-root > #email').clear()
        cy.get('.MuiDialogContent-root > :nth-child(1) > .MuiInputBase-root > #email').type(email)
        cy.get('#oldPassword').clear()
        cy.get('#oldPassword').type(SchoolAdminPass)
        cy.get('#newPassword').clear()
        cy.get('#newPassword').type(SchoolAdminPass)
        cy.get('#confirmPassword').clear()
        cy.get('#confirmPassword').type(SchoolAdminPass)
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click()
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root').click()
        cy.wait(1500)
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Users
        cy.get('.MuiTabs-flexContainer > :nth-child(4)').click()
        //edit user info
        cy.get('[data-testid="MuiDataTableBodyCell-7-0"] > :nth-child(2) > .css-z1ua6u > [aria-label="Edit User"] > [data-testid="EditRoundedIcon"] > path').click()
        cy.get('.MuiButton-contained > .MuiBox-root').click()
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-contained').click()
        cy.wait(1500)
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Academic Calendar
        cy.get('#AcademicCalendar').click()
        cy.get('#addAcademic').click()
        cy.get('#cancelAcademic').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
})
