# Margin and Padding

<div sws-hr-sm--bold></div>

### Naming Structure

To apply margin or padding to a given element:
>**<span text-dark>[space]</span>-<span text-primary>[direction]</span>-<span text-success>[amount]</span>**
---

### Style Definition

** [Space] **

* m <span p-l-10 text-regular> // margin</span>
* p <span p-l-10 text-regular> // padding</span>

** [Direction] **

* t <span p-l-10 text-regular> // top</span>
* b <span p-l-10 text-regular> // bottom</span>
* r <span p-l-10 text-regular> // right</span>
* l <span p-l-10 text-regular> // left</span>
* v <span p-l-10 text-regular> // vertical (top & bottom)</span>
* h <span p-l-10 text-regular> // horizontal (left & right)</span>
* a <span p-l-10 text-regular> // all</span>

** [Amount] **

* 0 | 5 | 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 90 | 100 | 110 | 120 <span p-l-10 text-regular>// (in pixels)</span>


**Additional styles**

* m-l-auto <span p-l-10 text-regular> // margin-left: auto</span>
* m-r-auto <span p-l-10 text-regular> // margin-right: auto</span>

---

#### Examples

* <span text-dark>m</span>-<span text-primary>t</span>-<span text-success>10</span>  <span p-l-10 text-regular> // margin-top: 10px;</span>
* <span text-dark>m</span>-<span text-primary>v</span>-<span text-success>15</span>  <span p-l-10 text-regular> // margin-top: 15px; margin-bottom: 15px;</span>
* <span text-dark>p</span>-<span text-primary>a</span>-<span text-success>50</span>  <span p-l-10 text-regular> // padding: 50px;</span>
* <span text-dark>p</span>-<span text-primary>l</span>-<span text-success>20</span>  <span p-l-10 text-regular> // padding: 20px;</span>
* <span text-dark>p</span>-<span text-primary>h</span>-<span text-success>75</span>  <span p-l-10 text-regular> // padding-right: 75px; padding-left: 75px;</span>

<br>