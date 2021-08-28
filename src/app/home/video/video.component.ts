import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videosrc:any;
  @Input() id:any;
  constructor(private sanitizer: DomSanitizer) {
    
   }
   
  ngOnInit(): void {
    this.videosrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.id + '?start=1');
  }

}
