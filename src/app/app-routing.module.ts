import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./routes/main/main.component";
import { HomeComponent } from "./routes/main/routes/home/home.component";
import { ArticleComponent } from "./routes/main/routes/article/article.component";

const routes: Routes = [
  { path: "", redirectTo: "/main/home", pathMatch: "full" },
  {
    path: "main",
    component: MainComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "article", component: ArticleComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
