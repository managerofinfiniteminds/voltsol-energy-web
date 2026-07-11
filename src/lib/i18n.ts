import type { Locale } from './locale';

/**
 * UI string dictionary for hardcoded surfaces that are NOT driven by the
 * CMS (estimate flow, /technology page, header toggle, misc chrome).
 * CMS-backed homepage/footer copy is translated via `<key>_es` rows in
 * site_config (see getHomeConfig), not here.
 *
 * Spanish is natural, region-neutral Latin American Spanish — written for
 * a high-trust home-improvement purchase, not literal machine translation.
 */
export interface Dict {
  // SEO meta
  meta_home_title: string;
  meta_home_desc: string;
  meta_tech_title: string;
  meta_tech_desc: string;

  // /start page
  start_h1_pre: string;
  start_h1_gold: string;
  start_sub: string;
  trust_free: string;
  trust_no_pressure: string;
  trust_response: string;

  // Header / chrome
  nav_how: string;
  nav_pricing: string;
  nav_about: string;
  nav_contact: string;
  nav_documents: string;
  nav_partners: string;
  lang_label_en: string;
  lang_label_es: string;

  // Contact page
  contact_h1: string;
  contact_intro: string;
  contact_label_name: string;
  contact_label_email: string;
  contact_label_phone: string;
  contact_label_phone_opt: string;
  contact_label_message: string;
  contact_submit: string;
  contact_sending: string;
  contact_success: string;
  contact_error: string;
  contact_info_heading: string;
  contact_phone_label: string;
  contact_address_label: string;
  contact_email_label: string;
  contact_license_label: string;

  // Estimate flow — step labels (progress)
  step_bill: string;
  step_owns: string;
  step_shade: string;
  step_timeline: string;
  step_utility: string;
  step_estimate: string;
  step_contact: string;
  step_confirm: string;

  // Estimate flow — controls
  back: string;
  continue: string;
  submit_cta: string;
  sending: string;

  // Estimate flow — Step 0 (bill)
  q_bill: string;
  q_bill_sub: string;
  renter_notice: string;
  bill_lt_100: string;
  bill_lt_100_sub: string;
  bill_100_200: string;
  bill_100_200_sub: string;
  bill_200_300: string;
  bill_200_300_sub: string;
  bill_gt_300: string;
  bill_gt_300_sub: string;

  // Step 1 (owns home)
  q_owns: string;
  owns_yes: string;
  owns_no: string;

  // Step 2 (roof shade)
  q_shade: string;
  shade_full_sun: string;
  shade_some: string;
  shade_lots: string;
  shade_unsure: string;

  // Step 3 (timeline)
  q_timeline: string;
  timeline_asap: string;
  timeline_1_3: string;
  timeline_3_6: string;
  timeline_exploring: string;

  // Step 4 (utility)
  q_utility: string;
  q_utility_sub: string;
  utility_placeholder: string;

  // Step 5 (estimate reveal) — mostly dynamic; static labels only
  estimate_eyebrow: string;
  estimate_disclaimer_lead: string;
  estimate_cta_continue: string;

  // Step 6 (contact)
  contact_headline: string;
  contact_sub: string;
  label_first: string;
  label_last: string;
  label_email: string;
  label_phone: string;
  label_address: string;
  optional: string;
  label_city: string;
  label_state: string;
  label_zip: string;

  // Step 7 (confirmation)
  confirm_headline: string;
  confirm_body: string;
  confirm_thanks_pre: string;
  confirm_thanks_post: string;
  confirm_inbox: string;
  back_to_home: string;

  // Errors
  err_required: string;
  err_email: string;
  err_phone: string;
  err_select: string;
  err_utility: string;
  err_network: string;
  err_generic: string;
  err_bill: string;
  err_when: string;
  err_first: string;
  err_last: string;
  err_email_req: string;
  err_phone_req: string;
  err_consent: string;
  err_ratelimit: string;

  // Consent
  consent: string;
}

