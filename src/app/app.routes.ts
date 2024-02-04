import { Routes } from '@angular/router';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { StackComponent } from './stack/stack.component';
import { SetComponent } from './set/set.component';
import { QueueComponent } from './queue/queue.component';
import { PriorityQueueComponent } from './priority-queue/priority-queue.component';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';

export const routes: Routes = [
    { path:"palindrome", component: PalindromeComponent },
    { path:"stack", component: StackComponent },
    { path:"set", component: SetComponent },
    { path:"queue", component: QueueComponent },
    { path:"priority-queue", component: PriorityQueueComponent },
    { path:"binary-tree", component: BinaryTreeComponent },
];
