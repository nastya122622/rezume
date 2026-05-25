import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-section">
      <div class="container">
        <div class="section-title">
          <h2>Обо мне</h2>
          <p class="section-subtitle">Профессиональная биография, навыки и контактная информация</p>
        </div>
        
        <div class="about-content">
          <div class="about-bio card">
            <div class="bio-header">
              <h3>Профессиональная биография</h3>
            </div>
            
            <div class="bio-content">
              <div class="bio-text">
                <p>Студентка техникума, увлеченная созданием современных и функциональных веб-приложений. Стремлюсь к постоянному развитию в сфере информационных технологий и применению полученных знаний на практике.</p>
                
                <div class="bio-details">
                  <div class="detail-item">
                    <span class="detail-label">ФИО:</span>
                    <span class="detail-value">Лобанова Анастасия Витальевна</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Учебное заведение:</span>
                    <span class="detail-value">ГБПОУ МО «Люберецкий техникум имени Ю.А. Гагарина»</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Специальность:</span>
                    <span class="detail-value">09.02.07 «Информационные системы и программирование»</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Год окончания:</span>
                    <span class="detail-value">2027</span>
                  </div>
                </div>
                
                <div class="bio-interests">
                  <h4>Профессиональные интересы:</h4>
                  <div class="interests-list">
                    <span class="interest-tag">Frontend разработка</span>
                    <span class="interest-tag">Создание веб-сайтов</span>
                    <span class="interest-tag">UI/UX дизайн</span>
                    <span class="interest-tag">Разработка пользовательских интерфейсов</span>
                  </div>
                </div>
              </div>
              
              <div class="bio-links">
                <h4>Контакты и ссылки:</h4>
                <div class="links-grid">
                  <a href="https://github.com/lobanovanas208-del" target="_blank" class="link-card">
                    <div class="link-icon">🐙</div>
                    <div class="link-content">
                      <div class="link-title">GitHub</div>
                      <div class="link-url">lobanovanas208-del</div>
                    </div>
                  </a>
                  
                  <a href="https://www.yougile.com/board/whnjldqkupcw" target="_blank" class="link-card">
                    <div class="link-icon">📋</div>
                    <div class="link-content">
                      <div class="link-title">YouGile Projects</div>
                      <div class="link-url">Мои проекты</div>
                    </div>
                  </a>
                  
                  <a href="https://t.me/wuixsom" target="_blank" class="link-card">
                    <div class="link-icon">✈️</div>
                    <div class="link-content">
                      <div class="link-title">Telegram</div>
                      <div class="link-url">@wuixsom</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-skills card">
            <div class="skills-header">
              <h3>Навыки и технологии</h3>
            </div>
            
            <div class="skills-content">
              <div class="skills-categories">
                <div class="category" *ngFor="let category of skillCategories">
                  <h4 class="category-title">{{category.name}}</h4>
                  <div class="skills-list">
                    <div class="skill-item" *ngFor="let skill of getSkillsByCategory(category.name)">
                      <div class="skill-info">
                        <span class="skill-name">{{skill.name}}</span>
                        <span class="skill-level">{{skill.level}}%</span>
                      </div>
                      <div class="skill-progress">
                        <div class="progress-bar">
                          <div class="progress-fill" 
                               [style.width.%]="skill.level"
                               [class]="getLevelClass(skill.level)"></div>
                        </div>
                        <div class="skill-level-label {{getLevelClass(skill.level)}}">
                          {{getLevelLabel(skill.level)}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-future card">
            <h3>Планы на будущее</h3>
            <div class="future-content">
              <div class="future-goal">
                <div class="goal-icon">🎓</div>
                <div class="goal-content">
                  <h4>Завершить обучение</h4>
                  <p>Успешно завершить обучение в техникуме по специальности "Информационные системы и программирование" к 2026 году</p>
                </div>
              </div>
              
              <div class="future-goal">
                <div class="goal-icon">💼</div>
                <div class="goal-content">
                  <h4>Найти работу по специальности</h4>
                  <p>Трудоустроиться в IT-компанию на позицию frontend-разработчика или смежную должность</p>
                </div>
              </div>
              
              <div class="future-goal">
                <div class="goal-icon">🚀</div>
                <div class="goal-content">
                  <h4>Развивать профессиональные навыки</h4>
                  <p>Продолжать изучение современных технологий и фреймворков для веб-разработки</p>
                </div>
              </div>
              
              <div class="future-goal">
                <div class="goal-icon">🌐</div>
                <div class="goal-content">
                  <h4>Создать собственный проект</h4>
                  <p>Разработать и запустить полноценное веб-приложение от идеи до реализации</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-section {
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

    .about-content {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .about-bio {
      background-color: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .bio-header {
      margin-bottom: 25px;
      padding-bottom: 15px;
      border-bottom: 2px solid #f0e6ff;
    }

    .bio-header h3 {
      color: #4a2a8c;
      margin: 0;
    }

    .bio-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .bio-text p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 25px;
      font-size: 1.05rem;
    }

    .bio-details {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 30px;
    }

    .detail-item {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px dashed #e0e0e0;
    }

    .detail-item:last-child {
      border-bottom: none;
    }

    .detail-label {
      font-weight: 600;
      color: #333;
      min-width: 150px;
    }

    .detail-value {
      color: #666;
      flex: 1;
    }

    .bio-interests h4 {
      color: #4a2a8c;
      margin-bottom: 15px;
      font-size: 1.2rem;
    }

    .interests-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .interest-tag {
      background-color: #f0e6ff;
      color: #5d34af;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 500;
    }

    .bio-links h4 {
      color: #4a2a8c;
      margin-bottom: 20px;
      font-size: 1.2rem;
    }

    .links-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }

    .link-card {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 20px;
      background-color: #f8f9ff;
      border-radius: 10px;
      border: 2px solid transparent;
      transition: all 0.3s;
      text-decoration: none;
    }

    .link-card:hover {
      background-color: #f0e6ff;
      border-color: #5d34af;
      transform: translateY(-3px);
    }

    .link-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .link-content {
      flex: 1;
    }

    .link-title {
      font-weight: 600;
      color: #4a2a8c;
      margin-bottom: 5px;
    }

    .link-url {
      font-size: 0.9rem;
      color: #666;
      word-break: break-all;
    }

    .about-skills {
      background-color: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .skills-header {
      margin-bottom: 30px;
      padding-bottom: 15px;
      border-bottom: 2px solid #f0e6ff;
    }

    .skills-header h3 {
      color: #4a2a8c;
      margin: 0;
    }

    .skills-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    .category-title {
      color: #4a2a8c;
      margin-bottom: 20px;
      font-size: 1.2rem;
      padding-bottom: 10px;
      border-bottom: 1px solid #e0e0e0;
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .skill-name {
      font-weight: 600;
      color: #333;
    }

    .skill-level {
      font-weight: 700;
      color: #5d34af;
      font-size: 0.9rem;
    }

    .skill-progress {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .progress-bar {
      flex: 1;
      height: 10px;
      background-color: #e0e0e0;
      border-radius: 5px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      border-radius: 5px;
      transition: width 0.5s ease;
    }

    .progress-fill.beginner {
      background-color: #ff6b6b;
    }

    .progress-fill.intermediate {
      background-color: #ffa726;
    }

    .progress-fill.advanced {
      background-color: #42a5f5;
    }

    .progress-fill.expert {
      background-color: #66bb6a;
    }

    .skill-level-label {
      font-size: 0.8rem;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 10px;
      min-width: 80px;
      text-align: center;
    }

    .skill-level-label.beginner {
      background-color: #ffebee;
      color: #d32f2f;
    }

    .skill-level-label.intermediate {
      background-color: #fff3e0;
      color: #ef6c00;
    }

    .skill-level-label.advanced {
      background-color: #e3f2fd;
      color: #1565c0;
    }

    .skill-level-label.expert {
      background-color: #e8f5e9;
      color: #2e7d32;
    }

    .about-future {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border-top: 4px solid #5d34af;
      padding: 30px;
      border-radius: 12px;
    }

    .about-future h3 {
      text-align: center;
      color: #4a2a8c;
      margin-bottom: 30px;
    }

    .future-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }

    .future-goal {
      display: flex;
      gap: 20px;
      padding: 20px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .future-goal:hover {
      transform: translateY(-5px);
    }

    .goal-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .goal-content h4 {
      color: #4a2a8c;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }

    .goal-content p {
      color: #666;
      line-height: 1.5;
      margin: 0;
      font-size: 0.95rem;
    }

    @media (max-width: 992px) {
      .bio-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }
      
      .skills-content {
        grid-template-columns: 1fr;
      }
      
      .future-content {
        grid-template-columns: 1fr;
      }
      
      .links-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .about-section {
        padding: 60px 0;
      }
      
      .detail-item {
        flex-direction: column;
        gap: 5px;
      }
      
      .detail-label {
        min-width: auto;
      }
      
      .link-card {
        flex-direction: column;
        text-align: center;
      }
      
      .skill-progress {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }
      
      .skill-level-label {
        align-self: flex-start;
      }
      
      .future-goal {
        flex-direction: column;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .about-bio,
      .about-skills,
      .about-future {
        padding: 20px;
      }
    }
  `]
})
export class AboutComponent {
  skillCategories = [
    { name: 'Языки программирования' },
    { name: 'Фронтенд' },
    { name: 'Фреймворки и библиотеки' },
    { name: 'Инструменты' },
    { name: 'ИИ инструменты' },
    { name: 'Навыки' }
  ];

  skills = [
    { name: 'JavaScript', category: 'Языки программирования', level: 75 },
    { name: '1C', category: 'Языки программирования', level: 60 },
    { name: 'Bash', category: 'Языки программирования', level: 50 },
    { name: 'Angular', category: 'Фреймворки и библиотеки', level: 70 },
    { name: 'HTML/CSS', category: 'Фронтенд', level: 85 },
    { name: 'TypeScript', category: 'Языки программирования', level: 65 },
    { name: 'Git', category: 'Инструменты', level: 75 },
    { name: 'GigaChat', category: 'ИИ инструменты', level: 60 },
    { name: 'Python', category: 'Языки программирования', level: 65 },
    { name: 'Responsive Design', category: 'Фронтенд', level: 80 },
    { name: 'Google Sheets', category: 'Инструменты', level: 85 },
    { name: 'Data Analysis', category: 'Навыки', level: 70 }
  ];

  getSkillsByCategory(category: string) {
    return this.skills.filter(skill => skill.category === category);
  }

  getLevelClass(level: number): string {
    if (level >= 80) return 'expert';
    if (level >= 60) return 'advanced';
    if (level >= 40) return 'intermediate';
    return 'beginner';
  }

  getLevelLabel(level: number): string {
    if (level >= 80) return 'Эксперт';
    if (level >= 60) return 'Продвинутый';
    if (level >= 40) return 'Средний';
    return 'Начальный';
  }
}