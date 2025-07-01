import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
/**
 * Initializes animation for the footer catch paragraph
 * Words slide in from right with a staggered effect
 */
/*export function initHeadingAnimation(): void {
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
}*/

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
  if (window.innerWidth >= 768) return;
  const stickyBtn = document.querySelector('.sticky-btn_wrapper') as HTMLElement;
  const footerComponent = document.querySelector('.footer_component');
  if (!stickyBtn || !footerComponent) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(stickyBtn, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: () => {
              stickyBtn.style.pointerEvents = 'none';
            },
          });
        } else {
          stickyBtn.style.pointerEvents = 'auto';
          gsap.to(stickyBtn, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.inOut',
          });
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  observer.observe(footerComponent);
}

export function initFeaturesBannerAnimation() {
  // Vérifier si l'écran est plus large que 767px
  if (window.innerWidth <= 767) return;

  const featuresSection = document.querySelector('.section_features-baneer');
  const gridItems = document.querySelectorAll('.features-baneer_grid > *');

  if (!featuresSection || gridItems.length === 0) return;

  // Animation des éléments de la grille
  gsap.fromTo(
    gridItems,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, // Délai de 0.2s entre chaque élément
      ease: 'power2.out',
      scrollTrigger: {
        trigger: featuresSection,
        start: 'top bottom-=100', // Déclenche quand le haut de la section est à 100px du bas du viewport
        toggleActions: 'play none none reverse', // Joue l'animation à l'entrée, la reverse à la sortie
      },
    }
  );
}

export function initAboutUsAnimation() {
  // Vérifier si l'écran est plus large que 767px
  if (window.innerWidth <= 767) return;

  const aboutSection = document.querySelector('.section_about-us');
  const aboutContent = document.getElementById('hp-about-us');

  if (!aboutSection || !aboutContent) return;

  gsap.fromTo(
    aboutContent,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

export function initTreatmentsAnimation() {
  // Vérifier si l'écran est plus large que 767px
  if (window.innerWidth <= 767) return;

  const treatmentsSection = document.querySelector('.section_hp-treatments');
  const treatmentsContent = document.getElementById('hp-treatments');
  const treatmentsListItems = document.querySelectorAll('.treatments_list > *');

  if (!treatmentsSection) return;

  // Animation du contenu principal (hp-treatments)
  if (treatmentsContent) {
    gsap.fromTo(
      treatmentsContent,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: treatmentsSection,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // Animation des éléments de la liste (treatments_list) - se lance après hp-treatments
  if (treatmentsListItems.length > 0) {
    gsap.fromTo(
      treatmentsListItems,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5, // Délai de 0.5s après le début de l'animation de hp-treatments
        scrollTrigger: {
          trigger: treatmentsSection,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }
}

export function syncAllImgColHeightsToTextCol() {
  document.querySelectorAll('.treatment_grid').forEach((grid) => {
    const imgCols = grid.querySelectorAll('.treatment_img-col');
    const textCols = grid.querySelectorAll('.treatment_text-col');
    // On synchronise chaque paire par leur index
    imgCols.forEach((imgCol, i) => {
      const textCol = textCols[i] as HTMLElement | undefined;
      if (imgCol && textCol) {
        (imgCol as HTMLElement).style.height = textCol.offsetHeight + 'px';
      }
    });
  });
}

export function addBackgroundGradientOnMobileRoutes() {
  if (window.innerWidth >= 768) return;
  const mainWrappers = document.querySelectorAll('.main-wrapper');
  if (!mainWrappers.length) return;
  const path = window.location.pathname;
  const routes = ['/legal', '/faq', '/contact', '/treatments'];
  // Si l'URL contient un des segments, on ajoute 'is-purple-gradient', sinon 'is-gold-gradient'
  if (path === '/' || routes.some((route) => path.includes(route))) {
    mainWrappers.forEach((wrapper) => wrapper.classList.add('is-purple-gradient'));
  } else {
    mainWrappers.forEach((wrapper) => wrapper.classList.add('is-gold-gradient'));
  }
}

export function animateTreatmentContent() {
  // Animation pour .treatment_content
  document.querySelectorAll('.treatment_content').forEach((container) => {
    Array.from(container.children).forEach((child) => {
      gsap.fromTo(
        child,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: child,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  });

  // Animation pour .persona-treatment_list-wrapper
  document.querySelectorAll('.persona-treatment_list-wrapper').forEach((container) => {
    Array.from(container.children).forEach((child) => {
      gsap.fromTo(
        child,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: child,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  });
}

export function initAboutUsCardHoverAnimation() {
  const aboutUsCards = document.querySelectorAll('.about-us_card');

  aboutUsCards.forEach((card) => {
    const h3Element = card.querySelector('.about-us_h3') as HTMLElement;

    if (!h3Element) return;

    // Animation au hover
    card.addEventListener('mouseenter', () => {
      gsap.to(h3Element, {
        x: '-1.5rem',
        duration: 0.6,
        ease: 'power2.inOut',
      });
    });

    // Animation à la sortie du hover
    card.addEventListener('mouseleave', () => {
      gsap.to(h3Element, {
        x: '0rem',
        duration: 0.6,
        ease: 'power2.inOut',
      });
    });
  });
}

export function initTeamCvToggle() {
  const cvOpenButtons = document.querySelectorAll('.hp-team_cv-open');
  const cvCloseButtons = document.querySelectorAll('.hp-team_cv-close');

  // Gestion de l'ouverture des CV
  cvOpenButtons.forEach((openBtn) => {
    openBtn.addEventListener('click', () => {
      // Trouver le contenu CV correspondant (même parent ou structure)
      const cvContent = openBtn
        .closest('.hp-team_card')
        ?.querySelector('.hp-team_cv-content-open') as HTMLElement;

      if (cvContent) {
        // Afficher le contenu CV
        cvContent.style.display = 'block';
        // Masquer le bouton d'ouverture
        (openBtn as HTMLElement).style.display = 'none';
      }
    });
  });

  // Gestion de la fermeture des CV
  cvCloseButtons.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      // Trouver le contenu CV correspondant (même parent ou structure)
      const cvContent = closeBtn
        .closest('.hp-team_card')
        ?.querySelector('.hp-team_cv-content-open') as HTMLElement;
      const cvOpenBtn = closeBtn
        .closest('.hp-team_card')
        ?.querySelector('.hp-team_cv-open') as HTMLElement;

      if (cvContent && cvOpenBtn) {
        // Masquer le contenu CV
        cvContent.style.display = 'none';
        // Afficher le bouton d'ouverture
        cvOpenBtn.style.display = 'block';
      }
    });
  });
}
