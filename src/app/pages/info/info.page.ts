import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-info',
    templateUrl: './info.page.html',
    styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
    public gender: string = '';

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    async onSubmit(): Promise<void> {
        await this.router.navigate(['/home']);
    }

    genderChange() {
        console.log(this.gender)
    }
}
