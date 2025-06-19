import './index.css';
import './styles/ergodent.css';

import {
  initHeadingAnimation,
  initStickyBookingButtonOpacity,
  initTeamSectionAnimation,
} from './utils/gsap';

// Initialiser la gestion du formulaire
window.Webflow ||= [];
window.Webflow.push(() => {
  initHeadingAnimation();
  initTeamSectionAnimation();
  initStickyBookingButtonOpacity();
});