const en: Dict = {
  meta_home_title: 'VoltSol Energy — Residential Solar + Battery Storage in California from $8,700',
  meta_home_desc:
    'Residential solar + battery storage across California — make your own power, store it, and use it. EG4 battery + inverter systems from $8,700. Keep the power you make instead of selling it to the grid for pennies. Free estimate, no pressure.',
  meta_tech_title: "How It's Different — Solar + Storage That Keeps the Power You Make",
  meta_tech_desc:
    'Ordinary solar sends your power to the grid for a fraction of its value. VoltSol builds around self-consumption — make it, store it, use it — so you keep your own power and stay on through blackouts.',
  start_h1_pre: 'Get Your',
  start_h1_gold: 'Free Estimate',
  start_sub: 'Answer a few quick questions to see what you could save.',
  trust_free: 'Free estimate',
  trust_no_pressure: 'No pressure',
  trust_response: 'Response within 1 business day',
  nav_how: 'How It Works',
  nav_pricing: 'Pricing',
  nav_about: 'About',
  nav_contact: 'Contact',
  nav_documents: 'Documents',
  nav_partners: 'Partners',
  contact_h1: 'Get in Touch',
  contact_intro: "Questions about going solar? Send us a message and we'll get back to you.",
  contact_label_name: 'Name',
  contact_label_email: 'Email',
  contact_label_phone: 'Phone',
  contact_label_phone_opt: 'Phone (optional)',
  contact_label_message: 'Message',
  contact_submit: 'Send Message',
  contact_sending: 'Sending…',
  contact_success: "Thanks — your message is on its way. We'll be in touch soon.",
  contact_error: 'Something went wrong. Please try again or email us directly.',
  contact_info_heading: 'Contact Information',
  contact_phone_label: 'Phone',
  contact_address_label: 'Address',
  contact_email_label: 'Email',
  contact_license_label: 'License',
  lang_label_en: 'EN',
  lang_label_es: 'ES',

  step_bill: 'Monthly bill',
  step_owns: 'Home ownership',
  step_shade: 'Roof shade',
  step_timeline: 'Timeline',
  step_utility: 'Utility',
  step_estimate: 'Your estimate',
  step_contact: 'Contact info',
  step_confirm: 'Confirmation',

  back: 'Back',
  continue: 'Continue',
  submit_cta: 'Get My Free Estimate',
  sending: 'Sending...',

  q_bill: "What's your average monthly utility bill?",
  q_bill_sub: 'This helps us size your system correctly.',
  renter_notice:
    'We mostly help homeowners, but we can still send you helpful information about solar options for renters.',
  bill_lt_100: 'Under $150',
  bill_lt_100_sub: 'Light usage',
  bill_100_200: '$150–$300',
  bill_100_200_sub: 'Average home',
  bill_200_300: '$300–$500',
  bill_200_300_sub: 'Higher usage',
  bill_gt_300: '$500+',
  bill_gt_300_sub: 'Very high usage',

  q_owns: 'Do you own your home?',
  owns_yes: 'Yes, I own my home',
  owns_no: 'No, I rent',

  q_shade: 'How much shade is on your roof?',
  shade_full_sun: 'Full sun',
  shade_some: 'Some shade',
  shade_lots: 'Lots of shade',
  shade_unsure: 'Not sure',

  q_timeline: 'When are you looking to get started?',
  timeline_asap: 'ASAP',
  timeline_1_3: '1–3 months',
  timeline_3_6: '3–6 months',
  timeline_exploring: 'Just exploring',

  q_utility: "Who's your electric utility?",
  q_utility_sub: 'Whoever sends your monthly power bill.',
  utility_placeholder: 'e.g. your power company',

  estimate_eyebrow: 'Your Estimate',
  estimate_disclaimer_lead: 'This is an estimate, not a quote.',
  estimate_cta_continue: 'Continue',

  contact_headline: 'Where do we send your estimate?',
  contact_sub: "We'll never sell your info.",
  label_first: 'First Name',
  label_last: 'Last Name',
  label_email: 'Email',
  label_phone: 'Phone',
  label_address: 'Home Address',
  optional: '(optional)',
  label_city: 'City',
  label_state: 'State',
  label_zip: 'ZIP',

  confirm_headline: "You're all set",
  confirm_body: 'VoltSol will be in touch — we typically respond within one business day.',
  confirm_thanks_pre: 'Thanks',
  confirm_thanks_post:
    "! We've got your details. A VoltSol rep will reach out shortly to walk you through your personalized estimate and answer any questions — no pressure, no obligation.",
  confirm_inbox:
    'Keep an eye on your inbox and phone — we typically respond within one business day.',
  back_to_home: 'Back to home',

  err_required: 'This field is required',
  err_email: 'Please enter a valid email',
  err_phone: 'Please enter a valid phone number',
  err_select: 'Please select an option',
  err_utility: 'Please enter your electric utility',
  err_network: 'Network error. Please check your connection and try again.',
  err_generic: 'Something went wrong. Please try again.',
  err_bill: 'Please select your bill range',
  err_when: 'Please select when',
  err_first: 'First name is required',
  err_last: 'Last name is required',
  err_email_req: 'Email is required',
  err_phone_req: 'Phone is required',
  err_consent: 'Please agree to receive your estimate',
  err_ratelimit: 'Too many requests. Please try again later.',

  consent:
    'By submitting, I agree to receive calls, texts, and emails from VoltSol Energy about my solar estimate. Message and data rates may apply. Consent is not a condition of purchase.',
};

