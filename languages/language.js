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
        badge: "Africa Trade Mission 2026",
        eyebrow: "Specialty coffee — Africa trade mission 2026",
        title: "A cup you'll remember. A one-of-a-kind, verifiable origin.",
        subtitle:
          "Colombia is synonymous with great coffee. Specialty demands more: terroir, verified, grown on small farms that carry their care and culture into the highest standards. We grow, process and export it ourselves from an origin like nowhere else on earth: Inzá, Tierradentro.",
        inline_link: "See the Direct-Trade Model →",
        cta_primary: "See available coffee",
        cta_secondary: "Africa trade mision",
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
        title: "What Direct Trade to Africa, Ghana and Senegal Looks Like",
        families: "Partner farming families",
        farms_suffix: "ha",
        farms: "Under agroforestry / shade-grown coffee",
        foods_suffix: "%",
        foods: "Farms verified zero-deforestation",
        foods_note: "Verification ongoing",
        organic_suffix: "",
        organic: "BAGS EXPORTED DIRECTLY IN 2025",
      },
      product: {
        eyebrow: "Verified Origin, Specialty Cup, Direct Relations",
        title: "Authentic Coffee, Cup After Cup",
        text: "Complex, sweet, balanced, consistent. Every lot passes through at least three quality filters and gets documented step by step: harvest, profile, score, farm and grower. Specialty takes care — it matters to our growers and to our buyers — and that's why our controls only got stricter over time. A lot carries our name only once it's earned it.",
        bullet1: "High quality standards",
        bullet2: "Lot-by-lot traceability",
        bullet3: "Full producer report included — even on multi-farm blends. ",
        bullet4: "An active path toward sustainability in origin, together",
        downloads_label: "Get the Brochure",
        download_en: "Brochure EN",
        download_fr: "Brochure FR",
        sell_sheet: "View sell sheet",
      },
      origin: {
        eyebrow: "ORIGIN",
        title: "Authentic Terroir",
        text: 'Our coffee grows in Tierradentro, Cauca, inside the Yaquivá Indigenous Reserve, above 1,400 metres — home to the archaeological park UNESCO named <span style="color: var(--color-gold); font-weight: 700;">a World Heritage Site</span> in 1995. One container can carry the work of 300 families. 300 individual efforts we refuse to leave invisible.',
        bullet1: "GPS-verified producer families",
        bullet2:
          "Agroforestry systems protecting biodiversity, páramo and water sources",
        bullet3:
          "A tradition passed down between generations, not just a supply contract",
        bullet4:
          "O&O Origin Hub: growers process alongside our own team — no industrial middleman",
        bullet5:
          "Every lot scored under our 65-point Certified Origin standard",
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

        text: "Verified results from our ongoing field survey in the Yaquivá Reserve — collected on-site by our own team, never self-reported.",

        farms_value: "100+",
        farms_label: "Farms visited",

        score_value: "41/65",
        score_label: "O&O Index /65",

        sectors_value: "6",
        sectors_label: "VILLAGES COVERED IN INZA",

        chart_title: "FARMS IN THE O&O NETWORK",

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

        highlight_percent: "68%",

        description:
          "of evaluated farms maintain regulated shade cover within the recommended agronomic range (20–35%), helping protect the high-Andean forest while sustaining coffee productivity.",

        cta: "Visit the origin, explore the farm-by-farm data, and verify every result yourself.",

        button: "Get the full report",
      },

      directTrade: {
        eyebrow: "DIRECT TRADE, VERIFIED",
        title: "Four margins disappear. The origin — the Terroir — appears.",

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

        stage1title: "Growers",
        stage1text:
          "Real families, each one named — scored and tracked through the O&O Index from the very first visit.",

        stage2_title: "Harvest & Processing",
        stage2_text:
          "Ripe cherries hand-picked, one by one, by lot, variety and microclimate — then processed with care at the producer's own farm, or alongside our team at the O&O Origin Hub.",

        stage3_title: "Laboratory",
        stage3_text:
          "Cupping controls and builds every lot — the same process that improves the farm behind it, harvest after harvest.",

        stage4_title: "Preparation",
        stage4_text:
          "Milled, sorted and double-packed with a coded report per lot — ready to travel, ready to trace.",

        stage5_title: "Export",
        stage5_text:
          "Documented, lot-traceable shipment — ready for buyers in Africa and West Africa.",

        note: "The lot-lookup tool is currently in development. Ask for a demo during the trade mission.",
        quote:
          "Specialty coffee is only truly special if it protects its origin.",
      },

      mission: {
        eyebrow: "AFRICA TRADE MISSION 2026",
        title: "Africa Trade Mission 2026",
        text1:
          "Colombia and Africa currently trade very little specialty coffee directly. Most volumes travel through intermediaries before reaching African roasters — adding cost, time and distance between the farm and the cup.",
        text2:
          "La Orquídea y el Oso is joining the Africa Trade Mission 2026 to open a direct route to explore and connect authenticity: specialty, organic coffee from Inzá, Tierradentro, presented directly to specialty buyers, distributors and roasters in Africa and West Africa.",
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
        title: "Ask for the sample. That's where this starts",
        text: "Fill in the form and our commercial team will send you samples, technical sheets and commercial terms — directly, no middlemen.",
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
          "This site is the landing page for the Africa Trade Mission 2026 by fincaslaorquideayeloso.com",
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
        badge: "Misión Comercial África 2026",
        eyebrow: "Café de especialidad — Misión Comercial África 2026",
        title: "Una taza que recordarás. Un origen único y verificable.",
        subtitle:
          "Colombia es sinónimo de un gran café. El café de especialidad exige más: un terroir único, trazabilidad verificada y café cultivado en pequeñas fincas que reflejan el cuidado y la cultura de quienes lo producen, cumpliendo con los más altos estándares de calidad. Nosotros mismos lo cultivamos, procesamos y exportamos desde un origen como ningún otro en el mundo: Inzá, Tierradentro.",
        inline_link: "Ver el modelo de comercio directo →",
        cta_primary: "Ver cafés disponibles",
        cta_secondary: "Misión Comercial África",
        reviews_tab: "Reseñas",
        feature1_title: "100 % Orgánico",
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
        title: "Café auténtico, taza tras taza",
        text: "Complejo, dulce, equilibrado y consistente. Cada lote pasa por al menos tres filtros de calidad y queda documentado paso a paso: cosecha, perfil, puntuación, finca y productor. El café de especialidad exige cuidado; es importante tanto para nuestros productores como para nuestros compradores. Por eso, nuestros controles se han vuelto cada vez más rigurosos. Un lote solo lleva nuestro nombre cuando realmente se lo ha ganado.",
        bullet1: "Altos estándares de calidad",
        bullet2: "Trazabilidad lote por lote",
        bullet3:
          "Informe completo del productor, incluso para mezclas de múltiples fincas.",
        bullet4:
          "Un compromiso activo con la sostenibilidad en origen, construido juntos.",
        downloads_label: "Descargar brochure",
        download_en: "Brochure EN",
        download_fr: "Brochure FR",
        sell_sheet: "Ver ficha comercial",
      },
      origin: {
        eyebrow: "ORIGEN",
        title: "Territorio Autentico",
        text: 'Nuestro café crece en Tierradentro, Cauca, dentro del Resguardo Indígena de Yaquivá, por encima de los 1.400 metros — sede del parque arqueológico que la UNESCO declaró <span style="color: var(--color-gold); font-weight: 700;">Patrimonio de la Humanidad</span> en 1995. Un contenedor puede llevar el esfuerzo de 300 familias. 300 esfuerzos que nos negamos a dejar invisibles.',
        bullet1: "familias productoras, identificadas y georreferenciadas",
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
        // Español
        dimensions_title: "Tres dimensiones, evaluadas en campo:",
        download_en: "Índice O&O (Inglés)",
        download_fr: "Índice O&O (Francés)",
        video_note:
          "Los compradores que eligen O&O respaldan ese progreso. Próximamente estará disponible una plataforma para seguir cada lote.",
      },
      verification: {
        eyebrow: "ÍNDICE DE ORIGEN CERTIFICADO — O&O",

        title: "Esto fue lo que encontramos.",

        text: "Resultados verificados de nuestro estudio de campo en curso en la Reserva Yaquivá, recopilados directamente por nuestro equipo y nunca autodeclarados.",

        farms_value: "100+",
        farms_label: "Fincas visitadas",

        score_value: "41/65",
        score_label: "Índice O&O /65",

        sectors_value: "6",
        sectors_label: "Sectores evaluados",

        chart_title: "Puntaje por bloque",

        origin: "Origen",
        origin_score: "15/20",

        sustainability: "Sostenibilidad",
        sustainability_score: "13/20",

        quality: "Calidad",
        quality_score: "13/20",

        grower_percent: "48%",
        grower_label: "Grower",

        select_percent: "37%",
        select_label: "Select",

        reserve_percent: "15%",
        reserve_label: "Reserve",

        highlight_percent: "68%",

        description:
          "de las fincas evaluadas mantienen una cobertura de sombra regulada dentro del rango agronómico recomendado (20–35%), contribuyendo a proteger el bosque altoandino sin comprometer la productividad del café.",

        cta: "Visita el origen, explora los datos finca por finca y verifica cada resultado por ti mismo.",

        button: "Obtener el informe completo",
      },

      directTrade: {
        eyebrow: "COMERCIO DIRECTO, VERIFICADO",
        title:
          "Cuatro márgenes desaparecen. El origen — el terruño — se revela.",
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
        title: "Cinco etapas. Todas documentadas.",
        text: "Cada contenedor que exportamos lleva café de decenas de productores de Inzá, Tierradentro. Nada se mezcla para ocultar su origen, nada borra quién cultivó cada lote. Así es como un lote viaja desde el árbol hasta sus manos:",

        stage1title: "Productores",
        stage1text:
          "Familias reales, cada una identificada por su nombre, evaluadas y monitoreadas mediante el Índice O&O desde la primera visita.",

        stage2_title: "Cosecha y procesamiento",
        stage2_text:
          "Cerezas maduras recolectadas a mano, una por una, por lote, variedad y microclima; luego procesadas cuidadosamente en la finca del productor o junto a nuestro equipo en el Centro de Origen O&O.",

        stage3_title: "Laboratorio",
        stage3_text:
          "El análisis sensorial y el control de calidad construyen cada lote, mejorando la finca que lo produce cosecha tras cosecha.",

        stage4_title: "Preparación",
        stage4_text:
          "Trillado, clasificación y doble empaque con un informe codificado por lote, listo para viajar y ser trazado.",

        stage5_title: "Exportación",
        stage5_text:
          "Envío documentado y con trazabilidad por lote, listo para compradores en África y África Occidental.",

        note: "La herramienta de consulta por lote se encuentra actualmente en desarrollo. Solicite una demostración durante la misión comercial.",
        quote:
          "El café de especialidad solo es verdaderamente especial si protege su origen.",
      },

      mission: {
        eyebrow: "MISIÓN COMERCIAL ÁFRICA 2026",
        title: "Misión Comercial África 2026",
        text1:
          "Actualmente, Colombia y África comercian muy poco café de especialidad de forma directa. La mayor parte del volumen pasa por intermediarios antes de llegar a los tostadores africanos, lo que incrementa los costos, prolonga los tiempos y amplía la distancia entre la finca y la taza.",
        text2:
          "La Orquídea y el Oso se une a la Misión Comercial África 2026 para abrir una ruta directa que explore y conecte la autenticidad: café orgánico de especialidad de Inzá, Tierradentro, presentado directamente a compradores, distribuidores y tostadores de especialidad en Sudáfrica y África Occidental.",
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
        title: "Solicita la muestra. Aquí es donde todo comienza.",
        text: "Completa el formulario y nuestro equipo comercial te enviará muestras, fichas técnicas y condiciones comerciales, directamente y sin intermediarios.",
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
        badge: "Mission commerciale Afrique 2026",
        eyebrow: "Café de spécialité — Mission commerciale Afrique 2026",
        title:
          "Une tasse dont vous vous souviendrez. Une origine unique et vérifiable.",
        subtitle:
          "La Colombie est synonyme d'un excellent café. Le café de spécialité exige davantage : un terroir unique, une traçabilité vérifiée et un café cultivé dans de petites exploitations où le savoir-faire et la culture de leurs producteurs répondent aux plus hauts standards de qualité. Nous le cultivons, le transformons et l'exportons nous-mêmes depuis une origine unique au monde : Inzá, Tierradentro.",
        inline_link: "Voir le modèle de commerce direct →",
        cta_primary: "Voir les cafés disponibles",
        cta_secondary: "Mission commerciale Afrique",
        reviews_tab: "Avis",
        feature1_title: "100 % biologique",
        feature1_text: "Café certifié",
        feature2_title: "Petits producteurs",
        feature2_text: "Commerce direct",
        feature3_title: "Café de spécialité",
        feature3_text: "Tasse de haute qualité",
        feature4_title: "Durable",
        feature4_text: "Agriculture régénératrice",
      },
      stats: {
        eyebrow: "Impact vérifié",
        title:
          "À quoi ressemble le commerce direct vers l'Afrique du Sud, le Ghana et le Sénégal",
        families: "Plus de 300 familles de producteurs partenaires",
        farms: "Sous systèmes agroforestiers / café cultivé à l'ombre",
        farms_suffix: "ha",
        foods_suffix: "%",
        foods: "Exploitations agricoles vérifiées sans déforestation",
        foods_note: "Vérification en cours",
        organic_suffix: "",
        organic: "Sacs exportés directement en 2025",
      },

      product: {
        eyebrow: "Origine vérifiée · Café de spécialité · Relations directes",
        title: "Produit exportable",
        text: "Chaque lot que nous exportons — qu'il provienne d'une seule ferme ou d'un assemblage de plus de 200 producteurs — est accompagné d'un rapport indiquant son origine, son procédé de transformation et son profil sensoriel. Il est vendu et exporté directement par les familles productrices, sans intermédiaires commerciaux inutiles.",
        bullet1:
          "Profil sensoriel et notes de dégustation documentés, origine unique ou assemblage de fermes.",
        bullet2:
          "Rapport complet du producteur, même pour les assemblages multi-fermes.",
        bullet3:
          "Exporté directement par les producteurs, sans négociant intermédiaire.",
        bullet4:
          "Chaque lot est accompagné d'un rapport complet sur le producteur.",
        bullet5:
          "Un engagement concret en faveur de la durabilité à l'origine, ensemble.",
        downloads_label: "Télécharger la brochure",
        download_en: "Brochure EN",
        download_fr: "Brochure FR",
      },

      origin: {
        eyebrow: "Origine",
        title:
          "Chaque sac est traçable jusqu'à Inzá, Tierradentro — et pas seulement jusqu'à « Colombie ».",
        text: 'À Inzá, Cauca, le café est cultivé dans le territoire indigène légalement reconnu de la Réserve Yaquivá, à plus de 1 400 mètres d’altitude, où se trouve le parc archéologique que l’UNESCO a inscrit au <span style="color: var(--color-gold); font-weight: 700;">Patrimoine mondial</span> en 1995. Un conteneur peut transporter le travail de 300 familles. Trois cents efforts individuels que nous refusons de laisser dans l’ombre.',
        bullet1: "familles productrices partenaires, chacune identifiée.",
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
        // Français
        dimensions_title: "Trois dimensions, évaluées sur le terrain :",
        download_en: "Indice O&O EN",
        download_fr: "Indice O&O FR",
        video_note:
          "Les acheteurs qui choisissent O&O soutiennent directement cette amélioration continue. Une plateforme permettant de suivre chaque lot sera bientôt disponible.",
      },

      verification: {
        eyebrow: "INDICE D'ORIGINE CERTIFIÉE — O&O",

        title: "Voici ce que nous avons constaté.",

        text: "Résultats vérifiés de notre étude de terrain en cours dans la réserve de Yaquivá, recueillis directement par notre équipe et jamais autodéclarés.",

        farms_value: "100+",
        farms_label: "Exploitations visitées",

        score_value: "41/65",
        score_label: "Indice O&O /65",

        sectors_value: "6",
        sectors_label: "Secteurs évalués",

        chart_title: "Score par bloc",

        origin: "Origine",
        origin_score: "15/20",

        sustainability: "Durabilité",
        sustainability_score: "13/20",

        quality: "Qualité",
        quality_score: "13/20",

        grower_percent: "48%",
        grower_label: "Grower",

        select_percent: "37%",
        select_label: "Select",

        reserve_percent: "15%",
        reserve_label: "Reserve",

        highlight_percent: "68 %",

        description:
          "des exploitations évaluées maintiennent une couverture d’ombrage réglementée dans la plage agronomique recommandée (20–35 %), contribuant à protéger la forêt andine de haute altitude tout en préservant la productivité du café.",

        cta: "Visitez l’origine, explorez les données exploitation par exploitation et vérifiez chaque résultat par vous-même.",

        button: "Obtenir le rapport complet",
      },

      shade: {
        highlight: {
          percent: "68 %",
          description:
            "68 % des exploitations évaluées maintiennent une couverture d’ombrage réglementée dans la plage agronomique recommandée (20–35 %) : protégeant la forêt andine de haute altitude sans compromettre le rendement.",
        },
      },

      directTrade: {
        eyebrow: "Commerce Direct, Vérifié",
        title:
          "Quatre frontières disparaissent. L'origine — le terrua — apparaît.",

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
        eyebrow: "TRAÇABILITÉ",
        badge: "Bientôt disponible",
        title: "Cinq étapes. Toutes documentées.",
        text: "Chaque conteneur que nous exportons contient le café de dizaines de producteurs d'Inzá, Tierradentro. Rien n'est mélangé pour masquer son origine, rien n'efface l'identité de ceux qui ont cultivé chaque lot. Voici le parcours d'un lot, de l'arbre jusqu'à vos mains :",

        stage1title: "Producteurs",
        stage1text:
          "De vraies familles, chacune identifiée par son nom, évaluée et suivie grâce à l'Indice O&O dès la toute première visite.",

        stage2_title: "Récolte et transformation",
        stage2_text:
          "Des cerises mûres cueillies à la main, une par une, selon le lot, la variété et le microclimat, puis transformées avec soin dans l'exploitation du producteur ou avec notre équipe au Centre d'Origine O&O.",

        stage3_title: "Laboratoire",
        stage3_text:
          "Les contrôles de dégustation et de qualité façonnent chaque lot tout en améliorant l'exploitation qui le produit, récolte après récolte.",

        stage4_title: "Préparation",
        stage4_text:
          "Décorticage, tri et double emballage avec un rapport codifié pour chaque lot, prêt à voyager et à être tracé.",

        stage5_title: "Exportation",
        stage5_text:
          "Expédition documentée avec traçabilité par lot, prête pour les acheteurs en Afrique et en Afrique de l'Ouest.",

        note: "L'outil de consultation des lots est actuellement en cours de développement. Demandez une démonstration pendant la mission commerciale.",
        quote:
          "Le café de spécialité n'est véritablement spécial que s'il protège son origine.",
      },

      mission: {
        eyebrow: "MISSION COMMERCIALE AFRIQUE 2026",
        title: "Mission Commerciale Afrique 2026",
        text1:
          "Aujourd'hui, la Colombie et l'Afrique échangent très peu de café de spécialité en direct. La majeure partie des volumes passe par des intermédiaires avant d'arriver chez les torréfacteurs africains, ce qui augmente les coûts, les délais et la distance entre la ferme et la tasse.",
        text2:
          "La Orquídea y el Oso rejoint la Mission Commerciale Afrique 2026 pour ouvrir une voie directe permettant d'explorer et de connecter l'authenticité : un café biologique de spécialité venu d'Inzá, Tierradentro, présenté directement aux acheteurs, distributeurs et torréfacteurs spécialisés en Afrique du Sud et en Afrique de l'Ouest.",
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
        title: "Demandez un échantillon. C'est ici que tout commence.",
        text: "Remplissez le formulaire et notre équipe commerciale vous enverra des échantillons, des fiches techniques et les conditions commerciales — directement, sans intermédiaires.",
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
