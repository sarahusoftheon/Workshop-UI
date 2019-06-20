# Inputs

## Utility Styles

### Form modifier styles

Utility styles (available as both classes and attributes) that can be added dynamically with javascript. Place them on the same div that has the attribute `sws-form` or `sws-form--{{theme name}}`.

| Name                 | Functionality                            | Example                                        |
|----------------------|------------------------------------------|------------------------------------------------|
| `input-active`       | triggers the floating label active state | `<div sws-form input-active>`                  |
| `input-error`        | turns the input red                      | `<div sws-form--primary input-error>`          |
| `input-label-hidden` | hides the label                          | `<div sws-form--secondary input-label-hidden>` |

### Form styles

| Name      | Functionality                                      | Example                                |
|-----------|----------------------------------------------------|----------------------------------------|
| `m-forms` | gives the element the matching margin for the form | `<button sws-button--primary m-forms>` |
| `form-sm` | adds the style `max-width: 200px;` to the form     | `<div sws-form form-sm>`               |
| `form-md` | adds the style `max-width: 400px;` to the form     | `<div sws-form form-md>`               |
| `form-lg` | adds the style `max-width: 600px;` to the form     | `<div sws-form form-lg>`               |
| `form-xl` | adds the style `max-width: 900px;` to the form     | `<div sws-form form-xl>`               |


## Examples

### Input - Button Combo

!!! Tip Beta
    When placing inputs and buttons next to each other, add `m-l-0` on the button element to remove the margin-left.

<div flex-container border-box>
    <div sws-form form-lg>
        <input sws-form__input type="text" name="example" id="example01" onkeyup="this.setAttribute('value', this.value);">
        <label sws-form__label for="example01">Search</label>
        <div sws-form__bar></div>
        <span sws-label--danger> incorrect value</span>
    </div>
    <button sws-button--dark m-forms>Submit</button>
</div>

<br/>

```html
<div flex-container border-box>
    <div sws-form form-lg>
        <input sws-form__input type="text" name="example" id="example01" onkeyup="this.setAttribute('value', this.value);">
        <label sws-form__label for="example01">Search</label>
        <div sws-form__bar></div>
        <span sws-label--danger> incorrect value</span>
    </div>
    <button sws-button--dark m-forms>Submit</button>
</div>
```

### Date Picker

<div sws-form input-active form-sm>
    <input sws-form__input type="date" name="exampledate" id="exampledateid" required>
    <label sws-form__label for="exampledate">Date of Birth</label>
    <div sws-form__bar></div>
    <div sws-form__calendar>
        <i class="fas fa-calendar"></i>
    </div>
</div>
<br/>
<div sws-form--primary input-active form-sm>
    <input sws-form__input type="date" name="exampledate1" id="exampledateid1" required>
    <label sws-form__label for="exampledate1">Date of Birth</label>
    <div sws-form__bar></div>
    <div sws-form__calendar text-primary>
        <i class="fas fa-calendar"></i>
    </div>
</div>

<br/>

```html
<div sws-form input-active form-sm>
    <input sws-form__input type="date" name="exampledate" id="exampledateid" required>
    <label sws-form__label for="exampledate">Date of Birth</label>
    <div sws-form__bar></div>
    <div sws-form__calendar>
        <i class="fas fa-calendar"></i>
    </div>
</div>

<div sws-form--primary input-active form-sm>
    <input sws-form__input type="date" name="exampledate1" id="exampledateid1" required>
    <label sws-form__label for="exampledate1">Date of Birth</label>
    <div sws-form__bar></div>
    <div sws-form__calendar text-primary>
        <i class="fas fa-calendar"></i>
    </div>
</div>
```

---

### Default Inputs

!!! Note Beta
    If the field is not required, add the javascript `onkeyup="this.setAttribute('value', this.value);"` to the input

<div sws-form>
    <input sws-form__input type="text" name="exampleform0" id="example0" onkeyup="this.setAttribute('value', this.value);">
    <label sws-form__label for="example0">Label</label>
    <div sws-form__bar></div>
</div>
<br/>

```html
<div sws-form>
    <input sws-form__input type="text" name="example0" id="example1" onkeyup="this.setAttribute('value', this.value);">
    <label sws-form__label for="example1">Label</label>
    <div sws-form__bar></div>
</div>
```

---
### Themed Inputs

#### **Naming Structure**
> **sws-form--<span text-primary>[color]</span>**

<div sws-form--primary>
    <input sws-form__input type="text" name="exampleform01" id="example01" onkeyup="this.setAttribute('value', this.value);">
    <label sws-form__label for="example01">Label</label>
    <div sws-form__bar></div>
</div>

```html
<div sws-form--primary>
    <input sws-form__input type="text" name="exampleform01" id="example01" onkeyup="this.setAttribute('value', this.value);">
    <label sws-form__label for="example01">Label</label>
    <div sws-form__bar></div>
</div>
```


---
### Required Inputs

!!! Note
    Adding the attribute `required` to the input element will make adds a red dot indicator to the right of the label

<div sws-form>
    <input sws-form__input type="text" name="example1" id="example1" required>
    <label sws-form__label for="example1">Label</label>
    <div sws-form__bar></div>
