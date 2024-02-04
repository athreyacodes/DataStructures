import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './set.component.html',
  styleUrl: './set.component.scss'
})
export class SetComponent {
  collections: any = {};
  name: string = "";
  item: string = "";
  result: string = "";

  selectedSet?: Set<string> | null;
  selectedSetName: string = "";

  union: Set<string> = new Set();
  intersection: Set<string> = new Set();
  difference: Set<string> = new Set();

  get collectionNames() {
    return Object.keys(this.collections);
  }

  // ---------------------------------------------------------SET------------------------------------------------------------
  createSet(name: string){
    if (!name) {
      this.result = "Please enter a name to create a Set.";
      return;
    }
    if (this.collections[name]) {
      this.result = "A set with that name already exists";
      return;
    }
    this.collections[name] = new Set<string>();
    this.result = "Successfully created set '" + name + "'";
    this.selectedSet = this.collections[name];
    this.selectedSetName = name;
    this.name = "";
    this.computeAll();
  }

  deleteSet(name: string) {
    if (!this.collections[name]) {
      this.result = "A set with that name does not exist";
      return;
    }
    delete this.collections[name];
    this.result = "Successfully deleted set '" + name + "'";
    this.selectedSet = null;
    this.selectedSetName = "";
    this.name = "";
    this.computeAll();
  }

  selectSet(name: string) {
    if (!name || !this.collections[name]) {
      this.result = "A set with that name does not exist";
      this.selectedSetName = "";
      return;
    }

    this.result = "Selected Set: " + name;
    this.selectedSet = this.collections[name];
    this.selectedSetName = name;
  }

  // ----------------------------------------------------------ITEMS-----------------------------------------------------------
  add() {
    if (!this.selectedSet) {
      this.result = "Please add/select a set.";
      return;
    }

    if (!this.item) {
      this.result = "Please enter data to add it to the Set.";
      return;
    }

    if (this.selectedSet.has(this.item)) {
      this.result = "The Set already has '" + this.item + "'";
      return;
    }

    this.selectedSet.add(this.item);
    this.result = "'" + this.item + "' is added to the Set";
    this.item = "";
    this.computeAll();
  }

  delete() {
    if (!this.selectedSet) {
      this.result = "Please add/select a set.";
      return;
    }

    if (!this.selectedSet.size) {
      this.result = "The Set is empty.";
      return;
    }

    if (!this.item) {
      this.result = "Please enter data to remove it from the Set.";
      return;
    }

    if (!this.selectedSet.has(this.item)) {
      this.result = "The Set does not contain '" + this.item + "'";
      return;
    }
    this.selectedSet.delete(this.item);
    this.result = "'" + this.item + "' is removed to the Set";
    this.item = "";
    this.computeAll();
  }

  size() {
    if (!this.selectedSet) {
      this.result = "Please add/select a set.";
      return;
    }
    this.result = this.selectedSet.size? "There are " + this.selectedSet.size + " items in the Set" : "The Set is empty.";
  }


  computeAll() {
    this.computeUnion();
    this.computeIntersection();
    this.computeDifference();
  }
  // -------------------------------------------------------------UNION--------------------------------------------------------
  computeUnion() {
    this.union.clear();
    this.collectionNames.forEach(name => {
      this.collections[name].forEach((item: any) => {
        this.union.add(item);
      });
    });
  }

  // -------------------------------------------------------------Intersection--------------------------------------------------------
  computeIntersection() {
    this.intersection = new Set(this.collections[this.collectionNames[0]]); // assign first set

    // loop from second item
    this.collectionNames.slice(1).forEach(name => {
      this.intersection.forEach(item => {
        if (!this.collections[name].has(item)) {
          this.intersection.delete(item);
        }
      });
    });
  }

  // -------------------------------------------------------------Difference--------------------------------------------------------
  computeDifference() {
    const verifiedItems = new Set(this.collections[this.collectionNames[0]]); // assign first set
    this.difference = new Set(this.collections[this.collectionNames[0]]); // assign first set

    // loop from second item
    this.collectionNames.slice(1).forEach(name => {
      this.collections[name].forEach((item: any) => {
        if (this.difference.has(item)) {
          this.difference.delete(item);
        } else if(!verifiedItems.has(item)) {
          this.difference.add(item);
        }
        verifiedItems.add(item);
      });
    });
  }
}
