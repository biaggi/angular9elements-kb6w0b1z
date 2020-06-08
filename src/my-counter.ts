import {
  Input,
  Component,
  ViewEncapsulation,
  ChangeDetectorRef,
} from "@angular/core";

@Component({
  selector: "my-counter",
  template: `
    <ng-template
      #ngForTemplateRef
      let-implicit
      let-arg1="arg1"
      let-arg2="arg2"
      let-arg3="arg3"
    >
      {{ implicit }} , {{ arg2 }}
      <span *ngFor="let item of arg3 | keyvalue">
        {{item.key}}
        {{item.value}}
      </span>
    </ng-template>

    <ng-template
      [ngTemplateOutlet]="ngForTemplateRef"
      [ngTemplateOutletContext]="{
			$implicit: implicit,
			arg2: 'applied-arg2',
			arg3: arg3
		}"
    >
    </ng-template>
  `,
  styles: [
    `
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 64px;
        height: 64px;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export default class MyCounter {
  implicit = "implicit argument";
  arg3 = { a: 1, b: 2 };
}
