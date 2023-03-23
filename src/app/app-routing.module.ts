import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'lecturers',
    loadChildren: () => import('./lecturers/lecturers.module').then( m => m.LecturersPageModule)
  },
  {
    path: 'Siti Faizah Binti Miserom',
    loadChildren: () => import('./lecturer1/lecturer1.module').then( m => m.Lecturer1PageModule)
  },
  {
    path: 'Shuhadah Binti Othman',
    loadChildren: () => import('./lecturer2/lecturer2.module').then( m => m.Lecturer2PageModule)
  },
  {
    path: 'Nor Azura Binti Salleh @ Omar',
    loadChildren: () => import('./lecturer3/lecturer3.module').then( m => m.Lecturer3PageModule)
  },
  {
    path: 'lounge',
    loadChildren: () => import('./lounge/lounge.module').then( m => m.LoungePageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('./timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'editnotes/:id',
    loadChildren: () => import('./editnotes/editnotes.module').then( m => m.EditnotesPageModule)
  },
  {
    path: 'createnotes',
    loadChildren: () => import('./createnotes/createnotes.module').then( m => m.CreatenotesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
