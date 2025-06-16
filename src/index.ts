import './index.css';
import './styles/ergodent.css';

import { initHeadingAnimation, initTeamSectionAnimation } from './utils/gsap';

initHeadingAnimation();
initTeamSectionAnimation();

function updateStickyZIndex() {
  if (window.innerWidth >= 768) {
    // Sur desktop, on remet le z-index à la valeur normale
    const sticky = document.querySelector('.sticky-btn_wrapper') as HTMLElement | null;
    if (sticky) sticky.style.zIndex = '999';
    return;
  }

  const sticky = document.querySelector('.sticky-btn_wrapper') as HTMLElement | null;
  const footer = document.querySelector('.footer_component') as HTMLElement | null;
  if (!sticky || !footer) return;

  const stickyRect = sticky.getBoundingClientRect();
  const footerRect = footer.getBoundingClientRect();

  // Si le sticky chevauche le footer
  if (stickyRect.bottom > footerRect.top && stickyRect.top < footerRect.bottom) {
    sticky.style.zIndex = '-1';
  } else {
    sticky.style.zIndex = '999';
  }
}

window.addEventListener('scroll', updateStickyZIndex);
window.addEventListener('resize', updateStickyZIndex);
document.addEventListener('DOMContentLoaded', updateStickyZIndex);
