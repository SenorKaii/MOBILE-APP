import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-lounge',
  templateUrl: './lounge.page.html',
  styleUrls: ['./lounge.page.scss'],
})
export class LoungePage implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  changeVideo1() {
    const player = this.elementRef.nativeElement.querySelector('#ytplayer');
    this.renderer.setAttribute(player, 'src', 'https://open.spotify.com/embed/episode/2eyqVEGKVYqjj12HLoHNw1?utm_source=generator');
  }

  changeVideo2() {
    const player = this.elementRef.nativeElement.querySelector('#ytplayer');
    this.renderer.setAttribute(player, 'src', 'https://open.spotify.com/embed/episode/4z2Bg8fRJaIBYuJhy7OJPT?utm_source=generator');
  }

  changeVideo3() {
    const player = this.elementRef.nativeElement.querySelector('#ytplayer');
    this.renderer.setAttribute(player, 'src', 'https://open.spotify.com/embed/episode/62s1z5Kgh7eAOYwzEItIp4?utm_source=generator');
  }

  changeVideo4() {
    const player = this.elementRef.nativeElement.querySelector('#ytplayer');
    this.renderer.setAttribute(player, 'src', 'https://open.spotify.com/embed/episode/4jkYVn5LVaqUWjY6AReESD?utm_source=generator');
  }

  changeVideo5() {
    const player = this.elementRef.nativeElement.querySelector('#ytplayer');
    this.renderer.setAttribute(player, 'src', 'https://open.spotify.com/embed/episode/6NCGs0KnonKsVbAGQGKhYh?utm_source=generator');
  }

  changeVideo6() {
    const player = this.elementRef.nativeElement.querySelector('#ytplayer');
    this.renderer.setAttribute(player, 'src', 'https://open.spotify.com/embed/episode/6NCGs0KnonKsVbAGQGKhYh?utm_source=generator');
  }

  ngOnInit() {
  }

}
