import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from '../features/post-details/post-details.component';
import { PostCommentsComponent } from '../features/post-comments/post-comments.component';

const routes: Routes = [
  { path: '',   redirectTo: '/post-details', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'post-details', component: PostDetailsComponent },
  { path: 'comments/:id', component: PostCommentsComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
