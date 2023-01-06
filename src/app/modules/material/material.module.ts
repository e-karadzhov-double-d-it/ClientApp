import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

import { MatSidenavModule } from "@angular/material/sidenav";

const MaterialModules = [MatSidenavModule, MatListModule, MatIconModule];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...MaterialModules],
    exports: MaterialModules,
})
export class MaterialModule {}
