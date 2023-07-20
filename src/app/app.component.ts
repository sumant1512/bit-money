import { Component, Inject } from '@angular/core';
import { ToggleStatusEmit } from './TYPES/toggle-status-emit.type';
import { DOCUMENT } from '@angular/common';
import { ParticlesConfig } from './particler-config';

declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bit-Money';
  status: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToElement(elementId: string): void {
    const element = this.document.getElementById(elementId);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  // This function is for toggel of header
  toggleforHeader(selectedPage: ToggleStatusEmit) {
    this.status = selectedPage.toggleStatus;
    this.scrollToElement(selectedPage?.selectedPage || '');
  }

  ngOnInit() {
    this.invokeParticles();
  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }
}
