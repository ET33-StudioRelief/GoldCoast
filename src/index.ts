import './index.css';

import {
  initAboutUsAnimation,
  initFeaturesBannerAnimation,
  initHeadingAnimation,
  initStickyBookingButtonOpacity,
  initTeamSectionAnimation,
  initTreatmentsAnimation,
} from './utils/gsap';

// Initialiser la gestion du formulaire
window.Webflow ||= [];
window.Webflow.push(() => {
  initHeadingAnimation();
  initTeamSectionAnimation();
  initStickyBookingButtonOpacity();
  initFeaturesBannerAnimation();
  initAboutUsAnimation();
  initTreatmentsAnimation();
});
