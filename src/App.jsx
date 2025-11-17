import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Briefcase, Code, Database, Brain, Globe, Moon, Sun, Download, GraduationCap, Calendar, MapPin, Phone, MessageCircle, Cloud, Server, Settings, Network, BarChart, FolderGit2, Menu, X } from 'lucide-react';

export default function ModernPortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutMe = {
    name: "REMI ELI KOKOU AKAKPO",
    title: "Ingénieur Systèmes & Cloud | Spécialiste Infrastructure",
    email: "remieliakakpo@gmail.com",
    phone: "+228 91127584",
    description: "Étudiant en Master 2 en Informatique et Systèmes, passionné par les technologies du Cloud Computing, la virtualisation et l'architecture des systèmes distribués. Mon objectif est de me spécialiser dans la conception, le déploiement et la sécurisation d'infrastructures cloud afin d'accompagner les entreprises dans leur transformation numérique."
  };

  const specializations = [
    {
      title: "Infrastructure Cloud",
      description: "Architecture et déploiement d'infrastructures cloud scalables sur AWS. Création d'instances EC2, configuration de réseaux VPC et gestion de ressources cloud.",
      icon: <Cloud className="w-8 h-8" />,
      color: "blue"
    },
    {
      title: "ERP & Administration Système",
      description: "Administration avancée de systèmes Linux et Windows Server. Gestion d'ERP, supervision système et automatisation des tâches d'administration.",
      icon: <Settings className="w-8 h-8" />,
      color: "green"
    },
    {
      title: "Sécurité & Réseaux",
      description: "Mise en place de systèmes IDS/IPS avec Snort, configuration de portails captifs, audit réseau et pentesting. Maîtrise des protocoles TCP/IP, DNS, DHCP.",
      icon: <Network className="w-8 h-8" />,
      color: "red"
    },
    {
      title: "Machine Learning & MLOps",
      description: "Développement de projets pratiques en Machine Learning. Intégration des pratiques MLOps pour le déploiement et la supervision de modèles en production.",
      icon: <Brain className="w-8 h-8" />,
      color: "purple"
    }
  ];

  const education = [
    {
      degree: "Master 2 en Informatique et Systèmes",
      school: "Université de Lomé / École Polytechnique de Lomé",
      period: "Septembre 2025 - Présent",
      location: "Lomé, Togo",
      note: "Partenariat UTBM - Université de Lomé",
      ongoing: true
    },
    {
      degree: "Master 1 en Informatique et Systèmes",
      school: "Université de Lomé / École Polytechnique de Lomé",
      period: "Octobre 2024 - Juillet 2025",
      location: "Lomé, Togo",
      note: "Partenariat UTBM - Université de Lomé"
    },
    {
      degree: "Licence Pro. Maintenance et Réseaux Informatiques",
      school: "Université de Lomé / École Polytechnique de Lomé",
      period: "Février 2021 - Juin 2024",
      location: "Lomé, Togo",
    }
  ];

  const experiences = [
    {
      title: "Tuteur Python",
      company: "Programme Kira Learning - Ministère de l'Économie Numérique",
      period: "Août 2025 - Présent",
      tasks: [
        "Encadrement d'étudiants en licence dans l'apprentissage du Python",
        "Animation d'ateliers sur les structures de données et algorithmes",
        "Sélectionné dans le cadre du programme national Kira Learning"
      ],
      ongoing: true
    },
    {
      title: "Technicien en Systèmes Informatiques",
      company: "Capfind SAS",
      period: "Mars 2025 - Présent",
      tasks: [
        "Installation de systèmes d'exploitation Windows et Linux",
        "Installation des produits Microsoft",
        "Formation du personnel"
      ],
      ongoing: true
    },
    {
      title: "Stagiaire Systèmes et Réseaux",
      company: "Deezpro (Formation en Logiciels Professionnels)",
      period: "Septembre 2023 - Août 2024",
      tasks: [
        "Mise en place d'un système IDS/IPS avec Snort",
        "Création d'instances et déploiement sur AWS",
        "Configuration de routeurs en points d'accès WiFi avec FreeRADIUS",
        "Mise en place d'un portail captif avec Coova-Chilli",
        "Rédaction d'articles sur les technologies numériques"
      ]
    }
  ];

  const technicalSkills = {
    "Cloud & Virtualisation": ["AWS (EC2, S3, VPC)", "VirtualBox", "Docker"],
    "Systèmes": ["Linux (Ubuntu, Kali)", "Windows Server", "Administration système"],
    "Réseaux": ["CCNA 1 & 2", "TCP/IP, DNS, DHCP", "Wireshark", "Configuration routeurs"],
    "Sécurité": ["Snort (IDS/IPS)", "Pentesting", "Audit réseau (Nmap)", "Portail captif"],
    "Développement": ["Python", "JavaScript", "React", "WordPress"],
    "Data & Analyse": ["Power BI", "Tableau Croisé Dynamique"],
    "Gestion de projet": ["Méthodologie Agile", "ProjectLibre"],
    "Bureautique": ["MS Office (Word, Excel, PowerPoint)"]
  };

  const softSkills = {
    "Compétences Interpersonnelles": [
      "Esprit d'équipe",
      "Communication pédagogique",
      "Capacité d'adaptation"
    ],
    "Compétences Professionnelles": [
      "Rigueur et sens de l'organisation",
      "Gestion efficace du temps",
      "Veille technologique constante"
    ],
    "Qualités Personnelles": [
      "Curiosité intellectuelle",
      "Esprit d'analyse et résolution de problèmes",
      "Autonomie"
    ]
  };

  // NOUVELLE SECTION PROJETS
  const projects = [
    {
      title: "Optimisation avec Machine Learning",
      category: "Machine Learning",
      description: "Projet d'optimisation utilisant des algorithmes de Machine Learning pour améliorer les performances et l'efficacité des systèmes.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      icon: <Brain className="w-6 h-6" />,
      color: "purple",
      link: "", // À compléter
      github: "" // À compléter
    },
    {
      title: "Interface Homme-Machine (IHM)",
      category: "Développement",
      description: "Conception et développement d'interfaces utilisateur intuitives et ergonomiques pour faciliter l'interaction homme-machine.",
      technologies: ["Python", "Tkinter", "PyQt", "React"],
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      link: "",
      github: ""
    },
    {
      title: "Système IDS/IPS avec Snort",
      category: "Sécurité",
      description: "Mise en place d'un système de détection et de prévention d'intrusion (IDS/IPS) pour surveiller et protéger le réseau contre les menaces.",
      technologies: ["Snort", "Linux", "Réseaux", "Sécurité"],
      icon: <Network className="w-6 h-6" />,
      color: "red",
      link: "",
      github: ""
    },
    {
      title: "Configuration FreeRADIUS",
      category: "Infrastructure",
      description: "Configuration d'un serveur FreeRADIUS pour l'authentification centralisée et la gestion des accès réseau avec portail captif.",
      technologies: ["FreeRADIUS", "DaloRADIUS", "Coova-Chilli", "Linux"],
      icon: <Server className="w-6 h-6" />,
      color: "green",
      link: "",
      github: ""
    },
    {
      title: "Portail Captif Coova-Chilli",
      category: "Réseaux",
      description: "Déploiement d'un portail captif pour contrôler l'accès Internet avec authentification et gestion des utilisateurs.",
      technologies: ["Coova-Chilli", "Apache", "MySQL", "PHP"],
      icon: <Globe className="w-6 h-6" />,
      color: "blue",
      link: "",
      github: ""
    },
    {
      title: "Automatisation Python",
      category: "DevOps",
      description: "Scripts Python pour l'automatisation des tâches système, le traitement de données et l'administration réseau.",
      technologies: ["Python", "Bash", "Automation", "APIs"],
      icon: <Settings className="w-6 h-6" />,
      color: "yellow",
      link: "",
      github: ""
    }
  ];

  // Thème avec accent de couleur
  const theme = {
    bg: darkMode 
      ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950' 
      : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50',
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    sidebar: darkMode 
      ? 'bg-slate-900/90 border-slate-700/50' 
      : 'bg-white/95 border-blue-200',
    card: darkMode 
      ? 'bg-slate-800/70 border-slate-700/50' 
      : 'bg-white/80 border-blue-100',
    cardHover: darkMode 
      ? 'hover:border-indigo-500/50 hover:shadow-indigo-500/10' 
      : 'hover:border-indigo-400 hover:shadow-indigo-400/20',
    button: darkMode 
      ? 'bg-slate-800/80 hover:bg-slate-700/90' 
      : 'bg-blue-50 hover:bg-blue-100',
    activeButton: darkMode 
      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white' 
      : 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white',
    border: darkMode ? 'border-slate-700/50' : 'border-blue-200',
    accent: darkMode ? 'text-indigo-400' : 'text-indigo-600',
  };

  const colorMap = {
    blue: darkMode ? 'text-blue-400' : 'text-blue-600',
    green: darkMode ? 'text-green-400' : 'text-green-600',
    red: darkMode ? 'text-red-400' : 'text-red-600',
    purple: darkMode ? 'text-purple-400' : 'text-purple-600',
    yellow: darkMode ? 'text-yellow-400' : 'text-yellow-600',
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-500`}>
      {/* Bouton Menu Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed top-4 left-4 z-50 lg:hidden p-3 rounded-xl ${theme.button} shadow-lg`}
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Toggle Dark Mode Mobile (en haut à droite sur mobile) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 z-50 lg:hidden p-3 rounded-xl ${theme.button} shadow-lg`}
        title={darkMode ? "Mode clair" : "Mode sombre"}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Overlay pour mobile */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 lg:w-96 ${theme.sidebar} backdrop-blur-md border-r p-6 lg:p-8 overflow-y-auto transition-all duration-300 shadow-2xl z-40 ${
        menuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Toggle Mode - Desktop seulement */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`hidden lg:block absolute top-6 right-6 p-3 rounded-xl ${theme.button} transition-all shadow-lg hover:scale-105`}
          title={darkMode ? "Mode clair" : "Mode sombre"}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <div className="text-center mb-6 lg:mb-8 mt-12 lg:mt-4">
          {/* Photo de profil */}
            <div className="w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-4 lg:mb-6 rounded-2xl overflow-hidden border-4 border-indigo-500/40 shadow-2xl shadow-indigo-500/20">
            <img 
              src="/photo.jpg" 
              alt="REMI ELI KOKOU AKAKPO"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 flex items-center justify-center text-4xl lg:text-5xl font-bold">
              RA
            </div>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold mb-2">Remi Eli Kokou AKAKPO</h1>
          <p className={`${theme.accent} text-xs lg:text-sm font-medium mb-4`}>Ingénieur Systèmes & Cloud</p>
          
          {/* Bouton CV */}
          <a 
            href="/CV_AKAKPO_REMI_ELI_KOKOU.pdf" 
            download="CV_REMI_AKAKPO.pdf"
            className={`${theme.button} px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl font-medium transition-all hover:scale-105 shadow-lg flex items-center gap-2 mx-auto mb-4 lg:mb-6 text-sm lg:text-base w-fit`}
          >
            <Download className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
            Voir mon CV
          </a>
        </div>

        <nav className="space-y-2 mb-6 lg:mb-8">
          {[
            { id: 'about', label: 'À propos' },
            { id: 'specializations', label: 'Domaines' },
            { id: 'education', label: 'Formation' },
            
            { id: 'experience', label: 'Expériences' },
            { id: 'projects', label: 'Projets' },
            
            { id: 'skills', label: 'Compétences' },
            { id: 'soft-skills', label: 'Soft Skills' }
          ].map(section => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setMenuOpen(false); // Fermer le menu sur mobile après clic
              }}
              className={`w-full text-left px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl transition-all font-medium text-sm lg:text-base ${
                activeSection === section.id
                  ? theme.activeButton + ' shadow-lg'
                  : `${theme.textSecondary} ${theme.button}`
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className={`space-y-4 pt-6 border-t ${theme.border}`}>
          <h3 className={`text-xs font-bold ${theme.textSecondary} uppercase tracking-wider`}>Contact</h3>
          
          {/* Boutons de contact */}
          <div className="space-y-2 lg:space-y-3">
            <a 
              href={`https://wa.me/${aboutMe.phone.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.button} flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl transition-all hover:scale-105 shadow-md`}
            >
              <MessageCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
              <span className="text-xs lg:text-sm font-medium">WhatsApp</span>
            </a>
            
            <a 
              href={`mailto:${aboutMe.email}`}
              className={`${theme.button} flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl transition-all hover:scale-105 shadow-md`}
            >
              <Mail className="w-4 lg:w-5 h-4 lg:h-5 text-red-500" />
              <span className="text-xs lg:text-sm font-medium">Email</span>
            </a>
            
            <a 
              href="https://github.com/remieliakakpo"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.button} flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl transition-all hover:scale-105 shadow-md`}
            >
              <Github className="w-4 lg:w-5 h-4 lg:h-5" />
              <span className="text-xs lg:text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>

        <div className={`space-y-3 pt-4 lg:pt-6 border-t ${theme.border} mt-4 lg:mt-6`}>
          <h3 className={`text-xs font-bold ${theme.textSecondary} uppercase tracking-wider`}>Langues</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-xs lg:text-sm font-medium">Français</p>
              <span className={`text-xs ${theme.textSecondary} ${theme.button} px-2 py-0.5 lg:py-1 rounded-full`}>Natif</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs lg:text-sm font-medium">Anglais</p>
              <span className={`text-xs ${theme.textSecondary} ${theme.button} px-2 py-0.5 lg:py-1 rounded-full`}>B1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-96 min-h-screen overflow-y-auto">
        <div className="p-6 lg:p-12 pt-20 lg:pt-12">
          <div className="max-w-6xl mx-auto">
          
          {/* About Section */}
          {activeSection === 'about' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Bienvenue sur mon Portfolio
                </h2>
                <div className={`${theme.card} backdrop-blur-md border rounded-2xl p-6 lg:p-8 shadow-xl`}>
                  <div className="flex items-start gap-4 lg:gap-6 mb-4 lg:mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">{aboutMe.name}</h3>
                      <p className={`text-lg lg:text-xl ${theme.accent} font-medium mb-4 lg:mb-6`}>{aboutMe.title}</p>
                      <p className={`${theme.textSecondary} leading-relaxed text-base lg:text-lg`}>
                        {aboutMe.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 lg:pt-6 border-t ${theme.border}`}>
                    <div className="flex items-center gap-3">
                      <Calendar className={`w-5 h-5 ${theme.accent}`} />
                      
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-5 h-5 ${theme.accent}`} />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specializations Section */}
          {activeSection === 'specializations' && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 flex items-center gap-3">
                <div className="w-1.5 lg:w-2 h-8 lg:h-10 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"></div>
                Domaines de Prédilection
              </h2>
              <div className="grid gap-4 lg:gap-6">
                {specializations.map((spec, i) => (
                  <div key={i} className={`${theme.card} backdrop-blur-md border rounded-2xl p-6 lg:p-8 ${theme.cardHover} transition-all hover:shadow-xl group`}>
                    <div className="flex items-start gap-4 lg:gap-6">
                      <div className={`${colorMap[spec.color]} group-hover:scale-110 transition-transform flex-shrink-0`}>
                        {spec.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-2xl font-semibold mb-2 lg:mb-3">{spec.title}</h3>
                        <p className={`${theme.textSecondary} leading-relaxed text-sm lg:text-base`}>{spec.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION PROJETS */}
          {activeSection === 'projects' && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 flex items-center gap-3">
                <div className="w-1.5 lg:w-2 h-8 lg:h-10 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                Projets Réalisés
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {projects.map((project, i) => (
                  <div key={i} className={`${theme.card} backdrop-blur-md border rounded-2xl p-6 ${theme.cardHover} transition-all hover:shadow-xl group relative overflow-hidden`}>
                    {/* Badge catégorie */}
                    <div className={`absolute top-4 right-4 ${theme.button} px-3 py-1 rounded-full text-xs font-medium`}>
                      {project.category}
                    </div>
                    
                    <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                      <div className={`${colorMap[project.color]} group-hover:scale-110 transition-transform p-2.5 lg:p-3 ${theme.button} rounded-xl flex-shrink-0`}>
                        {project.icon}
                      </div>
                      <div className="flex-1 pr-16 lg:pr-20">
                        <h3 className="text-lg lg:text-xl font-bold mb-2">{project.title}</h3>
                      </div>
                    </div>
                    
                    <p className={`${theme.textSecondary} leading-relaxed text-xs lg:text-sm mb-3 lg:mb-4`}>
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, j) => (
                        <span key={j} className={`${theme.button} px-2 py-1 rounded-md text-xs font-medium`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Liens */}
                    <div className={`flex flex-col sm:flex-row gap-2 lg:gap-3 pt-3 lg:pt-4 border-t ${theme.border}`}>
                      {project.link ? (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 ${theme.button} px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all hover:scale-105`}
                        >
                          <ExternalLink className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
                          Voir le projet
                        </a>
                      ) : (
                        <button 
                          disabled
                          className={`flex items-center justify-center gap-2 ${theme.button} px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium opacity-50 cursor-not-allowed`}
                          title="Lien à venir"
                        >
                          <ExternalLink className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
                          Bientôt disponible
                        </button>
                      )}
                      
                      {project.github ? (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 ${theme.button} px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all hover:scale-105`}
                        >
                          <Github className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
                          Code
                        </a>
                      ) : (
                        <button 
                          disabled
                          className={`flex items-center justify-center gap-2 ${theme.button} px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium opacity-50 cursor-not-allowed`}
                          title="Code à venir"
                        >
                          <Github className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
                          Code
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Section - CHRONOLOGIE */}
          {activeSection === 'experience' && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 flex items-center gap-3">
                <div className="w-1.5 lg:w-2 h-8 lg:h-10 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                Expériences Professionnelles
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className={`absolute left-4 lg:left-6 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-slate-700' : 'bg-blue-200'}`}></div>
                
                <div className="space-y-6 lg:space-y-8">
                  {experiences.map((exp, i) => (
                    <div key={i} className="relative pl-12 lg:pl-16">
                      {/* Timeline dot */}
                      <div className={`absolute left-2.5 lg:left-3 top-2 w-4 h-4 lg:w-6 lg:h-6 rounded-full ${exp.ongoing ? 'bg-green-500 animate-pulse' : darkMode ? 'bg-slate-600' : 'bg-blue-400'} border-2 lg:border-4 ${darkMode ? 'border-slate-900' : 'border-blue-50'}`}></div>
                      
                      <div className={`${theme.card} backdrop-blur-md border rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg lg:text-xl font-bold mb-1">{exp.title}</h3>
                            <p className={`${theme.accent} font-medium text-sm lg:text-base`}>{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
                            <span className={`text-xs lg:text-sm ${theme.textSecondary} ${theme.button} px-2 lg:px-3 py-1 rounded-full font-medium`}>
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        <ul className={`space-y-1.5 lg:space-y-2 ${theme.textSecondary} text-sm lg:text-base`}>
                          {exp.tasks.map((task, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className={`${theme.accent} mt-1`}>▸</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Education Section - CHRONOLOGIE */}
          {activeSection === 'education' && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 flex items-center gap-3">
                <div className="w-1.5 lg:w-2 h-8 lg:h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                Parcours Académique
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className={`absolute left-4 lg:left-6 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-slate-700' : 'bg-blue-200'}`}></div>
                
                <div className="space-y-6 lg:space-y-8">
                  {education.map((edu, i) => (
                    <div key={i} className="relative pl-12 lg:pl-16">
                      {/* Timeline dot */}
                      <div className={`absolute left-2.5 lg:left-3 top-2 w-4 h-4 lg:w-6 lg:h-6 rounded-full ${edu.ongoing ? 'bg-blue-500 animate-pulse' : darkMode ? 'bg-slate-600' : 'bg-indigo-400'} border-2 lg:border-4 ${darkMode ? 'border-slate-900' : 'border-blue-50'}`}></div>
                      
                      <div className={`${theme.card} backdrop-blur-md border rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all`}>
                        <div className="flex items-start justify-between gap-3 lg:gap-4 mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg lg:text-xl font-bold mb-2">{edu.degree}</h3>
                            <p className={`${theme.accent} font-medium mb-2 text-sm lg:text-base`}>{edu.school}</p>
                            {edu.note && (
                              <p className={`text-xs lg:text-sm ${theme.textSecondary} italic`}>{edu.note}</p>
                            )}
                          </div>
                          <GraduationCap className={`w-6 lg:w-8 h-6 lg:h-8 ${theme.accent} flex-shrink-0`} />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-6 text-xs lg:text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className={theme.textSecondary}>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className={theme.textSecondary}>{edu.location}</span>
                          </div>
                        </div>
                        {edu.grade && (
                          <div className={`mt-4 pt-4 border-t ${theme.border}`}>
                            <span className={`${theme.button} px-3 py-1 rounded-full text-sm font-medium`}>
                              {edu.grade}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Technical Skills Section */}
          {activeSection === 'skills' && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 flex items-center gap-3">
                <div className="w-1.5 lg:w-2 h-8 lg:h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                Compétences Techniques
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {Object.entries(technicalSkills).map(([category, skills], i) => (
                  <div key={i} className={`${theme.card} backdrop-blur-md border rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all`}>
                    <h3 className="text-base lg:text-lg font-bold mb-3 lg:mb-4 flex items-center gap-2">
                      <div className={`w-1 lg:w-1.5 h-5 lg:h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full`}></div>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, j) => (
                        <span key={j} className={`${theme.button} px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-transform hover:scale-105`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Soft Skills Section */}
          {activeSection === 'soft-skills' && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 flex items-center gap-3">
                <div className="w-1.5 lg:w-2 h-8 lg:h-10 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
                Soft Skills
              </h2>
              <div className="grid gap-4 lg:gap-6">
                {Object.entries(softSkills).map(([category, skills], i) => (
                  <div key={i} className={`${theme.card} backdrop-blur-md border rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all`}>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">{category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                      {skills.map((skill, j) => (
                        <div key={j} className={`${theme.button} p-3 lg:p-4 rounded-xl text-center font-medium text-sm lg:text-base transition-all hover:scale-105`}>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className={`mt-12 lg:mt-16 pt-6 lg:pt-8 border-t ${theme.border} text-center ${theme.textSecondary} text-xs lg:text-sm`}>
            <p>© 2025 Remi Eli Kokou Akakpo - Tous droits réservés</p>
          </div>
        </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}