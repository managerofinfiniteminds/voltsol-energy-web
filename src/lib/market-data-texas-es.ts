// Spanish translations for Texas market content (Phase 2a: 12 counties).
// Natural Latin American Spanish, marketing tone for high-trust home-improvement purchase.
// VoltSol Energy brand-forward -- no Hugo references.

export interface MarketCountyContentEs {
  utilityRateNote: string;
  permitOfficeNote: string;
  climateZoneDescription: string;
  countyContext: string;
}

export interface MarketCityContentEs {
  localNote: string;
  faq: Array<{ q: string; a: string }>;
}

export const MARKET_COUNTY_CONTENT_ES: Record<string, MarketCountyContentEs> = {
  'harris-county': {
    utilityRateNote: 'El condado de Harris está en el mercado desregulado de ERCOT. CenterPoint Energy entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Houston y otras ciudades incorporadas en el condado de Harris tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Clima cálido y húmedo de la Costa del Golfo con veranos calurosos y frecuentes tormentas eléctricas por la tarde. Alta demanda de enfriamiento de mayo a septiembre. El riesgo de huracanes y tormentas tropicales requiere equipos clasificados para viento. La humedad costera y el aire salado requieren herrajes resistentes a la corrosión. El respaldo de batería es valioso para apagones de varios días después de tormentas.',
    countyContext: 'El condado de Harris es el condado más poblado de Texas, centrado en Houston y abarcando las llanuras planas de la Costa del Golfo. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano, haciendo que la energía solar sea muy valiosa para compensar los costos de aire acondicionado. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días en todo el estado, subrayando la importancia del respaldo de batería para la resiliencia de la red. La preparación para huracanes es una prioridad: los sistemas solares + batería proporcionan energía de respaldo crítica durante apagones de varios días después de tormentas.',
  },
  'dallas-county': {
    utilityRateNote: 'El condado de Dallas está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque una recompra solar competitiva para maximizar ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP.',
    permitOfficeNote: 'Dallas y otras ciudades incorporadas en el condado de Dallas tienen sus propios departamentos de construcción. Los plazos de permisos varían por jurisdicción -- confirme con su departamento de construcción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. Dallas es parte del "Pasillo del Granizo" (Hail Alley): las tormentas severas de granizo en primavera/verano son comunes, requiriendo equipos solares clasificados para granizo. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días. El respaldo de batería es valioso tanto para tormentas invernales como para eventos de calor en verano.',
    countyContext: 'El condado de Dallas es el núcleo urbano del norte de Texas, centrado en Dallas y ciudades circundantes. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. Dallas se encuentra en el "Pasillo del Granizo" (Hail Alley): los equipos solares clasificados para granizo son esenciales. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red durante eventos climáticos extremos.',
  },
  'tarrant-county': {
    utilityRateNote: 'El condado de Tarrant está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque una recompra solar competitiva para maximizar ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP.',
    permitOfficeNote: 'Fort Worth, Arlington y otras ciudades en el condado de Tarrant tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Tarrant está en el "Pasillo del Granizo" (Hail Alley): las tormentas severas de granizo en primavera/verano requieren equipos solares clasificados para granizo. Las tormentas invernales (como Uri en febrero de 2021) y los eventos de calor en verano hacen que el respaldo de batería sea valioso para la resiliencia de la red.',
    countyContext: 'El condado de Tarrant es el área metropolitana de Fort Worth, centrada en Fort Worth y Arlington. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. Ubicado en el "Pasillo del Granizo" (Hail Alley), los equipos solares clasificados para granizo son esenciales. La tormenta invernal Uri causó apagones de varios días, destacando la importancia del respaldo de batería para la resiliencia energética.',
  },
  'bexar-county': {
    utilityRateNote: 'El condado de Bexar recibe servicio principalmente de CPS Energy, una empresa de servicios públicos de propiedad municipal que establece sus propias tarifas y políticas solares. Los residentes no eligen un REP. CPS Energy tiene su propio programa de recompra solar: confirme las tarifas de exportación solar actuales con CPS Energy directamente. Tarifa residencial ilustrativa: ~$0.13/kWh.',
    permitOfficeNote: 'San Antonio y otras áreas incorporadas en el condado de Bexar tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con una demanda de enfriamiento muy alta. El calor del sur de Texas impulsa largas temporadas de enfriamiento de abril a octubre. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días. El respaldo de batería es valioso tanto para la resiliencia ante tormentas invernales como para eventos de calor en verano.',
    countyContext: 'El condado de Bexar está centrado en San Antonio, la séptima ciudad más grande de los Estados Unidos. El clima cálido y húmedo crea cargas de enfriamiento de verano muy altas, haciendo que la energía solar sea especialmente valiosa para compensar los costos de aire acondicionado. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'travis-county': {
    utilityRateNote: 'El condado de Travis (Ciudad de Austin) recibe servicio principalmente de Austin Energy, una empresa de servicios públicos de propiedad municipal que establece sus propias tarifas y políticas solares. Los residentes no eligen un REP. Austin Energy tiene un programa de Valor de la Energía Solar bien establecido: confirme las tarifas de exportación solar actuales con Austin Energy directamente. Tarifa residencial ilustrativa: ~$0.13/kWh.',
    permitOfficeNote: 'Austin y otras áreas incorporadas en el condado de Travis tienen sus propios departamentos de construcción. Austin tiene un proceso de permisos solares simplificado. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos con una demanda de enfriamiento muy alta. Austin se encuentra en el Hill Country de Texas, con veranos calurosos y secos e inviernos suaves. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días. El respaldo de batería es valioso tanto para la resiliencia ante tormentas invernales como para eventos de calor en verano.',
    countyContext: 'El condado de Travis está centrado en Austin, la capital del estado. El clima caluroso impulsa cargas de enfriamiento de verano muy altas, haciendo que la energía solar sea muy valiosa para compensar los costos de aire acondicionado. Austin Energy tiene una larga historia de incentivos solares y programas de medición neta. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'collin-county': {
    utilityRateNote: 'El condado de Collin está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque una recompra solar competitiva para maximizar ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP.',
    permitOfficeNote: 'Plano, Frisco, McKinney y otras ciudades en el condado de Collin tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Collin está en el "Pasillo del Granizo" (Hail Alley): las tormentas severas de granizo en primavera/verano requieren equipos solares clasificados para granizo. Las tormentas invernales y los eventos de calor en verano hacen que el respaldo de batería sea valioso para la resiliencia de la red.',
    countyContext: 'El condado de Collin es el área metropolitana norte de Dallas, centrada en Plano, Frisco y McKinney. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. Ubicado en el "Pasillo del Granizo" (Hail Alley), los equipos solares clasificados para granizo son esenciales. La tormenta invernal Uri y los eventos de calor en verano subrayan la importancia del respaldo de batería.',
  },
  'denton-county': {
    utilityRateNote: 'El condado de Denton tiene servicio de servicios públicos mixto. La mayoría de las áreas están en el mercado desregulado de ERCOT servido por Oncor (TDU): los residentes eligen su REP que establece las tarifas de recompra solar. La Ciudad de Denton tiene Denton Municipal Electric (DME), una empresa de servicios públicos municipal que establece sus propias tarifas y políticas solares. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la empresa de servicios públicos y la elección de REP/plan.',
    permitOfficeNote: 'Denton, Lewisville, Flower Mound y otras ciudades en el condado de Denton tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Denton está en el "Pasillo del Granizo" (Hail Alley): las tormentas severas de granizo en primavera/verano requieren equipos solares clasificados para granizo. Las tormentas invernales y los eventos de calor en verano hacen que el respaldo de batería sea valioso para la resiliencia de la red.',
    countyContext: 'El condado de Denton es el área metropolitana noroeste de Dallas-Fort Worth, centrada en Denton, Lewisville y Flower Mound. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. Ubicado en el "Pasillo del Granizo" (Hail Alley), los equipos solares clasificados para granizo son esenciales. La tormenta invernal Uri y los eventos de calor en verano destacan la importancia del respaldo de batería.',
  },
  'fort-bend-county': {
    utilityRateNote: 'El condado de Fort Bend está en el mercado desregulado de ERCOT. CenterPoint Energy entrega energía como TDU solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque una recompra solar competitiva para maximizar ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP.',
    permitOfficeNote: 'Sugar Land, Missouri City, Rosenberg y otras ciudades en el condado de Fort Bend tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con frecuentes tormentas eléctricas por la tarde. Alta demanda de enfriamiento de mayo a septiembre. El riesgo de huracanes y tormentas tropicales requiere equipos clasificados para viento. La humedad costera requiere herrajes resistentes a la corrosión. El respaldo de batería es valioso para apagones de varios días después de tormentas.',
    countyContext: 'El condado de Fort Bend es el área metropolitana suroeste de Houston, centrada en Sugar Land, Missouri City y Rosenberg. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. La preparación para huracanes es una prioridad: los sistemas solares + batería proporcionan energía de respaldo crítica durante apagones de varios días después de tormentas. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'hidalgo-county': {
    utilityRateNote: 'El condado de Hidalgo (Valle del Río Grande) está en el mercado desregulado de ERCOT. AEP Texas entrega energía como TDU solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque una recompra solar competitiva para maximizar ahorros. Rango ilustrativo de tarifas residenciales: $0.11-$0.15/kWh según la elección de REP.',
    permitOfficeNote: 'McAllen, Edinburg, Pharr y otras ciudades en el condado de Hidalgo tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos muy calurosos y húmedos con una demanda de enfriamiento extremadamente alta. El Valle del Río Grande tiene un clima subtropical con veranos largos y calurosos e inviernos suaves. El calor alto y la humedad impulsan cargas de aire acondicionado muy altas de abril a octubre. El riesgo de huracanes y tormentas tropicales del Golfo de México requiere equipos clasificados para viento.',
    countyContext: 'El condado de Hidalgo es el corazón del Valle del Río Grande, centrado en McAllen, Edinburg y Pharr. El clima subtropical muy caluroso crea cargas de enfriamiento de verano extremadamente altas, haciendo que la energía solar sea especialmente valiosa para compensar los costos de aire acondicionado. La preparación para huracanes es importante: los sistemas solares + batería proporcionan energía de respaldo durante apagones de varios días.',
  },
  'el-paso-county': {
    utilityRateNote: 'El condado de El Paso recibe servicio de El Paso Electric, una empresa de servicios públicos regulada en la red WECC (no ERCOT). Los residentes no eligen un REP. El Paso Electric establece sus propias tarifas y políticas solares: confirme las tarifas de recompra solar actuales con El Paso Electric directamente. Tarifa residencial ilustrativa: ~$0.13/kWh.',
    permitOfficeNote: 'El Paso y otras áreas incorporadas en el condado de El Paso tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Clima de desierto alto con veranos calurosos y secos con muy baja humedad. El Paso se encuentra en el Desierto Chihuahuense a ~3,800 pies de elevación. Potencial solar excepcional: horas pico de sol muy altas y cobertura de nubes mínima durante todo el año. La baja humedad y la gran elevación aumentan la producción solar. Alta demanda de enfriamiento de mayo a septiembre.',
    countyContext: 'El condado de El Paso es el extremo occidental de Texas, centrado en El Paso. El clima de desierto alto proporciona un potencial solar excepcional, entre los mejores de Texas. El Paso Electric es una empresa de servicios públicos regulada en la red WECC (aislada de ERCOT). La tormenta invernal Uri no afectó directamente a El Paso, pero el respaldo de batería sigue siendo valioso para eventos de la red local y el calor del verano.',
  },
  'montgomery-county': {
    utilityRateNote: 'El condado de Montgomery está en el mercado desregulado de ERCOT. CenterPoint Energy y Entergy Texas entregan energía como TDU solo de cables dependiendo de la ubicación, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque una recompra solar competitiva para maximizar ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP.',
    permitOfficeNote: 'The Woodlands, Conroe y otras áreas incorporadas en el condado de Montgomery tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con frecuentes tormentas eléctricas por la tarde. Alta demanda de enfriamiento de mayo a septiembre. El riesgo de huracanes y tormentas tropicales del Golfo de México requiere equipos clasificados para viento. Las áreas boscosas pueden tener más sombra de árboles. El respaldo de batería es valioso para apagones de varios días después de tormentas.',
    countyContext: 'El condado de Montgomery es el área metropolitana norte de Houston, centrada en The Woodlands y Conroe. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. La preparación para huracanes es importante: los sistemas solares + batería proporcionan energía de respaldo durante apagones de varios días. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'williamson-county': {
    utilityRateNote: 'El condado de Williamson tiene servicio de servicios públicos mixto. Algunas áreas reciben servicio de Austin Energy (municipal), otras de Georgetown Utility Systems (municipal), y otras están en el mercado desregulado de ERCOT (Oncor TDU: los residentes eligen su REP). Las tarifas de recompra solar varían según la empresa de servicios públicos y la elección de REP: confirme con su empresa de servicios públicos específica. Rango ilustrativo de tarifas residenciales: $0.12-$0.15/kWh según la empresa de servicios públicos y la elección de REP/plan.',
    permitOfficeNote: 'Round Rock, Georgetown, Cedar Park y otras ciudades en el condado de Williamson tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos con una demanda de enfriamiento muy alta. El condado de Williamson se encuentra en el Hill Country de Texas justo al norte de Austin, con veranos calurosos y secos e inviernos suaves. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días. El respaldo de batería es valioso tanto para la resiliencia ante tormentas invernales como para eventos de calor en verano.',
    countyContext: 'El condado de Williamson es el área metropolitana norte de Austin, centrada en Round Rock, Georgetown y Cedar Park. El clima caluroso impulsa cargas de enfriamiento de verano muy altas, haciendo que la energía solar sea muy valiosa para compensar los costos de aire acondicionado. Múltiples empresas de servicios públicos sirven el condado: Austin Energy y Georgetown Utility Systems (municipal) tienen programas solares establecidos, mientras que las áreas desreguladas permiten la elección de REP. La tormenta invernal Uri subrayó la importancia del respaldo de batería.',
  },
};

