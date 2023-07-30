# YEG DIALOG

![Screenshot 2023-07-31 001312](https://github.com/yemregunduz/yeg-dialog/assets/81508248/955649b3-a99b-46a7-878d-3fa3a742c3e1)

## Dialog Types

- Default Dialog 👋

```html
<button class="btn btn-primary btn-animate" data-toggle="dialog" data-target="#defaultDialog">
 Open Default Dialog
</button>
```

```html
 <dialog id="defaultDialog" class="dialog">
   <div class="dialog-content">
       <div class="dialog-header">
           <span class="dialog-header__text"><b>Default Dialog 👋</b></span>
           <button data-dismiss="dialog" aria-label="close" class="dialog-header__close">❌</button>
       </div>
       <div class="dialog-body">
           <img src="../assets/images/image.jpg">
           <p>A CSS-only modal based on the <a href="https://developer.mozilla.org/es/docs/Web/CSS/::backdrop"
                   target="_blank">::backdrop</a> pseudo-class. Hope you find it helpful.</p>
           <p>You can also change the styles of the <code>::backdrop</code> from the CSS.</p>
       </div>
       <div class="dialog-footer">
           <button class="btn btn-danger-outline" data-dismiss="dialog">Cancel</button>
           <button class="btn btn-primary">Confirm</button>

       </div>
   </div>
</dialog>
```

- Keyboard False Dialog 👋

```html
<button class="btn btn-primary btn-animate" data-toggle="dialog" data-target="#keyboardEventFalseDialog">
    Open Keyboard False Dialog
</button>
```

```html
<dialog id="keyboardEventFalseDialog" class="dialog" data-keyboard="false">
      <div class="dialog-content">
          <div class="dialog-header">
              <span class="dialog-header__text"><b>Keyboard False Dialog 👋</b></span>
              <button data-dismiss="dialog" aria-label="close" class="dialog-header__close">❌</button>
          </div>
          <div class="dialog-body">
              <img src="../assets/images/image.jpg">
              <p>
                  The attribute that prevents this dialog from closing when pressing the escape key is called
                  <b>data-keyboard="false"</b>.
              </p>
              <p>A CSS-only modal based on the <a href="https://developer.mozilla.org/es/docs/Web/CSS/::backdrop"
                      target="_blank">::backdrop</a> pseudo-class. Hope you find it helpful.</p>
              <p>You can also change the styles of the <code>::backdrop</code> from the CSS.</p>
          </div>
          <div class="dialog-footer">
              <button class="btn btn-danger-outline" data-dismiss="dialog">Cancel</button>
              <button class="btn btn-primary">Confirm</button>

          </div>
    </div>
</dialog>
```

- Static Backdrop Dialog 👋

```html
<button class="btn btn-primary btn-animate" data-toggle="dialog" data-target="#staticBackdropDialog">
    Open Static Backdrop Dialog
</button>
```

```html
<dialog id="staticBackdropDialog" class="dialog" data-backdrop="static">
    <div class="dialog-content">
        <div class="dialog-header">
            <span class="dialog-header__text"><b>Static Backdrop Dialog 👋</b></span>
            <button data-dismiss="dialog" aria-label="close" class="dialog-header__close">❌</button>
        </div>
        <div class="dialog-body">
            <img src="../assets/images/image.jpg">
            <p>The feature that prevents the modal from closing when clicked outside or when the escape key is
                pressed
                is the <b>data-backdrop="static"</b> attribute.</p>
            <p>A CSS-only modal based on the <a href="https://developer.mozilla.org/es/docs/Web/CSS/::backdrop"
                    target="_blank">::backdrop</a> pseudo-class. Hope you find it helpful.</p>
            <p>You can also change the styles of the <code>::backdrop</code> from the CSS.</p>
        </div>
        <div class="dialog-footer">
            <button class="btn btn-danger-outline" data-dismiss="dialog">Cancel</button>
            <button class="btn btn-primary">Confirm</button>

        </div>
    </div>
</dialog>
```

## Attributes - Datasets

- **data-target**: This attribute is used to specify the target dialog element that should be triggered or opened when an event (e.g., button click) occurs. It contains the ID of the dialog element to be opened. In the examples above, each button has a data-target attribute with a value corresponding to the ID of the associated dialog element.

- **data-toggle**: This attribute is used to indicate the type of dialog behavior to be applied when interacting with the specified target. When an element with this attribute is triggered (e.g., clicked), it will toggle the visibility of the dialog specified in the data-target attribute. In the examples above, each button has a data-toggle attribute with the value "dialog", indicating that it should toggle the visibility of the corresponding dialog.

- **data-keyboard**: This attribute is used to control whether the dialog can be closed using the keyboard. When set to "false", it disables the ability to close the dialog by pressing the "Escape" key on the keyboard. In the examples above, the second dialog has a data-keyboard="false" attribute, indicating that the dialog cannot be closed using the "Escape" key. Default value is true.

- **data-backdrop**: This attribute controls the behavior when clicking outside the dialog or pressing the "Escape" key. When set to "static", it prevents the dialog from closing when clicked outside or when the "Escape" key is pressed. In other words, it keeps the dialog open and does not dismiss it on these actions. In the examples above, the third dialog has a data-backdrop="static" attribute, indicating that the dialog remains open when clicked outside or when the "Escape" key is pressed. Default value is ""
