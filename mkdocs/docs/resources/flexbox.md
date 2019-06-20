# Flexbox Layout Styles

<div sws-hr-sm--bold></div>

<p m-t-40 m-b-20>
    <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
       target="_blank">Read more about flexbox and layout here</a>
</p>

**Aligning Items**

| Attribute Name                | Functionality                                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `flex-container`              | applies `display:flex`                                                                                                |
| `flex-container-column`       | applies `display:flex; flex-direction: column`                                                                        |
| `flex-container-row`          | applies `display:flex; flex-direction: row`                                                                           |
| `everything-center-container` | applies `text-align: center; align-items: center; justify-content: center;position: relative;vertical-align: middle;` |
| `flex-wrap`                   | applies `flex-wrap: wrap`                                                                                             |
| `flex-nowrap`                 | applies `flex-wrap: nowrap`                                                                                           |
| `flex-{1 | 2 | 3 | 4 | 5}`    | applies `flex: {#}` ... ie: `flex-5` => `flex: 5`;                                                                    |
| `flex-center`                 | applies `display:flex; align-items: center; justify-content: center`                                                  |
| `flex-start`                  | applies `display:flex; justify-content: flex-start`                                                                   |
| `flex-end`                    | applies `display:flex; justify-content: flex-end`                                                                     |
| `flex-space-evenly`           | applies `adds display:flex + justify-content: space-evenly`                                                           |
| `flex-space-between`          | applies `display:flex;justify-content: space-between`                                                                 |
| `flex-column-justify-center`  | applies `display: flex; vertical-align: middle;flex-direction: column;justify-content: center;`                       |
| `align-items-v`               | applies `align-items: center`                                                                                         |
| `v-middle`                    | applies `vertical-align: middle;`                                                                                     |

**Responsive Layout**

mobile screen size: 768px

tablet screen size: 1200px

| Attribute Name   | Functionality                                                        |
| ---------------- | -------------------------------------------------------------------- |
| `column-mobile`  | on mobile, applies `flex-direction:column`                           |
| `visible-mobile` | hides an element on desktop                                          |
| `hidden-mobile`  | on mobile screen sizes, hides an element and applies `display: none` |
| `hidden-tablet`  | on tablet screen sizes, hides an element and applies `display: none` |
| `visible-tablet` | visible only on tablet (and mobile) screens, hidden on desktop       |

**Ordering elements on mobile**

| Attribute Name                     | Functionality                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------- |
| `mobile-order-{1 | 2 | 3 | 4 | 5}` | on mobile screens, applies `order: {#}` ... ie: `mobile-order-5` => `order: 5`; |
