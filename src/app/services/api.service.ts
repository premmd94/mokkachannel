import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const apiKye = environment.apiKey
const id = environment.id
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  youtubeurl:string = 'https://youtube.googleapis.com/youtube/v3/';
  constructor(private http: HttpClient) { }
  
  getChannelInfo() {
    
    let params = new HttpParams()
    const data: any = {
      'part': 'brandingSettings, statistics, snippet',
      'id': id,
      'key': apiKye

    }
    Object.keys(data).forEach(function (key) {
      if(data[key] != undefined) {
        params = params.append(key, data[key]);
      }
      
    });
    return this.http.get(this.youtubeurl + 'channels', {params});
  }
  getPopularVideo() {

    let params = new HttpParams()
    const data: any = {
      'part': 'snippet',
      'channelId': id,
      'maxResults': 2,
      'order': 'viewCount',
      'q': '',
      'key': apiKye,
    }

    Object.keys(data).forEach(function (key) {
      if(data[key] != undefined) {
        params = params.append(key, data[key]);
      }
      
    });
    return this.http.get(this.youtubeurl + 'search', {params});
  }
  getPlaylist(playid: any) {
    
    let params = new HttpParams()
    const data: any = {
      'part': 'contentDetails, snippet',
      'playlistId': playid,
      'maxResults': 10,
      'key': apiKye

    }
    Object.keys(data).forEach(function (key) {
      if(data[key] != undefined) {
        params = params.append(key, data[key]);
      }
      
    });
    return this.http.get(this.youtubeurl + 'playlistItems', {params});
  }
  getSingleVideo(playid: any) {
    
    let params = new HttpParams()
    const data: any = {
      'part': 'contentDetails,statistics,id,snippet',
      'id': playid,
      'key': apiKye

    }
    Object.keys(data).forEach(function (key) {
      if(data[key] != undefined) {
        params = params.append(key, data[key]);
      }
      
    });
    return this.http.get(this.youtubeurl + 'videos', {params});
  }
}


