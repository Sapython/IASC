import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { FooterComponent } from './footer/footer.component';
import { HealthProductPageComponent } from './health-product-page/health-product-page.component';
import { MiniFeatureCardComponent } from './mini-feature-card/mini-feature-card.component';
import { NutritionResearchesPageComponent } from './nutrition-researches-page/nutrition-researches-page.component';
import { WaterResearchesPageComponent } from './water-researches-page/water-researches-page.component';
import { ScientificAwarenessPageComponent } from './scientific-awareness-page/scientific-awareness-page.component';
import { HealthResearchesPageComponent } from './health-researches-page/health-researches-page.component';
import { ActivitiesCardComponent } from './activities-card/activities-card.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JoinUsFormComponent } from './join-us-form/join-us-form.component';
import { FellowshipFormPageComponent } from './fellowship-form-page/fellowship-form-page.component';
import { SymposiumAndActivitiesPageComponent } from './symposium-and-activities-page/symposium-and-activities-page.component';
import { GCPageComponent } from './g-c-page/g-c-page.component';
import { GCCardComponentComponent } from './g-c-card-component/g-c-card-component.component';
import { ResearchPageComponent } from './research-page/research-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { CollaborationsPageComponent } from './collaborations-page/collaborations-page.component';
import { AskAQuestionPageComponent } from './ask-a-question-page/ask-a-question-page.component'
import { PracticingCenterComponent } from './practicing-center/practicing-center.component';
import { NutritionPageComponent } from './nutrition-page/nutrition-page.component';
import { YogaPageComponent } from './yoga-page/yoga-page.component';
import { MediatationPageComponent } from './mediatation-page/mediatation-page.component';
import { HealthPageComponent } from './health-page/health-page.component';
import { IconCardComponent } from './icon-card/icon-card.component';
import { ResearchProjectPostCardComponent } from './research-project-post-card/research-project-post-card.component';
import { SpacerComponent } from './spacer/spacer.component';
import { ResearchAComponent } from './research/research-a/research-a.component';
import { ResearchBComponent } from './research/research-b/research-b.component';
import { AppCarouselComponent } from './app-carousel/app-carousel.component';
import { AuthorCardComponent } from './author-card/author-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OurBranchesComponent } from './our-branches/our-branches.component';
import { SymposiumDivCardComponent } from './symposium-div-card/symposium-div-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FeatureCardComponent,
    FooterComponent,  
    HealthProductPageComponent,
    MiniFeatureCardComponent,
    NutritionResearchesPageComponent,
    WaterResearchesPageComponent,
    ScientificAwarenessPageComponent,
    HealthResearchesPageComponent,
    ActivitiesCardComponent,
    NotificationsComponent,
    GalleryCardComponent,
    GalleryComponent,
    JoinUsFormComponent,
    FellowshipFormPageComponent,
    SymposiumAndActivitiesPageComponent,
    GCPageComponent,
    GCCardComponentComponent,
    ResearchPageComponent,
    AboutUsPageComponent,
    CollaborationsPageComponent,
    AskAQuestionPageComponent,
    PracticingCenterComponent,
    NutritionPageComponent,
    YogaPageComponent,
    MediatationPageComponent,
    HealthPageComponent,
    CollaborationsPageComponent,
    IconCardComponent,
    ResearchProjectPostCardComponent,
    SpacerComponent,
    OurBranchesComponent,
    ResearchAComponent,
    ResearchBComponent,
    AppCarouselComponent,
    AuthorCardComponent,
    SymposiumDivCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatStepperModule,
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
