// Culinary Gear - Main JavaScript
// Maneja toda la funcionalidad del sitio web

// Base de datos de productos y categorías
const DATA = {
    categories: [
        {
            id: 'basculas-peso-precio',
            name: 'Básculas Peso-Precio',
            icon: 'fas fa-balance-scale',
            description: 'Básculas con función de caja registradora para ventas al por menor',
            image: '⚖️'
        },
        {
            id: 'basculas-contadoras',
            name: 'Básculas Contadoras',
            icon: 'fas fa-calculator',
            description: 'Básculas con función de conteo de piezas',
            image: '🔢'
        },
        {
            id: 'basculas-porcionadoras',
            name: 'Básculas Porcionadoras',
            icon: 'fas fa-cut',
            description: 'Básculas para cálculo de porciones alimenticias',
            image: '🍖'
        },
        {
            id: 'basculas-precision',
            name: 'Básculas de Precisión',
            icon: 'fas fa-gem',
            description: 'Básculas de alta precisión para uso profesional',
            image: '⚡'
        },
        {
            id: 'basculas-agua',
            name: 'Básculas a Prueba de Agua',
            icon: 'fas fa-tint',
            description: 'Básculas resistentes al agua para ambientes húmedos',
            image: '💧'
        },
        {
            id: 'basculas-etiquetadoras',
            name: 'Básculas Etiquetadoras',
            icon: 'fas fa-tags',
            description: 'Básculas con impresora de etiquetas térmicas',
            image: '🏷️'
        },
        {
            id: 'basculas-colgantes',
            name: 'Básculas Colgantes',
            icon: 'fas fa-weight-hanging',
            description: 'Básculas colgantes de diferentes capacidades',
            image: '🔗'
        },
        {
            id: 'basculas-plataforma',
            name: 'Básculas de Plataforma',
            icon: 'fas fa-warehouse',
            description: 'Básculas de plataforma plegables e inalámbricas',
            image: '📦'
        },
        {
            id: 'basculas-5kg',
            name: 'Básculas de 5 kg',
            icon: 'fas fa-balance-scale-right',
            description: 'Básculas circulares y de plato para uso general',
            image: '🎯'
        },
        {
            id: 'basculas-corporales',
            name: 'Básculas Corporales',
            icon: 'fas fa-user-md',
            description: 'Básculas para pesaje corporal y análisis de composición',
            image: '📊'
        },
        {
            id: 'basculas-mascotas',
            name: 'Básculas para Mascotas',
            icon: 'fas fa-paw',
            description: 'Básculas especializadas para mascotas',
            image: '🐾'
        },
        {
            id: 'basculas-bebes',
            name: 'Básculas para Bebés',
            icon: 'fas fa-baby',
            description: 'Básculas seguras para pesaje de bebés',
            image: '👶'
        },
        {
            id: 'indicadores',
            name: 'Indicadores para Básculas',
            icon: 'fas fa-tachometer-alt',
            description: 'Indicadores digitales para básculas industriales',
            image: '📱'
        },
        {
            id: 'batidoras',
            name: 'Batidoras Planetarias',
            icon: 'fas fa-blender',
            description: 'Batidoras planetarias de diferentes capacidades',
            image: '🧁'
        },
        {
            id: 'amasadoras',
            name: 'Amasadoras',
            icon: 'fas fa-bread-slice',
            description: 'Amasadoras profesionales para panadería',
            image: '🍞'
        },
        {
            id: 'molinos-carne',
            name: 'Molinos de Carne',
            icon: 'fas fa-drumstick-bite',
            description: 'Molinos de carne industriales y semi-industriales',
            image: '🥩'
        },
        {
            id: 'turbolicuadores',
            name: 'Turbolicuadores',
            icon: 'fas fa-fire',
            description: 'Turbolicuadores de alta potencia',
            image: '🌪️'
        },
        {
            id: 'rebanadoras',
            name: 'Rebanadoras',
            icon: 'fas fa-cut',
            description: 'Rebanadoras de alimentos industriales',
            image: '🥒'
        },
        {
            id: 'procesador-alimentos',
            name: 'Procesador de Alimentos',
            icon: 'fas fa-apple-alt',
            description: 'Procesadores con discos intercambiables',
            image: '🥕'
        },
        {
            id: 'sierra-carnicera',
            name: 'Sierra Carnicera',
            icon: 'fas fa-cut',
            description: 'Sierras para corte de carnes',
            image: '🥩'
        },
        {
            id: 'empacadoras-vacio',
            name: 'Empacadoras al Vacío',
            icon: 'fas fa-box',
            description: 'Empacadoras al vacío de diferentes capacidades',
            image: '📦'
        },
        {
            id: 'selladoras',
            name: 'Selladoras de Impulso',
            icon: 'fas fa-compress',
            description: 'Selladoras de bolsas de polipropileno',
            image: '🔧'
        },
        {
            id: 'empleyadora',
            name: 'Emplayadora de Alimentos',
            icon: 'fas fa-wrap',
            description: 'Emplayadora de alimentos con corte térmico',
            image: '🍕'
        },
        {
            id: 'plancha-panini',
            name: 'Plancha Panini',
            icon: 'fas fa-fire',
            description: 'Planchas para preparación de paninis',
            image: '🥪'
        },
        {
            id: 'maquina-helados',
            name: 'Máquina de Helados',
            icon: 'fas fa-ice-cream',
            description: 'Máquina de helados de dispensación',
            image: '🍦'
        },
        {
            id: 'cuchilleria',
            name: 'Cuchillería Profesional',
            icon: 'fas fa-cut',
            description: 'Cuchillos profesionales para cocina',
            image: '🔪'
        },
        {
            id: 'utensilios-cocina',
            name: 'Utensilios para Cocina',
            icon: 'fas fa-utensils',
            description: 'Utensilios profesionales para restaurante',
            image: '🍽️'
        },
        {
            id: 'insertos',
            name: 'Insertos, Tapas y Drenadores',
            icon: 'fas fa-box-open',
            description: 'Insertos de acero inoxidable y policarbonato',
            image: '🗃️'
        },
        {
            id: 'material-punto-venta',
            name: 'Material Punto de Venta',
            icon: 'fas fa-cash-register',
            description: 'Exhibidores y material promocional',
            image: '🏪'
        }
    ],

    products: [
        // BÁSCULAS PESO-PRECIO
        {
            id: 'BAR-6',
            name: 'BÁSCULA PESO - PRECIO BAR-6',
            category: 'basculas-peso-precio',
            capacity: '20 kg',
            precision: '2 g',
            description: 'Función de caja registradora, conteo de piezas y alarma de sobrepeso. Pantallas iluminadas para usuario y cliente.',
            features: ['20 kg / 44 lb', '2 g / 0.005 lb', 'Plato de acero inoxidable', 'Batería recargable'],
            badge: 'Popular'
        },
        {
            id: 'BAR-6X',
            name: 'BÁSCULA PESO - PRECIO CON PUERTO USB BAR-6X',
            category: 'basculas-peso-precio',
            capacity: '20 kg',
            precision: '2 g',
            description: 'Incluye puerto USB para comunicación. Función de caja registradora y conteo de piezas.',
            features: ['20 kg / 44 lb', '2 g / 0.005 lb', 'Puerto USB', 'Pantallas iluminadas'],
            badge: 'USB'
        },
        {
            id: 'BAR-7',
            name: 'BÁSCULA PESO - PRECIO BAR-7',
            category: 'basculas-peso-precio',
            capacity: '30 kg',
            precision: '2 g / 5 g',
            description: 'Multirango de precisión: 2g (0-15kg) y 5g (15-30kg). Función de caja registradora mejorada.',
            features: ['30 kg / 66 lb', 'Multirango', 'Plato 28x22.5 cm', 'Batería de litio'],
            badge: 'Multirango'
        },
        {
            id: 'BAR-8',
            name: 'BÁSCULA PESO - PRECIO BAR-8',
            category: 'basculas-peso-precio',
            capacity: '40 kg',
            precision: '2 g',
            description: 'Mayor capacidad con 3 memorias de acceso directo. Pantallas iluminadas dobles.',
            features: ['40 kg / 88 lb', '2 g / 0.005 lb', '3 memorias directas', 'Clase Fina II'],
            badge: '40 kg'
        },
        {
            id: 'BAR-8RS',
            name: 'BÁSCULA PESO - PRECIO CON PUERTO USB BAR-8RS',
            category: 'basculas-peso-precio',
            capacity: '40 kg',
            precision: '2 g',
            description: 'Con puerto USB para conectividad. Ideal para sistemas POS.',
            features: ['40 kg / 88 lb', '2 g / 0.005 lb', 'Puerto USB', 'Batería 4V 4Ah'],
            badge: 'USB'
        },
        {
            id: 'BAR-8T',
            name: 'BÁSCULA PESO - PRECIO CON TORRETA BAR-8T',
            category: 'basculas-peso-precio',
            capacity: '40 kg',
            precision: '2 g',
            description: 'Incluye torreta con pantallas iluminadas para cliente. Diseño profesional.',
            features: ['40 kg / 88 lb', '2 g / 0.005 lb', 'Torreta incluida', 'Plato 35.5x23.5 cm'],
            badge: 'Con Torreta'
        },
        {
            id: 'BAR-9',
            name: 'BÁSCULA PESO - PRECIO CON PUERTO USB BAR-9',
            category: 'basculas-peso-precio',
            capacity: '40 kg',
            precision: '2 g',
            description: 'Báscula peso-precio con puerto RS-232 y USB. Comunicación en red.',
            features: ['40 kg / 88 lb', '2 g / 0.005 lb', 'Puerto USB', 'Comunicación RS-232'],
            badge: 'USB'
        },
        {
            id: 'BAR-10',
            name: 'BÁSCULA PESO - PRECIO PLATO GRANDE BAR-10',
            category: 'basculas-peso-precio',
            capacity: '60 kg',
            precision: '5 g',
            description: 'Plato grande de acero inoxidable. Capacidad de 60 kg para productos pesados.',
            features: ['60 kg / 132 lb', '5 g / 0.01 lb', 'Plato 36x26 cm', 'Pantallas iluminadas'],
            badge: '60 kg'
        },

        // BÁSCULAS CONTADORAS
        {
            id: 'BACO-30',
            name: 'BÁSCULA CONTADORA BACO-30',
            category: 'basculas-contadoras',
            capacity: '30 kg',
            precision: '1 g',
            description: 'Función de conteo de piezas con gran precisión. Puerto RS-232 para conectividad.',
            features: ['30 kg / 66 lb', '1 g / 0.002 lb', 'Función conteo', 'Puerto RS-232'],
            badge: 'Contadora'
        },

        // BÁSCULAS PORCIONADORAS
        {
            id: 'BAPO-10',
            name: 'BÁSCULA PORCIONADORA BAPO-10',
            category: 'basculas-porcionadoras',
            capacity: '10 kg',
            precision: '1 g',
            description: 'Función de cálculo de porciones y conteo de piezas. Pantalla iluminada.',
            features: ['10 kg / 22 lb', '1 g / 0.002 lb', 'Cálculo de porciones', 'Plato 30x23 cm'],
            badge: 'Porcionadora'
        },
        {
            id: 'BAPO-10X',
            name: 'BÁSCULA PORCIONADORA CON USB BAPO-10X',
            category: 'basculas-porcionadoras',
            capacity: '10 kg',
            precision: '1 g',
            description: 'Porcionadora con puerto USB para conectividad con sistemas.',
            features: ['10 kg / 22 lb', '1 g / 0.002 lb', 'Puerto USB', 'Pantalla iluminada'],
            badge: 'USB'
        },
        {
            id: 'BAPO-15',
            name: 'BÁSCULA PORCIONADORA BAPO-15',
            category: 'basculas-porcionadoras',
            capacity: '15 kg',
            precision: '5 g',
            description: 'Mayor capacidad para porcionamiento de ingredientes.',
            features: ['15 kg / 33 lb', '5 g / 0.01 lb', 'Función conteo', 'Plato 24x20 cm'],
            badge: '15 kg'
        },

        // BÁSCULAS DE PRECISIÓN
        {
            id: 'BABOL-100G',
            name: 'BÁSCULA DE PRECISIÓN BABOL-100G',
            category: 'basculas-precision',
            capacity: '100 g',
            precision: '0.01 g',
            description: 'Báscula de precisión con protector contra corrientes de aire.',
            features: ['100 g / 3.5 oz', '0.01 g', 'Báscula de bolsillo', '2 baterías CR2032'],
            badge: '0.01 g'
        },
        {
            id: 'BAPRE-600',
            name: 'BÁSCULA DE PRECISIÓN BAPRE-600',
            category: 'basculas-precision',
            capacity: '600 g',
            precision: '0.01 g',
            description: 'Precisión de 0.01g con puerto USB para conectividad.',
            features: ['600 g / 1.3 lb', '0.01 g / 0.001 lb', 'Puerto USB', 'Batería recargable'],
            badge: 'USB'
        },
        {
            id: 'BAPRE-2600',
            name: 'BÁSCULA DE PRECISIÓN BAPRE-2600',
            category: 'basculas-precision',
            capacity: '2,600 g',
            precision: '0.1 g',
            description: 'Mayor capacidad con charola que puede voltearse.',
            features: ['2,600 g / 5.7 lb', '0.1 g / 0.001 lb', 'Charola reversible', 'Plato 17x17 cm'],
            badge: '2.6 kg'
        },
        {
            id: 'BAPRE-1',
            name: 'BÁSCULA DE PRECISIÓN BAPRE-1',
            category: 'basculas-precision',
            capacity: '1 kg',
            precision: '0.1 g',
            description: 'Precisión de 0.1g con función de conteo de piezas.',
            features: ['1 kg / 2.2 lb', '0.1 g', 'Función conteo', 'Diámetro plato 12 cm'],
            badge: 'Precisión'
        },
        {
            id: 'BAPRE-3',
            name: 'BÁSCULA DE PRECISIÓN BAPRE-3',
            category: 'basculas-precision',
            capacity: '3 kg',
            precision: '0.2 g',
            description: 'Alta precisión con plato de acero inoxidable.',
            features: ['3 kg / 6.6 lb', '0.2 g / 0.0004 lb', 'Plato acero inoxidable', 'Clase Fina II'],
            badge: 'Clase II'
        },
        {
            id: 'BACI-3',
            name: 'BÁSCULA CIRCULAR BACI-3',
            category: 'basculas-precision',
            capacity: '3 kg',
            precision: '0.5 g',
            description: 'Báscula circular con cálculo de volumen en mililitros.',
            features: ['3 kg / 6.6 lb', '0.5 g', 'Cálculo volumen', 'Diámetro plato 15 cm'],
            badge: 'Circular'
        },

        // BÁSCULAS A PRUEBA DE AGUA
        {
            id: 'BARAG-5',
            name: 'BÁSCULA A PRUEBA DE AGUA BARAG-5',
            category: 'basculas-agua',
            capacity: '5 kg',
            precision: '1 g',
            description: 'Grado de protección IPX7. Calcula volumen en mililitros.',
            features: ['5 kg / 11 lb', '1 g / 0.1 oz', 'IPX7', 'Plato ABS 15x15 cm'],
            badge: 'IPX7'
        },
        {
            id: 'BARAG-40',
            name: 'BÁSCULA A PRUEBA DE AGUA BARAG-40',
            category: 'basculas-agua',
            capacity: '40 kg',
            precision: '5 g',
            description: 'Grado de protección IP66. Para ambientes húmedos.',
            features: ['40 kg / 88 lb', '5 g / 0.01 lb', 'IP66', 'Plato 28x22 cm'],
            badge: 'IP66'
        },
        {
            id: 'BAPAG-200',
            name: 'PLATAFORMA A PRUEBA DE AGUA BAPAG-200',
            category: 'basculas-agua',
            capacity: '200 kg',
            precision: '20 g',
            description: 'Plataforma con grado de protección IP67 en indicador.',
            features: ['200 kg / 440 lb', '20 g / 0.044 lb', 'IP67 indicador', 'Plato 40x50 cm'],
            badge: 'IP67'
        },

        // BÁSCULAS ETIQUETADORAS
        {
            id: 'BAET-30',
            name: 'BÁSCULA ETIQUETADORA BAET-30',
            category: 'basculas-etiquetadoras',
            capacity: '30 kg',
            precision: '5 g / 10 g',
            description: 'Memoria para 2,000 artículos. Comunicación en red hasta 5 básculas.',
            features: ['30 kg / 66 lb', '5g/10g multirango', '2,000 artículos', 'Ethernet'],
            badge: 'Etiquetadora'
        },
        {
            id: 'BAET-30X',
            name: 'BÁSCULA ETIQUETADORA BAET-30X',
            category: 'basculas-etiquetadoras',
            capacity: '30 kg',
            precision: '5 g / 10 g',
            description: 'Con Ethernet y WiFi. Sistema impresor de alta calidad.',
            features: ['30 kg / 66 lb', 'Ethernet y WiFi', 'Pantalla 6"', 'Software incluido'],
            badge: 'WiFi'
        },

        // BÁSCULAS COLGANTES
        {
            id: 'BAC-20',
            name: 'BÁSCULA COLGANTE BAC-20',
            category: 'basculas-colgantes',
            capacity: '20 kg',
            precision: '10 g',
            description: 'Diseño compacto y ligero (200g). Batería de larga duración.',
            features: ['20 kg / 44 lb', '10 g / 0.02 lb', 'Ligera 200g', 'Batería incluida'],
            badge: 'Ligera'
        },
        {
            id: 'BACMU-30',
            name: 'BÁSCULA COLGANTE BACMU-30',
            category: 'basculas-colgantes',
            capacity: '30 kg',
            precision: '5 g',
            description: 'Diseño ultraligero (750g). Gancho tipo "S" para mayor resistencia.',
            features: ['30 kg / 66 lb', '5 g / 0.01 lb', '750g peso', 'Gancho acero'],
            badge: 'Ultraligera'
        },
        {
            id: 'BAC-300',
            name: 'BÁSCULA COLGANTE BAC-300',
            category: 'basculas-colgantes',
            capacity: '300 kg',
            precision: '100 g',
            description: 'Carcasa de aluminio. Control remoto incluido.',
            features: ['300 kg / 660 lb', '100 g / 0.2 lb', 'Aluminio', 'Control remoto'],
            badge: '300 kg'
        },
        {
            id: 'BAC-500',
            name: 'BÁSCULA COLGANTE BAC-500',
            category: 'basculas-colgantes',
            capacity: '500 kg',
            precision: '200 g',
            description: 'Operación a distancia de 20 metros. Batería 100 horas.',
            features: ['500 kg / 1,100 lb', '200 g / 0.4 lb', '20m distancia', '100 horas batería'],
            badge: 'Control Remoto'
        },
        {
            id: 'BAC-1T',
            name: 'BÁSCULA COLGANTE BAC-1T',
            category: 'basculas-colgantes',
            capacity: '1 ton',
            precision: '500 g',
            description: '1 tonelada de capacidad. Gancho con clip de seguridad.',
            features: ['1 ton / 2,200 lb', '500 g / 1 lb', 'Clip seguridad', 'Aluminio'],
            badge: '1 Ton'
        },
        {
            id: 'BAC-5T',
            name: 'BÁSCULA COLGANTE BAC-5T',
            category: 'basculas-colgantes',
            capacity: '5 ton',
            precision: '2 kg',
            description: '5 toneladas de capacidad. Diseño robusto.',
            features: ['5 ton / 11,000 lb', '2 kg / 4 lb', 'Aleación acero', '1 año garantía'],
            badge: '5 Ton'
        },
        {
            id: 'BAC-10T',
            name: 'BÁSCULA COLGANTE BAC-10T',
            category: 'basculas-colgantes',
            capacity: '10 ton',
            precision: '5 kg',
            description: '10 toneladas. Control remoto incluido.',
            features: ['10 ton / 20,200 lb', '5 kg / 11 lb', 'Control remoto', 'Aluminio'],
            badge: '10 Ton'
        },
        {
            id: 'BAC-20T',
            name: 'BÁSCULA COLGANTE BAC-20T',
            category: 'basculas-colgantes',
            capacity: '20 ton',
            precision: '10 kg',
            description: '20 toneladas. Carcasa de hierro fundido.',
            features: ['20 ton / 40,400 lb', '10 kg / 22 lb', 'Hierro fundido', 'Gancho seguridad'],
            badge: '20 Ton'
        },
        {
            id: 'BAPAQUE-100',
            name: 'BÁSCULA DE PAQUETERÍA BAPAQUE-100',
            category: 'basculas-colgantes',
            capacity: '100 kg',
            precision: '50 g',
            description: 'Báscula de paquetería con 4 celdas de carga.',
            features: ['100 kg / 220 lb', '50 g / 0.1 lb', '4 celdas carga', 'Plato 21 cm'],
            badge: 'Paquetería'
        },

        // BÁSCULAS DE PLATAFORMA
        {
            id: 'BAPCA-80',
            name: 'BÁSCULA DE PLATAFORMA PLEGABLE BAPCA-80',
            category: 'basculas-plataforma',
            capacity: '80 kg',
            precision: '10 g',
            description: 'Plataforma plegable de acero al carbono. Fácil transportación.',
            features: ['80 kg / 176 lb', '10 g / 0.02 lb', 'Acero al carbono', 'Plato 31x35 cm'],
            badge: 'Plegable'
        },
        {
            id: 'BAPCA-100',
            name: 'BÁSCULA DE PLATAFORMA PLEGABLE BAPCA-100',
            category: 'basculas-plataforma',
            capacity: '100 kg',
            precision: '10 g',
            description: 'Sistema plegable fácil de operar. Indicador de acero al carbono.',
            features: ['100 kg / 220 lb', '10 g / 0.02 lb', 'Sistema plegable', 'Plato 32x42 cm'],
            badge: '100 kg'
        },
        {
            id: 'BAPCA-200',
            name: 'BÁSCULA DE PLATAFORMA PLEGABLE BAPCA-200',
            category: 'basculas-plataforma',
            capacity: '200 kg',
            precision: '20 g',
            description: 'Mayor capacidad con sistema plegable. Ideal para bodegas.',
            features: ['200 kg / 440 lb', '20 g / 0.04 lb', 'Plegable', 'Plato 39x49 cm'],
            badge: '200 kg'
        },
        {
            id: 'BAPCA-500',
            name: 'BÁSCULA DE PLATAFORMA PLEGABLE BAPCA-500',
            category: 'basculas-plataforma',
            capacity: '500 kg',
            precision: '50 g',
            description: 'Máxima capacidad en plataforma plegable. Indicador robusto.',
            features: ['500 kg / 1,100 lb', '50 g / 0.1 lb', 'Plegable', 'Plato 45x60 cm'],
            badge: '500 kg'
        },
        {
            id: 'BP-80',
            name: 'PLATAFORMA PLEGABLE BP-80',
            category: 'basculas-plataforma',
            capacity: '80 kg',
            precision: '10 g',
            description: 'Plato de acero inoxidable. Indicador y teclado de acero inoxidable.',
            features: ['80 kg / 176 lb', '10 g / 0.02 lb', 'Acero inoxidable', 'Barras de soporte'],
            badge: 'Inoxidable'
        },
        {
            id: 'BP-200',
            name: 'PLATAFORMA PLEGABLE BP-200',
            category: 'basculas-plataforma',
            capacity: '200 kg',
            precision: '20 g',
            description: 'Sistema plegable con plato de acero inoxidable.',
            features: ['200 kg / 440 lb', '20 g / 0.04 lb', 'Acero inoxidable', 'Plato 39x49 cm'],
            badge: 'Inoxidable'
        },
        {
            id: 'BP-500',
            name: 'PLATAFORMA PLEGABLE BP-500',
            category: 'basculas-plataforma',
            capacity: '500 kg',
            precision: '50 g',
            description: 'Plataforma plegable de acero inoxidable de alta capacidad.',
            features: ['500 kg / 1,100 lb', '50 g / 0.1 lb', 'Acero inoxidable', 'Plato 50x60 cm'],
            badge: '500 kg'
        },
        {
            id: 'BP-600',
            name: 'PLATAFORMA PLEGABLE BP-600',
            category: 'basculas-plataforma',
            capacity: '600 kg',
            precision: '100 g',
            description: 'Máxima capacidad con plato de acero inoxidable.',
            features: ['600 kg / 1,320 lb', '100 g / 0.22 lb', 'Acero inoxidable', 'Plato 60x80 cm'],
            badge: '600 kg'
        },
        {
            id: 'BAPLE-60',
            name: 'BÁSCULA DE PLATAFORMA INOXIDABLE BAPLE-60',
            category: 'basculas-plataforma',
            capacity: '60 kg',
            precision: '10 g',
            description: 'Indicadores de plástico ABS. Fácil transportación.',
            features: ['60 kg / 132 lb', '10 g / 0.02 lb', 'ABS', 'Plataforma 30x34 cm'],
            badge: 'Nuevo'
        },
        {
            id: 'BAPLE-100',
            name: 'BÁSCULA DE PLATAFORMA INOXIDABLE BAPLE-100',
            category: 'basculas-plataforma',
            capacity: '100 kg',
            precision: '20 g',
            description: 'Sistema plegable con plataforma de acero al carbono.',
            features: ['100 kg / 220 lb', '20 g / 0.04 lb', 'Acero al carbono', 'Plataforma 30x40 cm'],
            badge: 'Nuevo'
        },
        {
            id: 'BAPLE-200',
            name: 'BÁSCULA DE PLATAFORMA INOXIDABLE BAPLE-200',
            category: 'basculas-plataforma',
            capacity: '200 kg',
            precision: '50 g',
            description: 'Mayor capacidad con sistema plegable.',
            features: ['200 kg / 440 lb', '50 g / 0.1 lb', 'Acero al carbono', 'Plataforma 40x50 cm'],
            badge: 'Nuevo'
        },
        {
            id: 'BAPLE-400',
            name: 'BÁSCULA DE PLATAFORMA INOXIDABLE BAPLE-400',
            category: 'basculas-plataforma',
            capacity: '400 kg',
            precision: '100 g',
            description: 'Máxima capacidad en plataforma plegable.',
            features: ['400 kg / 880 lb', '100 g / 0.22 lb', 'Acero al carbono', 'Plataforma 50x60 cm'],
            badge: 'Nuevo'
        },
        {
            id: 'BAPIC-300',
            name: 'BÁSCULA DE PLATAFORMA INALÁMBRICA BAPIC-300',
            category: 'basculas-plataforma',
            capacity: '300 kg',
            precision: '100 g',
            description: 'Operación de pesaje a distancia de 8 metros.',
            features: ['300 kg / 660 lb', '100 g / 0.22 lb', 'Inalámbrica', 'Celdas de carga'],
            badge: 'Inalámbrica'
        },
        {
            id: 'BAVET-200',
            name: 'PLATAFORMA VETERINARIA BAVET-200',
            category: 'basculas-plataforma',
            capacity: '200 kg',
            precision: '100 g',
            description: 'Plataforma rectangular con 4 celdas de carga.',
            features: ['200 kg / 440 lb', '100 g / 0.22 lb', '4 celdas carga', '60x90 cm'],
            badge: 'Veterinaria'
        },
        {
            id: 'BAGAME-800',
            name: 'PLATAFORMA PARA GANADO MENOR BAGAME-800',
            category: 'basculas-plataforma',
            capacity: '800 kg',
            precision: '200 g',
            description: '2 puertas delanteras y traseras con seguros.',
            features: ['800 kg / 1,764 lb', '200 g / 0.44 lb', '2 puertas', '170x90 cm'],
            badge: 'Ganado'
        },

        // BÁSCULAS DE 5 KG
        {
            id: 'BACITA-5BL',
            name: 'BÁSCULA CIRCULAR CON TAZÓN BACITA-5BL',
            category: 'basculas-5kg',
            capacity: '5 kg',
            precision: '1 g',
            description: 'Tazón desmontable de 900 ml. Soporte de acero.',
            features: ['5 kg / 11 lb', '1 g / 0.1 oz', 'Tazón 900 ml', 'Diámetro tazón 18 cm'],
            badge: 'Con Tazón'
        },
        {
            id: 'BACITA-5',
            name: 'BÁSCULA CIRCULAR CON TAZÓN BACITA-5',
            category: 'basculas-5kg',
            capacity: '5 kg',
            precision: '1 g',
            description: 'Calcula volumen en mililitros y onzas. Tazón desmontable.',
            features: ['5 kg / 11 lb', '1 g / 0.1 oz', 'Cálculo volumen', 'Tazón 900 ml'],
            badge: 'Volumen'
        },
        {
            id: 'BACI-5',
            name: 'BÁSCULA CIRCULAR BACI-5',
            category: 'basculas-5kg',
            capacity: '5 kg',
            precision: '1 g',
            description: 'Soporte de acero para mayor precisión. Plato con relieve.',
            features: ['5 kg / 11 lb', '1 g / 0.1 oz', 'Soporte acero', 'Plato 17 cm'],
            badge: 'Circular'
        },
        {
            id: 'BACI-5X',
            name: 'BÁSCULA CIRCULAR PLATO DE ACERO INOXIDABLE BACI-5X',
            category: 'basculas-5kg',
            capacity: '5 kg',
            precision: '1 g',
            description: 'Plato de acero inoxidable. Calcula volumen.',
            features: ['5 kg / 11 lb', '1 g / 0.1 oz', 'Acero inoxidable', 'Diámetro 15 cm'],
            badge: 'Inoxidable'
        },
        {
            id: 'BAREC-5A',
            name: 'BÁSCULA PLATO DE ACERO INOXIDABLE BAREC-5A',
            category: 'basculas-5kg',
            capacity: '5 kg',
            precision: '1 g',
            description: 'Superficie de acero inoxidable. Mayor durabilidad.',
            features: ['5 kg / 11 lb', '1 g / 0.1 oz', 'Acero inoxidable', '15.5x20.5 cm'],
            badge: 'Inoxidable'
        },
        {
            id: 'BACRI-5M',
            name: 'BÁSCULA PLATO DE CRISTAL TEMPLADO BACRI-5M',
            category: 'basculas-5kg',
            capacity: '5 kg',
            precision: '1 g',
            description: 'Diseño ultradelgado con plato de cristal templado.',
            features: ['5 kg / 11 lb', '1 g / 0.1 oz', 'Cristal templado', '14x19.5 cm'],
            badge: 'Cristal'
        },
        {
            id: 'BAMBU-5',
            name: 'BÁSCULA PLATO DE BAMBÚ BAMBU-5',
            category: 'basculas-5kg',
            capacity: '5 kg',
            precision: '1 g',
            description: 'Plato de bambú natural. Diseño ecológico.',
            features: ['5 kg / 11 lb', '1 g / 0.1 oz', 'Bambú', '18.8x21.8 cm'],
            badge: 'Eco'
        },
        {
            id: 'BAREC-5',
            name: 'BÁSCULA COLGABLE BAREC-5',
            category: 'basculas-5kg',
            capacity: '5 kg',
            precision: '1 g',
            description: 'Orificio para colgarse. Fácil almacenamiento.',
            features: ['5 kg / 11 lb', '1 g / 0.1 oz', 'Colgante', 'Plástico HIPS'],
            badge: 'Colgante'
        },
        {
            id: 'VINS-5',
            name: 'BÁSCULA CIRCULAR VINS-5',
            category: 'basculas-5kg',
            capacity: '5 kg',
            precision: '1 g',
            description: 'Diseño con botones touch. Orificio para colgarse.',
            features: ['5 kg / 11 lb', '1 g / 0.1 oz', 'Botones touch', 'Diámetro 14 cm'],
            badge: 'Touch'
        },

        // BÁSCULAS CORPORALES
        {
            id: 'BABAIN-180BL',
            name: 'BÁSCULA INTELIGENTE DE PESAJE CORPORAL BABAIN-180BL',
            category: 'basculas-corporales',
            capacity: '180 kg',
            precision: '100 g',
            description: 'Conexión Bluetooth a smartphone. Medición de estadísticas corporales.',
            features: ['180 kg / 400 lb', '100 g / 0.2 lb', 'Bluetooth', 'App Fit Days'],
            badge: 'Bluetooth'
        },
        {
            id: 'BABAIN-180NG',
            name: 'BÁSCULA INTELIGENTE DE PESAJE CORPORAL BABAIN-180NG',
            category: 'basculas-corporales',
            capacity: '180 kg',
            precision: '100 g',
            description: 'Misma funcionalidad que BABAIN-180BL en color naranja.',
            features: ['180 kg / 400 lb', '100 g / 0.2 lb', 'Bluetooth', '26x26 cm'],
            badge: 'Inteligente'
        },
        {
            id: 'BABA-180M',
            name: 'BÁSCULA CORPORAL BABA-180M',
            category: 'basculas-corporales',
            capacity: '180 kg',
            precision: '100 g',
            description: 'Diseño compacto con 4 sensores de carga.',
            features: ['180 kg / 400 lb', '100 g / 0.2 lb', '4 sensores', 'Cristal templado'],
            badge: 'Digital'
        },
        {
            id: 'BABA-180',
            name: 'BÁSCULA CORPORAL BABA-180',
            category: 'basculas-corporales',
            capacity: '180 kg',
            precision: '100 g',
            description: 'Sistema con 4 sensores de carga. Material resistente.',
            features: ['180 kg / 400 lb', '100 g / 0.2 lb', '4 sensores', '26x26 cm'],
            badge: 'Económica'
        },

        // BÁSCULAS PARA MASCOTAS
        {
            id: 'BAPET-2',
            name: 'BÁSCULA DE TAZÓN PARA MASCOTAS BAPET-2',
            category: 'basculas-mascotas',
            capacity: '2 kg',
            precision: '1 g',
            description: 'Tazón con capacidad de 600 ml. Grado de protección IPX5.',
            features: ['2 kg / 4.4 lb', '1 g / 0.1 oz', 'Tazón 600 ml', 'IPX5'],
            badge: 'Mascotas'
        },

        // BÁSCULAS PARA BEBÉS
        {
            id: 'BABE-25',
            name: 'BÁSCULA PARA BEBÉS BABE-25',
            category: 'basculas-bebes',
            capacity: '25 kg',
            precision: '5 g',
            description: 'Diseño ergonómico tipo cuna. Función de historial de pesaje.',
            features: ['25 kg / 55 lb', '5 g / 0.01 lb', 'Tipo cuna', 'Historial'],
            badge: 'Bebés'
        },

        // BÁSCULAS PARA MALETAS
        {
            id: 'BAMA-50',
            name: 'BÁSCULA PARA MALETAS BAMA-50',
            category: 'basculas-corporales',
            capacity: '50 kg',
            precision: '50 g',
            description: 'Diseño compacto y resistente. Indicador de sobrecarga.',
            features: ['50 kg / 110 lb', '50 g / 0.1 lb', 'Compacto', '1.5 kg peso'],
            badge: 'Viaje'
        },

        // INDICADORES
        {
            id: 'I-PEP',
            name: 'INDICADOR PESO, PRECIO Y TOTAL I-PEP',
            category: 'indicadores',
            capacity: 'Programable',
            precision: '15,000 divisiones',
            description: 'Panel con pantallas de peso, precio y total. 4 memorias de acceso directo.',
            features: ['15,000 divisiones', '4 memorias', 'Cálculo de cambio', 'USB'],
            badge: 'Peso/Precio'
        },
        {
            id: 'I-PES',
            name: 'INDICADOR PESO, CONTADOR DE PIEZAS I-PES',
            category: 'indicadores',
            capacity: 'Programable',
            precision: '15,000 divisiones',
            description: 'Función conteo de piezas y cálculo de porciones. Pantalla grande.',
            features: ['15,000 divisiones', 'Conteo piezas', 'Cálculo porciones', 'USB'],
            badge: 'Contador'
        },
        {
            id: 'I-SEP',
            name: 'INDICADOR PESO, PRECIO Y TOTAL I-SEP',
            category: 'indicadores',
            capacity: 'Programable',
            precision: '15,000 divisiones',
            description: 'Función pesaje de animales. Conector USB.',
            features: ['15,000 divisiones', 'Pesaje animales', 'USB', 'LED display'],
            badge: 'Animales'
        },
        {
            id: 'I-PAG',
            name: 'INDICADOR A PRUEBA DE AGUA I-PAG',
            category: 'indicadores',
            capacity: 'Programable',
            precision: '30,000 divisiones',
            description: 'Grado de protección IP67. Función pesaje de animales.',
            features: ['30,000 divisiones', 'IP67', 'Acero inoxidable', '3 pines'],
            badge: 'IP67'
        },
        {
            id: 'I-QY',
            name: 'INDICADOR PESO CONTADOR I-QY',
            category: 'indicadores',
            capacity: 'Programable',
            precision: '30,000 divisiones',
            description: 'Conexión a PC o impresora. Función conteo de piezas.',
            features: ['30,000 divisiones', 'RS-232 y USB', 'Conteo piezas', 'Pantalla 4 cm'],
            badge: 'PC/Printer'
        },
        {
            id: 'I-QYW',
            name: 'INDICADOR PESO CONTADOR INALÁMBRICO I-QYW',
            category: 'indicadores',
            capacity: 'Programable',
            precision: '30,000 divisiones',
            description: 'Transmisor con señal inalámbrica. Hasta 20 metros.',
            features: ['30,000 divisiones', 'Inalámbrico', '20m alcance', 'Batería 6V'],
            badge: 'Inalámbrico'
        },

        // BÁSCULAS VINSON PESO-PRECIO
        {
            id: 'VINS-20',
            name: 'BÁSCULA PESO - PRECIO VINS-20',
            category: 'basculas-peso-precio',
            capacity: '20 kg',
            precision: '5 g',
            description: 'Función de caja registradora y conteo de piezas.',
            features: ['20 kg / 44 lb', '5 g / 0.01 lb', 'Plástico', 'Plato 29x22 cm'],
            badge: 'Nuevo'
        },
        {
            id: 'VINS-30',
            name: 'BÁSCULA PESO - PRECIO VINS-30',
            category: 'basculas-peso-precio',
            capacity: '30 kg',
            precision: '5 g',
            description: 'Pantallas iluminadas. Función conteo de piezas.',
            features: ['30 kg / 66 lb', '5 g / 0.01 lb', 'Acero inoxidable', 'Plato 27.5x21.5 cm'],
            badge: 'Nuevo'
        },
        {
            id: 'VINS-40',
            name: 'BÁSCULA PESO - PRECIO VINS-40',
            category: 'basculas-peso-precio',
            capacity: '40 kg',
            precision: '5 g',
            description: 'Mayor rango de visualización en pantallas.',
            features: ['40 kg / 88 lb', '5 g / 0.01 lb', 'Acero inoxidable', 'Plato 33x24 cm'],
            badge: 'Nuevo'
        },

        // BATIDORAS PLANETARIAS
        {
            id: 'BATI-7',
            name: 'BATIDORA BATI-7',
            category: 'batidoras',
            capacity: '7 Litros',
            precision: '0.6 kg amasado',
            description: '10 velocidades de trabajo. Cubierta plástica protectora.',
            features: ['7 litros', '0.6 kg amasado', '1/2 hp', '0-780 RPM'],
            badge: '7L'
        },
        {
            id: 'BATI-10',
            name: 'BATIDORA PLANETARIA BATI-10',
            category: 'batidoras',
            capacity: '10 Litros',
            precision: '1.5 kg amasado',
            description: '3 velocidades con palanca de elevación. Reja protectora.',
            features: ['10 litros', '1.5 kg amasado', '3/5 hp', '110 V'],
            badge: '10L'
        },
        {
            id: 'BATI-20',
            name: 'BATIDORA PLANETARIA BATI-20',
            category: 'batidoras',
            capacity: '20 Litros',
            precision: '4.5 kg amasado',
            description: '3 velocidades. Manivela para ajustar altura del tazón.',
            features: ['20 litros', '4.5 kg amasado', '1 hp', 'Acero'],
            badge: '20L'
        },
        {
            id: 'BATI-30',
            name: 'BATIDORA PLANETARIA BATI-30',
            category: 'batidoras',
            capacity: '26.5 Litros',
            precision: '5.25 kg amasado',
            description: 'Mayor capacidad con palanca de elevación.',
            features: ['26.5 litros', '5.25 kg amasado', '1.5 hp', '127 V'],
            badge: '26.5L'
        },
        {
            id: 'BATI-40X',
            name: 'BATIDORA PLANETARIA BATI-40X',
            category: 'batidoras',
            capacity: '40 Litros',
            precision: '9 kg amasado',
            description: '2 hp con palanca para ajustar altura del tazón.',
            features: ['40 litros', '9 kg amasado', '2 hp', '127 V'],
            badge: '40L'
        },
        {
            id: 'BATI-60',
            name: 'BATIDORA PLANETARIA BATI-60',
            category: 'batidoras',
            capacity: '60 Litros',
            precision: '12 kg amasado',
            description: 'Máxima capacidad. Motor 2.5 hp trifásico.',
            features: ['60 litros', '12 kg amasado', '2.5 hp', '220 V trifásico'],
            badge: '60L'
        },
        {
            id: 'BAVIN-20',
            name: 'BATIDORA PLANETARIA BAVIN-20',
            category: 'batidoras',
            capacity: '20 Litros',
            precision: '3 kg amasado',
            description: 'Nuevo modelo con diseño mejorado.',
            features: ['20 litros', '3 kg amasado', '1 hp', '105-127 V'],
            badge: 'Nuevo'
        },

        // AMASADORAS
        {
            id: 'AMASA-20',
            name: 'AMASADORA AMASA-20',
            category: 'amasadoras',
            capacity: '20 Litros',
            precision: '12 kg amasado',
            description: 'Temporizador de 60 minutos. Botón de paro de emergencia.',
            features: ['20 litros', '12 kg amasado', '1.5 hp', '127 V'],
            badge: '20L'
        },
        {
            id: 'AMASA-40',
            name: 'AMASADORA AMASA-40',
            category: 'amasadoras',
            capacity: '40 Litros',
            precision: '24 kg amasado',
            description: 'Mayor capacidad con reja protectora.',
            features: ['40 litros', '24 kg amasado', '4 hp', '200-220 V'],
            badge: '40L'
        },
        {
            id: 'AMASA-50',
            name: 'AMASADORA AMASA-50',
            category: 'amasadoras',
            capacity: '50 Litros',
            precision: '30 kg amasado',
            description: 'Máxima capacidad para producción industrial.',
            features: ['50 litros', '30 kg amasado', '4 hp', '200-220 V bifásico'],
            badge: '50L'
        },

        // MOLINOS DE CARNE
        {
            id: 'MOCA-12',
            name: 'MOLINO DE CARNE MOCA-12',
            category: 'molinos-carne',
            capacity: 'Cedazo 12',
            precision: '1 hp',
            description: 'Unidad de molienda desmontable. Gusano y corona de acero inoxidable.',
            features: ['Cedazo 12', '1 hp', 'Acero inoxidable', 'Charola 21x32 cm'],
            badge: '12"'
        },
        {
            id: 'MOCA-22-M1',
            name: 'MOLINO DE CARNE MOCA-22-M1',
            category: 'molinos-carne',
            capacity: 'Cedazo 22',
            precision: '1 hp',
            description: 'Cedazo y navaja de 22. Sistema de engranaje robusto.',
            features: ['Cedazo 22', '1 hp', 'Aluminio', 'Charola 30.5x60.5 cm'],
            badge: '22"'
        },
        {
            id: 'MOLAI-22',
            name: 'MOLINO DE CARNE MOLAI-22',
            category: 'molinos-carne',
            capacity: 'Cedazo 22',
            precision: '2 hp',
            description: 'Mayor torque con 3 engranes y 1 piñón.',
            features: ['Cedazo 22', '2 hp', '3 engranes', 'Charola 50x65 cm'],
            badge: '2 hp'
        },

        // TURBOLICUADORES
        {
            id: 'TURLIC-280',
            name: 'TURBOLICUADOR TURLIC-280',
            category: 'turbolicuadores',
            capacity: '10 Litros',
            precision: '280 watts',
            description: 'Regulador de velocidad variable. Navajas de acero inoxidable.',
            features: ['10 litros', '280 watts', '6000-20000 RPM', 'Brazo 24 cm'],
            badge: '280W'
        },
        {
            id: 'TURLIC-650',
            name: 'TURBOLICUADOR TURLIC-650',
            category: 'turbolicuadores',
            capacity: '180 Litros',
            precision: '650 watts',
            description: 'Botón de bloqueo automático. Mayor capacidad.',
            features: ['180 litros', '650 watts', '8000-18000 RPM', 'Brazo 50.5 cm'],
            badge: '650W'
        },
        {
            id: 'TURLIC-850',
            name: 'TURBOLICUADOR TURLIC-850',
            category: 'turbolicuadores',
            capacity: '240 Litros',
            precision: '850 watts',
            description: 'Máxima potencia y capacidad para uso industrial.',
            features: ['240 litros', '850 watts', '8000-18000 RPM', 'Brazo 57 cm'],
            badge: '850W'
        },

        // REBANADORAS
        {
            id: 'SLI-250',
            name: 'REBANADORA SLI-250',
            category: 'rebanadoras',
            capacity: '250 mm',
            precision: '1/5 hp',
            description: 'Perilla ajustable para grosor. Afilador incorporado.',
            features: ['250 mm cuchilla', '0.5-8 mm grosor', '1/5 hp', 'Aluminio'],
            badge: '250mm'
        },
        {
            id: 'SLI-275',
            name: 'REBANADORA SLI-275',
            category: 'rebanadoras',
            capacity: '275 mm',
            precision: '1/4 hp',
            description: 'Sistema inclinado. Cuchilla de acero al cromo duro.',
            features: ['275 mm cuchilla', '0.5-8 mm grosor', '1/4 hp', 'Cromo duro'],
            badge: '275mm'
        },
        {
            id: 'SLI-300',
            name: 'REBANADORA SLI-300',
            category: 'rebanadoras',
            capacity: '300 mm',
            precision: '1/3 hp',
            description: 'Mayor capacidad. Ancho de rebanadas de 1 a 13 mm.',
            features: ['300 mm cuchilla', '1-13 mm grosor', '1/3 hp', 'Profesional'],
            badge: '300mm'
        },

        // PROCESADOR DE ALIMENTOS
        {
            id: 'PROAL-550',
            name: 'PROCESADOR DE ALIMENTOS PROAL-550',
            category: 'procesador-alimentos',
            capacity: '3/4 HP',
            precision: '550 watts',
            description: 'Incluye 5 discos. Entrada circular y semicircular.',
            features: ['3/4 HP', '550 watts', '5 discos incluidos', 'Aluminio anodizado'],
            badge: '5 Discos'
        },

        // SIERRA CARNICERA
        {
            id: 'SICA-295',
            name: 'SIERRA CARNICERA SICA-295',
            category: 'sierra-carnicera',
            capacity: '295 cm',
            precision: '1.5 hp',
            description: 'Corte de T-bone, Top, Sirloin, Tomahawk y más.',
            features: ['295 cm cinta', '1.5 hp', 'Acero inoxidable', '40 cm altura corte'],
            badge: 'Profesional'
        },

        // EMPACADORAS AL VACÍO
        {
            id: 'EVAC-4',
            name: 'EMPACADORA AL VACÍO EVAC-4',
            category: 'empacadoras-vacio',
            capacity: '4 m3/h',
            precision: '150 watts',
            description: 'Ciclos configurados. Barra de sellado de 21 cm.',
            features: ['4 m³/h', '150 watts', '21 cm sellado', 'Acero inoxidable'],
            badge: '4 m³/h'
        },
        {
            id: 'EVAC-8',
            name: 'EMPACADORA AL VACÍO EVAC-8',
            category: 'empacadoras-vacio',
            capacity: '8 m3/h',
            precision: '250 watts',
            description: '5 ciclos preconfigurados. Doble barra de sellado.',
            features: ['8 m³/h', '250 watts', '41 cm sellado', 'Inyección gas'],
            badge: '8 m³/h'
        },
        {
            id: 'EVAC-20',
            name: 'EMPACADORA AL VACÍO EVAC-20',
            category: 'empacadoras-vacio',
            capacity: '20 m3/h',
            precision: '900 watts',
            description: 'Llantas para transportación con freno.',
            features: ['20 m³/h', '900 watts', '51 cm sellado', 'Cámara 45x45x14 cm'],
            badge: '900W'
        },
        {
            id: 'EVAC-20P',
            category: 'empacadoras-vacio',
            name: 'EMPACADORA AL VACÍO EVAC-20P',
            capacity: '20 m3/h',
            precision: '900 watts',
            description: 'Función de empacado con inyección de gas.',
            features: ['20 m³/h', '900 watts', 'Doble barra', 'Inyección gas'],
            badge: 'Gas'
        },
        {
            id: 'EVAC-40',
            name: 'EMPACADORA AL VACÍO EVAC-40',
            category: 'empacadoras-vacio',
            capacity: '40 m3/h',
            precision: '1,500 watts',
            description: 'Doble cámara de vacío. 4 barras de sellado.',
            features: ['40 m³/h', '1,500 watts', '4 barras', 'Doble cámara'],
            badge: 'Doble Cámara'
        },
        {
            id: 'EVAC-40X',
            name: 'EMPACADORA AL VACÍO EVAC-40X',
            category: 'empacadoras-vacio',
            capacity: '40 m3/h',
            precision: '1,800 watts',
            description: 'Campana de acero inoxidable. Potencia mejorada.',
            features: ['40 m³/h', '1,800 watts', 'Acero inoxidable', 'Llantas con freno'],
            badge: 'Nuevo'
        },
        {
            id: 'EVAC-60',
            name: 'EMPACADORA AL VACÍO EVAC-60',
            category: 'empacadoras-vacio',
            capacity: '60 m3/h',
            precision: '2,700 watts',
            description: 'Máxima capacidad. 4 barras de sellado de 59 cm.',
            features: ['60 m³/h', '2,700 watts', '4 barras', 'Cámara 64x42x18 cm'],
            badge: '60 m³/h'
        },

        // SELLADORAS
        {
            id: 'SELIM-200',
            name: 'SELLADORA DE IMPULSO SELIM-200',
            category: 'selladoras',
            capacity: '300 w',
            precision: '20 cm',
            description: 'Temporizador de 8 segundos. Barra de 20 cm.',
            features: ['300 watts', '20 cm barra', '8 segundos', 'Repuestos incluidos'],
            badge: '20cm'
        },
        {
            id: 'SELIM-300',
            name: 'SELLADORA DE IMPULSO SELIM-300',
            category: 'selladoras',
            capacity: '400 w',
            precision: '30 cm',
            description: 'Mayor potencia y longitud de sellado.',
            features: ['400 watts', '30 cm barra', 'Polipropileno', '400 watts'],
            badge: '30cm'
        },
        {
            id: 'SELIM-400',
            name: 'SELLADORA DE IMPULSO SELIM-400',
            category: 'selladoras',
            capacity: '500 w',
            precision: '40 cm',
            description: 'Máxima capacidad para sellado industrial.',
            features: ['500 watts', '40 cm barra', 'Industrial', 'Repuestos incluidos'],
            badge: '40cm'
        },

        // EMPLAYADORA
        {
            id: 'EMPA-55',
            name: 'EMPLAYADORA DE ALIMENTOS EMPA-55',
            category: 'empleyadora',
            capacity: '55 cm',
            precision: '400 watts',
            description: 'Ajuste de rollos hasta 55 cm. Regulador de temperatura.',
            features: ['55 cm ancho', '400 watts', '50-300°C', 'Acero inoxidable'],
            badge: '55cm'
        },

        // PLANCHA PANINI
        {
            id: 'PLANPA-1800',
            name: 'PLANCHA PANINI PLANPA-1800',
            category: 'plancha-panini',
            capacity: '1,800 w',
            precision: '50-300°C',
            description: 'Planchas acanaladas para cocción tipo grill.',
            features: ['1,800 watts', '50-300°C', 'Planchas acanaladas', 'Hierro fundido'],
            badge: '1,800W'
        },

        // MÁQUINA DE HELADOS
        {
            id: 'HELA-25P',
            name: 'MAQUINA DE HELADOS HELA-25P',
            category: 'maquina-helados',
            capacity: '25 L/hr',
            precision: '1 HP',
            description: '3 dispensadores (2 sabores y 1 combinado).',
            features: ['25 L/hr', '1 hp', '3 dispensadores', '12 litros depósito'],
            badge: 'Nuevo'
        },

        // CUCHILLERÍA PROFESIONAL
        {
            id: 'CADER-6A',
            name: 'CUCHILLO DESHUESADOR RECTO 6" AMARILLO CADER-6A',
            category: 'cuchilleria',
            capacity: '6 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Filo profesional. Mango ergonómico de alta durabilidad.',
            features: ['6 pulgadas', 'Acero X50CrMoV15', 'Mango PP', 'Amarillo'],
            badge: 'Deshuesador'
        },
        {
            id: 'CADER-6AZ',
            name: 'CUCHILLO DESHUESADOR RECTO 6" AZUL CADER-6AZ',
            category: 'cuchilleria',
            capacity: '6 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Mango azul. Resistencia a la corrosión.',
            features: ['6 pulgadas', 'Acero X50CrMoV15', 'Mango PP', 'Azul'],
            badge: '6"'
        },
        {
            id: 'CADER-6R',
            name: 'CUCHILLO DESHUESADOR RECTO 6" ROJO CADER-6R',
            category: 'cuchilleria',
            capacity: '6 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Diseño profesional con filo de alta calidad.',
            features: ['6 pulgadas', 'Acero X50CrMoV15', 'Mango PP', 'Rojo'],
            badge: 'Profesional'
        },
        {
            id: 'CADER-8R',
            name: 'CUCHILLO DESHUESADOR RECTO 8" ROJO CADER-8R',
            category: 'cuchilleria',
            capacity: '8 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Mayor longitud para cortes profesionales.',
            features: ['8 pulgadas', 'Acero X50CrMoV15', 'Mango PP', 'Rojo'],
            badge: '8"'
        },
        {
            id: 'CADEC-6A',
            name: 'CUCHILLO DESHUESADOR CURVO 6" AMARILLO CADEC-6A',
            category: 'cuchilleria',
            capacity: '6 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Hoja curva para deshuesado especializado.',
            features: ['6 pulgadas', 'Curvo', 'Acero X50CrMoV15', 'Amarillo'],
            badge: 'Curvo'
        },
        {
            id: 'CADEC-6AZ',
            name: 'CUCHILLO DESHUESADOR CURVO 6" AZUL CADEC-6AZ',
            category: 'cuchilleria',
            capacity: '6 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Diseño curvo con mango azul.',
            features: ['6 pulgadas', 'Curvo', 'Acero X50CrMoV15', 'Azul'],
            badge: 'Curvo'
        },
        {
            id: 'CADEC-6R',
            name: 'CUCHILLO DESHUESADOR CURVO 6" ROJO CADEC-6R',
            category: 'cuchilleria',
            capacity: '6 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Curvo profesional con mango rojo.',
            features: ['6 pulgadas', 'Curvo', 'Acero X50CrMoV15', 'Rojo'],
            badge: 'Curvo'
        },
        {
            id: 'CADES-6R',
            name: 'CUCHILLO DESLONJADOR 6" ROJO CADES-6R',
            category: 'cuchilleria',
            capacity: '6 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Para deslonjar pescados y mariscos.',
            features: ['6 pulgadas', 'Deslonjador', 'Acero X50CrMoV15', 'Rojo'],
            badge: 'Deslonjador'
        },
        {
            id: 'CACHE-8A',
            name: 'CUCHILLO CHEF 8" AMARILLO CACHE-8A',
            category: 'cuchilleria',
            capacity: '8 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Hoja de mayor flexibilidad. Filo profesional.',
            features: ['8 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Amarillo'],
            badge: 'Chef'
        },
        {
            id: 'CACHE-8AZ',
            name: 'CUCHILLO CHEF 8" AZUL CACHE-8AZ',
            category: 'cuchilleria',
            capacity: '8 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Chef profesional con mango azul.',
            features: ['8 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Azul'],
            badge: '8"'
        },
        {
            id: 'CACHE-8B',
            name: 'CUCHILLO CHEF 8" BLANCO CACHE-8B',
            category: 'cuchilleria',
            capacity: '8 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Diseño clásico con mango blanco.',
            features: ['8 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Blanco'],
            badge: 'Clásico'
        },
        {
            id: 'CACHE-8V',
            name: 'CUCHILLO CHEF 8" VERDE CACHE-8V',
            category: 'cuchilleria',
            capacity: '8 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Chef con mango verde.',
            features: ['8 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Verde'],
            badge: 'Verde'
        },
        {
            id: 'CACHE-8R',
            name: 'CUCHILLO CHEF 8" ROJO CACHE-8R',
            category: 'cuchilleria',
            capacity: '8 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Chef profesional con mango rojo.',
            features: ['8 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Rojo'],
            badge: 'Chef'
        },
        {
            id: 'CACHE-10A',
            name: 'CUCHILLO CHEF 10" AMARILLO CACHE-10A',
            category: 'cuchilleria',
            capacity: '10 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Mayor longitud para cortes profesionales.',
            features: ['10 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Amarillo'],
            badge: '10"'
        },
        {
            id: 'CACHE-10AZ',
            name: 'CUCHILLO CHEF 10" AZUL CACHE-10AZ',
            category: 'cuchilleria',
            capacity: '10 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Chef 10 pulgadas con mango azul.',
            features: ['10 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Azul'],
            badge: '10"'
        },
        {
            id: 'CACHE-10B',
            name: 'CUCHILLO CHEF 10" BLANCO CACHE-10B',
            category: 'cuchilleria',
            capacity: '10 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Chef blanco de 10 pulgadas.',
            features: ['10 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Blanco'],
            badge: '10"'
        },
        {
            id: 'CACHE-10R',
            name: 'CUCHILLO CHEF 10" ROJO CACHE-10R',
            category: 'cuchilleria',
            capacity: '10 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Chef rojo profesional.',
            features: ['10 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Rojo'],
            badge: '10"'
        },
        {
            id: 'CACHE-12B',
            name: 'CUCHILLO CHEF 12" BLANCO CACHE-12B',
            category: 'cuchilleria',
            capacity: '12 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Chef profesional de 12 pulgadas.',
            features: ['12 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Blanco'],
            badge: '12"'
        },
        {
            id: 'CACHE-12R',
            name: 'CUCHILLO CHEF 12" ROJO CACHE-12R',
            category: 'cuchilleria',
            capacity: '12 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Chef máster de 12 pulgadas.',
            features: ['12 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Rojo'],
            badge: '12"'
        },
        {
            id: 'CACHE-14B',
            name: 'CUCHILLO CHEF 14" BLANCO CACHE-14B',
            category: 'cuchilleria',
            capacity: '14 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Chef profesional de 14 pulgadas.',
            features: ['14 pulgadas', 'Chef', 'Acero X50CrMoV15', 'Blanco'],
            badge: '14"'
        },
        {
            id: 'CACHU-6A',
            name: 'HACHUELA 6" AMARILLO CACHU-6A',
            category: 'cuchilleria',
            capacity: '6 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Hoja de mayor espesor. Mango ergonómico.',
            features: ['6 pulgadas', 'Hachuela', 'Acero X50CrMoV15', 'Amarillo'],
            badge: 'Hachuela'
        },
        {
            id: 'CACHU-6R',
            name: 'HACHUELA 6" ROJO CACHU-6R',
            category: 'cuchilleria',
            capacity: '6 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Hachuela profesional con mango rojo.',
            features: ['6 pulgadas', 'Hachuela', 'Acero X50CrMoV15', 'Rojo'],
            badge: '6"'
        },
        {
            id: 'CACHU-8R',
            name: 'HACHUELA 8" ROJO CACHU-8R',
            category: 'cuchilleria',
            capacity: '8 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Hachuela de 8 pulgadas profesional.',
            features: ['8 pulgadas', 'Hachuela', 'Acero X50CrMoV15', 'Rojo'],
            badge: '8"'
        },
        {
            id: 'CACE-14R',
            name: 'CUCHILLO CECINERO 14" ROJO CACE-14R',
            category: 'cuchilleria',
            capacity: '14 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Cecinero profesional para corte de carnes.',
            features: ['14 pulgadas', 'Cecinero', 'Acero X50CrMoV15', 'Rojo'],
            badge: 'Cecinero'
        },
        {
            id: 'CACE-18R',
            name: 'CUCHILLO CECINERO 18" ROJO CACE-18R',
            category: 'cuchilleria',
            capacity: '18 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Cecinero de 18 pulgadas profesional.',
            features: ['18 pulgadas', 'Cecinero', 'Acero X50CrMoV15', 'Rojo'],
            badge: '18"'
        },
        {
            id: 'CACE-22R',
            name: 'CUCHILLO CECINERO 22" ROJO CACE-22R',
            category: 'cuchilleria',
            capacity: '22 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Cecinero máster de 22 pulgadas.',
            features: ['22 pulgadas', 'Cecinero', 'Acero X50CrMoV15', 'Rojo'],
            badge: '22"'
        },
        {
            id: 'CABIC-10R',
            name: 'CUCHILLO BISTECERO CURVO 10" ROJO CABIC-10R',
            category: 'cuchilleria',
            capacity: '10 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Bistecero curvo profesional.',
            features: ['10 pulgadas', 'Bistecero curvo', 'Acero X50CrMoV15', 'Rojo'],
            badge: 'Bistecero'
        },
        {
            id: 'CABIC-12R',
            name: 'CUCHILLO BISTECERO CURVO 12" ROJO CABIC-12R',
            category: 'cuchilleria',
            capacity: '12 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Bistecero curvo de 12 pulgadas.',
            features: ['12 pulgadas', 'Bistecero curvo', 'Acero X50CrMoV15', 'Rojo'],
            badge: '12"'
        },
        {
            id: 'CABIC-14R',
            name: 'CUCHILLO BISTECERO CURVO 14" ROJO CABIC-14R',
            category: 'cuchilleria',
            capacity: '14 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Bistecero curvo profesional de 14 pulgadas.',
            features: ['14 pulgadas', 'Bistecero curvo', 'Acero X50CrMoV15', 'Rojo'],
            badge: '14"'
        },
        {
            id: 'CABIR-12R',
            name: 'CUCHILLO BISTECERO RECTO 12" ROJO CABIR-12R',
            category: 'cuchilleria',
            capacity: '12 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Bistecero recto profesional.',
            features: ['12 pulgadas', 'Bistecero recto', 'Acero X50CrMoV15', 'Rojo'],
            badge: 'Recto'
        },
        {
            id: 'CABIR-14R',
            name: 'CUCHILLO BISTECERO RECTO 14" ROJO CABIR-14R',
            category: 'cuchilleria',
            capacity: '14 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Bistecero recto de 14 pulgadas.',
            features: ['14 pulgadas', 'Bistecero recto', 'Acero X50CrMoV15', 'Rojo'],
            badge: '14"'
        },
        {
            id: 'CAJAM-14R',
            name: 'CUCHILLO PARA JAMÓN 14" ROJO CAJAM-14R',
            category: 'cuchilleria',
            capacity: '14 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Especial para corte de jamones.',
            features: ['14 pulgadas', 'Jamón', 'Acero X50CrMoV15', 'Rojo'],
            badge: 'Jamón'
        },
        {
            id: 'CAPA-10B',
            name: 'CUCHILLO PARA PAN 10" BLANCO CAPA-10B',
            category: 'cuchilleria',
            capacity: '10 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Cuchillo especial para pan con filo dentado.',
            features: ['10 pulgadas', 'Pan', 'Acero X50CrMoV15', 'Blanco'],
            badge: 'Pan'
        },
        {
            id: 'CAPA-12B',
            name: 'CUCHILLO PARA PAN 12" BLANCO CAPA-12B',
            category: 'cuchilleria',
            capacity: '12 pulgadas',
            precision: 'Acero X50CrMoV15',
            description: 'Cuchillo para pan de 12 pulgadas.',
            features: ['12 pulgadas', 'Pan', 'Acero X50CrMoV15', 'Blanco'],
            badge: '12"'
        },

        // INSERTOS, TAPAS Y DRENADORES
        {
            id: 'INAE-1.5',
            name: 'INSERTO DE ACERO INOXIDABLE ENTERO 1.5" INAE-1.5',
            category: 'insertos',
            capacity: 'Entero',
            precision: '1.5 pulgadas',
            description: 'Inserto de acero inoxidable apilable.',
            features: ['Entero', '1.5" altura', 'Acero inoxidable', '0.6 mm espesor'],
            badge: 'Inoxidable'
        },
        {
            id: 'INAE-2.5',
            name: 'INSERTO DE ACERO INOXIDABLE ENTERO 2.5" INAE-2.5',
            category: 'insertos',
            capacity: 'Entero',
            precision: '2.5 pulgadas',
            description: 'Inserto entero de acero inoxidable.',
            features: ['Entero', '2.5" altura', 'Acero inoxidable', 'Apilable'],
            badge: '2.5"'
        },
        {
            id: 'INAE-4',
            name: 'INSERTO DE ACERO INOXIDABLE ENTERO 4" INAE-4',
            category: 'insertos',
            capacity: 'Entero',
            precision: '4 pulgadas',
            description: 'Inserto entero de 4 pulgadas de altura.',
            features: ['Entero', '4" altura', 'Acero inoxidable', '0.6 mm'],
            badge: '4"'
        },
        {
            id: 'INAE-6',
            name: 'INSERTO DE ACERO INOXIDABLE ENTERO 6" INAE-6',
            category: 'insertos',
            capacity: 'Entero',
            precision: '6 pulgadas',
            description: 'Inserto entero de 6 pulgadas.',
            features: ['Entero', '6" altura', 'Acero inoxidable', 'Apilable'],
            badge: '6"'
        },
        {
            id: 'INAE-8',
            name: 'INSERTO DE ACERO INOXIDABLE ENTERO 8" INAE-8',
            category: 'insertos',
            capacity: 'Entero',
            precision: '8 pulgadas',
            description: 'Inserto entero de máxima altura.',
            features: ['Entero', '8" altura', 'Acero inoxidable', 'Profesional'],
            badge: '8"'
        }
    ]
};

