/**
 * Internationalization (i18n) Dictionary for Hamdouni Mouldi Portfolio
 * Supports French (FR), Arabic (AR with RTL), and English (EN)
 */
const translations = {
  fr: {
    brandSubtitle: "AGRICULTURE · GESTION · DÉVELOPPEMENT",
    nav: {
      home: "Accueil",
      career: "Mon parcours",
      expertise: "Expertise",
      results: "Réalisations",
      governance: "Gouvernance",
      gallery: "Galerie",
      contact: "Contact"
    },
    hero: {
      tag: "MON EXPERTISE",
      title: "Une expertise au service d'une agriculture durable et performante",
      subtitle: "Une expérience de terrain et une vision globale pour des exploitations plus productives, plus résilientes et tournées vers l'avenir.",
      cta: "Découvrir mes réalisations",
      scriptNote: "Des terres mieux exploitées, une Tunisie plus forte"
    },
    expertise: {
      tag: "MES 6 DOMAINES D'EXPERTISE",
      title: "Des compétences multiples au service du secteur agricole",
      desc: "De la mécanisation à la gestion des projets, en passant par l'élevage et l'agroalimentaire, chaque domaine est abordé avec la même exigence : l'efficacité, la durabilité et la valorisation des ressources.",
      learnMore: "En savoir plus",
      cards: [
        {
          id: "machinisme",
          num: "01",
          title: "Machinisme",
          desc: "Étude, gestion et maintenance des machines agricoles.",
          detail: "Optimisation des parcs de tracteurs, moissonneuses et équipements lourds. Gestion des programmes de maintenance préventive et curative, réduction des coûts de carburant et déploiement de technologies de guidage de précision sur des milliers d'hectares.",
          keyPoints: [
            "Audits énergétiques et renouvellement de flottes de machines agricoles",
            "Mise en place d'ateliers de maintenance intégrés et formation des équipes",
            "Enseignement spécialisé du machinisme agricole à l'ESA Mateur"
          ]
        },
        {
          id: "hydraulique",
          num: "02",
          title: "Hydraulique",
          desc: "Étude, gestion et maintenance des équipements d'irrigation.",
          detail: "Conception et modernisation des réseaux d'irrigation sous pression, pivots centraux, goutte-à-goutte et forages profonds. Gestion rationnelle des ressources hydriques en zones semi-arides.",
          keyPoints: [
            "Pilotage de grands réseaux d'irrigation par rampe et pivots",
            "Gestion des stations de pompage et de filtration haute efficacité",
            "Stratégies d'efficience hydrique face au stress climatique"
          ]
        },
        {
          id: "avicole",
          num: "03",
          title: "Élevage avicole",
          desc: "Gestion et maintenance du matériel et des équipements d'élevage.",
          detail: "Supervision d'unités avicoles modernes (poulets de chair et ponte) produisant plus de 1 000 000 de volailles par an. Gestion de la ventilation dynamique, alimentation automatisée et biosécurité.",
          keyPoints: [
            "Membre du Conseil d'Administration de la Société Tunisienne Avicole (SOTAVI)",
            "Optimisation du ratio de conversion alimentaire et contrôle d'ambiance",
            "Respect strict des normes sanitaires et traçabilité de la filière"
          ]
        },
        {
          id: "bovin",
          num: "04",
          title: "Élevage bovin",
          desc: "Gestion et entretien du matériel et des équipements d'élevage bovin.",
          detail: "Gestion de cheptels laitiers et à viande de premier rang. Modernisation des salles de traite mécanisées, tanks à lait réfrigérés, stabulations libres et protocoles de sélection génétique.",
          keyPoints: [
            "Direction de complexes abritant plus de 50 000 têtes de bétail",
            "Amélioration de la productivité laitière et des rations fourragères",
            "Membre fondateur et actif d'associations d'éleveurs"
          ]
        },
        {
          id: "agroalimentaire",
          num: "05",
          title: "Agro-alimentaire",
          desc: "Gestion du matériel frigorifique, oléicole et d'alimentation animale.",
          detail: "Exploitation d'huileries continues modernes à haut rendement (+ 10 000 tonnes d'huile d'olive), conserveries industrielles, usines d'aliments composés et chambres froides à atmosphère contrôlée.",
          keyPoints: [
            "Supervision d'huileries de trituration d'olive à haute performance",
            "Gestion de chaînes de froid industriel et conservation de fruits et légumes",
            "Unité industrielle de décorticage d'amandes et concentré de tomate (Tawila)"
          ]
        },
        {
          id: "gestion",
          num: "06",
          title: "Gestion & projets",
          desc: "Étude technico-économique des projets agricoles et gestion des entreprises.",
          detail: "Direction générale opérationnelle, restructuration financière, audits d'investissement et pilotage stratégique de grands complexes agro-industriels domaniaux.",
          keyPoints: [
            "Directeur Général Adjoint de l'Office des Terres Domaniales (OTD)",
            "Études de faisabilité technico-économique et plans directeurs d'investissement",
            "Coordination de plus de 4 directions centrales et de réseaux régionaux"
          ]
        }
      ]
    },
    career: {
      tag: "MON PARCOURS",
      title: "Une carrière au service de l'agriculture tunisienne",
      desc: "« De la terre aux hommes, une même conviction : construire une agriculture durable et performante. »",
      signature: "Hamdouni Mouldi",
      stepsTitle: "LES ÉTAPES DE MA CARRIÈRE",
      mapTitle: "7 régions",
      mapHint: "1 même engagement ➔",
      stripTitle: "MON PARCOURS EN DÉTAIL",
      bannerQuote: "« L'agriculture est plus qu'un métier, c'est un engagement pour les générations futures. »",
      bannerCta: "Découvrir mes expertises",
      learnMore: "Voir plus",
      specLabels: {
        specialisation: "Spécialisation",
        surface: "Surface exploitée",
        equipe: "Équipe encadrée",
        results: "Principaux résultats"
      },
      milestones: [
        {
          id: 1,
          num: "01",
          region: "Beja",
          regionLabel: "Béja",
          period: "1987",
          role: "Ingénieur des équipements",
          org: "Complexe Agro-Industriel Thibar (Béja)",
          title: "Complexe agro-industriel de Thibar — Béja",
          subtitle: "Ingénieur des équipements agricoles",
          desc: "Début de carrière marquant la gestion et modernisation du parc de machinisme, la cave viticole historique de Thibar et l'optimisation des ateliers mécaniques.",
          img: "public/images/career/career-thibar-beja.webp",
          specs: {
            specialisation: "Machinisme agricole & Viticulture",
            surface: "3 500 ha",
            equipe: "Techniciens & chefs d'ateliers",
            results: [
              "Modernisation du parc de matériel agricole",
              "Mise en place de protocoles de maintenance",
              "Optimisation des rendements viticoles"
            ]
          }
        },
        {
          id: 2,
          num: "02",
          region: "Sidi Bouzid",
          regionLabel: "Sidi Bouzid",
          period: "1988 – 1995",
          role: "Complexe agricole",
          org: "Complexe Agro-Industriel Tawila (Sidi Bouzid)",
          title: "Complexe agro-industriel Tawila — Sidi Bouzid",
          subtitle: "Responsable d'équipement & gestion agro-industrielle",
          desc: "Gestion technique et logistique des unités de production : huilerie continue de trituration, unité de décorticage d'amandes, conserverie et réseaux d'irrigation par pivot.",
          img: "public/images/career/career-tawila-sidibouzid.webp",
          specs: {
            specialisation: "Oléiculture, Amandiers & Maraîchage",
            surface: "4 200 ha",
            equipe: "Cadres techniques & opérateurs",
            results: [
              "Modernisation de l'huilerie à haut débit",
              "Gestion de forages profonds & pivots",
              "Développement de la filière amandier"
            ]
          }
        },
        {
          id: 3,
          num: "03",
          region: "Jendouba",
          regionLabel: "Jendouba",
          period: "1995 – 2000",
          role: "Complexe agricole",
          org: "Complexe Agricole Chemtou (Jendouba)",
          title: "Complexe agricole Chemtou — Jendouba",
          subtitle: "Directeur du complexe agricole",
          desc: "Gestion intégrée d'arboriculture fruitière intensive, grandes cultures céréalières dans la vallée de la Medjerda, conduite de cheptel bovin laitier et grands réseaux d'irrigation.",
          img: "public/images/expertise/expertise-hydraulique.webp",
          specs: {
            specialisation: "Grandes cultures, Arboriculture & Lait",
            surface: "2 800 ha",
            equipe: "Ingénieurs, bergers & tractoristes",
            results: [
              "Rendements céréaliers remarquables",
              "Amélioration génétique du troupeau laitier",
              "Efficience des réseaux d'irrigation Medjerda"
            ]
          }
        },
        {
          id: 4,
          num: "04",
          region: "Nabeul",
          regionLabel: "Nabeul",
          period: "2000 – 2005",
          role: "Complexe agricole",
          org: "Complexe Agricole Intilaka (Nabeul, Cap Bon)",
          title: "Complexe agricole Intilaka — Nabeul",
          subtitle: "Directeur du complexe du Cap Bon",
          desc: "Direction stratégique des vergers d'agrumes renommés du Cap Bon, vignobles, oliveraies, élevage avicole moderne et station de conditionnement de fruits.",
          img: "public/images/gallery/gallery-olives-harvest.webp",
          specs: {
            specialisation: "Agrumiculture, Vigne & Aviculture",
            surface: "2 200 ha",
            equipe: "Spécialistes agrumes & techniciens",
            results: [
              "Agrément d'exportation agrumicole",
              "Automatisation des élevages avicoles",
              "Rénovation complète du goutte-à-goutte"
            ]
          }
        },
        {
          id: 5,
          num: "05",
          region: "Sfax",
          regionLabel: "Sfax",
          period: "2005 – 2013",
          role: "Complexe agricole",
          org: "Complexe Agricole Es-Salaam (Sfax)",
          title: "Complexe agricole Es-Salaam — Sfax",
          subtitle: "Directeur du complexe agro-oléicole",
          desc: "Pilotage d'un immense domaine oléicole en zone aride : conduite d'oliviers à haute productivité d'huile, amandiers, cheptel ovin de race locale et valorisation des sous-produits.",
          img: "public/images/expertise/expertise-agroalimentaire.webp",
          specs: {
            specialisation: "Oléiculture aride & Élevage ovin",
            surface: "8 000 ha",
            equipe: "Équipes techniques & saisonniers",
            results: [
              "Production record d'huile d'olive extra-vierge",
              "Résilience hydrique face aux sécheresses",
              "Amélioration pérenne de la rentabilité"
            ]
          }
        },
        {
          id: 6,
          num: "06",
          region: "Bizerte",
          regionLabel: "Bizerte",
          period: "2013 – 2015",
          role: "Direction du Département d'équipement",
          org: "Complexe Agricole Ghazal Mateur (Bizerte)",
          title: "Complexe agricole Ghazal Mateur — Bizerte",
          subtitle: "Ingénieur en chef, Directeur du complexe",
          desc: "Gestion et développement des différentes spéculations du complexe agricole : arboricole, oléicole, vinicole, amandier, pistachier, grande culture, élevage bovin et ovin, avicole.",
          img: "public/images/career/career-ghazala-bizerte.webp",
          specs: {
            specialisation: "Agriculture diversifiée & Élevage",
            surface: "6 500 ha",
            equipe: "Cadres, vétérinaires & ouvriers",
            results: [
              "Développement des productions intégrées",
              "Modernisation des équipements techniques",
              "Amélioration de la rentabilité globale"
            ]
          }
        },
        {
          id: 7,
          num: "07",
          region: "Tunis",
          regionLabel: "Tunis",
          period: "2015 – Présent",
          role: "Direction générale adjointe (depuis 2015)",
          org: "Office des Terres Domaniales (OTD Siège, Tunis)",
          title: "Office des Terres Domaniales — Direction Générale",
          subtitle: "Ingénieur Général · Directeur Général Adjoint",
          desc: "Pilotage stratégique, supervision nationale de l'ensemble des directions techniques, équipements, finances et complexes domaniaux du territoire national tunisien.",
          img: "public/images/gallery/gallery-agro-complex.webp",
          specs: {
            specialisation: "Gouvernance & Stratégie nationale",
            surface: "160 000+ ha (national)",
            equipe: "Directions centrales & coordinations",
            results: [
              "Plan national de sécurité alimentaire",
              "Modernisation du parc d'équipements étatique",
              "Digitalisation du contrôle de gestion OTD"
            ]
          }
        }
      ]
    },
    results: {
      tag: "EN CHIFFRES",
      title: "Des résultats concrets",
      desc: "Une carrière au service du développement agricole et de la valorisation des territoires.",
      cta: "Voir tous les résultats",
      metrics: [
        { num: "+ 100 000 ha", label: "de terres exploitées (estimations cumulées)" },
        { num: "+ 50 000", label: "têtes de bétail (ovin et bovin)" },
        { num: "+ 1 000 000", label: "de volailles (par an)" },
        { num: "+ 10 000 t", label: "d'huile d'olive (par an)" },
        { num: "4+", label: "complexes agricoles dirigés" }
      ]
    },
    engagement: {
      tag: "MON ENGAGEMENT",
      title: "Transmettre, partager, construire l'avenir",
      quote: "« L'agriculture n'est pas seulement un métier, c'est un engagement pour les générations futures. »",
      author: "Hamdouni Mouldi",
      galleryTag: "GALERIE",
      cats: [
        { id: "all", label: "Tous" },
        { id: "machines", label: "Machines & champs" },
        { id: "elevage", label: "Élevage & terroirs" },
        { id: "agro", label: "Agroalimentaire" },
        { id: "territoires", label: "Territoires & projets" }
      ]
    },
    contact: {
      tag: "CONTACT & COORDONNÉES",
      title: "Un partenariat d'expertise pour vos projets agricoles",
      desc: "Disponible pour les missions d'audit technique, de restructuration d'exploitation, de gouvernance agro-industrielle et d'études de faisabilité.",
      locationTitle: "Adresse Professionnelle",
      location: "Office des Terres Domaniales, 60 Rue Alain Savary, 1003 Tunis",
      phoneTitle: "Téléphone",
      phone: "+216 98 213 250",
      emailTitle: "Email Institutionnel",
      email: "mouldi.hamdouni@otd.nat.tn",
      formName: "Nom et Prénom",
      namePlaceholder: "Votre nom complet",
      formEmail: "Adresse Email",
      emailPlaceholder: "nom@exemple.com",
      formSubject: "Objet",
      subjectPlaceholder: "Demande d'expertise / consultation",
      formMessage: "Votre Message",
      messagePlaceholder: "Détaillez vos besoins ou votre projet...",
      formSubmit: "Envoyer le message",
      formSuccess: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais."
    },
    footer: {
      rights: "Tous droits réservés. Hamdouni Mouldi — Ingénieur Général & Expert Agro-industriel.",
      backTop: "Haut de page ↑"
    }
  },

  ar: {
    brandSubtitle: "فلاحة · تسيير · تنمية",
    nav: {
      home: "الرئيسية",
      career: "مسيرتي المهنية",
      expertise: "مجالات الخبرة",
      results: "الإنجازات",
      governance: "الحوكمة",
      gallery: "المعرض",
      contact: "اتصل بي"
    },
    hero: {
      tag: "خبرتي الميدانية",
      title: "خبرة راسخة في خدمة فلاحة مستدامة وعالية الأداء",
      subtitle: "تجربة ميدانية عميقة ورؤية استراتيجية شاملة لتطوير مستغلات فلاحية أكثر إنتاجية وصموداً ومستعدة للمستقبل.",
      cta: "اكتشف إنجازاتي الميدانية",
      scriptNote: "أراضٍ تُستغل على نحو أفضل، لتونس أكثر قوة وازدهاراً"
    },
    expertise: {
      tag: "مجالات خبرتي الستة",
      title: "كفاءات متعددة وشاملة في خدمة القطاع الفلاحي",
      desc: "من المكننة الفلاحية إلى إدارة المشاريع، مروراً بالإنتاج الحيواني والصناعات الغذائية، يُدار كل قطاع بأعلى درجات الدقة والنجاعة وتثمين الموارد.",
      learnMore: "اكتشف المزيد",
      cards: [
        {
          id: "machinisme",
          num: "01",
          title: "المكننة الفلاحية",
          desc: "دراسة وتسيير وصيانة الآلات والمعدات الفلاحية الكبرى.",
          detail: "تحسين أساطيل الجرارات والحاصدات، ووضع برامج الصيانة الوقائية المتطورة، والتحكم في تكاليف الطاقة وإدخال التكنولوجيا الحديثة.",
          keyPoints: [
            "تجديد الأساطيل وإجراء التدقيق الفني الشامل",
            "تطوير ورشات الصيانة المركزية وتأطير الفرق الفنية",
            "تدريس مادة المكننة الفلاحية بالمدرسة العليا للفلاحة بماطر"
          ]
        },
        {
          id: "hydraulique",
          num: "02",
          title: "الهيدروليك والري",
          desc: "دراسة وتسيير وصيانة معدات ومنظومات الري الفلاحي.",
          detail: "تصميم وتحديث شبكات الري الموضعي والمحوري والري بقطرة قطرة ومحطات الضخ بالأراضي الشاسعة لمجابهة الشح المائي.",
          keyPoints: [
            "إدارة منظومات الري المحوري الحديثة على مئات الهكتارات",
            "التحكم في محطات الضخ والتصفية عالية النجاعة",
            "ترشيد استهلاك المياه والرفع من المردودية في المناطق شبه الجافة"
          ]
        },
        {
          id: "avicole",
          num: "03",
          title: "تربية الدواجن",
          desc: "تسيير وصيانة معدات ومنشآت الإنتاج الداجني الحديث.",
          detail: "إشراف متكامل على وحدات الإنتاج الداجني العصري بطاقة تفوق مليون طير سنوياً، مع التحكم في البيئة والمناخ والسلامة الصحية.",
          keyPoints: [
            "عضو مجلس إدارة الشركة التونسية للدواجن (سوطافي)",
            "تحسين معدلات التحويل الغذائي والمراقبة الدقيقة للمداجن",
            "التطبيق الصارم لقواعد الأمن الحيوي والمسار الصحي"
          ]
        },
        {
          id: "bovin",
          num: "04",
          title: "تربية الماشية والأبقار",
          desc: "تسيير وصيانة معدات منشآت تربية الأبقار والأغنام وإنتاج الحليب.",
          detail: "قيادة مستغلات كبرى تضم آلاف رؤوس الماشية، وتحديث قاعات الحلب الآلي وخزانات التبريد والتحسين الوراثي للأعلاف والقطيع.",
          keyPoints: [
            "إدارة مركبات تضم أكثر من 50,000 رأس ماشية (أبقار وأغنام)",
            "الرفع من جودة وإنتاجية الحليب واللحوم الحمراء",
            "عضوية نشطة في جمعيات مربي الماشية وتطوير السلالات"
          ]
        },
        {
          id: "agroalimentaire",
          num: "05",
          title: "الصناعات الغذائية",
          desc: "تسيير وصيانة المعدات وتبريد المنتجات ومعاصر زيت الزيتون.",
          detail: "إدارة معاصر زيت زيتون حديثة متكاملة بطاقة تفوق 10,000 طن زيت، ووحدات تحويل الطماطم وتقشير اللوز ومخازن التبريد.",
          keyPoints: [
            "إدارة معاصر زيت الزيتون العصرية ذات الجودة الممتازة",
            "الإشراف على غرف التبريد الصناعي لتخزين المنتجات الفلاحية",
            "تطوير وحدات تقشير اللوز وتصنيع المركزات بالطويلة"
          ]
        },
        {
          id: "gestion",
          num: "06",
          title: "إدارة المشاريع والمؤسسات",
          desc: "الدراسات الفنية والاقتصادية وإدارة وتطوير المركبات الفلاحية الكبرى.",
          detail: "الإدارة العامة والتشغيلية، إعادة الهيكلة المالية والتخطيط الاستراتيجي لأكبر المركبات الفلاحية والصناعية بديوان الأراضي الدولية.",
          keyPoints: [
            "المدير العام المساعد لديوان الأراضي الدولية (OTD)",
            "إعداد المخططات الاستثمارية ودراسات الجدوى الاقتصادية",
            "التنسيق والإشراف على مختلف الإدارات المركزية والجهوية"
          ]
        }
      ]
    },
    career: {
      tag: "مسيرتي المهنية",
      title: "مسيرة مكرسة لتطوير كبرى الأراضي الفلاحية التونسية",
      desc: "« من الأرض إلى الرجال، قناعة واحدة راسخة: بناء فِلاحة مستدامة وعالية الأداء. »",
      signature: "مولدي الحمدوني",
      stepsTitle: "مراحل مسيرتي المهنية",
      mapTitle: "7 جهات",
      mapHint: "التزام واحد ➔",
      stripTitle: "مسيرتي بالتفصيل",
      bannerQuote: "« الفلاحة أكثر من مجرد مهنة، إنها التزام للأجيال القادمة. »",
      bannerCta: "اكتشف مجالات خبرتي",
      learnMore: "المزيد",
      specLabels: {
        specialisation: "الاختصاص",
        surface: "المساحة المستغلة",
        equipe: "الفريق المشرف عليه",
        results: "أبرز النتائج"
      },
      milestones: [
        {
          id: 1,
          num: "01",
          region: "Beja",
          regionLabel: "باجة",
          period: "1987",
          role: "مهندس المعدات الفلاحية",
          org: "المركب الصناعي الفلاحي بتيبار (باجة)",
          title: "المركب الصناعي الفلاحي بتيبار — باجة",
          subtitle: "مهندس دولة للمعدات الفلاحية",
          desc: "انطلاقة المسيرة بإدارة ورشات المكننة والري وغرف التبريد ووحدات التحويل الغذائي بتيبار.",
          img: "public/images/career/career-thibar-beja.webp",
          specs: {
            specialisation: "المكننة الفلاحية وزراعة الكروم",
            surface: "3 500 هكتار",
            equipe: "تقنيون ورؤساء ورشات",
            results: [
              "تحديث أسطول الآلات الفلاحية",
              "إرساء بروتوكولات الصيانة الدورية",
              "تطوير مردودية التحويل الغذائي"
            ]
          }
        },
        {
          id: 2,
          num: "02",
          region: "Sidi Bouzid",
          regionLabel: "سيدي بوزيد",
          period: "1988 – 1995",
          role: "مركب فلاحي",
          org: "المركب الصناعي الفلاحي بالطويلة (سيدي بوزيد)",
          title: "المركب الصناعي الفلاحي بالطويلة — سيدي بوزيد",
          subtitle: "مسؤول المعدات والتسيير الصناعي الفلاحي",
          desc: "إدارة المعدات، معاصر الزيتون الحديثة، مصانع المعجون، تقشير اللوز، ومشاريع الري الموسعة.",
          img: "public/images/career/career-tawila-sidibouzid.webp",
          specs: {
            specialisation: "غراسات الزياتين واللوز والزراعات السقوية",
            surface: "4 200 هكتار",
            equipe: "إطارات تقنية وعمال",
            results: [
              "تحديث معصرة الزيتون ذات السعة العالية",
              "إدارة الآبار العميقة ومنظومات الري المحوري",
              "توسيع وتثمين غراسات اللوز"
            ]
          }
        },
        {
          id: 3,
          num: "03",
          region: "Jendouba",
          regionLabel: "جندوبة",
          period: "1995 – 2000",
          role: "مركب فلاحي",
          org: "المركب الفلاحي شمتو (جندوبة)",
          title: "المركب الفلاحي شمتو — جندوبة",
          subtitle: "مدير المركب الفلاحي بشمتو",
          desc: "إنتاج الغلال والزراعات الكبرى بمحاذاة حوض وادي مجردة وتربية قطيع الأبقار وتسيير شبكات الري المضغوط.",
          img: "public/images/expertise/expertise-hydraulique.webp",
          specs: {
            specialisation: "الزراعات الكبرى والغلال والألبان",
            surface: "2 800 هكتار",
            equipe: "مهندسون وتقنيون ورعاة",
            results: [
              "مردودية قياسية في الحبوب والقمح الصلب",
              "تحسين السلالات لقطيع الأبقار الحلوب",
              "نجاعة استغلال مياه مجردة"
            ]
          }
        },
        {
          id: 4,
          num: "04",
          region: "Nabeul",
          regionLabel: "نابل",
          period: "2000 – 2005",
          role: "مركب فلاحي",
          org: "المركب الفلاحي انطلاقة (نابل)",
          title: "المركب الفلاحي انطلاقة — نابل",
          subtitle: "مدير المركب الفلاحي بالوطن القبلي",
          desc: "تسيير قطاعات الحوامض والزياتين والكروم والزراعات الكبرى وتربية الدواجن ومحطة تعليب الثمار.",
          img: "public/images/gallery/gallery-olives-harvest.webp",
          specs: {
            specialisation: "الحوامض والكروم والدواجن",
            surface: "2 200 هكتار",
            equipe: "أخصائيو غراسات وتقنيون",
            results: [
              "حصول منتوجات الحوامض على معايير التصدير",
              "أتمتة وتحديث مداجن الدواجن",
              "تجديد شامل لمنظومة الري قطرة قطرة"
            ]
          }
        },
        {
          id: 5,
          num: "05",
          region: "Sfax",
          regionLabel: "صفاقس",
          period: "2005 – 2013",
          role: "مركب فلاحي",
          org: "المركب الفلاحي السلام (صفاقس)",
          title: "المركب الفلاحي السلام — صفاقس",
          subtitle: "مدير المركب الزيتي الفلاحي",
          desc: "إدارة غراسات الزيتون واللوز في المناطق الجافة، معاصر الزيتون الحديثة وتربية الأغنام وتثمين المنتجات الفرعية.",
          img: "public/images/expertise/expertise-agroalimentaire.webp",
          specs: {
            specialisation: "زيت الزيتون بالمناطق الجافة وتربية الأغنام",
            surface: "8 000 هكتار",
            equipe: "فرق فنية وتقنية وموسمية",
            results: [
              "إنتاج قياسي لزيت الزيتون البكر الممتاز",
              "تعزيز صمود الغراسات أمام الجفاف",
              "تحسين متواصل للمردودية المالية"
            ]
          }
        },
        {
          id: 6,
          num: "06",
          region: "Bizerte",
          regionLabel: "بنزرت",
          period: "2013 – 2015",
          role: "إدارة قسم المعدات / مركب فلاحي",
          org: "المركب الفلاحي غزالة ماطر (بنزرت)",
          title: "المركب الفلاحي غزالة ماطر — بنزرت",
          subtitle: "مهندس رئيس · مدير المركب الفلاحي",
          desc: "إدارة وتطوير مختلف الأنشطة الفلاحية بالمركب: غراسات مثمرة، زياتين، كروم، لوز، فستق، زراعات كبرى، تربية أبقار وأغنام، ودواجن.",
          img: "public/images/career/career-ghazala-bizerte.webp",
          specs: {
            specialisation: "فلاحة متعددة وتربية ماشية",
            surface: "6 500 هكتار",
            equipe: "إطارات وبياطرة وتقنيون",
            results: [
              "تطوير منظومة الإنتاج المندمج",
              "تحديث شامل للمعدات والورشات",
              "تحسين شامل للمردودية والنجاعة"
            ]
          }
        },
        {
          id: 7,
          num: "07",
          region: "Tunis",
          regionLabel: "تونس",
          period: "2015 – إلى اليوم",
          role: "الإدارة العامة المساعدة (منذ 2015)",
          org: "ديوان الأراضي الدولية (المقر الاجتماعي، تونس)",
          title: "ديوان الأراضي الدولية — الإدارة العامة",
          subtitle: "مهندس عام · المدير العام المساعد",
          desc: "القيادة الإستراتيجية والإشراف الوطني على كافة الإدارات الفنية والمعدات والمالية ومجمعات الأراضي الدولية بالجمهورية.",
          img: "public/images/gallery/gallery-agro-complex.webp",
          specs: {
            specialisation: "الحوكمة والإستراتيجية الوطنية",
            surface: "+160 000 هكتار (وطنياً)",
            equipe: "إدارات مركزية ومنسقون جهويون",
            results: [
              "المساهمة في المخطط الوطني للأمن الغذائي",
              "تحديث الأسطول الوطني لمعدات الدولة",
              "رقمنة منظومات مراقبة التصرف بالديوان"
            ]
          }
        }
      ]
    },
    results: {
      tag: "بالأرقام",
      title: "نتائج وإنجازات ملموسة",
      desc: "مسيرة كاملة في خدمة التنمية الفلاحية وتثمين الأراضي الوطنية التونسية.",
      cta: "عرض جميع النتائج",
      metrics: [
        { num: "+ 100 000 هك", label: "أراضٍ فلاحية مُستغلة ومُشرف عليها" },
        { num: "+ 50 000", label: "رأس ماشية (أبقار وأغنام)" },
        { num: "+ 1 000 000", label: "طير داجن (سنوياً)" },
        { num: "+ 10 000 طن", label: "زيت زيتون عالي الجودة (سنوياً)" },
        { num: "4+", label: "مركبات فلاحية كبرى تمت إدارتها" }
      ]
    },
    engagement: {
      tag: "التزامي ورسالتي",
      title: "نقل المعرفة، المشاركة، وبناء مستقبل الفلاحة",
      quote: "«الفلاحة ليست مجرد مهنة، بل هي أمانة والتزام وطني تجاه الأجيال القادمة.»",
      author: "مولدي حمدوني",
      galleryTag: "المعرض الميداني",
      cats: [
        { id: "all", label: "الكل" },
        { id: "machines", label: "المعدات والحقول" },
        { id: "elevage", label: "الإنتاج الحيواني" },
        { id: "agro", label: "الصناعات الغذائية" },
        { id: "territoires", label: "المركبات والمشاريع" }
      ]
    },
    contact: {
      tag: "التواصل والبيانات الرسمية",
      title: "شراكة وخبرة هندسية لتطوير مشاريعكم الفلاحية",
      desc: "على أتم الاستعداد لمهام التدقيق الفني، إعادة هيكلة المستغلات الفلاحية، حوكمة الصناعات الغذائية ودراسات الجدوى.",
      locationTitle: "العنوان المهني",
      location: "ديوان الأراضي الدولية، 60 نهج آلان سافاري، 1003 تونس",
      phoneTitle: "الهاتف المباشر",
      phone: "+216 98 213 250",
      emailTitle: "البريد الإلكتروني",
      email: "mouldi.hamdouni@otd.nat.tn",
      formName: "الاسم واللقب",
      namePlaceholder: "اسمكم الكامل",
      formEmail: "البريد الإلكتروني",
      emailPlaceholder: "name@example.com",
      formSubject: "موضوع الرسالة",
      subjectPlaceholder: "طلب استشارة / دراسة مشروع",
      formMessage: "نص الرسالة",
      messagePlaceholder: "يرجى توضيح استفساركم أو تفاصيل المشروع...",
      formSubmit: "إرسال الرسالة",
      formSuccess: "شكراً لتواصلكم. سيتم الرد على استفساركم في أقرب وقت."
    },
    footer: {
      rights: "جميع الحقوق محفوظة. مولدي حمدوني — مهندس عام وخبير في التسيير الفلاحي والصناعات الغذائية.",
      backTop: "إلى أعلى الصفحة ↑"
    }
  },

  en: {
    brandSubtitle: "AGRICULTURE · MANAGEMENT · DEVELOPMENT",
    nav: {
      home: "Home",
      career: "Career Story",
      expertise: "Expertise",
      results: "Key Results",
      governance: "Governance",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      tag: "MY EXPERTISE",
      title: "Expertise dedicated to sustainable and high-performing agriculture",
      subtitle: "Hands-on field experience combined with strategic oversight for farms that are more productive, resilient, and forward-looking.",
      cta: "Explore my achievements",
      scriptNote: "Better cultivated lands, a stronger Tunisia"
    },
    expertise: {
      tag: "MY 6 CORE EXPERTISE AREAS",
      title: "Multidisciplinary mastery serving the agricultural sector",
      desc: "From mechanization to project management, livestock, and agro-industry, every domain is driven by rigor, sustainability, and resource optimization.",
      learnMore: "Learn more",
      cards: [
        {
          id: "machinisme",
          num: "01",
          title: "Mechanization",
          desc: "Design, operation management, and maintenance of agricultural machinery.",
          detail: "Fleet optimization for tractors, harvesters, and specialized farm implements. Preventive maintenance routines, fuel efficiency strategies, and adoption of precision agricultural tools.",
          keyPoints: [
            "Fleet audits, modern procurement, and machinery overhaul programs",
            "Establishment of full-service maintenance workshops and technician training",
            "Lecturer in Agricultural Mechanization at the Higher School of Agriculture, Mateur"
          ]
        },
        {
          id: "hydraulique",
          num: "02",
          title: "Hydraulics & Irrigation",
          desc: "Engineering, operation, and maintenance of modern irrigation systems.",
          detail: "Design and stewardship of pressurized irrigation networks, center pivots, drip systems, deep boreholes, and high-efficiency pumping stations in arid and semi-arid climates.",
          keyPoints: [
            "Oversight of large-scale center pivot and lateral move systems",
            "Advanced water pumping, filtration, and flow metering infrastructure",
            "Drought-resilient irrigation scheduling and water conservation strategies"
          ]
        },
        {
          id: "avicole",
          num: "03",
          title: "Poultry Farming",
          desc: "Facility management and equipment maintenance for commercial poultry operations.",
          detail: "End-to-end management of automated broiler and layer facilities yielding over 1,000,000 birds annually, with climate control, automated feeding, and strict biosecurity.",
          keyPoints: [
            "Board Member of the Tunisian Poultry Company (SOTAVI)",
            "Feed conversion ratio optimization and climate automation control",
            "Rigorous adherence to veterinary hygiene and food chain traceability"
          ]
        },
        {
          id: "bovin",
          num: "04",
          title: "Livestock & Dairy",
          desc: "Herd management, dairy facility equipment, and veterinary maintenance.",
          detail: "Comprehensive management of premier dairy and beef herds. Modernization of mechanized milking parlors, bulk milk chillers, open housing, and genetic selection.",
          keyPoints: [
            "Management of agricultural complexes housing over 50,000 livestock heads",
            "Milk yield optimization and balanced forage ration engineering",
            "Active governance in regional dairy cattle and sheep breeding associations"
          ]
        },
        {
          id: "agroalimentaire",
          num: "05",
          title: "Agro-Industry",
          desc: "Management of cold storage, olive oil mills, and feed production facilities.",
          detail: "Stewardship of continuous cold-press olive oil mills (+10,000 tons of olive oil), industrial tomato paste processing lines, almond dehulling plants, and cold-chain warehouses.",
          keyPoints: [
            "Management of high-capacity continuous olive oil extraction plants",
            "Industrial refrigeration and controlled atmosphere produce storage",
            "Almond shelling, feed milling, and vegetable processing at Tawila"
          ]
        },
        {
          id: "gestion",
          num: "06",
          title: "Project Management",
          desc: "Techno-economic feasibility studies and governance of large agricultural complexes.",
          detail: "Executive leadership, financial restructuring, investment auditing, and strategic development across state agricultural domains.",
          keyPoints: [
            "Deputy Director General (DGA) at the Office of State Lands (OTD)",
            "Techno-economic feasibility studies and multi-year investment master plans",
            "Supervision of 4+ central operational divisions and nationwide complexes"
          ]
        }
      ]
    },
    career: {
      tag: "CAREER JOURNEY",
      title: "A career devoted to Tunisia's premier agricultural domains",
      desc: "“From the land to the people, a singular enduring conviction: building a resilient and high-performing agriculture.”",
      signature: "Hamdouni Mouldi",
      stepsTitle: "MY CAREER MILESTONES",
      mapTitle: "7 regions",
      mapHint: "1 shared commitment ➔",
      stripTitle: "MY JOURNEY IN DETAIL",
      bannerQuote: "“Agriculture is more than a profession; it is an enduring commitment to future generations.”",
      bannerCta: "Discover My Expertise",
      learnMore: "Learn More",
      specLabels: {
        specialisation: "Specialization",
        surface: "Cultivated Area",
        equipe: "Supervised Team",
        results: "Key Results"
      },
      milestones: [
        {
          id: 1,
          num: "01",
          region: "Beja",
          regionLabel: "Béja",
          period: "1987",
          role: "Agricultural Equipment Engineer",
          org: "Thibar Agro-Industrial Complex (Béja)",
          title: "Thibar Agro-Industrial Complex — Béja",
          subtitle: "State Agricultural Equipment Engineer",
          desc: "Early career leading machinery fleet modernization, historic Thibar winery operations, and mechanical workshops.",
          img: "public/images/career/career-thibar-beja.webp",
          specs: {
            specialisation: "Agricultural Machinery & Viticulture",
            surface: "3,500 ha",
            equipe: "Technicians & workshop heads",
            results: [
              "Modernization of mechanized tractor fleet",
              "Preventive maintenance protocols",
              "Optimized winemaking yield and quality"
            ]
          }
        },
        {
          id: 2,
          num: "02",
          region: "Sidi Bouzid",
          regionLabel: "Sidi Bouzid",
          period: "1988 – 1995",
          role: "Agricultural Complex",
          org: "Tawila Agro-Industrial Complex (Sidi Bouzid)",
          title: "Tawila Agro-Industrial Complex — Sidi Bouzid",
          subtitle: "Equipment & Agro-Industrial Operations Manager",
          desc: "Technical and logistic governance: industrial olive oil pressing mill, almond processing unit, cannery, and center-pivot irrigation.",
          img: "public/images/career/career-tawila-sidibouzid.webp",
          specs: {
            specialisation: "Olive Groves, Almond Orchards & Pivot Irrigation",
            surface: "4,200 ha",
            equipe: "Technical cadres & operators",
            results: [
              "High-throughput modern olive oil mill upgrade",
              "Deep borehole and center-pivot irrigation management",
              "Expansion of industrial almond processing"
            ]
          }
        },
        {
          id: 3,
          num: "03",
          region: "Jendouba",
          regionLabel: "Jendouba",
          period: "1995 – 2000",
          role: "Agricultural Complex",
          org: "Chemtou Agricultural Complex (Jendouba)",
          title: "Chemtou Agricultural Complex — Jendouba",
          subtitle: "Director of the Agricultural Complex",
          desc: "Integrated management of intensive fruit orchards, cereal cropping in the Medjerda river basin, dairy herd operations, and pressurized irrigation.",
          img: "public/images/expertise/expertise-hydraulique.webp",
          specs: {
            specialisation: "Field Crops, Arboriculture & Dairy",
            surface: "2,800 ha",
            equipe: "Engineers, herdsmen & mechanics",
            results: [
              "Record durum wheat yields",
              "Genetic herd improvement for dairy production",
              "Optimized Medjerda basin water efficiency"
            ]
          }
        },
        {
          id: 4,
          num: "04",
          region: "Nabeul",
          regionLabel: "Nabeul",
          period: "2000 – 2005",
          role: "Agricultural Complex",
          org: "Intilaka Agricultural Complex (Nabeul, Cap Bon)",
          title: "Intilaka Agricultural Complex — Nabeul",
          subtitle: "Director of Cap Bon Agricultural Complex",
          desc: "Strategic leadership of Cap Bon citrus orchards, vineyards, modern poultry farming, and fruit packaging facility.",
          img: "public/images/gallery/gallery-olives-harvest.webp",
          specs: {
            specialisation: "Citrus, Viticulture & Poultry",
            surface: "2,200 ha",
            equipe: "Citrus specialists & technicians",
            results: [
              "Citrus export certification achieved",
              "Automated poultry facility modernization",
              "Complete drip irrigation system overhaul"
            ]
          }
        },
        {
          id: 5,
          num: "05",
          region: "Sfax",
          regionLabel: "Sfax",
          period: "2005 – 2013",
          role: "Agricultural Complex",
          org: "Es-Salaam Agricultural Complex (Sfax)",
          title: "Es-Salaam Agricultural Complex — Sfax",
          subtitle: "Director of Agro-Olive Complex",
          desc: "Governance of an extensive olive estate in arid conditions: drought-resistant olive groves, almond plantations, sheep breeding, and olive mill byproduct valorization.",
          img: "public/images/expertise/expertise-agroalimentaire.webp",
          specs: {
            specialisation: "Arid Olive Production & Sheep Breeding",
            surface: "8,000 ha",
            equipe: "Technical teams & seasonal workers",
            results: [
              "Award-winning extra virgin olive oil output",
              "Enhanced drought resilience in arid climate",
              "Sustained profitability turnaround"
            ]
          }
        },
        {
          id: 6,
          num: "06",
          region: "Bizerte",
          regionLabel: "Bizerte",
          period: "2013 – 2015",
          role: "Equipment Department Directorate",
          org: "Ghazal Mateur Agricultural Complex (Bizerte)",
          title: "Ghazal Mateur Agricultural Complex — Bizerte",
          subtitle: "Chief Engineer · Director of Complex",
          desc: "Management and development of multiple agricultural branches: arboriculture, olive groves, viticulture, almonds, field crops, dairy and meat herds, and poultry.",
          img: "public/images/career/career-ghazala-bizerte.webp",
          specs: {
            specialisation: "Diversified Agriculture & Livestock",
            surface: "6,500 ha",
            equipe: "Senior engineers, veterinarians & workers",
            results: [
              "Expansion of integrated agro-production",
              "Complete overhaul of agricultural machinery",
              "Significant profitability improvement"
            ]
          }
        },
        {
          id: 7,
          num: "07",
          region: "Tunis",
          regionLabel: "Tunis",
          period: "2015 – Present",
          role: "Deputy Director General (since 2015)",
          org: "Office of State Lands (OTD Headquarters, Tunis)",
          title: "Office of State Lands — General Directorate",
          subtitle: "General Engineer · Deputy Director General",
          desc: "Strategic executive governance and nationwide supervision of technical divisions, agricultural machinery, finance, and state domain complexes throughout Tunisia.",
          img: "public/images/gallery/gallery-agro-complex.webp",
          specs: {
            specialisation: "National Strategy & Institutional Governance",
            surface: "160,000+ ha (national domain)",
            equipe: "Central directors & regional coordinators",
            results: [
              "National food security & sovereignty strategy",
              "Multi-year state fleet modernization plans",
              "Digitalization of OTD management controls"
            ]
          }
        }
      ]
    },
    results: {
      tag: "IN NUMBERS",
      title: "Tangible & verified results",
      desc: "A lifelong career dedicated to agricultural productivity and regional land value enhancement.",
      cta: "Explore all results",
      metrics: [
        { num: "+ 100,000 ha", label: "cultivated land managed (cumulative estimates)" },
        { num: "+ 50,000", label: "livestock heads (cattle & sheep)" },
        { num: "+ 1,000,000", label: "poultry heads (per year)" },
        { num: "+ 10,000 t", label: "high-grade olive oil (per year)" },
        { num: "4+", label: "major agricultural complexes directed" }
      ]
    },
    engagement: {
      tag: "MY COMMITMENT",
      title: "Transmitting knowledge, sharing, building the future",
      quote: "“Agriculture is not merely a profession; it is a sacred commitment to future generations.”",
      author: "Hamdouni Mouldi",
      galleryTag: "FIELD GALLERY",
      cats: [
        { id: "all", label: "All" },
        { id: "machines", label: "Machinery & Fields" },
        { id: "elevage", label: "Livestock & Terroirs" },
        { id: "agro", label: "Agro-Industry" },
        { id: "territoires", label: "Complexes & Projects" }
      ]
    },
    contact: {
      tag: "CONTACT & CREDENTIALS",
      title: "Engineering partnership & strategic advisory for your agricultural ventures",
      desc: "Available for technical audits, farm restructuring, agro-industrial governance, and feasibility studies.",
      locationTitle: "Professional Headquarters",
      location: "Office of State Lands (OTD), 60 Rue Alain Savary, 1003 Tunis",
      phoneTitle: "Direct Telephone",
      phone: "+216 98 213 250",
      emailTitle: "Institutional Email",
      email: "mouldi.hamdouni@otd.nat.tn",
      formName: "Full Name",
      namePlaceholder: "Your full name",
      formEmail: "Email Address",
      emailPlaceholder: "name@example.com",
      formSubject: "Subject",
      subjectPlaceholder: "Consultation / Project Inquiry",
      formMessage: "Your Message",
      messagePlaceholder: "Describe your requirements or project...",
      formSubmit: "Send Message",
      formSuccess: "Thank you for reaching out. We will get back to you shortly."
    },
    footer: {
      rights: "All rights reserved. Hamdouni Mouldi — General Engineer & Agro-Industrial Executive.",
      backTop: "Back to top ↑"
    }
  }
};

// Export for browser and node tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations };
}
