
// Username: sasa.sasa
// Password: @&z2TVus


let userToken = '';
// let baseUrl = 'https://brave-sea-07bed7310.3.azurestaticapps.net';
let baseUrl = 'https://brave-sea-07bed7310-160.centralus.3.azurestaticapps.net/';
let ChedRegUserName = "regUser.RegLast"
let ChedRegUserPass = "seQBsFeH"
let email = 'sohab37984@pixiil.com'
let interceptLogUrl = 'https://dev01-edcs-web-appsvc.azurewebsites.net/login'
let loadAcademicCalendar = 'https://dev01-edcs-web-appsvc.azurewebsites.net/academicCalendar?regionId=6&pageSize=100&search=&direction=desc&orderBy=DateCreated'

describe('Regional USER | EDCS Dev Environment!', ()=>{
    
    function generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
      let randomString = generateRandomString(5);

    it('Login Dashboard', ()=>{
        //login
        cy.intercept(interceptLogUrl).as('logData');
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedRegUserName)
        cy.get("input[name='password']").type(ChedRegUserPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    //well check for delete and lock PR 
    it('Promotional Report and Student Evaluation', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedRegUserName)
        cy.get("input[name='password']").type(ChedRegUserPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        cy.get(':nth-child(5) > .css-1193emu > .MuiListItemButton-root').click()
        // cy.wait(5000)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('View Academic Calendar', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        cy.intercept(loadAcademicCalendar).as('loadAcaCalendar');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedRegUserName)
        cy.get("input[name='password']").type(ChedRegUserPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        cy.get(':nth-child(3) > .css-1193emu > .MuiListItemButton-root').click()
        cy.get('.MuiFormControl-root > .MuiInputBase-root').click()
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > main:nth-child(3) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").click()
        cy.wait('@loadAcaCalendar')
        cy.get('#heiacademiccalendarselectAutocomplete-112 > div').click()
        // cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()//dashboard
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('View Students', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedRegUserName)
        cy.get("input[name='password']").type(ChedRegUserPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //Students
        cy.get("[aria-label='Students']").click()
        cy.scrollTo('bottom', {duration: 2000})
        cy.scrollTo('top', {duration: 500})
        //back to dashboard
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('Update personal Info', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedRegUserName)
        cy.get("input[name='password']").type(ChedRegUserPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
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
    it('HEI Profile', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        let schoolnSearch = 'di';
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/schools?pageSize=20&search='+schoolnSearch+'&page=1').as('loadSchool');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedRegUserName)
        cy.get("input[name='password']").type(ChedRegUserPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //HEI
        cy.get('[style="cursor: pointer; background-color: rgb(240, 195, 1); height: 33%; margin-bottom: 10px;"] > [style="cursor: pointer; padding: 30px; flex: 1 1 0%; display: flex; flex-direction: row; align-items: center; justify-content: space-between;"]').click()
        cy.get('form > .MuiFormControl-root > .MuiInputBase-root').type(schoolnSearch)//search HEI
        cy.wait('@loadSchool')
        cy.get('.css-1wg7hcp > :nth-child(1) > .MuiListItemButton-root').click()//click school    
        cy.get('.css-skb6f0 > .MuiBox-root > .MuiButtonBase-root').click()//add discipline
        cy.get('#displiplinecode').type('aaaa'+randomString+'-321-TEST')
        cy.get('#disciplinename').type('aaaa'+randomString+'-TEST')
        cy.get('#addDiscipline').click()
        cy.get('[data-testid="MuiDataTableBodyCell-1-0"]').click()
        cy.get('.css-o6ekor > .MuiBox-root > .MuiButtonBase-root').click()  //select program
        cy.get('#programName').type('aaaa'+randomString+'-PRO-NAME')
        cy.get('#searchLevel').click()
        cy.get('#searchLevel-option-3').click()
        cy.get('#searchMajor').click()
        cy.get('#searchMajor-option-7').click()
        cy.get('#addProgram').click()
        cy.get('[data-testid="MuiDataTableBodyCell-8-0"] > :nth-child(2) > .css-1yjo05o > .MuiButtonBase-root > [data-testid="DeleteRoundedIcon"] > path').click()//delete program
        cy.get('#addDelete').click()
        cy.wait(1500)
        cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
        cy.wait(2000)    
        cy.get('[data-testid="MuiDataTableBodyCell-6-0"] > :nth-child(2) > .css-1yjo05o > .MuiButtonBase-root > [data-testid="DeleteRoundedIcon"] > path').click()
        cy.get('#addDelete').click()
        cy.wait(1500)        
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()
        cy.wait(1500)        
        // // Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    }) 
    it('Settings', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        let searchHEI = 'inst'
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/schools/'+searchHEI+'?regionId=6').as('logHEI')
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedRegUserName)
        cy.get("input[name='password']").type(ChedRegUserPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //Settings
        cy.get(':nth-child(6) > .css-1193emu > .MuiListItemButton-root').click() //select settings
        cy.get("div[class='MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6'] input[role='combobox']").click()
        cy.get("div[class='MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6'] input[role='combobox']").type('inst')
        cy.get("div[role='presentation'] p:nth-child(1)").click() //select school
        cy.get('.css-skb6f0 > .MuiBox-root > .MuiButtonBase-root').click()
        cy.get('#searchAsYouType').type(searchHEI)
        cy.wait('@logHEI')
        cy.get('#settingschoolinstutional112 > div').click()
        cy.get('#displiplinecode').type('aaa'+randomString+'-TEST-001')
        cy.get('#disciplinename').type('aaa'+randomString+'-NAME-001')
        cy.get('#addDiscipline').click()
        cy.get('[data-testid="MuiDataTableBodyCell-1-0"]').click()
        cy.get('.css-o6ekor > .MuiBox-root > .MuiButtonBase-root').click()
        cy.get('#programName').type('aaa'+randomString+'-PRO-NAME-001')
        cy.get('#searchLevel').click()
        cy.get('#searchLevel-option-2').click()
        cy.get('#searchMajor').click()
        cy.get('#searchMajor-option-6').click()
        cy.get('#addProgram').click()
        cy.wait(2000)
        cy.get('[data-testid="MuiDataTableBodyCell-8-0"] > :nth-child(2) > .css-1yjo05o > .MuiButtonBase-root').click()
        cy.wait(2000)
        cy.get('#addDelete').click()
        cy.get('#Disciplines').click()
        cy.wait(2000)
        cy.get('[data-testid="MuiDataTableBodyCell-6-0"] > :nth-child(2) > .css-1yjo05o > .MuiButtonBase-root > [data-testid="DeleteRoundedIcon"] > path').click()
        cy.get('#addDelete').click()
        cy.wait(1500)
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    })
    it('Security Testing', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedRegUserName)
        cy.get("input[name='password']").type(ChedRegUserPass)
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
        cy.get('#oldPassword').type(ChedRegUserPass)
        cy.get('#newPassword').clear()
        cy.get('#newPassword').type(ChedRegUserPass)
        cy.get('#confirmPassword').clear()
        cy.get('#confirmPassword').type(ChedRegUserPass)
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click()
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    })
    it('User Testing', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(ChedRegUserName)
        cy.get("input[name='password']").type(ChedRegUserPass)
        cy.get('.MuiButton-contained').click()
        cy.wait('@logData')
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Users
        cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()
        cy.get('.tss-1fz5efq-MUIDataTableToolbar-left > div > #addUser').click()//click add user
        cy.get('#searchAsYouType').type('dig')
        cy.get('#settingschoolinstutional109 > div').click()
        cy.get('#firstName').type('aaa'+randomString)
        cy.get('#middleName').type('aaa'+randomString)
        cy.get('#lastName').type('aaa'+randomString)
        cy.get(':nth-child(7) > .MuiInputBase-root > #email').type('aaa'+randomString+'@sample.com')
        cy.get('#designation').type('Tester '+randomString)
        cy.get('.MuiDialogActions-root > #addUser').click()
        
        //edit user info
        cy.get('[data-testid="MuiDataTableBodyCell-7-0"] > :nth-child(2) > .css-z1ua6u > [aria-label="Edit User"] > [data-testid="EditRoundedIcon"] > path').click()
        cy.wait(1500)
        cy.get('#usereditfirstName').clear()
        cy.get('#usereditfirstName').type('updated fname')
        cy.get('#usereditmiddleName').clear()
        cy.get('#usereditmiddleName').type('updated middlename')
        cy.get('#usereditlastName').clear()
        cy.get('#usereditlastName').type('lname updated')
        cy.get('#usereditdesignation').clear()
        cy.get('#usereditdesignation').type('updated designation')
        cy.get('#editUser').click()
        cy.wait(3000)
        cy.get('[data-testid="MuiDataTableBodyCell-7-0"] > :nth-child(2) > .css-z1ua6u > .MuiIconButton-colorWarning > [data-testid="BlockRoundedIcon"] > path').click()
        cy.wait(3000)
        // delete user
        cy.get('[data-testid="MuiDataTableBodyCell-7-0"] > :nth-child(2) > .css-z1ua6u > .MuiIconButton-colorError > [data-testid="DeleteRoundedIcon"] > path').click()
        cy.get('#addDelete').click()
        cy.wait(1500)
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })

}) 
