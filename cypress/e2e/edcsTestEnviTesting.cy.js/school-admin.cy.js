
let baseUrl = 'https://brave-sea-07bed7310-160.centralus.3.azurestaticapps.net';
let CHEDNatAdminName = "ozone.labrada"
let CHEDNatAdminPass = "UTM7s2eo"
let CHEDNatAdminEmail = 'ozonelabrada@gmail.com'
let interceptLogUrl = 'https://dev01-edcs-web-appsvc.azurewebsites.net/login'
let loadAcademicCalendar = 'https://dev01-edcs-web-appsvc.azurewebsites.net/academicCalendar?regionId=6&pageSize=100&search=&direction=desc&orderBy=DateCreated'
let prName = '2023-001_FORMAT_PR_TEMPLATE_2023.xlsx'

describe('EDCS Testing Environment', ()=>{
    
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
        cy.get("input[name='username']").type(CHEDNatAdminName)
        cy.get("input[name='password']").type(CHEDNatAdminPass)
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
        cy.get("input[name='username']").type(CHEDNatAdminName)
        cy.get("input[name='password']").type(CHEDNatAdminPass)
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
        cy.get("input[name='username']").type(CHEDNatAdminName)
        cy.get("input[name='password']").type(CHEDNatAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //select Academic Calendar
        cy.get(':nth-child(3) > .css-1193emu > .MuiListItemButton-root').click()
        cy.scrollTo('bottom',{duration:1000})
        cy.scrollTo('top',{duration:500})
        cy.wait(2000)
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()// dashboard
        // //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('View Students', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDNatAdminName)
        cy.get("input[name='password']").type(CHEDNatAdminPass)
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
        cy.get("input[name='username']").type(CHEDNatAdminName)
        cy.get("input[name='password']").type(CHEDNatAdminPass)
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
    it.only('HEI Profile', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        let schoolnSearch = 'digong';
        cy.intercept('https://dev01-edcs-web-appsvc.azurewebsites.net/schools?pageSize=20&search='+schoolnSearch+'&page=1').as('loadSchool');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDNatAdminName)
        cy.get("input[name='password']").type(CHEDNatAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //HEI
        cy.get(':nth-child(2) > .css-1193emu > .MuiListItemButton-root').click()
        cy.get('#superadmindashboardschoolyear').click()
        cy.get('#superadmindashboardschoolyear').type('region v')
        cy.get("li[id='seregionselevtntting6'] div").click()
        cy.get('form > .MuiFormControl-root > .MuiInputBase-root').type(schoolnSearch) //search HEI
        cy.get('#hie-0 > .MuiListItemButton-root').click()
        cy.wait(1500)
        cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()
        cy.wait(1500)
        cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()
        cy.wait(1500)
        cy.get('.MuiTabs-flexContainer > :nth-child(4)').click()
        cy.wait(1500)
        cy.get('.MuiTabs-flexContainer > :nth-child(5)').click()
        //dashboard
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root').click()
        cy.wait(1500)
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
        cy.get("input[name='username']").type(CHEDNatAdminName)
        cy.get("input[name='password']").type(CHEDNatAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //Settings
        cy.get(':nth-child(6) > .css-1193emu > .MuiListItemButton-root').click() //select settings
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
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
    it('Security Testing', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDNatAdminName)
        cy.get("input[name='password']").type(CHEDNatAdminPass)
        cy.get("[type='submit']").click()
        cy.wait('@logData')
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //security
        cy.get('#Security').click()
        cy.get('#changePassword').click()
        cy.get('.MuiDialogContent-root > :nth-child(1) > .MuiInputBase-root > #email').clear()
        cy.get('.MuiDialogContent-root > :nth-child(1) > .MuiInputBase-root > #email').type(CHEDNatAdminEmail)
        cy.get('#oldPassword').clear()
        cy.get('#oldPassword').type(CHEDNatAdminPass)
        cy.get('#newPassword').clear()
        cy.get('#newPassword').type(CHEDNatAdminPass)
        cy.get('#confirmPassword').clear()
        cy.get('#confirmPassword').type(CHEDNatAdminPass)
        cy.get('.css-126xj0f > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click()
        cy.get(':nth-child(1) > .css-1193emu > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root').click()
        cy.wait(1500)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
        
    })
    it('User', ()=>{
        cy.intercept(interceptLogUrl).as('logData');
        //login
        cy.visit(baseUrl)
        cy.get("input[name='username']").type(CHEDNatAdminName)
        cy.get("input[name='password']").type(CHEDNatAdminPass)
        cy.get('.MuiButton-contained').click()
        cy.wait('@logData')
        //My profile
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-wwdrj6').click()
        //Users
        cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()
        //National
        cy.get('.tss-1fz5efq-MUIDataTableToolbar-left > div > #addUser').click()//click add user
        cy.get('#firstName').type('aaa'+randomString)
        cy.get('#middleName').type('aaa'+randomString)
        cy.get('#lastName').type('aaa'+randomString)
        cy.get(':nth-child(5) > .MuiInputBase-root > #email').type('aaa'+randomString+'@sample.com')
        cy.get('#designation').type('Tester '+randomString)
        cy.get('.MuiDialogActions-root > #addUser').click()
        // Regional 
        cy.get('.tss-1fz5efq-MUIDataTableToolbar-left > div > #addUser').click()//click add user
        cy.get('#radio-buttons-group > :nth-child(2) > .MuiTypography-root').click()//click regional button
        cy.get('#regionId').click()
        cy.get('[data-value="6"]').click()
        cy.get('#firstName').type('aaa'+randomString+'s')
        cy.get('#middleName').type('aaa'+randomString+'s')
        cy.get('#lastName').type('aaa'+randomString+'s')
        cy.get(':nth-child(6) > .MuiInputBase-root > #email').type('aaa'+randomString+'s@sample.com')
        cy.get('#designation').type('Tester '+randomString+'s'  )
        cy.get('.MuiDialogActions-root > #addUser').click()

        cy.wait(3000)
        // delete admin
        cy.get('#roleautocomplete').type('admin')
        cy.get("#settingroleAdmin").click()
        cy.get('[data-testid="MuiDataTableBodyCell-7-0"] > :nth-child(2) > .css-z1ua6u > .MuiIconButton-colorError > [data-testid="DeleteRoundedIcon"]').click()
        cy.get('#addDelete').click()
        cy.wait(1500)
        //delete user
        cy.get('#roleautocomplete').type('user')
        cy.get("#settingroleUser").click()
        cy.get('[data-testid="MuiDataTableBodyCell-7-0"] > :nth-child(2) > .css-z1ua6u > .MuiIconButton-colorError > [data-testid="DeleteRoundedIcon"] > path').click()
        cy.get('#addDelete').click()
        //view
        cy.scrollTo('bottom',{duration: 1000})
        cy.scrollTo('top',{duration: 500})
        cy.wait(2000)
        //Logout
        cy.get('[aria-label="My Account"]').click()
        cy.get('#primary-search-account-menu > .MuiPaper-root > .MuiList-root > .css-1fglqq7').click()
        cy.get('.MuiButton-outlined').click()
    })
})
