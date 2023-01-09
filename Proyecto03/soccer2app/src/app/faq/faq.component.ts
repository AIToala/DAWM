import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  title = 'Frequently Asked Questions';
  questions: any[] = [{
    question: "What is Football2 app?",
    answer: "Football2 is an app for every person that would love to have football news at all times. You can find the latest news, scores, and standings of your favorite teams."
  },{
    question: "How do I use Football2 app?",
    answer: "To use Football2 app, you just install it on your phone and you can start using it."
  },{
    question: "Can I use Football2 app on my computer?",
    answer: "We still don't have a version for computers, but we are working on it."
  },{
    question: "When will you have a version for computers?",
    answer: "It will be available in the next few months."
  }]
}