// Funciones de utilidad
function createWhatsAppLink(productName, productId) {
    const message = encodeURIComponent(`Hola, me interesa cotizar el producto: ${productName} (${productId}). ¿Podrían darme más información y precio?`);
    return `https://wa.me/524421742551?text=${message}`;
}

function createWhatsAppLink2(productName, productId) {
    const message = encodeURIComponent(`Hola, me interesa cotizar el producto: ${productName} (${productId}). ¿Podrían darme más información y precio?`);
    return `https://wa.me/524426020924?text=${message}`;
}

function showNotification(message) {
    // Crear notificación temporal
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #25D366;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        font-family: Inter, sans-serif;
        font-size: 14px;
        max-width: 300px;
    `;
    notification.innerHTML = `
        <i class="fab fa-whatsapp" style="margin-right: 8px;"></i>
        ${message}
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Renderizar categorías
function renderCategories() {
    const container = document.getElementById('categoriesGrid');
    if (!container) return;

    container.innerHTML = '';
    
    DATA.categories.slice(0, 12).forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-img">
                ${category.image}
            </div>
            <div class="category-content">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <a href="catalogo.html?category=${category.id}" class="btn-secondary">
                    Ver Productos <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Renderizar productos destacados
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    container.innerHTML = '';
    
    // Seleccionar productos destacados
    const featured = DATA.products.filter(p => p.badge && 
        ['Popular', 'Nuevo', 'USB', 'WiFi', 'Bluetooth'].includes(p.badge)
    ).slice(0, 8);

    featured.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                ${getProductIcon(product.category)}
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-content">
                <h3>${product.name}</h3>
                <p>${product.description.substring(0, 100)}...</p>
            </div>
            <div class="product-footer">
                <a href="${createWhatsAppLink(product.name, product.id)}" class="btn-whatsapp" target="_blank">
                    <i class="fab fa-whatsapp"></i> Cotizar
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Obtener ícono según categoría
function getProductIcon(categoryId) {
    const icons = {
        'basculas-peso-precio': '⚖️',
        'basculas-contadoras': '🔢',
        'basculas-porcionadoras': '🍖',
        'basculas-precision': '⚡',
        'basculas-agua': '💧',
        'basculas-etiquetadoras': '🏷️',
        'basculas-colgantes': '🔗',
        'basculas-plataforma': '📦',
        'basculas-5kg': '🎯',
        'basculas-corporales': '📊',
        'basculas-mascotas': '🐾',
        'basculas-bebes': '👶',
        'indicadores': '📱',
        'batidoras': '🧁',
        'amasadoras': '🍞',
        'molinos-carne': '🥩',
        'turbolicuadores': '🌪️',
        'rebanadoras': '🥒',
        'procesador-alimentos': '🥕',
        'sierra-carnicera': '🥩',
        'empacadoras-vacio': '📦',
        'selladoras': '🔧',
        'empleyadora': '🍕',
        'plancha-panini': '🥪',
        'maquina-helados': '🍦',
        'cuchilleria': '🔪',
        'utensilios-cocina': '🍽️',
        'insertos': '🗃️',
        'material-punto-venta': '🏪'
    };
    return icons[categoryId] || '📦';
}

// Renderizar productos del catálogo
function renderCatalogProducts(productsToShow = null) {
    const container = document.getElementById('productsGrid');
    if (!container) return;

    const products = productsToShow || DATA.products;
    container.innerHTML = '';

    if (products.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No se encontraron productos</h3>
                <p>Intenta con otros términos de búsqueda</p>
            </div>
        `;
        return;
    }

    products.forEach(product => {
        const category = DATA.categories.find(c => c.id === product.category);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                ${getProductIcon(product.category)}
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-content">
                <div class="product-category">${category ? category.name : product.category}</div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-specs">
                    ${product.features.map(feature => `<span class="spec-tag">${feature}</span>`).join('')}
                </div>
            </div>
            <div class="product-footer">
                <a href="${createWhatsAppLink(product.name, product.id)}" class="btn-whatsapp" target="_blank">
                    <i class="fab fa-whatsapp"></i> Cotizar por WhatsApp 1
                </a>
                <br><br>
                <a href="${createWhatsAppLink2(product.name, product.id)}" class="btn-whatsapp" target="_blank" style="background: #128C7E;">
                    <i class="fab fa-whatsapp"></i> Cotizar por WhatsApp 2
                </a>
            </div>
        `;
        container.appendChild(card);
    });

    // Actualizar contador de resultados
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `${products.length} producto${products.length !== 1 ? 's' : ''} encontrado${products.length !== 1 ? 's' : ''}`;
    }
}

