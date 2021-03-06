import { Component } from '@angular/core';
import { Page } from 'ui/page';
import { device } from 'platform';
// import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from './core/services';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {

    constructor(
        private page: Page,
        // private translateService: TranslateService,
        _fontIconService: TNSFontIconService
    ) {
        console.log('app component constructor');
        // page.actionBarHidden = true;
        page.backgroundSpanUnderStatusBar = true;

        /*
        translateService.setDefaultLang('en');
        translateService.use(device.language);
        */
    }
}
