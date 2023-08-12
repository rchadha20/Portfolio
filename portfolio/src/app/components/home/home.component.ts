import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initTypewriter();
  }

  initTypewriter() {
    const element = document.querySelector('.typewriter');
    if (!element) {
      return;
    }

    const texts = [
      'RICHA CHADHA',
      'Full Stack Software Developer.'
    ];
    let textIndex = 0;
    let text = '';
    let isDeleting = false;
    let typingSpeed = 200; // Adjust typing speed (lower value = faster)
    let deletingSpeed = 100; // Adjust deleting speed (lower value = faster)

    function type() {
      if (textIndex === texts.length) {
        textIndex = 0;
      }

      text = isDeleting
        ? texts[textIndex].substring(0, text.length - 1)
        : texts[textIndex].substring(0, text.length + 1);

      if (element) {
        element.innerHTML = `<span class="wrap">${text}</span>`;
      }

      if (!isDeleting && text === texts[textIndex]) {
        isDeleting = true;
        typingSpeed = 2000; // Delay after completion
      } else if (isDeleting && text === '') {
        isDeleting = false;
        textIndex++;
        typingSpeed = 80; // Typing speed
      }

      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();
  }
}
