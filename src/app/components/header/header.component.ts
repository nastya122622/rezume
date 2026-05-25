import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="avatar-container">
            <img 
              src="https://via.placeholder.com/200x200/5d34af/ffffff?text=AV" 
              alt="Лобанова Анастасия" 
              class="avatar"
              loading="lazy"
            />
          </div>
          
          <div class="header-text">
            <h1 class="full-name">Лобанова Анастасия Витальевна</h1>
            <h2 class="specialization">Студент-разработчик: Информационные системы и программирование</h2>
            
            <div class="sell-pitch">
              <p>Создаю функциональные веб-приложения с акцентом на удобство пользователей. Учусь быстро и решаю нетривиальные задачи.</p>
            </div>
            
            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-label">Место учёбы:</span>
                <span class="contact-value">ГБПОУ МО «Люберецкий техникум имени Ю.А. Гагарина»</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">Специальность:</span>
                <span class="contact-value">09.02.07 «Информационные системы и программирование»</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #5d34af 0%, #7a52d4 100%);
      color: white;
      padding: 40px 0;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 40px;
      flex-wrap: wrap;
    }

    .avatar-container {
      flex-shrink: 0;
    }

    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      border: 5px solid white;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      transition: transform 0.5s ease;
    }

    .avatar:hover {
      transform: scale(1.05);
    }

    .header-text {
      flex: 1;
      min-width: 300px;
    }

    .full-name {
      font-size: 2.5rem;
      margin-bottom: 10px;
      color: white;
    }

    .specialization {
      font-size: 1.4rem;
      margin-bottom: 20px;
      color: #f0e6ff;
      font-weight: 400;
    }

    .sell-pitch {
      margin-bottom: 25px;
    }

    .sell-pitch p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #f0e6ff;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .contact-item {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .contact-label {
      font-weight: 600;
      color: white;
    }

    .contact-value {
      color: #f0e6ff;
    }

    @media (max-width: 992px) {
      .full-name {
        font-size: 2.2rem;
      }
      
      .specialization {
        font-size: 1.2rem;
      }
      
      .avatar {
        width: 180px;
        height: 180px;
      }
    }

    @media (max-width: 768px) {
      .header {
        padding: 30px 0;
      }
      
      .header-content {
        flex-direction: column;
        text-align: center;
        gap: 25px;
      }
      
      .full-name {
        font-size: 2rem;
      }
      
      .specialization {
        font-size: 1.1rem;
      }
      
      .avatar {
        width: 160px;
        height: 160px;
      }
      
      .contact-item {
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }
    }

    @media (max-width: 480px) {
      .full-name {
        font-size: 1.7rem;
      }
      
      .specialization {
        font-size: 1rem;
      }
      
      .avatar {
        width: 140px;
        height: 140px;
      }
    }
  `]
})
export class HeaderComponent {}