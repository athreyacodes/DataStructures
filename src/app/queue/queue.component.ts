import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class Queue {
  private storage: string[] = [];

  get items() {
    return this.storage;
  }

  get length() {
    return this.storage.length;
  }

  enqueue(value: string) {
    this.storage.push(value);
  }

  dequeue() {
    if (this.storage.length === 0) {
      return;
    }
    
    return this.storage.shift();
  }

  nextInQueue() {
    return this.storage.length ? this.storage[0] : null;
  }

}

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.scss'
})
export class QueueComponent {
  queue: Queue = new Queue();
  item!: string;
  result: string = "";

  enqueue() {    
    if (!this.item) {
      this.result = "Please enter some data to push";
      return;
    }

    this.queue.enqueue(this.item);
    this.result = "'" + this.item + "' is added to the queue";
    this.item = "";
  }

  dequeue() {
    const next = this.queue.nextInQueue();
    if(next) {
      this.queue.dequeue();
      this.result = "Next in Queue('" + next + "') is removed the queue. Remaining " + this.queue.length + " items" ;
    } else {
      this.result = "Queue is empty";
    }
  }

  nextInQueue() {
    const next = this.queue.nextInQueue();
    if(next) {
      this.result = "Next in Queue is '" + next + "'";
    } else {
      this.result = "Queue is empty";
    }
  }

}
