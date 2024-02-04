import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class Stack {
  private count: number = 0;
  private storage: any = {};

  push(value: string) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return;
    }

    this.count--;
    const last = this.storage[this.count];
    delete this.storage[this.count];
    return last;
  }

  peek() {
    return this.storage[this.count-1];
  }

  size() {
    return this.count;
  }
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  stack: Stack = new Stack();
  item!: string;
  result: string = "";

  push() {
    if (!this.item) {
      this.result = "Please enter some data to push";
      return;
    }

    this.stack.push(this.item);
    this.result = "'" + this.item + "' is pushed to the stack";
    this.item = "";
  }

  pop() {
    const popped = this.stack.pop();
    this.result = popped ? "Last item in the stack("+popped+") is popped successfully." : "The stack is empty.";
  }

  peek() {
    const peeked = this.stack.peek();
    this.result = peeked ? "Last item in the stack is '" + peeked + "'" : "The stack is empty.";
  }

  size() {
    const size = this.stack.size();
    this.result = size? "There are " + this.stack.size() + " items in the stack" : "The stack is empty.";
  }
}

