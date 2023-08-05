// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter }  from "@angular/router";
import routeConfig from "./app/routes";
import { MainComponent } from "./app/components/main/main.component";
import { provideHttpClient} from '@angular/common/http';

bootstrapApplication(MainComponent, {
  providers:[provideRouter(routeConfig), provideHttpClient()],
});
