import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-self-development',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="self-development-section">
      <div class="container">
        <div class="section-title">
          <h2>Саморазвитие</h2>
          <p class="section-subtitle">Направления самостоятельного обучения и профессионального роста</p>
        </div>
        
        <div class="development-areas">
          <div class="development-grid grid-2">
            <div class="development-card card" *ngFor="let area of developmentAreas">
              <div class="development-header">
                <div class="development-icon">{{area.icon}}</div>
                <h3 class="development-title">{{area.category}}</h3>
              </div>
              
              <div class="development-description">
                <p>{{area.description}}</p>
              </div>
              
              <div class="development-progress">
                <div class="progress-info">
                  <span class="progress-label">Прогресс:</span>
                  <span class="progress-value">{{area.progress}}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" [style.width.%]="area.progress"></div>
                </div>
              </div>
              
              <div class="development-skills">
                <h4>Осваиваемые навыки:</h4>
                <div class="skills-list">
                  <span class="skill-tag" *ngFor="let skill of area.skills">{{skill}}</span>
                </div>
              </div>
              
              <div class="development-next" *ngIf="area.nextSteps">
                <h4>Следующие шаги:</h4>
                <ul>
                  <li *ngFor="let step of area.nextSteps">{{step}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="development-summary card">
          <h3>Общий прогресс саморазвития</h3>
          <div class="summary-stats">
            <div class="stat">
              <div class="stat-value">{{averageProgress}}%</div>
              <div class="stat-label">Средний прогресс</div>
            </div>
            <div class="stat">
              <div class="stat-value">{{totalSkills}}</div>
              <div class="stat-label">Навыков</div>
            </div>
            <div class="stat">
              <div class="stat-value">{{developmentAreas.length}}</div>
              <div class="stat-label">Направления</div>
            </div>
            <div class="stat">
              <div class="stat-value">2027</div>
              <div class="stat-label">Цель до</div>
            </div>
          </div>
          
          <div class="summary-goals">
            <h4>Ключевые цели на 2025-2026:</h4>
            <ul>
              <li>Завершить обучение по специальности "Информационные системы и программирование"</li>
              <li>Освоить Angular на профессиональном уровне</li>
              <li>Разработать и запустить собственный веб-проект</li>
              <li>Изучить основы back-end разработки</li>
              <li>Подготовиться к трудоустройству по специальности</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .self-development-section {
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

    .development-areas {
      margin-bottom: 40px;
    }

    .development-grid {
      display: grid;
      gap: 24px;
    }

    .grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }

    .development-card {
      background-color: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .development-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .development-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    .development-icon {
      font-size: 2.5rem;
      flex-shrink: 0;
    }

    .development-title {
      color: #4a2a8c;
      margin: 0;
      font-size: 1.3rem;
    }

    .development-description {
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .development-description p {
      color: #666;
      line-height: 1.6;
    }

    .development-progress {
      margin-bottom: 20px;
    }

    .progress-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .progress-label {
      font-weight: 600;
      color: #333;
    }

    .progress-value {
      font-weight: 700;
      color: #5d34af;
    }

    .progress-bar {
      height: 10px;
      background-color: #e0e0e0;
      border-radius: 5px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background-color: #5d34af;
      border-radius: 5px;
      transition: width 0.5s ease;
    }

    .development-skills {
      margin-bottom: 20px;
    }

    .development-skills h4 {
      color: #4a2a8c;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-tag {
      background-color: #f0e6ff;
      color: #5d34af;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .development-next h4 {
      color: #4a2a8c;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }

    .development-next ul {
      padding-left: 20px;
      margin: 0;
    }

    .development-next li {
      margin-bottom: 8px;
      color: #666;
      font-size: 0.9rem;
    }

    .development-summary {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      padding: 30px;
      border-radius: 12px;
    }

    .development-summary h3 {
      text-align: center;
      color: #4a2a8c;
      margin-bottom: 30px;
    }

    .summary-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 40px;
    }

    .stat {
      text-align: center;
      padding: 20px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .stat-value {
      font-size: 2.5rem;
      font-weight: 700;
      color: #5d34af;
      margin-bottom: 5px;
      line-height: 1;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #666;
      font-weight: 500;
    }

    .summary-goals h4 {
      color: #4a2a8c;
      margin-bottom: 20px;
      text-align: center;
      font-size: 1.2rem;
    }

    .summary-goals ul {
      padding-left: 20px;
      margin: 0;
      max-width: 800px;
      margin: 0 auto;
    }

    .summary-goals li {
      margin-bottom: 15px;
      color: #666;
      line-height: 1.6;
    }

    @media (max-width: 992px) {
      .summary-stats {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .grid-2 {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .self-development-section {
        padding: 60px 0;
      }
      
      .summary-stats {
        grid-template-columns: 1fr;
      }
      
      .development-header {
        flex-direction: column;
        text-align: center;
        gap: 10px;
      }
    }
  `]
})
export class SelfDevelopmentComponent {
  developmentAreas = [
    {
      category: 'Frontend разработка',
      skills: ['HTML/CSS', 'JavaScript', 'Angular', 'TypeScript', 'Responsive Design'],
      progress: 75,
      icon: '🎨',
      description: 'Создание пользовательских интерфейсов и веб-приложений',
      nextSteps: [
        'Изучить Angular на продвинутом уровне',
        'Освоить React для расширения возможностей',
        'Изучить основы UX/UI дизайна'
      ]
    },
    {
      category: 'Программирование на Python',
      skills: ['Основы Python', 'ООП', 'Работа с данными', 'Автоматизация'],
      progress: 65,
      icon: '🐍',
      description: 'Разработка скриптов и приложений на Python',
      nextSteps: [
        'Разработать собственный проект на Python',
        'Изучить фреймворки Django или Flask',
        'Практиковать решение задач на LeetCode'
      ]
    },
    {
      category: 'Квалификация',
      skills: ['Информационные системы', 'Программирование', 'Базы данных', 'Проектирование'],
      progress: 80,
      icon: '📜',
      description: 'Профессиональные навыки по специальности',
      nextSteps: [
        'Подготовиться к экзаменам по специальности',
        'Пройти дополнительные профессиональные курсы',
        'Изучить смежные области: DevOps, тестирование'
      ]
    },
    {
      category: 'Дополнительные направления',
      skills: ['DevOps основы', 'Информационная безопасность', 'Проектный менеджмент', 'Английский язык'],
      progress: 50,
      icon: '🚀',
      description: 'Смежные области для профессионального роста',
      nextSteps: [
        'Изучить основы Docker и CI/CD',
        'Пройти курс по информационной безопасности',
        'Улучшить уровень английского до B2'
      ]
    }
  ];

  get averageProgress(): number {
    const total = this.developmentAreas.reduce((sum, area) => sum + area.progress, 0);
    return Math.round(total / this.developmentAreas.length);
  }

  get totalSkills(): number {
    return this.developmentAreas.reduce((sum, area) => sum + area.skills.length, 0);
  }
}