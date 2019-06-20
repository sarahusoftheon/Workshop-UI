/*! Softheon Workshop JS v.1.0.0 */
// vanilla js document.ready
document.addEventListener(
  'DOMContentLoaded',
  function() {
    // sws-nav--l component js
    listenForSWSNavLComponent();
  },
  false
);

// #region Left Navigation Component: [sws-nav--l]

/** sws-nav--l : Initializes and adds event emitters for the component */
function listenForSWSNavLComponent() {
  // variables
  let navbar = document.querySelectorAll('[sws-nav--l] li a');
  let navbarContainer = document.querySelector('[sws-nav--l]');
  let tooltip = document.querySelector('#nav-text');
  // hover / keyboard focus on, display the tooltip
  for (var i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener(
      'mousemove',
      function(event) {
        if (navbarContainer.matches(':not(.nav-open)')) {
          if (event.target.matches(':hover')) {
            swsSideNavDisplayTooltip(event, tooltip);
          }
        }
      },
      false
    );
    // a11y keyboard support
    navbar[i].addEventListener(
      'focusin',
      function(event) {
        if (navbarContainer.matches(':not(.nav-open)')) {
          swsSideNavDisplayTooltip(event, tooltip);
        }
      },
      false
    );
  }
  // hover / keyboard focus off of the container, hide the tooltip
  navbarContainer.addEventListener(
    'mouseleave',
    function() {
      setTimeout(function() {
        tooltip.style.opacity = 0;
      }, 500);
    },
    false
  );
  // a11y keyboard support
  navbarContainer.addEventListener(
    'focusout',
    function() {
      tooltip.style.opacity = 0;
    },
    false
  );
}

/** sws-nav--l : toggles the collapsed states */
function swsToggleSideNav() {
  let sideNav = document.querySelector('[sws-nav--l]');
  if (sideNav.classList.contains('nav-open')) {
    sideNav.classList.remove('nav-open');
  } else {
    // if there is a tooltip present, hide it
    let tooltip = document.querySelector('#nav-text');
    if (tooltip) {
      tooltip.style.opacity = 0;
    }
    sideNav.classList.add('nav-open');
  }
}

/** sws-nav--l helper class: displays the tooltip */
function swsSideNavDisplayTooltip(event, tooltip) {
  let top = event.target.getBoundingClientRect().top;
  tooltip.innerText = event.target.innerText;
  tooltip.style.cssText = 'opacity: 1; top:' + top + 'px';
}

// #endregion