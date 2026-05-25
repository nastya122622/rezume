import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="courses-section">
      <div class="container">
        <div class="section-title">
          <h2>Курсы и сертификаты</h2>
          <p class="section-subtitle">Образовательные программы, которые я прошла для развития профессиональных навыков</p>
        </div>
        
        <div class="courses-grid grid-3">
          <div class="course-card card" *ngFor="let course of courses">
            <div class="course-header">
              <h3 class="course-title">{{course.title}}</h3>
              <div class="course-platform">{{course.platform}} • {{course.year}}</div>
            </div>
            
            <div class="course-description">
              <p>{{course.description}}</p>
            </div>
            
            <div class="course-skills">
              <div class="skill-tag" *ngFor="let skill of course.skills">{{skill}}</div>
            </div>
            
            <div class="course-actions">
              <a [href]="course.certificateImage" target="_blank" class="btn btn-outline">
                Посмотреть сертификат
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .courses-section {
      padding: 80px 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .section-title {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-title h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #4a2a8c;
      position: relative;
      padding-bottom: 10px;
    }

    .section-title h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background-color: #5d34af;
      border-radius: 2px;
    }

    .section-subtitle {
      text-align: center;
      color: #666;
      max-width: 700px;
      margin: 0 auto 50px;
      font-size: 1.1rem;
    }

    .courses-grid {
      display: grid;
      gap: 24px;
      margin-bottom: 40px;
    }

    .grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }

    .course-card {
      background-color: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .course-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .course-header {
      margin-bottom: 15px;
    }

    .course-title {
      font-size: 1.3rem;
      margin-bottom: 8px;
      color: #4a2a8c;
      line-height: 1.3;
    }

    .course-platform {
      font-size: 0.9rem;
      color: #5d34af;
      font-weight: 500;
    }

    .course-description {
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .course-description p {
      color: #666;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .course-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }

    .skill-tag {
      background-color: #f0e6ff;
      color: #5d34af;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .course-actions {
      margin-top: auto;
    }

    .btn-outline {
      background-color: transparent;
      border: 2px solid #5d34af;
      color: #5d34af;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
      text-align: center;
      width: 100%;
    }

    .btn-outline:hover {
      background-color: #5d34af;
      color: white;
    }

    @media (max-width: 992px) {
      .grid-3 {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .courses-section {
        padding: 60px 0;
      }
      
      .grid-3 {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .course-title {
        font-size: 1.2rem;
      }
    }
  `]
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      title: 'Промпт-инжиниринг и создание приложений на основе LLM',
      platform: 'СберУниверситет',
      description: 'Изучение принципов промпт-инжиниринга, работа с LLM моделями, создание приложений с использованием GigaChain и RAG технологий.',
      skills: ['Промпт-инжиниринг', 'Работа с LLM', 'RAG', 'GigaChain'],
      certificateImage: 'https://github.com/lobanovanas208-del/portfolio-certificates/blob/main/1%D1%81%D0%B1%D0%B5%D1%80.png?raw=true',
      year: 2024
    },
    {
      id: 2,
      title: 'Цифровые инструменты и финансовая грамотность',
      platform: 'СберУниверситет',
      description: 'Освоение цифровых инструментов для управления финансами и повышения личной эффективности.',
      skills: ['Финансовая грамотность', 'Цифровые инструменты', 'Управление бюджетом'],
      certificateImage: 'https://github.com/lobanovanas208-del/portfolio-certificates/blob/main/2%D1%81%D0%B1%D0%B5%D1%80.png?raw=true',
      year: 2024
    },
    {
      id: 3,
      title: 'Курс по навыкам ведения переговоров',
      platform: 'СберУниверситет',
      description: 'Развитие навыков эффективной коммуникации и ведения переговоров в профессиональной среде.',
      skills: ['Ведение переговоров', 'Коммуникативные навыки', 'Публичные выступления'],
      certificateImage: 'https://github.com/lobanovanas208-del/portfolio-certificates/blob/main/3%D1%81%D0%B1%D0%B5%D1%80.png?raw=true',
      year: 2024
    },
    {
      id: 4,
      title: 'Основы 1С:Предприятие 8',
      platform: 'Интерактивные курсы',
      description: 'Изучение платформы 1С:Предприятие 8 для разработки бизнес-приложений.',
      skills: ['1С:Предприятие 8', 'Конфигурация', 'Разработка бизнес-приложений'],
      certificateImage: 'https://github.com/lobanovanas208-del/portfolio-certificates/blob/main/image.png?raw=true',
      year: 2024
    },
    {
      id: 5,
      title: 'Введение в IT',
      platform: 'Образовательная платформа',
      description: 'Базовый курс, знакомящий с основными понятиями и направлениями в информационных технологиях.',
      skills: ['Основы IT', 'Информационные системы', 'Основы программирования'],
      certificateImage: 'https://github.com/lobanovanas208-del/portfolio-certificates/blob/main/%D0%A1%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%20-%20%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20IT.png?raw=true',
      year: 2023
    },
    {
      id: 6,
      title: 'Новые медиа: SMM и digital-маркетинг',
      platform: 'Образовательная платформа',
      description: 'Изучение современных инструментов digital-маркетинга и SMM для продвижения в социальных сетях.',
      skills: ['SMM', 'Digital-маркетинг', 'Социальные сети', 'Контент-стратегия'],
      certificateImage: 'https://github.com/lobanovanas208-del/portfolio-certificates/blob/main/%D0%A1%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%20-%20%D0%9D%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BC%D0%B5%D0%B4%D0%B8%D0%B0_%20SMM%20%D0%B8%20digital-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3.png?raw=true',
      year: 2023
    }
  ];
}