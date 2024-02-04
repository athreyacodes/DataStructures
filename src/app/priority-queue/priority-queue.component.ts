import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { empty } from 'rxjs';

export class PriorityQueueItem {
  name: string;
  priority: number;

  constructor(name: string, priority: number) {
    this.name = name;
    this.priority = priority;
  }
}

export class PriorityQueue {
  private storage: PriorityQueueItem[] = [];

  get items() {
    return this.storage;
  }

  get length() {
    return this.storage.length;
  }

  enqueue(item: PriorityQueueItem) {
    let added = false;
    if (this.storage.length !== 0) {
      this.storage.some((qItem, qIndex) => {
        if (qItem.priority > item.priority) { // considering 1 is highest pririty and 5 is lowest priority
          this.storage.splice(qIndex, 0, item);
          added = true
          return true;
        } 
        return false;
      });

      if (!added) {
        this.storage.push(item);
      }

    } else {
      this.storage.push(item);
    }

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
  selector: 'app-priority-queue',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './priority-queue.component.html',
  styleUrl: './priority-queue.component.scss'
})
export class PriorityQueueComponent {
  queue: PriorityQueue = new PriorityQueue();
  itemName!: string;
  itemPriority!: number | null;
  result: string = "";

  enqueue() {    
    if (!this.itemName) {
      this.result = "Please enter name";
      return;
    } 
    if (!this.itemPriority) {
      this.result = "Please enter priority";
      return;
    }

    this.queue.enqueue(new PriorityQueueItem(this.itemName, this.itemPriority));
    this.result = "'" + this.itemName + "' is added to the queue";
    this.itemName = "";
    this.itemPriority = null;
  }

  dequeue() {
    const next = this.queue.nextInQueue();
    if(next) {
      this.queue.dequeue();
      this.result = "Next in Queue('" + next.name + "') is removed the queue. Remaining " + this.queue.length + " items" ;
    } else {
      this.result = "Queue is empty";
    }
  }

  nextInQueue() {
    const next = this.queue.nextInQueue();
    if(next) {
      this.result = "Next in Queue is '" + next.name + "'";
    } else {
      this.result = "Queue is empty";
    }
  }
}
