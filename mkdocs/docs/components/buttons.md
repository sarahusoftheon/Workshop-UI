#Buttons

#### Workshop contains a variety of button styles, from simple to fancy.
---
#### **Naming Structure**
> **sws-button-<span text-primary>[style]</span>--<span text-dark>[color]</span>-<span text-success>[size]</span>**

**Examples:**

* sws-button--<span text-dark>primary</span>-<span text-success>sm</span>
* sws-button-<span text-primary>outline</span>--<span text-dark>primary</span>
* sws-button-<span text-primary>flat</span>--<span text-dark>success</span>-<span text-success>lg</span>
---
### Default

<button sws-button--primary>Primary</button>
<button sws-button--secondary>Secondary</button>
<button sws-button--success>Success</button>
<button sws-button--warning>Warning</button>
<button sws-button--danger>Danger</button>
<button sws-button--regular>Regular</button>
<button sws-button--dark>Dark</button>
<button sws-button--jet>Jet</button>
<button sws-button--light>Light</button>


```html
<button sws-button--primary>Primary</button>
<button sws-button--secondary>Secondary</button>
<button sws-button--success>Success</button>
<button sws-button--warning>Warning</button>
<button sws-button--danger>Danger</button>
<button sws-button--regular>Regular</button>
<button sws-button--dark>Dark</button>
<button sws-button--jet>Jet</button>
<button sws-button--light>Light</button>
```

---
### Outline

<button sws-button-outline--primary>Primary</button>
<button sws-button-outline--secondary>Secondary</button>
<button sws-button-outline--success>Success</button>
<button sws-button-outline--warning>Warning</button>
<button sws-button-outline--danger>Danger</button>
<button sws-button-outline--regular>Regular</button>
<button sws-button-outline--dark>Dark</button>
<button sws-button-outline--jet>Jet</button>
<button sws-button-outline--light>Light</button>

```html
<button sws-button-outline--primary>Primary</button>
<button sws-button-outline--secondary>Secondary</button>
<button sws-button-outline--success>Success</button>
<button sws-button-outline--warning>Warning</button>
<button sws-button-outline--danger>Danger</button>
<button sws-button-outline--regular>Regular</button>
<button sws-button-outline--dark>Dark</button>
<button sws-button-outline--jet>Jet</button>
<button sws-button-outline--light>Light</button>
```

---
### Flat

<button sws-button-flat--primary>Primary</button>
<button sws-button-flat--secondary>Secondary</button>
<button sws-button-flat--success>Success</button>
<button sws-button-flat--warning>Warning</button>
<button sws-button-flat--danger>Danger</button>
<button sws-button-flat--regular>Regular</button>
<button sws-button-flat--dark>Dark</button>
<button sws-button-flat--jet>Jet</button>
<button sws-button-flat--light>Light</button>
```html
<button sws-button-flat--primary>Primary</button>
<button sws-button-flat--secondary>Secondary</button>
<button sws-button-flat--success>Success</button>
<button sws-button-flat--warning>Warning</button>
<button sws-button-flat--danger>Danger</button>
<button sws-button-flat--regular>Regular</button>
<button sws-button-flat--dark>Dark</button>
<button sws-button-flat--jet>Jet</button>
<button sws-button-flat--light>Light</button>
```


---
### Simple

<button sws-button-simple--primary>Primary</button>
<button sws-button-simple--secondary>Secondary</button>
<button sws-button-simple--success>Success</button>
<button sws-button-simple--warning>Warning</button>
<button sws-button-simple--danger>Danger</button>
<button sws-button-simple--regular>Regular</button>
<button sws-button-simple--dark>Dark</button>
<button sws-button-simple--jet>Jet</button>
<button sws-button-simple--light>Light</button>
```html
<button sws-button-simple--primary>Primary</button>
<button sws-button-simple--secondary>Secondary</button>
<button sws-button-simple--success>Success</button>
<button sws-button-simple--warning>Warning</button>
<button sws-button-simple--danger>Danger</button>
<button sws-button-simple--regular>Regular</button>
<button sws-button-simple--dark>Dark</button>
<button sws-button-simple--jet>Jet</button>
<button sws-button-simple--light>Light</button>
```