</div>
<br/>

```html
<div sws-form>
    <input sws-form__input type="text" name="example1" id="example1" required>
    <label sws-form__label for="example1">Label</label>
    <div sws-form__bar></div>
</div>
```

---
### Text Areas

<div flex-container-column full-width border-box>
    <div sws-textarea>
        <textarea name="exampleform2" id="example2" rows="4" cols="50"></textarea>
        <label sws-textarea__label for="example2">Label</label>
    </div>
</div>

<br/>

```html
<div flex-container-column full-width border-box>
    <div sws-textarea>
        <textarea name="exampleform2" id="example2" rows="4" cols="50"></textarea>
        <label sws-textarea__label for="example2">Label</label>
    </div>
</div>
```

---
### Required Text Area

<div flex-container-column full-width border-box>
    <div sws-textarea>
        <textarea required name="exampleform3" id="example3" rows="4" cols="50">A suite of modern UI Components for Angular created with the Softheon Workshop Design System https://hack.softheon.io/Workshop/</textarea>
        <label sws-textarea__label for="example3">Label</label>
    </div>
</div>

<br/>

```html
<div flex-container-column full-width border-box>
    <div sws-textarea>
        <textarea required name="exampleform3" id="example3" rows="4" cols="50">A suite of modern UI Components for Angular created with the Softheon Workshop Design System https://hack.softheon.io/Workshop/</textarea>
        <label sws-textarea__label for="example3">Label</label>
    </div>
</div>
```

---
### Additional Input Styles

#### 3D
<div flex-container-column full-width border-box>
    <div sws-form--shadow full-width>
        <input sws-form__input type="text" name="exampleform4" id="example4" required>
        <label sws-form__label for="example4">Label</label>
        <div sws-form__bar></div>
    </div>
</div>

<br/>

```html
<div flex-container-column full-width border-box>
    <div sws-form--shadow full-width>
        <input sws-form__input type="text" name="exampleform4" id="example4" required>
        <label sws-form__label for="example4">Label</label>
        <div sws-form__bar></div>
    </div>
</div>
```

---
#### Outline
<br>
<div flex-container-column full-width border-box>
    <div sws-form--outline full-width>
        <input sws-form__input type="text" name="exampleform5" id="example5" required>
        <label sws-form__label for="example5">Label</label>
        <div sws-form__bar></div>
    </div>
</div>

<br/>

```html
<div flex-container-column full-width border-box>
    <div sws-form--outline full-width>
        <input sws-form__input type="text" name="exampleform5" id="example5" required>
        <label sws-form__label for="example5">Label</label>
        <div sws-form__bar></div>
    </div>
</div>
```

---
#### Light
<br>
<div flex-container-column full-width border-box>
    <div bg-dark p-a-20>
        <div sws-form--light full-width>
            <input sws-form__input type="text" name="exampleform6" id="example6" required>
            <label sws-form__label for="example6">Label</label>
            <div sws-form__bar></div>
        </div>
    </div>
</div>


<br/>

```html
<div flex-container-column full-width border-box>
    <div bg-dark p-a-20>
        <div sws-form--light full-width>
            <input sws-form__input type="text" name="exampleform6" id="example6" required>
            <label sws-form__label for="example6">Label</label>
            <div sws-form__bar></div>
        </div>
    </div>
</div>
```

---
#### Required, Light
<br>
<div flex-container-column full-width border-box>
    <div bg-dark p-a-20>
        <div sws-form--light full-width>
            <input sws-form__input type="text" name="exampleform7" id="example7" required>
            <label sws-form__label for="example7">Label</label>
            <div sws-form__bar></div>
        </div>
    </div>
</div>


<br/>

```html
<div flex-container-column full-width border-box>
    <div bg-dark p-a-20>
        <div sws-form--light full-width>
            <input sws-form__input type="text" name="exampleform7" id="example7" required>
            <label sws-form__label for="example7">Label</label>
            <div sws-form__bar></div>
        </div>
    </div>
</div>
```

---
### Simple Inputs

<div m-t-50 style="width: 400px">
    <div flex-container>
        <div flex-1 sws-form-group style="min-width: 300px;">
            <div sws-form--simple>
                <input sws-form__input type="text" data-val="true" id="example10" name="exampleform10" required />
                <label sws-form__label for="example10">Label</label>
            </div>
            <div sws-form--simple>
                <input sws-form__input type="Label" id="example11" name="exampleform11" />
                <label sws-form__label for="example11">Label</label>
            </div>
        </div>
    </div>
</div>

<br/>

```html
<div m-t-50 style="width: 400px">
    <div flex-container>
        <div flex-1 sws-form-group style="min-width: 300px;">
            <div sws-form--simple>
                <input sws-form__input type="text" data-val="true" id="example10" name="exampleform10" required />
                <label sws-form__label for="example10">Label</label>
            </div>
            <div sws-form--simple>
                <input sws-form__input type="Label" id="example11" name="exampleform11" />
                <label sws-form__label for="example11">Label</label>
            </div>
        </div>
    </div>
</div>
```