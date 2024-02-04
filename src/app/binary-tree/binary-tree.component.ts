import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BinaryTree } from './models';
import { TreeComponent } from './tree/tree.component';

@Component({
  selector: 'app-binary-tree',
  standalone: true,
  imports: [CommonModule, FormsModule, TreeComponent],
  templateUrl: './binary-tree.component.html',
  styleUrl: './binary-tree.component.scss'
})
export class BinaryTreeComponent {
  binaryTree: BinaryTree = new BinaryTree();
  item: number | null = null;
  result: string = "";
  nodePrefix: string = "node";

  addItemToTree() {
    if (!this.item) {
      this.result = "Please enter a number to add to the binary tree";
      return;
    }

    this.binaryTree.add(this.item);

    this.result = "'" + this.item + "' is added to the queue";
    this.item = null;
  }
}



