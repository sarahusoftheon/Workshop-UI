Workshop Changelog
========

5.0.0 Beta (June 14, 2019)
--------

* new 'visible-tablet' utility style
* SideNav Component with JavaScript snippets
* Documentation revives Alpha hover dropdowns

**Possibly Breaking Changes:**

* `sws-navbar` (header component) is now 50px height

4.0.0 Beta (April 19, 2019)
--------

* NEW Theme Generator
* NEW Input modifier styles: `form-sm`, `form-md`, `form-lg`, `form-xl`
* NEW Utility display styles: `d-block`, `d-inline`, `d-inline-block`
* NEW Button focus state
* NEW Date Picker Input
* Bug fix: input active state !important
* Bug fix: Button icon height inconsistency
* Updated version of normalize.scss
* Updated checkbox card examples
* Added Global Variables

**Possibly Breaking Changes:**

* `sws-form` is now 100% width by default

**Experimental Styles:**

* NEW `bg-gradient--reverse` & `bg-gradient` colors that create a gradient of the primary and secondary colors **note: some themes look much better than others

3.0.0 Beta (April 12, 2019)
--------

* Updated Table component
* Dropdown + Input utility styles: error, label-active, & label-hidden states

2.0.0 Beta (February 13, 2019)
--------

* NEW Table component
* NEW Dropdowns + m-forms class (for consistent margin)
* NEW utility styles: semilight, text-dec-none, sws-container-xlg
* NEW Themes for input components
* NEW Header Component: sws-navbar, supports Light and Dark theme!
* NEW Different dropshadow style options  ie. [sws-shadow--4], .sws-shadow--4, [sws-card][sws-shadow--4]
* NEW pre & code element styling
* SWS Cards support new drop shadows, ie. sws-card--1
* Minor Bug Fixes
* BREAKING CHANGES:
  * sws-card--square renamed to sws-card-square
  * Alpha Dropdowns DEPRECATED

1.0.0-beta.RC.4 (September 14, 2018)
--------

