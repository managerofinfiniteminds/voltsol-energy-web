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
  'cameron-county': {
    utilityRateNote: 'El condado de Cameron está en el mercado desregulado de ERCOT. AEP Texas entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.11-$0.15/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Brownsville, Harlingen, y otras áreas incorporadas en el condado de Cameron tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos muy calurosos y húmedos con una demanda de enfriamiento extremadamente alta. El condado de Cameron se encuentra en la punta sur del Valle del Río Grande, con un clima subtropical, veranos largos y calurosos, e inviernos suaves. El riesgo de huracanes y tormentas tropicales del Golfo de México requiere equipos clasificados para viento.',
    countyContext: 'El condado de Cameron es el condado más al sur de Texas, centrado en Brownsville y Harlingen a lo largo del Río Grande y la Costa del Golfo. El clima subtropical crea cargas de enfriamiento de verano muy altas, haciendo que la energía solar sea especialmente valiosa para compensar los costos de aire acondicionado. La preparación para huracanes es importante: los sistemas solares + batería proporcionan energía de respaldo durante apagones de varios días.',
  },
  'nueces-county': {
    utilityRateNote: 'El condado de Nueces está en el mercado desregulado de ERCOT. AEP Texas entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Corpus Christi, Robstown, y otras áreas incorporadas en el condado de Nueces tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con fuertes vientos costeros del Golfo de México. Alta demanda de enfriamiento de mayo a septiembre. El riesgo de huracanes y tormentas tropicales requiere equipos clasificados para viento, y el aire salado costero requiere herrajes resistentes a la corrosión.',
    countyContext: 'El condado de Nueces está centrado en Corpus Christi, una importante ciudad portuaria de la Costa del Golfo en el Coastal Bend. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano, y la exposición costera significa que la preparación para huracanes es una prioridad. Los sistemas solares + batería proporcionan energía de respaldo durante apagones de varios días después de tormentas.',
  },
  'bell-county': {
    utilityRateNote: 'El condado de Bell está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Killeen, Temple, Belton, y otras áreas incorporadas en el condado de Bell tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos con alta demanda de enfriamiento e inviernos suaves. El condado de Bell se encuentra a lo largo del corredor I-35 entre Austin y Dallas-Fort Worth. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días en todo el estado. El respaldo de batería es valioso para la resiliencia de la red.',
    countyContext: 'El condado de Bell está centrado en Killeen y Temple, anclado por Fort Cavazos (antes Fort Hood) y el corredor I-35. El clima cálido impulsa altas cargas de enfriamiento en verano, haciendo que la energía solar sea valiosa para compensar los costos de aire acondicionado. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'lubbock-county': {
    utilityRateNote: 'El condado de Lubbock tiene una estructura de servicios públicos en transición. Lubbock Power & Light (LP&L), la empresa de estilo municipal de larga data de la ciudad, se integró a la red ERCOT en 2021; confirme la tarifa actual y el estado de elección minorista directamente con LP&L. Las áreas servidas por Oncor como TDU solo de cables siguen el modelo estándar desregulado de ERCOT, donde usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Rango ilustrativo de tarifas residenciales: $0.11-$0.15/kWh según la empresa de servicios públicos y la elección de REP/plan.',
    permitOfficeNote: 'Lubbock, Wolfforth, y otras áreas incorporadas en el condado de Lubbock tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y secos con baja humedad e inviernos fríos. El condado de Lubbock se encuentra en las South Plains a gran elevación, con fuertes recursos eólicos y altas horas pico de sol. Las tormentas de granizo severas y los tornados ocasionales requieren equipos clasificados para granizo.',
    countyContext: 'El condado de Lubbock está centrado en Lubbock, el centro de la región de las South Plains. El clima semiárido y la gran elevación proporcionan una fuerte producción solar. Lubbock Power & Light (LP&L) se integró al mercado de ERCOT en 2021 -- la estructura de servicios públicos y las opciones de elección minorista continúan evolucionando, así que confirme el estado actual con su empresa de servicios públicos. Las áreas servidas por Oncor como TDU siguen el modelo estándar de elección de REP desregulado de ERCOT.',
  },
  'webb-county': {
    utilityRateNote: 'El condado de Webb está en el mercado desregulado de ERCOT. AEP Texas entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.11-$0.15/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Laredo, El Cenizo, y otras áreas incorporadas en el condado de Webb tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos muy calurosos con baja humedad e inviernos suaves. El condado de Webb se encuentra a lo largo de la frontera del Río Grande con México, con un alto potencial solar y cobertura de nubes mínima. La alta demanda de enfriamiento se extiende de abril a octubre.',
    countyContext: 'El condado de Webb está centrado en Laredo, una importante ciudad fronteriza a lo largo del Río Grande. El clima semiárido proporciona una producción solar fuerte y constante con cobertura de nubes mínima, haciendo que la energía solar sea especialmente valiosa para compensar los muy altos costos de enfriamiento en verano de la zona.',
  },
  'brazoria-county': {
    utilityRateNote: 'El condado de Brazoria está en el mercado desregulado de ERCOT. CenterPoint Energy entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Pearland, Lake Jackson, Angleton, y otras áreas incorporadas en el condado de Brazoria tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con frecuentes tormentas eléctricas por la tarde. Alta demanda de enfriamiento de mayo a septiembre. El riesgo de huracanes y tormentas tropicales requiere equipos clasificados para viento, y la humedad costera requiere herrajes resistentes a la corrosión. El respaldo de batería es valioso para apagones de varios días después de tormentas.',
    countyContext: 'El condado de Brazoria es el área metropolitana sur de Houston, centrada en Pearland, Lake Jackson y Angleton a lo largo de la Costa del Golfo. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano, y la preparación para huracanes es una prioridad. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'galveston-county': {
    utilityRateNote: 'El condado de Galveston está en el mercado desregulado de ERCOT. CenterPoint Energy entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Galveston, League City, Texas City, y otras áreas incorporadas en el condado de Galveston tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con fuertes brisas del Golfo. Alta demanda de enfriamiento de mayo a septiembre. El riesgo de huracanes y tormentas tropicales es significativo para este condado costero e insular, requiriendo equipos clasificados para viento y herrajes resistentes a la corrosión por la exposición al aire salado.',
    countyContext: 'El condado de Galveston abarca la Isla de Galveston y las ciudades continentales de League City y Texas City a lo largo de la Bahía de Galveston. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano, y la preparación para huracanes es especialmente importante para este condado costero. Los sistemas solares + batería proporcionan energía de respaldo crítica durante apagones de varios días después de tormentas.',
  },
  'jefferson-county': {
    utilityRateNote: 'El condado de Jefferson recibe servicio de Entergy Texas, una empresa de servicios públicos regulada -- aquí no hay elección de Proveedor de Electricidad Minorista (REP), a diferencia de la mayor parte de Texas. La empresa establece sus propias tarifas y políticas de interconexión solar -- confirme los términos de recompra solar actuales directamente con la empresa. Tarifa residencial ilustrativa: ~$0.13/kWh.',
    permitOfficeNote: 'Beaumont, Port Arthur, Nederland, y otras áreas incorporadas en el condado de Jefferson tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con frecuentes tormentas eléctricas por la tarde y una demanda de enfriamiento muy alta. El condado de Jefferson se encuentra en el borde oriental de la Costa del Golfo de Texas cerca de la frontera con Luisiana. El riesgo de huracanes y tormentas tropicales requiere equipos clasificados para viento. El respaldo de batería es valioso para apagones de varios días después de tormentas.',
    countyContext: 'El condado de Jefferson está centrado en Beaumont y Port Arthur, una región industrial de la Costa del Golfo cerca de la frontera con Luisiana. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. El condado de Jefferson recibe servicio de Entergy Texas, una empresa de servicios públicos regulada: aquí no hay elección de Proveedor de Electricidad Minorista, a diferencia de la mayor parte de Texas. La preparación para huracanes es una prioridad importante para esta región costera con alta densidad de refinerías.',
  },
  'smith-county': {
    utilityRateNote: 'El condado de Smith está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Tyler, Whitehouse, y otras áreas incorporadas en el condado de Smith tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Smith se encuentra en el East Texas Piney Woods, con más cobertura de árboles y nubosidad que los condados de pradera abierta, lo que puede afectar la ubicación solar. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días en todo el estado.',
    countyContext: 'El condado de Smith está centrado en Tyler, un centro regional en el East Texas Piney Woods conocido como la "Capital de la Rosa de América". El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. El terreno boscoso significa que se debe evaluar la sombra en cada techo. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'brazos-county': {
    utilityRateNote: 'El condado de Brazos está en el mercado desregulado de ERCOT. Según la ubicación, Oncor o Texas-New Mexico Power (TNMP) entrega energía como TDU solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según el área de TDU y la elección de REP/plan.',
    permitOfficeNote: 'College Station, Bryan, y otras áreas incorporadas en el condado de Brazos tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos con alta demanda de enfriamiento e inviernos suaves. El condado de Brazos se encuentra a lo largo del Río Brazos en el centro de Texas, sede de la Universidad Texas A&M. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días en todo el estado.',
    countyContext: 'El condado de Brazos está centrado en College Station y Bryan, sede de la Universidad Texas A&M. El clima cálido impulsa altas cargas de enfriamiento en verano. Dentro de los límites de la ciudad, College Station y Bryan tienen sus propias empresas de servicios públicos municipales, mientras que las áreas circundantes en el mercado desregulado de ERCOT son atendidas por Oncor o Texas-New Mexico Power (TNMP) como TDU, donde los residentes eligen su propio Proveedor de Electricidad Minorista (REP). La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'mclennan-county': {
    utilityRateNote: 'El condado de McLennan está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Waco, Woodway, Hewitt, y otras áreas incorporadas en el condado de McLennan tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos con alta demanda de enfriamiento e inviernos suaves. El condado de McLennan se encuentra a lo largo del Río Brazos en el centro de Texas. Las tormentas de granizo severas en primavera son comunes. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días en todo el estado.',
    countyContext: 'El condado de McLennan está centrado en Waco, una ciudad en crecimiento del centro de Texas a lo largo del corredor I-35. El clima cálido impulsa altas cargas de enfriamiento en verano, y la energía solar ayuda a compensar los costos de aire acondicionado. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'hays-county': {
    utilityRateNote: 'El condado de Hays tiene servicio de servicios públicos mixto. Gran parte del condado recibe servicio de Pedernales Electric Cooperative (PEC), una cooperativa eléctrica propiedad de sus miembros que establece sus propias tarifas y políticas de interconexión solar: confirme los términos de recompra solar actuales con PEC directamente. Otras áreas están en el mercado desregulado de ERCOT servido por Oncor (TDU), donde los residentes eligen su propio Proveedor de Electricidad Minorista (REP). Rango ilustrativo de tarifas residenciales: $0.12-$0.15/kWh según la empresa de servicios públicos y la elección de REP/plan.',
    permitOfficeNote: 'San Marcos, Kyle, Buda, y otras áreas incorporadas en el condado de Hays tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos con alta demanda de enfriamiento. El condado de Hays se encuentra en el borde del Hill Country de Texas entre Austin y San Antonio, con veranos calurosos y secos e inviernos suaves. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días en todo el estado.',
    countyContext: 'El condado de Hays es el corredor de rápido crecimiento entre Austin y San Antonio, centrado en San Marcos, Kyle y Buda. Gran parte del condado recibe servicio de Pedernales Electric Cooperative (PEC), una cooperativa eléctrica propiedad de sus miembros que establece sus propias tarifas y políticas de interconexión solar: los residentes en el territorio de PEC no eligen un REP. Otras áreas reciben servicio de Oncor como TDU en el mercado desregulado de ERCOT. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'ellis-county': {
    utilityRateNote: 'El condado de Ellis está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Waxahachie, Midlothian, Ennis, y otras áreas incorporadas en el condado de Ellis tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Ellis está en el "Pasillo del Granizo" (Hail Alley): las tormentas severas de granizo en primavera/verano son comunes, requiriendo equipos solares clasificados para granizo. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días.',
    countyContext: 'El condado de Ellis es el área metropolitana sur de Dallas-Fort Worth, centrada en Waxahachie, Midlothian y Ennis. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. Ubicado en el "Pasillo del Granizo" (Hail Alley), los equipos solares clasificados para granizo son esenciales. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'guadalupe-county': {
    utilityRateNote: 'El condado de Guadalupe tiene servicio de servicios públicos mixto. Gran parte del condado, incluyendo áreas rurales y algunas suburbanas, recibe servicio de Guadalupe Valley Electric Cooperative (GVEC), una cooperativa propiedad de sus miembros que establece sus propias tarifas y políticas de interconexión solar: confirme los términos de recompra solar actuales con GVEC directamente. Otras áreas están en el mercado desregulado de ERCOT servido por AEP Texas (TDU), donde los residentes eligen su propio Proveedor de Electricidad Minorista (REP). Rango ilustrativo de tarifas residenciales: $0.12-$0.15/kWh según la empresa de servicios públicos y la elección de REP/plan.',
    permitOfficeNote: 'Seguin, Schertz, Cibolo, y otras áreas incorporadas en el condado de Guadalupe tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Guadalupe se encuentra entre San Antonio y Austin. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días en todo el estado.',
    countyContext: 'El condado de Guadalupe está centrado en Seguin, Schertz y Cibolo entre San Antonio y Austin. Gran parte del condado recibe servicio de Guadalupe Valley Electric Cooperative (GVEC), una cooperativa propiedad de sus miembros que establece sus propias tarifas y políticas solares: los residentes en el territorio de GVEC no eligen un REP. Otras áreas están en el mercado desregulado de ERCOT servido por AEP Texas (TDU). La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'comal-county': {
    utilityRateNote: 'El condado de Comal tiene servicio de servicios públicos mixto. Dentro de los límites de la ciudad de New Braunfels, New Braunfels Utilities (NBU) es una empresa de servicios públicos de propiedad municipal que establece sus propias tarifas y políticas de interconexión solar: confirme los términos de recompra solar actuales con NBU directamente. Otras áreas del condado están en el mercado desregulado de ERCOT, donde el TDU varía según la ubicación y los residentes eligen su propio Proveedor de Electricidad Minorista (REP). Rango ilustrativo de tarifas residenciales: $0.12-$0.15/kWh según la empresa de servicios públicos y la elección de REP/plan.',
    permitOfficeNote: 'New Braunfels, Bulverde, y otras áreas incorporadas en el condado de Comal tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos con alta demanda de enfriamiento. El condado de Comal se encuentra en el borde del Hill Country de Texas entre San Antonio y Austin. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días en todo el estado.',
    countyContext: 'El condado de Comal está centrado en New Braunfels, una ciudad del Hill Country en rápido crecimiento entre San Antonio y Austin. Dentro de los límites de la ciudad de New Braunfels, New Braunfels Utilities (NBU) es una empresa de servicios públicos de propiedad municipal que establece sus propias tarifas y políticas solares: los residentes no eligen un REP. Otras áreas del condado reciben servicio de varios TDU desregulados de ERCOT, donde los residentes sí eligen su propio Proveedor de Electricidad Minorista (REP). La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'johnson-county': {
    utilityRateNote: 'El condado de Johnson está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Cleburne, Burleson, y otras áreas incorporadas en el condado de Johnson tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Johnson está en el "Pasillo del Granizo" (Hail Alley): las tormentas severas de granizo en primavera/verano son comunes, requiriendo equipos solares clasificados para granizo. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días.',
    countyContext: 'El condado de Johnson es el área metropolitana sur de Fort Worth, centrada en Cleburne y Burleson. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. Ubicado en el "Pasillo del Granizo" (Hail Alley), los equipos solares clasificados para granizo son esenciales. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'kaufman-county': {
    utilityRateNote: 'El condado de Kaufman está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Terrell, Forney, Kaufman, y otras áreas incorporadas en el condado de Kaufman tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Kaufman está en el "Pasillo del Granizo" (Hail Alley): las tormentas severas de granizo en primavera/verano son comunes, requiriendo equipos solares clasificados para granizo. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días.',
    countyContext: 'El condado de Kaufman es el área metropolitana este de Dallas, centrada en Terrell, Forney y Kaufman. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. Ubicado en el "Pasillo del Granizo" (Hail Alley), los equipos solares clasificados para granizo son esenciales. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'parker-county': {
    utilityRateNote: 'El condado de Parker está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Weatherford, Aledo, y otras áreas incorporadas en el condado de Parker tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Parker está en el "Pasillo del Granizo" (Hail Alley): las tormentas severas de granizo en primavera/verano son comunes, requiriendo equipos solares clasificados para granizo. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días.',
    countyContext: 'El condado de Parker es el área metropolitana oeste de Fort Worth, centrada en Weatherford y Aledo. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano. Ubicado en el "Pasillo del Granizo" (Hail Alley), los equipos solares clasificados para granizo son esenciales. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red.',
  },
  'midland-county': {
    utilityRateNote: 'El condado de Midland está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Midland, ciudades cercanas, y otras áreas incorporadas en el condado de Midland tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y secos con baja humedad y altas horas pico de sol. El condado de Midland se encuentra en la Cuenca Pérmica, una de las regiones más soleadas de Texas, con cobertura de nubes mínima durante todo el año. Las condiciones de viento fuerte y polvo requieren herrajes de montaje duraderos.',
    countyContext: 'El condado de Midland está centrado en Midland, un centro de la industria petrolera de la Cuenca Pérmica. El clima semiárido y la gran elevación proporcionan un potencial solar excepcional: entre las horas pico de sol más altas de Texas. La alta demanda de enfriamiento y el sol fuerte y constante hacen que la energía solar sea especialmente productiva aquí.',
  },
  'ector-county': {
    utilityRateNote: 'El condado de Ector está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Odessa, Goldsmith, y otras áreas incorporadas en el condado de Ector tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y secos con baja humedad y altas horas pico de sol. El condado de Ector se encuentra en la Cuenca Pérmica, una de las regiones más soleadas de Texas, con cobertura de nubes mínima durante todo el año. Las condiciones de viento fuerte y polvo requieren herrajes de montaje duraderos.',
    countyContext: 'El condado de Ector está centrado en Odessa, un centro de la industria petrolera de la Cuenca Pérmica. El clima semiárido y la gran elevación proporcionan un potencial solar excepcional: entre las horas pico de sol más altas de Texas. La alta demanda de enfriamiento y el sol fuerte y constante hacen que la energía solar sea especialmente productiva aquí.',
  },
  'randall-county': {
    utilityRateNote: 'El condado de Randall recibe servicio de Xcel Energy (Southwestern Public Service, SPS), una empresa de servicios públicos regulada -- aquí no hay elección de Proveedor de Electricidad Minorista (REP), a diferencia de la mayor parte de Texas. La empresa establece sus propias tarifas y políticas de interconexión solar -- confirme los términos de recompra solar actuales directamente con la empresa. Tarifa residencial ilustrativa: ~$0.12/kWh.',
    permitOfficeNote: 'Canyon, ciudades cercanas, y otras áreas incorporadas en el condado de Randall tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y secos con inviernos fríos y altos recursos eólicos. El condado de Randall se encuentra en las High Plains del Panhandle de Texas, con un excelente potencial solar y cobertura de nubes mínima. El viento fuerte y el granizo ocasional requieren equipos duraderos y clasificados para viento.',
    countyContext: 'El condado de Randall forma parte del área metropolitana de Amarillo en las High Plains del Panhandle de Texas. El clima semiárido y la gran elevación proporcionan un excelente potencial solar, entre los mejores de Texas. El condado de Randall recibe servicio de Xcel Energy (Southwestern Public Service, SPS), una empresa de servicios públicos regulada en la red SPP: aquí no hay elección de Proveedor de Electricidad Minorista, a diferencia de la mayor parte de Texas.',
  },
  'potter-county': {
    utilityRateNote: 'El condado de Potter recibe servicio de Xcel Energy (Southwestern Public Service, SPS), una empresa de servicios públicos regulada -- aquí no hay elección de Proveedor de Electricidad Minorista (REP), a diferencia de la mayor parte de Texas. La empresa establece sus propias tarifas y políticas de interconexión solar -- confirme los términos de recompra solar actuales directamente con la empresa. Tarifa residencial ilustrativa: ~$0.12/kWh.',
    permitOfficeNote: 'Amarillo, ciudades cercanas, y otras áreas incorporadas en el condado de Potter tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y secos con inviernos fríos y altos recursos eólicos. El condado de Potter se encuentra en las High Plains del Panhandle de Texas, con un excelente potencial solar y cobertura de nubes mínima. El viento fuerte y el granizo ocasional requieren equipos duraderos y clasificados para viento.',
    countyContext: 'El condado de Potter está centrado en Amarillo, la ciudad más grande del Panhandle de Texas. El clima semiárido y la gran elevación proporcionan un excelente potencial solar, entre los mejores de Texas. El condado de Potter recibe servicio de Xcel Energy (Southwestern Public Service, SPS), una empresa de servicios públicos regulada en la red SPP: aquí no hay elección de Proveedor de Electricidad Minorista, a diferencia de la mayor parte de Texas.',
  },
  'taylor-county': {
    utilityRateNote: 'El condado de Taylor está en el mercado desregulado de ERCOT. Según la ubicación, AEP Texas u Oncor entrega energía como TDU solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según el área de TDU y la elección de REP/plan.',
    permitOfficeNote: 'Abilene, Merkel, y otras áreas incorporadas en el condado de Taylor tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y secos con fuertes recursos eólicos e inviernos suaves. El condado de Taylor se encuentra en el centro-oeste de Texas, con altas horas pico de sol y cobertura de nubes mínima. El granizo severo ocasional y el viento requieren equipos duraderos.',
    countyContext: 'El condado de Taylor está centrado en Abilene, el centro del centro-oeste de Texas. El clima semiárido proporciona una producción solar fuerte y constante. El condado de Taylor está en el mercado desregulado de ERCOT, con AEP Texas y Oncor sirviendo como TDU según la ubicación: los residentes eligen su propio Proveedor de Electricidad Minorista (REP) que establece la tarifa de recompra solar.',
  },
  'wichita-county': {
    utilityRateNote: 'El condado de Wichita está en el mercado desregulado de ERCOT. Oncor entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Wichita Falls, Iowa Park, Burkburnett, y otras áreas incorporadas en el condado de Wichita tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos con alta demanda de enfriamiento e inviernos fríos. El condado de Wichita se encuentra en el norte de Texas cerca de la frontera con Oklahoma, con fuertes recursos eólicos y riesgo ocasional de granizo severo y tornados. La tormenta invernal Uri (febrero de 2021) causó apagones de varios días en todo el estado.',
    countyContext: 'El condado de Wichita está centrado en Wichita Falls cerca de la frontera con Oklahoma. El clima cálido impulsa altas cargas de enfriamiento en verano, y la energía solar ayuda a compensar los costos de aire acondicionado. La tormenta invernal Uri subrayó la importancia del respaldo de batería para la resiliencia de la red durante eventos de frío extremo, que son más comunes en esta región del norte.',
  },
  'gregg-county': {
    utilityRateNote: 'El condado de Gregg recibe servicio de AEP Texas North (SWEPCO), una empresa de servicios públicos regulada -- aquí no hay elección de Proveedor de Electricidad Minorista (REP), a diferencia de la mayor parte de Texas. La empresa establece sus propias tarifas y políticas de interconexión solar -- confirme los términos de recompra solar actuales directamente con la empresa. Tarifa residencial ilustrativa: ~$0.13/kWh.',
    permitOfficeNote: 'Longview, Kilgore, y otras áreas incorporadas en el condado de Gregg tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Gregg se encuentra en el East Texas Piney Woods, con más cobertura de árboles y nubosidad que los condados de pradera abierta, lo que puede afectar la ubicación solar. Las tormentas invernales pueden traer frío y hielo a esta región.',
    countyContext: 'El condado de Gregg está centrado en Longview y Kilgore en el East Texas Piney Woods, históricamente vinculado al auge petrolero del este de Texas. El condado de Gregg recibe servicio de Southwestern Electric Power Company (SWEPCO), una empresa de servicios públicos regulada fuera de la red ERCOT: aquí no hay elección de Proveedor de Electricidad Minorista, a diferencia de la mayor parte de Texas. El terreno boscoso significa que se debe evaluar la sombra en cada techo.',
  },
  'tom-green-county': {
    utilityRateNote: 'El condado de Tom Green está en el mercado desregulado de ERCOT. Según la ubicación, AEP Texas u Oncor entrega energía como TDU solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según el área de TDU y la elección de REP/plan.',
    permitOfficeNote: 'San Angelo, ciudades cercanas, y otras áreas incorporadas en el condado de Tom Green tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y secos con fuertes recursos eólicos e inviernos suaves. El condado de Tom Green se encuentra en el oeste de Texas, con altas horas pico de sol y cobertura de nubes mínima. El granizo severo ocasional y el viento requieren equipos duraderos.',
    countyContext: 'El condado de Tom Green está centrado en San Angelo, en el oeste de Texas. El clima semiárido proporciona una producción solar fuerte y constante. El condado de Tom Green está en el mercado desregulado de ERCOT, con AEP Texas y Oncor sirviendo como TDU según la ubicación: los residentes eligen su propio Proveedor de Electricidad Minorista (REP) que establece la tarifa de recompra solar.',
  },
  'victoria-county': {
    utilityRateNote: 'El condado de Victoria está en el mercado desregulado de ERCOT. AEP Texas entrega energía como TDU (Utilidad de Transmisión y Distribución) solo de cables, pero usted elige su propio Proveedor de Electricidad Minorista (REP) que establece su tarifa de recompra solar. Las tarifas de exportación solar varían ampliamente según el REP y el plan: busque un REP con un plan competitivo de recompra solar para maximizar sus ahorros. Rango ilustrativo de tarifas residenciales: $0.12-$0.16/kWh según la elección de REP y plan.',
    permitOfficeNote: 'Victoria, ciudades cercanas, y otras áreas incorporadas en el condado de Victoria tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con frecuentes tormentas eléctricas por la tarde. Alta demanda de enfriamiento de mayo a septiembre. El riesgo de huracanes y tormentas tropicales requiere equipos clasificados para viento.',
    countyContext: 'El condado de Victoria está centrado en Victoria, un centro regional entre Houston, Corpus Christi y San Antonio en el Coastal Bend. El clima cálido y húmedo impulsa altas cargas de enfriamiento en verano, y la preparación para huracanes es una prioridad para esta región cercana a la Costa del Golfo.',
  },
  'angelina-county': {
    utilityRateNote: 'El condado de Angelina recibe servicio de Entergy Texas, una empresa de servicios públicos regulada -- aquí no hay elección de Proveedor de Electricidad Minorista (REP), a diferencia de la mayor parte de Texas. La empresa establece sus propias tarifas y políticas de interconexión solar -- confirme los términos de recompra solar actuales directamente con la empresa. Tarifa residencial ilustrativa: ~$0.13/kWh.',
    permitOfficeNote: 'Lufkin, Diboll, Huntington, y otras áreas incorporadas en el condado de Angelina tienen sus propios departamentos de construcción. Los plazos de permisos varían -- confirme con su jurisdicción local. Su instalador maneja la aplicación.',
    climateZoneDescription: 'Veranos calurosos y húmedos con alta demanda de enfriamiento. El condado de Angelina se encuentra en el East Texas Piney Woods, con más cobertura de árboles y nubosidad que los condados de pradera abierta, lo que puede afectar la ubicación solar. El riesgo ocasional de tormentas severas y tornados requiere equipos duraderos.',
    countyContext: 'El condado de Angelina está centrado en Lufkin en el East Texas Piney Woods. El condado de Angelina recibe servicio de Entergy Texas, una empresa de servicios públicos regulada: aquí no hay elección de Proveedor de Electricidad Minorista, a diferencia de la mayor parte de Texas. El terreno boscoso significa que se debe evaluar la sombra en cada techo.',
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
  'brownsville': {
    localNote: 'Brownsville es la ciudad más grande del condado de Cameron y la ciudad importante más al sur de Texas, con un clima subtropical y veranos muy calurosos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Brownsville?', a: 'Sí. City of Brownsville Building & Standards maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Brownsville?', a: 'La energía solar puede ser una buena opción en Brownsville según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Brownsville para energía solar?', a: 'Brownsville promedia aproximadamente 5.6 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'harlingen': {
    localNote: 'Harlingen es una ciudad hub del Valle del Río Grande con un clima subtropical y veranos muy calurosos. El terreno plano proporciona una exposición solar consistente.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Harlingen?', a: 'Sí. City of Harlingen Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Harlingen?', a: 'La energía solar puede ser una buena opción en Harlingen según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Harlingen para energía solar?', a: 'Harlingen promedia aproximadamente 5.6 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'corpus-christi': {
    localNote: 'Corpus Christi es la ciudad más grande de la Costa del Golfo de Texas, con veranos calurosos y húmedos y fuertes brisas del Golfo. La preparación para huracanes es una prioridad para los propietarios costeros.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Corpus Christi?', a: 'Sí. City of Corpus Christi Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Corpus Christi?', a: 'La energía solar puede ser una buena opción en Corpus Christi según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Corpus Christi para energía solar?', a: 'Corpus Christi promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'robstown': {
    localNote: 'Robstown es una ciudad del condado de Nueces al oeste de Corpus Christi, con veranos calurosos y terreno plano ideal para instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Robstown?', a: 'Sí. City of Robstown Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Robstown?', a: 'La energía solar puede ser una buena opción en Robstown según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Robstown para energía solar?', a: 'Robstown promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'killeen': {
    localNote: 'Killeen es la ciudad más grande del condado de Bell, adyacente a Fort Cavazos, con veranos calurosos y alta demanda de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Killeen?', a: 'Sí. City of Killeen Building Inspections maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Killeen?', a: 'La energía solar puede ser una buena opción en Killeen según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Killeen para energía solar?', a: 'Killeen promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'temple': {
    localNote: 'Temple es una ciudad en crecimiento del centro de Texas con una mezcla de áreas residenciales establecidas y nuevas y alta demanda de enfriamiento en verano.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Temple?', a: 'Sí. City of Temple Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Temple?', a: 'La energía solar puede ser una buena opción en Temple según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Temple para energía solar?', a: 'Temple promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'belton': {
    localNote: 'Belton es la sede del condado de Bell, con veranos calurosos y terreno plano bien adaptado para instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Belton?', a: 'Sí. City of Belton Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Belton?', a: 'La energía solar puede ser una buena opción en Belton según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Belton para energía solar?', a: 'Belton promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'lubbock': {
    localNote: 'Lubbock es el centro de las South Plains, con un clima semiárido, fuerte exposición solar y altos recursos eólicos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Lubbock?', a: 'Sí. City of Lubbock Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Lubbock?', a: 'La energía solar puede ser una buena opción en Lubbock según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Lubbock para energía solar?', a: 'Lubbock promedia aproximadamente 5.7 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'wolfforth': {
    localNote: 'Wolfforth es un suburbio del condado de Lubbock en crecimiento al suroeste de Lubbock, con terreno plano y fuerte exposición solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Wolfforth?', a: 'Sí. City of Wolfforth Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Wolfforth?', a: 'La energía solar puede ser una buena opción en Wolfforth según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Wolfforth para energía solar?', a: 'Wolfforth promedia aproximadamente 5.7 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'laredo': {
    localNote: 'Laredo es una importante ciudad fronteriza y centro de comercio internacional, con un clima semiárido y veranos muy calurosos y soleados.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Laredo?', a: 'Sí. City of Laredo Building Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Laredo?', a: 'La energía solar puede ser una buena opción en Laredo según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Laredo para energía solar?', a: 'Laredo promedia aproximadamente 5.6 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'el-cenizo': {
    localNote: 'El Cenizo es una pequeña ciudad del condado de Webb a lo largo del Río Grande, con condiciones calurosas y soleadas bien adaptadas para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en El Cenizo?', a: 'Sí. City of El Cenizo Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en El Cenizo?', a: 'La energía solar puede ser una buena opción en El Cenizo según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe El Cenizo para energía solar?', a: 'El Cenizo promedia aproximadamente 5.6 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'pearland': {
    localNote: 'Pearland es un suburbio de Houston en rápido crecimiento al sur de la ciudad, con casas modernas y veranos calurosos y húmedos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Pearland?', a: 'Sí. City of Pearland Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Pearland?', a: 'La energía solar puede ser una buena opción en Pearland según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Pearland para energía solar?', a: 'Pearland promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'lake-jackson': {
    localNote: 'Lake Jackson es una ciudad de la Costa del Golfo cerca de la costa, con veranos calurosos y húmedos y exposición a huracanes que requiere equipos clasificados para viento.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Lake Jackson?', a: 'Sí. City of Lake Jackson Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Lake Jackson?', a: 'La energía solar puede ser una buena opción en Lake Jackson según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Lake Jackson para energía solar?', a: 'Lake Jackson promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'angleton': {
    localNote: 'Angleton es la sede del condado de Brazoria, con veranos calurosos y húmedos y terreno plano ideal para instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Angleton?', a: 'Sí. City of Angleton Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Angleton?', a: 'La energía solar puede ser una buena opción en Angleton según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Angleton para energía solar?', a: 'Angleton promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'galveston': {
    localNote: 'Galveston es una histórica ciudad insular con alta exposición a huracanes, lo que hace que el respaldo de batería sea especialmente valioso para la resiliencia ante tormentas.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Galveston?', a: 'Sí. City of Galveston Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Galveston?', a: 'La energía solar puede ser una buena opción en Galveston según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Galveston para energía solar?', a: 'Galveston promedia aproximadamente 5.2 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'league-city': {
    localNote: 'League City es un suburbio del área de Houston en rápido crecimiento cerca de la Bahía de Galveston, con veranos calurosos y húmedos y casas modernas adecuadas para energía solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en League City?', a: 'Sí. City of League City Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en League City?', a: 'La energía solar puede ser una buena opción en League City según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe League City para energía solar?', a: 'League City promedia aproximadamente 5.2 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'texas-city': {
    localNote: 'Texas City es una ciudad industrial de la Costa del Golfo con veranos calurosos y húmedos y una exposición significativa a huracanes.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Texas City?', a: 'Sí. City of Texas City Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Texas City?', a: 'La energía solar puede ser una buena opción en Texas City según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Texas City para energía solar?', a: 'Texas City promedia aproximadamente 5.2 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'beaumont': {
    localNote: 'Beaumont es la ciudad más grande del condado de Jefferson, un centro industrial de la Costa del Golfo con veranos calurosos y húmedos y una exposición significativa a huracanes.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Beaumont?', a: 'Sí. City of Beaumont Building Codes maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Beaumont?', a: 'La energía solar puede ser una buena opción en Beaumont según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Beaumont para energía solar?', a: 'Beaumont promedia aproximadamente 5.1 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'port-arthur': {
    localNote: 'Port Arthur es una ciudad refinera de la Costa del Golfo con alto riesgo de huracanes, lo que hace que el respaldo de batería sea especialmente valioso para la resiliencia ante tormentas.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Port Arthur?', a: 'Sí. City of Port Arthur Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Port Arthur?', a: 'La energía solar puede ser una buena opción en Port Arthur según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Port Arthur para energía solar?', a: 'Port Arthur promedia aproximadamente 5.1 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'nederland': {
    localNote: 'Nederland es una ciudad del condado de Jefferson cerca de Port Arthur, con veranos calurosos y húmedos y exposición a tormentas costeras.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Nederland?', a: 'Sí. City of Nederland Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Nederland?', a: 'La energía solar puede ser una buena opción en Nederland según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Nederland para energía solar?', a: 'Nederland promedia aproximadamente 5.1 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'tyler': {
    localNote: 'Tyler es la ciudad más grande del condado de Smith y un centro regional del este de Texas, con veranos calurosos y húmedos y una cobertura significativa de árboles en los barrios más antiguos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Tyler?', a: 'Sí. City of Tyler Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Tyler?', a: 'La energía solar puede ser una buena opción en Tyler según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Tyler para energía solar?', a: 'Tyler promedia aproximadamente 5.0 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'whitehouse': {
    localNote: 'Whitehouse es un suburbio de Tyler en crecimiento con veranos calurosos y una mezcla de lotes residenciales abiertos y boscosos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Whitehouse?', a: 'Sí. City of Whitehouse Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Whitehouse?', a: 'La energía solar puede ser una buena opción en Whitehouse según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Whitehouse para energía solar?', a: 'Whitehouse promedia aproximadamente 5.0 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'college-station': {
    localNote: 'College Station es sede de la Universidad Texas A&M, con veranos calurosos y una mezcla de barrios establecidos y nuevo desarrollo. La ciudad recibe servicio de su propia empresa de servicios públicos municipal, College Station Utilities.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en College Station?', a: 'Sí. City of College Station Building Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en College Station?', a: 'La energía solar puede ser una buena opción en College Station según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe College Station para energía solar?', a: 'College Station promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'bryan': {
    localNote: 'Bryan es la sede del condado de Brazos y ciudad hermana de College Station, con veranos calurosos y alta demanda de enfriamiento. La ciudad recibe servicio de su propia empresa de servicios públicos municipal, Bryan Texas Utilities.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Bryan?', a: 'Sí. City of Bryan Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Bryan?', a: 'La energía solar puede ser una buena opción en Bryan según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Bryan para energía solar?', a: 'Bryan promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'waco': {
    localNote: 'Waco es la ciudad más grande del condado de McLennan a lo largo del corredor I-35, con veranos calurosos y alta demanda de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Waco?', a: 'Sí. City of Waco Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Waco?', a: 'La energía solar puede ser una buena opción en Waco según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Waco para energía solar?', a: 'Waco promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'woodway': {
    localNote: 'Woodway es un suburbio próspero de Waco con casas modernas y techos grandes bien adaptados para energía solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Woodway?', a: 'Sí. City of Woodway Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Woodway?', a: 'La energía solar puede ser una buena opción en Woodway según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Woodway para energía solar?', a: 'Woodway promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'hewitt': {
    localNote: 'Hewitt es un suburbio de Waco en crecimiento con veranos calurosos y terreno plano ideal para instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Hewitt?', a: 'Sí. City of Hewitt Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Hewitt?', a: 'La energía solar puede ser una buena opción en Hewitt según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Hewitt para energía solar?', a: 'Hewitt promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'san-marcos': {
    localNote: 'San Marcos es una ciudad en crecimiento entre Austin y San Antonio, sede de Texas State University, con veranos calurosos y alta demanda de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en San Marcos?', a: 'Sí. City of San Marcos Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en San Marcos?', a: 'La energía solar puede ser una buena opción en San Marcos según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe San Marcos para energía solar?', a: 'San Marcos promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'kyle': {
    localNote: 'Kyle es una de las ciudades de más rápido crecimiento en Texas, con casas modernas y techos grandes bien adaptados para energía solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Kyle?', a: 'Sí. City of Kyle Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Kyle?', a: 'La energía solar puede ser una buena opción en Kyle según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Kyle para energía solar?', a: 'Kyle promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'buda': {
    localNote: 'Buda es un suburbio del condado de Hays en rápido crecimiento al sur de Austin, con veranos calurosos y nuevo desarrollo residencial.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Buda?', a: 'Sí. City of Buda Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Buda?', a: 'La energía solar puede ser una buena opción en Buda según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Buda para energía solar?', a: 'Buda promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'waxahachie': {
    localNote: 'Waxahachie es la sede del condado de Ellis, conocida por su histórico centro, con veranos calurosos y una ubicación en el Pasillo del Granizo.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Waxahachie?', a: 'Sí. City of Waxahachie Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Waxahachie?', a: 'La energía solar puede ser una buena opción en Waxahachie según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Waxahachie para energía solar?', a: 'Waxahachie promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'midlothian': {
    localNote: 'Midlothian es un suburbio de Dallas-Fort Worth en rápido crecimiento con casas modernas y techos grandes bien adaptados para energía solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Midlothian?', a: 'Sí. City of Midlothian Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Midlothian?', a: 'La energía solar puede ser una buena opción en Midlothian según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Midlothian para energía solar?', a: 'Midlothian promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'ennis': {
    localNote: 'Ennis es una ciudad del condado de Ellis con veranos calurosos y terreno plano ideal para instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Ennis?', a: 'Sí. City of Ennis Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Ennis?', a: 'La energía solar puede ser una buena opción en Ennis según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Ennis para energía solar?', a: 'Ennis promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'seguin': {
    localNote: 'Seguin es la sede del condado de Guadalupe, con veranos calurosos y húmedos y alta demanda de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Seguin?', a: 'Sí. City of Seguin Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Seguin?', a: 'La energía solar puede ser una buena opción en Seguin según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Seguin para energía solar?', a: 'Seguin promedia aproximadamente 5.5 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'schertz': {
    localNote: 'Schertz es un suburbio en crecimiento del área de San Antonio con casas modernas y veranos calurosos y húmedos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Schertz?', a: 'Sí. City of Schertz Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Schertz?', a: 'La energía solar puede ser una buena opción en Schertz según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Schertz para energía solar?', a: 'Schertz promedia aproximadamente 5.5 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'cibolo': {
    localNote: 'Cibolo es un suburbio del área de San Antonio en rápido crecimiento con nuevo desarrollo residencial y alta demanda de enfriamiento en verano.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Cibolo?', a: 'Sí. City of Cibolo Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Cibolo?', a: 'La energía solar puede ser una buena opción en Cibolo según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Cibolo para energía solar?', a: 'Cibolo promedia aproximadamente 5.5 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'new-braunfels': {
    localNote: 'New Braunfels es una ciudad del Hill Country en rápido crecimiento entre San Antonio y Austin, servida por la empresa municipal New Braunfels Utilities (NBU).',
    faq: [
      { q: '¿Necesito un permiso para energía solar en New Braunfels?', a: 'Sí. City of New Braunfels Building Inspections maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en New Braunfels?', a: 'La energía solar puede ser una buena opción en New Braunfels según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe New Braunfels para energía solar?', a: 'New Braunfels promedia aproximadamente 5.5 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'bulverde': {
    localNote: 'Bulverde es una comunidad del condado de Comal en crecimiento al norte de San Antonio, con veranos calurosos y lotes residenciales rurales más grandes bien adaptados para energía solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Bulverde?', a: 'Sí. City of Bulverde Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Bulverde?', a: 'La energía solar puede ser una buena opción en Bulverde según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Bulverde para energía solar?', a: 'Bulverde promedia aproximadamente 5.5 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'cleburne': {
    localNote: 'Cleburne es la sede del condado de Johnson, con veranos calurosos y una ubicación en el Pasillo del Granizo que requiere equipos clasificados para granizo.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Cleburne?', a: 'Sí. City of Cleburne Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Cleburne?', a: 'La energía solar puede ser una buena opción en Cleburne según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Cleburne para energía solar?', a: 'Cleburne promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'burleson': {
    localNote: 'Burleson es un suburbio de Fort Worth en rápido crecimiento que abarca los condados de Johnson y Tarrant, con casas modernas y alta demanda de enfriamiento en verano.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Burleson?', a: 'Sí. City of Burleson Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Burleson?', a: 'La energía solar puede ser una buena opción en Burleson según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Burleson para energía solar?', a: 'Burleson promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'terrell': {
    localNote: 'Terrell es la sede del condado de Kaufman, con veranos calurosos y una ubicación en el Pasillo del Granizo que requiere equipos clasificados para granizo.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Terrell?', a: 'Sí. City of Terrell Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Terrell?', a: 'La energía solar puede ser una buena opción en Terrell según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Terrell para energía solar?', a: 'Terrell promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'forney': {
    localNote: 'Forney es un suburbio de Dallas en rápido crecimiento con casas modernas y techos grandes bien adaptados para energía solar.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Forney?', a: 'Sí. City of Forney Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Forney?', a: 'La energía solar puede ser una buena opción en Forney según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Forney para energía solar?', a: 'Forney promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'kaufman': {
    localNote: 'Kaufman es una ciudad del condado de Kaufman con veranos calurosos y terreno plano ideal para instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Kaufman?', a: 'Sí. City of Kaufman Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Kaufman?', a: 'La energía solar puede ser una buena opción en Kaufman según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Kaufman para energía solar?', a: 'Kaufman promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'weatherford': {
    localNote: 'Weatherford es la sede del condado de Parker, con veranos calurosos y una ubicación en el Pasillo del Granizo que requiere equipos clasificados para granizo.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Weatherford?', a: 'Sí. City of Weatherford Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Weatherford?', a: 'La energía solar puede ser una buena opción en Weatherford según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Weatherford para energía solar?', a: 'Weatherford promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'aledo': {
    localNote: 'Aledo es un suburbio próspero de Fort Worth con casas modernas grandes y techos bien adaptados para instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Aledo?', a: 'Sí. City of Aledo Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Aledo?', a: 'La energía solar puede ser una buena opción en Aledo según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Aledo para energía solar?', a: 'Aledo promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'midland': {
    localNote: 'Midland es el centro de la Cuenca Pérmica, con un clima semiárido y un potencial solar excepcional: entre las regiones más soleadas de Texas.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Midland?', a: 'Sí. City of Midland Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Midland?', a: 'La energía solar puede ser una buena opción en Midland según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Midland para energía solar?', a: 'Midland promedia aproximadamente 6.0 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'odessa': {
    localNote: 'Odessa es un centro de la Cuenca Pérmica, con un clima semiárido y un potencial solar excepcional: entre las regiones más soleadas de Texas.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Odessa?', a: 'Sí. City of Odessa Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Odessa?', a: 'La energía solar puede ser una buena opción en Odessa según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Odessa para energía solar?', a: 'Odessa promedia aproximadamente 6.0 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'goldsmith': {
    localNote: 'Goldsmith es una pequeña comunidad del condado de Ector con exposición solar fuerte y constante típica de la Cuenca Pérmica.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Goldsmith?', a: 'Sí. City of Goldsmith Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Goldsmith?', a: 'La energía solar puede ser una buena opción en Goldsmith según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Goldsmith para energía solar?', a: 'Goldsmith promedia aproximadamente 6.0 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'canyon': {
    localNote: 'Canyon es la sede del condado de Randall, en las High Plains del Panhandle de Texas, con un excelente potencial solar y cobertura de nubes mínima.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Canyon?', a: 'Sí. City of Canyon Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Canyon?', a: 'La energía solar puede ser una buena opción en Canyon según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Canyon para energía solar?', a: 'Canyon promedia aproximadamente 5.9 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'amarillo': {
    localNote: 'Amarillo es la ciudad más grande del Panhandle de Texas, con un clima semiárido, excelente potencial solar y fuertes recursos eólicos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Amarillo?', a: 'Sí. City of Amarillo Building Safety maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Amarillo?', a: 'La energía solar puede ser una buena opción en Amarillo según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Amarillo para energía solar?', a: 'Amarillo promedia aproximadamente 5.9 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'abilene': {
    localNote: 'Abilene es el centro del centro-oeste de Texas, con un clima semiárido, fuerte exposición solar y recursos eólicos constantes.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Abilene?', a: 'Sí. City of Abilene Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Abilene?', a: 'La energía solar puede ser una buena opción en Abilene según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Abilene para energía solar?', a: 'Abilene promedia aproximadamente 5.6 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'merkel': {
    localNote: 'Merkel es una pequeña ciudad del condado de Taylor a lo largo de la I-20 al oeste de Abilene, con una exposición solar fuerte y constante.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Merkel?', a: 'Sí. City of Merkel Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Merkel?', a: 'La energía solar puede ser una buena opción en Merkel según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Merkel para energía solar?', a: 'Merkel promedia aproximadamente 5.6 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'wichita-falls': {
    localNote: 'Wichita Falls es la ciudad más grande del norte de Texas cerca de la frontera con Oklahoma, con veranos calurosos e inviernos fríos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Wichita Falls?', a: 'Sí. City of Wichita Falls Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Wichita Falls?', a: 'La energía solar puede ser una buena opción en Wichita Falls según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Wichita Falls para energía solar?', a: 'Wichita Falls promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'iowa-park': {
    localNote: 'Iowa Park es una ciudad del condado de Wichita con veranos calurosos y terreno plano ideal para instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Iowa Park?', a: 'Sí. City of Iowa Park Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Iowa Park?', a: 'La energía solar puede ser una buena opción en Iowa Park según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Iowa Park para energía solar?', a: 'Iowa Park promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'burkburnett': {
    localNote: 'Burkburnett es una ciudad del condado de Wichita cerca del Río Rojo, con veranos calurosos y fuertes recursos eólicos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Burkburnett?', a: 'Sí. City of Burkburnett Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Burkburnett?', a: 'La energía solar puede ser una buena opción en Burkburnett según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Burkburnett para energía solar?', a: 'Burkburnett promedia aproximadamente 5.4 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'longview': {
    localNote: 'Longview es la ciudad más grande del condado de Gregg, en el East Texas Piney Woods, con veranos calurosos y húmedos y una cobertura significativa de árboles.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Longview?', a: 'Sí. City of Longview Building Inspections maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Longview?', a: 'La energía solar puede ser una buena opción en Longview según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Longview para energía solar?', a: 'Longview promedia aproximadamente 5.0 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'kilgore': {
    localNote: 'Kilgore es una ciudad del condado de Gregg históricamente vinculada al auge petrolero del este de Texas, con veranos calurosos y húmedos y lotes residenciales boscosos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Kilgore?', a: 'Sí. City of Kilgore Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Kilgore?', a: 'La energía solar puede ser una buena opción en Kilgore según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Kilgore para energía solar?', a: 'Kilgore promedia aproximadamente 5.0 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'san-angelo': {
    localNote: 'San Angelo es el centro del oeste de Texas, con un clima semiárido, fuerte exposición solar y recursos eólicos constantes.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en San Angelo?', a: 'Sí. City of San Angelo Development Services maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en San Angelo?', a: 'La energía solar puede ser una buena opción en San Angelo según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe San Angelo para energía solar?', a: 'San Angelo promedia aproximadamente 5.8 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'victoria': {
    localNote: 'Victoria es un centro regional en el Coastal Bend de Texas, con veranos calurosos y húmedos y exposición a huracanes que requiere equipos clasificados para viento.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Victoria?', a: 'Sí. City of Victoria Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Victoria?', a: 'La energía solar puede ser una buena opción en Victoria según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Victoria para energía solar?', a: 'Victoria promedia aproximadamente 5.3 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'lufkin': {
    localNote: 'Lufkin es la ciudad más grande del condado de Angelina, en el East Texas Piney Woods, con veranos calurosos y húmedos y una cobertura significativa de árboles.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Lufkin?', a: 'Sí. City of Lufkin Building Inspection maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Lufkin?', a: 'La energía solar puede ser una buena opción en Lufkin según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Lufkin para energía solar?', a: 'Lufkin promedia aproximadamente 5.0 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'diboll': {
    localNote: 'Diboll es una ciudad del condado de Angelina con herencia de la industria maderera, con veranos calurosos y húmedos y lotes residenciales boscosos.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Diboll?', a: 'Sí. City of Diboll Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Diboll?', a: 'La energía solar puede ser una buena opción en Diboll según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Diboll para energía solar?', a: 'Diboll promedia aproximadamente 5.0 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
  'huntington': {
    localNote: 'Huntington es una pequeña ciudad del condado de Angelina con veranos calurosos y húmedos típicos del East Texas Piney Woods.',
    faq: [
      { q: '¿Necesito un permiso para energía solar en Huntington?', a: 'Sí. City of Huntington Building Department maneja los permisos solares. El plazo típico es de 2 a 6 semanas, varía según la jurisdicción. Su instalador gestiona la aplicación y presenta la documentación en su nombre.' },
      { q: '¿Vale la pena la energía solar + almacenamiento con batería en Huntington?', a: 'La energía solar puede ser una buena opción en Huntington según su consumo y techo. El respaldo de batería agrega resiliencia durante eventos de la red como la tormenta invernal Uri (febrero de 2021). Una evaluación específica de su instalador confirmará los ahorros esperados para su hogar.' },
      { q: '¿Cuánto sol recibe Huntington para energía solar?', a: 'Huntington promedia aproximadamente 5.0 horas pico de sol al día. La producción real depende de la orientación del techo, la sombra y el tamaño del sistema -- su instalador puede proporcionar una estimación específica del sitio.' },
    ],
  },
};
