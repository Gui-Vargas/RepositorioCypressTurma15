// Elementos De tela 
const urlBase = 'https://www.advantageonlineshopping.com/#/'
const btnLogin = '#hrefUserIcon'
const cpUser = '[a-hint="Username"] > .inputContainer > .ng-pristine'
const cpSenha = '[a-hint="Password"] > .inputContainer > .ng-pristine'
const btnLogar = '#sign_in_btn'
const msgErro = '#signInResultMessage'
const btnConta = '#menuUserLink'
const btnSuaConta = '#loginMiniTitle > [translate="My_account"]'
const btnCriarNovaconta = '.create-new-account'
const cpUserName = ':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine'
const cpEmail = '[sec-name="userEmail"] > .inputContainer > .ng-pristine'
const cpSenhaCad = ':nth-child(3) > [a-hint="Password"] > .inputContainer > label'
const cpConfSenha = '[a-hint="Confirm password"] > .inputContainer > label'
const cpFirstName = '[sec-name="userFirstName"] > .inputContainer > .ng-pristine'
const cpLastName = '[sec-name="userLastName"] > .inputContainer > .ng-pristine'
const phoneNumber = ':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine'
const btnCheckBox = '[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine'
const btnRegistrar = '#register_btn'
const btnDeletarConta = '.deleteMainBtnContainer'
const btnConfDeletarConta = '.deleteRed'
//Massas de teste
const userInvalido = 'testes'
const senhaInvalida = '742384238'
const usuarioValido = 'dadasd'
const senhaValida = 'Fc230978@'
const userCadastro = 'gs777dttdy'
const emailCadastro = 'test45ssssse@teste.com'
const senhaCad = 'Fc123456789'
const firstName = 'GuilhermeeeeLuiz'
const lastName = 'Vargas'
const celular = '16541651444'
const deletarUsuarioCriado = 'gs777dttdy'
const deletarSenhaCriado = 'gs777dttdy'
describe('Validar Fluxo Site advantage', () => {

    it('Acessando site', () => {
        cy.visit(urlBase)
    })

    it('Validando login com dados invalidos', () => {
        cy.visit(urlBase)
        cy.get(btnLogin).click()
        cy.get(cpUser).type(userInvalido)
        cy.get(cpSenha).type(senhaInvalida)
        cy.get(btnLogar).click()
        cy.get(msgErro).should('be.visible')
    })

    it('Validando login com dados validos', () => {
        cy.visit(urlBase)
        cy.get(btnLogin).click()
        cy.get(cpUser).type(usuarioValido)
        cy.get(cpSenha).type(senhaValida)
        cy.get(btnLogar).click()
        cy.get(btnConta).click()
        cy.get(btnSuaConta).should('be.visible')
    })

    it('validar fluxo de nova conta e deletar conta', () => {
        cy.visit(urlBase)
        cy.get(btnLogin).click()
        cy.get(btnCriarNovaconta).click()
        cy.get(cpUserName).type(userCadastro)
        cy.get(cpEmail).type(emailCadastro)
        cy.get(cpSenhaCad).type(senhaCad)
        cy.get(cpConfSenha).type(senhaCad)
        cy.get(cpFirstName).type(firstName)
        cy.get(cpLastName).type(lastName)
        cy.get(phoneNumber).type(celular)
        cy.get(btnCheckBox).check()
        cy.get(btnRegistrar).click()
        cy.wait(3000)
        cy.get(btnConta).click()
        cy.get(btnSuaConta).click()
        cy.get(btnDeletarConta).click()
        cy.get(btnConfDeletarConta).click()
        cy.wait(9000)
        cy.get(btnLogin).click()
        cy.get(cpUser).type(deletarUsuarioCriado)
        cy.get(cpSenha).type(deletarSenhaCriado)
        cy.get(btnLogar).click()
        cy.get(msgErro).should('be.visible')
    })
});