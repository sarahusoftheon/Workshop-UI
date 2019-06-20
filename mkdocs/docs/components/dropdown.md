### Utility Styles

Utility styles (available as both classes and attributes) that can be added dynamically with javascript. Place them on the same div that has the attribute `sws-select--{{theme name}}`.

| Name                    | Functionality                            | Example                                       |
|-------------------------|------------------------------------------|-----------------------------------------------|
| `dropdown-active`       | triggers the floating label active state | `<div sws-select--jet dropdown-active>`             |
| `dropdown-error`        | turns the input red                      | `<div sws-select--primary dropdown-error>`          |
| `dropdown-label-hidden` | hides the label                          | `<div sws-select--secondary dropdown-label-hidden>` |

<hr>

### Example Dropdown

<br>

<div sws-select--jet>
    <select id="testdropdown0" onclick="this.setAttribute('value', this.value);">
        <option selected disabled>Choose...</option>
        <option value="1">Option Number One</option>
        <option value="2">Option Number Two</option>
        <option value="3">Option Number Three</option>
    </select>
    <label for="testdropdown0">Test Label</label>
</div>

<br>

```html
<div sws-select--jet>
    <select id="testdropdown0" onclick="this.setAttribute('value', this.value);">
        <option selected disabled>Choose...</option>
        <option value="1">Option Number One</option>
        <option value="2">Option Number Two</option>
        <option value="3">Option Number Three</option>
    </select>
    <label for="testdropdown0">Test Label</label>
</div>
```

!!! Note Beta
    If the field is not required, add the javascript `onclick="this.setAttribute('value', this.value);"` to the select element

## Themed Dropdowns

#### **Naming Structure**
> **sws-select--<span text-primary>[color]</span>**

<br>

<div sws-select--primary>
    <select id="testdropdown1" onclick="this.setAttribute('value', this.value);">
        <option selected disabled>Choose...</option>
        <option value="1">Option Number One</option>
        <option value="2">Option Number Two</option>
        <option value="3">Option Number Three</option>
    </select>
    <label for="testdropdown1">Test Label</label>
</div>

<div sws-select--secondary>
    <select id="testdropdown2" onclick="this.setAttribute('value', this.value);">
        <option selected disabled>Choose...</option>
        <option value="1">Option Number One</option>
        <option value="2">Option Number Two</option>
        <option value="3">Option Number Three</option>
    </select>
    <label for="testdropdown2">Test Label</label>
</div>

<br>

```html
<div sws-select--primary>
    <select id="testdropdown1" onclick="this.setAttribute('value', this.value);">
        <option selected disabled>Choose...</option>
        <option value="1">Option Number One</option>
        <option value="2">Option Number Two</option>
        <option value="3">Option Number Three</option>
    </select>
    <label for="testdropdown1">Test Label</label>
</div>
```

## Required Dropdown

<br>

!!! Note
    Adding the attribute `required` to the input element will make adds a red dot indicator to the right of the label

<br>

<div sws-select--jet>
    <select id="testdropdown2" required>
        <option selected="" value="">Choose...</option>
        <option value="1">Option Number One</option>
        <option value="2">Option Number Two</option>
        <option value="3">Option Number Three</option>
    </select>
    <label for="testdropdown2">User</label>
</div>

<br>

```html
<div sws-select--jet>
    <select id="testdropdown3" required>
        <option selected="" value="">Choose...</option>
        <option value="1">Option Number One</option>
        <option value="2">Option Number Two</option>
        <option value="3">Option Number Three</option>
    </select>
    <label for="testdropdown3">User</label>
</div>
```

## Hover Dropdowns

<div sws-menu>
  <a sws-link--primary>
    Hover Over Me
  </a>
  <div sws-menu-items>
    <div sws-menu-item>
      <div>Menu Item A</div>
    </div>
    <div sws-menu-item>
      <div>Menu Item B</div>
    </div>
    <div sws-menu-item>
      <div>Menu Item C</div>
    </div>
  </div>
</div>

<div sws-menu>
  <button sws-button-flat--secondary>
    Hover Over Me
  </button>
  <div sws-menu-items>
    <div sws-menu-item>
      <div>Menu Item A</div>
    </div>
    <div sws-menu-item>
      <div>Menu Item B</div>
    </div>
    <div sws-menu-item>
      <div>Menu Item C</div>
    </div>
  </div>
</div>

```html
<div sws-menu>
  <a sws-link--primary>
    Hover Over Me
  </a>
  <div sws-menu-items>
    <div sws-menu-item>
      <div>Menu Item A</div>
    </div>
    <div sws-menu-item>
      <div>Menu Item B</div>
    </div>
    <div sws-menu-item>
      <div>Menu Item C</div>
    </div>
  </div>
</div>

<div sws-menu>
  <button sws-button-flat--secondary>
    Hover Over Me
  </button>
  <div sws-menu-items>
    <div sws-menu-item>
      <div>Menu Item A</div>
    </div>
    <div sws-menu-item>
      <div>Menu Item B</div>
    </div>
    <div sws-menu-item>
      <div>Menu Item C</div>
    </div>
  </div>
</div>

```
