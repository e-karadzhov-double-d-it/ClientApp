import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    @Output() public sidenavToggle = new EventEmitter();
    @Output() public sidenavClose = new EventEmitter();

    @Input() navigation: {
        name: string;
        route: string;
    }[] = [];

    constructor() {}

    onToggleSidenav() {
        this.sidenavToggle.emit();
    }

    onCloseSidenav() {
        this.sidenavClose.emit();
    }
}
