import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">Лобанова Анастасия Витальевна</h1>
            <h2 class="hero-subtitle">Студент-разработчик: Информационные системы и программирование</h2>
            
            <div class="hero-description">
              <p>Создаю функциональные веб-приложения с акцентом на удобство пользователей. Учусь быстро и решаю нетривиальные задачи.</p>
            </div>
            
            <div class="hero-cta">
              <button class="btn btn-primary" (click)="onCtaClick()">
                Смотреть проекты
              </button>
            </div>
            
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number">5+</span>
                <span class="stat-label">Завершённых курсов</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">3+</span>
                <span class="stat-label">Проекта</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">2</span>
                <span class="stat-label">Языка программирования</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">2027</span>
                <span class="stat-label">Год выпуска</span>
              </div>
            </div>
          </div>
          
          <div class="hero-image">
            <div class="image-placeholder">
              <div class="code-snippet">
                <pre><code>// Моя философия разработки
function createSolution(problem) {{
  const analysis = understand(problem);
  const design = planArchitecture(analysis);
  const implementation = codeWithCare(design);
  return testAndRefine(implementation);
}}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      padding: 60px 0;
      background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .hero-content {
      display: flex;
      align-items: center;
      gap: 60px;
      flex-wrap: wrap;
    }

    .hero-text {
      flex: 1;
      min-width: 300px;
    }

    .hero-title {
      font-size: 2.8rem;
      margin-bottom: 15px;
      color: #4a2a8c;
    }

    .hero-subtitle {
      font-size: 1.4rem;
      margin-bottom: 25px;
      color: #5d34af;
      font-weight: 500;
    }

    .hero-description {
      margin-bottom: 35px;
      max-width: 600px;
    }

    .hero-description p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #666;
    }

    .hero-cta {
      margin-bottom: 40px;
    }

    .btn {
      display: inline-block;
      padding: 14px 32px;
      background-color: #5d34af;
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .btn:hover {
      background-color: #4a2a8c;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      color: white;
    }

    .hero-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: #5d34af;
      line-height: 1;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #666;
      margin-top: 5px;
      max-width: 120px;
    }

    .hero-image {
      flex: 1;
      min-width: 300px;
    }

    .image-placeholder {
      background-color: #4a2a8c;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 12px 30px rgba(93, 52, 175, 0.2);
      overflow: hidden;
      position: relative;
    }

    .image-placeholder::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #5d34af, #ff6b6b);
    }

    .code-snippet {
      color: #f0e6ff;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .code-snippet pre {
      margin: 0;
      overflow-x: auto;
    }

    @media (max-width: 992px) {
      .hero-content {
        gap: 40px;
      }
      
      .hero-title {
        font-size: 2.4rem;
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
      }
      
      .stat-number {
        font-size: 2.2rem;
      }
    }

    @media (max-width: 768px) {
      .hero-content {
        flex-direction: column;
        text-align: center;
      }
      
      .hero-title {
        font-size: 2.2rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
      
      .hero-description {
        margin-left: auto;
        margin-right: auto;
      }
      
      .hero-stats {
        justify-content: center;
      }
      
      .stat-item {
        align-items: center;
      }
      
      .stat-label {
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.9rem;
      }
      
      .hero-subtitle {
        font-size: 1rem;
      }
      
      .hero-description p {
        font-size: 1rem;
      }
      
      .stat-number {
        font-size: 1.9rem;
      }
      
      .hero-stats {
        gap: 20px;
      }
    }
  `]
})
export class HeroComponent {
  @Output() ctaClick = new EventEmitter<void>();
  
  onCtaClick() {
    this.ctaClick.emit();
  }
}