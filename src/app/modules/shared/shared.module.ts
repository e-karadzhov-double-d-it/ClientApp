import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { SideNavComponent } from "./components/layout/side-nav/side-nav.component";

@NgModule({
    declarations: [HeaderComponent, FooterComponent, SideNavComponent],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [HeaderComponent, FooterComponent, SideNavComponent],
})
export class SharedModule {}
