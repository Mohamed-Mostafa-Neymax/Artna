import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports: [

    ],
    exports: [
        MatIconModule,
        MatTabsModule,
        MatSidenavModule
    ]
})
export class MaterialModule {}