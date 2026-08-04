/**
 * language.js
 * Motor de internacionalización (i18n) para La Orquídea y el Oso — Landing Fase 1.
 *
 /*
 * La Orquídea y el Oso — i18n
 * ---------------------------------------------------------------
 * El idioma por defecto es SIEMPRE inglés (English). A partir de ahí, la
 * detección automática por país (geolocalización por IP) puede cambiarlo
 * a español o francés únicamente para los mercados donde corresponde
 * (Colombia/Latinoamérica -> es, África Occidental francófona/Francia -> fr).
 * Para Sudáfrica, Ghana y el resto de mercados angloparlantes el sitio
 * permanece en inglés, que es el idioma correcto para esos compradores.
 *
 * Orden de prioridad al cargar la página:
 *   1) Preferencia guardada por el usuario (localStorage), si eligió
 *      manualmente un idioma alguna vez -> se respeta siempre.
 *   2) Si no hay preferencia manual: inglés por defecto (nunca se adivina
 *      a partir del idioma del navegador, que no es un indicador confiable
 *      del país real del visitante ni del idioma que debería ver).
 *   3) Refinamiento automático por país (best-effort, no bloqueante): se
 *      consulta el país del visitante por IP y, si corresponde a uno de
 *      los mercados francófonos o hispanohablantes del mapa de abajo, se
 *      cambia el idioma automáticamente. Se usan DOS proveedores gratuitos
 *      de geolocalización por IP en cadena (uno de respaldo del otro) para
 *      que la detección funcione de forma confiable incluso si el primer
 *      servicio falla, está bloqueado por un adblocker, o excede su límite
 *      de solicitudes. Si ambos fallan, el sitio se queda en inglés.
 * ---------------------------------------------------------------
 */
