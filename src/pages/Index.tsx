import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "MessageCircle",
      title: "Telegram Боты",
      description: "Создаем умных ботов для автоматизации бизнеса и взаимодействия с клиентами"
    },
    {
      icon: "Code2",
      title: "Веб-разработка",
      description: "Современные сайты и веб-приложения с адаптивным дизайном"
    },
    {
      icon: "Smartphone",
      title: "Интеграции",
      description: "Подключаем боты к CRM, платежным системам и внешним API"
    }
  ];

  const portfolio = [
    {
      title: "Бот для интернет-магазина",
      description: "Автоматизация заказов и поддержки клиентов",
      tech: "Python, aiogram, PostgreSQL"
    },
    {
      title: "CRM интеграция",
      description: "Синхронизация данных клиентов с внутренней системой",
      tech: "Node.js, API, Webhook"
    },
    {
      title: "Корпоративный сайт",
      description: "Современный сайт с админ-панелью",
      tech: "React, TypeScript, Tailwind"
    }
  ];

  const team = [
    {
      name: "Георгий Петров",
      role: "Senior Developer",
      description: "5+ лет в разработке Telegram ботов и веб-приложений"
    },
    {
      name: "Сергей Анатольев",
      role: "Backend Developer", 
      description: "Эксперт по интеграциям и API"
    },
    {
      name: "Павел Григорьев",
      role: "UI/UX Designer",
      description: "Создает интуитивные интерфейсы для пользователей"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 font-inter">GSP Development</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <Button className="bg-primary hover:bg-primary/90">Связаться</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-inter leading-tight">
                Создаем <span className="text-primary">Telegram ботов</span><br />
                для вашего бизнеса
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-open-sans">
                Автоматизируем процессы, увеличиваем продажи и улучшаем сервис с помощью современных технологий
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Заказать бота
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Посмотреть примеры
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-inter">Наши услуги</h2>
            <p className="text-xl text-gray-600 font-open-sans">Полный спектр разработки для вашего проекта</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 font-inter">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-lg font-open-sans leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-inter">Портфолио</h2>
            <p className="text-xl text-gray-600 font-open-sans">Проекты, которыми мы гордимся</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 font-inter">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 font-open-sans">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <Icon name="Code2" size={16} className="mr-2" />
                    {project.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-inter">О нас</h2>
            <p className="text-xl text-gray-600 font-open-sans">Команда профессионалов с опытом 50+ проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 font-inter">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium font-open-sans">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-open-sans">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">Готовы начать проект?</h2>
          <p className="text-xl text-white/90 mb-8 font-open-sans">
            Свяжитесь с нами для обсуждения вашей идеи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Mail" size={20} className="mr-2" />
              gsp.development@gmail.com
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Code2" size={18} className="text-white" />
            </div>
            <span className="font-bold text-xl text-white font-inter">GSP Development</span>
          </div>
          <p className="text-gray-400 font-open-sans">© 2024 GSP Development. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;