const es: Dict = {
  meta_home_title: 'VoltSol Energy — Energía Solar Residencial + Batería en California desde $8,700',
  meta_home_desc:
    'Energía solar residencial + almacenamiento en batería en California — produce tu propia energía, almacénala y úsala. Sistemas con batería + inversor EG4 desde $8,700. Quédate con la energía que produces en vez de venderla a la red por centavos. Estimado gratis, sin presión.',
  meta_tech_title: 'En Qué Se Diferencia — Solar + Batería Que Conserva la Energía Que Produces',
  meta_tech_desc:
    'La solar común envía tu energía a la red por una fracción de su valor. VoltSol se basa en el autoconsumo — prodúcela, almacénala, úsala — para que conserves tu propia energía y sigas con luz durante los apagones.',
  start_h1_pre: 'Recibe Tu',
  start_h1_gold: 'Estimado Gratis',
  start_sub: 'Responde unas preguntas rápidas para ver cuánto podrías ahorrar.',
  trust_free: 'Estimado gratis',
  trust_no_pressure: 'Sin presión',
  trust_response: 'Respuesta en 1 día hábil',
  nav_how: 'Cómo Funciona',
  nav_pricing: 'Precios',
  nav_about: 'Nosotros',
  nav_contact: 'Contacto',
  nav_documents: 'Documentos',
  nav_partners: 'Socios',
  contact_h1: 'Contáctanos',
  contact_intro: '¿Tienes preguntas sobre la energía solar? Envíanos un mensaje y te responderemos.',
  contact_label_name: 'Nombre',
  contact_label_email: 'Correo electrónico',
  contact_label_phone: 'Teléfono',
  contact_label_phone_opt: 'Teléfono (opcional)',
  contact_label_message: 'Mensaje',
  contact_submit: 'Enviar Mensaje',
  contact_sending: 'Enviando…',
  contact_success: 'Gracias — tu mensaje va en camino. Te contactaremos pronto.',
  contact_error: 'Algo salió mal. Inténtalo de nuevo o escríbenos directamente.',
  contact_info_heading: 'Información de Contacto',
  contact_phone_label: 'Teléfono',
  contact_address_label: 'Dirección',
  contact_email_label: 'Correo',
  contact_license_label: 'Licencia',
  lang_label_en: 'EN',
  lang_label_es: 'ES',

  step_bill: 'Factura mensual',
  step_owns: 'Propiedad de la casa',
  step_shade: 'Sombra del techo',
  step_timeline: 'Plazo',
  step_utility: 'Compañía eléctrica',
  step_estimate: 'Tu estimado',
  step_contact: 'Datos de contacto',
  step_confirm: 'Confirmación',

  back: 'Atrás',
  continue: 'Continuar',
  submit_cta: 'Recibir Mi Estimado Gratis',
  sending: 'Enviando...',

  q_bill: '¿Cuánto pagas en promedio al mes de electricidad?',
  q_bill_sub: 'Esto nos ayuda a dimensionar tu sistema correctamente.',
  renter_notice:
    'Trabajamos principalmente con propietarios, pero aún podemos enviarte información útil sobre opciones solares para inquilinos.',
  bill_lt_100: 'Menos de $150',
  bill_lt_100_sub: 'Uso ligero',
  bill_100_200: '$150–$300',
  bill_100_200_sub: 'Casa promedio',
  bill_200_300: '$300–$500',
  bill_200_300_sub: 'Uso alto',
  bill_gt_300: '$500+',
  bill_gt_300_sub: 'Uso muy alto',

  q_owns: '¿Eres dueño de tu casa?',
  owns_yes: 'Sí, es mía',
  owns_no: 'No, rento',

  q_shade: '¿Cuánta sombra tiene tu techo?',
  shade_full_sun: 'Pleno sol',
  shade_some: 'Algo de sombra',
  shade_lots: 'Mucha sombra',
  shade_unsure: 'No estoy seguro',

  q_timeline: '¿Cuándo te gustaría comenzar?',
  timeline_asap: 'Lo antes posible',
  timeline_1_3: '1–3 meses',
  timeline_3_6: '3–6 meses',
  timeline_exploring: 'Solo estoy explorando',

  q_utility: '¿Cuál es tu compañía eléctrica?',
  q_utility_sub: 'La que te envía tu factura de electricidad cada mes.',
  utility_placeholder: 'ej. tu compañía de electricidad',

  estimate_eyebrow: 'Tu Estimado',
  estimate_disclaimer_lead: 'Esto es un estimado, no una cotización.',
  estimate_cta_continue: 'Continuar',

  contact_headline: '¿A dónde enviamos tu estimado?',
  contact_sub: 'Nunca venderemos tu información.',
  label_first: 'Nombre',
  label_last: 'Apellido',
  label_email: 'Correo electrónico',
  label_phone: 'Teléfono',
  label_address: 'Dirección de tu casa',
  optional: '(opcional)',
  label_city: 'Ciudad',
  label_state: 'Estado',
  label_zip: 'Código postal',

  confirm_headline: '¡Todo listo!',
  confirm_body: 'VoltSol se pondrá en contacto contigo — normalmente respondemos en un día hábil.',
  confirm_thanks_pre: 'Gracias',
  confirm_thanks_post:
    '! Ya tenemos tus datos. Un representante de VoltSol se pondrá en contacto pronto para explicarte tu estimado personalizado y responder cualquier pregunta — sin presión y sin compromiso.',
  confirm_inbox:
    'Mantén un ojo en tu correo y tu teléfono — normalmente respondemos en un día hábil.',
  back_to_home: 'Volver al inicio',

  err_required: 'Este campo es obligatorio',
  err_email: 'Ingresa un correo electrónico válido',
  err_phone: 'Ingresa un número de teléfono válido',
  err_select: 'Selecciona una opción',
  err_utility: 'Ingresa tu compañía eléctrica',
  err_network: 'Error de conexión. Revisa tu internet e inténtalo de nuevo.',
  err_generic: 'Algo salió mal. Inténtalo de nuevo.',
  err_bill: 'Selecciona tu rango de factura',
  err_when: 'Selecciona cuándo',
  err_first: 'El nombre es obligatorio',
  err_last: 'El apellido es obligatorio',
  err_email_req: 'El correo electrónico es obligatorio',
  err_phone_req: 'El teléfono es obligatorio',
  err_consent: 'Acepta para recibir tu estimado',
  err_ratelimit: 'Demasiadas solicitudes. Inténtalo más tarde.',

  consent:
    'Al enviar, acepto recibir llamadas, mensajes de texto y correos de VoltSol Energy sobre mi estimado solar. Pueden aplicar tarifas de mensajes y datos. El consentimiento no es condición de compra.',
};

const DICTS: Record<Locale, Dict> = { en, es };

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? en;
}
