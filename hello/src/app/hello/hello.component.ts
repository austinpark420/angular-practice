import { Component } from '@angular/core';


@Component({
  selector: 'app-hello',
  template: `
    <h2>안녕하세요 {{name}}</h2>
    <input type="text" placeholder="이름을 입력하세요" #inputYourName>
    <button (click)="setName(inputYourName.value)">등록</button>
  `,
  styles: [`
    h2 {
      color: #673ab7;
    }
    input[type = text] {
          width: 200px;
          height: 25px;
          padding-left: 10px;
          margin-top: 10px;
          border: solid 1px #ccc;
          border-radius: 4px;
          outline: none;
          box-sizing: border-box;
        }
    button {
          height: 25px;
          width: 40px;
          background-color: #fff;
          border: solid 1px #ccc;
          border-radius: 4px;
          outline: none;
          cursor: pointer;
          box-sizing: border-box;
          vertical-align: middle;
        }
    button: hover {
          background-color: #e6e6e6;
          border-color: #adadad;
        }
  `]
})
export class HelloComponent {
  name = '';
  setName(name: string) {
    this.name = name;
  }
}
