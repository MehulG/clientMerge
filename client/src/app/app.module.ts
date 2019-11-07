import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MarkdownModule } from 'ngx-markdown';
import { MatChipsModule } from '@angular/material/chips';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { EditorLayoutComponent } from './layouts/editor-layout/editor-layout.component';
import { ViewArticleComponent } from './components/view-article/view-article.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { GithubLinkFormComponent } from './components/github-link-form/github-link-form.component';
import { GithubContentComponent } from './components/github-content/github-content.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { CreateAssignmentComponent, DialogOverviewExampleDialog } from './components/create-assignment/create-assignment.component';
import { MatCardModule } from '@angular/material/card';
import { TreeModule } from 'angular-tree-component';
import { HomeComponent } from './components/home/home.component';
import { AttemptAssignmentComponent, DialogOverviewDialog } from './components/attempt-assignment/attempt-assignment.component';
import { UserDetailsComponent } from './components/user/user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CodemirrorModule } from 'ng2-codemirror';
import { AceModule } from 'ngx-ace-wrapper';
import { ACE_CONFIG } from 'ngx-ace-wrapper';
import { AceConfigInterface } from 'ngx-ace-wrapper';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {
};

@NgModule({
  declarations: [
    AppComponent,
    CreateArticleComponent,
    EditorLayoutComponent,
    ViewArticleComponent,
    GithubLinkFormComponent,
    GithubContentComponent,
    CodeEditorComponent,
    CreateAssignmentComponent,
    HomeComponent,
    DialogOverviewExampleDialog,
    DialogOverviewDialog,
    AttemptAssignmentComponent,
    UserDetailsComponent,
    EditUserComponent
  ],
  imports: [
    AceModule,
    CodemirrorModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule,
    HttpClientModule,
    MatInputModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    MatMenuModule,
    TreeModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [DialogOverviewExampleDialog, DialogOverviewDialog],

  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
