import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-side-nav",
    templateUrl: "./side-nav.component.html",
    styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent {
    @Output() sidenavClose = new EventEmitter();
    @Input() navigation: { name: string; route: string }[] = [];

    constructor() {}

    onSidenavClose() {
        this.sidenavClose.emit();
    }
}
