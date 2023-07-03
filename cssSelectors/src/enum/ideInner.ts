export const enum IdeInner {
  one = `
    &lt;div class="table"&gt
    <div>
      &lt;my-bento /&gt;
    </div>
    <div>
      &lt;my-plate /&gt;
    </div>
    <div>
      &lt;my-apple /&gt;
    </div>
    <div>
      &lt;my-plate /&gt;
    </div>
    <div>
      &lt;my-bento /&gt;
    </div>
    &lt;/div&gt
  `,
  two = `
    &lt;div class="table"&gt
    <div>
      &lt;my-orange /&gt;
    </div>
    <div>
      &lt;my-bento /&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-apple /&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-orange /&gt;
    </div>
    <div>
      &lt;my-bento /&gt;
    </div>
    &lt;/div&gt
  `,
  three = `
    &lt;div class="table"&gt
    <div>
      &lt;my-bento /&gt;
    </div>
    <div>
      &lt;my-plate id="elegant" /&gt;
    </div>
    <div>
      &lt;my-plate /&gt;
    </div>
    <div>
      &lt;my-plate id="elegant" /&gt;
    </div>
    <div>
      &lt;my-bento /&gt;
    </div>
    &lt;/div&gt
  `,
  four = `
    &lt;div class="table"&gt
    <div>
      &lt;my-bento /&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-apple /&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-orange /&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    &lt;/div&gt
  `,
  five = `
    &lt;div class="table"&gt
    <div>
      &lt;my-apple /&gt;
    </div>
    <div>
      &lt;my-bento&gt;
      <div>
        &lt;my-orange /&gt;
      </div>
      &lt;/my-bento&gt;
    </div>
    <div>
      &lt;my-plate id="elegant"&gt;
        <div>
          &lt;my-pickle /&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-pickle /&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    &lt;/div&gt
    `,
  six = `
    &lt;div class="table"&gt
    <div>
      &lt;my-apple /&gt;
    </div>
    <div>
      &lt;my-apple class="small"/&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-apple class="small"/&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-plate /&gt;
    </div>
    <div>
      &lt;my-apple class="small"/&gt;
    </div>
    &lt;/div&gt
  `,
  seven = `
    &lt;div class="table"&gt
    <div>
      &lt;my-apple /&gt;
    </div>
    <div>
      &lt;my-apple class="small"/&gt;
    </div>
    <div>
      &lt;my-bento&gt;
        <div>
          &lt;my-orange class="small"/&gt;
        </div>
      &lt;/my-bento&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-orange /&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-orange class="small"/&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-apple class="small"/&gt;
    </div>
    &lt;/div&gt
  `,
  eight = `
    &lt;div class="table"&gt
    <div>
      &lt;my-bento&gt;
        <div>
          &lt;my-orange/&gt;
        </div>
      &lt;/my-bento&gt;
    </div>
    <div>
      &lt;my-orange class="small"/&gt;
    </div>
    <div>
      &lt;my-bento&gt;
        <div>
          &lt;my-orange class="small"/&gt;
        </div>
      &lt;/my-bento&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-apple class="small"/&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-bento&gt;
        <div>
          &lt;my-orange class="small"/&gt;
        </div>
      &lt;/my-bento&gt;
    </div>
    &lt;/div&gt
  `,
  nine = `
    &lt;div class="table"&gt
    <div>
      &lt;my-pickle /&gt;
    </div>
    <div>
      &lt;my-apple /&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-pickle /&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-bento&gt;
        <div>
          &lt;my-pickle /&gt;
        </div>
      &lt;/my-bento&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-pickle /&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-apple /&gt;
    </div>
    <div>
      &lt;my-pickle /&gt;
    </div>
    &lt;/div&gt
  `,
  ten = `
    &lt;div class="table"&gt
    <div>
      &lt;my-apple /&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-orange class="small"/&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-bento /&gt;
    </div>
    <div>
      &lt;my-bento&gt;
        <div>
          &lt;my-orange /&gt;
        </div>
      &lt;/my-bento&gt;
    </div>
    <div>
      &lt;my-plate id="elegant"/&gt;
    </div>
    <div>
      &lt;my-pickle /&gt;
    </div>
    &lt;/div&gt
  `,
  eleven = `
    &lt;div class="table"&gt
    <div>
      &lt;my-pickle /&gt;
    </div>
    <div>
      &lt;my-plate id="elegant"&gt;
        <div>
          &lt;my-orange class="small"/&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-plate id="elegant"&gt;
        <div>
          &lt;my-pickle /&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-apple /&gt;
    </div>
    <div>
      &lt;my-plate&gt;
        <div>
          &lt;my-apple /&gt;
        </div>
      &lt;/my-plate&gt;
    </div>
    <div>
      &lt;my-bento id="elegant"&gt;
        <div>
          &lt;my-orange class="small"/&gt;
        </div>
      &lt;/my-bento&gt;
    </div>
    &lt;/div&gt
  `,
  twelve = `
    &lt;div class="table"&gt
    <div>
      &lt;my-bento&gt;
        <div>
          &lt;my-pickle/&gt;
        </div>
      &lt;/my-bento&gt;
    </div>
    <div>
      &lt;my-plate /&gt;
    </div>
    <div>
      &lt;my-apple class="small" /&gt;
    </div>
    <div>
      &lt;my-plate /&gt;
    </div>
    <div>
      &lt;my-apple /&gt;
    </div>
    <div>
      &lt;my-apple class="small" /&gt;
    </div>
    <div>
      &lt;my-pickle /&gt;
    </div>
    &lt;/div&gt
  `,
}
