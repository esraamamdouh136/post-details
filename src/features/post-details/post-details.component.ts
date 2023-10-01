import { CommonModule } from '@angular/common';
import {
  Component
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  Subject,
  forkJoin,
  takeUntil
} from 'rxjs';
import { User_Data } from '../../shared/post-details';
import { PostDetailsApiService } from '../../core/post-details-api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
  standalone : true,
  imports : [CommonModule ,MatIconModule , NgxPaginationModule, RouterModule]
})
export class PostDetailsComponent {
  postDetails: any;
  page: number = 1;
  start: number = 0;
  limit: number = 5;
  destroy$ = new Subject<void>(); 
  constructor(
    private postDetailsApiService: PostDetailsApiService,
    ) {}
  ngOnInit() {
   this.getPostDetails()
  }

  getPostDetails(){
    forkJoin([
      this.postDetailsApiService.getPostDetailsData(),
      this.postDetailsApiService.getUserData()
    ]).pipe(takeUntil(this.destroy$)).subscribe(([postDetails , userData]) => {
      this.postDetails = postDetails.map((item) => ({
        ...userData.find((t) => t.id === item.userId),
        ...item
      }));
      console.log(this.postDetails)
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getPostDetails()
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
