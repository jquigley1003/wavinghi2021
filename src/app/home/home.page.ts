import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('mainLogoImg') mainLogoImg: ElementRef;

  mainLogoAnimEnter: Animation;
  mainLogoAnimLeave: Animation;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private animationCtrl: AnimationController
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mainLogoAnimEnter = this.animationCtrl.create('myMainLogoAnimEnter');
    this.mainLogoAnimEnter
      .addElement(this.mainLogoImg.nativeElement)
      .duration(3000)
      .beforeStyles({
        opacity: 0
      })
      .keyframes([
        { offset: 0, transform: 'translateY(-400px) scale(0.1) rotate(0)', opacity: '0.2' },
        { offset: 0.2, transform: 'rotate(-45deg)', opacity: '0.5' },
        { offset: 0.4, transform: 'scale(1.2) rotate(45deg)', opacity: '0.7' },
        { offset: 0.6, transform: 'scale(1) rotate(-45deg)', opacity: '1' },
        { offset: 1, transform: 'scale(1) rotate(0)', opacity: '1' }
      ])
      .afterClearStyles(['opacity']);

    this.mainLogoAnimLeave = this.animationCtrl.create('myMainLogoAnimLeave');
    this.mainLogoAnimLeave
      .addElement(this.mainLogoImg.nativeElement)
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'rotate(-45deg)', opacity: '1' },
        { offset: 0.2, transform: 'rotate(45deg) scale(0.5)', opacity: '1' },
        { offset: 0.5, transform: 'rotate(-45deg) scale(0.5)', opacity: '1' },
        { offset: 1, transform: 'rotate(0) scale(1)', opacity: '1' }
      ]);

      this.mainLogoAnimEnter.play();
  }

  async goToPortfolio() {
    await this.mainLogoAnimLeave.play();
    // this.navCtrl.navigateForward('/portfolio');
    this.router.navigate(['/portfolio']);

  }

}
