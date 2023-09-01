import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { NgwWowService } from 'ngx-wow';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'my-resume',
  templateUrl: './myResume.component.html',
  styleUrls: ['./myResume.component.scss'],
})
export class myResumeComponent implements OnInit {
  sharePhone: string = '0952xxxxxx';
  copied: boolean = false;

  constructor(
    @Inject(DOCUMENT) protected document: any,
    private clipboardService: ClipboardService,
    private wowService: NgwWowService
  ) {
    this.wowService.init();
  }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      // Scroll to top
      const backTop = document.querySelector('.backTop');
      if (backTop) {
        backTop.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        });
      }

      // Scroll to section
      const links = document.querySelectorAll('a');
      links.forEach((link) => {
        link.addEventListener('click', (event) => {
          const hrefLink = link.getAttribute('href');
          if (hrefLink && hrefLink.startsWith('#')) {
            event.preventDefault();
            const target = document.querySelector(hrefLink) as HTMLElement;
            if (target) {
              window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
              });
            }
          }
        });
      });
    });

    //
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbarActive',
    });

    //刷新Roller
    var dataSpyList = [].slice.call(
      document.querySelectorAll('[data-bs-spy="scroll"]')
    );
    dataSpyList.forEach(function (dataSpyEl) {
      bootstrap.ScrollSpy.getInstance(dataSpyEl)?.refresh();
    });

    this.wowService.init({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    });
  }

  //copy phonenmber
  copyURL() {
    this.clipboardService.copyFromContent(this.sharePhone);
    this.copied = true;
    alert('已成功複製連絡電話:0952xxxxxx');
  }
}