(function () {
  "use strict";

  const STORAGE_KEY = "oo_lang";
  const MANUAL_KEY = "oo_lang_manual";
  const DEFAULT_LANG = "en";

  const dict = {
    en: {
      nav: {
        producto: "Product",
        origen: "Origin",
        programa: "O&amp;O Program",
        trazabilidad: "Traceability",
        contacto: "Contact",
        cta: "Request information",
      },
      hero: {
        badge: "South Africa Trade Mission 2026",
        eyebrow: "SPECIALTY COFFEE — SOUTH AFRICA TRADE MISSION 2026",
        title: "A cup you'll remember. A one-of-a-kind, verifiable origin.",
        subtitle:
          "Colombia is synonymous with great coffee. Specialty demands more: terroir, verified, grown on small farms that carry their care and culture into the highest standards. We grow, process and export it ourselves from an origin like nowhere else on earth: Inzá, Tierradentro.",
        inline_link: "See the Direct-Trade Model →",
        cta_primary: "See available coffee",
        cta_secondary: "See how we cut the chain",
        reviews_tab: "Reviews",
        feature1_title: "100% Organic",
        feature1_text: "Certified coffee",
        feature2_title: "Smallholder farmers",
        feature2_text: "Direct trade",
        feature3_title: "Specialty coffee",
        feature3_text: "High-quality cup",
        feature4_title: "Sustainable",
        feature4_text: "Regenerative farming",
      },
      stats: {
        eyebrow: "Verified Impact",
        title:
          "What Direct Trade to South Africa, Ghana and Senegal Looks Like",
        families: "Partner farming families",
        farms_suffix: "ha",
        farms: "Under agroforestry / shade-grown coffee",
        foods_suffix: "%",
        foods: "Farms verified zero-deforestation",
        foods_note: "Verification ongoing",
        organic_suffix: "",
        organic: "Sacks exported directly in 2025",
      },
      product: {
        eyebrow: "Verified Origin, Specialty Cup, Direct Relations",
        title: "Authentic Coffee, Cup After Cup",
        text: "Complex, sweet, balanced, consistent. Every lot passes through at least three quality filters and gets documented step by step: harvest, profile, score, farm and grower. Specialty takes care — it matters to our growers and to our buyers — and that's why our controls only got stricter over time. A lot carries our name only once it's earned it.",
        bullet1: "High quality standards",
        bullet2: "Lot-by-lot traceability",
        bullet3: "Full producer report included — even on multi-farm blends. ",
        bullet4: "•	An active path toward sustainability in origin, together",
        downloads_label: "Get the Brochure",
        download_en: "Brochure EN",
        download_fr: "Brochure FR",
        sell_sheet: "View sell sheet",
      },
      origin: {
        eyebrow: "ORIGIN",
        title: "Authentic Terroir",
        text: "Our coffee grows in Tierradentro, Cauca, inside the Yaquivá Indigenous Reserve, above 1,400 metres — home to the archaeological park UNESCO named a World Heritage Site in 1995. One container can carry the work of 300 families. 300 individual efforts we refuse to leave invisible.",
        bullet1: "300+ named, GPS-verified producer families",
        bullet2:
          "Agroforestry systems protecting biodiversity, páramo and water sources",
        bullet3:
          "A tradition passed down between generations, not just a supply contract",
        bullet4:
          "O&O Origin Hub: growers process alongside our own team — no industrial middleman",
        bullet5:
          "•	Every lot scored under our 65-point Certified Origin standard — ask to see it",
      },
      program: {
        eyebrow: "CERTIFIED ORIGIN PROGRAM",
        title:
          "We don't want your blind trust. We invite you to see for yourself.",
        text: "A proprietary 65-point standard, applied farm by farm — not third-party certification, but proof of what we already do. Too many certifications became paperwork and fees that improved neither the coffee nor the origin. Ours works the other way: verification you can act on, not a certificate to frame.",
        dimensions_title: "Three dimensions, evaluated in the field:",
        dimensions: [
          {
            number: "01",
            title: "Origin",
            text: "GPS-verified location, altitude and variety — down to the exact farm and lot.",
          },
          {
            number: "02",
            title: "Sustainability",
            text: "Regulated shade cover, water source protection, and agronomic practices aligned with regenerative standards.",
          },
          {
            number: "03",
            title: "Quality",
            text: "Lab-verified SCA score sets the tier: Grower (82+), Select (84+), Reserve (86+). Sustainability can hold it back: can an excellent cup, without sustainability, really be called special?",
          },
        ],
        downloads_label: "Download O&O Index",
        download_en: "O&O Index EN",
        download_fr: "O&O Index FR",
      },
      verification: {
        eyebrow: "CERTIFIED ORIGIN INDEX — O&O",

        title: "Here's what we found.",

        text: "Real figures from our ongoing field survey in the Yaquivá Reserve — applied in person by our own team, not self-declared.",

        farms_value: "100+",
        farms_label: "Farms visited",

        score_value: "41/65",
        score_label: "O&O Index /65",

        sectors_value: "6",
        sectors_label: "Sectors covered",

        chart_title: "Score by block",

        origin: "Origin",
        origin_score: "15/20",

        sustainability: "Sustainability",
        sustainability_score: "13/20",

        quality: "Quality",
        quality_score: "13/20",

        grower_percent: "48%",
        grower_label: "Grower",

        select_percent: "37%",
        select_label: "Select",

        reserve_percent: "15%",
        reserve_label: "Reserve",

        description:
          "68% of evaluated farms keep regulated shade cover within the recommended agronomic range (20–35%): protecting high-Andean forest without sacrificing yield.",

        cta: "Visit the origin, review the farm-by-farm data. You choose how to check it.",

        button: "Get the full report",
      },

      directTrade: {
        eyebrow: "DIRECT TRADE, VERIFIED",
        title: "FOUR MARGINS DISAPPEAR. THE ORIGIN — THE TERROIR — APPEARS.",

        chain_title: "The typical Colombian coffee chain",
        chain_text:
          "Grower → Local trader → Cooperative / Exporter → Importer → Roaster",
        chain_note: '5 margins. Origin usually stops at "Colombia."',

        oo_title: "The O&O chain",
        oo_text:
          "Named grower (GPS-tracked) → O&O Origin Hub (same team that exports) → Your roastery",
        oo_note: "One step. Full visibility, farm to export.",

        bullet1: "300+ producer families, named and GPS-verified, lot by lot.",
        bullet2:
          "O&O Origin Hub: producers process alongside our own team—no centralized industrial intermediary.",
        bullet3:
          "Every lot scored under our 65-point Certified Origin standard—ask to see it.",

        cta: "See how we verify this",
      },
      traceability: {
        eyebrow: "TRACEABILITY",
        badge: "Coming soon",
        title: "Five Stages. All Documented.",
        text: "Every container we export carries coffee from dozens of individual growers in Inzá, Tierradentro. Nothing blended away, nothing erasing who grew what. Here's how a lot travels, from tree to your hands:",
        note: "The lot-lookup tool is currently in development. Ask for a demo during the trade mission.",
      },

      mission: {
        eyebrow: "SOUTH AFRICA TRADE MISSION 2026",
        title: "South Africa Trade Mission 2026",
        text1:
          "Colombia and South Africa currently trade very little specialty coffee directly. Most volumes travel through European or North American intermediaries before reaching African roasters — adding cost, time and distance between the farm and the cup.",
        text2:
          "La Orquídea y el Oso is joining the South Africa Trade Mission 2026 to open a direct route to explore and connect authenticity: specialty, organic coffee from Inzá, Tierradentro, presented directly to specialty buyers, distributors and roasters in South Africa and West Africa.",
        bullet1:
          "A direct commercial bridge between Colombian growers and African buyers — no unnecessary intermediaries.",
        bullet2:
          "Samples, technical sheets and export-ready lots presented in person.",
        bullet3:
          "A long-term relationship with African roasters, not a one-off shipment.",
        cta: "Talk to our team",
      },
      report: {
        eyebrow: "Certified Origin Index — O&amp;O",
        title: "Request the Full Report",
        text: "Leave your details and our team will send you the complete farm-by-farm Certified Origin data — scores, tiers, and methodology.",
        name: "Full name",
        email: "Email",
        country: "Country",
        country_placeholder: "Start typing...",
        submit: "Send Report",
        sending: "Sending...",
        success: "Thank you! We'll send the full report to your email shortly.",
        error: "There was an error submitting the form.",
      },

      contact: {
        eyebrow: "Contact",
        title: "Let's Talk About Your Next Import",
        text: "Fill out the form and our sales team will send samples, technical sheets and commercial terms directly.",
        form: {
          name: "Full name",
          error_required: "Please complete this field.",
          email: "Email address",
          error_email: "Please enter a valid email.",
          company: "Company",
          country: "Country",
          volume: "Product of interest",
          volume_placeholder: "E.g. 1 container / quarter",
          message: "Message",
          message_placeholder: "Tell us about your interest in our coffee...",
          consent:
            "I agree to be contacted by La Orquídea y el Oso about this message.",
          submit: "Get My O&O Samples",
          whatsapp: "Or write to us directly on WhatsApp",
          sending: "Sending...",
          success: "Thank you! La Orquídea y el Oso has received your message.",
        },
      },
      footer: {
        tagline:
          "Specialty coffee from Inzá Tierradentro, (Cauca) Colombia · Exported by those who grow it · Verifiable lot by lot.",
        links_title: "Links",
        contact_title: "Direct contact",
        redirect_note:
          "This site is the landing page for the South Africa Trade Mission 2026 by fincaslaorquideayeloso.com",
        rights: "All rights reserved.",
      },
    },

    es: {
      nav: {
        producto: "Producto",
        origen: "Origen",
        programa: "Programa O&amp;O",
        trazabilidad: "Trazabilidad",
        contacto: "Contacto",
        cta: "Solicitar información",
      },
      hero: {
        badge: "Misión Comercial Sudáfrica 2026",
        eyebrow: "Café de Especialidad — Misión Comercial Sudáfrica 2026",
        title:
          "Café que puede rastrear hasta el productor. No solo hasta el país.",
        subtitle:
          "Cultivamos, procesamos y exportamos café de especialidad directamente desde Inzá, Tierradentro, sin intermediarios ni una etiqueta genérica de origen. Cada lote está vinculado a la familia que lo produjo, identificada por nombre y lote.",
        inline_link: "Ver el modelo de comercio directo →",
        cta_primary: "Ver los lotes trazables",
        cta_secondary: "Nuestra misión en África",
        reviews_tab: "Reseñas",
        feature1_title: "100% Orgánico",
        feature1_text: "Café certificado",
        feature2_title: "Pequeños productores",
        feature2_text: "Comercio directo",
        feature3_title: "Café de especialidad",
        feature3_text: "Taza de alta calidad",
        feature4_title: "Sostenible",
        feature4_text: "Agricultura regenerativa",
      },
      stats: {
        eyebrow: "Impacto verificado",
        title: "Así se ve el comercio directo hacia Sudáfrica, Ghana y Senegal",
        families: "300+ familias productoras asociadas",
        farms: "Bajo sistemas agroforestales / café cultivado bajo sombra",
        farms_suffix: "ha",
        foods_suffix: "%",
        foods: "Fincas verificadas con cero deforestación",
        foods_note: "Verificación en curso",
        organic_suffix: "",
        organic: "Sacos exportados directamente en 2025",
      },
      product: {
        eyebrow:
          "Origen verificado · Café de especialidad · Relaciones directas",
        title: "Café auténtico, taza tras taza.Producto Exportable",
        text: "Compleja, dulce, balanceada, consistente. Cada lote pasa al menos tres filtros de calidad y queda documentado paso a paso: cosecha, perfil, puntaje, finca y productor. La especialidad requiere cuidado, es importante para nuestros productores y clientes, y por eso nuestros controles se volvieron más estrictos con el tiempo — un lote especial lleva nuestro nombre solo cuando se lo gana.",
        bullet1: "Altos estándares de calidad",
        bullet2: "Trazabilidad lote por lote",
        bullet3:
          "Reporte completo del productor, incluso en mezclas de varias fincas",
        bullet3: "Ruta activa hacia la sostenibilidad en origen, juntos",
        downloads_label: "Descargar Brochure",
        download_en: "Brochure EN",
        download_fr: "Brochure FR",
        sell_sheet: "Ver ficha técnica",
      },
      origin: {
        eyebrow: "ORIGEN",
        title: "Territorio Autentico",
        text: "Nuestro café crece en Tierradentro, Cauca, dentro del Resguardo Indígena de Yaquivá, por encima de los 1.400 metros — sede del parque arqueológico que la UNESCO declaró Patrimonio de la Humanidad en 1995. Un contenedor puede llevar el esfuerzo de 300 familias. 300 esfuerzos que nos negamos a dejar invisibles.",
        bullet1: "300+ familias productoras, identificadas y georreferenciadas",
        bullet2:
          "Sistemas agroforestales que protegen biodiversidad, páramo y fuentes hídricas",
        bullet3:
          "Una tradición transmitida entre generaciones, no solo un contrato de suministro",
        bullet4:
          "O&O Origin Hub: los productores procesan junto a nuestro equipo — sin intermediario industrial",
        bullet5:
          "Todos los lotes son calificados bajo nuestro estándar de certificación de origen O&O ",
      },
      program: {
        eyebrow: "CERTIFIEDO ORIGEN INDEX — O&O",
        title:
          "No queremos que nos crea a ciegas. Lo invitamos a comprobarlo usted mismo.",
        text: "Un estándar propio de 65 puntos, aplicado finca por finca — no es un sello de tercero, es la prueba de lo que ya hacemos. Muchas certificaciones se volvieron trámites y costos que no mejoran ni el café ni el origen. La nuestra funciona al revés: verificación que se puede comprobar, no un certificado para enmarcar.",
        downloads_label: "Descargar Índice O&O",
        download_en: "Índice O&O (Inglés)",
        download_fr: "Índice O&O (Francés)",
        video_note:
          "Los compradores que eligen O&O respaldan ese progreso. Próximamente estará disponible una plataforma para seguir cada lote.",
      },
      verification: {
        eyebrow: "Programa de Origen Certificado",

        title:
          "No queremos que confíe ciegamente en nosotros. Lo invitamos a comprobarlo por usted mismo.",

        text: "Un estándar propio de 65 puntos, aplicado finca por finca. No es una certificación de terceros, sino una forma de demostrar lo que ya hacemos. Muchas certificaciones terminaron convirtiéndose en trámites y costos que no mejoran ni el café ni el origen. Nuestro enfoque funciona al contrario: verificación útil para tomar decisiones, no un certificado para enmarcar.",

        dimensions_title: "Tres dimensiones evaluadas en campo:",

        origin: "Origen",
        origin_description:
          "Ubicación verificada por GPS, altitud y variedad, hasta la finca y el lote exactos.",

        sustainability: "Sostenibilidad",
        sustainability_description:
          "Cobertura de sombra regulada, protección de fuentes hídricas y prácticas agronómicas alineadas con estándares regenerativos.",

        quality: "Calidad",
        quality_description:
          "La puntuación SCA verificada en laboratorio define la categoría: Grower (82+), Select (84+) y Reserve (86+). La sostenibilidad también influye: ¿puede una excelente taza, sin sostenibilidad, llamarse realmente especial?",

        results_title: "Esto es lo que encontramos.",

        results_text:
          "Cifras reales de nuestro levantamiento continuo en el Resguardo Indígena Yaquivá, aplicadas presencialmente por nuestro propio equipo, no autodeclaradas.",

        farms_value: "160+",
        farms_label: "Fincas visitadas",

        score_value: "49.5/65",
        score_label: "Índice O&O",

        sectors_value: "24",
        sectors_label: "Sectores evaluados",

        chart_title: "Puntaje por bloque",

        origin_score: "15/20",
        sustainability_score: "13/20",
        quality_score: "13/20",

        grower_percent: "7.1%",
        grower_label: "O&O Grower",

        select_percent: "83%",
        select_label: "O&O Select",

        reserve_percent: "9.8%",
        reserve_label: "O&O Reserve",

        cta: "Visite el origen o revise los datos finca por finca. Usted elige cómo comprobarlo.",

        button: "Obtener el informe completo",
      },

      directTrade: {
        eyebrow: "COMERCIO DIRECTO, VERIFICADO",
        title: "Cuatro márgenes desaparecen. Aparecen el origen y el terroir.",
        chain_title: "Cadena tradicional del café colombiano",
        chain_text:
          "Productor → Comprador local → Cooperativa / Exportador → Importador → Tostadora",
        chain_note:
          "4–5 márgenes comerciales. Normalmente el origen termina en «Colombia».",
        oo_title: "La cadena O&O",
        oo_text:
          "Productor identificado (georreferenciado por GPS) → Centro de Origen O&O (el mismo equipo que exporta) → Su tostadora",
        oo_note:
          "Un solo paso. Visibilidad completa desde la finca hasta la exportación.",
        bullet1:
          "Más de 300 familias productoras identificadas y verificadas mediante GPS, lote por lote.",
        bullet2:
          "Centro de Origen O&O: el café se procesa junto a nuestro equipo, sin intermediarios industriales centralizados.",
        bullet3:
          "Cada lote es evaluado bajo nuestro estándar de 60 puntos de Origen Certificado. Solicite conocer el protocolo.",
        cta: "Vea cómo verificamos este proceso",
      },
      traceability: {
        eyebrow: "TRAZABILIDAD",
        badge: "Próximamente",
        title: "CINCO ETAPAS. TODAS DOCUMENTADAS",
        text: "Cada contenedor que exportamos lleva café de decenas de productores de Inzá, Tierradentro. Sin borrar quién cultivó qué. Así viaja un lote, del árbol a tus manos:",
        note: "La herramienta de consulta por lote está en desarrollo. Solicite una demostración durante la misión comercial.",
      },

      mission: {
        eyebrow: "MISIÓN COMERCIAL SUDÁFRICA 2026",
        title: "Misión Comercial Sudáfrica 2026",
        text1:
          "Actualmente, Colombia y Sudáfrica comercian muy poco café de especialidad de forma directa. La mayoría de los volúmenes viaja a través de intermediarios europeos o norteamericanos antes de llegar a los tostadores africanos, lo que añade costo, tiempo y distancia entre la finca y la taza.",
        text2:
          "La Orquídea y el Oso se une a la Misión Comercial Sudáfrica 2026 para abrir una ruta directa que explore y conecte la autenticidad: café orgánico de especialidad de Inzá, Tierradentro, presentado directamente a compradores, distribuidores y tostadores de especialidad en Sudáfrica y África Occidental.",
        bullet1:
          "Un puente comercial directo entre los productores colombianos y los compradores africanos, sin intermediarios innecesarios.",
        bullet2:
          "Muestras, fichas técnicas y lotes listos para exportar, presentados en persona.",
        bullet3:
          "Una relación a largo plazo con los tostadores africanos, no un envío puntual.",
        cta: "Hable con nuestro equipo",
      },
      report: {
        eyebrow: "Índice de Origen Certificado — O&amp;O",
        title: "Solicitar el informe completo",
        text: "Déjenos sus datos y nuestro equipo le enviará la información completa del Origen Certificado, finca por finca: puntajes, niveles y metodología.",
        name: "Nombre completo",
        email: "Correo electrónico",
        country: "País",
        country_placeholder: "Empiece a escribir...",
        submit: "Enviar informe",
        sending: "Enviando...",
        success:
          "¡Gracias! Le enviaremos el informe completo a su correo en breve.",
        error: "Hubo un error al enviar el formulario.",
      },

      contact: {
        eyebrow: "CONTACTO",
        title: "Pida la muestra. Ahí empieza todo.",
        text: "Complete el formulario y nuestro equipo comercial le enviará muestras, fichas técnicas y condiciones comerciales — directamente, sin intermediarios. ",
        form: {
          name: "Nombre completo",
          error_required: "Por favor complete este campo.",
          email: "Correo electrónico",
          error_email: "Ingrese un correo electrónico válido.",
          company: "Empresa",
          country: "País",
          volume: "Volumen estimado",
          volume_placeholder: "Ej. 1 contenedor por trimestre",
          message: "Mensaje",
          message_placeholder: "Cuéntenos qué tipo de café busca...",
          consent: "Acepto ser contactado por La Orquídea y el Oso.",
          submit: "Solicitar muestras O&O",
          whatsapp: "O escribirnos directamente por WhatsApp",
          sending: "Enviando...",
          success: "¡Gracias! Hemos recibido su solicitud.",
        },
      },
      footer: {
        tagline:
          "Cafés de especialidad de Inzá Tierradentro (Cauca) Colombia · Exportado por quienes lo cultivan · Verificable lote a lote",
        links_title: "Enlaces",
        contact_title: "Contacto directo",
        redirect_note:
          "Landing oficial de La Orquídea y el Oso para la Misión Comercial Sudáfrica 2026.",
        rights: "Todos los derechos reservados.",
      },
    },

    fr: {
      nav: {
        producto: "Produit",
        origen: "Origine",
        programa: "Programme O&amp;O",
        trazabilidad: "Traçabilité",
        contacto: "Contact",
        cta: "Demander des informations",
      },

      hero: {
        badge: "MISSION COMMERCIALE AFRIQUE DU SUD 2026",
        eyebrow: "Café de spécialité — Mission Commerciale Afrique du Sud 2026",
        title:
          "Un café dont vous pouvez retracer l'origine jusqu'au producteur. Pas seulement jusqu'au pays.",
        subtitle:
          "Nous cultivons, transformons et exportons directement notre café de spécialité depuis Inzá, Tierradentro, sans intermédiaires ni simple étiquette d'origine. Chaque lot est lié à la famille qui l'a produit, avec son nom et son numéro de lot.",
        inline_link: "Voir le modèle de commerce direct →",
        cta_primary: "Voir les lots traçables",
        cta_secondary: "Notre mission en Afrique",
        reviews_tab: "Avis",
        feature1_title: "100% biologique",
        feature1_text: "Café certifié",
        feature2_title: "Petits producteurs",
        feature2_text: "Commerce direct",
        feature3_title: "Café de spécialité",
        feature3_text: "Tasse de haute qualité",
        feature4_title: "Durable",
        feature4_text: "Agriculture régénérative",
      },
      stats: {
        eyebrow: "Impact vérifié",
        title:
          "À quoi ressemble le commerce direct vers l'Afrique du Sud, le Ghana et le Sénégal",
        families: "300+ familles productrices partenaires",
        farms: "Sous systèmes agroforestiers / café cultivé à l'ombre",
        farms_suffix: "ha",
        foods_suffix: "%",
        foods: "Fermes vérifiées zéro déforestation",
        foods_note: "Vérification en cours",
        organic_suffix: "",
        organic: "Sacs exportés directement en 2025",
      },

      product: {
        eyebrow: "Origine vérifiée · Café de spécialité · Relations directes",
        title: "Produit Exportable",
        text: "Chaque lot que nous exportons — qu'il provienne d'une seule ferme ou d'un assemblage de plus de 200 producteurs — est accompagné d'un rapport indiquant son origine, son procédé de transformation et son profil sensoriel. Il est vendu et exporté directement par les familles productrices, sans intermédiaires commerciaux inutiles.",
        bullet1:
          "Profil sensoriel et notes de dégustation documentés, origine unique ou assemblage de fermes.",
        bullet2:
          "Rapport complet du producteur, même pour les assemblages multi-fermes.",
        bullet3:
          "Exporté directement par les producteurs, sans négociant intermédiaire.",
        downloads_label: "Télécharger la Brochure",
        download_en: "Brochure EN",
        download_fr: "Brochure FR",
      },

      origin: {
        eyebrow: "Origine",
        title:
          "Chaque sac est traçable jusqu'à Inzá, Tierradentro — et pas seulement jusqu'à « Colombie ».",
        text: "À Inzá, Cauca, le café est cultivé dans le territoire indigène légalement reconnu de la Réserve Yaquivá, au milieu des forêts natives et des systèmes agroforestiers. Ce n'est pas une simple affirmation marketing : c'est un territoire réel, que l'on peut localiser sur une carte et où chaque famille productrice est identifiée.",
        bullet1: "300+ familles productrices partenaires, chacune identifiée.",
        bullet2: "Systèmes agroforestiers qui préservent la biodiversité.",
        bullet3:
          "Une tradition transmise de génération en génération, et non un simple contrat d'approvisionnement.",
      },

      program: {
        eyebrow: "Programme d'Origine Certifiée",
        title:
          "Une norme que nous avons créée, pas un label que nous avons acheté",
        text: "Maintenir une certification biologique internationale est souvent trop coûteux pour les petits producteurs. C'est pourquoi nous avons développé l'Indice O&O, qui évalue l'origine, les pratiques durables et la qualité vérifiée de chaque lot afin d'améliorer continuellement chaque exploitation.",
        downloads_label: "Télécharger l'Indice O&O",
        download_en: "Indice O&O EN",
        download_fr: "Indice O&O FR",
        video_note:
          "Les acheteurs qui choisissent O&O soutiennent directement cette amélioration continue. Une plateforme permettant de suivre chaque lot sera bientôt disponible.",
      },

      verification: {
        eyebrow: "Indice d'Origine Certifiée — O&O",
        title:
          "Ce que nous découvrons lors de nos vérifications, ferme par ferme",
        text: "Une méthode d'évaluation exclusive sur 60 points, réalisée directement sur le terrain par notre équipe. Il ne s'agit ni d'une auto-déclaration ni d'une certification tierce. Voici les résultats réels de notre enquête menée dans la Réserve Indigène Yaquivá, Inzá Tierradentro, Cauca.",

        farms_value: "100+",
        farms_label: "Fermes visitées",

        score_value: "41/60",
        score_label: "Score moyen de l'indice O&O",

        sectors_value: "6",
        sectors_label: "Villages / secteurs couverts",

        chart_title: "Résultat par bloc d'évaluation",

        origin: "Origine et territoire",
        origin_score: "15/20",

        sustainability: "Durabilité et pratiques",
        sustainability_score: "13/20",

        quality: "Qualité vérifiable",
        quality_score: "13/20",

        grower_percent: "48%",
        grower_label: "O&O Grower",

        select_percent: "37%",
        select_label: "O&O Select",

        reserve_percent: "15%",
        reserve_label: "O&O Reserve",

        description:
          "68 % des exploitations évaluées conservent une couverture d'ombrage réglementée dans la plage agronomique recommandée (20 à 35 %), protégeant ainsi la forêt andine tout en maintenant la productivité des cultures. Nous ne vous demandons pas de nous croire sur parole : nous vous invitons à le vérifier vous-même lors d'une visite des fermes, d'un appel vidéo avec les producteurs ou d'une analyse détaillée des données ferme par ferme.",

        cta: "Demander le rapport complet",
      },

      directTrade: {
        eyebrow: "Commerce Direct, Vérifié",
        title: "Un intermédiaire de moins entre la ferme et votre torréfaction",

        chain_title: "Chaîne classique du café colombien",
        chain_text:
          "Producteur → Acheteur local → Coopérative / Exportateur → Importateur → Torréfacteur",
        chain_note:
          "4 à 5 marges. L'origine s'arrête généralement à « Colombie ».",

        oo_title: "La chaîne O&O",
        oo_text:
          "Producteur identifié (géolocalisé par GPS) → Centre d'Origine O&O (la même équipe qui exporte) → Votre torréfaction",
        oo_note:
          "Une seule étape. Visibilité complète de la ferme jusqu'à l'exportation.",

        bullet1:
          "Plus de 300 familles productrices identifiées et vérifiées par GPS, lot par lot.",
        bullet2:
          "Centre d'Origine O&O : les producteurs transforment leur café avec notre équipe, sans intermédiaire industriel centralisé.",
        bullet3:
          "Chaque lot est évalué selon notre norme propriétaire de 60 points pour l'Origine Certifiée. Demandez à la consulter.",

        cta: "Découvrez notre méthode de vérification",
      },

      traceability: {
        eyebrow: "Traçabilité",
        badge: "Bientôt disponible",
        title: "De la forêt à la tasse — cinq étapes, toutes documentées",
        text: "Chaque conteneur que nous exportons rassemble le café de dizaines de producteurs d'Inzá, Tierradentro, sans mélanges qui effacent l'origine. Chaque lot est suivi depuis l'arbre jusqu'au document d'exportation.",
        note: "Un outil de consultation des lots est actuellement en développement. Demandez une démonstration à notre équipe pendant la Mission Commerciale.",
      },

      mission: {
        eyebrow: "MISSION COMMERCIALE AFRIQUE DU SUD 2026",
        title: "Mission Commerciale Afrique du Sud 2026",
        text1:
          "Actuellement, la Colombie et l'Afrique du Sud échangent très peu de café de spécialité de manière directe. La majorité des volumes transite par des intermédiaires européens ou nord-américains avant d'atteindre les torréfacteurs africains, ce qui ajoute coût, temps et distance entre la ferme et la tasse.",
        text2:
          "La Orquídea y el Oso rejoint la Mission Commerciale Afrique du Sud 2026 pour ouvrir une voie directe permettant d'explorer et de connecter l'authenticité : un café biologique de spécialité venu d'Inzá, Tierradentro, présenté directement aux acheteurs, distributeurs et torréfacteurs spécialisés en Afrique du Sud et en Afrique de l'Ouest.",
        bullet1:
          "Un pont commercial direct entre les producteurs colombiens et les acheteurs africains, sans intermédiaires inutiles.",
        bullet2:
          "Échantillons, fiches techniques et lots prêts à l'exportation présentés en personne.",
        bullet3:
          "Une relation à long terme avec les torréfacteurs africains, et non un envoi ponctuel.",
        cta: "Parlez à notre équipe",
      },
      report: {
        eyebrow: "Indice d'Origine Certifiée — O&amp;O",
        title: "Demander le rapport complet",
        text: "Laissez-nous vos coordonnées et notre équipe vous enverra les données complètes de l'Origine Certifiée, ferme par ferme : scores, niveaux et méthodologie.",
        name: "Nom complet",
        email: "E-mail",
        country: "Pays",
        country_placeholder: "Commencez à taper...",
        submit: "Envoyer le rapport",
        sending: "Envoi en cours...",
        success:
          "Merci ! Nous vous enverrons le rapport complet par e-mail sous peu.",
        error: "Une erreur s'est produite lors de l'envoi du formulaire.",
      },

      contact: {
        eyebrow: "Contact",
        title: "Parlons de votre prochaine importation",
        text: "Remplissez le formulaire et notre équipe commerciale vous enverra directement des échantillons, des fiches techniques et des conditions commerciales.",
        form: {
          name: "Nom complet",
          error_required: "Veuillez remplir ce champ.",
          email: "Adresse e-mail",
          error_email: "Veuillez saisir une adresse e-mail valide.",
          company: "Entreprise",
          country: "Pays",
          volume: "Volume estimé",
          volume_placeholder: "Ex. 1 conteneur / trimestre",
          message: "Message",
          message_placeholder:
            "Parlez-nous de votre intérêt pour notre café...",
          consent:
            "J'accepte d'être contacté par La Orquídea y el Oso au sujet de cette demande.",
          submit: "Recevoir mes échantillons O&O",
          whatsapp: "Ou écrivez-nous directement sur WhatsApp",
          sending: "Envoi en cours...",
          success: "Merci ! Nous avons bien reçu votre demande.",
        },
      },

      footer: {
        tagline:
          "Un café dont l'origine est vérifiable, du producteur jusqu'à la tasse.",
        links_title: "Liens",
        contact_title: "Contact direct",
        redirect_note:
          "Ce site présente La Orquídea y el Oso dans le cadre de la Mission Commerciale Afrique du Sud 2026.",
        rights: "Tous droits réservés.",
      },
    },
  };

  // Refinamiento automático por país (código ISO -> idioma).
  // Cubre principalmente los mercados objetivo: Sudáfrica y África
  // Occidental francófona, más el origen en Colombia/Latinoamérica.
  // Cualquier país que NO aparezca aquí (incluida Sudáfrica, Ghana, y el
  // resto de mercados angloparlantes) se queda en inglés, que es el
  // idioma por defecto del sitio.
  const countryLangMap = {
    // África Occidental francófona
    SN: "fr",
    CI: "fr",
    ML: "fr",
    BF: "fr",
    TG: "fr",
    BJ: "fr",
    NE: "fr",
    GN: "fr",
    CM: "fr",
    CD: "fr",
    GA: "fr",
    // Francia y otros países francófonos
    FR: "fr",
    BE: "fr",
    CH: "fr",
    // Colombia y Latinoamérica / España
    CO: "es",
    ES: "es",
    MX: "es",
    AR: "es",
    PE: "es",
    EC: "es",
    CL: "es",
  };

  function getPath(obj, path) {
    return path
      .split(".")
      .reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }

  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      /* localStorage no disponible (modo privado, etc.) — se ignora */
    }
  }

  function applyLanguage(lang) {
    if (!dict[lang]) lang = DEFAULT_LANG;
    const d = dict[lang];

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getPath(d, key);
      if (typeof val === "string") el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getPath(d, key);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-lang-option]").forEach((btn) => {
      const active = btn.getAttribute("data-lang-option") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    window.__ooCurrentDict = d;
    document.dispatchEvent(
      new CustomEvent("oo:langchange", { detail: { lang: lang, dict: d } }),
    );

    // Revela el body una vez traducido (ver regla .i18n-pending en el CSS)
    document.documentElement.classList.remove("i18n-pending");
  }

  function setLanguage(lang, manual) {
    applyLanguage(lang);
    writeStorage(STORAGE_KEY, lang);
    if (manual) writeStorage(MANUAL_KEY, "1");
  }

  // --- Geolocalización por IP con proveedor de respaldo -----------------
  // Se intenta primero con ipapi.co; si falla, no responde a tiempo, o
  // devuelve un resultado inválido (bloqueado por adblocker, límite de
  // solicitudes alcanzado, sin conexión, etc.), se reintenta automáticamente
  // con ipwho.is como segundo proveedor. Esto es lo que hace que la
  // identificación automática de idioma por país sea confiable en la
  // práctica y no dependa de un único servicio externo.
  function fetchWithTimeout(url, ms) {
    let controller = null;
    let timeoutId = null;
    try {
      controller = new AbortController();
      timeoutId = setTimeout(() => controller.abort(), ms);
    } catch (e) {
      /* AbortController no disponible en navegadores muy antiguos */
    }
    return fetch(url, { signal: controller ? controller.signal : undefined })
      .then((r) => (r.ok ? r.json() : null))
      .finally(() => {
        if (timeoutId) clearTimeout(timeoutId);
      });
  }

  function getVisitorCountryCode() {
    // Proveedor 1: ipapi.co (formato: { country_code: "CO", ... })
    return fetchWithTimeout("https://ipapi.co/json/", 2500)
      .then((data) => {
        if (data && data.country_code) return data.country_code;
        throw new Error("ipapi.co: sin country_code");
      })
      .catch(() => {
        // Proveedor 2 (respaldo): ipwho.is (formato: { country_code: "CO", success: true, ... })
        return fetchWithTimeout("https://ipwho.is/", 2500)
          .then((data) => {
            if (data && data.success !== false && data.country_code) {
              return data.country_code;
            }
            return null;
          })
          .catch(() => null);
      });
  }

  function tryGeoRefinement(manual) {
    if (manual) return;
    if (!("fetch" in window)) return;

    getVisitorCountryCode().then((countryCode) => {
      if (!countryCode) return;
      // Si el usuario eligió un idioma manualmente mientras esperábamos
      // la respuesta, no lo sobreescribimos.
      if (readStorage(MANUAL_KEY) === "1") return;

      const geoLang = countryLangMap[countryCode] || DEFAULT_LANG;
      applyLanguage(geoLang);
      writeStorage(STORAGE_KEY, geoLang);
    });
  }

  function init() {
    const saved = readStorage(STORAGE_KEY);
    const manual = readStorage(MANUAL_KEY) === "1";

    // El idioma inicial SIEMPRE es inglés salvo que el visitante ya haya
    // elegido (o se le haya detectado) otro idioma en una visita anterior.
    // Ya no se adivina a partir del idioma del navegador: no es un
    // indicador confiable del país real del visitante.
    const initialLang = saved || DEFAULT_LANG;
    applyLanguage(initialLang);

    tryGeoRefinement(manual);

    document.querySelectorAll("[data-lang-option]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLanguage(btn.getAttribute("data-lang-option"), true);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