// Filtrar productos
function filterProducts() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const sortFilter = document.getElementById('sortFilter')?.value || 'name';

    let filtered = DATA.products;

    // Filtrar por búsqueda
    if (searchTerm) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.features.some(f => f.toLowerCase().includes(searchTerm))
        );
    }

    // Filtrar por categoría
    if (categoryFilter) {
        filtered = filtered.filter(product => product.category === categoryFilter);
    }

    // Ordenar
    filtered.sort((a, b) => {
        if (sortFilter === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortFilter === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    renderCatalogProducts(filtered);
}

// Llenar select de categorías
function populateCategoryFilter() {
    const select = document.getElementById('categoryFilter');
    if (!select) return;

    select.innerHTML = '<option value="">Todas las categorías</option>';
    
    DATA.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        select.appendChild(option);
    });
}

// Manejar parámetros URL
function handleURLParams() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    
    if (category) {
        const categorySelect = document.getElementById('categoryFilter');
        if (categorySelect) {
            categorySelect.value = category;
        }
        filterProducts();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar según la página
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        renderCategories();
        renderFeaturedProducts();
    } else if (currentPage === 'catalogo.html') {
        populateCategoryFilter();
        renderCatalogProducts();
        handleURLParams();
    }

    // Event listeners para filtros
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');

    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// Funciones globales para botones
window.cotizarWhatsApp = function(productName, productId) {
    showNotification('Redirigiendo a WhatsApp...');
    setTimeout(() => {
        window.open(createWhatsAppLink(productName, productId), '_blank');
    }, 500);
};

window.cotizarWhatsApp2 = function(productName, productId) {
    showNotification('Redirigiendo a WhatsApp...');
    setTimeout(() => {
        window.open(createWhatsAppLink2(productName, productId), '_blank');
    }, 500);
};

// Exportar datos para debugging
window.DATA = DATA;
