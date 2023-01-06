import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    title = "ClientApp";

    navigation: { name: string; route: string }[] = [];

    ngOnInit(): void {
        this.navigation = [
            { name: "Home", route: "/" },
            { name: "About", route: "/about" },
            { name: "News", route: "/news" },
            { name: "Ranking", route: "/rankings" },
            { name: "Video", route: "/videos" },
            { name: "Program", route: "/programs" },
            { name: "Stars", route: "/stars" },
        ];
    }
}
