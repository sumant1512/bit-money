import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./SHARED/header/header.component";
import { AboutComponent } from "./PAGES/about/about.component";
import { FeaturesComponent } from "./PAGES/features/features.component";
import { ProjectComponent } from "./PAGES/project/project.component";
import { StepsComponent } from "./PAGES/steps/steps.component";
import { LoginComponent } from "./FORMS/login/login.component";
import { HomeComponent } from "./PAGES/+home/home/home.component";
import { CurrenciesComponent } from "./PAGES/+home/currencies/currencies.component";
import { TokensComponent } from "./PAGES/+tokens/tokens/tokens.component";
import { NewsComponent } from "./PAGES/news/news.component";
import { DarkBottomSvgComponent } from "./SHARED/dark-bottom-svg/dark-bottom-svg.component";
import { LightBottomSvgComponent } from "./SHARED/light-bottom-svg/light-bottom-svg.component";
import { TeamComponent } from "./PAGES/+tokens/team/team.component";
import { AdvisorsComponent } from "./PAGES/+tokens/advisors/advisors.component";
import { ContactUsComponent } from "./FORMS/contact-us/contact-us.component";
import { DoubtsComponent } from "./PAGES/doubts/doubts.component";
import { PressComponent } from "./PAGES/press/press.component";
import { SubscribeComponent } from "./PAGES/subscribe/subscribe.component";
import { FooterComponent } from "./SHARED/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FeaturesComponent,
    ProjectComponent,
    StepsComponent,
    LoginComponent,
    HomeComponent,
    CurrenciesComponent,
    TokensComponent,
    NewsComponent,
    DarkBottomSvgComponent,
    LightBottomSvgComponent,
    TeamComponent,
    AdvisorsComponent,
    ContactUsComponent,
    DoubtsComponent,
    PressComponent,
    SubscribeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
