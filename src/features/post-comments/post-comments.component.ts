import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { PostDetailsApiService } from '../../core/post-details-api.service';
import { Comments } from '../../shared/post-details';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss'],
  standalone : true,
  imports : [CommonModule]
})
export class PostCommentsComponent {
  public id : number = 0;
  comments? : Comments[];
  destroy$ = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    private postDetailsApiService: PostDetailsApiService,
    ) {}
  ngOnInit(){    
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
    this.id = +params['id'];
    this.getComments(this.id)
 });
  }
  getComments(id : number){
    this.postDetailsApiService.getComments(id).pipe(takeUntil(this.destroy$)).subscribe((res : Comments[]) => {
       this.comments = res
    })  
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
