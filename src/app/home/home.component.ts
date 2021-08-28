import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { routerTransition } from 'src/app/router.animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
  channelDetail: any = {}
  videoList: any[] = []
  playList: any[]= []
  carromList: any[]= []
  bannerImage: string = '../../assets/images/pubg.jpg'
  pubg: string = '../../assets/images/pubg-1.jpg'
  call: string = '../../assets/images/call.jpg'
  pubgConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "autoplay": true,
    "margin": 10,
    "nextArrow": "<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>",
    "dots": false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  homeConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "margin": 10,
    "nextArrow": "<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>",
    "dots": false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  carromConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "autoplay": true,
    "margin": 10,
    "nextArrow": "<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>",
    "dots": false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  latestConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "margin": 10,
    "nextArrow": "<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>",
    "dots": false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  constructor(private api: ApiService, private router: Router, private modal: NgbModal) { }

  ngOnInit(): void {
    this.getChannel()
    this.getPlaylist()
    this.getCarromlist()
  }
  getChannel() {
    this.api.getChannelInfo().subscribe((res: any) => {
      console.log(res)
      this.channelDetail = res.items[0];
    })
  }
  getPlaylist() {
    this.api.getPlaylist('PLiBLoTR_iofT53wDxue4eJvfJ8PROGbPs').subscribe((res: any) => {
      console.log(res)
      this.playList = res.items;
      
    })
  }
  getCarromlist() {
    this.api.getPlaylist('PLiBLoTR_iofQU63h9HfBAcris2AZmlLqd').subscribe((res: any) => {
      console.log(res)
      this.carromList = res.items;
      
    })
  }
  gotoVideo(item: any) {
    console.log(item)
    this.router.navigate(['/video/', item.contentDetails.videoId])
  }

  openVideo(id: any, centered: boolean) {
    const modalRef = this.modal.open(VideoComponent, {size: 'xl', centered})
    modalRef.componentInstance.id = id;
  }
}
