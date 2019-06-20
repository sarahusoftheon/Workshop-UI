!!! tip
	This component is also available as an Angular component in [NG-Workshop](https://github.com/Softheon/NG-Workshop/)

## Component Examples

**Desktop View: (with overlay)**

<div style="width: 756px; overflow: hidden;">
    <div style="width: 1200px;">
    <iframe width="1200" height="800" style="width: 1200px !important;" src="//jsfiddle.net/thinkless/7dwfzpqg/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
    </div>
</div>

**Mobile View: (with overlay)**
<iframe width="1200" height="800" src="//jsfiddle.net/thinkless/7dwfzpqg/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

**Desktop View: (expanded by default and without overlay)**

<iframe width="100%" height="800" src="//jsfiddle.net/thinkless/sr9gkh53/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## Helper Classes

| Attribute/Class Name    | Functionality                                     |
|-------------------------|---------------------------------------------------|
| `nav-open-desktop`      | has nav in the open state for starters on desktop |
| `li-padding`            | create a blank li and give it the same padding    |
| `hidden-nav-collapsed`  | hide something only when the nav is collapsed     |
| `visible-nav-collapsed` | show something only when the nav is collapsed     |
| `active-link`           | for when the link is active                       |

## Overlay Option

After the `<nav sws-nav--l></nav>` element, a div with the attribute `sws-nav-overlay` can be added to give the sidenav a dark backdrop when in the open state.

**Note:** For WCAG, add a transparent button in the `sws-nav-overlay` div and bind the onclick function to the button instead.

**Example:**

```html
  <div sws-nav-overlay visible-tablet onclick="swsToggleSideNav()"></div>
```

| Attribute/Class Name | Functionality                                                                            |
|----------------------|------------------------------------------------------------------------------------------|
| `sws-nav-overlay`    | the overlay when the nav is open (can include visible-tablet if you want it mobile only) |


## CSS Variables for Customizations

To apply custom styles, add a class on the `sws-nav--l` div: `sws-nav--l class="header-custom"`


| Attribute/Class Name   | Functionality                                                 |
|------------------------|---------------------------------------------------------------|
| `--nav-pos`            | the position over the sidenav                                 |
| `--nav-height`         | the height of the overall sidenav                             |
| `--nav-content-height` | the height of the sidenav content within `sws-nav--l_content` |

**Example:**

This will make the sidenav sticky when paired with the workshop header:

```css
.custom-header {
  --nav-pos: fixed;
  --nav-height: calc(100vh - 50px);
  --nav-content-height: calc(100vh - 110px);
}
```

## Code

**HTML: (default collapsed and with overlay)**

```HTML
<div flex-container full-height>
  <nav sws-nav--l class="header-custom">
    <button onclick="swsToggleSideNav()" id="btn-toggleMainNav" aria-haspopup="true" aria-controls="nav1" menu-btn><span sws-navigation_icon><i class="fas fa-stream fa-lg"></i> </span>MENU</button>
    <div nav-tooltip-container>
      <p nav-tooltip id="nav-text">Nav</p>
    </div>
    <div sws-nav--l_content id="nav1" aria-labelledby="btn-toggleMainNav">
      <ul>
        <li><a id="link-GoHome" class="active-link" href="javascript:;" title="Home"><span sws-navigation_icon><i class="fas fa-home"></i></span>Home</a></li>
      </ul>
      <hr />
      <ul>
        <li li-padding hidden-nav-collapsed>
          CREATE NEW:
        </li>
        <li text-center p-t-15 p-b-10 visible-nav-collapsed>
          NEW:
        </li>
        <li><a href="javascript:;"><span sws-navigation_icon><i class="far fa-folder"></i></span>Folder</a></li>
        <li><a href="javascript:;"><span sws-navigation_icon><i class="far fa-file"></i></span>File</a></li>
        <li><a href="javascript:;"><span sws-navigation_icon><i class="far fa-bookmark"></i></span>Bookmarks</a></li>
      </ul>
      <hr hidden-mobile />
      <ul hidden-mobile>
        <li><a id="openKeyboardShortcuts" routerLinkActive="active-link" (click)="openKeyboardShortcuts()" title="Keyboard Shortcuts" ><span sws-navigation_icon><i class="far fa-keyboard"></i></span> Keyboard Shortcuts</a></li>
      </ul>
      <hr hidden-nav-collapsed />
      <div p-l-20 semibold text-regular hidden-nav-collapsed>
        <p>More About Softheon:</p>
        <a id="link-FAQ" href="/faq" title="FAQ" p-r-15>F.A.Q.</a>
        <a id="link-ReleaseNotes" href="/release" title="Release Notes">Release Notes</a>
      </div>
      <p text-regular copyright-text>&copy; 2019 <a id="link-Softheon" href="https://www.softheon.com/" target="_blank">Softheon Inc.</a></p>
    </div>
  </nav>
  <!-- Conditionally add this -->
  <div sws-nav-overlay visible-tablet onclick="swsToggleSideNav()"></div>
  <article full-width>
    <div bg-light full-height v-middle flex-container>
      <p semilight h2 p-l-50>
        Main Content Placeholder 3
      </p>
    </div>
  </article>
</div>

```

**JavaScript:**

```javascript

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


```