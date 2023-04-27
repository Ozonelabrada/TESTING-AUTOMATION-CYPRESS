
let userToken = '';
let baseUrl = 'https://brave-sea-07bed7310-152.centralus.3.azurestaticapps.net';
let SchoolAdminName = "ozone.SAdmin"
let SchoolAdminPass = "triple081"
let prName = '2023-001_FORMAT_PR_TEMPLATE_2023.xlsx'
let email = 'ozone.labrada@pointersbit.com'

describe('Home to login page.', ()=>{
    it('Login Dashboard', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('Upload Promotional Report', ()=>{
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
        // cy.get("[id='demo-simple-select']").click()
        // cy.get("[data-value='2017-2018']").click()
        // cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
        cy.get('.MuiButton-textPrimary').click()
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('View Students', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        //Students
        cy.get("[aria-label='Students']").click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .css-130bhjr').click()
        cy.get('#simple-tab-1').click()
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    
    it('Update personal Info', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
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
        //Logout
        // cy.get('[aria-label="My Account"]').click()
        // cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        // cy.get('.MuiButton-outlined').click()
    })

    it('Institutional Profile', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
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
        cy.get('#municipalityCity').clear()
        cy.get('#municipalityCity').type('updated municipality')
        cy.get('#zipCode').clear()
        cy.get('#zipCode').type(8715)
        cy.get('#latitude').clear()
        cy.get('#latitude').type(15)
        cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
        cy.wait(2000)

        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    }) 
    it('Security Testing', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //security
        cy.get('#Security').click()
        cy.get('#changePassword').click()
        cy.get('#email').clear()
        cy.get('#email').type(email)
        cy.get('#oldPassword').clear()
        cy.get('#oldPassword').type(SchoolAdminPass)
        cy.get('#newPassword').clear()
        cy.get('#newPassword').type('triple081')
        cy.get('#confirmPassword').clear()
        cy.get('#confirmPassword').type('triple081')
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click()
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root').click()
        cy.wait(3000)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    })
    it('User Testing', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Users
        cy.get('.MuiTabs-flexContainer > :nth-child(4)').click()
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root').click()
        //access list
        cy.get('[data-testid="MuiDataTableBodyCell-7-0"] > :nth-child(2) > .css-z1ua6u > [aria-label="Access List"]').click()
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root').click()
        //edit user info
        cy.get('[data-testid="MuiDataTableBodyCell-7-0"] > :nth-child(2) > .css-z1ua6u > [aria-label="Edit User"] > [data-testid="EditRoundedIcon"] > path').click()
        cy.get('.MuiButton-contained > .MuiBox-root').click()
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-contained').click()
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })

    it.only('Academic Calendar Testing.', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Academic Calendar
        cy.get('#AcademicCalendar').click()
        cy.get('#addAcademic').click()
        cy.get('#cancelAcademic').click()

        //Logout
        // cy.get('[aria-label="My Account"]').click()
        // cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        // cy.get('.MuiButton-outlined').click()
    })
})
