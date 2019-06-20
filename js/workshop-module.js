/*! Softheon Workshop JS v.1.0.0 */
// Left Navigation Component: [sws-nav--l]
/** sws-nav--l : Initializes and adds event emitters for the component */
var sideNavLComponent = (function () {
    /**
     * sws-nav--l helper class: displays the tooltip
     * @param {any} event the hovered element event
     * @param {any} tooltip the tooltip component
     */
    function swsSideNavDisplayTooltip(event, tooltip) {
        let top = event.target.getBoundingClientRect().top;
        tooltip.innerText = event.target.innerText;
        tooltip.style.cssText = 'opacity: 1; top:' + top + 'px';
    }

    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block
    return {
        /** Initializes and adds event emitters for the component */
        listenForSWSNavLComponent: function () {
            // variables
            let navbar = document.querySelectorAll('[sws-nav--l] li a');
            let navbarContainer = document.querySelector('[sws-nav--l]');
            let tooltip = document.querySelector('#nav-text');
            // hover / keyboard focus on, display the tooltip
            for (var i = 0; i < navbar.length; i++) {
                navbar[i].addEventListener(
                    'mouseover',
                    function (event) {
                        if (navbarContainer.matches(':not(.nav-open)')) {
                            if (event.target.matches(':hover')) {
                                swsSideNavDisplayTooltip(event, tooltip);
                            }
                        }
                    },
                    false
                );
                //// a11y keyboard support
                navbar[i].addEventListener(
                    'focusin',
                    function (event) {
                        console.log('listener fired');
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
                function () {
                    setTimeout(function () {
                        tooltip.style.opacity = 0;
                    }, 500);
                },
                false
            );
            // a11y keyboard support
            navbarContainer.addEventListener(
                'focusout',
                function () {
                    tooltip.style.opacity = 0;
                },
                false
            );
        },
        /** Toggles the collapsed states */
        swsToggleSideNav: function () {
            let sideNav = document.querySelector('[sws-nav--l]');
            if (sideNav.classList.contains('nav-open')) {
                sideNav.classList.remove('nav-open');
            } else if (sideNav.classList.contains('nav-open-desktop')) {
                if (window.innerWidth > 1200) {
                    sideNav.classList.remove('nav-open-desktop');
                } else {
                    sideNav.classList.remove('nav-open-desktop');
                    sideNav.classList.add('nav-open');
                }
            } else {
                // if there is a tooltip present, hide it
                let tooltip = document.querySelector('#nav-text');
                if (tooltip) {
                    tooltip.style.opacity = 0;
                }
                sideNav.classList.add('nav-open');
            }
        }
    };
})();

export { sideNavLComponent as default };
