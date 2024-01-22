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

- **data-target**: Bu özellik, bir olayın (örneğin, düğme tıklaması) meydana geldiğinde tetiklenmesi veya açılması gereken hedef diyalog öğesini belirtmek için kullanılır. İlgili düğmenin her birinde, `data-target` özelliği, açılacak diyalog öğesinin ID'sine karşılık gelen bir değer içerir.

- **data-toggle**: Bu özellik, belirtilen hedefle etkileşim kurulduğunda uygulanacak diyalog davranışını göstermek için kullanılır. İlgili öğe tetiklendiğinde (örneğin, tıklandığında), `data-target` özelliğinde belirtilen diyalogun görünürlüğünü açıp kapatır. Yukarıdaki örneklerde, her düğme, karşılık gelen diyalogun görünürlüğünü açıp kapatması gerektiğini belirten `data-toggle` özelliğine sahiptir.

- **data-keyboard**: Bu özellik, diyalogun klavye kullanılarak kapatılabilir olup olmadığını kontrol etmek için kullanılır. "false" olarak ayarlandığında, klavyedeki "Escape" tuşuyla diyalogun kapatılma özelliğini devre dışı bırakır. Yukarıdaki örneklerde, ikinci diyalog, `data-keyboard="false"` özelliğine sahiptir ve bu, diyalogun "Escape" tuşuyla kapatılamayacağını gösterir. Varsayılan değer "true" dur.

- **data-backdrop**: Bu özellik, diyalogun dışına tıklanarak veya "Escape" tuşuna basılarak meydana gelen davranışı kontrol eder. "static" olarak ayarlandığında, diyalogun dışına tıklanarak veya "Escape" tuşuna basılarak kapatılmasını önler. Diğer bir deyişle, bu eylemlerde diyalogu açık tutar ve kapatmaz. Yukarıdaki örneklerde, üçüncü diyalog, `data-backdrop="static"` özelliğine sahiptir ve bu, diyalogun dışına tıklanarak veya "Escape" tuşuyla kapatılmadığını gösterir. Varsayılan değer "" (boş) dur.
