import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="practice-section">
      <div class="container">
        <div class="section-title">
          <h2>Практика</h2>
          <p class="section-subtitle">Прохождение производственной практики от Люберецкого техникума</p>
        </div>
        
        <div class="practice-overview">
          <div class="practice-card card">
            <div class="practice-header">
              <h3>Производственная практика</h3>
              <div class="practice-meta">
                <div class="meta-item">
                  <span class="meta-label">Учебное заведение:</span>
                  <span class="meta-value">ГБПОУ МО «Люберецкий техникум имени Ю.А. Гагарина»</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Место прохождения:</span>
                  <span class="meta-value">Московская область, Дзержинский, улица Академика Жукова, 34, 140090</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Период:</span>
                  <span class="meta-value">Сентябрь 2024</span>
                </div>
              </div>
            </div>
            
            <div class="practice-content">
              <div class="practice-tasks">
                <h4>Выполненные задачи:</h4>
                <ul>
                  <li>Работа в библиотеке по адресу: Московская область, Дзержинский, улица Академика Жукова, 34</li>
                  <li>Очистка полок от пыли и загрязнений</li>
                  <li>Протирка книг от пыли для сохранения их состояния</li>
                  <li>Перестановка стеллажей для оптимизации пространства</li>
                  <li>Систематизация и перекладывание книг</li>
                  <li>Повторная очистка полок после перестановки</li>
                </ul>
              </div>
              
              <div class="practice-tools">
                <h4>Используемые инструменты:</h4>
                <div class="tools-list">
                  <span class="tool-tag">Библиотечное оборудование</span>
                  <span class="tool-tag">Чистящие средства</span>
                  <span class="tool-tag">Системы хранения</span>
                </div>
              </div>
              
              <div class="practice-reflections">
                <h4>Выводы и рефлексия:</h4>
                <ul>
                  <li>Приобрела практический опыт работы в учреждении культуры</li>
                  <li>Научилась системному подходу к организации пространства</li>
                  <li>Развила внимательность к деталям при работе с библиотечными фондами</li>
                  <li>Улучшила навыки командной работы и координации действий</li>
                  <li>Осознала важность бережного отношения к культурным ценностям</li>
                  <li>Получила понимание организации рабочих процессов в библиотечной системе</li>
                </ul>
              </div>
              
              <div class="practice-novel">
                <h4>Интерактивная новелла о практике:</h4>
                <p>Ознакомьтесь с интерактивной новеллой, созданной в Twine, которая подробно рассказывает о моём опыте прохождения практики:</p>
                <a href="https://lobanovanas208-del.github.io/twinee/" target="_blank" class="novel-link">
                  🎮 Открыть интерактивную новеллу
                </a>
              </div>
            </div>
          </div>
          
          <div class="practice-summary card">
            <h3>Итоги практики</h3>
            <div class="summary-content">
              <p>Производственная практика в библиотеке стала ценным опытом, который позволил:</p>
              
              <div class="summary-points">
                <div class="summary-point">
                  <div class="point-icon">🎯</div>
                  <div class="point-content">
                    <h5>Применить теоретические знания</h5>
                    <p>Реализовать полученные в техникуме знания на практике в реальных условиях</p>
                  </div>
                </div>
                
                <div class="summary-point">
                  <div class="point-icon">🤝</div>
                  <div class="point-content">
                    <h5>Развить soft skills</h5>
                    <p>Улучшить коммуникативные навыки, умение работать в команде и адаптироваться к рабочему процессу</p>
                  </div>
                </div>
                
                <div class="summary-point">
                  <div class="point-icon">📚</div>
                  <div class="point-content">
                    <h5>Понять организационные процессы</h5>
                    <p>Ознакомиться с внутренними процессами учреждения культуры и принципами организации работы</p>
                  </div>
                </div>
                
                <div class="summary-point">
                  <div class="point-icon">💡</div>
                  <div class="point-content">
                    <h5>Определить профессиональные интересы</h5>
                    <p>Сформировать понимание важности системного подхода и организации информации, что полезно в IT-сфере</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .practice-section {
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

    .practice-overview {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .practice-card {
      background-color: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }

    .practice-header {
      margin-bottom: 25px;
      padding-bottom: 20px;
      border-bottom: 2px solid #f0e6ff;
    }

    .practice-header h3 {
      color: #4a2a8c;
      margin-bottom: 15px;
    }

    .practice-meta {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .meta-item {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .meta-label {
      font-weight: 600;
      color: #333;
      min-width: 180px;
    }

    .meta-value {
      color: #666;
      flex: 1;
    }

    .practice-content {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .practice-tasks h4,
    .practice-tools h4,
    .practice-reflections h4,
    .practice-novel h4 {
      color: #4a2a8c;
      margin-bottom: 15px;
      font-size: 1.2rem;
    }

    .practice-tasks ul,
    .practice-reflections ul {
      padding-left: 20px;
      margin: 0;
    }

    .practice-tasks li,
    .practice-reflections li {
      margin-bottom: 10px;
      color: #666;
      line-height: 1.6;
    }

    .tools-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tool-tag {
      background-color: #f0e6ff;
      color: #5d34af;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 500;
    }

    .practice-novel p {
      color: #666;
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .novel-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      background-color: #5d34af;
      color: white;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s;
      text-decoration: none;
    }

    .novel-link:hover {
      background-color: #4a2a8c;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      color: white;
    }

    .practice-summary {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border-top: 4px solid #5d34af;
      padding: 24px;
      border-radius: 12px;
    }

    .practice-summary h3 {
      color: #4a2a8c;
      margin-bottom: 25px;
      text-align: center;
    }

    .summary-content p {
      text-align: center;
      color: #666;
      max-width: 800px;
      margin: 0 auto 30px;
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .summary-points {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }

    .summary-point {
      display: flex;
      gap: 15px;
      padding: 20px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .summary-point:hover {
      transform: translateY(-5px);
    }

    .point-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .point-content h5 {
      color: #4a2a8c;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }

    .point-content p {
      text-align: left;
      margin: 0;
      color: #666;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    @media (max-width: 992px) {
      .summary-points {
        grid-template-columns: 1fr;
      }
      
      .meta-label {
        min-width: 150px;
      }
    }

    @media (max-width: 768px) {
      .practice-section {
        padding: 60px 0;
      }
      
      .summary-point {
        flex-direction: column;
        text-align: center;
      }
      
      .point-content p {
        text-align: center;
      }
      
      .meta-item {
        flex-direction: column;
        gap: 5px;
      }
      
      .meta-label {
        min-width: auto;
      }
    }

    @media (max-width: 480px) {
      .novel-link {
        width: 100%;
        justify-content: center;
      }
      
      .tools-list {
        justify-content: center;
      }
    }
  `]
})
export class PracticeComponent {}