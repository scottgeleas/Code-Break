import decode from 'jwt-decode';

class AuthService {
    setStorageToken(token) {
        localStorage.setItem('token', token);
    }

    getStorageToken() {
        return localStorage.getItem('token');
    }

    removeStorageToken() {
        localStorage.removeItem('token');
    }

    login(token) {
        this.setStorageToken(token);
        window.location.assign('/dashboard');
    }

    logout() {
        this.removeStorageToken();
        window.location.assign('/');
    }

    isTokenExpired(token) {
        try {
            const decodedToken = decode(token);

            if (decodedToken.exp < Date.now() / 1000) {
                this.removeStorageToken();

                return true;
            }

            return false;
        } catch (err) {
            return false;
        }
    }

    isLoggedIn() {
        const token = this.getStorageToken();

        return token && !this.isTokenExpired(token) ? true : false;
    }

    getProfile() {
        return decode(this.getStorageToken());
    }
}

export default new AuthService();
