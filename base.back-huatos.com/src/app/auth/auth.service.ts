import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { User } from './user.interface';
@Injectable()
export class AuthService {
    public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter();
    public authenticated = false;
    constructor( private router: Router ) {
        console.log(sessionStorage.getItem('authenticated'));
        if (sessionStorage.getItem('authenticated') === 'true') {
            this.authenticated = true;
        }
    }
    login(user: User) {
        if ( user.userName === 'huato' && user.passWord === '123456' ) {
            this.authenticated = true;
            sessionStorage.setItem('authenticated', 'true');
            this.showNavBar(true);
            this.router.navigate(['/main']);
        } else {
            this.authenticated = false;
        }
    }
    logout() {
        this.authenticated = false;
        this.showNavBar(false);
        this.router.navigate(['/login']);
    }
    isAuthenticated() {
        return this.authenticated;
    }
    private showNavBar(ifShow: boolean) {
        this.showNavBarEmitter.emit(ifShow);
    }
}

