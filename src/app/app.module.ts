import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpModalComponent } from './help-modal/help-modal.component';
import { ImageHeaderComponent } from './image-header/image-header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RequirementAnalysisComponent } from './requirement-analysis/requirement-analysis.component';
import { ApplicationQualityComponent } from './application-quality/application-quality.component';
import { EnvironmentSetupComponent } from './environment-setup/environment-setup.component';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BugEvaluationComponent } from './bug-evaluation/bug-evaluation.component';
import { SeverityService } from './severity.service';

@NgModule({
  declarations: [
    AppComponent,
    HelpModalComponent,
    ImageHeaderComponent,
    NavigationBarComponent,
    RequirementAnalysisComponent,
    ApplicationQualityComponent,
    EnvironmentSetupComponent,
    FooterComponent,
    BugEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
