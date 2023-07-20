import { Component, OnInit } from '@angular/core';

export interface IProject {
  technology: string;
  logo: string;
  alt: string;
}

@Component({
  selector: 'app-project',
  host: { class: 'w-100' },
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  // This is project list array
  projectList: Array<IProject> = [
    {
      technology: 'Blockchain Technology',
      logo: 'http://www.webstrot.com/html/bitmoney/landing_page_blue/images/icons/6.png',
      alt: 'blockchain logo',
    },
    {
      technology: 'Advanced Security System',
      logo: 'http://www.webstrot.com/html/bitmoney/landing_page_blue/images/icons/7.png',
      alt: 'lock logo',
    },
    {
      technology: 'Multi-Currency Coins',
      logo: 'http://www.webstrot.com/html/bitmoney/landing_page_blue/images/icons/8.png',
      alt: 'coins logo',
    },
    {
      technology: 'Internal Exchange',
      logo: 'http://www.webstrot.com/html/bitmoney/landing_page_blue/images/icons/9.png',
      alt: 'exchange logo',
    },
    {
      technology: 'Safety Fund',
      logo: 'http://www.webstrot.com/html/bitmoney/landing_page_blue/images/icons/10.png',
      alt: 'fund logo',
    },
    {
      technology: 'Cooperation With Arbitration',
      logo: 'http://www.webstrot.com/html/bitmoney/landing_page_blue/images/icons/11.png',
      alt: 'cooperation logo',
    },
  ];
}
