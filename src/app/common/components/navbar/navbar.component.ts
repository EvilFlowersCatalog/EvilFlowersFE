import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { LangDefinition, TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'ef-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    @ViewChild('profileMenuTrigger') profileMenuTrigger;
    languages: any[] = [];

    constructor(private translocoService: TranslocoService) {}

    ngOnInit(): void {
        this.languages = this.translocoService.getAvailableLangs();
    }

    logout() {
        console.log('logout');
    }

    changeLanguage(language: string) {
        console.log(language);
    }

    closeMe(menuTrigger: MatMenuTrigger) {
        menuTrigger.closeMenu();
    }
}
