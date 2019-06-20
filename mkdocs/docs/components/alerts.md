#Alerts

### Default

<div sws-alert--primary role="alert">
    <div>This is a primary alert, it even supports
        <i>dynamic</i>
        <b>HTML</b> and
        <a target="_blank" href="http://carbondesignsystem.com/guidelines/accessibility" sws-link--dark>fancy links</a>!! </div>
</div>

<div sws-alert--secondary role="alert">
    <i class="far fa-check-circle fa-2x" sws-secondary m-r-15></i>
    This is a secondary alert with an icon - neat!
</div>

<div sws-alert--success role="alert">
    This is a success alert - neat!
</div>

<div sws-alert--warning role="alert">
    This is a warning alert - neat!
</div>

<div sws-alert--danger role="alert">
    This is a danger alert - neat!
</div>

<div sws-alert--regular role="alert">
    This is a regular alert - neat!
</div>

<div sws-alert--jet role="alert">
    This is a jet alert - neat!
</div>

<div sws-alert--dark role="alert">
    This is a dark alert - neat!
</div>

<div sws-alert--light role="alert">
    This is a light alert - neat!
</div>



```html
<div sws-alert--jet role="alert">
    This is a regular alert - neat!
</div>
```

### Bold

<div sws-alert-bold--primary role="alert">
    <div>
        This is a bold primary alert - it even supports
        <i>dynamic</i>
        <b>HTML</b> and
        <a target="_blank" href="#" sws-link>fancy links</a>!
    </div>
</div>

<div sws-alert-bold--secondary role="alert">
    <i class="fas fa-exclamation-circle fa-2x" m-r-15></i>
    This is a bold secondary alert with an icon - what!
</div>

<div sws-alert-bold--success role="alert">
    This is a bold success alert - what!
</div>

<div sws-alert-bold--warning role="alert">
    This is a bold warning alert - what!
</div>

<div sws-alert-bold--danger role="alert">
    This is a bold danger alert - what!
</div>

<div sws-alert-bold--regular role="alert">
    This is a bold regular alert - what!
</div>

<div sws-alert-bold--jet role="alert">
    This is a bold jet alert - what!
</div>

<div sws-alert-bold--dark role="alert">
    This is a bold dark alert - what!
</div>

<div sws-alert-bold--light role="alert">
    This is a bold light alert - what!
</div>

```html
<div sws-alert-bold--jet role="alert">
    This is a bold jet alert - what!
</div>
```


---
### Fancy

<div sws-alert-fancy--secondary role="alert">
    <h5 m-v-0 text-upper>This is a bold secondary alert - what!</h5>
</div>

<div sws-alert-fancy--light role="alert">
    This is a bold success alert - what!
</div>

<div sws-alert-fancy--jet role="alert" style="max-width: 500px;" m-b-40>
    <h5 console m-a-0 text-upper>this is <s>sparta</s> a fancy alert</h5>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>

```html
<div sws-alert-fancy--secondary role="alert">
    <h5 m-v-0 text-upper>This is a bold secondary alert - what!</h5>
</div>

<div sws-alert-fancy--light role="alert">
    This is a bold success alert - what!
</div>

<div sws-alert-fancy--jet role="alert" style="max-width: 500px;">
    <h5 console m-a-0 text-upper>this is <s>sparta</s> a fancy alert</h5>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>
```


---
### 3D


<div sws-alert-3d--jet role="alert" style="max-width: 500px;">
    <h5 console m-a-0 text-upper>this is <s>sparta</s> a fancy alert</h5>
</div>

<div sws-alert-3d--secondary role="alert">
    <p display-4 m-a-0>This is a 3D Alert!</p>
</div>

<div sws-alert-3d--primary role="alert" style="max-width: 800px;" m-b-40>
    <div>
        This is a primary alert, it even supports
        <i>dynamic</i>
        <b>HTML</b> and
        <a target="_blank" href="http://carbondesignsystem.com/guidelines/accessibility" sws-link--light>fancy
            links</a>!!
    </div>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>


```html

<div sws-alert-3d--secondary role="alert">
    <p display-4 m-a-0>This is a 3D Alert!</p>
</div>

<div sws-alert-3d--primary role="alert" style="max-width: 800px;">
    <div>
        This is a primary alert, it even supports
        <i>dynamic</i>
        <b>HTML</b> and
        <a target="_blank" href="http://carbondesignsystem.com/guidelines/accessibility" sws-link--light>fancy
            links</a>!!
    </div>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>
```


---
### Closeable Alerts

<div sws-alert--secondary role="alert">
    This is an alert that is closeable
    <span p-h-15>Look, it even supports
        <i>dynamic</i>
        <b>HTML</b> and
        <a target="_blank" href="#" sws-link--secondary>fancy links</a>!! </span>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>

```html
<div sws-alert--secondary role="alert">
    This is an alert that is closeable
    <span p-h-15>Look, it even supports
        <i>dynamic</i>
        <b>HTML</b> and
        <a target="_blank" href="#" sws-link--secondary>fancy links</a>!! </span>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>
```

####Examples

<div sws-alert-3d--primary role="alert">
    <span>This is an alert that is closeable </span>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>

<div sws-alert-fancy--danger role="alert">
    <span>This is an alert that is closeable </span>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>

<div sws-alert--regular role="alert">
    This is an alert that is closeable
    <span p-h-15>Look, it even supports
        <i>dynamic</i>
        <b>HTML</b> and
        <a target="_blank" href="#" sws-link--dark>fancy links</a>!! </span>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>

```html
<div sws-alert-3d--primary role="alert">
    <span>This is an alert that is closeable </span>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>

<div sws-alert-fancy--danger role="alert">
    <span>This is an alert that is closeable </span>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>

<div sws-alert--regular role="alert">
    This is an alert that is closeable
    <span p-h-15>Look, it even supports
        <i>dynamic</i>
        <b>HTML</b> and
        <a target="_blank" href="#" sws-link--dark>fancy links</a>!! </span>
    <div sws-alert__close onclick="this.parentElement.style.display='none'"> close </div>
</div>
```