import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-section">
      <div class="container">
        <div class="section-title">
          <h2>Проекты</h2>
          <p class="section-subtitle">Практические работы и проекты, выполненные в ходе обучения и участия в конкурсах</p>
        </div>
        
        <div class="projects-grid grid-2">
          <div class="project-card card" *ngFor="let project of projects">
            <div class="project-header">
              <h3 class="project-title">{{project.title}}</h3>
              <div class="project-role">{{project.role}}</div>
            </div>
            
            <div class="project-description">
              <p>{{project.description}}</p>
            </div>
            
            <div class="project-responsibilities">
              <h4>Выполненные работы:</h4>
              <ul>
                <li *ngFor="let responsibility of project.responsibilities">{{responsibility}}</li>
              </ul>
            </div>
            
            <div class="project-technologies">
              <h4>Технологии:</h4>
              <div class="tech-tags">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{tech}}</span>
              </div>
            </div>
            
            <div class="project-links">
              <a *ngIf="project.documentsLink" [href]="project.documentsLink" target="_blank" class="project-link">
                📄 Документация
              </a>
            </div>
          </div>
        </div>
        
        <div class="project-details">
          <div class="details-card card">
            <h3>Детали проекта "Система анализа данных":</h3>
            <div class="details-content">
              <p>В рамках проекта "Система" я отвечала за анализ и структурирование данных:</p>
              
              <div class="details-links">
                <a href="https://docs.google.com/spreadsheets/d/1VGQpuDTyreBA_gl4iPie1rJcmRtBI89Y/edit?gid=2085319456#gid=2085319456" 
                   target="_blank" class="details-link">
                  📊 Полная таблица данных
                </a>
                <a href="https://docs.google.com/spreadsheets/d/1BAN2ZAE1iOV3Hqqeo5LLeGypVyACGcyQ/edit?gid=1808232316#gid=1808232316" 
                   target="_blank" class="details-link">
                  🔍 Моя часть работы
                </a>
                <a href="https://drive.google.com/drive/folders/1x5YDV6sTuGrk2HHtx6pS1DQna3ZrChfj" 
                   target="_blank" class="details-link">
                  📁 Папка с документами и презентацией
                </a>
              </div>
              
              <div class="details-description">
                <h4>Описание выполненной работы:</h4>
                <p>В этом проекте я выполняла роль аналитика данных. Моей задачей было:</p>
                <ol>
                  <li>Составление и структурирование таблиц с исходными данными</li>
                  <li>Анализ данных и выявление закономерностей</li>
                  <li>Объединение данных из различных таблиц в единую систему</li>
                  <li>Визуализация результатов анализа</li>
                  <li>Подготовка презентации для защиты проекта</li>
                </ol>
                <p>Результатом стала система, позволяющая эффективно анализировать и представлять данные для принятия решений.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .projects-section {
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

    .projects-grid {
      display: grid;
      gap: 24px;
      margin-bottom: 50px;
    }

    .grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }

    .project-card {
      background-color: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .project-header {
      margin-bottom: 15px;
    }

    .project-title {
      font-size: 1.4rem;
      margin-bottom: 8px;
      color: #4a2a8c;
    }

    .project-role {
      font-size: 1rem;
      color: #5d34af;
      font-weight: 500;
      padding: 6px 12px;
      background-color: #f0e6ff;
      border-radius: 20px;
      display: inline-block;
    }

    .project-description {
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .project-description p {
      color: #666;
      line-height: 1.6;
    }

    .project-responsibilities {
      margin-bottom: 20px;
    }

    .project-responsibilities h4 {
      font-size: 1.1rem;
      margin-bottom: 10px;
      color: #333;
    }

    .project-responsibilities ul {
      padding-left: 20px;
      margin: 0;
    }

    .project-responsibilities li {
      margin-bottom: 8px;
      color: #666;
    }

    .project-technologies {
      margin-bottom: 25px;
    }

    .project-technologies h4 {
      font-size: 1.1rem;
      margin-bottom: 10px;
      color: #333;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tech-tag {
      background-color: #e8f4ff;
      color: #0066cc;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .project-links {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: auto;
    }

    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background-color: #f0e6ff;
      color: #5d34af;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.3s;
      text-decoration: none;
    }

    .project-link:hover {
      background-color: #5d34af;
      color: white;
      transform: translateY(-2px);
    }

    .project-details {
      margin-top: 30px;
    }

    .details-card {
      background-color: #f8f9ff;
      border-left: 4px solid #5d34af;
      padding: 24px;
      border-radius: 12px;
    }

    .details-card h3 {
      color: #4a2a8c;
      margin-bottom: 20px;
    }

    .details-content p {
      margin-bottom: 20px;
      color: #666;
      line-height: 1.6;
    }

    .details-links {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 25px;
    }

    .details-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      background-color: white;
      color: #5d34af;
      border: 2px solid #f0e6ff;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s;
      text-decoration: none;
    }

    .details-link:hover {
      background-color: #f0e6ff;
      border-color: #5d34af;
      transform: translateY(-3px);
    }

    .details-description h4 {
      color: #4a2a8c;
      margin-bottom: 15px;
    }

    .details-description ol {
      padding-left: 25px;
      margin-bottom: 20px;
    }

    .details-description li {
      margin-bottom: 10px;
      color: #666;
    }

    @media (max-width: 992px) {
      .grid-2 {
        grid-template-columns: 1fr;
        gap: 30px;
      }
      
      .details-links {
        flex-direction: column;
      }
      
      .details-link {
        width: 100%;
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      .projects-section {
        padding: 60px 0;
      }
      
      .project-links {
        flex-direction: column;
      }
      
      .project-link {
        width: 100%;
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .project-title {
        font-size: 1.3rem;
      }
      
      .tech-tags {
        gap: 6px;
      }
      
      .tech-tag {
        font-size: 0.8rem;
        padding: 5px 10px;
      }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'Документооборот в команде',
      description: 'Реализация системы документооборота для оптимизации рабочих процессов в команде разработчиков.',
      role: 'Программист, аналитик, менеджер',
      responsibilities: [
        'Анализ требований и проектирование архитектуры',
        'Разработка основных модулей системы',
        'Координация работы команды',
        'Тестирование и отладка'
      ],
      technologies: ['JavaScript', 'Angular', 'Node.js', 'MongoDB'],
      documentsLink: 'https://docs.google.com/spreadsheets/d/1VGQpuDTyreBA_gl4iPie1rJcmRtBI89Y/edit?gid=2085319456#gid=2085319456'
    },
    {
      id: 2,
      title: 'Система анализа данных для конкурса',
      description: 'Проект для конкурса "Система" - разработка системы анализа и визуализации данных.',
      role: 'Аналитик данных',
      responsibilities: [
        'Составление и структурирование таблиц данных',
        'Объединение данных из различных источников',
        'Анализ и визуализация результатов',
        'Подготовка презентации проекта'
      ],
      documentsLink: 'https://drive.google.com/drive/folders/1x5YDV6sTuGrk2HHtx6pS1DQna3ZrChfj',
      technologies: ['Google Sheets', 'Data Analysis', 'Data Visualization']
    }
  ];
}