!!! tip
	You can combine simple buttons with the hover attribute to create a custom hover effect:
<button sws-button-simple--primary sws-hover--primary>Primary</button>
```html
<button sws-button-simple--primary sws-hover--primary>Primary</button>
```

---
### Fancy

<button sws-button-fancy--primary>Primary</button>
<button sws-button-fancy--secondary>Secondary</button>
<button sws-button-fancy--success>Success</button>
<button sws-button-fancy--warning>Warning</button>
<button sws-button-fancy--danger>Danger</button>
<button sws-button-fancy--regular>Regular</button>
<button sws-button-fancy--dark>Dark</button>
<button sws-button-fancy--jet>Jet</button>
<button sws-button-fancy--light>Light</button>
```html
<button sws-button-fancy--primary>Primary</button>
<button sws-button-fancy--secondary>Secondary</button>
<button sws-button-fancy--success>Success</button>
<button sws-button-fancy--warning>Warning</button>
<button sws-button-fancy--danger>Danger</button>
<button sws-button-fancy--regular>Regular</button>
<button sws-button-fancy--dark>Dark</button>
<button sws-button-fancy--jet>Jet</button>
<button sws-button-fancy--light>Light</button>
```

---
### Disabled

Adding the attribute `disabled` makes the button disabled.

<button sws-button--primary disabled>Primary</button>
<button sws-icon-flat--danger-sm disabled>
    <i class="fas fa-search"></i>
</button>

```html
<button sws-button--primary>Primary</button>
<button sws-icon-flat--danger-sm disabled>
    <i class="fas fa-search"></i>
</button>
```

---
### Buttons with Icons

<button sws-button-outline--secondary-lg>
    Primary
    <i class="fas fa-search" sws-button__icon-r></i>
</button>
<button sws-button-outline--primary>
    <i class="fas fa-search" sws-button__icon-l></i>
    Primary
</button>

```html
<button sws-button-outline--secondary-lg>
    Primary
    <i class="fas fa-search" sws-button__icon-r></i>
</button>
<button sws-button-outline--primary>
    <i class="fas fa-search" sws-button__icon-l></i>
    Primary
</button>
```

<button sws-button-outline--primary>
    <i class="fas fa-circle-notch fa-spin" sws-button__icon-l></i>
    Primary
</button>

```html
<button sws-button-outline--primary>
    <i class="fas fa-circle-notch fa-spin" sws-button__icon-l></i>
    Primary
</button>
```

---
### Large Buttons

Append `-lg` to the button.


<button sws-button--primary-lg>Primary</button>
<button sws-button-outline--secondary-lg>Secondary</button>
<button sws-button-flat--success-lg>Success</button>

```html
<button sws-button--primary-lg>Primary</button>
<button sws-button-outline--secondary-lg>Secondary</button>
<button sws-button-flat--success-lg>Success</button>
```

---
### Small Buttons

Append `-sm` to the button.

<button sws-button--primary-sm>Primary</button>
<button sws-button-outline--secondary-sm>Secondary</button>
<button sws-button-flat--success-sm>Success</button>

```html
<button sws-button--primary-sm>Primary</button>
<button sws-button-outline--secondary-sm>Secondary</button>
<button sws-button-flat--success-sm>Success</button>
```

---
### Rounded

Adding the attribute `rounded` makes the button rounded.


<button sws-button--primary rounded>Primary</button>
<button sws-button-flat--secondary rounded>Secondary</button>
<button sws-button--jet-lg rounded>Success</button>
<button sws-button-outline--success-sm rounded>Success</button>

```html
<button sws-button--primary rounded>Primary</button>
<button sws-button-flat--secondary rounded>Secondary</button>
<button sws-button--jet-lg rounded>Success</button>
<button sws-button-outline--success-sm rounded>Success</button>
```
