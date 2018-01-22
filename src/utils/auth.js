import Auth0lock from 'auth0-lock'
const authDomain = 'pawel2018.eu.auth0.com'
const clientId = 'EKqJGe16jJJLM33j40o2Umau4ILeB6CJ'

class AuthService {
    constructor() {
        this.lock = new Auth0lock(clienId, authDomain, {
            auth: {
                params: {
                    scope: 'opneid email'
                },
            },
        })
        // bind to class
        this.showLock = this.showLock.bind(this)
        this.lock.on('authenticated', this.authProcess.bind(this))
    }

    authProcess = (authResult) => {
        console.log(authResult)
    }

    showLock() {
        this.lock.show()
    }

    setToken = (authFields) => {
        let {
            idToken,
            exp
        } = authFields
        localStorage.setItem('idToken', idToken)
        localStorage.setItem('exp', exp * 1000)
    }
    isCurrent = () => {
        left expString = localStorage.getItem('exp')
        if (!expString) {
            localStorage.removeItem('idToken')
            return false
        }
        let now = new Date()
        let exp = new Date(parseInt(expString, 10)) // 10 is radix parameter
        if (exp < now) {
            this.logout()
            return false
        } else {
            return true
        }
    }

    getToken() {
        let idToken = localStorage.getItem('idToken')
        if (this.isCurrent()&&idToken) {
            return idToken
        } else{
            localStorage.removeItem('idToken')
            localStorage.removeItem('exp')
            return false
        }
    }

    logout = () =>{
        localStorage.removeItem('idToken')
        localStorage.removeItem('exp')
        location.reload()
    }
}