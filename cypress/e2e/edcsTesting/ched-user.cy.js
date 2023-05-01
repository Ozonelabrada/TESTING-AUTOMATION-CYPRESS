
// Username: sasa.sasa
// Password: @&z2TVus


let userToken = '';
let baseUrl = 'https://brave-sea-07bed7310.3.azurestaticapps.net';
let ChedUserName = "ozone.Rpayb"
let ChedUserPass = "^pJ3y@Si"
let email = 'shoonixspider@gmail.com'

describe('CHED USER | EDCS Testing Environment!', ()=>{
    it('Login Dashboard', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedUserName)
        cy.get("input[name='password']").type(ChedUserPass)
        cy.get("[type='submit']").click().should(()=>{

        })
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('Upload Promotional Report and Student Evaluation', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedUserName)
        cy.get("input[name='password']").type(ChedUserPass)
        cy.get("[type='submit']").click()
        cy.get(':nth-child(5) > .css-1193emu > .MuiListItemButton-root').click()
        cy.wait(5000)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('View Students', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedUserName)
        cy.get("input[name='password']").type(ChedUserPass)
        cy.get("[type='submit']").click()
        //Students
        cy.get("[aria-label='Students']").click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .css-130bhjr').click()
        cy.get('#simple-tab-1').click()
        cy.scrollTo('bottom', {duration: 2000})
        cy.get('#simple-tab-0').click()
        cy.get('.MuiBreadcrumbs-ol > :nth-child(1) > .MuiTypography-root').click()
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
        cy.get("input[name='username']").type(ChedUserName)
        cy.get("input[name='password']").type(ChedUserPass)
        cy.get("[type='submit']").click()
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //update user info
        cy.get('#editButton').click()
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogContent-root').clear()
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogContent-root').type('ched fname updated')
        cy.get('#middleName').clear()
        cy.get('#middleName').type('updated Mname')
        cy.get('#lastName').clear()
        cy.get('#lastName').type('lastname updated')
        cy.get('#designation').clear()
        cy.get('#designation').type('updated designation')
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-contained').click()
        cy.wait(3000)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })

    it.only('Institutional Profile', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedUserName)
        cy.get("input[name='password']").type(ChedUserPass)
        cy.get("[type='submit']").click()
        // cy.wait(2000)
        //HEI
        cy.get('[style="cursor: pointer; background-color: rgb(240, 195, 1); height: 33%; margin-bottom: 10px;"] > [style="cursor: pointer; padding: 30px; flex: 1 1 0%; display: flex; flex-direction: row; align-items: center; justify-content: space-between;"]').click()
        cy.get('form > .MuiFormControl-root > .MuiInputBase-root').type('di')//search HEI
        // cy.wait(3000)
        cy.get('.css-1wg7hcp > :nth-child(1) > .MuiListItemButton-root').click()//click school    
        cy.get('.css-skb6f0 > .MuiBox-root > .MuiButtonBase-root').click()//add discipline
        cy.get('#cancelDiscipline').click()
        // cy.wait(1000)
        cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()//select program
        cy.get('.css-o6ekor > .MuiBox-root > .MuiButtonBase-root').click()
        //search dicipline
        cy.get('#searchDiscipline').click()
        cy.wait(2000)
        cy.get('#searchDiscipline-option-0').click()
        //search level
        cy.get('#searchLevel').click()
        cy.wait(2000)
        cy.get('#searchLevel-option-2').click()
        //search major
        cy.get('#searchMajor').click()
        cy.wait(2000)
        cy.get('#searchMajor-option-5').click()
        cy.get('#cancelProgram').click()
        // cy.scrollTo('bottom',{duration: 500})
        // cy.wait(1000)
        cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()//select curriculum
        cy.wait(2000)
        cy.get('.MuiTabs-flexContainer > :nth-child(4)').click()//select courses
        cy.wait(2000)
        cy.get('.MuiTabs-flexContainer > :nth-child(5)').click()//select downloads
        cy.scrollTo('bottom',{duration: 1000})
        cy.scrollTo('top',{duration: 500})
        // cy.wait(1000)
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()//back to dashboard
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    }) 

    it('Security Testing', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedUserName)
        cy.get("input[name='password']").type(ChedUserPass)
        cy.get("[type='submit']").click()
        //My profile
        // cy.wait()
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //security
        cy.get('#Security').click()
        cy.get('#changePassword').click()
        cy.get('.MuiDialogContent-root > :nth-child(1) > .MuiInputBase-root > #email').clear()
        cy.get('.MuiDialogContent-root > :nth-child(1) > .MuiInputBase-root > #email').type(email)
        cy.get('#oldPassword').clear()
        cy.get('#oldPassword').type(ChedUserPass)
        cy.get('#newPassword').clear()
        cy.get('#newPassword').type(ChedUserPass)
        cy.get('#confirmPassword').clear()
        cy.get('#confirmPassword').type(ChedUserPass)
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click()
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    })

    it('User Testing', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedUserName)
        cy.get("input[name='password']").type(ChedUserPass)
        cy.get("[type='submit']").should().click()
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Users
        cy.get('.MuiTabs-flexContainer > :nth-child(4)').click()
        //edit user info
        cy.get('[data-testid="MuiDataTableBodyCell-7-0"] > :nth-child(2) > .css-z1ua6u > [aria-label="Edit User"] > [data-testid="EditRoundedIcon"] > path').click()
        cy.get('.MuiButton-contained > .MuiBox-root').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })

    it('Academic Calendar Testing.', ()=>{
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedUserName)
        cy.get("input[name='password']").type(ChedUserPass)
        cy.get("[type='submit']").click()
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Academic Calendar
        cy.get('#AcademicCalendar').click()
        cy.get('#addAcademic').click()
        cy.get('#StartofFirstSemester').click()
        
    // Click on the input field to open the date picker
    // cy.get('#StartofFirstSemester').click();

    // Select a date from the date picker
    // cy.get('.datepicker-day').contains('14').click();

    // Assert that the selected date is displayed in the input field
    // cy.get('.datepicker-input').should('have.value', '04/14/2023');
        cy.get('#cancelAcademic').click()
        cy.wait(1500)

        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
})
