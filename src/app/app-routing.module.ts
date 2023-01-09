import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("./modules/home/home.module").then((m) => m.HomeModule),
        pathMatch: "full",
    },
    {
        path: "about",
        loadChildren: () =>
            import("./modules/about/about.module").then((m) => m.AboutModule),
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
