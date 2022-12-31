import { Component } from '@angular/core';
import { NewsService } from '../servicios/news.service';
import { News } from '../interfaz/news';



@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
  title = 'Latest News';
  news:News[] = [
    {
      title: 'Lionel Messi, becomes the best in the world',
      description: 'Argentina overcomes France at the FIFA World Cup Finals and Messi finally wins his first world cup trophy.',
      image: '../../assets/img/news3.jpeg',
      date: '2022-12-18',
      author: 'Kike G.',
      credits: '@Haku35411',
      link_credits: 'twitter.com/haku35411',
    },
    {
      title: 'Argentina wins the FIFA World Cup at Qatar',
      description: 'In an agonizing penalty shootout, Argentina overcomes France and becomes champions after 36 years.',
      image: '../../assets/img/news2.jpeg',
      date: '2022-12-18',
      author: 'Kike G.',
      credits: '@Argentina',
      link_credits: 'twitter.com/argentina',
    },
    {
      title: 'Argentina vs. France, who will take the trophy home?',
      description: 'At FIFA World Cup Finals, this two monsters of teams clash at each other. Who will win and who will lose?.',
      image: '../../assets/img/news1.jpeg',
      date: '2022-12-17',
      author: 'Tite B.',
      credits: '@fifaworldcup_es',
      link_credits: 'twitter.com/fifaworldcup_es',
    },
  ];
  constructor(private newsService: NewsService){
    this.news = this.news;
  }
}
