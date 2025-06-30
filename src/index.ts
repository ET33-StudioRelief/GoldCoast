import './index.css';

import {
  addBackgroundGradientOnMobileRoutes,
  animateTreatmentContent,
  initAboutUsAnimation,
  initFeaturesBannerAnimation,
  initHeadingAnimation,
  initStickyBookingButtonOpacity,
  initTeamSectionAnimation,
  /*initTreatmentsAnimation,*/
  syncAllImgColHeightsToTextCol,
} from './utils/gsap';

// Initialiser la gestion du formulaire
window.Webflow ||= [];
window.Webflow.push(() => {
  initHeadingAnimation();
  initTeamSectionAnimation();
  initStickyBookingButtonOpacity();
  initFeaturesBannerAnimation();
  initAboutUsAnimation();
  /*initTreatmentsAnimation();*/
  syncAllImgColHeightsToTextCol();
  addBackgroundGradientOnMobileRoutes();
  animateTreatmentContent();
});
