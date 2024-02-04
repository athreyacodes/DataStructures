import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindrome',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './palindrome.component.html',
  styleUrl: './palindrome.component.scss'
})
export class PalindromeComponent {
  word!: string;
  isPalindrome!: boolean;

  checkPalindrome() {
    const reveresed = (this.word || "").split("").reverse().join("");
    this.isPalindrome = this.word === reveresed;
  }
}
