import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
  cardImages: string[];
  titles: string[];
  portfolioUrls: string[];
  projects: Array<{url: string, title: string, note: string, image: string}>;

  constructor(
    private navCtrl: NavController,
    private router: Router) { 
    this.cardImages = ['GravityFitness', 'HealingHeartCommunications', 'SherwoodForest', 'GoodnessBreath',
    'MRO', 'FryerLawFirm', 'WiiFM-Consulting'];

    this.titles = ['Gravity Fitness', 'Healing Heart Communications', 'Sherwood Forest Civic Association', 'Goodness Breath Project',
      'MRO Management Services', 'Fryer Law (App In Progress)', 'WiiFM Consulting (Older Work)'];

    this.portfolioUrls = [
      'https://gravityfitnessatl.com/', 'https://healingheartcommunications.com/', 'https://sherwoodforestatl.org',
      'https://goodnessbreath.com', 'https://mromanagementservices.com', 'https://fryerlaw2020.web.app/',
      'http://wiifmconsulting.com/'];

    this.projects = [];
    for (let i = 1; i < this.cardImages.length+1; i++) {
      this.projects.push({
        url: this.portfolioUrls[i-1],
        title: this.titles[i-1],
        note: this.portfolioUrls[i-1],
        image: this.cardImages[i-1]
      });
    }
  }

  ngOnInit() {
  }

  itemTapped(projectUrl) {
    window.open(projectUrl);
  }

  goHome() {
    // this.navCtrl.navigateForward('/home');
    this.router.navigate(['/home']);
  }

}
