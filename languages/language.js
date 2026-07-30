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
        eyebrow: "Specialty Coffee — South Africa Ghana and Senegal Trade Mission 2026",
        title: "Coffee You Can Trace to the Farmer. Not Just the Country.",
        subtitle:
          'We grow, process and export specialty coffee directly from Inzá, Tierradentro — no reseller, no unverified "Colombian" label. Every lot is tied to the family that grew it, by name and lot. We\'re bringing that directly to South Africa and West Africa.',
        cta_primary: "See the Traceable Lots",
        cta_secondary: "Why We're Skipping the Middlemen",
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
        families: "Partner farming families",
        farms_suffix: "ha",
        farms: "Under agroforestry / shade-grown coffee",
        foods: "Diverse crops that break the monoculture",
        organic_suffix: "ha",
        organic: "Certified organic production",
      },
      product: {
        eyebrow: "Verified Origin, Specialty Cup, Direct Relations",
        title: "Exportable Product",
        text: "Every lot we export — single farm or 200-farm blend — ships with the report behind it: where it grew, how it was processed, and the cup profile behind the score. Sold and shipped directly by the families who grow it. No creative traders in between.",
        bullet1:
          "Cup profile and cupping notes documented, single origin or farms blend.",
        bullet2: "Full producer report included — even on multi-farm blends.",
        bullet3: "Exported directly by the growers, not through a trader.",
        downloads_label: "Get the Brochure",
        download_en: "Brochure EN",
        download_fr: "Brochure FR",
      },
      origin: {
        eyebrow: "Origin",
        title: 'Every Bag Traces to Inzá, Tierradentro — Not Just "Colombia"',
        text: "In Inzá, Cauca, coffee grows inside a legally recognized Indigenous territory — the Yaquivá Reserve — alongside native forest and agroforestry systems. This isn't a claim we make in a brochure. It's a place you can find on a map, with families you can name.",
        bullet1: "300+ partner farming families, each one identified.",
        bullet2: "Agroforestry systems that conserve biodiversity.",
        bullet3:
          "A tradition passed down between generations, not a supply contract.",
      },
      program: {
        eyebrow: "Certified Origin Program",
        title: "A Standard We Built, Not a Label We Bought",
        text: "Third-party organic certification is expensive to maintain at smallholder volume — often too expensive to make sense. Instead, we score every lot ourselves through the O&O Index: origin and territory, sustainability practices, and verified quality.",
        downloads_label: "Download O&O Index",
        download_en: "O&O Index EN",
        download_fr: "O&O Index FR",
        video_note:
          "Buyers who choose O&O back that progress directly. A platform to follow it lot by lot is coming.",
      },
      traceability: {
        badge: "Coming soon",
        title: "From forest to your cup: traceability in progress",
        text: "We are building a traceability module that will let you look up the exact origin of every coffee lot.",
        note: "Reserved space for the lot-level traceability module.",
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
          whatsapp: "WhatsApp - Directly",
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
        eyebrow: "Café de Especialidad — Misión Comercial Sudáfrica 2026",
        title:
          "Café que puede rastrear hasta el productor. No solo hasta el país.",
        subtitle:
          "Cultivamos, procesamos y exportamos café de especialidad directamente desde Inzá, Tierradentro, sin intermediarios ni una etiqueta genérica de «café colombiano». Cada lote está vinculado a la familia que lo produjo, identificada por nombre y lote. Llevamos ese origen directamente a compradores de Sudáfrica y África Occidental.",
        cta_primary: "Conocer el Café O&O",
        cta_secondary: "Misión Comercial Sudáfrica 2026 – ProColombia",
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
        families: "300+ familias productoras asociadas",
        farms: "Bajo sistemas agroforestales / café cultivado bajo sombra",
        farms_suffix: "ha",
        foods: "Origen verificado",
        organic: "Café de especialidad y relaciones directas",
        organic_suffix: "",
      },
      product: {
        eyebrow:
          "Origen verificado · Café de especialidad · Relaciones directas",
        title: "Producto Exportable",
        text: "Cada lote que exportamos —ya sea de una sola finca o una mezcla de más de 200 productores— viaja acompañado de un informe con su origen, proceso y perfil de taza. Es comercializado y exportado directamente por las familias productoras, sin intermediarios comerciales innecesarios.",
        bullet1: "Perfil de taza y notas de catación documentadas.",
        bullet2:
          "Reporte completo del productor, incluso en mezclas de varias fincas.",
        bullet3: "Exportado directamente por los productores.",
        downloads_label: "Descargar Brochure",
        download_en: "Brochure (Inglés)",
        download_fr: "Brochure (Francés)",
      },
      origin: {
        eyebrow: "Origen",
        title:
          "Cada saco puede rastrearse hasta Inzá, Tierradentro. No solo hasta «Colombia».",
        text: "En Inzá, Cauca, el café se cultiva dentro del Resguardo Indígena Yaquivá, rodeado de bosque nativo y sistemas agroforestales. No es una historia de marketing; es un territorio real, con familias identificables y un origen verificable.",
        bullet1: "300+ familias productoras asociadas, cada una identificada.",
        bullet2: "Sistemas agroforestales que conservan la biodiversidad.",
        bullet3:
          "Una tradición transmitida entre generaciones, no un simple contrato de suministro.",
      },
      program: {
        eyebrow: "Programa de Origen Certificado",
        title: "Un estándar que construimos, no una etiqueta que compramos",
        text: "Mantener una certificación orgánica internacional resulta costoso para pequeños productores. En lugar de depender de una etiqueta externa, evaluamos cada lote mediante el Índice O&O: origen y territorio, prácticas sostenibles y calidad verificada. Así impulsamos una mejora continua en cada finca.",
        downloads_label: "Descargar Índice O&O",
        download_en: "Índice O&O (Inglés)",
        download_fr: "Índice O&O (Francés)",
        video_note:
          "Los compradores que eligen O&O respaldan ese progreso. Próximamente estará disponible una plataforma para seguir cada lote.",
      },
      traceability: {
        badge: "Próximamente",
        title: "Del bosque a la taza — cinco etapas, todas documentadas",
        text: "Cada contenedor reúne café de decenas de productores de Inzá, Tierradentro. No hay mezclas que oculten quién cultivó cada lote. Así es el recorrido desde el árbol hasta el documento de exportación.",
        note: "La herramienta de consulta por lote está en desarrollo. Solicite una demostración durante la misión comercial.",
      },
      contact: {
        eyebrow: "Contacto",
        title: "Conversemos sobre su próxima importación",
        text: "Complete el formulario y nuestro equipo comercial le enviará muestras, fichas técnicas y condiciones comerciales directamente.",
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
          "Café que regenera el bosque y conecta productores con compradores.",
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
        programa: "Programme O&O",
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
          "Nous cultivons, transformons et exportons directement notre café de spécialité depuis Inzá, Tierradentro — sans intermédiaires ni simple étiquette « Café colombien ». Chaque lot est lié à la famille qui l'a produit, avec son nom et son numéro de lot. Nous apportons cette authenticité directement aux acheteurs d'Afrique du Sud et d'Afrique de l'Ouest.",
        cta_primary: "Découvrir le Café O&O",
        cta_secondary: "Mission Commerciale Afrique du Sud 2026 – ProColombia",
        reviews_tab: "Avis",
        feature1_title: "",
        feature1_text: "",
        feature2_title: "",
        feature2_text: "",
        feature3_title: "",
        feature3_text: "",
        feature4_title: "",
        feature4_text: "",
      },

      stats: {
        eyebrow: "Impact vérifié",
        families: "300+ familles productrices partenaires",
        farms: "Sous systèmes agroforestiers / café cultivé à l'ombre",
        farms_suffix: "ha",
        foods: "Origine vérifiée",
        organic: "Café de spécialité et relations directes",
        organic_suffix: "",
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

      traceability: {
        eyebrow: "Traçabilité",
        badge: "En développement",
        title: "De la forêt à la tasse — six étapes, toutes documentées",
        text: "Chaque conteneur que nous exportons rassemble le café de dizaines de producteurs d'Inzá, Tierradentro, sans mélanges qui effacent l'origine. Chaque lot est suivi depuis l'arbre jusqu'au document d'exportation.",
        note: "Un outil de consultation des lots est actuellement en développement. Demandez une démonstration à notre équipe pendant la Mission Commerciale.",
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
          whatsapp: "Passer le formulaire — WhatsApp",
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
