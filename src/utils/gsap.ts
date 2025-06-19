import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
/**
 * Initializes animation for the footer catch paragraph
 * Words slide in from right with a staggered effect
 */
export function initHeadingAnimation(): void {
  // Select the single footer catch paragraph
  const heading = document.querySelector('.footer_catch-p');

  if (!heading) return;

  // Store original HTML to preserve existing structure
  const originalHTML = heading.innerHTML;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = originalHTML;

  const textNodes: string[] = [];

  // Recursive function to process text and maintain existing spans
  const walkNodes = (node: Node): void => {
    if (node.nodeType === 3) {
      // If text node: split into words and add to array
      const words = node.textContent?.trim().split(/\s+/) || [];
      textNodes.push(...words);
    } else if (node.nodeType === 1) {
      // If element node: check for special spans
      const element = node as HTMLElement;
      if (element.classList?.contains('heading_span')) {
        // Preserve existing spans by wrapping them in animation spans
        textNodes.push(`<span style="display: inline-block">${element.outerHTML}&nbsp;</span>`);
      } else {
        // Process child nodes recursively
        node.childNodes.forEach(walkNodes);
      }
    }
  };
  walkNodes(tempDiv);

  // Rebuild heading content: wrap each word in animation span
  heading.innerHTML = textNodes
    .map((word) => {
      if (word.startsWith('<span style="display: inline-block"')) {
        // Return already formatted spans
        return word;
      }
      // Wrap regular words in animation spans with spacing
      return `<span style="display: inline-block">${word}&nbsp;</span>`;
    })
    .join('');

  // Animate each word/span with GSAP
  gsap.from(heading.children, {
    scrollTrigger: {
      trigger: heading,
      start: 'top bottom-=100', // Start animation when heading is 100px from viewport bottom
      toggleActions: 'restart none none reset', // Replay animation each time element enters viewport
    },
    x: 100, // Slide from right
    opacity: 0, // Fade in
    duration: 0.8,
    ease: 'power3.out', // Smooth easing
    stagger: 0.1, // Delay between each word animation
  });
}

export function initTeamSectionAnimation() {
  // Vérifier si l'écran est plus large que 992px
  if (window.innerWidth <= 992) return;

  const teamSection = document.querySelector('.section_hp-team');
  const teamTitle = document.getElementById('hp-team-h2');
  const teamGridItems = document.querySelectorAll('.hp-team_grid > *');

  if (!teamSection || !teamTitle || teamGridItems.length === 0) return;

  // Animation du titre
  gsap.fromTo(
    teamTitle,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: teamSection,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    }
  );

  // Animation des éléments de la grille
  gsap.fromTo(
    teamGridItems,
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: teamSection,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

export function initStickyBookingButtonOpacity() {
  // Vérifier si l'écran est plus large que 480px
  if (window.innerWidth <= 480) return;

  const stickyBtn = document.querySelector('.sticky-booking-btn');
  const footerComponent = document.querySelector('.footer_component');

  if (!stickyBtn || !footerComponent) return;

  // Animation pour faire disparaître le bouton lors du survol du footer
  footerComponent.addEventListener('mouseenter', () => {
    gsap.to(stickyBtn, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  // Animation pour faire réapparaître le bouton quand on quitte le footer
  footerComponent.addEventListener('mouseleave', () => {
    gsap.to(stickyBtn, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  });
}
