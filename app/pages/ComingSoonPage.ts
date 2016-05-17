import {Component}   from '@angular/core';
import {ComingSoonComponent}  from '../components/comingsoon/ComingSoon';

@Component({
    selector: 'comingsoon-page',
    template: `
        <comingsoon></comingsoon>
   `,
    directives: [
        ComingSoonComponent
    ]
})

export class ComingSoonPage {}
