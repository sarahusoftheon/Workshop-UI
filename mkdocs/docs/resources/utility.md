# Utility Styles

<div sws-hr-sm--bold></div>


### Containers

| Attribute Name      | Functionality            |
|---------------------|--------------------------|
| `sws-container`     | applies `margin: 0 4%;`  |
| `sws-container-sm`  | applies `margin: 0 2%;`  |
| `sws-container-lg`  | applies `margin: 0 6%;`  |
| `sws-container-xlg` | applies `margin: 0 12%;` |


### Width / Height

| Attribute Name   | Functionality            |
|------------------|--------------------------|
| `full-width`     | applies `width: 100%;`   |
| `full-width-vw`  | applies `width: 100vw;`  |
| `full-height`    | applies `height: 100%;`  |
| `full-height-vh` | applies `height: 100vh;` |


### Display

| Attribute Name   | Functionality                    |
|------------------|----------------------------------|
| `d-block`        | applies `display: block;`        |
| `d-inline`       | applies `display: inline;`       |
| `d-inline-block` | applies `display: inline-block;` |

### Rounded


| Attribute Name | Functionality                  |
|----------------|--------------------------------|
| `rounded`      | applies `border-radius: 36px;` |
| `img-rounded`  | applies `'border-radius: 50%'` |


### Other Useful Utility Styles

| Attribute Name       | Functionality                                                           |
|----------------------|-------------------------------------------------------------------------|
| `border-box`         | applies `box-sizing: border-box;`                                       |
| `remove-all-styles`  | applies `'all: unset;'`                                                 |
| `invisible-absolute` | applies `position: absolute;color: transparent;width: 0;font-size: 3px` |
| `hidden`             | applies `display: none`                                                 |


### Box Shadow Effects

<div flex-space-evenly flex-wrap m-t-20 m-b-40 p-v-40 p-h-0 bg-light>
    <div>
        <div class="demo-block" bg-white sws-shadow--1></div>
        <p semibold m-b-5><small>sws-shadow--1</small></p>
    </div>
    <div>
        <div class="demo-block" bg-white sws-shadow--2></div>
        <p semibold m-b-5><small>sws-shadow--2</small></p>
    </div>
    <div>
        <div class="demo-block" bg-white sws-shadow--3></div>
        <p semibold m-b-5><small>sws-shadow--3</small></p>
    </div>
    <div>
        <div class="demo-block" bg-white sws-shadow--4></div>
        <p semibold m-b-5><small>sws-shadow--4</small></p>
    </div>
</div>

```html
<div flex-space-evenly flex-wrap m-t-20 m-b-40 p-v-40 p-h-0 bg-light>
    <div>
        <div class="demo-block" bg-white sws-shadow--1></div>
        <p semibold m-b-5><small>sws-shadow--1</small></p>
    </div>
    <div>
        <div class="demo-block" bg-white sws-shadow--2></div>
        <p semibold m-b-5><small>sws-shadow--2</small></p>
    </div>
    <div>
        <div class="demo-block" bg-white sws-shadow--3></div>
        <p semibold m-b-5><small>sws-shadow--3</small></p>
    </div>
    <div>
        <div class="demo-block" bg-white sws-shadow--4></div>
        <p semibold m-b-5><small>sws-shadow--4</small></p>
    </div>
</div>
```


### Hover Effects


| Attribute Name                  | Functionality                     |
|---------------------------------|-----------------------------------|
| `sws-hover--{color}`            | applies hover effect              |
| `sws-hover--{color}-outline`    | applies outline + hover effect    |
| `sws-hover-3d--{color}`         | applies 3d hover effect           |
| `sws-hover-3d--{color}-outline` | applies outline + 3d hover effect |
| `cursor-pointer`                | applies `cursor: pointer;`        |


####Example

<div flex-space-between flex-wrap m-t-20 p-t-20 p-h-0 p-b-0>
    <div>
        <div class="demo-block" bg-primary sws-hover--primary></div>
        <small>
            <p m-b-0>sws-hover--primary</p>
        </small>
    </div>
    <div>
        <div class="demo-block" bg-secondary sws-hover-3d--secondary></div>
        <small>
            <p m-b-0>sws-hover-3d--secondary</p>
        </small>
    </div>
    <div>
        <div class="demo-block" bg-success sws-hover--success-outline></div>
        <small>
            <p m-b-0>sws-hover--success-outline</p>
        </small>
    </div>
    <div>
        <div class="demo-block" bg-warning sws-hover-3d--warning-outline></div>
        <small>
            <p m-b-0>sws-hover-3d--warning-outline</p>
        </small>
    </div>
</div>

```html
<div flex-space-between flex-wrap m-t-20 p-t-20 p-h-0 p-b-0>
    <div>
        <div class="demo-block" bg-primary sws-hover--primary></div>
        <small>
            <p m-b-0>sws-hover--primary</p>
        </small>
    </div>
    <div>
        <div class="demo-block" bg-secondary sws-hover-3d--secondary></div>
        <small>
            <p m-b-0>sws-hover-3d--secondary</p>
        </small>
    </div>
    <div>
        <div class="demo-block" bg-success sws-hover--success-outline></div>
        <small>
            <p m-b-0>sws-hover--success-outline</p>
        </small>
    </div>
    <div>
        <div class="demo-block" bg-warning sws-hover-3d--warning-outline></div>
        <small>
            <p m-b-0>sws-hover-3d--warning-outline</p>
        </small>
    </div>
</div>
```


### Outlines

To apply the button-style border to an element: outline-{{brand color}}-thin/medium:

<div outline--primary-medium sws-hover-3d--primary p-a-25 sws-card m-b-20>outline--primary-medium with sws-card</div>
<div outline--secondary-thin sws-hover--secondary p-a-25 sws-card>outline--secondary-thin with sws-card</div>

```html
<div outline--primary-medium sws-hover-3d--primary p-a-25 sws-card m-b-20>outline--primary-medium with sws-card</div>
<div outline--secondary-thin sws-hover--secondary p-a-25 sws-card>outline--secondary-thin with sws-card</div>
```

### Background Colors

* bg-primary
* bg-secondary
* bg-success
* bg-warning
* bg-danger
* bg-regular
* bg-dark
* bg-light
* bg-white



### Text Colors

* text-primary
* text-secondary
* text-success
* text-warning
* text-danger
* text-regular
* text-dark
* text-light
* text-white
