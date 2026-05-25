import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  activeSection = 'home';

  navItems = [
    { id: 'home', label: 'Главная', icon: '🏠' },
    { id: 'courses', label: 'Курсы', icon: '📚' },
    { id: 'projects', label: 'Проекты', icon: '💼' },
    { id: 'practice', label: 'Практика', icon: '🔧' },
    { id: 'self-development', label: 'Саморазвитие', icon: '🚀' },
    { id: 'about', label: 'Обо мне', icon: '👤' }
  ];

  coursesList = [
    {
      title: 'Промпт-инжиниринг и LLM',
      platform: 'СберУниверситет',
      year: '2024',
      description: 'Изучение принципов промпт-инжиниринга и создание приложений на основе LLM.',
      skills: ['Промпт-инжиниринг', 'LLM', 'GigaChain', 'RAG'],
      certificateUrl: 'assets/certificates/sber/1sber.png',
      type: 'sber'
    },
    {
      title: 'Цифровые инструменты',
      platform: 'СберУниверситет',
      year: '2024',
      description: 'Освоение цифровых инструментов для управления финансами.',
      skills: ['Финансы', 'Цифровизация', 'Управление'],
      certificateUrl: 'assets/certificates/sber/2sber.png',
      type: 'sber'
    },
    {
      title: 'Работа с LLM GigaChat',
      platform: 'СберУниверситет',
      year: '2024',
      description: 'Развитие навыков эффективной коммуникации и ведения переговоров.',
      skills: ['Коммуникация', 'Переговоры', 'Презентации'],
      certificateUrl: 'assets/certificates/sber/3sber.png',
      type: 'sber'
    },
    {
      title: 'VK Education — Введение в веб-разработку',
      platform: 'VK',
      year: '2025',
      description: 'Основы веб-разработки, работа с API, создание современных веб-приложений.',
      skills: ['VK API', 'React', 'Node.js'],
      certificateUrl: 'https://drive.google.com/file/d/14-qZ0_2nh2-71JfJtsyIyg0VvTUFdulg/view?usp=drive_link',
      type: 'other'
    },
    {
      title: '1С:Программирование для начинающих',
      platform: '1С',
      year: '2025',
      description: 'Основы конфигурирования и разработки на платформе 1С:Предприятие.',
      skills: ['1С:Предприятие', 'Конфигурации', 'Запросы'],
      certificateUrl: 'https://drive.google.com/file/d/1N75xWS-F8HVmX65W3JHEpbCIPpiHhF7A/view?usp=drive_link',
      type: 'other'
    }
  ];

  coursesFilter = 'all';

  get filteredCoursesList() {
    if (this.coursesFilter === 'all') return this.coursesList;
    return this.coursesList.filter(c => c.type === this.coursesFilter);
  }

  filterCourses(filter: string) {
    this.coursesFilter = filter;
  }

  projectsList = [
    {
      title: 'BestGames - маркетплейс игр',
      role: 'Frontend разработчик',
      description: 'Маркетплейс для поиска и покупки компьютерных игр и внутриигровых предметов.',
      tasks: ['Разработка интерфейса', 'Система фильтрации', 'Корзина покупок', 'Адаптивная верстка'],
      links: [
        { icon: '🎮', text: 'Демо', url: 'https://lobanovanas208-del.github.io/chempionatt' },
        { icon: '🐙', text: 'GitHub', url: 'https://github.com/lobanovanas208-del/chempionatt' }
      ]
    },
    {
      title: 'Платформа онлайн-обучения',
      role: 'Backend разработчик',
      description: 'Серверная часть платформы с API для управления курсами и пользователями.',
      tasks: ['REST API', 'Аутентификация', 'Управление курсами', 'База данных'],
      links: [
        { icon: '📚', text: 'Демо', url: 'https://lobanovanas208-del.github.io/chempionatt2' },
        { icon: '🐙', text: 'GitHub', url: 'https://github.com/lobanovanas208-del/chempionatt2' }
      ]
    },
    {
      title: 'Интерактивные доски',
      role: 'Fullstack разработчик',
      description: 'SPA для совместной работы в реальном времени с возможностью рисования.',
      tasks: ['Angular', 'Real-time обновления', 'Инструменты рисования', 'Совместная работа'],
      links: [
        { icon: '📋', text: 'Демо', url: 'https://lobanovanas208-del.github.io/chempionatt3' },
        { icon: '🐙', text: 'GitHub', url: 'https://github.com/lobanovanas208-del/chempionatt3' }
      ]
    },
    {
      title: 'Документооборот в команде',
      role: 'Программист, аналитик, менеджер',
      description: 'Система документооборота для оптимизации рабочих процессов в команде.',
      tasks: ['Анализ требований', 'Разработка структуры', 'Координация команды', 'Создание документации'],
      links: [
        { icon: '📄', text: 'Документация', url: 'https://docs.google.com/spreadsheets/d/1VGQpuDTyreBA_gl4iPie1rJcmRtBI89Y/edit' },
        { icon: '📊', text: 'Моя часть', url: 'https://docs.google.com/spreadsheets/d/1BAN2ZAE1iOV3Hqqeo5LLeGypVyACGcyQ/edit' }
      ]
    },
    {
      title: '🎨 ArtMasters 2026',
      role: 'Участник',
      description: 'Тестирование компетенций в области цифрового искусства. Участие в отборочном этапе.',
      tasks: ['Онлайн-тестирование', 'Создание портфолио', 'Выполнение творческого задания'],
      links: [
        { icon: '🎨', text: 'Сайт конкурса', url: 'https://artmasters.ru/' }
      ]
    },
    {
      title: '🌍 ИТ-Планета / Braim Challenge',
      role: 'Участник',
      description: 'Платформа инновационных соревнований по IT. Решение кейсов и работа в команде.',
      tasks: ['Решение кейсов', 'Работа в команде', 'Презентация результатов'],
      links: [
        { icon: '📄', text: 'Сертификат 1', url: 'https://drive.google.com/file/d/1qPG4pAvuV5RR1P8Uaa8VJY1f4ygUpXot/view?usp=drive_link' },
        { icon: '📄', text: 'Сертификат 2', url: 'https://drive.google.com/file/d/1MevXxa5lvu646M9XEDDmJ0RhSypUWsSx/view?usp=drive_link' },
        { icon: '📄', text: 'Сертификат 3', url: 'https://drive.google.com/file/d/1TT_0xFCO-MguUpVP6tJpft9d0XsJhs-e/view?usp=drive_link' },
        { icon: '📄', text: 'Сертификат 4', url: 'https://drive.google.com/file/d/1Ikb4NKttpD7sI2Y6e1BVBa6Bpc4ihIHb/view?usp=drive_link' }
      ]
    },
    {
      title: '🚀 Траектория будущего 2026',
      role: 'Разработчик',
      description: 'Разработка IT-решения для социальной сферы. Полный цикл создания проекта.',
      tasks: ['Анализ требований', 'Проектирование', 'Разработка прототипа', 'Документирование'],
      links: [
        { icon: '📄', text: 'Сертификат 1', url: 'https://drive.google.com/file/d/1x3rwKjnVN93LMSRnKb9hcpnhE0rWGIQm/view?usp=drive_link' },
        { icon: '📄', text: 'Сертификат 2', url: 'https://drive.google.com/file/d/1xFoSTldEHwXeavM-K3UlaEp1OI66EYhi/view?usp=drive_link' },
        { icon: '📄', text: 'Сертификат 3', url: 'https://drive.google.com/file/d/1M8u19UKqY4h7Xt9pfeMR_OtfM1u74pRL/view?usp=drive_link' },
        { icon: '📄', text: 'Сертификат 4', url: 'https://drive.google.com/file/d/1S159F5MXA4LQU2Qj5Ca26ueSPXKGJryh/view?usp=drive_link' }
      ]
    }
  ];

  // Прямые ссылки для Google Drive картинок (чтобы показывать превью)
  conferenceImageUrl = 'https://drive.google.com/uc?export=view&id=1J6SOo_PAnT2ID-GitmNtqxcfjbuQEUhh';
  socialImage1 = 'https://drive.google.com/uc?export=view&id=1M6dMPrLY0gjrf2v_aLLnn4swuzJpx0LW';
  socialImage2 = 'https://drive.google.com/uc?export=view&id=1LNjA9Q9NEJVC2kBu2gUejCOTIo8hbO45';

  scrollTo(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }
}