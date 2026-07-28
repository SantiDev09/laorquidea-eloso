/**
 * language.js
 * Motor de internacionalización (i18n) para La Orquídea y el Oso — Landing Fase 1.
 *
 /*
 * La Orquídea y el Oso — i18n
 * ---------------------------------------------------------------
 * Orden de idiomas: English (por defecto) -> Español -> Français.
 * Detección automática:
 *   1) Preferencia guardada por el usuario (localStorage), si eligió manualmente.
 *   2) Idioma del navegador (navigator.languages).
 *   3) Refinamiento opcional por país (best-effort, no bloqueante) usando
 *      un servicio gratuito de geolocalización por IP. Si falla, se
 *      calla en silencio y se queda con el idioma del navegador.
 * ---------------------------------------------------------------
 */
(function () {
  "use strict";

  const STORAGE_KEY = "oo_lang";
  const MANUAL_KEY = "oo_lang_manual";

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
        eyebrow: "Specialty &amp; Organic",
        title: "Specialty Colombian Coffee for the African Market",
        subtitle:
          "From the mountains of Inzá, Tierradentro, we grow specialty and organic coffee alongside farming families who protect the forest and preserve a unique coffee-growing tradition. We present our exportable offer during the South Africa Trade Mission 2026, connecting our origin with buyers, distributors and roasters in South Africa and West Africa.",
        cta_primary: "View Exportable Coffee",
        cta_secondary: "Our Story",
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
        families: "Partner families",
        farms_suffix: "ha",
        farms: "Forest-protecting farms",
        foods: "Diverse crops that break the monoculture",
        organic_suffix: "ha",
        organic: "Certified organic production",
      },
      product: {
        eyebrow: "Exportable Product",
        title: "Specialty green coffee, traceable and export-ready",
        text: "Our coffee is shade-grown in mountain microclimates, with careful post-harvest processes that bring out unique cup profiles.",
        bullet1: "Cup profiles documented by lot",
        bullet2: "Harvest availability and volumes",
        bullet3: "Organic certification and regenerative practices",
        downloads_label: "Download commercial brochure",
        download_en: "Brochure (English)",
        download_fr: "Brochure (French)",
      },
      origin: {
        eyebrow: "Origin",
        title: "Tierradentro: forest, culture and coffee in balance",
        text: "In Inzá, Cauca, coffee grows alongside native forests, agroforestry systems and a farming tradition passed down between generations.",
        bullet1: "Partner farming families from Inzá, Tierradentro",
        bullet2: "Agroforestry systems that conserve biodiversity",
        bullet3: "Coffee tradition with a regenerative approach",
      },
      program: {
        eyebrow: "Certified Origin Program",
        title: "O&amp;O Certified Origin Program",
        text: "The O&amp;O Index certifies the origin, traceability and socio-environmental impact of every lot.",
        downloads_label: "Download the O&amp;O Index",
        download_en: "O&amp;O Index (English)",
        download_fr: "O&amp;O Index (French)",
        video_note: "Video presentation coming soon.",
      },
      traceability: {
        badge: "Coming soon",
        title: "From forest to your cup: traceability in progress",
        text: "We are building a traceability module that will let you look up the exact origin of every coffee lot.",
        note: "Reserved space for the lot-level traceability module.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's talk about your next import",
        text: "Fill out the form and our sales team will reach out to share samples, technical sheets and commercial terms.",
        form: {
          name: "Full name",
          error_required: "Please complete this field.",
          email: "Email address",
          error_email: "Please enter a valid email.",
          company: "Company",
          country: "Country",
          volume: "Estimated volume of interest",
          volume_placeholder: "E.g. 1 container / quarter",
          message: "Message",
          message_placeholder: "Tell us about your interest in our coffee...",
          consent:
            "I agree to be contacted by La Orquídea y el Oso about this message.",
          submit: "Send message",
          whatsapp: "Contact via WhatsApp",
          sending: "Sending...",
          success: "Thank you! La Orquídea y el Oso has received your message.",
        },
      },
      footer: {
        tagline: "Coffee that regenerates the forest and honors its origin.",
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
        eyebrow: "Especial &amp; Orgánico",
        title: "Café Especial Colombiano para el Mercado Africano",
        subtitle:
          "Desde las montañas de Inzá, Tierradentro, cultivamos café especial y orgánico junto a familias campesinas que protegen el bosque y preservan una tradición cafetera única. Presentamos nuestra oferta exportable durante la Misión Comercial Sudáfrica 2026, conectando nuestro origen con compradores, distribuidores y tostadores de Sudáfrica y África Occidental.",
        cta_primary: "Ver Café Exportable",
        cta_secondary: "Nuestra historia",
        reviews_tab: "Reseñas",
        feature1_title: "100% Orgánico",
        feature1_text: "Café certificado",
        feature2_title: "Pequeños productores",
        feature2_text: "Comercio directo",
        feature3_title: "Café especial",
        feature3_text: "Taza de alta calidad",
        feature4_title: "Sostenible",
        feature4_text: "Agricultura regenerativa",
      },
      stats: {
        families: "Familias asociadas",
        farms_suffix: "has",
        farms: "Fincas protectoras del bosque",
        foods: "Alimentos diversos que rompen el monocultivo",
        organic_suffix: "has",
        organic: "Producción orgánica certificada",
      },
      product: {
        eyebrow: "Producto exportable",
        title: "Café verde especial, trazable y listo para exportar",
        text: "Nuestro café es cultivado a la sombra en microclimas de montaña, con procesos post-cosecha cuidadosos que resaltan perfiles de taza únicos.",
        bullet1: "Perfiles de taza documentados por lote",
        bullet2: "Disponibilidad y volúmenes de cosecha",
        bullet3: "Certificación orgánica y prácticas regenerativas",
        downloads_label: "Descargar brochure comercial",
        download_en: "Brochure (Inglés)",
        download_fr: "Brochure (Francés)",
      },
      origin: {
        eyebrow: "Origen",
        title: "Tierradentro: bosque, cultura y café en equilibrio",
        text: "En Inzá, Cauca, el café convive con bosques nativos, sistemas agroforestales y una tradición campesina transmitida entre generaciones.",
        bullet1: "Familias campesinas asociadas de Inzá, Tierradentro",
        bullet2: "Sistemas agroforestales que conservan biodiversidad",
        bullet3: "Tradición cafetera con enfoque regenerativo",
      },
      program: {
        eyebrow: "Certified Origin Program",
        title: "Programa de Origen Certificado O&amp;O",
        text: "El Índice O&amp;O certifica el origen, la trazabilidad y el impacto socioambiental de cada lote.",
        downloads_label: "Descargar Índice O&amp;O",
        download_en: "Índice O&amp;O (Inglés)",
        download_fr: "Índice O&amp;O (Francés)",
        video_note: "Presentación en video disponible próximamente.",
      },
      traceability: {
        badge: "Próximamente",
        title: "Del bosque a su taza: trazabilidad en construcción",
        text: "Estamos preparando un módulo de trazabilidad que permitirá consultar el origen exacto de cada lote de café.",
        note: "Espacio reservado para el módulo de trazabilidad por lote.",
      },
      contact: {
        eyebrow: "Contacto",
        title: "Conversemos sobre su próxima importación",
        text: "Complete el formulario y nuestro equipo comercial se pondrá en contacto para compartir muestras, fichas técnicas y condiciones comerciales.",
        form: {
          name: "Nombre completo",
          error_required: "Por favor complete este campo.",
          email: "Correo electrónico",
          error_email: "Por favor ingrese un correo válido.",
          company: "Empresa",
          country: "País",
          volume: "Volumen estimado de interés",
          volume_placeholder: "Ej. 1 contenedor / trimestre",
          message: "Mensaje",
          message_placeholder: "Cuéntenos sobre su interés en nuestro café...",
          consent:
            "Acepto ser contactado por La Orquídea y el Oso sobre este mensaje.",
          submit: "Enviar mensaje",
          whatsapp: "Contactar por WhatsApp",
          sending: "Enviando...",
          success:
            "¡Gracias! Desde La Orquídea y el Oso hemos recibido su mensaje.",
        },
      },
      footer: {
        tagline: "Café que regenera el bosque y valora el origen.",
        links_title: "Enlaces",
        contact_title: "Contacto directo",
        redirect_note:
          "Este sitio es la landing de la Misión Comercial Sudáfrica 2026 de fincaslaorquideayeloso.com",
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
        badge: "Mission Commerciale Afrique du Sud 2026",
        eyebrow: "Spécial &amp; Biologique",
        title: "Café Colombien de Spécialité pour le Marché Africain",
        subtitle:
          "Depuis les montagnes d'Inzá, Tierradentro, nous cultivons un café spécial et biologique aux côtés de familles paysannes qui protègent la forêt et perpétuent une tradition caféière unique. Nous présentons notre offre exportable lors de la Mission Commerciale Afrique du Sud 2026, reliant notre origine aux acheteurs, distributeurs et torréfacteurs d'Afrique du Sud et d'Afrique de l'Ouest.",
        cta_primary: "Voir le Café Exportable",
        cta_secondary: "Notre histoire",
        reviews_tab: "Avis",
        feature1_title: "100% Biologique",
        feature1_text: "Café certifié",
        feature2_title: "Petits producteurs",
        feature2_text: "Commerce direct",
        feature3_title: "Café de spécialité",
        feature3_text: "Tasse de haute qualité",
        feature4_title: "Durable",
        feature4_text: "Agriculture régénérative",
      },
      stats: {
        families: "Familles associées",
        farms_suffix: "ha",
        farms: "Fermes protectrices de la forêt",
        foods: "Aliments divers qui rompent la monoculture",
        organic_suffix: "ha",
        organic: "Production biologique certifiée",
      },
      product: {
        eyebrow: "Produit exportable",
        title: "Café vert de spécialité, traçable et prêt à l'exportation",
        text: "Notre café est cultivé à l'ombre dans des microclimats de montagne, avec des procédés post-récolte soignés qui font ressortir des profils de tasse uniques.",
        bullet1: "Profils de tasse documentés par lot",
        bullet2: "Disponibilité et volumes de récolte",
        bullet3: "Certification biologique et pratiques régénératives",
        downloads_label: "Télécharger la brochure commerciale",
        download_en: "Brochure (Anglais)",
        download_fr: "Brochure (Français)",
      },
      origin: {
        eyebrow: "Origine",
        title: "Tierradentro : forêt, culture et café en équilibre",
        text: "À Inzá, Cauca, le café cohabite avec des forêts natives, des systèmes agroforestiers et une tradition paysanne transmise de génération en génération.",
        bullet1: "Familles paysannes associées d'Inzá, Tierradentro",
        bullet2: "Systèmes agroforestiers qui préservent la biodiversité",
        bullet3: "Tradition caféière à approche régénérative",
      },
      program: {
        eyebrow: "Certified Origin Program",
        title: "Programme d'Origine Certifiée O&amp;O",
        text: "L'Indice O&amp;O certifie l'origine, la traçabilité et l'impact socio-environnemental de chaque lot.",
        downloads_label: "Télécharger l'Indice O&amp;O",
        download_en: "Indice O&amp;O (Anglais)",
        download_fr: "Indice O&amp;O (Français)",
        video_note: "Présentation vidéo disponible prochainement.",
      },
      traceability: {
        badge: "Bientôt disponible",
        title: "De la forêt à votre tasse : traçabilité en construction",
        text: "Nous préparons un module de traçabilité qui permettra de consulter l'origine exacte de chaque lot de café.",
        note: "Espace réservé au module de traçabilité par lot.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Parlons de votre prochaine importation",
        text: "Remplissez le formulaire et notre équipe commerciale vous contactera pour partager échantillons, fiches techniques et conditions commerciales.",
        form: {
          name: "Nom complet",
          error_required: "Veuillez remplir ce champ.",
          email: "Adresse e-mail",
          error_email: "Veuillez saisir un e-mail valide.",
          company: "Entreprise",
          country: "Pays",
          volume: "Volume estimé d'intérêt",
          volume_placeholder: "Ex. 1 conteneur / trimestre",
          message: "Message",
          message_placeholder:
            "Parlez-nous de votre intérêt pour notre café...",
          consent:
            "J'accepte d'être contacté(e) par La Orquídea y el Oso au sujet de ce message.",
          submit: "Envoyer le message",
          whatsapp: "Contacter via WhatsApp",
          sending: "Envoi en cours...",
          success: "Merci ! La Orquídea y el Oso a bien reçu votre message.",
        },
      },
      footer: {
        tagline: "Un café qui régénère la forêt et valorise l'origine.",
        links_title: "Liens",
        contact_title: "Contact direct",
        redirect_note:
          "Ce site est la page d'atterrissage de la Mission Commerciale Afrique du Sud 2026 de fincaslaorquideayeloso.com",
        rights: "Tous droits réservés.",
      },
    },
  };

  // Refinamiento opcional por país (código ISO -> idioma).
  // Cubre principalmente los mercados objetivo: Sudáfrica y África
  // Occidental francófona, más el origen en Colombia/Latinoamérica.
  const countryLangMap = {
    // Sudáfrica y África angloparlante
    ZA: "en",
    NA: "en",
    BW: "en",
    ZW: "en",
    ZM: "en",
    GH: "en",
    NG: "en",
    KE: "en",
    UG: "en",
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

  function browserGuess() {
    const langs =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || "en"];
    for (const l of langs) {
      const code = (l || "").slice(0, 2).toLowerCase();
      if (dict[code]) return code;
    }
    return "en";
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
    if (!dict[lang]) lang = "en";
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

  function tryGeoRefinement(initialLang, manual) {
    if (manual) return;
    if (!("fetch" in window)) return;

    let controller = null;
    let timeoutId = null;
    try {
      controller = new AbortController();
      timeoutId = setTimeout(() => controller.abort(), 2500);
    } catch (e) {
      /* AbortController no disponible en navegadores muy antiguos */
    }

    fetch("https://ipapi.co/json/", {
      signal: controller ? controller.signal : undefined,
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (timeoutId) clearTimeout(timeoutId);
        if (!data || !data.country_code) return;
        // Si el usuario eligió un idioma manualmente mientras esperábamos
        // la respuesta, no lo sobreescribimos.
        if (readStorage(MANUAL_KEY) === "1") return;

        const geoLang = countryLangMap[data.country_code];
        if (geoLang && geoLang !== initialLang) {
          applyLanguage(geoLang);
          writeStorage(STORAGE_KEY, geoLang);
        }
      })
      .catch(() => {
        // Sin conexión, bloqueado por el navegador/adblocker, o límite de
        // solicitudes alcanzado: se ignora en silencio y se conserva el
        // idioma detectado por el navegador.
      });
  }

  function init() {
    const saved = readStorage(STORAGE_KEY);
    const manual = readStorage(MANUAL_KEY) === "1";

    const initialLang = saved || browserGuess();
    applyLanguage(initialLang);

    tryGeoRefinement(initialLang, manual);

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
