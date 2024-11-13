export class User{
    constructor(username, password, isLoggedIn = false) {
        this.username = username.username;
        this.password = password;
        this.isLoggedIn = isLoggedIn;
    }
}