
// Username: sasa.sasa
// Password: @&z2TVus


let userToken = '';
// let baseUrl = 'https://brave-sea-07bed7310.3.azurestaticapps.net';
let baseUrl = 'https://brave-sea-07bed7310-157.centralus.3.azurestaticapps.net';
let SchoolAdminName = "ozone.SAdmin"
let SchoolAdminPass = "triple081"
let prName = '2023-001_FORMAT_PR_TEMPLATE_2023.xlsx'
let email = 'ozone.labrada@pointersbit.com'

describe('EDCS Brave Testing Environment!', ()=>{
    it('Login Dashboard', ()=>{
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/login').as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //Logout
        // cy.get('[aria-label="My Account"]').click()
        // cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        // cy.get('.MuiButton-outlined').click()
    })
    it('Upload Promotional Report and Student Evaluation', ()=>{
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/login').as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //upload PR
        cy.get("[data-testid='SummarizeRoundedIcon']").click()
        cy.get('.css-1i27l4i > .MuiBox-root > .MuiButtonBase-root').click()
        cy.get('input[type=file]')
        .attachFile( prName , { subjectType: 'drag-n-drop' });
        cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
        cy.get('.MuiButton-textPrimary').click()
        cy.wait(10000)
        //Student Evaluation
        cy.get('[data-testid="MuiDataTableBodyCell-3-1"]').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('View Students', ()=>{
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/login').as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
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
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/login').as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
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
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })

    it('Institutional Profile', ()=>{
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/login').as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
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

        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    }) 

    it('Security Testing', ()=>{
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/login').as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
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
        cy.get('#newPassword').type('triple081')
        cy.get('#confirmPassword').clear()
        cy.get('#confirmPassword').type('triple081')
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click()
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    })
    it('Settings',()=>{
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/login').as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        
        //settings
        cy.get(':nth-child(4) > .css-1193emu > .MuiListItemButton-root').click()
        cy.get('[data-testid="MuiDataTableBodyCell-2-0"]').click()
        cy.get('[data-testid="MuiDataTableBodyCell-3-0"] > :nth-child(2)').click()//sselect curiculum
        cy.get('.MuiBox-root > .css-5ax1kt > :nth-child(1)').click() //add curriculum
        cy.get('#curriculumname').type('CUR-NAME-0123')
        cy.get('#loadingAdding').click()
        cy.get('[data-testid="MuiDataTableBodyCell-3-0"]').click()
        cy.wait(2000)
        cy.get('.MuiBox-root > .css-1yjo05o > :nth-child(1)').click()   //add course
        cy.get('#code').type('automatio-001')
        cy.get('#yearLevel').click()
        cy.get('[data-value="2"]').click()
        cy.get('#courseSemester').click()
        cy.get('[data-value="3"]').click()
        cy.get('#coursename').clear()
        cy.get('#coursename').type('automation name course')
        cy.get('#coursedescription').clear()
        cy.get('#coursedescription').type('automation description course')
        cy.get('#lecture').type(9)
        cy.get('#laboratory').clear()
        cy.get('#laboratory').type(4)
        cy.get('#addCourse').click()
        cy.wait(2000)
        cy.get('[data-testid="DeleteRoundedIcon"] > path').click()
        cy.get('#addDelete').click()
        cy.wait(2000)
        cy.get('#Curriculums').click()
        cy.get('[data-testid="MuiDataTableBodyCell-4-0"] > :nth-child(2) > .css-5ax1kt > .MuiButtonBase-root > [data-testid="DeleteRoundedIcon"]').click()
        cy.get('#addDelete').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click() //basck to dashboard
        // //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('User Testing', ()=>{
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/login').as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Users
        cy.get('.MuiTabs-flexContainer > :nth-child(4)').click()
        //edit user info
        cy.get('[data-testid="MuiDataTableBodyCell-7-1"] > :nth-child(2) > .css-z1ua6u > [aria-label="Edit User"]').click()
        cy.wait(1500)
        cy.get('#usereditfirstName').clear()
        cy.get('#usereditfirstName').type('fname updated')
        cy.get('#usereditmiddleName').clear()
        cy.get('#usereditmiddleName').type('midname updated')
        cy.get('#usereditlastName').clear()
        cy.get('#usereditlastName').type('lname updated')
        cy.get('#usereditdesignation').clear()
        cy.get('#usereditdesignation').type('user designation updated')
        cy.get('#editUser').click()
        // //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })

    it('Academic Calendar Testing.', ()=>{
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/login').as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(SchoolAdminName)
        cy.get("input[name='password']").type(SchoolAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Academic Calendar
        cy.get('#AcademicCalendar').click()
        cy.get('#addAcademic').click()
        cy.get('#StartofFirstSemester').click()
        cy.get('#cancelAcademic').click()
        cy.wait(1500)

        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
})
