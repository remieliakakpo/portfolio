import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Briefcase, Code, Database, Brain, Globe, Moon, Sun, Download, GraduationCap, Calendar, MapPin, Phone, MessageCircle, Cloud, Server, Settings, Network, BarChart } from 'lucide-react';

export default function ModernPortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(true);

  const aboutMe = {
    name: "REMI ELI KOKOU AKAKPO",
    title: "Ingénieur Systèmes & Cloud | Spécialiste Infrastructure",
    age: "22 ans",
    location: "Lomé, Togo",
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
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-500`}>
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen w-96 ${theme.sidebar} backdrop-blur-md border-r p-8 overflow-y-auto transition-colors duration-500 shadow-2xl`}>
        {/* Toggle Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`absolute top-6 right-6 p-3 rounded-xl ${theme.button} transition-all shadow-lg hover:scale-105`}
          title={darkMode ? "Mode clair" : "Mode sombre"}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <div className="text-center mb-8 mt-4">
          {/* Photo de profil - PLUS GRANDE */}
          <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-indigo-500/40 shadow-2xl shadow-indigo-500/20">
            <img 
              src="/photo.jpg" 
              alt="REMI ELI KOKOU AKAKPO"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-48 h-48 bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 flex items-center justify-center text-5xl font-bold">
              RA
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Remi Eli Kokou Akakpo</h1>
          <p className={`${theme.accent} text-sm font-medium mb-4`}>Ingénieur Systèmes & Cloud</p>
          
          {/* Bouton CV */}
          <a 
            href="/CV_AKAKPO_REMI_ELI_KOKOU.pdf" 
            download="CV_REMI_AKAKPO.pdf"
            className={`${theme.button} px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 shadow-lg flex items-center gap-2 mx-auto mb-6`}
          >
            <Download className="w-4 h-4" />
            Voir mon CV
          </a>
        </div>

        <nav className="space-y-2 mb-8">
          {[
            { id: 'about', label: 'À propos' },
            { id: 'specializations', label: 'Domaines' },
            { id: 'experience', label: 'Expériences' },
            { id: 'education', label: 'Formation' },
            { id: 'skills', label: 'Compétences' },
            { id: 'soft-skills', label: 'Soft Skills' }
          ].map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-5 py-3 rounded-xl transition-all font-medium ${
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
          <div className="space-y-3">
            <a 
              href={`https://wa.me/${aboutMe.phone.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.button} flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:scale-105 shadow-md`}
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            
            <a 
              href={`mailto:${aboutMe.email}`}
              className={`${theme.button} flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:scale-105 shadow-md`}
            >
              <Mail className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium">Email</span>
            </a>
            
            <a 
              href="https://github.com/remieliakakpo"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.button} flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:scale-105 shadow-md`}
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>

        <div className={`space-y-3 pt-6 border-t ${theme.border} mt-6`}>
          <h3 className={`text-xs font-bold ${theme.textSecondary} uppercase tracking-wider`}>Langues</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">Français</p>
              <span className={`text-xs ${theme.textSecondary} ${theme.button} px-2 py-1 rounded-full`}>Natif</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">Anglais</p>
              <span className={`text-xs ${theme.textSecondary} ${theme.button} px-2 py-1 rounded-full`}>B1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-96 p-12">
        <div className="max-w-6xl mx-auto">
          
          {/* About Section */}
          {activeSection === 'about' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Bienvenue sur mon Portfolio
                </h2>
                <div className={`${theme.card} backdrop-blur-md border rounded-2xl p-8 shadow-xl`}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{aboutMe.name}</h3>
                      <p className={`text-xl ${theme.accent} font-medium mb-6`}>{aboutMe.title}</p>
                      <p className={`${theme.textSecondary} leading-relaxed text-lg`}>
                        {aboutMe.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`grid grid-cols-2 gap-4 pt-6 border-t ${theme.border}`}>
                    <div className="flex items-center gap-3">
                      <Calendar className={`w-5 h-5 ${theme.accent}`} />
                      <div>
                        <p className={`text-xs ${theme.textSecondary}`}>Âge</p>
                        <p className="font-medium">{aboutMe.age}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-5 h-5 ${theme.accent}`} />
                      <div>
                        <p className={`text-xs ${theme.textSecondary}`}>Localisation</p>
                        <p className="font-medium">{aboutMe.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specializations Section */}
          {activeSection === 'specializations' && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"></div>
                Domaines de Prédilection
              </h2>
              <div className="grid gap-6">
                {specializations.map((spec, i) => (
                  <div key={i} className={`${theme.card} backdrop-blur-md border rounded-2xl p-8 ${theme.cardHover} transition-all hover:shadow-xl group`}>
                    <div className="flex items-start gap-6">
                      <div className={`${colorMap[spec.color]} group-hover:scale-110 transition-transform`}>
                        {spec.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">{spec.title}</h3>
                        <p className={`${theme.textSecondary} leading-relaxed text-base`}>{spec.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Section - CHRONOLOGIE */}
          {activeSection === 'experience' && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                Expériences Professionnelles
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-slate-700' : 'bg-blue-200'}`}></div>
                
                <div className="space-y-8">
                  {experiences.map((exp, i) => (
                    <div key={i} className="relative pl-16">
                      {/* Timeline dot */}
                      <div className={`absolute left-3 top-2 w-6 h-6 rounded-full ${exp.ongoing ? 'bg-green-500 animate-pulse' : darkMode ? 'bg-slate-600' : 'bg-blue-400'} border-4 ${darkMode ? 'border-slate-900' : 'border-blue-50'}`}></div>
                      
                      <div className={`${theme.card} backdrop-blur-md border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all`}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                            <p className={`${theme.accent} font-medium`}>{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className={`text-sm ${theme.textSecondary} ${theme.button} px-3 py-1 rounded-full font-medium`}>
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        <ul className={`space-y-2 ${theme.textSecondary}`}>
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
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                Parcours Académique
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-slate-700' : 'bg-blue-200'}`}></div>
                
                <div className="space-y-8">
                  {education.map((edu, i) => (
                    <div key={i} className="relative pl-16">
                      {/* Timeline dot */}
                      <div className={`absolute left-3 top-2 w-6 h-6 rounded-full ${edu.ongoing ? 'bg-blue-500 animate-pulse' : darkMode ? 'bg-slate-600' : 'bg-indigo-400'} border-4 ${darkMode ? 'border-slate-900' : 'border-blue-50'}`}></div>
                      
                      <div className={`${theme.card} backdrop-blur-md border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all`}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                            <p className={`${theme.accent} font-medium mb-2`}>{edu.school}</p>
                            {edu.note && (
                              <p className={`text-sm ${theme.textSecondary} italic`}>{edu.note}</p>
                            )}
                          </div>
                          <GraduationCap className={`w-8 h-8 ${theme.accent}`} />
                        </div>
                        <div className="flex items-center gap-6 text-sm">
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
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                Compétences Techniques
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(technicalSkills).map(([category, skills], i) => (
                  <div key={i} className={`${theme.card} backdrop-blur-md border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all`}>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <div className={`w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full`}></div>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, j) => (
                        <span key={j} className={`${theme.button} px-3 py-1.5 rounded-lg text-sm font-medium transition-transform hover:scale-105`}>
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
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
                Soft Skills
              </h2>
              <div className="grid gap-6">
                {Object.entries(softSkills).map(([category, skills], i) => (
                  <div key={i} className={`${theme.card} backdrop-blur-md border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all`}>
                    <h3 className="text-2xl font-bold mb-6">{category}</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {skills.map((skill, j) => (
                        <div key={j} className={`${theme.button} p-4 rounded-xl text-center font-medium transition-all hover:scale-105`}>
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
          <div className={`mt-16 pt-8 border-t ${theme.border} text-center ${theme.textSecondary} text-sm`}>
            <p>© 2025 Remi Eli Kokou Akakpo - Tous droits réservés</p>
          
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