* NEW Cardbox component! (card + checkbox)
* NEW Fancy + 3D Alerts
* sws-container, sws-container-lg, sws-container-sm
* NEW Toggle Switch!
* Checkbox + Radio Button Redesign
* text-reset attribute (reset's text capitalize etc. 'text-unset' / 'text-reset')
* Checkbox Group (vertical checkboxes)
* Flexbox Mobile Ordering Classes

1.0.0-beta.RC.3 (September 14, 2018)
--------

* Custom Theme Generator CLI
* bg-white
* bg-gradient + bg-gradient--reverse
* button group redesigned
* new button style hover effect : sws-hover--primary, sws-hover-3d--primary, sws-hover--primary-outline, sws-hover-3d--primary-outline
* Rounded buttons!
* Under the hood: dynamic algorithm that detects whether or not button color is yellow shade and uses darken() instead of mix() function
* Checkbox Appearing on the right of label
* More link styles
* Intro animation added to sws-hr-sm--bold
* New simple button!

1.0.0-beta.RC.1-2 (August 27, 2018)
-------

* Finalize Buttons:
* Button-Input Pairs
* margin-left auto + margin-right auto
* Improved Shade + Tint mixins
* Change Regular Color
* New Color: Jet!
* Buttons now normalized !
* Themed Fancy Outline Buttons!
* New Console font!
* sws-link class option
* Text-area elements!
* hidden tablet attribute
* border box  attribute
* BREAKING CHANGES:
  * sws-button--primary etc. NEW STYLES!!!
  * sws-button--fancy Renamed to => sws-button-fancy--dark
  * buttons now have 8px margin
  * Rounded buttons now supported !
  * outline-{{brand color}}-thin/medium Renamed to =>  outline--{{brand color}}-thin/medium
  * sws-form-field renamed to sws-form--simple
  * (not sure if breaking change but just in case?) - [disabled] attribute scope change. no longer global now occurs only with buttons!

* DEPRECATED STYLES FROM ALPHA 9.6
  * sws-form-field--linear DEPRECATED
  * sws-fancy-form DEPRECATED
  * sws-button-outline--fancy DEPRECATED

0.0.1-alpha.9-6 asphalt-java (July 6, 2018)
--------

* Fancy Buttons: 'sws-button-outline--fancy' & 'sws-button--fancy' (experiment)
* Fancy inputs (experiment)
* 'semibold', 'truncate-text', 'full-height', 'text-white', and 'cursor-pointer' attributes
* (July 23 update)
* 'mobile-column', 'mobile-center', 'flex-container-responsive', 'margin-0-auto' / 'm-0-auto',

0.0.1-alpha.9-5 asphalt-ice-tea (May 1, 2018)
--------

* State improvements to Checkbox & Radio Buttons Components Update
* Text Transform styles: text-upper, text-lower, text-capitalize
* Start of :root variable theming
* 'Hidden' attribute

0.0.1-alpha.9 asphalt-incaberry (April 10, 2018)
--------

* Component + Utility Improvements & Minor Bug Fixes
* 'visible-tablet-up' renamed to 'visible-mobile'
* When using vertical nav, adding 'sws-nav'label' to the <p> tags will hide the text on mobile and display only icons
* Attribute & Class options are now available for all header styles
* add 'remove-all-styles' to apply the style: 'all: unset;'
* add 'img-rounded' to apply the style: 'border-radius: 50%;'
* add border styles to any item: outline-{{brand color}}-thin/medium.

0.0.1-alpha.8 asphalt-honey (February 16, 2018)
--------

* Component + Utility Improvements & Minor Bug Fixes
* Additional Margin + Padding Styles (vertical, horizontal, all sides)
* Additional flexbox layout styles
* New Theme CDNs : Default, Dark, Bootstrap, Material Design (note: these CDNs are 'static' releases of Workshop)
* New Workshop Examples: 404 page, Vertical Navbar w/ Parallax Scrolling Content Layout
* New Navbars + Menu Dropdown + Parallax Background Components (Pre-Release)

* **BREAKING CHANGE FOR THOSE UPGRADING FROM ALPHA 0.0.1-alpha 7 and under**:

**p-sides-{{size}} and m-sides-{{size}} have been replaced with p-v-{{sides}} and p-h-{{sides}}**
>
>  If you need to find + replace the previous styles, here is a guide to what the new styles equate to:
>
>  p/m-sides-xs => p/m-h-5
>
>  p/m-sides-sm  =>  p/m-h-15
>
>  p/m-sides-md  =>  p/m-h-30
>
>  p/m-sides-lg  =>  p/m-h-60
>
>  p/m-sides-xl  =>  p/m-h-120

**the flex-{{jusify content style}} no longer include flex-wrap: wrap; Wrapping is now its own separate attribute/class: "flex-wrap-wrap" or "flex-wrap-nowrap"**

0.0.1-alpha.7 asphalt-goji (February 7, 2018)
--------

* Accessibility + Utility Improvements & Minor Bug Fixes
* Navbar Component

0.0.1-alpha.6 asphalt-focaccia (January 17, 2018)
--------

* Accessibility + Helper Class Improvements & Minor Bug Fixes
* Simple Input Component
* Card Component
* Required Field Indicator

0.0.1-alpha.5 asphalt-empanada (January 15, 2018)
--------

* Accessibility Improvements & Minor Bug Fixes
* Select Dropdown Component
* Margin & Padding Helper Classes
* Loading Spinner Component
* Alert Component
* Label Component
* Light and Dark Themed Tooltips


0.0.1-alpha.4 asphalt-dijon (December 29, 2017)
--------

* Accessibility Improvements
* Initial Typography + Utility Classes
* Button Component Improvements
* Tooltip Component
* Checkbox Component
* Radio Button Group Component
* Fancy Link Component
* Animated Menu Icon (Experimental)
* Component Compatibility with Material Design CSS


0.0.1-alpha.3 asphalt-carbonara (December 21, 2017)
--------

* Update SASS Schema
* Add Normalize.css to SASS
* Radio Button Component


0.0.1-alpha.2 asphalt-biscotti (December 21, 2017)
--------

* Switch to using SASS over LESS
* Button Component in SASS


0.0.1-alpha.0 asphalt-artichoke (December 14, 2017)
--------

* Initial Version
* Button Component in LESS