import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="navbar-logo">
            <span class="logo-text">А.Л.</span>
          </div>
          
          <button class="mobile-menu-toggle" (click)="toggleMobileMenu()">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
          
          <ul class="nav-list" [class.active]="mobileMenuOpen">
            <li *ngFor="let item of navItems" 
                class="nav-item"
                [class.active]="activeSection === item.id">
              <a (click)="navigateTo(item.id)" class="nav-link">
                <span class="nav-icon">{{item.icon}}</span>
                <span class="nav-label">{{item.label}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      position: fixed;
      top: 280px;
      width: 100%;
      z-index: 999;
      transition: top 0.3s ease;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    .navbar-logo {
      display: none;
    }

    .logo-text {
      font-weight: 700;
      font-size: 1.5rem;
      color: #5d34af;
      background-color: #f0e6ff;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 5px;
    }

    .nav-item {
      position: relative;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 18px 20px;
      font-weight: 600;
      color: #333;
      cursor: pointer;
      transition: all 0.3s ease;
      border-bottom: 3px solid transparent;
    }

    .nav-link:hover {
      color: #5d34af;
      background-color: #f0e6ff;
    }

    .nav-item.active .nav-link {
      color: #5d34af;
      border-bottom-color: #5d34af;
      background-color: #f0e6ff;
    }

    .nav-icon {
      font-size: 1.2rem;
    }

    .nav-label {
      font-size: 1rem;
    }

    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 1001;
    }

    .hamburger-line {
      width: 100%;
      height: 3px;
      background-color: #5d34af;
      border-radius: 3px;
      transition: all 0.3s ease;
    }

    @media (max-width: 992px) {
      .navbar {
        top: 260px;
      }
      
      .nav-link {
        padding: 15px 16px;
      }
    }

    @media (max-width: 768px) {
      .navbar {
        top: 240px;
      }
      
      .mobile-menu-toggle {
        display: flex;
      }
      
      .navbar-logo {
        display: flex;
      }
      
      .nav-list {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 300px;
        height: 100vh;
        background-color: white;
        flex-direction: column;
        padding: 80px 20px 40px;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        transition: right 0.3s ease;
        gap: 0;
      }
      
      .nav-list.active {
        right: 0;
      }
      
      .nav-item {
        width: 100%;
      }
      
      .nav-link {
        padding: 15px 20px;
        border-radius: 8px;
        margin-bottom: 5px;
        border-bottom: none;
      }
      
      .nav-item.active .nav-link {
        border-bottom: none;
        background-color: #f0e6ff;
      }
      
      .mobile-menu-toggle.active .hamburger-line:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }
      
      .mobile-menu-toggle.active .hamburger-line:nth-child(2) {
        opacity: 0;
      }
      
      .mobile-menu-toggle.active .hamburger-line:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
    }

    @media (max-width: 480px) {
      .navbar {
        top: 220px;
      }
    }
  `]
})
export class NavbarComponent {
  @Input() activeSection: string = 'home';
  @Output() sectionChange = new EventEmitter<string>();
  
  navItems = [
    { id: 'home', label: 'Главная', icon: '🏠' },
    { id: 'courses', label: 'Курсы', icon: '📚' },
    { id: 'projects', label: 'Проекты', icon: '💼' },
    { id: 'practice', label: 'Практика', icon: '🔧' },
    { id: 'self-development', label: 'Саморазвитие', icon: '🚀' },
    { id: 'about', label: 'Обо мне', icon: '👤' }
  ];
  
  mobileMenuOpen = false;
  
  navigateTo(sectionId: string) {
    this.sectionChange.emit(sectionId);
    this.mobileMenuOpen = false;
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}