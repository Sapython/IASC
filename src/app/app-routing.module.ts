import { HomePageComponent } from './home-page/home-page.component';
import { SymposiumAndActivitiesPageComponent } from './symposium-and-activities-page/symposium-and-activities-page.component';
import { FellowshipFormPageComponent } from './fellowship-form-page/fellowship-form-page.component';
import { HealthProductPageComponent } from './health-product-page/health-product-page.component';
import { NutritionResearchesPageComponent } from './nutrition-researches-page/nutrition-researches-page.component'
import { WaterResearchesPageComponent } from './water-researches-page/water-researches-page.component'
import { ScientificAwarenessPageComponent } from './scientific-awareness-page/scientific-awareness-page.component'
import { HealthResearchesPageComponent } from './health-researches-page/health-researches-page.component'
import { ResearchPageComponent } from './research-page/research-page.component'
import { GalleryComponent } from './gallery/gallery.component';
import { GCPageComponent } from './g-c-page/g-c-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component'
import { PracticingCenterComponent } from './practicing-center/practicing-center.component'
import { NutritionPageComponent } from './nutrition-page/nutrition-page.component'
import { YogaPageComponent } from './yoga-page/yoga-page.component';
import { MediatationPageComponent } from './mediatation-page/mediatation-page.component';
import { HealthPageComponent } from './health-page/health-page.component'
import { CollaborationsPageComponent } from './collaborations-page/collaborations-page.component'
import { AskAQuestionPageComponent } from './ask-a-question-page/ask-a-question-page.component'
import { ResearchAComponent } from './research/research-a/research-a.component'
import { ResearchBComponent } from './research/research-b/research-b.component'

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'health-product', component:HealthProductPageComponent},
  {path:'practicing-center', component:PracticingCenterComponent},
  {path:'yoga-page', component:YogaPageComponent},
  {path:'meditation-page', component:MediatationPageComponent},
  {path:'health-page', component:HealthPageComponent},
  {path:'nutrition-page', component:NutritionPageComponent},
  {path:'symposium-and-activities', component:SymposiumAndActivitiesPageComponent},
  {path:'fellowship-form',component: FellowshipFormPageComponent},
  {path:'nutrition-researches', component:NutritionResearchesPageComponent},
  {path:'water-researches', component:WaterResearchesPageComponent},
  {path:'scientific-awareness', component:ScientificAwarenessPageComponent},
  {path:'health-researches', component:HealthResearchesPageComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'research', component:ResearchPageComponent},
  {path:'gcpage', component:GCPageComponent},
  {path:'about-us', component:AboutUsPageComponent},
  {path:'collaboration',component:CollaborationsPageComponent},
  {path:'ask-a-question', component:AskAQuestionPageComponent},
  
  {path:'research/study-of-the-status-of-health-of-the-kols-of-shankargarh-area-allahabad', component:ResearchAComponent},
  {path:'research/study-of-some-of-the-medicinal-plants-used-by-the-kols-for-the-treatment-of-diabetes', component:ResearchBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