export const MARKET_CITY_CONTENT_ES: Record<string, MarketCityContentEs> = {
  // Harris County cities
  'houston': {
    localNote: 'Houston es la ciudad más grande de Texas, con un área metropolitana extensa y un clima cálido y húmedo. La alta demanda de enfriamiento en verano hace que la energía solar sea especialmente valiosa para reducir los costos de aire acondicionado.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Houston?', a: 'Sí. El Centro de Permisos de la Ciudad de Houston maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta la aplicación y gestiona el proceso de aprobación.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Houston?', a: 'Sí. Los veranos calurosos de Houston generan altos costos de enfriamiento. La energía solar compensa directamente su carga de aire acondicionado. El respaldo de batería es especialmente valioso para la temporada de huracanes: la tormenta invernal Uri y huracanes pasados han causado apagones de varios días. Usted elige su propio REP, así que busque un plan con una tarifa de recompra solar competitiva.' },
      { q: '¿Cuánto sol recibe Houston para energía solar?', a: 'Houston promedia aproximadamente 5.3 horas pico de sol al día. A pesar de la cobertura de nubes ocasional por la humedad del Golfo, la producción solar es fuerte durante todo el año, con pico de producción en verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },
  'pasadena': {
    localNote: 'Pasadena es un importante suburbio al sureste de Houston, con terreno plano ideal para instalaciones solares. La proximidad a la Costa del Golfo significa alta humedad y exposición a huracanes.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Pasadena, TX?', a: 'Sí. El Departamento de Construcción de la Ciudad de Pasadena maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Pasadena con energía desregulada?', a: 'Sí. Pasadena está en el mercado desregulado de ERCOT: usted elige su REP. La energía solar ayuda a compensar los altos costos de enfriamiento en verano, y el respaldo de batería proporciona resiliencia crítica durante huracanes y eventos de la red como la tormenta invernal Uri.' },
      { q: '¿Cómo funciona la energía solar en el clima húmedo de Pasadena?', a: 'Pasadena promedia aproximadamente 5.3 horas pico de sol al día. Los paneles solares funcionan bien a pesar de la humedad y la cobertura de nubes ocasional, con una fuerte producción en verano que coincide con la demanda máxima de enfriamiento.' },
    ],
  },
  'baytown': {
    localNote: 'Baytown se encuentra en la Costa del Golfo al este de Houston. La ubicación costera de la ciudad trae riesgo de huracanes y alta humedad, haciendo que el respaldo de batería sea una inversión valiosa para la resiliencia ante tormentas.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Baytown?', a: 'Sí. El Departamento de Construcción de la Ciudad de Baytown maneja los permisos solares residenciales. El plazo típico es de 2 a 6 semanas. Su contratista presenta la aplicación.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Baytown para huracanes?', a: 'Sí. La ubicación de Baytown en la Costa del Golfo significa riesgo de huracanes y posibles apagones de varios días. El respaldo de batería mantiene las cargas críticas funcionando cuando la red está caída. La energía solar compensa los altos costos de enfriamiento en verano. Usted elige su REP, así que busque un buen plan de recompra solar.' },
      { q: '¿Cuánto sol recibe Baytown para la producción solar?', a: 'Baytown promedia aproximadamente 5.3 horas pico de sol al día. La humedad costera reduce ligeramente la producción en comparación con las áreas del interior, pero la producción sigue siendo fuerte durante todo el año.' },
    ],
  },
  'katy': {
    localNote: 'Katy es un suburbio en rápido crecimiento al oeste de Houston, con casas modernas y amplio espacio en el techo para energía solar. El terreno plano del área y los techos sin obstrucciones son ideales para la colocación de paneles solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Katy, TX?', a: 'Sí. El Departamento de Construcción de la Ciudad de Katy maneja los permisos solares dentro de los límites de la ciudad. Las áreas no incorporadas pueden caer bajo la jurisdicción del condado de Harris. El plazo típico es de 2 a 6 semanas.' },
      { q: '¿Vale la pena la energía solar residencial en los suburbios en crecimiento de Katy?', a: 'Sí. Las nuevas subdivisiones de Katy a menudo tienen techos grandes ideales para energía solar. Las altas cargas de enfriamiento en verano y la energía desregulada (elija su REP para la mejor recompra solar) hacen que la energía solar sea una inversión inteligente. El respaldo de batería agrega resiliencia para eventos de la red.' },
      { q: '¿Cuánto sol recibe Katy para energía solar?', a: 'Katy promedia aproximadamente 5.3 horas pico de sol al día. El terreno de pradera plano al oeste de Houston proporciona exposición solar consistente con mínima sombra.' },
    ],
  },
  'humble': {
    localNote: 'Humble es un suburbio del noreste de Houston con una mezcla de áreas residenciales establecidas y nuevas. La ubicación de la ciudad tierra adentro de la costa significa un poco menos de humedad que las áreas costeras, pero aún requiere equipos clasificados para viento.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Humble?', a: 'Sí. El Departamento de Construcción de la Ciudad de Humble maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presentará la aplicación y coordinará las aprobaciones.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Humble, TX?', a: 'Sí. Humble experimenta veranos calurosos con alta demanda de enfriamiento. La energía solar compensa directamente los costos de aire acondicionado. El respaldo de batería proporciona resiliencia durante tormentas y eventos de la red. Usted elige su REP, así que busque un plan con fuertes tarifas de exportación solar.' },
      { q: '¿Cómo funciona la energía solar en el clima de Humble?', a: 'Humble promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción durante el verano cuando sus costos de energía son más altos.' },
    ],
  },

  // Dallas County cities
  'dallas': {
    localNote: 'Dallas es el núcleo urbano del norte de Texas, con veranos calurosos y una ubicación en el Pasillo del Granizo (Hail Alley). Los equipos solares clasificados para granizo son esenciales para la protección contra tormentas.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Dallas?', a: 'Sí. Dallas Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta la aplicación y gestiona las aprobaciones.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Dallas?', a: 'Sí. Dallas tiene veranos calurosos con altos costos de enfriamiento, y la energía solar compensa directamente la demanda de aire acondicionado. El respaldo de batería es esencial para la resiliencia de la red: la tormenta invernal Uri causó apagones de varios días. Dallas está en el "Pasillo del Granizo" (Hail Alley), por lo que se requieren equipos clasificados para granizo. Usted elige su REP, así que busque un plan con buenas tarifas de exportación solar.' },
      { q: '¿Cuánto sol recibe Dallas para energía solar?', a: 'Dallas promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción en verano coincidiendo con la alta demanda de enfriamiento.' },
    ],
  },
  'garland': {
    localNote: 'Garland opera su propia empresa de servicios públicos eléctricos municipal (Garland Power & Light), por lo que los residentes no eligen un REP. La ciudad establece sus propias tarifas y políticas solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Garland?', a: 'Sí. El Departamento de Inspección de Edificios de la Ciudad de Garland maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador gestiona el proceso.' },
      { q: '¿Vale la pena la energía solar en Garland con energía municipal?', a: 'Sí. Garland Power & Light es una empresa de servicios públicos municipal con sus propias políticas de interconexión solar y medición neta. La energía solar compensa los altos costos de enfriamiento en verano. El respaldo de batería proporciona resiliencia durante tormentas invernales y eventos de calor en verano. Confirme las tarifas de recompra solar actuales con Garland Power & Light.' },
      { q: '¿Cómo funciona la energía solar en Garland?', a: 'Garland promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte durante todo el año. Garland está en el Pasillo del Granizo (Hail Alley), por lo que los equipos clasificados para granizo son esenciales.' },
    ],
  },
  'irving': {
    localNote: 'Irving es un importante suburbio entre Dallas y Fort Worth, con una mezcla de áreas residenciales y comerciales. El mercado de energía desregulado da a los residentes la opción de REP.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Irving?', a: 'Sí. La División de Inspección de Edificios de la Ciudad de Irving maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista presenta la aplicación.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Irving, TX?', a: 'Sí. Los veranos calurosos de Irving generan altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia durante tormentas. Usted elige su REP, así que busque un plan con tarifas de exportación solar competitivas.' },
      { q: '¿Cuánto sol recibe Irving para energía solar?', a: 'Irving promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte, con pico de producción en verano. Irving está en el Pasillo del Granizo (Hail Alley): se requieren paneles clasificados para granizo.' },
    ],
  },
  'mesquite': {
    localNote: 'Mesquite es un suburbio del este de Dallas con una mezcla de áreas residenciales más antiguas y más nuevas. El mercado de energía desregulado permite a los residentes elegir su REP.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Mesquite?', a: 'Sí. El Departamento de Inspección de Edificios de la Ciudad de Mesquite maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Mesquite?', a: 'Sí. Los veranos calurosos de Mesquite crean alta demanda de enfriamiento. La energía solar compensa directamente los costos de aire acondicionado. El respaldo de batería es valioso para la resiliencia ante tormentas. Usted elige su REP en el mercado desregulado: busque buenas tarifas de exportación solar.' },
      { q: '¿Cómo funciona la energía solar en el clima de Mesquite?', a: 'Mesquite promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción durante el verano. La ubicación en el Pasillo del Granizo (Hail Alley) requiere equipos clasificados para granizo.' },
    ],
  },

  // Tarrant County cities
  'fort-worth': {
    localNote: 'Fort Worth es el ancla occidental del área metropolitana de Dallas-Fort Worth, con veranos calurosos y una ubicación en el Pasillo del Granizo (Hail Alley). Se requieren equipos solares clasificados para granizo.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Fort Worth?', a: 'Sí. Fort Worth Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta y gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Fort Worth?', a: 'Sí. Fort Worth tiene veranos calurosos con altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia durante tormentas invernales y eventos de calor en verano. Fort Worth está en el Pasillo del Granizo (Hail Alley): los paneles clasificados para granizo son esenciales. Usted elige su REP, así que busque tarifas de exportación solar competitivas.' },
      { q: '¿Cuánto sol recibe Fort Worth para energía solar?', a: 'Fort Worth promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción en verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },
  'arlington': {
    localNote: 'Arlington se encuentra entre Dallas y Fort Worth, con veranos calurosos y alta demanda de enfriamiento. La ciudad está en el Pasillo del Granizo (Hail Alley), lo que requiere equipos solares clasificados para granizo.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Arlington, TX?', a: 'Sí. La División de Inspección de Edificios de la Ciudad de Arlington maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Arlington?', a: 'Sí. Los veranos calurosos de Arlington crean altos costos de enfriamiento. La energía solar compensa directamente la demanda de aire acondicionado. El respaldo de batería es valioso para la resiliencia ante tormentas invernales y de calor en verano. Usted elige su REP en el mercado desregulado: busque buenas tarifas de recompra solar.' },
      { q: '¿Cómo funciona la energía solar en el clima de Arlington?', a: 'Arlington promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte, con pico de producción durante el verano. Arlington está en el Pasillo del Granizo (Hail Alley): se requieren equipos clasificados para granizo.' },
    ],
  },
  'grand-prairie': {
    localNote: 'Grand Prairie es un suburbio en crecimiento entre Dallas y Fort Worth, con terreno plano ideal para instalaciones solares. El mercado de energía desregulado da a los residentes la opción de REP.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Grand Prairie?', a: 'Sí. El Departamento de Inspección de Edificios de la Ciudad de Grand Prairie maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta la aplicación.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Grand Prairie?', a: 'Sí. Grand Prairie tiene veranos calurosos con alta demanda de enfriamiento. La energía solar compensa los costos de aire acondicionado, y el respaldo de batería proporciona resiliencia ante tormentas. Usted elige su REP: busque tarifas de exportación solar competitivas.' },
      { q: '¿Cuánto sol recibe Grand Prairie para energía solar?', a: 'Grand Prairie promedia aproximadamente 5.3 horas pico de sol al día. El terreno plano proporciona una exposición solar consistente. La ubicación en el Pasillo del Granizo (Hail Alley) requiere paneles clasificados para granizo.' },
    ],
  },

  // Bexar County cities
  'san-antonio': {
    localNote: 'San Antonio es la séptima ciudad más grande de los Estados Unidos, con un clima cálido y una demanda de enfriamiento muy alta en verano. CPS Energy es una empresa de servicios públicos municipal que establece sus propias políticas solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en San Antonio?', a: 'Sí. City of San Antonio Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta y gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en San Antonio?', a: 'Sí. Los veranos calurosos de San Antonio crean costos de enfriamiento muy altos. La energía solar compensa directamente la demanda de aire acondicionado. El respaldo de batería proporciona resiliencia durante tormentas invernales y eventos de calor en verano. CPS Energy tiene su propio programa de recompra solar: confirme las tarifas actuales con CPS Energy.' },
      { q: '¿Cuánto sol recibe San Antonio para energía solar?', a: 'San Antonio promedia aproximadamente 5.5 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción durante la larga temporada de enfriamiento de verano.' },
    ],
  },
  'live-oak': {
    localNote: 'Live Oak es un suburbio al noreste de San Antonio con veranos calurosos y alta demanda de enfriamiento. CPS Energy proporciona energía municipal con sus propias políticas solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Live Oak, TX?', a: 'Sí. El Departamento de Construcción de la Ciudad de Live Oak maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Live Oak?', a: 'Sí. Los veranos calurosos de Live Oak generan altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia ante tormentas. CPS Energy establece sus propias tarifas de recompra solar: confirme los programas actuales.' },
      { q: '¿Cómo funciona la energía solar en el clima de Live Oak?', a: 'Live Oak promedia aproximadamente 5.5 horas pico de sol al día. La producción solar es fuerte, con pico de producción durante la larga temporada de enfriamiento de verano.' },
    ],
  },

  // Travis County cities
  'austin': {
    localNote: 'Austin es la capital del estado y un centro tecnológico, con un clima cálido y alta demanda de enfriamiento en verano. Austin Energy tiene un programa solar bien establecido con tarifas de recompra competitivas.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Austin?', a: 'Sí. El Departamento de Servicios de Desarrollo de la Ciudad de Austin maneja los permisos solares. Austin tiene un proceso de permisos solares simplificado. El plazo típico es de 2 a 6 semanas. Su instalador gestiona la aplicación.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Austin?', a: 'Sí. Los veranos calurosos de Austin crean costos de enfriamiento muy altos. La energía solar compensa directamente la demanda de aire acondicionado. El respaldo de batería proporciona resiliencia durante tormentas invernales y eventos de calor en verano. Austin Energy tiene un programa de Valor de la Energía Solar: confirme las tarifas de recompra actuales.' },
      { q: '¿Cuánto sol recibe Austin para energía solar?', a: 'Austin promedia aproximadamente 5.4 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción durante el verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },
  'pflugerville': {
    localNote: 'Pflugerville es un suburbio en rápido crecimiento al noreste de Austin, con casas modernas y amplio espacio en el techo para energía solar. Austin Energy proporciona energía municipal con programas solares establecidos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Pflugerville?', a: 'Sí. El Departamento de Construcción y Normas de la Ciudad de Pflugerville maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Pflugerville?', a: 'Sí. Los veranos calurosos de Pflugerville generan altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia ante tormentas. El programa de Valor de la Energía Solar de Austin Energy ofrece tarifas de recompra competitivas.' },
      { q: '¿Cómo funciona la energía solar en el clima de Pflugerville?', a: 'Pflugerville promedia aproximadamente 5.4 horas pico de sol al día. La producción solar es fuerte, con pico de producción durante la larga temporada de enfriamiento de verano.' },
    ],
  },

  // Collin County cities
  'plano': {
    localNote: 'Plano es un importante suburbio de Dallas con veranos calurosos y una ubicación en el Pasillo del Granizo (Hail Alley). Se requieren equipos solares clasificados para granizo. Muchas casas modernas tienen techos grandes ideales para energía solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Plano?', a: 'Sí. City of Plano Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta y gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Plano?', a: 'Sí. Plano tiene veranos calurosos con altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia durante tormentas invernales y eventos de calor en verano. Plano está en el Pasillo del Granizo (Hail Alley): los paneles clasificados para granizo son esenciales. Usted elige su REP, así que busque tarifas de exportación solar competitivas.' },
      { q: '¿Cuánto sol recibe Plano para energía solar?', a: 'Plano promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción en verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },
  'frisco': {
    localNote: 'Frisco es un suburbio de Dallas en rápido crecimiento con casas modernas y techos grandes ideales para energía solar. Los veranos calurosos y la ubicación en el Pasillo del Granizo requieren equipos clasificados para granizo.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Frisco?', a: 'Sí. El Departamento de Inspección de Edificios de la Ciudad de Frisco maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Frisco?', a: 'Sí. Los veranos calurosos de Frisco crean altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia ante tormentas. Usted elige su REP: busque buenas tarifas de recompra solar. Se requieren equipos clasificados para granizo.' },
      { q: '¿Cómo funciona la energía solar en el clima de Frisco?', a: 'Frisco promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte, con pico de producción durante el verano. La ubicación en el Pasillo del Granizo requiere paneles clasificados para granizo.' },
    ],
  },
  'mckinney': {
    localNote: 'McKinney es la sede del condado de Collin, con veranos calurosos y alta demanda de enfriamiento. El mercado de energía desregulado da a los residentes la opción de REP para tarifas de recompra solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en McKinney?', a: 'Sí. La División de Inspección de Edificios de la Ciudad de McKinney maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en McKinney?', a: 'Sí. McKinney tiene veranos calurosos con alta demanda de enfriamiento. La energía solar compensa los costos de aire acondicionado, y el respaldo de batería proporciona resiliencia durante tormentas. Usted elige su REP en el mercado desregulado: busque tarifas de exportación solar competitivas.' },
      { q: '¿Cuánto sol recibe McKinney para energía solar?', a: 'McKinney promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte durante todo el año. McKinney está en el Pasillo del Granizo (Hail Alley): se requieren equipos clasificados para granizo.' },
    ],
  },

  // Denton County cities
  'denton': {
    localNote: 'Denton opera su propia empresa de servicios públicos eléctricos municipal (Denton Municipal Electric), por lo que los residentes no eligen un REP. La ciudad establece sus propias tarifas y políticas solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Denton?', a: 'Sí. City of Denton Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta y gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Denton?', a: 'Sí. Denton tiene veranos calurosos con altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia durante tormentas invernales y eventos de calor en verano. Denton Municipal Electric establece sus propias tarifas de recompra solar: confirme los programas actuales con DME. Se requieren equipos clasificados para granizo.' },
      { q: '¿Cuánto sol recibe Denton para energía solar?', a: 'Denton promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción en verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },
  'lewisville': {
    localNote: 'Lewisville es un suburbio de Dallas-Fort Worth con veranos calurosos y ubicación en el Pasillo del Granizo. El mercado de energía desregulado da a los residentes la opción de REP para tarifas de recompra solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Lewisville?', a: 'Sí. La División de Inspección de Edificios de la Ciudad de Lewisville maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Lewisville?', a: 'Sí. Los veranos calurosos de Lewisville crean altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia ante tormentas. Usted elige su REP: busque tarifas de exportación solar competitivas. Se requieren equipos clasificados para granizo.' },
      { q: '¿Cómo funciona la energía solar en el clima de Lewisville?', a: 'Lewisville promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte, con pico de producción durante el verano. La ubicación en el Pasillo del Granizo requiere paneles clasificados para granizo.' },
    ],
  },
  'flower-mound': {
    localNote: 'Flower Mound es un suburbio próspero de Dallas-Fort Worth con casas modernas y techos grandes. Los veranos calurosos y la ubicación en el Pasillo del Granizo requieren equipos solares clasificados para granizo.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Flower Mound?', a: 'Sí. El Departamento de Inspección de Edificios de la Ciudad de Flower Mound maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Flower Mound?', a: 'Sí. Flower Mound tiene veranos calurosos con alta demanda de enfriamiento. La energía solar compensa los costos de aire acondicionado, y el respaldo de batería proporciona resiliencia durante tormentas. Usted elige su REP en el mercado desregulado: busque buenas tarifas de recompra solar.' },
      { q: '¿Cuánto sol recibe Flower Mound para energía solar?', a: 'Flower Mound promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte durante todo el año. La ubicación en el Pasillo del Granizo requiere equipos clasificados para granizo.' },
    ],
  },

  // Fort Bend County cities
  'sugar-land': {
    localNote: 'Sugar Land es un suburbio próspero de Houston con casas modernas y techos grandes. Los veranos calurosos y húmedos y el riesgo de huracanes hacen que el respaldo de batería sea especialmente valioso.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Sugar Land?', a: 'Sí. City of Sugar Land Permitting maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta y gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Sugar Land?', a: 'Sí. Sugar Land tiene veranos calurosos y húmedos con altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia crítica durante huracanes y apagones de varios días. Usted elige su REP: busque tarifas de exportación solar competitivas.' },
      { q: '¿Cuánto sol recibe Sugar Land para energía solar?', a: 'Sugar Land promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción en verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },
  'missouri-city': {
    localNote: 'Missouri City es un suburbio de Houston con veranos calurosos y húmedos y exposición a huracanes. El mercado de energía desregulado da a los residentes la opción de REP para tarifas de recompra solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Missouri City?', a: 'Sí. El Departamento de Inspección de Edificios de la Ciudad de Missouri City maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Missouri City?', a: 'Sí. Los veranos calurosos de Missouri City crean altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia ante huracanes. Usted elige su REP: busque buenas tarifas de recompra solar.' },
      { q: '¿Cómo funciona la energía solar en el clima húmedo de Missouri City?', a: 'Missouri City promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte a pesar de la humedad, con pico de producción durante el verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },
  'rosenberg': {
    localNote: 'Rosenberg es una ciudad del condado de Fort Bend al oeste de Sugar Land, con veranos calurosos y húmedos y terreno plano ideal para instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Rosenberg?', a: 'Sí. La División de Inspección de Edificios de la Ciudad de Rosenberg maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Rosenberg?', a: 'Sí. Rosenberg tiene veranos calurosos con alta demanda de enfriamiento. La energía solar compensa los costos de aire acondicionado, y el respaldo de batería proporciona resiliencia ante tormentas. Usted elige su REP en el mercado desregulado: busque tarifas de exportación solar competitivas.' },
      { q: '¿Cuánto sol recibe Rosenberg para energía solar?', a: 'Rosenberg promedia aproximadamente 5.3 horas pico de sol al día. El terreno plano proporciona una exposición solar consistente, con pico de producción durante el verano.' },
    ],
  },

  // El Paso County cities
  'el-paso': {
    localNote: 'El Paso es la ciudad más occidental de Texas, con un potencial solar excepcional debido al clima de desierto alto y la cobertura de nubes mínima. La alta elevación y la baja humedad aumentan la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en El Paso?', a: 'Sí. City of El Paso Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta y gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en El Paso?', a: 'Sí. El Paso tiene un potencial solar excepcional -- entre los mejores de Texas con aproximadamente 6.2 horas pico de sol al día. La alta demanda de enfriamiento en verano hace que la energía solar sea muy valiosa para compensar los costos de aire acondicionado. El respaldo de batería proporciona resiliencia durante eventos de la red. El Paso Electric establece sus propias tarifas de recompra solar: confirme los programas actuales.' },
      { q: '¿Cuánto sol recibe El Paso para energía solar?', a: 'El Paso promedia aproximadamente 6.2 horas pico de sol al día -- entre las más altas de Texas. El clima de desierto alto, la gran elevación y la cobertura de nubes mínima crean una producción solar excepcional durante todo el año.' },
    ],
  },
  'socorro': {
    localNote: 'Socorro es un suburbio de El Paso en el desierto alto, con un potencial solar excepcional y cobertura de nubes mínima. El terreno plano y los techos sin obstrucciones son ideales para instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Socorro?', a: 'Sí. El Departamento de Construcción de la Ciudad de Socorro maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Socorro?', a: 'Sí. Socorro tiene un potencial solar excepcional -- entre los mejores de Texas. La alta demanda de enfriamiento en verano hace que la energía solar sea muy valiosa. El respaldo de batería proporciona resiliencia de la red. El Paso Electric establece las tarifas de recompra solar: confirme los programas actuales.' },
      { q: '¿Cómo funciona la energía solar en el clima de desierto alto de Socorro?', a: 'Socorro promedia aproximadamente 6.2 horas pico de sol al día. El clima de desierto alto, la gran elevación y la cobertura de nubes mínima crean una producción solar excepcional durante todo el año.' },
    ],
  },

  // Montgomery County cities
  'the-woodlands': {
    localNote: 'The Woodlands es una comunidad planificada al norte de Houston, con veranos calurosos y húmedos y abundante cobertura de árboles. Las casas modernas a menudo tienen techos grandes ideales para energía solar, aunque se debe evaluar la sombra de los árboles.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en The Woodlands?', a: 'Sí. City of The Woodlands Permitting maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta y gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en The Woodlands?', a: 'Sí. The Woodlands tiene veranos calurosos y húmedos con altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia crítica durante huracanes y apagones de varios días. La sombra de los árboles debe evaluarse: su instalador evaluará el potencial solar de su techo. Usted elige su REP: busque tarifas de exportación solar competitivas.' },
      { q: '¿Cuánto sol recibe The Woodlands para energía solar?', a: 'The Woodlands promedia aproximadamente 5.3 horas pico de sol al día. La cobertura de árboles puede crear sombra en algunas áreas: una evaluación del sitio determinará el potencial solar específico de su techo.' },
    ],
  },
  'conroe': {
    localNote: 'Conroe es la sede del condado de Montgomery, con veranos calurosos y húmedos y alta demanda de enfriamiento. El mercado de energía desregulado da a los residentes la opción de REP para tarifas de recompra solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Conroe?', a: 'Sí. El Departamento de Inspección de Edificios de la Ciudad de Conroe maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Conroe?', a: 'Sí. Los veranos calurosos de Conroe crean altos costos de enfriamiento. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia ante huracanes y tormentas. Usted elige su REP: busque buenas tarifas de recompra solar.' },
      { q: '¿Cómo funciona la energía solar en el clima húmedo de Conroe?', a: 'Conroe promedia aproximadamente 5.3 horas pico de sol al día. La producción solar es fuerte a pesar de la humedad, con pico de producción durante el verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },

  // Williamson County cities
  'round-rock': {
    localNote: 'Round Rock es un suburbio de Austin en rápido crecimiento con veranos calurosos y alta demanda de enfriamiento. Austin Energy proporciona energía municipal con programas solares establecidos y tarifas de recompra competitivas.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Round Rock?', a: 'Sí. City of Round Rock Building Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta y gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Round Rock?', a: 'Sí. Round Rock tiene veranos calurosos con costos de enfriamiento muy altos. La energía solar compensa directamente la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia durante tormentas invernales y eventos de calor en verano. Austin Energy tiene un programa de Valor de la Energía Solar: confirme las tarifas de recompra actuales.' },
      { q: '¿Cuánto sol recibe Round Rock para energía solar?', a: 'Round Rock promedia aproximadamente 5.4 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción durante el verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },
  'georgetown': {
    localNote: 'Georgetown opera su propia empresa de servicios públicos eléctricos municipal (Georgetown Utility Systems), con un compromiso con la energía renovable. La ciudad establece sus propias tarifas y políticas solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Georgetown?', a: 'Sí. El Departamento de Inspección de Edificios de la Ciudad de Georgetown maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Georgetown?', a: 'Sí. Georgetown tiene veranos calurosos con alta demanda de enfriamiento. La energía solar compensa los costos de aire acondicionado, y el respaldo de batería proporciona resiliencia ante tormentas. Georgetown Utility Systems establece sus propias tarifas de recompra solar: confirme los programas actuales.' },
      { q: '¿Cómo funciona la energía solar en el clima de Georgetown?', a: 'Georgetown promedia aproximadamente 5.4 horas pico de sol al día. La producción solar es fuerte, con pico de producción durante la larga temporada de enfriamiento de verano.' },
    ],
  },
  'cedar-park': {
    localNote: 'Cedar Park es un suburbio al noroeste de Austin con veranos calurosos y alta demanda de enfriamiento. Servicio de servicios públicos mixto: algunas áreas tienen Austin Energy (municipal), otras están desreguladas (elija su REP).',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Cedar Park?', a: 'Sí. La División de Inspección de Edificios de la Ciudad de Cedar Park maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Cedar Park?', a: 'Sí. Cedar Park tiene veranos calurosos con alta demanda de enfriamiento. La energía solar compensa los costos de aire acondicionado, y el respaldo de batería proporciona resiliencia durante tormentas. La empresa de servicios públicos varía según la ubicación: las áreas de Austin Energy tienen Valor de la Energía Solar, las áreas desreguladas permiten la elección de REP para tarifas de recompra solar.' },
      { q: '¿Cuánto sol recibe Cedar Park para energía solar?', a: 'Cedar Park promedia aproximadamente 5.4 horas pico de sol al día. La producción solar es fuerte durante todo el año, con pico de producción durante el verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },

  // Hidalgo County cities (Rio Grande Valley -- bilingual content)
  'mcallen': {
    localNote: 'McAllen es la ciudad más grande del Valle del Río Grande, con un clima subtropical y veranos muy calurosos. La alta demanda de enfriamiento hace que la energía solar sea especialmente valiosa para compensar los costos de aire acondicionado.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en McAllen? / Do I need a permit for solar in McAllen?', a: 'Sí / Yes. City of McAllen Building and Standards maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador presenta y gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en McAllen? / Is solar + battery storage worth it in McAllen?', a: 'Sí / Yes. McAllen tiene veranos muy calurosos con costos de enfriamiento extremadamente altos. La energía solar compensa directamente la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia durante huracanes y apagones de varios días. Usted elige su REP: busque tarifas de exportación solar competitivas.' },
      { q: '¿Cuánto sol recibe McAllen para energía solar? / How much sun does McAllen get for solar?', a: 'McAllen promedia aproximadamente 5.6 horas pico de sol al día. El Valle del Río Grande tiene una excelente producción solar durante todo el año, con una producción muy alta durante la larga temporada de enfriamiento de verano.' },
    ],
  },
  'edinburg': {
    localNote: 'Edinburg es la sede del condado de Hidalgo, con un clima subtropical y veranos muy calurosos. El mercado de energía desregulado da a los residentes la opción de REP para tarifas de recompra solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Edinburg? / Do I need a permit for solar in Edinburg?', a: 'Sí / Yes. El Departamento de Construcción de la Ciudad de Edinburg maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su contratista gestiona el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial en Edinburg? / Is residential solar worth it in Edinburg?', a: 'Sí / Yes. Los veranos muy calurosos de Edinburg crean costos de enfriamiento extremadamente altos. La energía solar compensa la demanda de aire acondicionado, y el respaldo de batería proporciona resiliencia ante tormentas. Usted elige su REP: busque buenas tarifas de recompra solar.' },
      { q: '¿Cómo funciona la energía solar en el clima de Edinburg? / How does solar perform in Edinburg\'s climate?', a: 'Edinburg promedia aproximadamente 5.6 horas pico de sol al día. La producción solar es excelente, con una producción muy alta durante la larga temporada de enfriamiento de verano.' },
    ],
  },
  'pharr': {
    localNote: 'Pharr es una ciudad del Valle del Río Grande con un clima subtropical y veranos muy calurosos. El terreno plano y la alta exposición al sol hacen que las instalaciones solares sean altamente productivas.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Pharr? / Do I need a permit for solar in Pharr?', a: 'Sí / Yes. La División de Inspección de Edificios de la Ciudad de Pharr maneja los permisos solares. El plazo típico es de 2 a 6 semanas. Su instalador gestiona la aplicación de permisos.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Pharr? / Is solar + battery storage worth it in Pharr?', a: 'Sí / Yes. Pharr tiene veranos muy calurosos con una demanda de enfriamiento extremadamente alta. La energía solar compensa los costos de aire acondicionado, y el respaldo de batería proporciona resiliencia durante tormentas. Usted elige su REP en el mercado desregulado: busque tarifas de exportación solar competitivas.' },
      { q: '¿Cuánto sol recibe Pharr para energía solar? / How much sun does Pharr get for solar?', a: 'Pharr promedia aproximadamente 5.6 horas pico de sol al día. El Valle del Río Grande tiene una excelente producción solar, con una producción muy alta durante el verano cuando la demanda de enfriamiento es más alta.' },
    ],
  },
};
