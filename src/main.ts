import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    provideAuth0({
      domain: 'dev-e40k57u4v2w1zzfi.us.auth0.com',
      clientId: 'wLi0gwWmajelmNiFECWlEbdVuQ3iJOSA',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
})
  .catch(err => console.error(err));
