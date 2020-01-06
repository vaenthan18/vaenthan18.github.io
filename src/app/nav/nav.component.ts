import { Component, OnInit, HostListener } from '@angular/core';
import * as sal from 'sal.js';
import * as $ from 'jquery';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class NavComponent implements OnInit {

  // state = 'hide';

  constructor() { }

  ngOnInit() {
    sal({
      once: false,
    });
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("toggled");
      $(".hamburger").toggleClass("is-active");
      console.log("yeeeeeeeet");
    });
    // const element = document.getElementById('about');

    // element.addEventListener('sal:in', ({ target }) => {
    //   this.state = 'show'
    //   console.log('entering', target);
    // });

    // element.addEventListener('sal:out', ({ target }) => {
    //   this.state = 'hide'
    //   console.log('entering', target);
    // });
  }

  // @HostListener('window:scroll') checkScroll() {
  //   const scrollPosition = window.pageYOffset;

  //   if (scrollPosition >= 550) {
  //     this.state = 'show'
  //   } else {
  //     this.state = 'hide'
  //   }
  // }
}
