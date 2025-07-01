import './index.css';

import {
  addBackgroundGradientOnMobileRoutes,
  animateTreatmentContent,
  initAboutUsAnimation,
  initAboutUsCardHoverAnimation,
  initFeaturesBannerAnimation,
  initStickyBookingButtonOpacity,
  initTeamCvToggle,
  initTeamSectionAnimation,
  syncAllImgColHeightsToTextCol,
} from './utils/gsap';

// Initialiser la gestion du formulaire
window.Webflow ||= [];
window.Webflow.push(() => {
  initTeamSectionAnimation();
  initStickyBookingButtonOpacity();
  initFeaturesBannerAnimation();
  initAboutUsAnimation();
  initAboutUsCardHoverAnimation();
  initTeamCvToggle();
  syncAllImgColHeightsToTextCol();
  addBackgroundGradientOnMobileRoutes();
  animateTreatmentContent();
});
