import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <div class="footer-logo">
              <span class="logo-text">А.Л.</span>
              <span class="logo-subtitle">Резюме</span>
            </div>
            
            <div class="footer-text">
              <p>© {{currentYear}} Лобанова Анастасия, {{institution}}</p>
              <p>Год окончания обучения: {{graduationYear}}</p>
            </div>
          </div>
          
          <div class="footer-links">
            <h4>Быстрые ссылки</h4>
            <ul class="footer-nav">
              <li><a (click)="scrollToSection('home')">Главная</a></li>
              <li><a (click)="scrollToSection('courses')">Курсы</a></li>
              <li><a (click)="scrollToSection('projects')">Проекты</a></li>
              <li><a (click)="scrollToSection('practice')">Практика</a></li>
              <li><a (click)="scrollToSection('self-development')">Саморазвитие</a></li>
              <li><a (click)="scrollToSection('about')">Обо мне</a></li>
            </ul>
          </div>
          
          <div class="footer-social">
            <h4>Контакты</h4>
            <div class="social-links">
              <a href="https://github.com/lobanovanas208-del" target="_blank" class="social-link">
                <span class="social-icon">🐙</span>
                <span class="social-text">GitHub</span>
              </a>
              <a href="https://t.me/wuixsom" target="_blank" class="social-link">
                <span class="social-icon">✈️</span>
                <span class="social-text">Telegram</span>
              </a>
              <a href="https://www.yougile.com/board/whnjldqkupcw" target="_blank" class="social-link">
                <span class="social-icon">📋</span>
                <span class="social-text">YouGile</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>Сайт разработан с использованием Angular • Адаптивный дизайн • {{currentYear}}</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #4a2a8c;
      color: white;
      padding: 60px 0 30px;
      margin-top: auto;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-text {
      font-weight: 700;
      font-size: 2rem;
      background-color: rgba(255, 255, 255, 0.1);
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    .logo-subtitle {
      font-size: 1.2rem;
      color: #f0e6ff;
      font-weight: 500;
    }

    .footer-text p {
      color: #f0e6ff;
      margin-bottom: 10px;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .footer-links h4,
    .footer-social h4 {
      color: white;
      margin-bottom: 20px;
      font-size: 1.2rem;
      position: relative;
      padding-bottom: 10px;
    }

    .footer-links h4::after,
    .footer-social h4::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: #7a52d4;
      border-radius: 2px;
    }

    .footer-nav {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-nav li a {
      color: #f0e6ff;
      text-decoration: none;
      transition: color 0.3s;
      cursor: pointer;
      font-size: 0.95rem;
    }

    .footer-nav li a:hover {
      color: white;
      padding-left: 5px;
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #f0e6ff;
      text-decoration: none;
      transition: all 0.3s;
      padding: 10px 15px;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
    }

    .social-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      transform: translateX(5px);
    }

    .social-icon {
      font-size: 1.2rem;
      width: 24px;
      text-align: center;
    }

    .social-text {
      font-size: 0.95rem;
    }

    .footer-bottom {
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .footer-bottom p {
      color: #f0e6ff;
      font-size: 0.9rem;
      margin: 0;
    }

    @media (max-width: 992px) {
      .footer-content {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .footer-info {
        grid-column: span 2;
        text-align: center;
        align-items: center;
      }
    }

    @media (max-width: 768px) {
      .footer {
        padding: 40px 0 20px;
      }
      
      .footer-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }
      
      .footer-info {
        grid-column: span 1;
      }
      
      .footer-links,
      .footer-social {
        text-align: center;
      }
      
      .footer-links h4::after,
      .footer-social h4::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    @media (max-width: 480px) {
      .footer-logo {
        flex-direction: column;
        text-align: center;
        gap: 5px;
      }
      
      .social-link {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  graduationYear = 2027;
  
  institution = 'ГБПОУ МО «Люберецкий техникум имени Ю.А. Гагарина»';
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}