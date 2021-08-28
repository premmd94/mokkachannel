import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  id:any;
  videoDetail: any = [];
  videosrc:any;
  
  constructor(private api: ApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.route.params.subscribe((params: any) => {
      this.id = params.id
      
    })

   }
   
  ngOnInit(): void {
    this.getVideo(this.id)
    this.videosrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.id + '?start=1');
  }
  getVideo(id: any) {
    this.api.getSingleVideo(id).subscribe((res: any) => {
      console.log(res)
      this.videoDetail = res.items
    })
  }
}
