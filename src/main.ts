import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { myResumeModule } from './my-resume/myResume.module';


platformBrowserDynamic().bootstrapModule(myResumeModule)
  .catch(err => console.error(err));

  