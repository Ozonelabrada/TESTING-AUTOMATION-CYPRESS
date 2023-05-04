
// Username: sasa.sasa
// Password: @&z2TVus


let userToken = '';
// let baseUrl = 'https://brave-sea-07bed7310.3.azurestaticapps.net';
let baseUrl = 'https://brave-sea-07bed7310-160.centralus.3.azurestaticapps.net/';
let CHEDAdminName = "ozone.labrada"
let CHEDAdminPass = "UTM7s2eo"
let email = 'ozonelabrada@gmail.com'
let interceptLogUrl = 'https://dev01-edcs-web-appsvc.azurewebsites.net/login'
let loadAcademicCalendar = 'https://dev01-edcs-web-appsvc.azurewebsites.net/academicCalendar?regionId=6&pageSize=100&search=&direction=desc&orderBy=DateCreated'

describe('CHED ADMIN | EDCS DEV Environment!', ()=>{
    
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
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('Promotional Report and Student Evaluation', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        cy.get(':nth-child(5) > .css-1193emu > .MuiListItemButton-root').click()
        // cy.wait(5000)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('Academic Calendar', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        cy.intercept(loadAcademicCalendar).as('loadAcaCalendar');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //select Academic Calendar
        cy.get(':nth-child(3) > .css-1193emu > .MuiListItemButton-root').click()
        cy.get('#heiacademiccalendarselectRegionAutocomplete').click()
        cy.get('#settingregionselect5 > div').click()
        cy.wait(1500)
        cy.get('#heiacademiccalendarselectRegionAutocomplete').click()
        cy.get('#settingregionselect6 > div').click()
        cy.wait(1500)
        cy.get('#heiacademiccalendarselectAutocomplete').click()
        cy.get('#heiacademiccalendarselectAutocomplete').type('digong')
        cy.get('#heiacademiccalendarselectmonthAutocomplete').click()  
        //
        cy.get('#heiacademiccalendarselectmonthAutocomplete').click()
        //
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()// dashboard
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('View Students', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
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
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
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
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //HEI
        cy.get('[style="cursor: pointer; background-color: rgb(240, 195, 1); height: 33%; margin-bottom: 10px;"] > [style="cursor: pointer; padding: 30px; flex: 1 1 0%; display: flex; flex-direction: row; align-items: center; justify-content: space-between;"]').click()
        cy.get('form > .MuiFormControl-root > .MuiInputBase-root').type(schoolnSearch)//search HEI
        cy.wait('@loadSchool')
        cy.get('.css-1wg7hcp > :nth-child(1) > .MuiListItemButton-root').click()//click school    
        cy.get('.css-skb6f0 > .MuiBox-root > .MuiButtonBase-root').click()//add discipline
        cy.get('#displiplinecode').type(randomString+'-321-TEST')
        cy.get('#disciplinename').type(randomString+'-TEST')
        cy.get('#addDiscipline').click()
        cy.get('[data-testid="MuiDataTableBodyCell-1-2"]').click()
        cy.get('.css-o6ekor > .MuiBox-root > .MuiButtonBase-root').click()  //select program
        cy.get('#programName').type(randomString+'-PRO-NAME')
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click()
        cy.get('#searchLevel-option-3').click()
        cy.get('#searchMajor').click()
        cy.get('#searchMajor-option-7').click()
        cy.get('#addProgram').click()
        cy.get('[data-testid="MuiDataTableBodyCell-8-0"] > :nth-child(2) > .css-1yjo05o > .MuiButtonBase-root > [data-testid="DeleteRoundedIcon"] > path').click()//delete program
        cy.get('#addDelete').click()
        cy.wait(1500)
        cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
        cy.get('[data-testid="MuiDataTableBodyCell-6-2"] > :nth-child(2) > .css-1yjo05o > .MuiButtonBase-root > [data-testid="DeleteRoundedIcon"] > path').click()//delete discipline
        cy.get('#addDelete').click()
        cy.wait(1500)        
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()
        // Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    }) 
    it('Settings', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        let searchHEI = 'digo'
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/regions/select').as('loadRegion')
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //Settings
        cy.get(':nth-child(6) > .css-1193emu > .MuiListItemButton-root').click() //select settings
        cy.get('#settingdashboardschoolyear').click()
        cy.wait('@loadRegion')
        cy.get('#settingdashboardschoolyear').type('region V')
        cy.get("li[id='setting6'] div").click()
        cy.get('#settingschooldashboardschoolyear').click()
        cy.get('#settingschooldashboardschoolyear').type('digon')
        cy.get("div[role='presentation'] p:nth-child(1)").click()
        cy.get('.css-skb6f0 > .MuiBox-root > .MuiButtonBase-root').click()//select add discipline
        cy.get('#searchAsYouType').click()//
        cy.get('#searchAsYouType').type(searchHEI)
        cy.get('#settingschoolinstutional109 > div').click()
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
        cy.get('#Courses').click()
        cy.wait(1500)
        cy.get('#Curriculums').click()
        cy.wait(1500)
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()
        // //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    })
    it('Security Testing', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
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
        cy.get('#oldPassword').type(CHEDAdminPass)
        cy.get('#newPassword').clear()
        cy.get('#newPassword').type(CHEDAdminPass)
        cy.get('#confirmPassword').clear()
        cy.get('#confirmPassword').type(CHEDAdminPass)
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click()
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    })

    it('Users', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDAdminName)
        cy.get("input[name='password']").type(CHEDAdminPass)
        cy.get('.MuiButton-contained').click()
        cy.wait('@logData')
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Users
        cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()
        cy.get('.tss-1fz5efq-MUIDataTableToolbar-left > div > #addUser').click()//click add user
        cy.get('#regionId').type('region V')
        cy.get('[data-value="6"]').click()
        cy.get('#firstName').type('aaa'+randomString)
        cy.get('#middleName').type('newMname'+randomString)
        cy.get('#lastName').type('aaa'+randomString)
        cy.get(':nth-child(6) > .MuiInputBase-root > #email').type('aaa'+randomString+'@gmail.com')
        cy.get('#designation').type('testing ched admin')
        cy.get('.MuiDialogActions-root > #addUser').click()
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()
        //edit user info
        // cy.get('[data-testid="MuiDataTableBodyCell-7-0"] > :nth-child(2) > .css-z1ua6u > [aria-label="Edit User"] > [data-testid="EditRoundedIcon"] > path').click()
        // cy.wait(1500)
        // cy.get('#usereditfirstName').clear()
        // cy.get('#usereditfirstName').type('updated fname')
        // cy.get('#usereditmiddleName').clear()
        // cy.get('#usereditmiddleName').type('updated middlename')
        // cy.get('#usereditlastName').clear()
        // cy.get('#usereditlastName').type('lname updated')
        // cy.get('#usereditdesignation').clear()
        // cy.get('#usereditdesignation').type('updated designation')
        // cy.get('#editUser').click()
        // cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })

}) 
