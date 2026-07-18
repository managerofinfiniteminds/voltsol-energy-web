// AUTO-GENERATED Spanish translations for market-data.ts county/city content.
// Generated 2026-07-18 via 6-batch parallel translation (natural Latin American Spanish,
// marketing tone for high-trust home-improvement purchase). Do not hand-edit structure —
// regenerate via scripts/extract-market-content.ts + translation pipeline if source content changes.

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
  'alameda-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (categoría E-TOU-C, rango 2025-2026). Las tarifas altas hacen que la economía solar sea muy sólida. Algunas ciudades del East Bay, como Alameda y Fremont, han adoptado SolarAPP+ para agilizar los permisos.',
    permitOfficeNote: 'Fremont y la Ciudad de Alameda usan SolarAPP+ para la aprobación automática el mismo día en sistemas residenciales elegibles. Oakland, Berkeley, Hayward y otras ciudades suelen tardar entre 2 y 4 semanas en aprobar el permiso.',
    climateZoneDescription: 'Zona 3: clima marino templado junto a la bahía (Oakland, Berkeley, Alameda), con temperaturas moderadas durante todo el año. Zona 4: clima cálido del interior (Livermore, Pleasanton, Dublin), con veranos calurosos y alta demanda de enfriamiento. La producción solar es sólida en todo el condado.',
    countyContext: 'El condado de Alameda se extiende desde la costa de la bahía de San Francisco (Oakland, Berkeley, Alameda) hasta los valles interiores del East Bay (Livermore, Pleasanton, Dublin). Las zonas costeras reciben la influencia de la capa marina, pero aun así tienen un gran potencial solar. Los valles del interior tienen veranos calurosos con alta demanda de enfriamiento, lo que hace que la energía solar sea especialmente valiosa. Las altas tarifas de PG&E en todo el condado impulsan una economía solar muy favorable.',
  },
  'alpine-county': {
    utilityRateNote: 'Liberty Utilities (antes CalPeco) da servicio a este remoto condado de la alta Sierra Nevada. Las tarifas promedian $0.40/kWh. La ubicación montañosa remota y las tormentas invernales hacen que la independencia energética con respaldo de baterías resulte muy atractiva.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones en alta montaña. Se requieren cálculos de carga de nieve para todas las elevaciones. La ubicación remota puede extender los plazos de coordinación. Los sistemas solares con almacenamiento en baterías son comunes dado la infraestructura eléctrica limitada.',
    climateZoneDescription: 'Clima de alta montaña con inviernos fríos y nevadas intensas. Veranos cortos con sol intenso en altura. Excelente potencial solar a pesar de los retos invernales, gracias a la gran elevación y el aire de montaña despejado.',
    countyContext: 'Alpine County es el condado menos poblado de California, y se extiende por la alta Sierra Nevada alrededor de Markleeville, a 1,680 metros de elevación. La ubicación montañosa remota aporta un excelente potencial solar de 5.0 horas de sol pico, a pesar de la nieve invernal. El aire de montaña despejado y la gran elevación potencian la producción solar. La infraestructura eléctrica limitada hace que la energía solar con almacenamiento en baterías resulte atractiva. El turismo y la recreación al aire libre impulsan la pequeña economía local.',
  },
  'amador-county': {
    utilityRateNote: 'PG&E presta servicio en esta región de estribaciones de la fiebre del oro con tarifas que promedian $0.44/kWh. El terreno de estribaciones y el riesgo de incendios forestales hacen que el respaldo de batería sea valioso durante los eventos de PSPS.',
    permitOfficeNote: 'El condado procesa los permisos para instalaciones en las estribaciones. Las zonas propensas a incendios pueden requerir normas de diseño adicionales contra incendios forestales. La mayoría de las instalaciones solares residenciales se someten a revisión estándar.',
    climateZoneDescription: 'Clima mediterráneo de verano cálido, con veranos calurosos y secos e inviernos templados y lluviosos. El terreno de estribaciones ofrece excelentes condiciones solares con una influencia mínima de la niebla costera.',
    countyContext: 'El condado de Amador se encuentra en el corazón de la región de la fiebre del oro, con pueblos históricos como Jackson, Sutter Creek e Ione. Las elevaciones de las estribaciones, de 1,000 a 2,500 pies, ofrecen un excelente potencial solar de 5.0 horas de sol pico. El riesgo de incendios forestales y los eventos de PSPS hacen que el respaldo de batería sea atractivo para la resiliencia energética. El turismo vinícola e histórico impulsa la economía local.',
  },
  'butte-county': {
    utilityRateNote: 'Las tarifas residenciales de PG&E promedian $0.44/kWh, entre las más altas de California. Las tarifas elevadas combinadas con los frecuentes cortes por PSPS hacen que la energía solar con respaldo de batería sea especialmente atractiva.',
    permitOfficeNote: 'Las reconstrucciones posteriores al Camp Fire suelen integrar energía solar. El personal del condado tiene experiencia con instalaciones resistentes a incendios y sistemas preparados para eventos de PSPS.',
    climateZoneDescription: 'Veranos calurosos en el valle con temperaturas superiores a 100°F e inviernos templados. La alta demanda de enfriamiento impulsa el consumo de energía de junio a septiembre.',
    countyContext: 'El condado de Butte se ubica en el norte del valle de Sacramento, con Chico y Oroville en el piso del valle y Paradise en la zona de riesgo de incendio de las estribaciones. El incendio Camp Fire de 2018 devastó Paradise, lo que convirtió la resiliencia ante incendios y el respaldo de energía durante los PSPS en prioridades principales. Las altas tarifas de PG&E y los cortes frecuentes impulsan una fuerte adopción de la energía solar.',
  },
  'calaveras-county': {
    utilityRateNote: 'PG&E presta servicio a esta histórica región de la Fiebre del Oro con tarifas que promedian $0.44/kWh. Las zonas de mayor altitud y las áreas de riesgo de incendio experimentan cortes de PSPS frecuentes, lo que hace que el respaldo de batería sea esencial para la resiliencia.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones en las estribaciones y zonas de montaña. Las áreas propensas a incendios requieren estándares de diseño resistentes al fuego. Las mayores elevaciones pueden necesitar cálculos de carga de nieve para las estructuras de montaje solar.',
    climateZoneDescription: 'Transición de un clima mediterráneo en las estribaciones a zonas de montaña. Las elevaciones más bajas tienen veranos calurosos; las elevaciones más altas presentan nieve en invierno. Excelente potencial solar en todo el rango de elevación.',
    countyContext: 'El condado de Calaveras se extiende desde las estribaciones de la Fiebre del Oro (Angels Camp, San Andreas) hasta la alta Sierra (Murphys, Arnold). Las elevaciones, de entre 1,000 y 5,000 pies, generan zonas climáticas variadas, pero con un potencial solar constante de 5.0 a 5.2 horas pico de sol. El riesgo de incendios forestales y los cortes de PSPS son preocupaciones importantes. Las cavernas históricas y el Parque Estatal Big Trees sostienen la economía turística.',
  },
  'colusa-county': {
    utilityRateNote: 'Las tarifas residenciales de PG&E promedian $0.44/kWh. El entorno agrícola rural y las tarifas elevadas hacen que la economía solar sea sólida para la independencia energética.',
    permitOfficeNote: 'El condado procesa los permisos para esta región rural del valle. Las instalaciones agrícolas pueden requerir una revisión de zonificación por retiros agrícolas.',
    climateZoneDescription: 'Clima cálido de valle con temperaturas de verano superiores a 100 °F e inviernos templados. Región agrícola con altas cargas de riego y enfriamiento.',
    countyContext: 'El condado de Colusa es un pequeño condado agrícola y rural en el norte del valle de Sacramento, con Colusa y Williams como sus principales localidades. El terreno plano del valle ofrece una excelente exposición solar. Las altas tarifas de PG&E y los cortes rurales por PSPS hacen que la energía solar con respaldo de batería sea atractiva tanto para hogares como para operaciones agrícolas.',
  },
  'contra-costa-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (categoría E-TOU-C, rango 2025-2026). Las tarifas altas hacen que la economía solar sea muy sólida. Los valles del interior (Concord, Antioch, Walnut Creek) tienen costos de enfriamiento especialmente altos en verano.',
    permitOfficeNote: 'Concord, Richmond, Walnut Creek, Antioch y otras ciudades tienen sus propios departamentos de construcción. Las zonas no incorporadas dependen de la Inspección de Construcción del Condado de Contra Costa. Algunas ciudades están adoptando SolarAPP+ para agilizar la aprobación.',
    climateZoneDescription: 'Zona 3: clima marino templado junto a la bahía (Richmond), con temperaturas moderadas. Zona 4: valles interiores cálidos (Concord, Walnut Creek, Antioch), con veranos calurosos y alta demanda de enfriamiento. Producción solar sólida en todo el condado.',
    countyContext: 'El condado de Contra Costa se extiende desde la costa de la bahía de San Francisco (Richmond) hasta los valles centrales (Concord, Walnut Creek, San Ramon) y la región del delta al este (Antioch, Brentwood, Pittsburg). Las zonas del interior tienen veranos calurosos con alta demanda de enfriamiento. Las altas tarifas de PG&E y los cortes ocasionales por PSPS en las zonas de las estribaciones al este hacen que la energía solar con almacenamiento en baterías resulte muy atractiva en todo el condado.',
  },
  'del-norte-county': {
    utilityRateNote: 'PG&E presta servicio a esta región costera del extremo noroeste con tarifas que promedian $0.44/kWh. El clima marino extremo y las pocas horas de sol hacen que el respaldo de batería y un diseño eficiente sean fundamentales.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones costeras en la región más lluviosa de California. Se requiere resistencia a la corrosión marina y diseño sísmico. La ubicación remota hace que la energía de respaldo sea valiosa.',
    climateZoneDescription: 'Clima marítimo extremo con fuertes lluvias durante todo el año y niebla persistente. La región costera más fría de California. El aire marino y los bosques de secuoyas crean condiciones solares desafiantes.',
    countyContext: 'El condado de Del Norte es el extremo noroeste de California, centrado en Crescent City. Es la región más lluviosa y con más niebla del estado, con un clima marino persistente y bosques de secuoyas que generan la irradiación solar más baja del norte de California. La energía solar sigue funcionando durante todo el año con un dimensionamiento adecuado, y las altas tarifas de PG&E, junto con los cortes por tormentas, hacen que el respaldo de batería sea especialmente valioso.',
  },
  'el-dorado-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (nivel E-TOU-C, rango 2025-2026). Las tarifas elevadas hacen que la economía solar sea muy sólida, especialmente para hogares en las estribaciones con altas cargas de calefacción y refrigeración.',
    permitOfficeNote: 'Proceso de permisos a nivel de todo el condado. Los sitios rurales y de las estribaciones pueden requerir una revisión adicional por zona de incendio o estructural, considerando la carga de nieve y el terreno.',
    climateZoneDescription: 'Clima cálido del interior en las elevaciones más bajas (El Dorado Hills, Cameron Park). Las zonas de estribaciones (Shingle Springs, Placerville) presentan más variación, con inviernos más fríos y posibilidad de nieve en elevaciones mayores.',
    countyContext: 'El Dorado County se extiende desde las estribaciones de Sierra Nevada hasta elevaciones montañosas más altas. Las zonas de menor elevación (El Dorado Hills, Cameron Park) tienen un potencial solar sólido, similar al del valle. Las elevaciones más altas (Placerville, Shingle Springs) requieren consideraciones de carga de nieve y pueden presentar más sombra por árboles. Las tarifas altas de PG&E y los frecuentes cortes por PSPS hacen que la energía solar con almacenamiento en baterías resulte atractiva para respaldo eléctrico y ahorro.',
  },
  'fresno-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (nivel E-TOU-C, rango 2025-2026). Las tarifas elevadas, combinadas con el calor extremo del valle de San Joaquín en verano y una demanda de enfriamiento muy alta, hacen que la economía solar sea excepcionalmente favorable en todo el condado de Fresno.',
    permitOfficeNote: 'Fresno, Clovis y otras ciudades cuentan con sus propios departamentos de construcción. Las zonas no incorporadas dependen de Fresno County Building and Safety. Algunas jurisdicciones están adoptando SolarAPP+ para agilizar la aprobación.',
    climateZoneDescription: 'Clima muy cálido y seco del valle de San Joaquín, con calor extremo en verano y una demanda de enfriamiento muy alta. Inviernos templados con una carga de calefacción mínima. Excelente producción solar durante todo el año, con una producción de verano extremadamente alta.',
    countyContext: 'El condado de Fresno se ubica en el sur del valle de San Joaquín, con un terreno agrícola plano ideal para la energía solar. Ciudades como Fresno, Clovis, Sanger y Reedley experimentan algunos de los veranos más calurosos de California, con una demanda de enfriamiento muy alta, lo que hace que la energía solar sea especialmente valiosa para compensar los costos de aire acondicionado. Las altas tarifas de PG&E en todo el condado impulsan una economía solar sólida. La bruma de verano puede reducir ligeramente la producción en comparación con el valle norte, pero el rendimiento sigue siendo excelente.',
  },
  'glenn-county': {
    utilityRateNote: 'Las tarifas residenciales de PG&E promedian $0.44/kWh. La ubicación rural en el valle y las demandas energéticas de la actividad agrícola hacen que la energía solar sea atractiva para lograr independencia energética.',
    permitOfficeNote: 'El condado procesa los permisos para esta región rural agrícola. Las instalaciones en granjas pueden requerir una revisión de retiro conforme a la zonificación agrícola.',
    climateZoneDescription: 'Clima cálido de valle, con temperaturas de verano superiores a los 100 °F (38 °C) e inviernos suaves. Región agrícola con altas cargas de riego y enfriamiento.',
    countyContext: 'El condado de Glenn es un condado rural agrícola en el norte del Valle de Sacramento, con Willows y Orland como sus principales localidades. El terreno plano del valle, los veranos calurosos y las altas tarifas de PG&E hacen que la energía solar resulte atractiva. Los cortes PSPS afectan a las zonas rurales, lo que hace que el respaldo de batería sea valioso para pozos y operaciones agrícolas.',
  },
  'humboldt-county': {
    utilityRateNote: 'PG&E da servicio a esta neblinosa región de la Costa Norte con tarifas que promedian $0.44/kWh. La menor irradiación solar hace que el diseño adecuado del sistema y el respaldo con baterías sean fundamentales para maximizar el valor.',
    permitOfficeNote: 'El condado procesa permisos tanto para instalaciones costeras como del interior. El entorno marino requiere equipos resistentes a la corrosión. Se aplican los estándares de diseño de la Zona Sísmica 4.',
    climateZoneDescription: 'Clima marítimo fresco con neblina persistente en verano y lluvias intensas en invierno. El terreno costero de bosque de secuoyas genera condiciones solares moderadas. El aire marino requiere equipos resistentes a la corrosión.',
    countyContext: 'Humboldt County es una región remota de la Costa Norte con Eureka y Arcata como centros principales. La neblina costera persistente y los bosques de secuoyas generan una irradiación solar menor que en el interior de California, con un promedio de 4.3 a 4.4 horas de sol pico al día. Las tarifas altas de PG&E aún hacen que la energía solar sea viable, pero el diseño adecuado del sistema es fundamental. El respaldo con baterías aporta valor durante las tormentas de invierno y los eventos de PSPS.',
  },
  'imperial-county': {
    utilityRateNote: 'El Distrito de Riego Imperial (IID), una empresa de servicios públicos municipal, da servicio a todo el condado de Imperial a aproximadamente $0.16/kWh, una de las tarifas residenciales más bajas de California. A pesar de las tarifas bajas, la energía solar aporta valor mediante energía de respaldo durante cortes por calor extremo, independencia energética y resiliencia durante las olas de calor del desierto (110 °F o más es común). El calor extremo genera cargas de enfriamiento altas que la energía solar puede compensar.',
    permitOfficeNote: 'El Centro, Calexico, Brawley y otras ciudades tienen sus propios departamentos de construcción. Las zonas no incorporadas dependen de la Oficina de Planificación del Condado de Imperial. Todas las instalaciones en el desierto requieren sistemas diseñados para calor extremo, polvo y cambios bruscos de temperatura.',
    climateZoneDescription: 'Clima desértico extremo con algunas de las temperaturas más altas de Estados Unidos. Los máximos de verano superan habitualmente los 110 °F, con una demanda de enfriamiento muy alta. La Zona 15 ofrece una producción solar excepcional, entre las mejores del país, con 6.5 horas o más de sol pico al día durante todo el año.',
    countyContext: 'El condado de Imperial se encuentra en el desierto de Colorado, en el extremo sureste de California, bajo el nivel del mar, en el Valle Imperial. La zona experimenta un calor extremo en verano (115 °F o más es común) con un potencial solar excepcional, entre los mejores del país. Las bajas tarifas municipales del IID cambian la ecuación del valor solar: el retorno de la inversión es más lento, pero la energía de respaldo durante cortes por calor y la independencia energética siguen siendo muy valiosas. Las altas cargas de enfriamiento por el calor extremo hacen que la energía solar aún pueda compensar un consumo eléctrico considerable, a pesar de las tarifas bajas.',
  },
  'inyo-county': {
    utilityRateNote: 'Southern California Edison (SCE) y Los Angeles Department of Water and Power (LADWP) prestan servicio a distintas zonas del condado de Inyo. Las tarifas promedian $0.40/kWh. Las ubicaciones remotas de desierto y montaña hacen que la independencia energética resulte atractiva.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones en el alto desierto y en la montaña. Las ubicaciones remotas pueden requerir una revisión de diseño para sistemas solares independientes. Las elevaciones más altas necesitan cálculos de carga de nieve. Las zonas de viento pueden requerir ingeniería adicional en la estructura de montaje.',
    climateZoneDescription: 'Clima de alto desierto con variaciones extremas de temperatura y baja humedad. Las montañas de la Sierra Oriental reciben nieve en invierno. Excelente potencial solar en todas las elevaciones, con cobertura de nubes mínima durante todo el año.',
    countyContext: 'El condado de Inyo abarca el valle de Owens y la Sierra Oriental, desde Bishop, a 4,100 pies, hasta picos de montaña de más de 14,000 pies. La ubicación en el alto desierto brinda un potencial solar excepcional de 6.0 horas de sol pico, entre los mejores de California. Las ubicaciones remotas y los costos de servicios públicos hacen que la energía solar con almacenamiento en baterías sea atractiva. El Parque Nacional Death Valley y el monte Whitney sostienen la economía turística.',
  },
  'kern-county': {
    utilityRateNote: 'El norte de Kern County recibe servicio de PG&E a ~$0.44/kWh; las zonas del sur son atendidas por SCE a ~$0.36/kWh. El promedio combinado es de ~$0.40/kWh. El clima caluroso del Valle Central y del desierto impulsa una demanda de refrigeración muy alta. La economía solar es excepcionalmente sólida en todo el condado.',
    permitOfficeNote: 'Bakersfield, Delano, Ridgecrest y otras ciudades tienen sus propios departamentos de construcción. Las áreas no incorporadas dependen de la Planificación del Condado de Kern. Las zonas desérticas (Ridgecrest, California City) requieren sistemas diseñados para calor extremo.',
    climateZoneDescription: 'Zona 13: clima muy caluroso del Valle Central (Bakersfield, Delano, Shafter, Wasco) con calor extremo en verano y demanda de refrigeración muy alta. Zona 14: clima desértico (Ridgecrest, California City, Tehachapi) con variaciones extremas de temperatura y exposición solar excepcional. Excelente producción solar en todo el condado.',
    countyContext: 'Kern County se extiende desde el sur del Valle de San Joaquín (Bakersfield, Delano), a través de campos petroleros, hasta el Desierto de Mojave (Ridgecrest, California City) y zonas montañosas (Tehachapi). Las áreas del valle experimentan calor extremo en verano con demanda de refrigeración muy alta. Las ciudades desérticas presentan condiciones aún más calurosas con un potencial solar excepcional. Las tarifas eléctricas elevadas (PG&E en el norte, SCE en el sur) impulsan una economía solar sólida en todo el condado.',
  },
  'kings-county': {
    utilityRateNote: 'El condado de Kings recibe servicio de PG&E y de Southern California Edison, según la ubicación, con tarifas residenciales que promedian entre $0.40 y $0.44/kWh. Los calurosos veranos del Valle Central y los altos costos de electricidad hacen que los sistemas solares con baterías sean una excelente inversión para gestionar los gastos energéticos en horas pico.',
    permitOfficeNote: 'El condado de Kings procesa los permisos solares a través de la Agencia de Desarrollo Comunitario, con un plazo típico de 2 a 4 semanas. El condado es rural y agrícola, con un proceso de permisos sencillo. Las ciudades incorporadas como Hanford y Lemoore tienen departamentos de construcción independientes.',
    climateZoneDescription: 'El condado de Kings tiene un clima muy caluroso propio del Valle Central, con un calor intenso en verano, mínima niebla costera y altas cargas de climatización. El condado presenta un potencial de producción solar muy sólido durante todo el año, con una producción máxima en verano que coincide perfectamente con la demanda de aire acondicionado.',
    countyContext: 'El condado de Kings se ubica en el corazón agrícola caluroso del sur del Valle de San Joaquín, centrado en Hanford y Lemoore. El condado experimenta un calor intenso en verano con mínima influencia costera, lo que ofrece un excelente potencial solar y una producción muy alta en verano. El uso agrícola del suelo y las altas tarifas de electricidad hacen que la energía solar con almacenamiento en baterías sea muy atractiva tanto para aplicaciones residenciales como agrícolas.',
  },
  'lake-county': {
    utilityRateNote: 'PG&E da servicio a esta región del interior, con tarifas que promedian $0.44/kWh. El grave historial de incendios forestales y la altísima frecuencia de PSPS hacen que el respaldo con baterías sea esencial.',
    permitOfficeNote: 'El condado tramita los permisos para instalaciones en el interior. Las reconstrucciones posteriores a incendios forestales suelen integrar energía solar y baterías. Se requiere un diseño resistente al fuego en zonas de alto riesgo.',
    climateZoneDescription: 'Veranos cálidos y secos e inviernos templados en los valles del interior alrededor de Clear Lake. El riesgo de incendios forestales es grave y los eventos de PSPS son frecuentes. Excelentes condiciones para la energía solar.',
    countyContext: 'El condado de Lake es una región del interior con Lakeport y Clearlake como sus principales ciudades, ubicadas alrededor de Clear Lake. El grave historial de incendios forestales (Valley Fire, Mendocino Complex) y la altísima frecuencia de PSPS hacen que el respaldo con baterías sea fundamental. Los veranos calurosos generan una excelente producción solar, de 5.1 a 5.3 horas de sol pico. La energía solar con almacenamiento en baterías aporta una independencia energética esencial en esta región propensa a incendios.',
  },
  'lassen-county': {
    utilityRateNote: 'Una combinación de Lassen Municipal Utility District, PG&E y Plumas-Sierra Rural Electric da servicio a la región. La ubicación en desierto alto y los inviernos fríos hacen que la independencia energética resulte atractiva.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones en desierto alto. Se requieren cálculos de carga de nieve para sistemas en climas fríos. Las instalaciones solares con almacenamiento en baterías son comunes en zonas rurales.',
    climateZoneDescription: 'Desierto alto frío con inviernos nevados y veranos cálidos. La elevación de alrededor de 1,280 metros requiere diseño para carga de nieve. La ubicación remota hace que la resiliencia energética sea valiosa.',
    countyContext: 'Lassen County es una región remota de desierto alto en el noreste de California, con Susanville como sede del condado a 1,280 metros de elevación. Los inviernos fríos con nieve y la ubicación remota hacen que el respaldo con baterías sea fundamental. Varias empresas eléctricas dan servicio a la zona. Se requiere diseño para carga de nieve por las condiciones invernales.',
  },
  'los-angeles-county': {
    utilityRateNote: 'Southern California Edison (SCE) presta servicio a la mayor parte del condado de LA a un promedio de ~$0.36/kWh. La ciudad de Los Ángeles recibe servicio de LADWP (empresa municipal) a ~$0.24/kWh. Pasadena cuenta con energía municipal a ~$0.22/kWh. La economía solar sigue siendo sólida en todas las empresas de servicios públicos, especialmente en las zonas de SCE.',
    permitOfficeNote: 'La ciudad de Los Ángeles utiliza LADBS (Departamento de Edificación y Seguridad de LA) con aprobación el mismo día mediante SolarAPP+ para los sistemas elegibles. Santa Clarita, Pasadena, Long Beach, Glendale y otras ciudades tienen sus propios departamentos de construcción. Muchas jurisdicciones han adoptado SolarAPP+.',
    climateZoneDescription: 'Zona 8/9: clima templado de cuenca costera (LA, Torrance, Long Beach) con temperaturas moderadas e influencia de la capa marina. Zona 10: valles cálidos del interior (Pomona, West Covina) con veranos calurosos. Zona 14: clima desértico (Lancaster, Palmdale) con calor extremo y una exposición solar muy alta. Excelente producción solar en todo el condado.',
    countyContext: 'El condado de Los Ángeles se extiende desde la costa del Pacífico, a través de la cuenca de LA y el Valle de San Gabriel, hasta el desierto alto (Valle de Antelope). Las zonas costeras experimentan la influencia de la capa marina, pero mantienen una sólida producción solar. Los valles del interior tienen veranos calurosos con una alta demanda de climatización. Las zonas desérticas (Lancaster, Palmdale) presentan un calor extremo en verano con un potencial solar excepcional. Las altas tarifas de SCE en la mayoría de las zonas impulsan una economía solar sólida, mientras que las áreas de LADWP se benefician de la energía de respaldo y la independencia energética.',
  },
  'madera-county': {
    utilityRateNote: 'PG&E presta servicio en esta región del valle de San Joaquín con tarifas que promedian $0.44/kWh. El piso del valle experimenta calor extremo; las estribaciones del este, cerca de Yosemite, experimentan eventos de PSPS durante la temporada de incendios.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones en el valle y en la montaña. El piso del valle tiene un proceso de permisos sencillo; las áreas de las estribaciones del este pueden requerir normas de diseño contra incendios forestales. Las ciudades incorporadas pueden tener procesos independientes.',
    climateZoneDescription: 'Veranos calurosos en el valle con calor extremo en las elevaciones más bajas. Las estribaciones dan paso a un clima de montaña. Excelente potencial solar en todo el rango de elevaciones, con un promedio en el valle de más de 5.4 horas de sol pico.',
    countyContext: 'El condado de Madera abarca desde el piso del valle de San Joaquín (Madera, Chowchilla) hasta la puerta de entrada a Sierra Nevada (Oakhurst, cerca de Yosemite). Las zonas del valle experimentan calor extremo en verano y un excelente potencial solar de 5.4 horas de sol pico. Las estribaciones del este presentan riesgo de incendios forestales y eventos de PSPS. La agricultura y el turismo impulsan la economía.',
  },
  'marin-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (nivel E-TOU-C, rango 2025-2026). Las tarifas elevadas hacen que la economía solar sea sólida a pesar de la influencia de la capa marina en muchas zonas.',
    permitOfficeNote: 'San Rafael, Novato y otras ciudades cuentan con sus propios departamentos de construcción. Las áreas no incorporadas dependen de Marin County CDA. Las zonas costeras y de laderas pueden requerir una revisión adicional por zonas de incendio o terreno.',
    climateZoneDescription: 'Clima marino templado en todo el condado. Las zonas costeras y junto a la bahía experimentan capa marina con frecuencia, mientras que los valles interiores (Novato, San Rafael) reciben más sol. Temperaturas moderadas durante todo el año con baja demanda de enfriamiento, pero una producción solar confiable.',
    countyContext: 'El condado de Marin abarca desde la costa de la bahía de San Francisco (San Rafael, Mill Valley) hasta la costa del Pacífico, con valles interiores (Novato) en el medio. La influencia de la capa marina es común, especialmente cerca de la costa, pero la producción solar sigue siendo viable. Las altas tarifas de PG&E en todo el condado hacen que la economía solar sea sólida a pesar de la menor demanda de enfriamiento. Muchos vecindarios de alto poder adquisitivo valoran la independencia energética y los beneficios ambientales.',
  },
  'mariposa-county': {
    utilityRateNote: 'PG&E presta servicio en esta puerta de entrada a Yosemite con tarifas que promedian $0.44/kWh. El terreno montañoso y las zonas de incendios forestales experimentan eventos de PSPS frecuentes, lo que hace que el respaldo de batería sea esencial para resistir cortes de varios días.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones en la montaña y en las estribaciones. Las normas de diseño contra incendios forestales se aplican en toda la zona. Las elevaciones más altas requieren cálculos de carga de nieve. Las propiedades rurales pueden necesitar autorización de la fosa séptica.',
    climateZoneDescription: 'Clima mediterráneo de estribaciones que da paso a zonas de montaña en las elevaciones más altas. Veranos calurosos y secos e inviernos templados en las elevaciones más bajas. Excelente potencial solar en todo el rango de elevaciones.',
    countyContext: 'El condado de Mariposa es la puerta de entrada al Parque Nacional Yosemite, con el pueblo de Mariposa a 2,000 pies de elevación. El terreno de estribaciones y el clima de montaña brindan un excelente potencial solar de 5.1 horas de sol pico. El riesgo de incendios forestales y los eventos de PSPS son preocupaciones importantes para la resiliencia energética. El turismo y el patrimonio histórico de la fiebre del oro sostienen la economía local.',
  },
  'mendocino-county': {
    utilityRateNote: 'PG&E da servicio a esta región de la Costa Norte y del interior, con tarifas que promedian $0.44/kWh. Los frecuentes cortes PSPS en las zonas de riesgo de incendio hacen que el respaldo de batería sea fundamental.',
    permitOfficeNote: 'El condado procesa los permisos tanto para instalaciones costeras como para las de la zona vinícola del interior. Los sitios costeros requieren equipo de grado marino. Las zonas de riesgo de incendio requieren un diseño resistente al fuego y respaldo ante cortes PSPS.',
    climateZoneDescription: 'Las zonas costeras presentan un clima marino fresco con niebla, mientras que el Valle de Ukiah, en el interior, tiene veranos calurosos y secos. El riesgo de incendios forestales y los eventos PSPS son severos en todo el condado.',
    countyContext: 'El condado de Mendocino abarca desde la nebulosa Costa Norte (Fort Bragg, Point Arena) hasta los cálidos valles vinícolas del interior (Ukiah, Willits). Las zonas costeras registran entre 4.4 y 4.6 horas de sol pico con niebla marina, mientras que el Valle de Ukiah, en el interior, alcanza entre 5.0 y 5.2 horas con veranos calurosos. El historial de incendios forestales severos y los frecuentes cortes PSPS hacen que el respaldo de batería sea esencial tanto en la costa como en el interior.',
  },
  'merced-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (nivel E-TOU-C, rango 2025-2026). Las tarifas elevadas, combinadas con los calurosos veranos del Valle Central y la alta demanda de enfriamiento, hacen que la economía solar sea muy sólida en todo el condado de Merced.',
    permitOfficeNote: 'Merced, Los Banos y otras ciudades cuentan con sus propios departamentos de construcción. Las áreas no incorporadas dependen de Merced County Building and Safety.',
    climateZoneDescription: 'Clima cálido y seco del Valle Central con calor extremo en verano y alta demanda de enfriamiento. Zona 12 para las áreas del norte; Zona 13 para las áreas del sur con veranos más calurosos. Excelente producción solar durante todo el año, con un rendimiento muy alto en verano.',
    countyContext: 'El condado de Merced se ubica en el centro del valle de San Joaquín, con un terreno agrícola plano ideal para la energía solar. La zona experimenta calor extremo en verano con una demanda de enfriamiento muy alta, lo que hace que la energía solar sea especialmente valiosa para compensar los costos de aire acondicionado. Las altas tarifas de PG&E en todo el condado impulsan una economía solar sólida. Las zonas agrícolas y rurales se benefician de la energía solar con almacenamiento en baterías para lograr independencia y confiabilidad energética.',
  },
  'modoc-county': {
    utilityRateNote: 'Una combinación de PacifiCorp y Surprise Valley Electric presta servicio a esta región remota, con tarifas comparables a las de PG&E. La ubicación remota y los inviernos fríos hacen que la independencia energética sea atractiva.',
    permitOfficeNote: 'El condado procesa permisos para esta remota región de desierto alto. Se requieren cálculos de carga de nieve para las condiciones invernales. Los sistemas solares con almacenamiento en baterías son comunes.',
    climateZoneDescription: 'Desierto alto y frío con inviernos nevados y veranos calurosos. La gran altitud, de alrededor de 4,500 pies, requiere un diseño con carga de nieve. La ubicación remota hace que la independencia energética sea valiosa.',
    countyContext: 'El condado de Modoc es el remoto rincón del extremo noreste de California, con Alturas como sede del condado a 4,400 pies de elevación. Presenta un desierto alto y frío, con inviernos nevados y veranos calurosos. La infraestructura eléctrica limitada hace que la energía solar con almacenamiento en baterías sea atractiva. Se requiere un diseño con carga de nieve para las condiciones invernales.',
  },
  'mono-county': {
    utilityRateNote: 'Liberty Utilities (antes CalPeco) da servicio al área de Mammoth Lakes; Southern California Edison (SCE) da servicio al resto de la región. Las tarifas promedian $0.40/kWh. La gran elevación y la ubicación remota en la montaña hacen que la independencia energética resulte atractiva.',
    permitOfficeNote: 'El condado procesa los permisos para instalaciones de montaña y de alto desierto. La gran elevación requiere cálculos de carga de nieve. Mammoth Lakes cuenta con un proceso de permisos independiente a nivel municipal. Las zonas de viento pueden requerir ingeniería adicional para el sistema de montaje.',
    climateZoneDescription: 'Clima de alta montaña, con inviernos fríos y fuertes nevadas en las elevaciones superiores. Los valles de alto desierto de la Sierra Este presentan condiciones más suaves. Excelente potencial solar a pesar de la nieve invernal, gracias a la gran elevación y los cielos despejados.',
    countyContext: 'El condado de Mono abarca la Sierra Este, desde Bridgeport, a 6,500 pies de elevación, hasta Mammoth Lakes, a 7,900 pies. La gran elevación aporta un potencial solar excepcional de entre 4.8 y 5.8 horas de sol pico, a pesar de la nieve invernal. El aire despejado de montaña y la baja humedad mejoran la producción solar. La ubicación remota y las tormentas invernales hacen que el respaldo de batería sea valioso. El turismo y la recreación al aire libre impulsan la economía.',
  },
  'monterey-county': {
    utilityRateNote: 'PG&E da servicio a todo el condado de Monterey con tarifas que promedian $0.44/kWh. Los altos costos de energía, combinados con un excelente potencial solar en el valle de Salinas, hacen que los sistemas de energía solar y baterías sean muy atractivos tanto en las zonas costeras como en las del interior.',
    permitOfficeNote: 'El condado de Monterey procesa los permisos solares a través de RMA Building Services, con un plazo típico de 2 a 4 semanas. Las zonas costeras pueden requerir una revisión ambiental adicional. Las ciudades incorporadas, como Salinas y Monterey, cuentan con departamentos de construcción propios.',
    climateZoneDescription: 'El condado de Monterey abarca zonas costeras de niebla templada (Monterey, Seaside) y valles agrícolas cálidos del interior (Salinas, King City). Las zonas costeras tienen mañanas con capa marina y sol por la tarde; los valles interiores experimentan veranos calurosos con una fuerte producción solar y altas cargas de enfriamiento.',
    countyContext: 'El condado de Monterey se extiende desde la nebulosa costa del Pacífico hasta el corazón agrícola y caluroso del valle de Salinas. Ciudades costeras como Monterey y Seaside tienen climas mediterráneos templados con influencia de la capa marina, mientras que zonas del interior como Salinas y King City experimentan un intenso calor veraniego ideal para la producción solar. Las altas tarifas de PG&E y la frecuente demanda de energía en verano hacen que la combinación de energía solar y batería sea una excelente inversión en todo el condado.',
  },
  'napa-county': {
    utilityRateNote: 'PG&E da servicio a esta región vinícola de primer nivel, con tarifas que promedian $0.44/kWh. El riesgo de incendios forestales y los eventos de PSPS hacen que el respaldo con baterías resulte muy atractivo para propiedades de alto valor.',
    permitOfficeNote: 'El condado tramita los permisos para instalaciones en la región vinícola. Los sitios en viñedos de laderas pueden tener requisitos adicionales. Se recomienda un diseño resistente al fuego en zonas de alto riesgo.',
    climateZoneDescription: 'Clima mediterráneo con veranos calurosos y secos e inviernos templados. El terreno de viñedos en laderas y el riesgo de incendios forestales generan vulnerabilidad a los PSPS. Excelentes condiciones para la energía solar.',
    countyContext: 'El condado de Napa es la región vinícola más prestigiosa de California, con Napa, American Canyon, Calistoga y St. Helena como sus principales ciudades. Los veranos calurosos generan una excelente producción solar, de 5.0 a 5.2 horas de sol pico. El historial de incendios forestales (Glass Fire, Hennessey Fire) y los eventos de PSPS hacen que el respaldo con baterías resulte muy atractivo para las propiedades vinícolas de alto valor. Es un mercado de alto poder adquisitivo con fuerte demanda de sistemas solares y de baterías premium.',
  },
  'nevada-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (nivel E-TOU-C, rango 2025-2026). Las tarifas elevadas, sumadas a los frecuentes cortes PSPS, hacen que la energía solar con respaldo de batería sea especialmente valiosa en el condado de Nevada.',
    permitOfficeNote: 'El proceso de permisos aplica a todo el condado. Los sitios rurales y de las estribaciones pueden requerir una revisión adicional por zona de riesgo de incendio. Las áreas de mayor elevación (Truckee) requieren cálculos de carga de nieve y pueden tardar más tiempo.',
    climateZoneDescription: 'Zona 11: clima cálido del interior con inviernos más frescos que en el fondo del valle. Zona 16 (Truckee): clima frío de montaña con carga de nieve significativa y mayor demanda de calefacción. La producción solar es sólida en verano, pero se reduce en invierno.',
    countyContext: 'El condado de Nevada abarca desde las estribaciones de elevación media (Grass Valley, Nevada City) hasta la alta Sierra (Truckee). Las zonas de las estribaciones enfrentan frecuentes cortes PSPS durante la temporada de incendios y se benefician de la energía solar con almacenamiento en batería para contar con energía de respaldo. Truckee requiere ingeniería especializada de carga de nieve y presenta una producción reducida en invierno debido a la cobertura de nieve, pero su sólida producción en verano y sus altas cargas de calefacción siguen haciendo viable la energía solar.',
  },
  'orange-county': {
    utilityRateNote: 'Southern California Edison (SCE) da servicio a la mayor parte de Orange County a ~$0.36/kWh. La ciudad de Anaheim recibe servicio de Anaheim Public Utilities (municipal) a ~$0.22/kWh. La economía solar es sólida en todo el condado, especialmente en las zonas atendidas por SCE.',
    permitOfficeNote: 'Orange County no tiene áreas no incorporadas: cada ubicación pertenece a una ciudad. Irvine, Santa Ana, Anaheim, Huntington Beach y otras ciudades cuentan con sus propios departamentos de construcción. Muchas jurisdicciones han adoptado SolarAPP+ para agilizar la aprobación de sistemas solares residenciales.',
    climateZoneDescription: 'Zona 6/7: clima marino costero (Huntington Beach, Newport Beach) con temperaturas moderadas e influencia de la capa marina. Zona 8: clima interior templado (Anaheim, Santa Ana, Irvine) con veranos cálidos. Excelente producción solar en todo el condado; las zonas costeras experimentan neblina matutina y las zonas del interior enfrentan mayor demanda de refrigeración.',
    countyContext: 'Orange County se extiende desde la costa del Pacífico, a través de valles interiores, hasta las faldas de las montañas de Santa Ana. Las ciudades costeras experimentan la influencia de la capa marina, pero mantienen una producción solar sólida. Las ciudades del interior tienen veranos cálidos a calurosos con demanda de refrigeración moderada a alta. Las tarifas elevadas de SCE en la mayoría de las zonas impulsan una economía solar muy favorable. La energía municipal de Anaheim tiene tarifas más bajas, pero la energía solar sigue aportando valor de respaldo e independencia energética.',
  },
  'placer-county': {
    utilityRateNote: 'La tarifa residencial combinada de PG&E (nivel E-TOU-C, rango 2025-2026) está entre las más altas de California, lo que hace que la economía solar sea muy sólida.',
    permitOfficeNote: 'SolarAPP+ está disponible para sistemas que califiquen, lo que puede agilizar la aprobación hasta el mismo día para instalaciones residenciales estándar en el techo.',
    climateZoneDescription: 'Zona climática cálida de interior con alta demanda de enfriamiento en verano e inviernos templados. Excelente producción solar durante todo el año con variación estacional mínima.',
    countyContext: 'El condado de Placer abarca desde el piso del Valle Central (Roseville, Rocklin, Lincoln) hasta las estribaciones de la Sierra (Auburn, Loomis). Las zonas de menor elevación reciben exposición solar constante, mientras que las viviendas de las estribaciones pueden experimentar más sombra por el terreno. Las altas tarifas de PG&E hacen que la energía solar sea muy atractiva en todo el condado.',
  },
  'plumas-county': {
    utilityRateNote: 'Una combinación de PG&E y la Cooperativa Eléctrica Rural Plumas-Sierra da servicio a esta región montañosa. Las tarifas altas y los cortes frecuentes por PSPS hacen que la energía solar con respaldo de baterías resulte muy atractiva.',
    permitOfficeNote: 'El condado tramita los permisos para instalaciones en la alta Sierra. Se requieren cálculos de carga de nieve. Las reconstrucciones posteriores al Dixie Fire suelen integrar energía solar y respaldo con baterías.',
    climateZoneDescription: 'Clima de alta Sierra con inviernos de nieve intensa y veranos templados. La elevación, de 3,400 a 5,000 pies, requiere un diseño para carga de nieve. El terreno boscoso genera riesgo de PSPS.',
    countyContext: 'El condado de Plumas es una región montañosa de la alta Sierra, con Quincy, Portola y Chester a elevaciones de entre 3,400 y 5,000 pies. Las intensas nevadas invernales requieren sistemas certificados para carga de nieve. El incendio Dixie Fire de 2021 devastó gran parte del condado, lo que convirtió la resiliencia ante incendios y el respaldo eléctrico durante los PSPS en prioridades principales. El terreno boscoso y los cortes por PSPS hacen que el respaldo con baterías sea fundamental.',
  },
  'riverside-county': {
    utilityRateNote: 'Southern California Edison (SCE) presta servicio a la mayor parte del condado de Riverside a un costo aproximado de $0.36/kWh. La ciudad de Riverside recibe servicio de Riverside Public Utilities (empresa municipal) a un costo aproximado de $0.20/kWh. Las ciudades del desierto experimentan calor extremo con un potencial solar excepcional. La economía solar es sólida en las zonas de SCE; las zonas de RPU se benefician del respaldo de energía y la independencia energética.',
    permitOfficeNote: 'Riverside, Moreno Valley, Corona, Temecula y otras ciudades cuentan con sus propios departamentos de construcción. Las áreas no incorporadas dependen de Riverside County Building and Safety. Las ciudades del desierto requieren sistemas diseñados para calor extremo. Algunas jurisdicciones han adoptado SolarAPP+.',
    climateZoneDescription: 'Zona 10: valles interiores cálidos (Corona, Temecula, Murrieta) con veranos calurosos. Zona 14/15: clima desértico (Palm Springs, Indio, Desert Hot Springs) con calor extremo en verano y una exposición solar muy alta. Excelente producción solar en todo el condado, con las zonas desérticas entre las de mayor potencial en California.',
    countyContext: 'El condado de Riverside abarca desde los valles del oeste (Corona, Temecula) a través del Inland Empire hasta el desierto del valle de Coachella (Palm Springs, Indio). Las zonas occidentales experimentan veranos calurosos con alta demanda de enfriamiento. Las ciudades del desierto registran calor extremo en verano (110°F o más) con un potencial solar excepcional, entre los mejores de California. Las altas tarifas de SCE en la mayoría de las zonas impulsan una economía solar sólida. Las viviendas del desierto tienen cargas de enfriamiento muy altas que la energía solar puede compensar de forma eficaz.',
  },
  'sacramento-county': {
    utilityRateNote: 'SMUD (Sacramento Municipal Utility District) tiene un promedio de alrededor de $0.18/kWh, mucho más bajo que las zonas de PG&E. La energía solar sigue teniendo sentido para la energía de respaldo y para evitar futuros aumentos de tarifas, aunque los períodos de retorno de inversión son más largos. Folsom (este del condado) recibe servicio de PG&E a ~$0.44/kWh.',
    permitOfficeNote: 'La ciudad de Sacramento utiliza SolarAPP+ para la aprobación automatizada, en el mismo día, de los sistemas residenciales elegibles instalados en techo. Las jurisdicciones del condado fuera de la ciudad suelen tardar entre 2 y 4 semanas.',
    climateZoneDescription: 'Verano cálido y seco con invierno templado. Alta demanda de enfriamiento de junio a septiembre. Excelente producción solar con variación estacional mínima.',
    countyContext: 'El condado de Sacramento se extiende sobre el fondo del valle, con un terreno plano y sin obstrucciones ideal para la energía solar. La mayor parte del condado recibe servicio de SMUD, que tiene tarifas más bajas que PG&E pero que aun así ha registrado aumentos. Las zonas del este, como Folsom, dependen de PG&E y tienen tarifas mucho más altas. El condado experimenta olas de calor frecuentes en verano, lo que hace valiosa la energía de respaldo durante los picos de demanda.',
  },
  'san-benito-county': {
    utilityRateNote: 'PG&E da servicio a todo el condado de San Benito, con tarifas residenciales que promedian $0.44/kWh. Los calurosos veranos del interior del condado y los altos costos de electricidad hacen que los sistemas solares con baterías sean una excelente inversión para reducir los gastos de energía y ganar independencia de la red.',
    permitOfficeNote: 'El condado de San Benito tramita los permisos solares a través del Departamento de Construcción, con un plazo típico de 2 a 4 semanas. El condado es pequeño y los permisos suelen ser sencillos. Las ciudades incorporadas, como Hollister, tienen departamentos de construcción propios.',
    climateZoneDescription: 'El condado de San Benito tiene un clima cálido de valle interior, con veranos secos, poca niebla y una producción solar sólida durante todo el año. Las altas temperaturas de verano generan cargas de enfriamiento importantes, lo que hace que la combinación de energía solar y baterías sea ideal para manejar los costos de energía en las horas pico.',
    countyContext: 'El condado de San Benito es un pequeño condado agrícola tierra adentro desde la costa de la bahía de Monterey, centrado en Hollister y el Valle de San Juan. El clima cálido del interior recibe muy poca influencia de la niebla costera, lo que genera un excelente potencial solar con una producción alta en verano. El rápido crecimiento poblacional y las altas tarifas de PG&E hacen que la energía solar con almacenamiento en baterías resulte muy atractiva tanto para propietarios nuevos como existentes.',
  },
  'san-bernardino-county': {
    utilityRateNote: 'Southern California Edison (SCE) da servicio a todo el condado de San Bernardino a un promedio de ~$0.36/kWh. Las zonas del Inland Empire y del alto desierto experimentan calor extremo con un potencial solar excepcional. La economía solar es sólida en todo el condado gracias a las tarifas elevadas combinadas con una demanda de enfriamiento muy alta.',
    permitOfficeNote: 'San Bernardino, Fontana, Rancho Cucamonga, Ontario y otras ciudades cuentan con sus propios departamentos de construcción. Las zonas no incorporadas dependen de San Bernardino County Building and Safety. Las áreas del alto desierto requieren sistemas diseñados para soportar cambios extremos de temperatura.',
    climateZoneDescription: 'Zona 10: clima templado a cálido del Inland Empire (Rancho Cucamonga, Ontario, Fontana, Rialto) con veranos calurosos y alta demanda de enfriamiento. Zona 14: clima de alto desierto (Victorville, Hesperia, Apple Valley) con calor extremo en verano, inviernos fríos y una exposición solar excepcional. Excelente producción solar en todo el condado.',
    countyContext: 'El condado de San Bernardino abarca desde el Inland Empire occidental (Rancho Cucamonga, Ontario), pasando por el Valle de San Bernardino, hasta el alto desierto (Victorville, Hesperia). Las zonas occidentales experimentan veranos calurosos propios del Inland Empire con alta demanda de enfriamiento. Las ciudades del desierto registran calor extremo en verano (más de 100°F) con un potencial solar excepcional y cambios de temperatura que exigen un diseño de sistema robusto. Las altas tarifas de SCE en todo el condado impulsan una economía solar sólida.',
  },
  'san-diego-county': {
    utilityRateNote: 'San Diego Gas & Electric (SDG&E) da servicio a todo el condado de San Diego a un promedio de ~$0.47/kWh, una de las tarifas residenciales más altas del país. La economía solar es excepcionalmente favorable en todo el condado gracias a estas tarifas elevadas combinadas con una excelente exposición al sol.',
    permitOfficeNote: 'San Diego, Chula Vista, Oceanside, Escondido y otras ciudades cuentan con sus propios departamentos de construcción. Las zonas no incorporadas dependen de San Diego County Development Services. Muchas jurisdicciones han adoptado SolarAPP+ para agilizar la aprobación de sistemas solares residenciales.',
    climateZoneDescription: 'Zona 7: clima costero templado (San Diego, Oceanside, Encinitas) con temperaturas moderadas e influencia de la capa marina. Zona 10: valles interiores cálidos (Escondido, El Cajon, San Marcos) con veranos calurosos y alta demanda de enfriamiento. Excelente producción solar en todo el condado.',
    countyContext: 'El condado de San Diego se extiende desde la costa del Pacífico, pasando por valles interiores, hasta las montañas y el desierto. Las ciudades costeras experimentan la influencia de la capa marina, pero aun así reciben una producción solar excelente. Los valles interiores tienen veranos cálidos a calurosos con una demanda de enfriamiento de moderada a alta. Las tarifas excepcionalmente altas de SDG&E (entre las más altas del país) hacen que la economía solar sea extremadamente favorable en todo el condado. La región cuenta con uno de los mejores potenciales solares de California.',
  },
  'san-francisco-county': {
    utilityRateNote: 'PG&E da servicio a toda la ciudad de San Francisco, con tarifas residenciales que promedian $0.44/kWh, entre las más altas de California. Si bien el clima costero neblinoso de la ciudad y su entorno urbano denso presentan desafíos para la energía solar, los altos costos de electricidad y los sólidos valores ambientales hacen que la energía solar sea viable en las propiedades adecuadas.',
    permitOfficeNote: 'San Francisco procesa los permisos solares a través del Department of Building Inspection, con un tiempo de espera habitual de 3 a 5 semanas. La ciudad cuenta con códigos de construcción y requisitos sísmicos estrictos. SolarAPP+ está disponible para los sistemas que califican, con el fin de agilizar la aprobación.',
    climateZoneDescription: 'San Francisco tiene un microclima costero neblinoso muy particular, con veranos frescos, inviernos suaves y una influencia persistente de la neblina marina. La ciudad presenta una producción solar menor que las zonas del interior, pero los techos orientados al sur y las propiedades en vecindarios más soleados, como Mission y Noe Valley, aún logran un rendimiento solar viable.',
    countyContext: 'San Francisco es una ciudad-condado densa y urbana, con un icónico clima costero neblinoso y un stock limitado de viviendas unifamiliares. Muchos residentes viven en condominios o edificios multifamiliares, donde la instalación de paneles solares en el techo puede requerir la aprobación de la HOA o sistemas compartidos. Sin embargo, las casas unifamiliares con techos orientados al sur en vecindarios más soleados pueden lograr una producción solar sólida. Las altas tarifas de PG&E, los sólidos valores ambientales y los mandatos de energía renovable hacen que la energía solar resulte atractiva donde sea físicamente viable.',
  },
  'san-joaquin-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (nivel E-TOU-C, rango 2025-2026). Las tarifas elevadas, junto con los calurosos veranos del Valle Central y la alta demanda de enfriamiento, hacen que la economía solar sea muy sólida en todo el condado de San Joaquin.',
    permitOfficeNote: 'Stockton, Tracy, Manteca, Lodi y otras ciudades cuentan con sus propios departamentos de construcción. Las zonas no incorporadas dependen de San Joaquin County Community Development. Algunas ciudades están adoptando SolarAPP+ para agilizar la aprobación.',
    climateZoneDescription: 'Clima cálido y seco propio del Valle Central, con calor extremo en verano y alta demanda de enfriamiento. Inviernos suaves con una carga de calefacción mínima. Excelente producción solar durante todo el año, con un rendimiento muy alto en verano.',
    countyContext: 'El condado de San Joaquin se encuentra en el corazón del Valle Central, con un terreno agrícola plano ideal para la energía solar. Ciudades como Stockton, Tracy, Manteca y Lodi experimentan calor extremo en verano con una demanda de enfriamiento muy alta, lo que hace que la energía solar sea especialmente valiosa para compensar los costos de aire acondicionado. Las altas tarifas de PG&E en todo el condado impulsan una economía solar sólida. La zona presenta muy poca neblina marina o niebla, lo que garantiza una producción solar constante.',
  },
  'san-luis-obispo-county': {
    utilityRateNote: 'PG&E presta servicio a todo el condado de San Luis Obispo con tarifas residenciales que promedian $0.44/kWh. El condado abarca zonas costeras templadas y la calurosa región vitivinícola del interior, ambas con un excelente potencial solar. Los altos costos de electricidad hacen que los sistemas solares con baterías sean muy atractivos en toda la región.',
    permitOfficeNote: 'El condado de San Luis Obispo procesa los permisos solares a través del Departamento de Planificación y Construcción, con un plazo típico de 3 a 5 semanas. Las propiedades en la zona costera requieren revisión de la Comisión Costera. Las ciudades incorporadas como SLO, Paso Robles y Pismo Beach tienen departamentos de construcción independientes.',
    climateZoneDescription: 'El condado de San Luis Obispo abarca zonas costeras templadas (SLO, Pismo Beach, Morro Bay) y la calurosa región vitivinícola del interior (Paso Robles, Atascadero). Las zonas costeras presentan capa marina por la mañana con sol por la tarde; los valles del interior experimentan un calor intenso en verano con un potencial de producción solar muy alto.',
    countyContext: 'El condado de San Luis Obispo se extiende desde la pintoresca costa del Pacífico hasta la calurosa región vitivinícola del interior de Paso Robles. Las ciudades costeras disfrutan de climas mediterráneos templados con niebla matutina que se disipa hacia el mediodía, mientras que las zonas del interior experimentan un calor intenso en verano, ideal para la producción solar. La combinación de encanto costero y valles agrícolas del interior, junto con las altas tarifas de PG&E, convierte a la energía solar con baterías en una excelente inversión en todas las comunidades del condado.',
  },
  'san-mateo-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (nivel E-TOU-C, rango 2025-2026). Las tarifas altas hacen que la economía solar sea sólida a pesar de la influencia habitual de la capa marina en la Península.',
    permitOfficeNote: 'Redwood City, San Mateo, Daly City y otras ciudades tienen sus propios departamentos de construcción. Las zonas no incorporadas dependen de la Oficina de Planificación y Construcción del Condado de San Mateo. Varias jurisdicciones están adoptando SolarAPP+ para agilizar la aprobación.',
    climateZoneDescription: 'Clima marino templado en toda la Península. Las zonas costeras experimentan una capa marina frecuente, mientras que las zonas del interior (Redwood City, Menlo Park) reciben más sol. Temperaturas moderadas durante todo el año con baja demanda de climatización, pero producción solar confiable.',
    countyContext: 'El condado de San Mateo abarca la Península de San Francisco, desde la costa de la bahía hasta el litoral del Pacífico. La influencia de la capa marina es común, especialmente cerca de la costa y de la bahía. Las zonas del interior a lo largo de la autopista 101 (Redwood City, Menlo Park, San Mateo) experimentan menos capa marina y una mejor producción solar. Las altas tarifas de PG&E en todo el condado hacen que la economía solar sea sólida a pesar de la menor demanda de climatización.',
  },
  'santa-barbara-county': {
    utilityRateNote: 'Southern California Edison (SCE) da servicio a la mayor parte del condado de Santa Bárbara, con tarifas residenciales que promedian $0.40/kWh. El clima mediterráneo costero del condado y sus comunidades de altos ingresos hacen que los sistemas solares y de batería resulten muy atractivos para lograr independencia energética y ahorro de costos.',
    permitOfficeNote: 'El condado de Santa Bárbara procesa los permisos solares a través de Planning and Development, con un tiempo de espera habitual de 3 a 5 semanas. Las propiedades en la zona costera requieren revisión de la Coastal Commission. Ciudades incorporadas como Santa Bárbara, Santa María y Lompoc cuentan con departamentos de construcción propios.',
    climateZoneDescription: 'El condado de Santa Bárbara tiene un clima mediterráneo costero templado, con neblina marina matutina que suele disiparse hacia el mediodía. Los veranos frescos y los inviernos suaves mantienen la demanda energética moderada, sin dejar de ofrecer un fuerte potencial de producción solar, especialmente en laderas orientadas al sur.',
    countyContext: 'El condado de Santa Bárbara se extiende a lo largo de la pintoresca Costa Central, con sus icónicas montañas costeras y su clima mediterráneo. La niebla matutina es común, pero suele despejarse por la tarde, lo que permite una sólida producción solar. Las comunidades de altos ingresos del condado, su conciencia ambiental y las elevadas tarifas de SCE hacen que la energía solar combinada con almacenamiento en batería resulte muy atractiva para lograr independencia energética, ahorro de costos y resiliencia ante los cortes de electricidad durante la temporada de incendios forestales.',
  },
  'santa-clara-county': {
    utilityRateNote: 'La mayor parte del condado de Santa Clara recibe servicio de PG&E a un promedio de ~$0.44/kWh. La ciudad de Santa Clara recibe servicio de Silicon Valley Power (empresa municipal) a un promedio de ~$0.16-0.18/kWh. La economía solar es muy favorable en las zonas de PG&E; en las zonas de SVP, el valor de la energía solar proviene más de la energía de respaldo y de la protección ante futuros aumentos de tarifas, aunque el retorno de inversión sea más lento.',
    permitOfficeNote: 'San José, Sunnyvale, Mountain View, Palo Alto y otras ciudades cuentan con sus propios departamentos de construcción. Varias jurisdicciones están adoptando o ya han adoptado SolarAPP+ para agilizar la aprobación de sistemas solares residenciales.',
    climateZoneDescription: 'Clima interior cálido con veranos calurosos e inviernos templados. Alta demanda de enfriamiento de junio a septiembre. Excelente producción solar durante todo el año con variación estacional mínima.',
    countyContext: 'El condado de Santa Clara abarca Silicon Valley, desde la costa de la bahía de San Francisco, atravesando el valle de Santa Clara, hasta las estribaciones de las montañas de Santa Cruz. El fondo del valle ofrece excelentes condiciones solares con exposición al sol constante. Las altas tarifas de PG&E en la mayor parte del condado hacen que la economía solar sea muy favorable. La ciudad de Santa Clara cuenta con energía municipal a tarifas más bajas, por lo que el valor de la energía solar ahí proviene más de la energía de respaldo y la independencia energética.',
  },
  'santa-cruz-county': {
    utilityRateNote: 'PG&E da servicio a todo el condado de Santa Cruz con tarifas residenciales que promedian $0.44/kWh. Los altos costos de electricidad, sumados a una comunidad con conciencia ambiental y un fuerte potencial solar costero, hacen que los sistemas de energía solar y baterías sean muy populares.',
    permitOfficeNote: 'El condado de Santa Cruz procesa los permisos solares a través del Departamento de Planificación (Building Services), con un plazo típico de 3 a 5 semanas. Las propiedades en la zona costera requieren revisión de la Comisión Costera. Las ciudades incorporadas, como Santa Cruz y Watsonville, cuentan con departamentos de construcción propios.',
    climateZoneDescription: 'El condado de Santa Cruz tiene un clima costero mediterráneo templado, con capa marina matutina que suele disiparse hacia el mediodía. Los veranos frescos y los inviernos templados mantienen la demanda de energía moderada, a la vez que ofrecen un fuerte potencial de producción solar, especialmente en laderas orientadas al sur por encima de la línea de niebla.',
    countyContext: 'El condado de Santa Cruz se extiende a lo largo del norte de la bahía de Monterey, con un icónico terreno costero de secuoyas y una fuerte conciencia ambiental. La niebla matutina es común, pero generalmente se disipa por la tarde, lo que permite una producción solar sólida. La comunidad progresista del condado, las altas tarifas de PG&E y los frecuentes cortes de red durante las tormentas de invierno hacen que la combinación de energía solar y almacenamiento en batería sea muy atractiva para la independencia energética y la resiliencia.',
  },
  'shasta-county': {
    utilityRateNote: 'Las tarifas residenciales de PG&E promedian $0.44/kWh. El calor extremo del verano genera altas cargas de aire acondicionado, lo que hace que el ahorro solar sea considerable para los propietarios del condado de Shasta.',
    permitOfficeNote: 'El condado procesa los permisos solares para las zonas no incorporadas. Ciudades como Redding cuentan con departamentos de permisos independientes, con plazos similares.',
    climateZoneDescription: 'Clima del interior muy caluroso, con temperaturas de verano que suelen superar los 105 °F (40 °C). La alta demanda de enfriamiento de junio a septiembre impulsa el uso máximo de energía.',
    countyContext: 'El condado de Shasta se encuentra en el extremo norte del Valle Central, donde el calor extremo del verano genera altas cargas de aire acondicionado. Redding, Anderson y Shasta Lake experimentan temperaturas abrasadoras propias del valle, con frecuentes cortes PSPS durante la temporada de incendios. Las altas tarifas de PG&E y la intensa demanda de enfriamiento hacen que la energía solar resulte muy atractiva.',
  },
  'sierra-county': {
    utilityRateNote: 'PG&E da servicio a la mayoría de las zonas; Plumas-Sierra Rural Electric Cooperative (REC) atiende algunas regiones del norte. Las tarifas de PG&E promedian $0.44/kWh. La ubicación remota en la montaña y las tormentas de invierno hacen que la independencia energética con respaldo de batería sea muy atractiva.',
    permitOfficeNote: 'El condado procesa los permisos para instalaciones de montaña. Se requieren cálculos de carga de nieve para todas las elevaciones por encima de los 4,000 pies. La ubicación remota puede extender los plazos de coordinación. Se aplican estándares de diseño contra incendios forestales en zonas boscosas.',
    climateZoneDescription: 'Clima de alta montaña con inviernos fríos y nevadas intensas. Veranos cortos con sol intenso en altitud. Excelente potencial solar a pesar de los desafíos invernales, gracias a la alta elevación y al aire limpio de montaña.',
    countyContext: 'El condado de Sierra es una región remota en el norte de la Sierra, con localidades como Loyalton y Downieville a una elevación de entre 4,000 y 5,000 pies. La historia de la fiebre del oro y el terreno montañoso ofrecen un excelente potencial solar, con 5.0 horas de sol pico, a pesar de la nieve invernal. La ubicación remota y los eventos de PSPS hacen que el respaldo de batería sea valioso. El turismo, la silvicultura y la recreación al aire libre impulsan la economía.',
  },
  'siskiyou-county': {
    utilityRateNote: 'Las tarifas residenciales de PG&E promedian $0.44/kWh. La gran altitud y los inviernos fríos aumentan los costos de calefacción, lo que hace que la energía solar con respaldo de batería sea valiosa para la resiliencia energética.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones de montaña y zonas rurales. Se requieren cálculos de carga de nieve para los sistemas a gran altitud. La construcción resistente a incendios es común.',
    climateZoneDescription: 'Clima frío de montaña con inviernos nevados y veranos templados. La gran altitud requiere un diseño con carga de nieve. Menor producción solar que en el valle, pero aun así viable.',
    countyContext: 'El condado de Siskiyou es la región montañosa del extremo norte de California, con Yreka, Mount Shasta y Weed a elevaciones de entre 2,500 y 3,500 pies. Los inviernos fríos requieren sistemas solares clasificados para carga de nieve. Los cortes de PSPS y las tormentas invernales hacen que el respaldo de batería sea fundamental. Aunque hay menos horas de sol que en el valle, las altas tarifas de PG&E siguen haciendo que la energía solar sea atractiva.',
  },
  'solano-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (categoría E-TOU-C, rango 2025-2026). Las tarifas altas hacen que la economía solar sea muy sólida, especialmente en las zonas del interior (Fairfield, Vacaville) con alta demanda de enfriamiento.',
    permitOfficeNote: 'Los plazos de permisos varían según la jurisdicción. Fairfield, Vacaville, Vallejo y Benicia cuentan cada una con su propio departamento de construcción municipal. Las zonas no incorporadas dependen del Departamento de Manejo de Recursos del Condado de Solano.',
    climateZoneDescription: 'Verano cálido y seco con inviernos templados en las zonas del interior (Fairfield, Vacaville). Las zonas costeras (Vallejo, Benicia) tienen temperaturas más moderadas por la influencia marina, pero aun así mantienen una producción solar sólida.',
    countyContext: 'El condado de Solano se extiende desde el valle del interior (Fairfield, Vacaville) hasta la costa de la bahía de San Francisco (Vallejo, Benicia). Las zonas del interior tienen veranos calurosos con alta demanda de enfriamiento, mientras que las zonas costeras tienen temperaturas más moderadas. Las altas tarifas de PG&E en todo el condado hacen que la economía solar sea muy favorable. El condado está estratégicamente ubicado entre Sacramento y el Área de la Bahía.',
  },
  'sonoma-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (nivel E-TOU-C, rango 2025-2026). Las tarifas elevadas, sumadas a los frecuentes cortes PSPS durante la temporada de incendios, hacen que la energía solar con respaldo de batería sea especialmente valiosa en el condado de Sonoma.',
    permitOfficeNote: 'Santa Rosa, Petaluma, Rohnert Park y otras ciudades cuentan con sus propios departamentos de construcción. Las zonas no incorporadas dependen de Sonoma County PRMD. Las áreas en zonas de riesgo de incendio pueden requerir una revisión adicional.',
    climateZoneDescription: 'Zona 1: clima marino fresco a lo largo de la costa. Zona 2: clima templado del interior para los valles (Santa Rosa, Petaluma, Sonoma) con veranos cálidos e inviernos frescos. Producción solar sólida en los valles del interior; las zonas costeras reciben mayor influencia de la neblina marina.',
    countyContext: 'El condado de Sonoma se extiende desde la costa del Pacífico, a través de los valles del interior (Santa Rosa, Valle de Sonoma), hasta las montañas Mayacamas. Los valles del interior experimentan veranos cálidos con un excelente potencial solar. Las zonas costeras reciben influencia de la neblina marina. Las altas tarifas de PG&E y los frecuentes cortes PSPS durante la temporada de incendios hacen que la energía solar con almacenamiento en batería sea especialmente valiosa en todo el condado.',
  },
  'stanislaus-county': {
    utilityRateNote: 'Modesto recibe servicio de MID (Modesto Irrigation District), una empresa pública con tarifas de alrededor de $0.18-0.20/kWh, mucho más bajas que las de PG&E. Otras ciudades (Turlock, Ceres, Oakdale, Riverbank) son atendidas por PG&E a ~$0.44/kWh. En las zonas de MID, el valor de la energía solar proviene del respaldo eléctrico y la independencia energética, más que del ahorro puro en tarifas. En las zonas de PG&E, la economía solar es muy sólida.',
    permitOfficeNote: 'Modesto, Turlock, Ceres y otras ciudades tienen sus propios departamentos de construcción. Las áreas no incorporadas dependen del Departamento de Planificación y Desarrollo Comunitario del Condado de Stanislaus.',
    climateZoneDescription: 'Clima cálido y seco del Valle Central con calor extremo en verano y alta demanda de refrigeración. Zona 12 en las áreas del norte; Zona 13 en las áreas del sur, con veranos aún más calurosos. Excelente producción solar durante todo el año, con un rendimiento muy alto en verano.',
    countyContext: 'Stanislaus County se ubica en el corazón del Valle Central, con un terreno agrícola plano ideal para la energía solar. La zona experimenta calor extremo en verano con demanda de refrigeración muy alta. Modesto recibe servicio de MID, un distrito público de riego con tarifas más bajas que PG&E, por lo que el valor de la energía solar ahí proviene del respaldo eléctrico y la independencia energética. Otras ciudades son atendidas por PG&E, con tarifas altas que impulsan una economía solar sólida.',
  },
  'sutter-county': {
    utilityRateNote: 'PG&E presta servicio a esta región del Valle de Sacramento con tarifas que promedian $0.44/kWh. Los veranos calurosos y la economía agrícola hacen que la energía solar sea atractiva tanto para propiedades residenciales como agrícolas.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones residenciales y agrícolas en el valle. El terreno plano del valle simplifica el diseño solar.',
    climateZoneDescription: 'Veranos calurosos e inviernos templados propios del valle. El terreno agrícola plano ofrece excelentes condiciones para la energía solar. Los extremos de calor hacen que la reducción de costos de climatización sea valiosa.',
    countyContext: 'El condado de Sutter es una región agrícola del Valle de Sacramento, con Yuba City y Live Oak como centros principales. Los calurosos veranos del valle generan una excelente producción solar de 5.3 horas pico de sol. Las altas tarifas de PG&E y el calor extremo hacen que la energía solar sea atractiva para reducir los costos de climatización. El terreno plano y la economía agrícola crean un mercado solar sólido para propiedades residenciales y agrícolas.',
  },
  'tehama-county': {
    utilityRateNote: 'Las tarifas residenciales de PG&E promedian $0.44/kWh. Los calurosos veranos del valle y las necesidades energéticas agrícolas hacen que la energía solar sea atractiva tanto para aplicaciones residenciales como agrícolas.',
    permitOfficeNote: 'El condado procesa los permisos para las zonas no incorporadas y las ciudades más pequeñas. Las instalaciones rurales pueden requerir una revisión adicional del sitio por retiros agrícolas.',
    climateZoneDescription: 'Clima cálido de valle con temperaturas de verano superiores a 100 °F e inviernos templados. La alta demanda de enfriamiento y las cargas de riego agrícola impulsan el consumo de energía.',
    countyContext: 'El condado de Tehama se ubica en el norte del valle de Sacramento, entre Red Bluff y Corning, con un terreno agrícola plano. Los veranos calurosos, las altas tarifas de PG&E y los cortes rurales por PSPS hacen que la energía solar con respaldo de batería sea valiosa tanto para operaciones residenciales como agrícolas. El fondo del valle ofrece una excelente exposición solar.',
  },
  'trinity-county': {
    utilityRateNote: 'El condado de Trinity recibe servicio principalmente de PG&E, con algunas zonas cubiertas por Trinity Public Utilities District, con tarifas residenciales que promedian $0.44/kWh. La ubicación remota del condado en la montaña, los frecuentes cortes de energía por incendios forestales (PSPS) y los altos costos de electricidad hacen que la energía solar con respaldo de batería sea una excelente inversión para la resiliencia energética.',
    permitOfficeNote: 'El condado de Trinity procesa los permisos solares a través del Departamento de Construcción, con un plazo típico de 2 a 4 semanas. El condado es muy rural y montañoso, con un trámite de permisos sencillo. Pueden aplicar consideraciones de carga de nieve y riesgo de incendio a mayores elevaciones.',
    climateZoneDescription: 'El condado de Trinity tiene un clima de montaña con veranos calurosos y secos, inviernos fríos con nieve a mayores elevaciones y terreno boscoso. La producción solar varía según la elevación y la sombra del bosque, pero los sitios despejados orientados al sur reciben un fuerte sol de verano. La ubicación remota y el riesgo de incendios forestales hacen que el respaldo de batería sea muy valioso.',
    countyContext: 'El condado de Trinity es un remoto condado de montaña boscosa en el extremo noroeste de California, centrado en Weaverville y las Trinity Alps. El condado experimenta veranos calurosos con un fuerte potencial solar en sitios despejados, aunque el bosque denso puede generar desafíos de sombra. Los frecuentes cortes por PSPS relacionados con incendios forestales y los cortes por tormentas de invierno hacen que la combinación de energía solar y almacenamiento en batería sea esencial para la resiliencia energética. Las altas tarifas de PG&E y la infraestructura de red remota impulsan aún más la adopción de la energía solar.',
  },
  'tulare-county': {
    utilityRateNote: 'Tulare County recibe servicio principalmente de Southern California Edison, con algunas zonas atendidas por PG&E, con tarifas residenciales que promedian $0.40/kWh. Los veranos muy calurosos del Valle Central y las altas cargas de refrigeración hacen que los sistemas solares con baterías sean una excelente inversión para reducir los gastos de energía.',
    permitOfficeNote: 'Tulare County procesa los permisos solares a través de la Agencia de Administración de Recursos, con un plazo típico de 2 a 4 semanas. El condado es de carácter agrícola y el proceso de permisos es sencillo. Las ciudades incorporadas como Visalia, Tulare y Porterville tienen departamentos de construcción independientes.',
    climateZoneDescription: 'Tulare County tiene un clima muy caluroso propio del Valle Central, con calor intenso en verano que supera regularmente los 38°C, mínima neblina costera y cargas de refrigeración muy altas. El condado presenta un potencial de producción solar excepcional durante todo el año, con un rendimiento pico muy alto en verano.',
    countyContext: 'Tulare County se ubica en el corazón de la región agrícola del Valle de San Joaquín, con algunas de las temperaturas de verano más altas de California. Ciudades como Visalia, Tulare y Porterville experimentan calor intenso con mínima influencia costera, lo que genera un potencial solar excepcional y una producción muy alta en verano. La economía agrícola del condado y los costos muy altos de refrigeración hacen que el almacenamiento solar más baterías resulte muy atractivo tanto para aplicaciones residenciales como agrícolas.',
  },
  'tuolumne-county': {
    utilityRateNote: 'PG&E da servicio a esta región de Mother Lode con tarifas que promedian $0.44/kWh. Las elevaciones más altas y las zonas de riesgo de incendio experimentan eventos frecuentes de PSPS, lo que hace que el respaldo con baterías sea fundamental para la resiliencia ante cortes de varios días.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones en estribaciones y zonas montañosas. Se aplican estándares de diseño contra incendios forestales en zonas de alto riesgo. Se requieren cálculos de carga de nieve para elevaciones superiores a 900 metros.',
    climateZoneDescription: 'Transición de un clima cálido de estribaciones a zonas montañosas. Las elevaciones más bajas tienen veranos calurosos y secos; las elevaciones más altas presentan nieve en invierno. Excelente potencial solar en todas las elevaciones.',
    countyContext: 'Tuolumne County se extiende desde las estribaciones de la Fiebre del Oro (Sonora, Jamestown, a 550-700 metros) hasta la alta Sierra Nevada (Twain Harte, a 1,100 metros). Es la puerta de entrada al Parque Nacional Yosemite. Las elevaciones aportan un excelente potencial solar de 5.0 a 5.2 horas de sol pico, aunque las zonas más altas requieren ingeniería para carga de nieve. El riesgo de incendios forestales y los eventos de PSPS son preocupaciones importantes para la resiliencia energética.',
  },
  'ventura-county': {
    utilityRateNote: 'Southern California Edison (SCE) da servicio a todo el condado de Ventura a aproximadamente $0.36/kWh. Las ciudades costeras experimentan la capa marina, mientras que los valles del interior tienen veranos calurosos. La economía solar es sólida en todo el condado debido a las tarifas de SCE combinadas con una demanda de enfriamiento de moderada a alta.',
    permitOfficeNote: 'Oxnard, Thousand Oaks, Simi Valley, Ventura y otras ciudades tienen sus propios departamentos de construcción. Las zonas no incorporadas dependen de la Agencia de Recursos y Manejo (RMA) del Condado de Ventura. Las zonas costeras pueden tener consideraciones especiales de permisos por la capa marina.',
    climateZoneDescription: 'Zona 6: clima marino costero (Oxnard, Ventura) con influencia de la capa marina y temperaturas moderadas. Zona 9: valles interiores cálidos (Thousand Oaks, Simi Valley, Moorpark), con veranos calurosos y alta demanda de enfriamiento. Excelente producción solar en todo el condado.',
    countyContext: 'El condado de Ventura se extiende desde la costa del Pacífico, a través de la llanura de Oxnard, hasta los valles interiores de Simi y Conejo. Las ciudades costeras experimentan la capa marina, pero reciben una producción solar sólida. Los valles del interior tienen veranos calurosos con demanda de enfriamiento de moderada a alta. Las altas tarifas de SCE impulsan una economía solar muy favorable en toda la región. El condado se encuentra entre Los Ángeles y Santa Bárbara, con microclimas variados.',
  },
  'yolo-county': {
    utilityRateNote: 'Tarifa residencial combinada de PG&E (categoría E-TOU-C, rango 2025-2026). Las tarifas altas hacen que la economía solar sea muy sólida. Davis y otras ciudades han adoptado SolarAPP+ para agilizar los permisos.',
    permitOfficeNote: 'Davis ha adoptado SolarAPP+ para sistemas residenciales de techo elegibles, lo que permite la aprobación automática el mismo día. Woodland, West Sacramento y las zonas no incorporadas del condado suelen tardar 2 semanas.',
    climateZoneDescription: 'Verano cálido y seco con invierno templado. Alta demanda de enfriamiento de junio a septiembre. Excelente producción solar con muy poca variación estacional.',
    countyContext: 'El condado de Yolo se extiende por el Valle Central al oeste de Sacramento, con terreno agrícola plano ideal para la energía solar. El condado es sede de UC Davis y tiene un enfoque progresista hacia las energías renovables, con varias ciudades que han adoptado SolarAPP+ para agilizar los permisos solares. Las altas tarifas de PG&E hacen que la economía solar sea muy favorable en todo el condado.',
  },
  'yuba-county': {
    utilityRateNote: 'PG&E da servicio a esta región del Valle de Sacramento con tarifas que promedian $0.44/kWh. Los veranos calurosos hacen que la energía solar sea atractiva para reducir los costos de refrigeración. Las estribaciones presentan eventos ocasionales de PSPS.',
    permitOfficeNote: 'El condado procesa permisos para instalaciones en el valle y en las estribaciones. El terreno plano del valle agrícola simplifica el diseño solar. Las estribaciones del este pueden tener requisitos de diseño contra incendios forestales.',
    climateZoneDescription: 'Veranos calurosos en el valle e inviernos templados. El terreno plano del valle agrícola ofrece excelentes condiciones solares. Las estribaciones al este presentan riesgo ocasional de incendios forestales.',
    countyContext: 'Yuba County es una región del Valle de Sacramento con Marysville y Wheatland como centros principales. Los veranos calurosos del valle aportan una excelente producción solar de 5.3 horas de sol pico. Las tarifas altas de PG&E y el calor extremo hacen que la energía solar resulte atractiva para reducir los costos de refrigeración. Las estribaciones del este presentan eventos ocasionales de PSPS, lo que hace valioso el respaldo con baterías en esas zonas.',
  },
};

export const MARKET_CITY_CONTENT_ES: Record<string, MarketCityContentEs> = {
  'adelanto': {
    localNote: 'Adelanto se encuentra en la región del alto desierto de Mojave, con un clima desértico extremo y un potencial solar excepcional. La zona presenta una demanda de enfriamiento muy alta y cielos despejados durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Adelanto?', a: 'Sí. Adelanto cuenta con su propio departamento de construcción y seguridad municipal, con un tiempo de espera habitual de 2 a 3 semanas para los sistemas solares residenciales. Su instalador se encarga de todos los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Adelanto con las tarifas de SCE?', a: 'Sin duda. Los residentes de Adelanto pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano extremos debido al calor del desierto. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y proporciona energía de respaldo esencial durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe Adelanto para la energía solar?', a: 'Adelanto recibe en promedio 6.4 horas de sol pico al día en la Zona 14/15. Su ubicación en el alto desierto ofrece una producción solar excepcional, con cielos despejados durante todo el año y un sol intenso en verano.' },
    ],
  },
  'alhambra': {
    localNote: 'Alhambra se ubica en el oeste del Valle de San Gabriel, con un clima cálido del interior y una arquitectura diversa que incluye casas históricas de estilo Craftsman. La zona experimenta veranos calurosos con una alta demanda de climatización.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Alhambra?', a: 'Sí. Alhambra cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas para permisos solares residenciales. Su instalador se encarga de todo el papeleo del permiso y de las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Alhambra con las tarifas de SCE?', a: 'Sí. Los residentes de Alhambra pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de climatización en verano debido al clima del valle del interior. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo confiable.' },
      { q: '¿Cuánto sol recibe Alhambra para la energía solar?', a: 'Alhambra recibe un promedio de alrededor de 5.7 horas pico de sol al día en la Zona 9. La ubicación en el Valle de San Gabriel ofrece una excelente producción solar, con veranos calurosos y despejados, y una mínima interferencia de la capa marina.' },
    ],
  },
  'alturas': {
    localNote: 'Alturas es la sede del condado más remota de California, a 4,400 pies de elevación, en el desierto alto. Los inviernos fríos y la ubicación remota hacen que el respaldo de batería y la independencia energética sean muy valiosos.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Alturas?', a: 'Sí. Alturas requiere permisos a través de la Oficina de Planificación del condado de Modoc, con un plazo típico de 2 a 4 semanas. Se requieren cálculos de carga de nieve para gran altitud. Su instalador se encarga de la solicitud ante el condado.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Alturas por su ubicación remota?', a: 'Sin duda. Alturas es una de las comunidades más remotas de California, con infraestructura eléctrica limitada. La energía solar residencial con respaldo de batería proporciona independencia energética y resiliencia durante las tormentas invernales. Los sistemas clasificados para nieve soportan las condiciones invernales del desierto alto.' },
      { q: '¿Cuánto sol recibe Alturas para la energía solar?', a: 'Alturas recibe un promedio de 4.9 horas pico de sol al día, a 4,400 pies, en la Zona 1. La elevación del desierto alto ofrece una sólida producción solar a pesar de los inviernos fríos. Los cielos despejados y la gran altitud aportan un sol intenso durante todo el año.' },
    ],
  },
  'american-canyon': {
    localNote: 'American Canyon se ubica en la entrada sur del condado, con un excelente potencial solar. Los eventos de PSPS y la cercanía al Área de la Bahía hacen que el respaldo con baterías resulte atractivo para esta comunidad en crecimiento.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en American Canyon?', a: 'Sí. American Canyon requiere permisos a través del Departamento de Planificación, Construcción y Servicios Ambientales del Condado de Napa, con un procesamiento de 2 a 4 semanas. Tu instalador se encarga del trámite del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en American Canyon con las tarifas de PG&E?', a: 'Sí. PG&E cobra $0.44/kWh y los cortes por PSPS afectan las zonas de laderas. La energía solar con respaldo de baterías ofrece independencia energética y resiliencia. American Canyon recibe 5.2 horas de sol pico, excelente para la producción solar.' },
      { q: '¿Cuánto sol recibe American Canyon para la energía solar?', a: 'American Canyon recibe en promedio 5.2 horas de sol pico al día en la Zona 2. La ubicación en el extremo sur del condado trae veranos cálidos y cielos despejados, ideales para la energía solar. La cercanía al Área de la Bahía significa un mercado solar sólido.' },
    ],
  },
  'anaheim': {
    localNote: 'Anaheim recibe servicio de Anaheim Public Utilities, una empresa municipal con tarifas más bajas que SCE. El valor de la energía solar proviene del respaldo eléctrico, la independencia energética y la compensación de los costos moderados de refrigeración en esta ciudad del interior de Orange County.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Anaheim?', a: 'Sí. Anaheim tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Anaheim con las tarifas de APU?', a: 'Las tarifas de Anaheim Public Utilities promedian $0.22/kWh, más bajas que las de SCE. El retorno de la inversión solar es más lento, pero los sistemas solares con baterías brindan respaldo eléctrico durante cortes, protegen contra futuros aumentos de tarifas y compensan la demanda moderada de refrigeración.' },
      { q: '¿Cuánto sol recibe Anaheim para la energía solar?', a: 'Anaheim recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 8. La ubicación en el interior de Orange County ofrece una producción solar sólida, con veranos cálidos y mínima interferencia de la capa marina.' },
    ],
  },
  'anderson': {
    localNote: 'Anderson se encuentra justo al sur de Redding, en el fondo del valle, con un calor de verano igualmente extremo. El terreno plano y los techos sin obstrucciones son ideales para las instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Anderson?', a: 'Sí. Anderson requiere permisos a través del City Building Department, con un tiempo de espera habitual de 2 a 4 semanas. Su contratista solar se encarga de la solicitud municipal y de las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Anderson con los altos costos de aire acondicionado?', a: 'Sí. Las tarifas de PG&E de $0.44/kWh y el calor extremo del verano generan facturas de aire acondicionado enormes. La energía solar residencial con almacenamiento en batería proporciona independencia energética y enfriamiento de respaldo durante los eventos PSPS, cuando las temperaturas superan los 105 °F.' },
      { q: '¿Cuánta luz solar recibe Anderson para la energía solar?', a: 'Anderson recibe en promedio 5.4 horas de sol pico al día en la Zona 11. Su ubicación en el fondo del valle ofrece una producción solar sólida durante todo el año, con un sol abrasador en verano y cielos despejados.' },
    ],
  },
  'angels-camp': {
    localNote: 'Angels Camp es famosa por el Jumping Frog Jubilee y la historia de Mark Twain. Su ubicación en las estribaciones, a 1,400 pies de elevación, ofrece una excelente exposición solar, aunque los eventos de PSPS durante la temporada de incendios hacen que el respaldo de batería sea valioso.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Angels Camp?', a: 'Sí. Angels Camp requiere permisos a través del Departamento de Planificación del condado de Calaveras, con un plazo típico de 3 a 5 semanas. El terreno de las estribaciones puede requerir una revisión estructural para las instalaciones en techo. Su contratista solar se encarga del proceso de solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Angels Camp con el riesgo de PSPS?', a: 'Sin duda. Las tarifas de PG&E son de $0.44/kWh y los cortes de PSPS son frecuentes en condiciones secas y con viento. La energía solar residencial con respaldo de batería proporciona independencia energética durante cortes de varios días y un ahorro a largo plazo. Angels Camp recibe 5.1 horas pico de sol, excelente para una producción confiable.' },
      { q: '¿Cuánto sol recibe Angels Camp para la energía solar?', a: 'Angels Camp recibe un promedio de 5.1 horas pico de sol al día en las estribaciones de la Sierra. Los veranos calurosos con cielos despejados y una mínima influencia costera generan una sólida producción solar. La elevación de las estribaciones asegura una exposición solar constante por encima de la capa de inversión del valle.' },
    ],
  },
  'antioch': {
    localNote: 'Antioch es una ciudad del delta al este, con veranos calurosos y secos sin interferencia de la capa marina. La zona experimenta un calor extremo en verano, lo que hace que la energía solar sea especialmente valiosa.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Antioch?', a: 'Sí. Antioch tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Antioch con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Antioch pagan tarifas de PG&E de alrededor de $0.44/kWh, con una demanda de enfriamiento muy alta en verano debido al calor extremo. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo fundamental durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Antioch para la energía solar?', a: 'Antioch recibe en promedio alrededor de 5.4 horas de sol pico al día en las Zonas 4/12. La ubicación en el delta al este ofrece una excelente producción solar, con veranos calurosos y despejados sin capa marina.' },
    ],
  },
  'apple-valley': {
    localNote: 'Apple Valley se encuentra en el alto desierto del Valle Victor, con un clima desértico extremo y una producción solar excepcional. La zona presenta una demanda de enfriamiento muy alta durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Apple Valley?', a: 'Sí. Apple Valley cuenta con su propio departamento de construcción municipal. Los permisos solares residenciales suelen procesarse en un plazo de 2 a 3 semanas. Su contratista gestiona todo el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Apple Valley con las tarifas de SCE?', a: 'Sin duda. Los residentes de Apple Valley pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de aire acondicionado en verano extremos debido al calor del desierto. La energía solar residencial con almacenamiento en batería genera un ahorro excepcional y energía de respaldo.' },
      { q: '¿Cuánta luz solar recibe Apple Valley para la energía solar?', a: 'Apple Valley recibe en promedio 6.4 horas de sol pico al día en la Zona 14/15. Su clima de alto desierto ofrece una producción solar excepcional, con cielos despejados durante todo el año y un sol intenso.' },
    ],
  },
  'arcata': {
    localNote: 'Arcata se ubica en la bahía de Humboldt, cerca de Eureka, con condiciones costeras neblinosas similares. Esta ciudad universitaria recibe un poco más de sol que la costera Eureka, pero el respaldo con baterías sigue siendo valioso para la resiliencia ante tormentas.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Arcata?', a: 'Sí. Arcata requiere permisos a través del Departamento de Construcción del Condado de Humboldt, con un procesamiento de 2 a 4 semanas. El entorno marino requiere componentes resistentes a la corrosión. Su instalador se encarga de los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Arcata con neblina y lluvia?', a: 'Sin duda. PG&E cobra $0.44/kWh y las tormentas invernales causan cortes de electricidad. La energía solar con respaldo de baterías ofrece ahorros durante todo el año, a pesar de las 4.4 horas de sol pico por la neblina costera. Un dimensionamiento adecuado supera los retos climáticos.' },
      { q: '¿Cuánto sol recibe Arcata para la energía solar?', a: 'Arcata recibe un promedio de 4.4 horas de sol pico al día en la Zona 1. La ubicación costera trae neblina matutina, pero las colinas del interior reciben más sol. Las instalaciones en techos orientados al sur evitan la sombra de las secuoyas y maximizan la producción.' },
    ],
  },
  'arroyo-grande': {
    localNote: 'Arroyo Grande se ubica en un valle costero cerca de Pismo Beach, con capa marina matutina que suele disiparse hacia el mediodía. El clima templado de la ciudad y su cercanía a la costa generan un buen potencial solar con una demanda energética moderada.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Arroyo Grande?', a: 'Sí. Arroyo Grande procesa los permisos solares a través del Departamento de Desarrollo Comunitario de la ciudad, con un plazo típico de 3 a 4 semanas. Las propiedades costeras pueden requerir una revisión adicional; su instalador se encarga de todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Arroyo Grande?', a: 'Sí. Arroyo Grande recibe un estimado de 5.1 horas pico de sol al día, ya que la niebla matutina se despeja hacia la tarde. Las tarifas de PG&E de $0.44/kWh y el clima costero templado hacen que la energía solar con almacenamiento en baterías sea financieramente atractiva y ofrezca una valiosa energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Arroyo Grande para la energía solar?', a: 'Arroyo Grande recibe un promedio estimado de 5.1 horas pico de sol al día. La ubicación en el valle costero trae capa marina matutina que suele disiparse hacia el final de la mañana, lo que permite una sólida producción solar por la tarde, con un rendimiento constante durante todo el año.' },
    ],
  },
  'atascadero': {
    localNote: 'Atascadero se ubica entre la costera SLO y la interior Paso Robles, con un clima de transición, veranos cálidos y mínima niebla. El terreno de colinas de la ciudad y su fuerte exposición solar hacen que las instalaciones en techos sean muy productivas.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Atascadero?', a: 'Sí. Atascadero procesa los permisos solares a través del Departamento de Desarrollo Comunitario de la ciudad, con un plazo típico de 2 a 3 semanas. Las instalaciones estándar en techos son sencillas; su instalador solar se encarga de todo el papeleo y las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Atascadero?', a: 'Sí. Atascadero recibe un estimado de 5.5 horas pico de sol al día con mínima niebla costera. Las tarifas de PG&E de $0.44/kWh y los veranos cálidos que generan una demanda moderada de climatización hacen que la energía solar con almacenamiento en baterías sea una inversión inteligente a largo plazo para la independencia energética.' },
      { q: '¿Cuánto sol recibe Atascadero para la energía solar?', a: 'Atascadero recibe un promedio estimado de 5.5 horas pico de sol al día, beneficiándose del clima de transición entre la costa y los valles del interior. La ciudad experimenta menos niebla que la costera SLO y temperaturas más frescas que Paso, lo que genera una sólida producción solar durante todo el año.' },
    ],
  },
  'atwater': {
    localNote: 'Atwater es una pequeña ciudad del Valle Central cerca de Merced, con terreno plano. La zona experimenta veranos calurosos con una alta demanda de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Atwater?', a: 'Sí. Atwater tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Atwater con las tarifas de PG&E?', a: 'Sí. Los residentes de Atwater pagan tarifas de PG&E de alrededor de $0.44/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías ofrece ahorro y respaldo de energía durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Atwater para la energía solar?', a: 'Atwater recibe en promedio alrededor de 5.8 horas de sol pico al día en la Zona 12/13. La ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y una cobertura de nubes mínima.' },
    ],
  },
  'auburn': {
    localNote: 'Auburn se encuentra en las estribaciones de la Sierra, a mayor elevación que las ciudades del piso del valle. El histórico Old Town y los vecindarios de las estribaciones pueden tener un terreno más variado y consideraciones de sombra.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Auburn?', a: 'Sí. Auburn está bajo la jurisdicción de Placer County CDRA. El tiempo de espera típico del permiso es de 2 a 4 semanas, con SolarAPP+ disponible para sistemas que califiquen. El terreno de estribaciones puede requerir una revisión adicional del sitio.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Auburn con las tarifas de PG&E?', a: 'Sí. Los propietarios de Auburn pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías es especialmente valiosa aquí para tener respaldo de energía durante los frecuentes cortes por PSPS en las zonas de incendio de las estribaciones.' },
      { q: '¿Cuánto sol recibe Auburn para la energía solar?', a: 'Auburn recibe en promedio alrededor de 5.2 horas de sol pico al día. La topografía de las estribaciones hace que la producción solar varíe según la orientación específica del sitio y la sombra de árboles o terreno cercanos.' },
    ],
  },
  'avenal': {
    localNote: 'Avenal se ubica en el oeste del Valle de San Joaquín, cerca de las colinas de Kettleman, con veranos muy calurosos y una vegetación mínima. La ubicación remota de la ciudad y el calor intenso generan un potencial de producción solar excepcional.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Avenal?', a: 'Sí. Avenal procesa los permisos solares a través de la Agencia de Desarrollo Comunitario del condado de Kings, con un plazo típico de 2 a 4 semanas. La ubicación rural y el proceso de permisos sencillo facilitan las instalaciones; su instalador se encarga de toda la coordinación.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en la remota Avenal?', a: 'Sin duda. Avenal experimenta veranos muy calurosos y una ubicación remota con altos costos de electricidad. La energía solar residencial con almacenamiento en baterías fija los costos de energía y aporta resiliencia. Avenal recibe un estimado de 5.7 horas pico de sol al día, excepcional para la producción solar.' },
      { q: '¿Cuánto sol recibe Avenal para la energía solar?', a: 'Avenal recibe un promedio estimado de 5.7 horas pico de sol al día, entre los más altos del condado de Kings. La ubicación en el oeste del valle, con mínima niebla y un calor intenso en verano, genera un rendimiento solar excepcional durante todo el año, alineado con una demanda de climatización muy alta.' },
    ],
  },
  'bakersfield': {
    localNote: 'Bakersfield se ubica en el sur del Valle de San Joaquín, con calor extremo en verano. La zona experimenta algunas de las temperaturas más altas de California, con demanda de refrigeración muy alta, lo que hace que la energía solar sea especialmente valiosa.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Bakersfield?', a: 'Sí. Bakersfield tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Bakersfield con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Bakersfield pagan tarifas de PG&E de alrededor de $0.44/kWh, con costos extremos de refrigeración en verano. La energía solar residencial con almacenamiento en baterías genera ahorros excepcionales y un respaldo eléctrico crítico durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Bakersfield para la energía solar?', a: 'Bakersfield recibe un promedio de alrededor de 6.0 horas de sol pico al día en la Zona 13. La ubicación en el sur del Valle de San Joaquín ofrece una excelente producción solar, con veranos muy calurosos y despejados, y mínima nubosidad.' },
    ],
  },
  'baldwin-park': {
    localNote: 'Baldwin Park se ubica en el este del Valle de San Gabriel, con un clima cálido del interior y vecindarios residenciales en crecimiento. La zona experimenta veranos calurosos con una alta demanda de climatización.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Baldwin Park?', a: 'Sí. Baldwin Park cuenta con su propio departamento de construcción y seguridad. Los permisos solares residenciales suelen tardar de 2 a 3 semanas en procesarse. Su contratista solar se encarga de todo el trámite de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Baldwin Park con las tarifas de SCE?', a: 'Sí. Los residentes de Baldwin Park pagan tarifas de SCE de alrededor de $0.36/kWh. El clima del valle del interior genera altos costos de climatización en verano, lo que hace que la energía solar con almacenamiento en baterías sea una inversión sólida para el ahorro y la energía de respaldo.' },
      { q: '¿Cuánto sol recibe Baldwin Park para la energía solar?', a: 'Baldwin Park recibe un promedio de alrededor de 5.8 horas pico de sol al día en la Zona 9. La ubicación en el este del Valle de San Gabriel ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'banning': {
    localNote: 'Banning se encuentra en la entrada oeste del valle de Coachella, con veranos calurosos. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Banning?', a: 'Sí. Banning tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Banning con las tarifas de SCE?', a: 'Sí. Los residentes de Banning pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante las olas de calor del interior.' },
      { q: '¿Cuánto sol recibe Banning para la energía solar?', a: 'Banning recibe en promedio alrededor de 6.2 horas de sol pico al día en la Zona 10/14. La ubicación en el paso de montaña, a la entrada del valle, ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'bellflower': {
    localNote: 'Bellflower se ubica en la región de Gateway Cities, con un clima cálido del interior. La zona experimenta una demanda de climatización de moderada a alta con una excelente producción solar durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Bellflower?', a: 'Sí. Bellflower utiliza su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas para energía solar residencial. Su instalador presentará la solicitud del permiso y coordinará las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Bellflower con las tarifas de SCE?', a: 'Sí. Los residentes de Bellflower pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de aire acondicionado de moderados a altos en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Bellflower para la energía solar?', a: 'Bellflower recibe un promedio de alrededor de 5.8 horas pico de sol al día en la Zona 9. La ubicación del interior ofrece una excelente producción solar, con veranos calurosos y una mínima niebla costera.' },
    ],
  },
  'benicia': {
    localNote: 'Benicia es una pequeña ciudad costera en el Estrecho de Carquinez, con un centro histórico. La ubicación junto a la bahía ofrece temperaturas moderadas sin dejar de permitir una producción solar sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Benicia?', a: 'Sí. Benicia tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Benicia con las tarifas de PG&E?', a: 'Sí. Los residentes de Benicia pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo, incluso con la demanda de enfriamiento moderada propia de la ubicación junto a la bahía.' },
      { q: '¿Cuánto sol recibe Benicia para la energía solar?', a: 'Benicia recibe en promedio alrededor de 5.1 horas de sol pico al día. La ubicación costera en la Zona 12 tiene influencia marina, pero aun así ofrece una excelente producción solar durante todo el año.' },
    ],
  },
  'berkeley': {
    localNote: 'Berkeley se ubica junto a la costa este de la bahía, con vecindarios en laderas que suben hacia las colinas del East Bay. La zona tiene una capa marina frecuente, pero aun así permite una buena producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Berkeley?', a: 'Sí. Berkeley tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Berkeley con las tarifas de PG&E?', a: 'Sí. Los residentes de Berkeley pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías genera ahorro y se alinea con los sólidos valores ambientales de Berkeley, además de ofrecer energía de respaldo durante cortes.' },
      { q: '¿Cuánto sol recibe Berkeley para la energía solar?', a: 'Berkeley recibe en promedio alrededor de 4.9 horas de sol pico al día en la Zona 3. La capa marina es frecuente, pero el clima sigue permitiendo una producción solar confiable, especialmente en las zonas de laderas por encima de la niebla.' },
    ],
  },
  'big-bear-lake': {
    localNote: 'Big Bear Lake se encuentra a 6,750 pies de elevación, en las montañas de San Bernardino, con un clima alpino y nieve en invierno. Las instalaciones solares requieren un análisis de ingeniería de carga de nieve, pero la gran elevación ofrece una excelente producción durante todo el año gracias al aire limpio de montaña.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Big Bear Lake?', a: 'Sí. Big Bear Lake cuenta con su propio departamento de construcción municipal. Los permisos solares residenciales suelen tardar entre 2 y 3 semanas y requieren cálculos de ingeniería de carga de nieve propios del entorno de montaña. Su instalador se encarga de todos los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Big Bear Lake con las tarifas de SCE y la nieve?', a: 'Sí. Los residentes de Big Bear pagan tarifas de SCE de alrededor de $0.36/kWh. Aunque la nieve invernal cubre los paneles de forma periódica, la gran elevación ofrece una excelente producción solar gracias al aire despejado de montaña. Los sistemas solares con almacenamiento en batería proporcionan energía de respaldo esencial durante las tormentas invernales, cuando los cortes de electricidad son más probables.' },
      { q: '¿Cuánta luz solar recibe Big Bear Lake para la energía solar?', a: 'Big Bear Lake recibe en promedio 6.2 horas de sol pico al día en la Zona 16. La gran elevación y el aire limpio de montaña ofrecen una excelente producción solar durante todo el año, aunque la nieve invernal puede cubrir los paneles temporalmente durante las tormentas.' },
    ],
  },
  'biggs': {
    localNote: 'Biggs es una pequeña comunidad rural al noroeste de Gridley, con un terreno plano de valle ideal para instalaciones solares. Los eventos de PSPS y las necesidades energéticas agrícolas hacen que el respaldo de batería sea valioso.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Biggs?', a: 'Sí. Biggs está bajo la jurisdicción de Butte County Development Services, con un procesamiento de permisos de 2 a 4 semanas. Su contratista solar gestiona la solicitud y las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Biggs con las tarifas de PG&E?', a: 'Definitivamente. Las tarifas de PG&E promedian $0.44/kWh y los cortes por PSPS son comunes en zonas rurales. La energía solar residencial con almacenamiento en baterías brinda independencia energética y respaldo de energía para pozos y riego.' },
      { q: '¿Cuánto sol recibe Biggs para la energía solar?', a: 'Biggs recibe en promedio 5.3 horas de sol al día en la Zona 11. El piso del valle abierto ofrece una excelente producción solar, con veranos calurosos que a menudo superan los 100°F y cielos despejados.' },
    ],
  },
  'bishop': {
    localNote: 'Bishop es el centro de la Sierra Oriental, a 4,100 pies de elevación, con clima de alto desierto y una exposición solar excepcional. Los cielos despejados y la alta elevación brindan uno de los mejores potenciales solares de California, ideal para sistemas de solar más almacenamiento en baterías.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Bishop?', a: 'Sí. Bishop requiere permisos a través de Inyo County Planning Department, con un tiempo de espera típico de 3 a 5 semanas. La ubicación en el alto desierto puede requerir cálculos de carga de viento para la estructura de montaje solar. Su contratista solar se encarga del proceso de solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Bishop con el sol del alto desierto?', a: 'Definitivamente. Las tarifas de SCE promedian $0.40/kWh y Bishop recibe 6.0 horas de sol pico, excepcional para la producción solar. La ubicación en el alto desierto, con cielos despejados durante todo el año, hace que la energía solar con respaldo de batería sea ideal para la independencia energética y el ahorro a largo plazo.' },
      { q: '¿Cuánto sol recibe Bishop para la energía solar?', a: 'Bishop recibe en promedio 6.0 horas de sol al día en el alto desierto de la Sierra Oriental, entre las más altas de California. Los cielos despejados, la alta elevación de 4,100 pies y la baja humedad generan una producción solar excepcional durante todo el año. La nieve invernal es mínima comparada con las laderas occidentales de la Sierra.' },
    ],
  },
  'brawley': {
    localNote: 'Brawley se ubica en el corazón del Valle Imperial, con entorno agrícola y calor extremo de desierto. A pesar de las bajas tarifas del IID, la energía solar aporta energía de respaldo y resiliencia durante eventos de calor extremo.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Brawley?', a: 'Sí. Brawley tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo. Tu contratista se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Brawley con las tarifas del IID?', a: 'Las tarifas del IID promedian $0.16/kWh, entre las más bajas de California. El retorno de la inversión solar es más lento, pero los sistemas de energía solar con baterías ofrecen energía de respaldo durante cortes por calor e independencia energética, algo especialmente valioso para propiedades agrícolas en climas de calor extremo.' },
      { q: '¿Cuánto sol recibe Brawley para la energía solar?', a: 'Brawley recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación en el Valle Imperial ofrece una producción solar excepcional, con calor extremo de desierto y cielos despejados.' },
    ],
  },
  'brentwood': {
    localNote: 'Brentwood es una ciudad en crecimiento del delta al este, con nuevos desarrollos y veranos calurosos y secos. La zona experimenta un calor extremo en verano, ideal para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Brentwood?', a: 'Sí. Brentwood tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Brentwood con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Brentwood pagan tarifas de PG&E de alrededor de $0.44/kWh, con costos de enfriamiento muy altos en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante eventos de calor extremo.' },
      { q: '¿Cuánto sol recibe Brentwood para la energía solar?', a: 'Brentwood recibe en promedio alrededor de 5.5 horas de sol pico al día en la Zona 12. La ubicación en el delta al este ofrece una excelente producción solar, con veranos calurosos y despejados sin interferencia de la capa marina.' },
    ],
  },
  'bridgeport': {
    localNote: 'Bridgeport es un remoto pueblo de la Sierra Este y sede del condado, a 6,500 pies de elevación, con un clima de alto desierto. Los cielos despejados y la gran elevación aportan una excelente exposición solar, aunque la nieve y el viento invernal requieren un diseño de sistema robusto.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Bridgeport?', a: 'Sí. Bridgeport requiere permisos a través de Mono County Community Development, con un tiempo de espera de 3 a 5 semanas. La gran elevación requiere cálculos de carga de nieve y de viento para la estructura de montaje solar. Su instalador se encarga de la ingeniería y los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Bridgeport dada su ubicación remota?', a: 'Sin duda. Las tarifas de SCE y la ubicación remota en el valle de montaña hacen que la independencia energética resulte atractiva. Bridgeport recibe 5.8 horas de sol pico, con cielos despejados de alto desierto durante todo el año. La energía solar residencial con respaldo de batería ofrece resiliencia durante las tormentas invernales y un ahorro a largo plazo.' },
      { q: '¿Cuánta luz solar recibe Bridgeport para la energía solar?', a: 'Bridgeport recibe en promedio 5.8 horas de sol pico al día, a 6,500 pies de elevación en la Sierra Este. Los cielos despejados de alto desierto, la gran elevación y la baja humedad aportan una producción solar excepcional. Hay nieve en invierno, pero en menor medida que en las laderas occidentales de la Sierra, lo que permite un rendimiento anual sólido.' },
    ],
  },
  'buena-park': {
    localNote: 'Buena Park se ubica en el noroeste de Orange County, con clima cálido de interior y vecindarios residenciales diversos. La zona experimenta demanda de refrigeración moderada a alta, con una excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Buena Park?', a: 'Sí. Buena Park tiene su propio departamento de construcción y seguridad municipal. Los permisos solares residenciales suelen procesarse en 2 a 3 semanas. Su contratista gestiona todo el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Buena Park con las tarifas de SCE?', a: 'Sí. Los residentes de Buena Park pagan tarifas de SCE de alrededor de $0.36/kWh, con costos moderados a altos de aire acondicionado en verano. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico confiable.' },
      { q: '¿Cuánto sol recibe Buena Park para la energía solar?', a: 'Buena Park recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 8/9. La ubicación en el interior ofrece una excelente producción solar, con condiciones cálidas y soleadas durante todo el año.' },
    ],
  },
  'burbank': {
    localNote: 'Burbank recibe servicio de Burbank Water & Power, una empresa municipal con tarifas más bajas que las de SCE. La ciudad se ubica en las estribaciones de las montañas Verdugo, con veranos cálidos. El valor de la energía solar proviene de la energía de respaldo, la independencia energética y la compensación de costos moderados de climatización.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Burbank?', a: 'Sí. Burbank cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Burbank con las tarifas de BWP?', a: 'Las tarifas de Burbank Water & Power promedian $0.22/kWh, más bajas que las de SCE. El retorno de la inversión solar es más largo, pero los sistemas solares con baterías proporcionan energía de respaldo durante los cortes, fijan los costos de energía y compensan la demanda moderada de climatización propia de esta ubicación en las estribaciones.' },
      { q: '¿Cuánto sol recibe Burbank para la energía solar?', a: 'Burbank recibe un promedio de alrededor de 5.7 horas pico de sol al día en la Zona 9/10. La ubicación en las estribaciones ofrece una sólida producción solar, con veranos cálidos y una mínima capa marina.' },
    ],
  },
  'calexico': {
    localNote: 'Calexico se ubica en la frontera con México, dentro del Valle Imperial, con calor extremo de desierto. A pesar de las bajas tarifas del IID, la energía solar aporta energía de respaldo e independencia energética en este clima extremo, con frecuentes olas de calor en verano.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Calexico?', a: 'Sí. Calexico tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo y polvo. Tu instalador se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Calexico con las tarifas del IID?', a: 'Las tarifas del IID promedian $0.16/kWh, muy bajas en comparación con SCE o PG&E. El retorno de la inversión solar es más lento, pero los sistemas de energía solar con baterías ofrecen energía de respaldo fundamental durante cortes por calor e independencia energética en esta ciudad fronteriza con condiciones extremas en verano.' },
      { q: '¿Cuánto sol recibe Calexico para la energía solar?', a: 'Calexico recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación desértica fronteriza ofrece una producción solar excepcional, con calor extremo y cielos despejados durante todo el año.' },
    ],
  },
  'california-city': {
    localNote: 'California City se ubica en el Desierto de Mojave, con calor extremo en verano y un potencial solar excepcional. La zona experimenta demanda de refrigeración muy alta, con algunas de las mejores condiciones de producción solar del estado.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en California City?', a: 'Sí. California City tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo. Su instalador se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en California City con las tarifas de SCE?', a: 'Sin duda. Los residentes de California City pagan tarifas de SCE de alrededor de $0.36/kWh, con costos extremos de refrigeración por el calor del desierto. La energía solar residencial con almacenamiento en baterías genera ahorros excepcionales y un respaldo eléctrico crítico.' },
      { q: '¿Cuánto sol recibe California City para la energía solar?', a: 'California City recibe un promedio de alrededor de 6.5 horas de sol pico al día en la Zona 14. La ubicación en el Desierto de Mojave ofrece una producción solar excepcional, con veranos muy calurosos y despejados durante todo el año.' },
    ],
  },
  'calimesa': {
    localNote: 'Calimesa se encuentra en las estribaciones del paso de San Gorgonio, con un clima interior templado y terreno de colinas. La zona experimenta una alta demanda de enfriamiento con una excelente exposición y producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Calimesa?', a: 'Sí. Calimesa tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas para permisos solares residenciales. Su contratista se encarga de todos los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Calimesa con las tarifas de SCE?', a: 'Sí. Los residentes de Calimesa pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de aire acondicionado en verano por el clima interior. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Calimesa para la energía solar?', a: 'Calimesa recibe en promedio alrededor de 6.2 horas de sol pico al día en la Zona 10/14. La ubicación en la ladera, a la entrada del paso, ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'calipatria': {
    localNote: 'Calipatria se ubica bajo el nivel del mar, dentro del Valle Imperial, con calor extremo de desierto. A pesar de las bajas tarifas del IID, la energía solar aporta energía de respaldo fundamental y resiliencia en esta comunidad desértica remota.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Calipatria?', a: 'Sí. Calipatria tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo. Tu contratista se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Calipatria con las tarifas del IID?', a: 'Las tarifas del IID promedian $0.16/kWh, entre las más bajas de California. El retorno de la inversión solar es más lento, pero los sistemas de energía solar con baterías ofrecen energía de respaldo fundamental durante cortes por calor e independencia energética en esta ubicación desértica remota, bajo el nivel del mar.' },
      { q: '¿Cuánto sol recibe Calipatria para la energía solar?', a: 'Calipatria recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación desértica bajo el nivel del mar ofrece una producción solar excepcional, con calor extremo y cielos despejados.' },
    ],
  },
  'calistoga': {
    localNote: 'Calistoga se ubica en la parte alta y calurosa del valle, con excelentes condiciones para la energía solar. El grave historial de incendios forestales (Glass Fire) y los eventos de PSPS hacen que el respaldo con baterías sea fundamental para este pueblo turístico.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Calistoga?', a: 'Sí. Calistoga requiere permisos a través del Departamento de Planificación, Construcción y Servicios Ambientales del Condado de Napa, con un plazo típico de 2 a 4 semanas. Las zonas de riesgo de incendio pueden requerir un diseño resistente al fuego. Tu contratista se encarga de las solicitudes.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Calistoga después del Glass Fire?', a: 'Fundamental. Las tarifas de PG&E promedian $0.44/kWh y los cortes por PSPS son frecuentes en esta zona de alto riesgo de incendios. La energía solar residencial con respaldo de baterías ofrece energía durante eventos de PSPS de varios días. Calistoga recibe 5.0 horas de sol pico, sólido para la energía solar.' },
      { q: '¿Cuánto sol recibe Calistoga para la energía solar?', a: 'Calistoga recibe en promedio 5.0 horas de sol pico al día en la Zona 2. La ubicación en la parte alta del valle trae veranos calurosos con cielos despejados. El terreno de viñedos en laderas ofrece excelentes sitios orientados al sur.' },
    ],
  },
  'camarillo': {
    localNote: 'Camarillo se ubica en el Valle Pleasant, entre la costa y las zonas del interior, con influencia marina moderada. La zona tiene veranos cálidos con buen potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Camarillo?', a: 'Sí. Camarillo tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Camarillo con las tarifas de SCE?', a: 'Sí. Los residentes de Camarillo pagan tarifas de SCE de alrededor de $0.36/kWh, con demanda de enfriamiento moderada. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Camarillo para la energía solar?', a: 'Camarillo recibe en promedio alrededor de 5.8 horas de sol pico al día en las Zonas 6/9. La ubicación en el valle entre la costa y el interior ofrece una producción solar sólida con capa marina moderada.' },
    ],
  },
  'cameron-park': {
    localNote: 'Cameron Park es una localidad censal en las estribaciones del oeste, con muchas viviendas en terrenos amplios. La zona experimenta veranos calurosos y es propensa a cortes por PSPS durante la temporada de incendios.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Cameron Park?', a: 'Sí. Cameron Park está bajo la jurisdicción del Departamento de Planificación y Construcción del Condado de El Dorado. El plazo típico es de 2 a 3 semanas. Su instalador se encargará de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Cameron Park con las tarifas de PG&E?', a: 'Sí. Los residentes de Cameron Park pagan tarifas de PG&E de alrededor de $0.44/kWh y enfrentan cortes frecuentes por PSPS durante la temporada de incendios. La energía solar residencial con almacenamiento en baterías ofrece tanto ahorro como respaldo eléctrico confiable.' },
      { q: '¿Cuánto sol recibe Cameron Park para la energía solar?', a: 'Cameron Park recibe un promedio de aproximadamente 5.2 horas de sol pico al día. La ubicación en las estribaciones, en la Zona 11, respalda una producción solar sólida, aunque debe evaluarse la sombra de árboles en los terrenos más amplios.' },
    ],
  },
  'canyon-lake': {
    localNote: 'Canyon Lake es una comunidad cerrada que rodea un lago privado, con un clima interior templado. La zona experimenta una alta demanda de enfriamiento y una excelente producción solar en este entorno de valle interior.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Canyon Lake?', a: 'Sí. Canyon Lake tiene su propio departamento de construcción municipal. Los permisos solares residenciales suelen tramitarse en 2 a 3 semanas. Su instalador se encarga de todos los permisos y coordina con los requisitos de la asociación de propietarios (HOA), si corresponde.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Canyon Lake con las tarifas de SCE?', a: 'Sí. Los residentes de Canyon Lake pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y un respaldo de energía confiable.' },
      { q: '¿Cuánto sol recibe Canyon Lake para la energía solar?', a: 'Canyon Lake recibe en promedio alrededor de 6.1 horas de sol pico al día en la Zona 10. La ubicación en el valle interior ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'capitola': {
    localNote: 'Capitola es un pequeño pueblo costero en la bahía de Monterey, con un encantador carácter de pueblo de playa y capa marina matutina similar a la de Santa Cruz. El clima costero templado y las altas tarifas de PG&E hacen que la energía solar más batería sea una opción popular entre los propietarios locales.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Capitola?', a: 'Sí. Capitola procesa los permisos solares a través del Departamento de Desarrollo Comunitario municipal, con un plazo típico de 2 a 3 semanas. Las propiedades costeras pueden requerir una revisión adicional; tu instalador solar gestiona todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en la costera Capitola?', a: 'Sí. Capitola recibe un estimado de 4.9 horas de sol pico al día, ya que la niebla matutina se disipa por la tarde. Las tarifas de PG&E de $0.44/kWh y el clima costero templado, que mantiene el consumo de energía moderado, hacen que la energía solar con almacenamiento en batería sea financieramente atractiva y ofrezca una valiosa energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Capitola para la energía solar?', a: 'Capitola recibe un estimado de 4.9 horas de sol pico al día. La ubicación costera trae capa marina matutina que suele disiparse hacia el mediodía, lo que permite una fuerte producción solar por la tarde. Las propiedades en laderas por encima de la niebla captan aún más sol, logrando un excelente rendimiento solar durante todo el año.' },
    ],
  },
  'carlsbad': {
    localNote: 'Carlsbad se ubica en la costa del Pacífico, con influencia de la capa marina y un clima costero templado. A pesar de la niebla matutina, la zona recibe una fuerte producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Carlsbad?', a: 'Sí. Carlsbad cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Carlsbad con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de Carlsbad pagan tarifas de SDG&E de alrededor de $0.47/kWh. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y energía de respaldo, a pesar de la demanda moderada de enfriamiento propia del clima costero.' },
      { q: '¿Cuánto sol recibe Carlsbad para la energía solar?', a: 'Carlsbad recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 7. La capa marina afecta la producción por la mañana, pero la generación solar se mantiene fuerte gracias al excelente sol de la tarde.' },
    ],
  },
  'carpinteria': {
    localNote: 'Carpinteria es un pequeño pueblo costero al sureste de Santa Bárbara, con neblina marina matutina y un clima suave durante todo el año. El carácter de pueblo de playa de la ciudad y su uso moderado de energía, sumados a las tarifas de SCE, hacen que la energía solar combinada con batería sea una opción popular.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Carpinteria?', a: 'Sí. Carpinteria procesa los permisos solares a través del Community Development Department de la ciudad, con un tiempo de espera habitual de 2 a 3 semanas. Las propiedades en la zona costera requieren una revisión adicional; su instalador solar gestiona todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en la costera Carpinteria?', a: 'Sí. Carpinteria recibe un estimado de 5.0 horas de sol pico al día, ya que la neblina matutina se disipa hacia la tarde. Las tarifas de SCE de $0.40/kWh y el suave clima costero, que mantiene moderado el uso de energía, hacen que la energía solar con almacenamiento en batería sea una decisión financiera inteligente para el ahorro de costos y la resiliencia.' },
      { q: '¿Cuánta luz solar recibe Carpinteria para la energía solar?', a: 'Carpinteria recibe un estimado de 5.0 horas de sol pico al día. Su ubicación costera trae neblina marina matutina que suele disiparse hacia el mediodía, lo que permite una sólida producción solar por la tarde. Los techos orientados al sur captan un excelente sol durante todo el año, logrando un rendimiento solar sólido.' },
    ],
  },
  'carson': {
    localNote: 'Carson se ubica en la zona del South Bay, con una influencia costera moderada. La zona recibe una sólida producción solar a pesar de la proximidad a la capa marina, y las tarifas de SCE hacen que la economía solar sea favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Carson?', a: 'Sí. Carson cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Carson con las tarifas de SCE?', a: 'Sí. Los residentes de Carson pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo, a pesar de la demanda moderada de climatización propia de esta ubicación del South Bay.' },
      { q: '¿Cuánto sol recibe Carson para la energía solar?', a: 'Carson recibe un promedio de alrededor de 5.7 horas pico de sol al día en la Zona 8. La capa marina afecta la producción por la mañana, pero la generación solar se mantiene sólida durante todo el año.' },
    ],
  },
  'cathedral-city': {
    localNote: 'Cathedral City se encuentra en el desierto del valle de Coachella, junto a Palm Springs, con calor extremo en verano. La zona tiene un potencial solar excepcional con una demanda de enfriamiento muy alta.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Cathedral City?', a: 'Sí. Cathedral City tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo. Su contratista se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Cathedral City con las tarifas de SCE?', a: 'Definitivamente. Los residentes de Cathedral City pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano extremos por el calor del desierto. La energía solar residencial con almacenamiento en baterías genera un ahorro excepcional y respaldo de energía.' },
      { q: '¿Cuánto sol recibe Cathedral City para la energía solar?', a: 'Cathedral City recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación en el desierto ofrece una producción solar excepcional, con veranos muy calurosos y despejados, junto a Palm Springs.' },
    ],
  },
  'ceres': {
    localNote: 'Ceres es una ciudad del Valle Central cercana a Modesto, atendida por PG&E. La zona experimenta veranos calurosos con alta demanda de refrigeración, ideal para la energía solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Ceres?', a: 'Sí. Ceres tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Ceres con las tarifas de PG&E?', a: 'Sí. Los residentes de Ceres pagan tarifas de PG&E de alrededor de $0.44/kWh, con alta demanda de refrigeración en verano. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Ceres para la energía solar?', a: 'Ceres recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 12/13. La ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y sin capa marina.' },
    ],
  },
  'chester': {
    localNote: 'Chester se ubica a 4,500 pies en el lago Almanor, con intensa nieve invernal y entorno boscoso. El Dixie Fire arrasó zonas cercanas, lo que convirtió el respaldo eléctrico durante los PSPS y la resiliencia ante incendios en prioridades fundamentales.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Chester?', a: 'Sí. Chester requiere permisos a través del Departamento de Construcción del Condado de Plumas, con un plazo típico de 2 a 4 semanas. Se requieren cálculos de carga de nieve. Las reconstrucciones posteriores al Dixie Fire suelen integrar energía solar. Tu instalador se encarga del trámite.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Chester ante el riesgo del Dixie Fire?', a: 'Sin duda. Las tarifas de $0.44/kWh de PG&E y los frecuentes cortes por PSPS en esta zona boscosa de alto riesgo de incendios hacen que la energía solar residencial con almacenamiento en baterías sea fundamental. El respaldo con baterías ofrece energía durante eventos de PSPS de varios días y tormentas de invierno. El Dixie Fire demostró la necesidad de resiliencia energética.' },
      { q: '¿Cuánto sol recibe Chester para la energía solar?', a: 'Chester recibe en promedio 4.8 horas de sol pico al día, a 4,500 pies de elevación, en la Zona 1. El terreno boscoso y la intensa nieve invernal presentan retos, pero los sitios orientados al sur junto al lago ofrecen una producción solar sólida. El aire despejado de la Sierra aporta una intensidad solar considerable.' },
    ],
  },
  'chico': {
    localNote: 'Chico es la ciudad más grande del condado de Butte, ubicada en el piso del valle con un terreno plano ideal para la energía solar. Los veranos calurosos y los cortes por PSPS hacen que el respaldo de batería sea fundamental para el aire acondicionado y la refrigeración.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Chico?', a: 'Sí. Chico requiere un permiso de construcción a través de Butte County Development Services, con un tiempo de espera típico de 2 a 4 semanas. Su instalador se encarga de la solicitud y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Chico ante el riesgo de PSPS?', a: 'Definitivamente. Las tarifas de PG&E promedian $0.44/kWh y los cortes por PSPS son comunes durante la temporada de incendios. La energía solar residencial con almacenamiento en baterías brinda energía durante cortes de varios días y fija los costos de energía frente a futuros aumentos de tarifa.' },
      { q: '¿Cuánto sol recibe Chico para la energía solar?', a: 'Chico recibe en promedio 5.3 horas de sol pico al día en la Zona 11. La ubicación en el valle ofrece una fuerte producción solar, con veranos calurosos y despejados y una neblina invernal mínima.' },
    ],
  },
  'chino': {
    localNote: 'Chino se encuentra en el sector occidental del Inland Empire, con veranos calurosos y una alta demanda de enfriamiento. La zona presenta una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Chino?', a: 'Sí. Chino cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Chino con las tarifas de SCE?', a: 'Sí. Los residentes de Chino pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano debido al calor del Inland Empire. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe Chino para la energía solar?', a: 'Chino recibe en promedio 6.0 horas de sol pico al día en la Zona 10. Su ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'chowchilla': {
    localNote: 'Chowchilla es un pequeño pueblo del valle con una economía agrícola y terreno plano. El calor extremo en verano y las tarifas de PG&E hacen que la energía solar sea atractiva para reducir los costos de enfriamiento en viviendas y operaciones agrícolas.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Chowchilla?', a: 'Sí. Chowchilla requiere permisos a través de Madera County Building Department, con un procesamiento de 2 a 4 semanas. Las propiedades agrícolas pueden integrar energía solar para bombas de riego o edificios agrícolas. Su instalador se encarga de los permisos para todo tipo de propiedad.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Chowchilla para granjas?', a: 'Sí. PG&E cobra $0.44/kWh y el calor del valle genera altos costos de enfriamiento y riego. La energía solar con respaldo de batería ofrece ahorro para operaciones residenciales y agrícolas. Chowchilla recibe 5.4 horas de sol pico, excelente para la producción solar agrícola.' },
      { q: '¿Cuánto sol recibe Chowchilla para la energía solar?', a: 'Chowchilla recibe en promedio 5.4 horas de sol al día en el valle de San Joaquín. El terreno agrícola plano y el calor extremo en verano generan una fuerte producción solar. La ubicación en el valle tiene cielos despejados durante todo el año, ideal para maximizar el rendimiento solar.' },
    ],
  },
  'chula-vista': {
    localNote: 'Chula Vista se ubica al sur de San Diego, con un clima costero templado e influencia moderada de la capa marina. La zona recibe una excelente producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Chula Vista?', a: 'Sí. Chula Vista cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Chula Vista con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de Chula Vista pagan tarifas de SDG&E de alrededor de $0.47/kWh. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y energía de respaldo, con algunos de los períodos de retorno de inversión más rápidos de California.' },
      { q: '¿Cuánto sol recibe Chula Vista para la energía solar?', a: 'Chula Vista recibe un promedio de alrededor de 5.9 horas de sol pico al día en las Zonas 7/10. La capa marina afecta la producción por la mañana, pero la generación solar se mantiene fuerte durante todo el año gracias al excelente sol de la tarde.' },
    ],
  },
  'citrus-heights': {
    localNote: 'Citrus Heights es un suburbio consolidado al noreste de Sacramento, con vecindarios maduros. El terreno plano y la exposición al sol constante hacen que la instalación solar sea sencilla.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Citrus Heights?', a: 'Sí. Citrus Heights depende de la jurisdicción de la División de Permisos e Inspección de Construcción del condado de Sacramento. El plazo típico es de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Citrus Heights con las tarifas de SMUD?', a: 'Las tarifas de SMUD, de alrededor de $0.18/kWh, implican un retorno de inversión financiero más lento en comparación con las zonas de PG&E. Sin embargo, la energía solar con almacenamiento en batería ofrece respaldo durante los cortes de electricidad y protege ante futuros aumentos de tarifas.' },
      { q: '¿Cuánto sol recibe Citrus Heights para la energía solar?', a: 'Citrus Heights recibe un promedio de alrededor de 5.2 horas de sol pico al día. El clima de la Zona 12 y la ubicación en el valle respaldan una fuerte producción solar con una variación estacional mínima.' },
    ],
  },
  'clearlake': {
    localNote: 'Clearlake se ubica en la orilla norte de Clear Lake, con excelente potencial solar. El grave historial de incendios forestales y la altísima frecuencia de PSPS hacen que el respaldo con baterías sea esencial para la resiliencia energética.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Clearlake?', a: 'Sí. Clearlake requiere permisos a través del Departamento de Desarrollo Comunitario del Condado de Lake, con un procesamiento de 2 a 4 semanas. Las zonas de riesgo de incendio requieren un diseño resistente al fuego. Tu instalador se encarga del trámite.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Clearlake después de los incendios forestales?', a: 'Sin duda. PG&E cobra $0.44/kWh y los cortes por PSPS son frecuentes en esta zona de alto riesgo de incendios. La energía solar residencial con respaldo de baterías ofrece energía durante eventos de PSPS de varios días. Clearlake recibe 5.3 horas de sol pico, excelente para la independencia energética solar.' },
      { q: '¿Cuánto sol recibe Clearlake para la energía solar?', a: 'Clearlake recibe en promedio 5.3 horas de sol pico al día en la Zona 2. Los calurosos veranos del interior y los cielos despejados generan una producción solar sólida durante todo el año. El humo de la temporada de incendios puede reducir el rendimiento temporalmente.' },
    ],
  },
  'clovis': {
    localNote: 'Clovis es una ciudad en crecimiento junto a Fresno, con casas grandes y veranos extremadamente calurosos. La zona experimenta una demanda de enfriamiento muy alta, ideal para compensar con energía solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Clovis?', a: 'Sí. Clovis cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Clovis con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Clovis pagan tarifas de PG&E de alrededor de $0.44/kWh, con facturas elevadas debido al enfriamiento extremo en verano. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Clovis para la energía solar?', a: 'Clovis recibe un promedio de alrededor de 5.9 horas de sol pico al día en la Zona 13. La ubicación en el valle de San Joaquín ofrece una excelente producción solar, con veranos muy calurosos y una nubosidad mínima.' },
    ],
  },
  'coachella': {
    localNote: 'Coachella se encuentra en el desierto del valle de Coachella, con calor extremo en verano. La zona tiene un potencial solar excepcional, con una demanda de enfriamiento muy alta que la energía solar puede compensar de forma eficaz.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Coachella?', a: 'Sí. Coachella tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo. Su instalador se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Coachella con las tarifas de SCE?', a: 'Definitivamente. Los residentes de Coachella pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano extremos por el calor del desierto. La energía solar residencial con almacenamiento en baterías genera un ahorro excepcional y respaldo de energía fundamental durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Coachella para la energía solar?', a: 'Coachella recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación en el desierto del valle de Coachella ofrece una producción solar excepcional, con veranos muy calurosos y despejados durante todo el año.' },
    ],
  },
  'colton': {
    localNote: 'Colton se encuentra en el corazón del Inland Empire, con un clima cálido del interior y terreno de valle. La zona presenta una demanda de enfriamiento muy alta y una excelente producción solar durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Colton?', a: 'Sí. Colton cuenta con su propio departamento de construcción y seguridad municipal. Los permisos solares residenciales suelen procesarse en un plazo de 2 a 3 semanas. Su contratista se encarga de todo el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Colton con las tarifas de SCE?', a: 'Sí. Los residentes de Colton pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano muy elevados debido al calor del Inland Empire. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo confiable durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe Colton para la energía solar?', a: 'Colton recibe en promedio 6.0 horas de sol pico al día en la Zona 10. Su ubicación en el valle del Inland Empire ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'colusa': {
    localNote: 'Colusa es la sede del condado, ubicada junto al río Sacramento, con un terreno plano de valle. El entorno agrícola y rural hace que la energía solar sea atractiva para la independencia energética y el respaldo de bombas de pozo.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Colusa?', a: 'Sí. Colusa requiere permisos a través de Colusa County Community Development, con un plazo típico de 2 a 4 semanas. Tu instalador solar se encarga de la solicitud ante el condado y de las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Colusa ante el riesgo rural de PSPS?', a: 'Sí. Las tarifas de PG&E promedian $0.44/kWh, y los cortes por PSPS afectan a las zonas rurales. La energía solar residencial con respaldo de batería ofrece independencia energética y respaldo para pozos, riego y energía del hogar durante los cortes.' },
      { q: '¿Cuánto sol recibe Colusa para la energía solar?', a: 'Colusa recibe un promedio de 5.3 horas de sol pico al día en la Zona 11. La ubicación en el fondo del valle, junto al río, ofrece una excelente producción solar, con veranos calurosos y una sombra de terreno mínima.' },
    ],
  },
  'concord': {
    localNote: 'Concord es una ciudad central del East Bay con veranos calurosos y secos. La ubicación en el valle interior ofrece excelentes condiciones para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Concord?', a: 'Sí. Concord tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Concord con las tarifas de PG&E?', a: 'Sí. Los residentes de Concord pagan tarifas de PG&E de alrededor de $0.44/kWh, con una alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Concord para la energía solar?', a: 'Concord recibe en promedio alrededor de 5.2 horas de sol pico al día en la Zona 4. La ubicación en el valle interior ofrece una excelente producción solar con veranos calurosos y poca capa marina.' },
    ],
  },
  'corcoran': {
    localNote: 'Corcoran es una pequeña ciudad agrícola en el sur del Valle de San Joaquín, con veranos muy calurosos y terreno agrícola plano. La economía agrícola de la ciudad y la alta demanda de climatización hacen que la energía solar con baterías sea ideal para gestionar los costos energéticos.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Corcoran?', a: 'Sí. Corcoran procesa los permisos solares a través del Departamento de Desarrollo Comunitario de la ciudad, con un plazo típico de 2 a 3 semanas. El entorno agrícola y el proceso de permisos sencillo facilitan las instalaciones; su instalador se encarga de toda la coordinación.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Corcoran?', a: 'Sí. Corcoran experimenta veranos muy calurosos que generan altas facturas de aire acondicionado con tarifas de electricidad de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías fija los costos de energía y gestiona las cargas máximas. Corcoran recibe un estimado de 5.6 horas pico de sol al día, excelente para la producción solar.' },
      { q: '¿Cuánto sol recibe Corcoran para la energía solar?', a: 'Corcoran recibe un promedio estimado de 5.6 horas pico de sol al día, con mínima niebla. El caluroso clima del valle agrícola genera una producción solar muy sólida durante todo el año, con un rendimiento máximo en verano alineado perfectamente con la demanda de aire acondicionado y de riego agrícola.' },
    ],
  },
  'corning': {
    localNote: 'Corning es un pequeño pueblo agrícola en el fondo del valle, al sur de Red Bluff. El terreno plano y el entorno rural hacen que las instalaciones solares sean sencillas, con una excelente exposición del techo.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Corning?', a: 'Sí. Corning depende de la jurisdicción de Tehama County Planning & Building, con un procesamiento de permisos de 2 a 4 semanas. Tu contratista gestiona la solicitud y las inspecciones del condado.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Corning con cargas agrícolas?', a: 'Sin duda. Las tarifas de $0.44/kWh de PG&E y los cortes rurales por PSPS hacen que la energía solar con almacenamiento en batería sea atractiva. El respaldo de batería proporciona energía para bombas de pozo, riego y aire acondicionado del hogar durante cortes de varios días.' },
      { q: '¿Cuánto sol recibe Corning para la energía solar?', a: 'Corning recibe un promedio de 5.3 horas de sol pico al día en la Zona 11. El valle agrícola abierto ofrece una exposición solar sin obstrucciones, con veranos calurosos y despejados e inviernos templados.' },
    ],
  },
  'corona': {
    localNote: 'Corona se encuentra en el oeste del condado de Riverside, con veranos calurosos y clima propio del Inland Empire. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Corona?', a: 'Sí. Corona tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Corona con las tarifas de SCE?', a: 'Sí. Los residentes de Corona pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante las olas de calor del Inland Empire.' },
      { q: '¿Cuánto sol recibe Corona para la energía solar?', a: 'Corona recibe en promedio alrededor de 6.0 horas de sol pico al día en la Zona 10. La ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y sin interferencia de la capa marina.' },
    ],
  },
  'coronado': {
    localNote: 'Coronado se ubica en una península en la bahía de San Diego, con influencia de la capa marina y un clima costero templado. A pesar de la niebla matutina, las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable para esta próspera comunidad isleña.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Coronado?', a: 'Sí. Coronado cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Coronado con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de Coronado pagan tarifas de SDG&E de alrededor de $0.47/kWh. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional e independencia energética, a pesar de la demanda moderada de enfriamiento propia de su ubicación costera e isleña.' },
      { q: '¿Cuánto sol recibe Coronado para la energía solar?', a: 'Coronado recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 7. La capa marina afecta la producción por la mañana en la península de la isla, pero la generación solar se mantiene fuerte gracias al sol de la tarde.' },
    ],
  },
  'costa-mesa': {
    localNote: 'Costa Mesa se ubica cerca de la costa, con una influencia moderada de la capa marina y un clima templado. A pesar de la neblina costera, la zona recibe una producción solar sólida, y las tarifas de SCE hacen que la economía solar sea favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Costa Mesa?', a: 'Sí. Costa Mesa tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Costa Mesa con las tarifas de SCE?', a: 'Sí. Los residentes de Costa Mesa pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorros sólidos y respaldo eléctrico, a pesar de la demanda moderada de refrigeración propia de la ubicación costera.' },
      { q: '¿Cuánto sol recibe Costa Mesa para la energía solar?', a: 'Costa Mesa recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 6/8. La capa marina afecta la producción matutina, pero la generación solar se mantiene sólida durante todo el año.' },
    ],
  },
  'crescent-city': {
    localNote: 'Crescent City es el pueblo costero del extremo noroeste de California, con la lluvia más intensa y la niebla más persistente del estado. Las pocas horas de sol requieren un mayor dimensionamiento del sistema, pero las tarifas de PG&E y la resiliencia ante tormentas hacen que la energía solar sea valiosa.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Crescent City?', a: 'Sí. Crescent City requiere permisos a través del Departamento de Construcción del condado de Del Norte, con un plazo típico de 2 a 4 semanas. El entorno marino extremo requiere componentes resistentes a la corrosión y diseño sísmico. Su instalador se encarga de las solicitudes.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Crescent City con tanta lluvia?', a: 'Sí, con un dimensionamiento adecuado. Crescent City recibe un promedio de 4.2 horas pico de sol, la cifra más baja de California, debido a la niebla y la lluvia persistentes. Las tarifas de PG&E de $0.44/kWh y los cortes por tormentas invernales hacen que la energía solar con un respaldo de batería sobredimensionado valga la pena para lograr independencia energética.' },
      { q: '¿Cuánto sol recibe Crescent City para la energía solar?', a: 'Crescent City recibe un promedio de 4.2 horas pico de sol al día en la Zona 1. La fuerte niebla marina y las lluvias reducen las horas de sol, pero los paneles modernos siguen produciendo durante todo el año. Las instalaciones orientadas al sur y un diseño eficiente maximizan la producción en condiciones desafiantes.' },
    ],
  },
  'daly-city': {
    localNote: 'Daly City se ubica justo al sur de San Francisco, con una influencia frecuente de la capa marina. La producción solar es viable a pesar de la niebla costera.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Daly City?', a: 'Sí. Daly City cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Daly City con las tarifas de PG&E?', a: 'Sí. Los residentes de Daly City pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorro e independencia energética a pesar de la capa marina frecuente, además de energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Daly City para la energía solar?', a: 'Daly City recibe un promedio de alrededor de 4.7 horas pico de sol al día en la Zona 3. La capa marina frecuente afecta la producción, pero la energía solar sigue siendo viable con un diseño de sistema adecuado y una evaluación del sitio.' },
    ],
  },
  'danville': {
    localNote: 'Danville es una localidad próspera del Valle de San Ramon con grandes propiedades y un alto consumo de energía. La zona tiene veranos calurosos con excelentes condiciones para la energía solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Danville?', a: 'Sí. Danville tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Danville con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Danville pagan tarifas de PG&E de alrededor de $0.44/kWh, con facturas altas por casas grandes y albercas. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante el calor del verano y eventos de PSPS.' },
      { q: '¿Cuánto sol recibe Danville para la energía solar?', a: 'Danville recibe en promedio aproximadamente 5.3 horas de sol pico al día en la Zona 4. La ubicación en el valle interior ofrece una excelente producción solar con veranos calurosos y poca capa marina.' },
    ],
  },
  'davis': {
    localNote: 'Davis es un pueblo universitario, sede de UC Davis, conocido por su cultura ciclista y su liderazgo ambiental. La ciudad ha adoptado SolarAPP+ para agilizar los permisos solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Davis?', a: 'Sí. Davis usa SolarAPP+ para sistemas residenciales de techo elegibles, lo que permite la aprobación automática el mismo día. Tu instalador presenta la solicitud y se encarga del proceso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Davis con las tarifas de PG&E?', a: 'Sí. Los residentes de Davis pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y se alinea con los valores ambientales progresistas de la ciudad.' },
      { q: '¿Cuánto sol recibe Davis para la energía solar?', a: 'Davis recibe en promedio aproximadamente 5.3 horas de sol pico al día. La ubicación plana del valle, en la Zona 12, ofrece una excelente producción solar durante todo el año con muy poca niebla o sombra por terreno.' },
    ],
  },
  'delano': {
    localNote: 'Delano se ubica en el sur del Valle de San Joaquín, con entorno agrícola y calor extremo en verano. La zona experimenta demanda de refrigeración muy alta, con una excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Delano?', a: 'Sí. Delano tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Delano con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Delano pagan tarifas de PG&E de alrededor de $0.44/kWh, con costos de refrigeración muy altos en verano. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico, especialmente valioso para propiedades agrícolas.' },
      { q: '¿Cuánto sol recibe Delano para la energía solar?', a: 'Delano recibe un promedio de alrededor de 6.0 horas de sol pico al día en la Zona 13. La ubicación en el valle ofrece una excelente producción solar, con veranos calurosos y cielos despejados durante todo el año.' },
    ],
  },
  'desert-hot-springs': {
    localNote: 'Desert Hot Springs se encuentra al norte de Palm Springs, en el valle de Coachella, con un clima desértico extremo. La zona experimenta una demanda de enfriamiento muy alta y un potencial de producción solar excepcional.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Desert Hot Springs?', a: 'Sí. Desert Hot Springs tiene su propio departamento de construcción municipal. Los permisos solares residenciales suelen tomar de 2 a 3 semanas. Su instalador se encarga de todo el papeleo de permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Desert Hot Springs con las tarifas de SCE?', a: 'Definitivamente. Los residentes de Desert Hot Springs pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano extremos. La energía solar residencial con almacenamiento en baterías ofrece un ahorro excepcional y respaldo de energía fundamental durante las olas de calor del desierto.' },
      { q: '¿Cuánto sol recibe Desert Hot Springs para la energía solar?', a: 'Desert Hot Springs recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación en el desierto ofrece una producción solar excepcional, con cielos despejados durante todo el año y un calor intenso en verano.' },
    ],
  },
  'dinuba': {
    localNote: 'Dinuba es una pequeña ciudad agrícola en el centro del Valle de San Joaquín, con veranos muy calurosos y terreno agrícola plano. La economía agrícola de la ciudad y el calor intenso hacen que el sistema solar más baterías sea ideal para el manejo de costos energéticos.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Dinuba?', a: 'Sí. Dinuba procesa los permisos solares a través del Departamento de Desarrollo Comunitario de la ciudad, con un plazo típico de 2 a 3 semanas. El entorno agrícola y el proceso de permisos sencillo facilitan las instalaciones; su instalador se encarga de toda la coordinación.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Dinuba?', a: 'Sí. Dinuba experimenta veranos muy calurosos que generan facturas de aire acondicionado extremadamente altas con las tarifas de SCE de alrededor de $0.40/kWh. La energía solar residencial con almacenamiento en baterías fija los costos de energía y maneja las cargas pico. Dinuba recibe un estimado de 5.7 horas de sol pico al día, algo excepcional para la producción solar.' },
      { q: '¿Cuánto sol recibe Dinuba para la energía solar?', a: 'Dinuba recibe un promedio estimado de 5.7 horas de sol pico al día con mínima neblina. El clima muy caluroso del valle agrícola ofrece una producción solar excepcional durante todo el año, con un rendimiento intenso en verano que se alinea perfectamente con la demanda de aire acondicionado y riego agrícola.' },
    ],
  },
  'downey': {
    localNote: 'Downey se ubica en el sureste del condado de LA, con un clima del interior y una influencia moderada de la capa marina. La zona experimenta veranos cálidos con un sólido potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Downey?', a: 'Sí. Downey cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Downey con las tarifas de SCE?', a: 'Sí. Los residentes de Downey pagan tarifas de SCE de alrededor de $0.36/kWh, con una demanda moderada de climatización en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Downey para la energía solar?', a: 'Downey recibe un promedio de alrededor de 5.8 horas pico de sol al día en la Zona 9. La ubicación en la cuenca del interior ofrece una sólida producción solar, con veranos cálidos y una capa marina moderada.' },
    ],
  },
  'downieville': {
    localNote: 'Downieville es un histórico pueblo de la fiebre del oro y sede del condado, a 2,900 pies de elevación en un cañón fluvial empinado. El terreno montañoso y la sombra del bosque requieren una evaluación cuidadosa del sitio, aunque las laderas orientadas al sur se benefician de una fuerte exposición solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Downieville?', a: 'Sí. Downieville requiere permisos a través del Departamento de Planificación del condado de Sierra, con un procesamiento de 3 a 5 semanas. El terreno del cañón y el bosque pueden requerir un análisis específico de sombra en el sitio. Tu instalador se encarga de los permisos y la evaluación del sitio.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en el histórico Downieville?', a: 'Sí. Las tarifas de PG&E son de $0.44/kWh, y la remota ubicación en el cañón trae cortes por PSPS y por tormentas. La energía solar con respaldo de batería ofrece resiliencia e independencia energética. Downieville recibe 5.0 horas de sol pico en sitios despejados orientados al sur, viable para la energía solar de montaña.' },
      { q: '¿Cómo afecta el terreno del cañón a la energía solar en Downieville?', a: 'Downieville se ubica en un cañón fluvial empinado con pinos altos que pueden dar sombra a las laderas orientadas al norte. Las propiedades orientadas al sur por encima de la línea de árboles reciben una excelente exposición solar, con 5.0 horas de sol pico. Una evaluación del sitio determina el impacto de la sombra y la ubicación óptima de los paneles en el terreno del cañón.' },
    ],
  },
  'dublin-alameda': {
    localNote: 'Dublin es un suburbio en crecimiento del Tri-Valley con desarrollos modernos y techos amplios. La ubicación en el valle interior tiene veranos calurosos ideales para la energía solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Dublin?', a: 'Sí. Dublin tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Dublin con las tarifas de PG&E?', a: 'Sí. Los residentes de Dublin pagan tarifas de PG&E de alrededor de $0.44/kWh, con una alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo.' },
      { q: '¿Cuánto sol recibe Dublin para la energía solar?', a: 'Dublin recibe en promedio alrededor de 5.3 horas de sol pico al día en la Zona 4. La ubicación en el valle interior ofrece una excelente producción solar con poca interferencia de la capa marina.' },
    ],
  },
  'dunsmuir': {
    localNote: 'Dunsmuir se ubica en un cañón estrecho a 2,300 pies de elevación, con terreno empinado y entornos boscosos. El diseño con carga de nieve y las consideraciones de sombra del terreno son fundamentales para las instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Dunsmuir?', a: 'Sí. Dunsmuir requiere permisos a través del Departamento de Desarrollo Comunitario del condado de Siskiyou, con un procesamiento de 2 a 4 semanas. El terreno del cañón puede generar desafíos de sombra. Su instalador se encarga de la evaluación del sitio y de los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Dunsmuir con el terreno del cañón?', a: 'Sí. Las tarifas de PG&E de $0.44/kWh y los cortes por tormentas invernales hacen que la energía solar con almacenamiento en baterías sea valiosa. El respaldo de batería proporciona energía durante eventos de varios días. Los techos orientados al sur en el cañón aún pueden lograr una buena producción solar a pesar de la sombra del terreno.' },
      { q: '¿Cuánto sol recibe Dunsmuir para la energía solar?', a: 'Dunsmuir recibe un promedio de 4.6 horas pico de sol al día, a 2,300 pies, en un cañón boscoso de la Zona 1. El terreno empinado y los árboles pueden generar sombra, pero los sitios orientados al sur aún ofrecen una producción solar viable durante todo el año.' },
    ],
  },
  'eastvale': {
    localNote: 'Eastvale se encuentra en la frontera entre los condados de Orange y Riverside, con un clima interior templado y vecindarios residenciales en rápido crecimiento. La zona experimenta una alta demanda de enfriamiento en verano con una excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Eastvale?', a: 'Sí. Eastvale tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas para permisos solares residenciales. Su instalador se encarga de todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Eastvale con las tarifas de SCE?', a: 'Sí. Los residentes de Eastvale pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de aire acondicionado en verano por el clima interior. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y respaldo de energía durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Eastvale para la energía solar?', a: 'Eastvale recibe en promedio alrededor de 6.0 horas de sol pico al día en la Zona 10. La ubicación en el interior ofrece una producción solar excepcional, con veranos calurosos y despejados y una influencia costera mínima.' },
    ],
  },
  'el-cajon': {
    localNote: 'El Cajon se ubica en un valle del interior al este de San Diego, con veranos calurosos y poca influencia de la capa marina. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en El Cajon?', a: 'Sí. El Cajon cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en El Cajon con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de El Cajon pagan tarifas de SDG&E de alrededor de $0.47/kWh, con altos costos de enfriamiento en verano debido al calor del interior. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe El Cajon para la energía solar?', a: 'El Cajon recibe un promedio de alrededor de 6.1 horas de sol pico al día en la Zona 10. La ubicación en el valle del interior ofrece una excelente producción solar, con veranos calurosos y despejados y sin interferencia de la capa marina.' },
    ],
  },
  'el-centro': {
    localNote: 'El Centro es la sede del condado, ubicada en el Valle Imperial con calor extremo de desierto. A pesar de las bajas tarifas municipales del IID, la energía solar aporta valor mediante energía de respaldo durante cortes por calor e independencia energética en este clima extremo.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en El Centro?', a: 'Sí. El Centro tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo, polvo y cambios bruscos de temperatura. Tu instalador se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en El Centro con las tarifas del IID?', a: 'Las tarifas del IID promedian $0.16/kWh, entre las más bajas de California, por lo que el retorno de la inversión es más lento. Sin embargo, la energía solar con almacenamiento en baterías ofrece energía de respaldo fundamental durante cortes por calor extremo (115 °F o más es común), independencia energética y resiliencia durante las olas de calor del desierto.' },
      { q: '¿Cuánto sol recibe El Centro para la energía solar?', a: 'El Centro recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación desértica del Valle Imperial ofrece una producción solar excepcional, entre las mejores del país, con calor extremo y cielos despejados durante todo el año.' },
    ],
  },
  'el-dorado-hills': {
    localNote: 'El Dorado Hills es un suburbio próspero en las estribaciones del oeste, con viviendas grandes y alto consumo energético. La zona tiene veranos calurosos e inviernos templados, con un excelente potencial solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en El Dorado Hills?', a: 'Sí. El Dorado Hills está bajo la jurisdicción del Departamento de Planificación y Construcción del Condado de El Dorado. El plazo típico es de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en El Dorado Hills con las tarifas de PG&E?', a: 'Sin duda. Los residentes de El Dorado Hills pagan tarifas de PG&E de alrededor de $0.44/kWh, con facturas superiores al promedio debido a las viviendas grandes. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico durante eventos de PSPS.' },
      { q: '¿Cuánto sol recibe El Dorado Hills para la energía solar?', a: 'El Dorado Hills recibe un promedio de alrededor de 5.3 horas de sol pico al día. La ubicación en las estribaciones del oeste, en la Zona 11, ofrece una excelente producción solar con mínima variación estacional.' },
    ],
  },
  'el-monte': {
    localNote: 'El Monte se ubica en el Valle de San Gabriel, con veranos cálidos y un clima del interior. La zona experimenta una demanda de climatización de moderada a alta con un sólido potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en El Monte?', a: 'Sí. El Monte cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en El Monte con las tarifas de SCE?', a: 'Sí. Los residentes de El Monte pagan tarifas de SCE de alrededor de $0.36/kWh, con una demanda de climatización de moderada a alta en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo.' },
      { q: '¿Cuánto sol recibe El Monte para la energía solar?', a: 'El Monte recibe un promedio de alrededor de 5.8 horas pico de sol al día en la Zona 9/10. La ubicación en el valle ofrece una sólida producción solar, con veranos cálidos y una mínima interferencia de la capa marina.' },
    ],
  },
  'elk-grove': {
    localNote: 'Elk Grove es un extenso suburbio al sur de Sacramento, con grandes fraccionamientos y casas modernas. El terreno plano del valle y la escasa niebla garantizan excelentes condiciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Elk Grove?', a: 'Sí. Elk Grove depende de la División de Permisos e Inspección de Construcción del condado de Sacramento. El plazo típico es de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Elk Grove con las tarifas de SMUD?', a: 'Las tarifas de SMUD, de alrededor de $0.18/kWh, son más bajas que las de PG&E, por lo que el retorno de inversión financiero es más lento. Sin embargo, la energía solar con almacenamiento en batería ofrece respaldo durante los cortes de electricidad en verano y protege tus costos energéticos a largo plazo.' },
      { q: '¿Cuánto sol recibe Elk Grove para la energía solar?', a: 'Elk Grove recibe un promedio de alrededor de 5.2 horas de sol pico al día. El terreno plano del valle y el clima cálido y seco de la Zona 12 respaldan una fuerte producción solar con una variación estacional mínima.' },
    ],
  },
  'encinitas': {
    localNote: 'Encinitas se ubica en la costa del Pacífico, con influencia de la capa marina y un clima costero templado. A pesar de la niebla matutina, la zona recibe una fuerte producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Encinitas?', a: 'Sí. Encinitas cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Encinitas con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de Encinitas pagan tarifas de SDG&E de alrededor de $0.47/kWh, entre las más altas del país. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional, a pesar de la demanda moderada de enfriamiento propia del clima costero.' },
      { q: '¿Cuánto sol recibe Encinitas para la energía solar?', a: 'Encinitas recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 7. La capa marina afecta la producción por la mañana, pero la generación solar se mantiene fuerte gracias a los cielos despejados de la tarde.' },
    ],
  },
  'escondido': {
    localNote: 'Escondido se ubica en un valle del interior con veranos calurosos y poca influencia de la capa marina. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Escondido?', a: 'Sí. Escondido cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Escondido con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de Escondido pagan tarifas de SDG&E de alrededor de $0.47/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y energía de respaldo crítica durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Escondido para la energía solar?', a: 'Escondido recibe un promedio de alrededor de 6.0 horas de sol pico al día en la Zona 10. La ubicación en el valle del interior ofrece una excelente producción solar, con veranos calurosos y despejados y una capa marina mínima.' },
    ],
  },
  'eureka': {
    localNote: 'Eureka es la sede del condado, ubicada en la bahía de Humboldt con neblina costera persistente. Las horas de sol más bajas que en el interior de California hacen que un diseño de sistema eficiente sea fundamental, pero las tarifas de PG&E siguen haciendo que la energía solar valga la pena.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Eureka?', a: 'Sí. Eureka requiere permisos a través del Departamento de Construcción del Condado de Humboldt, con un plazo típico de 2 a 4 semanas. Las instalaciones costeras necesitan equipos resistentes a la corrosión. Su contratista solar se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Eureka con la neblina costera?', a: 'Sí, pero requiere un dimensionamiento cuidadoso. Eureka recibe un promedio de 4.3 horas de sol pico al día debido a la neblina costera, menos que en el interior de California. Las tarifas de PG&E de $0.44/kWh aún hacen que la energía solar sea viable. Sobredimensionar el arreglo y añadir almacenamiento en baterías compensa la neblina y los cortes por tormentas invernales.' },
      { q: '¿Cuánto sol recibe Eureka para la energía solar?', a: 'Eureka recibe un promedio de 4.3 horas de sol pico al día en la Zona 1. La neblina costera reduce las horas de sol en comparación con las regiones del interior, pero la energía solar sigue funcionando durante todo el año. Las instalaciones orientadas al sur y los paneles eficientes maximizan la producción en condiciones marinas.' },
    ],
  },
  'fairfield': {
    localNote: 'Fairfield es la sede del condado, ubicada en el valle interior entre Sacramento y el Área de la Bahía. La zona tiene veranos calurosos e ideales para la generación de energía solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Fairfield?', a: 'Sí. Fairfield tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Fairfield con las tarifas de PG&E?', a: 'Sí. Los residentes de Fairfield pagan tarifas de PG&E de alrededor de $0.44/kWh, con alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante los períodos de demanda pico.' },
      { q: '¿Cuánto sol recibe Fairfield para la energía solar?', a: 'Fairfield recibe en promedio alrededor de 5.2 horas de sol pico al día. La ubicación en el valle interior, en la Zona 12, ofrece una excelente producción solar durante todo el año con muy poca niebla.' },
    ],
  },
  'fillmore': {
    localNote: 'Fillmore se ubica en el Valle interior del Río Santa Clara, con carácter agrícola y veranos calurosos. La zona tiene alta demanda de enfriamiento con buen potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Fillmore?', a: 'Sí. Fillmore tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Fillmore con las tarifas de SCE?', a: 'Sí. Los residentes de Fillmore pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo, algo especialmente valioso para propiedades agrícolas.' },
      { q: '¿Cuánto sol recibe Fillmore para la energía solar?', a: 'Fillmore recibe en promedio alrededor de 5.9 horas de sol pico al día en las Zonas 9/10. La ubicación en el valle interior ofrece una excelente producción solar con veranos calurosos y cielos despejados.' },
    ],
  },
  'folsom': {
    localNote: 'Folsom se ubica en el extremo este del condado de Sacramento, junto al lago Folsom. A diferencia de la mayor parte del condado, Folsom recibe servicio de PG&E, cuyas tarifas son mucho más altas que las de SMUD.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Folsom?', a: 'Sí. Folsom sigue los procedimientos de permisos del condado de Sacramento, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Folsom con las tarifas de PG&E?', a: 'Sí. A diferencia de la mayor parte del condado de Sacramento, los residentes de Folsom pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en batería puede ofrecer un ahorro considerable y energía de respaldo durante eventos de PSPS.' },
      { q: '¿Cuánto sol recibe Folsom para la energía solar?', a: 'Folsom recibe un promedio de aproximadamente 5.2 horas de sol pico al día. La ubicación en el valle este, cerca de las estribaciones, ofrece una excelente producción solar durante todo el año en el clima de la Zona 12.' },
    ],
  },
  'fontana': {
    localNote: 'Fontana se encuentra en el sector occidental del Inland Empire, con veranos calurosos y una alta demanda de enfriamiento. La zona presenta una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Fontana?', a: 'Sí. Fontana cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Fontana con las tarifas de SCE?', a: 'Sí. Los residentes de Fontana pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano debido al calor del Inland Empire. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe Fontana para la energía solar?', a: 'Fontana recibe en promedio 6.0 horas de sol pico al día en la Zona 10. Su ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y sin influencia de neblina marina.' },
    ],
  },
  'fort-bragg': {
    localNote: 'Fort Bragg se encuentra en la nebulosa Costa Norte, con un clima marino persistente. Sus horas de sol, menores que las de Ukiah en el interior, requieren un dimensionamiento eficiente del sistema, pero las tarifas de PG&E y la resiliencia ante tormentas hacen que la energía solar resulte valiosa.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Fort Bragg?', a: 'Sí. Fort Bragg requiere permisos a través de Mendocino County Planning & Building, con un procesamiento de 2 a 4 semanas. Las instalaciones costeras requieren equipo de grado marino resistente a la corrosión. Su instalador se encarga de los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Fort Bragg con la niebla costera?', a: 'Sí. PG&E cobra $0.44/kWh y las tormentas invernales provocan cortes de electricidad. La energía solar con respaldo de batería genera ahorro durante todo el año, a pesar de las 4.4 horas de sol pico debido a la niebla marina. Los sistemas de mayor tamaño compensan las condiciones climáticas.' },
      { q: '¿Cuánta luz solar recibe Fort Bragg para la energía solar?', a: 'Fort Bragg recibe en promedio 4.4 horas de sol pico al día en la Zona 1. Su ubicación costera trae niebla matutina intensa, que se disipa hacia el mediodía. El aire marino requiere equipo resistente a la corrosión para garantizar la durabilidad a largo plazo.' },
    ],
  },
  'fortuna': {
    localNote: 'Fortuna se ubica tierra adentro desde la costa, en el valle del río Eel, con un poco más de sol que la costera Eureka. La silvicultura de secuoyas y la agricultura hacen que el respaldo eléctrico sea valioso para propiedades rurales.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Fortuna?', a: 'Sí. Fortuna requiere permisos a través del Departamento de Construcción del Condado de Humboldt, con un plazo típico de 2 a 4 semanas. Los sitios en el valle del interior pueden tener menos problemas de corrosión marina que las zonas costeras. Su contratista se encarga de las solicitudes.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Fortuna con las tarifas de PG&E?', a: 'Sí. Las tarifas de PG&E promedian $0.44/kWh y las ubicaciones rurales enfrentan cortes por tormentas invernales. La energía solar con respaldo de baterías ofrece independencia energética para las propiedades del valle del río Eel. Fortuna recibe 4.5 horas de sol pico, mejor que la costera Eureka.' },
      { q: '¿Cuánto sol recibe Fortuna para la energía solar?', a: 'Fortuna recibe un promedio de 4.5 horas de sol pico al día en la Zona 1. La ubicación en el valle del interior trae veranos más cálidos y menos neblina que la costa. Los alrededores de bosque de secuoyas requieren sitios orientados al sur para evitar la sombra.' },
    ],
  },
  'fountain-valley': {
    localNote: 'Fountain Valley se ubica en el centro de Orange County, entre la costa y las zonas del interior, con clima templado. La comunidad cuenta con vecindarios residenciales consolidados y un fuerte potencial solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Fountain Valley?', a: 'Sí. Fountain Valley tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas para permisos solares residenciales. Su instalador se encarga de todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Fountain Valley con las tarifas de SCE?', a: 'Sí. Los residentes de Fountain Valley pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorros sólidos, respaldo eléctrico y protección contra futuros aumentos de tarifas.' },
      { q: '¿Cuánto sol recibe Fountain Valley para la energía solar?', a: 'Fountain Valley recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 6/8. La ubicación en el centro de Orange County ofrece una excelente producción solar, con influencia costera moderada y veranos cálidos.' },
    ],
  },
  'fremont': {
    localNote: 'Fremont es una ciudad extensa en el sur del condado de Alameda, con una mezcla de zonas junto a la bahía y del interior. La ciudad ha adoptado SolarAPP+ para agilizar los permisos solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Fremont?', a: 'Sí. Fremont usa SolarAPP+ para sistemas residenciales de techo elegibles, lo que permite la aprobación automática el mismo día. Tu instalador presenta la solicitud y se encarga del proceso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Fremont con las tarifas de PG&E?', a: 'Sí. Los residentes de Fremont pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo, algo especialmente valioso en las zonas del interior con alta demanda de enfriamiento en verano.' },
      { q: '¿Cuánto sol recibe Fremont para la energía solar?', a: 'Fremont recibe en promedio aproximadamente 5.2 horas de sol pico al día. La combinación de climas de Zona 3 y Zona 4 ofrece una excelente producción solar, con las zonas del interior mostrando un rendimiento levemente más alto.' },
    ],
  },
  'fresno': {
    localNote: 'Fresno es una importante ciudad del valle central con veranos extremadamente calurosos. La zona experimenta una de las demandas de enfriamiento más altas de California, lo que hace que la energía solar sea especialmente valiosa.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Fresno?', a: 'Sí. Fresno cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Fresno con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Fresno pagan tarifas de PG&E de alrededor de $0.44/kWh, con costos de enfriamiento extremadamente altos en verano. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo crítica durante eventos de calor extremo.' },
      { q: '¿Cuánto sol recibe Fresno para la energía solar?', a: 'Fresno recibe un promedio de alrededor de 5.9 horas de sol pico al día en la Zona 13. La ubicación en el valle de San Joaquín ofrece una excelente producción solar, con veranos muy calurosos y despejados, aunque puede haber cierta bruma estival.' },
    ],
  },
  'fullerton': {
    localNote: 'Fullerton se ubica en el norte de Orange County, cerca de las estribaciones, con clima cálido de interior. La zona experimenta una mínima influencia de la capa marina, con una producción solar sólida y demanda moderada de refrigeración.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Fullerton?', a: 'Sí. Fullerton tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Fullerton con las tarifas de SCE?', a: 'Sí. Los residentes de Fullerton pagan tarifas de SCE de alrededor de $0.36/kWh, con costos moderados de refrigeración en verano. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Fullerton para la energía solar?', a: 'Fullerton recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 8. La ubicación en el norte de Orange County ofrece una producción solar sólida, con veranos cálidos y mínima capa marina.' },
    ],
  },
  'garden-grove': {
    localNote: 'Garden Grove se ubica en el centro de Orange County, con clima templado de interior. La zona experimenta una influencia moderada de la capa marina, con una producción solar sólida y demanda moderada de refrigeración.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Garden Grove?', a: 'Sí. Garden Grove tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Garden Grove con las tarifas de SCE?', a: 'Sí. Los residentes de Garden Grove pagan tarifas de SCE de alrededor de $0.36/kWh, con demanda moderada de refrigeración. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico durante cortes.' },
      { q: '¿Cuánto sol recibe Garden Grove para la energía solar?', a: 'Garden Grove recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 8. La ubicación en el centro de Orange County ofrece una producción solar sólida, con veranos cálidos y una capa marina moderada.' },
    ],
  },
  'gilroy': {
    localNote: 'Gilroy es una ciudad del valle sur conocida por la agricultura y los veranos calurosos. La zona experimenta un calor extremo en verano con excelentes condiciones para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Gilroy?', a: 'Sí. Gilroy cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Gilroy con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Gilroy pagan tarifas de PG&E de alrededor de $0.44/kWh, con una demanda de enfriamiento muy alta debido al calor extremo. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Gilroy para la energía solar?', a: 'Gilroy recibe un promedio de alrededor de 5.5 horas de sol pico al día en la Zona 4. La ubicación en el valle sur ofrece una excelente producción solar, con veranos calurosos y despejados y sin capa marina.' },
    ],
  },
  'glendale': {
    localNote: 'Glendale se ubica en las estribaciones de las montañas Verdugo, con veranos calurosos y terreno de colinas. La ubicación en el valle del interior ofrece excelentes condiciones solares con una interferencia mínima de la capa marina.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Glendale?', a: 'Sí. Glendale cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Glendale con las tarifas de SCE?', a: 'Sin duda. Los residentes de Glendale pagan tarifas de SCE de alrededor de $0.36/kWh, con una alta demanda de climatización en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Glendale para la energía solar?', a: 'Glendale recibe un promedio de alrededor de 5.8 horas pico de sol al día en la Zona 9/10. La ubicación en las estribaciones ofrece una excelente producción solar, con veranos calurosos y una mínima capa marina.' },
    ],
  },
  'goleta': {
    localNote: 'Goleta se encuentra justo al oeste de Santa Bárbara, con un clima mediterráneo costero similar y patrones de neblina matutina parecidos. El terreno plano de la ciudad y su uso moderado de energía generan un sólido potencial solar con un alto retorno de inversión.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Goleta?', a: 'Sí. Goleta procesa los permisos solares a través del Planning and Environmental Review Department de la ciudad, con un tiempo de espera habitual de 3 a 4 semanas. Las propiedades costeras pueden requerir una revisión adicional; su instalador solar gestiona todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Goleta?', a: 'Sí. Goleta recibe un estimado de 5.0 horas de sol pico al día, ya que la neblina matutina se disipa hacia la tarde. Las tarifas de SCE de $0.40/kWh y el suave clima costero hacen que la energía solar con almacenamiento en batería sea una inversión inteligente para fijar los costos de energía y ganar resiliencia con energía de respaldo.' },
      { q: '¿Cuánta luz solar recibe Goleta para la energía solar?', a: 'Goleta recibe un estimado de 5.0 horas de sol pico al día, con neblina marina matutina que suele disiparse hacia el mediodía. Su ubicación costera ofrece una sólida producción solar por la tarde, y el clima suave mantiene el uso general de energía moderado, lo que se traduce en un excelente retorno de inversión solar.' },
    ],
  },
  'grass-valley': {
    localNote: 'Grass Valley es un histórico pueblo de la fiebre del oro, ubicado en las estribaciones de la Sierra. La zona presenta veranos calurosos e inviernos más frescos, con frecuentes cortes PSPS durante la temporada de incendios.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Grass Valley?', a: 'Sí. Grass Valley está bajo la jurisdicción del Nevada County Building Department. El tiempo de espera habitual es de 2 a 4 semanas. Los sitios rurales y de las estribaciones pueden requerir una revisión adicional por zona de riesgo de incendio.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Grass Valley con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Grass Valley pagan tarifas de PG&E de alrededor de $0.44/kWh y enfrentan frecuentes cortes PSPS durante la temporada de incendios. La energía solar residencial con almacenamiento en batería ofrece tanto ahorro como energía de respaldo esencial.' },
      { q: '¿Cuánta luz solar recibe Grass Valley para la energía solar?', a: 'Grass Valley recibe en promedio 5.1 horas de sol pico al día. Su ubicación en las estribaciones, dentro de la Zona 11, favorece una sólida producción solar, aunque el terreno y la sombra de los árboles deben evaluarse caso por caso.' },
    ],
  },
  'gridley': {
    localNote: 'Gridley es un pequeño pueblo agrícola en el piso del valle, con techos planos y una excelente exposición solar. Los eventos de PSPS y las altas tarifas de PG&E impulsan la adopción de energía solar en zonas rurales.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Gridley?', a: 'Sí. Gridley requiere permisos a través de Butte County Development Services, con un tiempo de espera típico de 2 a 4 semanas. Su instalador se encarga de la solicitud ante el condado y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Gridley?', a: 'Sí. Las tarifas de $0.44/kWh de PG&E y los cortes por PSPS hacen que la energía solar con almacenamiento en baterías sea atractiva para esta comunidad rural. El respaldo de batería brinda energía para bombas de pozo y operaciones agrícolas durante cortes de varios días.' },
      { q: '¿Cuánto sol recibe Gridley para la energía solar?', a: 'Gridley recibe en promedio 5.3 horas de sol pico al día en la Zona 11. El terreno plano del valle y el entorno agrícola brindan una exposición solar despejada, con veranos calurosos y neblina mínima.' },
    ],
  },
  'hanford': {
    localNote: 'Hanford es la sede del condado de Kings, en el caluroso Valle de San Joaquín, con veranos muy calurosos y una alta demanda de climatización. El terreno agrícola plano de la ciudad y la mínima niebla crean condiciones ideales para las instalaciones solares en techos.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Hanford?', a: 'Sí. Hanford procesa los permisos solares a través del Departamento de Desarrollo Comunitario de la ciudad, con un plazo típico de 2 a 3 semanas. Las instalaciones estándar en techos son sencillas; su instalador solar se encarga de todos los permisos y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en la calurosa Hanford?', a: 'Sin duda. Hanford experimenta veranos muy calurosos que generan altas facturas de aire acondicionado con tarifas de electricidad de $0.44/kWh. La energía solar residencial con almacenamiento en baterías fija los costos de energía y gestiona las cargas máximas de climatización. Hanford recibe un estimado de 5.6 horas pico de sol al día, excelente para la producción solar.' },
      { q: '¿Cuánto sol recibe Hanford para la energía solar?', a: 'Hanford recibe un promedio estimado de 5.6 horas pico de sol al día, con mínima influencia de niebla costera. El caluroso clima del Valle Central genera una producción solar muy sólida durante todo el año, con un rendimiento máximo en verano alineado perfectamente con la demanda de aire acondicionado.' },
    ],
  },
  'hayward': {
    localNote: 'Hayward se ubica junto a la costa este de la bahía, con zonas de laderas hacia el este. La zona tiene una influencia marina moderada y un buen potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Hayward?', a: 'Sí. Hayward tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Hayward con las tarifas de PG&E?', a: 'Sí. Los residentes de Hayward pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Hayward para la energía solar?', a: 'Hayward recibe en promedio alrededor de 5.1 horas de sol pico al día en la zona de transición 3/4. La ubicación junto a la bahía tiene una capa marina moderada, pero la producción solar se mantiene sólida durante todo el año.' },
    ],
  },
  'healdsburg': {
    localNote: 'Healdsburg es un pueblo de la zona vinícola en el norte del condado de Sonoma, con veranos calurosos. La zona presenta excelentes condiciones solares y cortes PSPS durante la temporada de incendios.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Healdsburg?', a: 'Sí. Healdsburg cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Healdsburg con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Healdsburg pagan tarifas de PG&E de alrededor de $0.44/kWh y enfrentan cortes PSPS frecuentes. La energía solar residencial con almacenamiento en batería ofrece ahorro y energía de respaldo esencial durante la temporada de incendios.' },
      { q: '¿Cuánta luz solar recibe Healdsburg para la energía solar?', a: 'Healdsburg recibe en promedio 5.3 horas de sol pico al día en la Zona 2. Su ubicación en el valle del norte ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'hemet': {
    localNote: 'Hemet se encuentra en el valle de San Jacinto, con veranos calurosos y secos. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Hemet?', a: 'Sí. Hemet tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Hemet con las tarifas de SCE?', a: 'Sí. Los residentes de Hemet pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante eventos de calor extremo.' },
      { q: '¿Cuánto sol recibe Hemet para la energía solar?', a: 'Hemet recibe en promedio alrededor de 6.2 horas de sol pico al día en la Zona 10. La ubicación en el valle ofrece una excelente producción solar, con veranos calurosos y despejados y una exposición solar muy alta.' },
    ],
  },
  'hesperia': {
    localNote: 'Hesperia se encuentra en el alto desierto, con calor extremo en verano e inviernos fríos. La zona cuenta con un potencial solar excepcional y una demanda de enfriamiento muy alta. Los sistemas deben diseñarse para soportar las temperaturas extremas del desierto.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Hesperia?', a: 'Sí. Hesperia cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas. Las instalaciones en el alto desierto requieren sistemas diseñados para soportar cambios extremos de temperatura. Su contratista se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Hesperia con las tarifas de SCE?', a: 'Sin duda. Los residentes de Hesperia pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano muy elevados debido al calor del desierto. La energía solar residencial con almacenamiento en batería genera un ahorro excepcional y proporciona energía de respaldo durante los episodios de calor extremo.' },
      { q: '¿Cuánta luz solar recibe Hesperia para la energía solar?', a: 'Hesperia recibe en promedio 6.5 horas de sol pico al día en la Zona 14. Su ubicación en el alto desierto ofrece una producción solar excepcional, con veranos muy calurosos y despejados, y un rendimiento sólido durante todo el año.' },
    ],
  },
  'highland': {
    localNote: 'Highland se encuentra en el Inland Empire, al pie de las montañas de San Bernardino, con un clima cálido del interior. La zona presenta una alta demanda de enfriamiento en verano y una excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Highland?', a: 'Sí. Highland cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas para los permisos solares residenciales. Su instalador gestiona todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Highland con las tarifas de SCE?', a: 'Sí. Los residentes de Highland pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de aire acondicionado en verano debido al calor del Inland Empire. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo.' },
      { q: '¿Cuánta luz solar recibe Highland para la energía solar?', a: 'Highland recibe en promedio 6.1 horas de sol pico al día en la Zona 10. Su ubicación en las estribaciones del Inland Empire ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'hollister': {
    localNote: 'Hollister es la sede del condado y la ciudad más grande de San Benito, con veranos calurosos del interior y alta demanda de enfriamiento. El terreno plano de la ciudad y la poca niebla crean condiciones ideales para instalaciones solares en techo.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Hollister?', a: 'Sí. Hollister tramita los permisos solares a través del Departamento de Construcción de la Ciudad, con un plazo típico de 2 a 3 semanas. Las instalaciones estándar en techo son sencillas; tu instalador solar se encarga de todos los permisos y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Hollister con las tarifas de PG&E?', a: 'Sin duda. PG&E cobra $0.44/kWh en Hollister, y los veranos calurosos generan facturas altas de aire acondicionado. La energía solar residencial con almacenamiento en baterías fija los costos de energía y maneja las cargas pico de enfriamiento. Hollister recibe un estimado de 5.4 horas de sol pico al día, excelente para la producción solar.' },
      { q: '¿Cuánto sol recibe Hollister para la energía solar?', a: 'Hollister recibe en promedio un estimado de 5.4 horas de sol pico al día, con muy poca influencia de la niebla costera. El clima cálido del valle interior ofrece una producción solar sólida durante todo el año, con el rendimiento pico de verano alineado perfectamente con la demanda de aire acondicionado.' },
    ],
  },
  'huntington-beach': {
    localNote: 'Huntington Beach se ubica en la costa del Pacífico, con influencia de la capa marina y un clima costero moderado. A pesar de la neblina matutina, la zona recibe una producción solar sólida, y las tarifas de SCE hacen que la economía solar sea favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Huntington Beach?', a: 'Sí. Huntington Beach tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Huntington Beach con las tarifas de SCE?', a: 'Sí. Los residentes de Huntington Beach pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorros sólidos y respaldo eléctrico, a pesar de la demanda moderada de refrigeración propia del clima costero.' },
      { q: '¿Cuánto sol recibe Huntington Beach para la energía solar?', a: 'Huntington Beach recibe un promedio de alrededor de 5.6 horas de sol pico al día en la Zona 6. La capa marina afecta la producción matutina, pero la generación solar se mantiene sólida durante todo el año gracias al sol de la tarde.' },
    ],
  },
  'imperial': {
    localNote: 'Imperial se ubica en el Valle Imperial, con carácter agrícola y calor extremo de desierto. A pesar de las bajas tarifas municipales del IID, la energía solar aporta energía de respaldo y resiliencia en este clima extremo.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Imperial?', a: 'Sí. Imperial tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo y polvo. Tu instalador se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Imperial con las tarifas del IID?', a: 'Las tarifas del IID promedian $0.16/kWh, muy bajas. El retorno de la inversión solar es más lento, pero los sistemas de energía solar con baterías ofrecen energía de respaldo fundamental durante cortes por calor extremo e independencia energética, algo especialmente valioso para zonas rurales y agrícolas.' },
      { q: '¿Cuánto sol recibe Imperial para la energía solar?', a: 'Imperial recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación desértica ofrece una producción solar excepcional, con calor extremo y muy poca nubosidad durante todo el año.' },
    ],
  },
  'imperial-beach': {
    localNote: 'Imperial Beach se ubica en la costa del Pacífico, en el punto más al sur del condado de San Diego, con influencia de la capa marina. A pesar de la niebla costera, las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Imperial Beach?', a: 'Sí. Imperial Beach cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Imperial Beach con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de Imperial Beach pagan tarifas de SDG&E de alrededor de $0.47/kWh, entre las más altas del país. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional, a pesar de la demanda moderada de enfriamiento propia de su ubicación costera.' },
      { q: '¿Cuánto sol recibe Imperial Beach para la energía solar?', a: 'Imperial Beach recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 7. La capa marina afecta la producción por la mañana en esta playa, la más al sur, pero la generación solar se mantiene fuerte gracias al despeje de la tarde.' },
    ],
  },
  'indio': {
    localNote: 'Indio se encuentra en el desierto del valle de Coachella, con calor extremo en verano (110°F o más es común). La zona tiene un potencial solar excepcional, entre los mejores de California, con una demanda de enfriamiento muy alta que la energía solar puede compensar de forma eficaz.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Indio?', a: 'Sí. Indio tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo. Su instalador se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Indio con las tarifas de SCE?', a: 'Definitivamente. Los residentes de Indio pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano extremos por el calor del desierto. La energía solar residencial con almacenamiento en baterías genera un ahorro excepcional y respaldo de energía fundamental durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Indio para la energía solar?', a: 'Indio recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación en el desierto del valle de Coachella ofrece una producción solar excepcional, entre las mejores de California, con veranos muy calurosos y despejados durante todo el año.' },
    ],
  },
  'inglewood': {
    localNote: 'Inglewood se ubica en el suroeste del condado de Los Ángeles, cerca del LAX, con una influencia moderada de la capa marina. La zona recibe una sólida producción solar a pesar de la proximidad costera, y las tarifas de SCE hacen que la economía solar sea favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Inglewood?', a: 'Sí. Inglewood cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Inglewood con las tarifas de SCE?', a: 'Sí. Los residentes de Inglewood pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo, a pesar de la demanda moderada de climatización propia de esta ubicación cercana a la costa.' },
      { q: '¿Cuánto sol recibe Inglewood para la energía solar?', a: 'Inglewood recibe un promedio de alrededor de 5.7 horas pico de sol al día en la Zona 8. La capa marina afecta la producción por la mañana, pero la generación solar se mantiene sólida con un despeje por la tarde.' },
    ],
  },
  'ione': {
    localNote: 'Ione es un pequeño pueblo de estribaciones con propiedades residenciales rurales y tierras de rancho. La menor densidad y las parcelas más grandes hacen que la energía solar sea atractiva para viviendas principales, casas de huéspedes y operaciones agrícolas.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Ione?', a: 'Sí. Ione requiere permisos a través de Amador County Building Department, con un tiempo de espera de 3 a 4 semanas. Las propiedades rurales pueden combinar energía solar con bombas de pozo o instalaciones en graneros. Su contratista se encarga de los permisos para todo tipo de propiedad.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Ione para propiedades rurales?', a: 'Definitivamente. Las tarifas de PG&E son de $0.44/kWh y las zonas rurales tienen tiempos de restauración de cortes más largos durante los eventos de PSPS. La energía solar residencial con respaldo de batería brinda independencia energética para viviendas y operaciones agrícolas. Ione recibe 5.0 horas de sol pico, excelente para la autosuficiencia.' },
      { q: '¿Cuánto sol recibe Ione para la energía solar?', a: 'Ione recibe en promedio 5.0 horas de sol al día en las estribaciones bajas de la Sierra. Los veranos calurosos y secos, con neblina costera mínima, generan una producción solar confiable. Las ubicaciones rurales a menudo tienen una exposición sin obstáculos orientada al sur, ideal para maximizar la eficiencia de los paneles.' },
    ],
  },
  'irvine': {
    localNote: 'Irvine es una ciudad planificada en el centro de Orange County con viviendas grandes y modernas. La zona experimenta veranos cálidos con excelentes condiciones solares y una influencia moderada de la capa marina.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Irvine?', a: 'Sí. Irvine tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Irvine con las tarifas de SCE?', a: 'Sí. Los residentes de Irvine pagan tarifas de SCE de alrededor de $0.36/kWh, con demanda moderada de refrigeración debido a las viviendas grandes. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico durante cortes.' },
      { q: '¿Cuánto sol recibe Irvine para la energía solar?', a: 'Irvine recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 8. La ubicación en el centro de Orange County ofrece una producción solar sólida, con veranos cálidos y una influencia moderada de la capa marina.' },
    ],
  },
  'jackson': {
    localNote: 'Jackson es la sede del condado, ubicada en las estribaciones de la Sierra a 1,200 pies de elevación. La arquitectura histórica de la fiebre del oro se combina con viviendas modernas, todas beneficiándose de una fuerte exposición solar de estribaciones y altas tarifas de PG&E.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Jackson?', a: 'Sí. Jackson requiere permisos a través de Amador County Building Department, con un tiempo de espera típico de 3 a 4 semanas. El terreno de estribaciones puede requerir una revisión estructural por las cargas del techo. Su contratista solar se encarga del proceso de solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Jackson ante el riesgo de incendios forestales?', a: 'Definitivamente. Las tarifas de PG&E son de $0.44/kWh y los cortes por PSPS son comunes durante la temporada de incendios. La energía solar residencial con respaldo de batería brinda independencia energética durante los cortes y ahorro a largo plazo. Jackson recibe 5.0 horas de sol pico, excelente para una producción constante durante todo el año.' },
      { q: '¿Cuánto sol recibe Jackson para la energía solar?', a: 'Jackson recibe en promedio 5.0 horas de sol al día en las estribaciones de la Sierra. Los veranos cálidos con cielos despejados y neblina mínima generan una fuerte producción solar. La ubicación en las estribaciones, por encima de la capa de inversión del valle, asegura una exposición solar constante durante todo el año.' },
    ],
  },
  'jamestown': {
    localNote: 'Jamestown es un histórico pueblo de la Fiebre del Oro a 700 metros de elevación, con arquitectura victoriana y el Parque Histórico Estatal Railtown 1897. La ubicación en estribaciones aporta una excelente exposición solar, y las altas tarifas de PG&E hacen que la energía solar resulte atractiva.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Jamestown?', a: 'Sí. Jamestown requiere permisos a través de la Agencia de Recursos Comunitarios del Condado de Tuolumne, con un plazo típico de 3 a 5 semanas. Las propiedades históricas pueden necesitar una revisión de diseño para instalaciones visibles. Su instalador se encarga de la coordinación de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Jamestown con el riesgo de incendios forestales?', a: 'Sin duda. Las tarifas de PG&E son de $0.44/kWh y las zonas de incendio en estribaciones presentan cortes frecuentes por PSPS. La energía solar con respaldo de baterías ofrece resiliencia durante los cortes y reduce las facturas eléctricas altas. Jamestown recibe 5.2 horas de sol pico, excelente para la producción solar en estribaciones.' },
      { q: '¿Cuánto sol recibe Jamestown para la energía solar?', a: 'Jamestown recibe un promedio de 5.2 horas de sol pico al día en las estribaciones de Sierra Nevada. Los veranos calurosos y secos con cielos despejados generan una producción solar sólida. La elevación de las estribaciones a 700 metros asegura una exposición solar constante y temperaturas de panel más frescas que en las ubicaciones del valle.' },
    ],
  },
  'jurupa-valley': {
    localNote: 'Jurupa Valley se encuentra en el oeste del condado de Riverside, junto al río Santa Ana, con un clima interior templado. La zona experimenta una alta demanda de enfriamiento y un excelente potencial solar durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Jurupa Valley?', a: 'Sí. Jurupa Valley tiene su propio departamento de construcción municipal. Los permisos solares residenciales suelen tramitarse en 2 a 3 semanas. Su contratista gestiona todo el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Jurupa Valley con las tarifas de SCE?', a: 'Sí. Los residentes de Jurupa Valley pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y un respaldo de energía confiable.' },
      { q: '¿Cuánto sol recibe Jurupa Valley para la energía solar?', a: 'Jurupa Valley recibe en promedio alrededor de 6.1 horas de sol pico al día en la Zona 10. La ubicación en el valle interior ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'king-city': {
    localNote: 'King City se ubica en el caluroso extremo sur del valle de Salinas, con una influencia costera mínima y un intenso calor en verano. El entorno agrícola de la ciudad y su muy alta demanda de enfriamiento hacen que la energía solar más batería sea ideal para gestionar los costos energéticos máximos.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en King City?', a: 'Sí. King City procesa los permisos solares a través del Departamento de Construcción municipal, con un plazo típico de 2 a 4 semanas. El proceso de permisos sencillo y el terreno plano del valle facilitan las instalaciones; tu instalador se encarga de toda la coordinación.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en el caluroso King City?', a: 'Sin duda. King City experimenta veranos muy calurosos que generan altas facturas de aire acondicionado con las tarifas de $0.44/kWh de PG&E. La energía solar residencial con almacenamiento en batería fija tus costos energéticos y gestiona las cargas máximas de enfriamiento. King City recibe un estimado de 5.6 horas de sol pico al día, excelente para la producción solar.' },
      { q: '¿Cuánto sol recibe King City para la energía solar?', a: 'King City recibe un estimado de 5.6 horas de sol pico al día, entre las más altas del condado de Monterey. La ubicación en el extremo sur del interior del valle tiene poca niebla y un intenso sol de verano, lo que genera una fuerte producción solar durante todo el año, alineada con la alta demanda de aire acondicionado en verano.' },
    ],
  },
  'la-habra': {
    localNote: 'La Habra se ubica en el límite entre Orange County y Los Ángeles, con clima cálido de interior y vecindarios residenciales consolidados. La zona experimenta demanda de refrigeración moderada a alta, con un excelente potencial solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en La Habra?', a: 'Sí. La Habra tiene su propio departamento de construcción y seguridad municipal. Los permisos solares residenciales suelen procesarse en 2 a 3 semanas. Su instalador gestiona todo el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en La Habra con las tarifas de SCE?', a: 'Sí. Los residentes de La Habra pagan tarifas de SCE de alrededor de $0.36/kWh, con costos moderados a altos de aire acondicionado en verano debido al clima de interior. La energía solar residencial con almacenamiento en baterías ofrece ahorros sólidos y respaldo eléctrico.' },
      { q: '¿Cuánto sol recibe La Habra para la energía solar?', a: 'La Habra recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 9. La ubicación en el interior ofrece una excelente producción solar, con veranos cálidos y mínima capa marina.' },
    ],
  },
  'la-mesa': {
    localNote: 'La Mesa se ubica en un valle del interior al este de San Diego, con veranos cálidos y poca influencia de la capa marina. La zona experimenta una demanda de enfriamiento de moderada a alta con una excelente producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en La Mesa?', a: 'Sí. La Mesa cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en La Mesa con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de La Mesa pagan tarifas de SDG&E de alrededor de $0.47/kWh, con costos de enfriamiento de moderados a altos en verano. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe La Mesa para la energía solar?', a: 'La Mesa recibe un promedio de alrededor de 6.0 horas de sol pico al día en la Zona 10. La ubicación en el valle del interior ofrece una excelente producción solar, con veranos cálidos y sin interferencia de la capa marina.' },
    ],
  },
  'la-quinta': {
    localNote: 'La Quinta se encuentra en el desierto del valle de Coachella, con calor extremo en verano y una producción solar excepcional. Esta comunidad turística experimenta una demanda de enfriamiento muy alta, lo que hace que la economía solar sea especialmente sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en La Quinta?', a: 'Sí. La Quinta tiene su propio departamento de construcción y seguridad, con un tiempo de espera típico de 2 a 3 semanas para energía solar residencial. Su instalador se encarga de todos los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en La Quinta con las tarifas de SCE?', a: 'Definitivamente. Los residentes de La Quinta pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano extremos por el calor del desierto. La energía solar residencial con almacenamiento en baterías ofrece un ahorro excepcional y respaldo de energía fundamental durante las olas de calor.' },
      { q: '¿Cuánto sol recibe La Quinta para la energía solar?', a: 'La Quinta recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación en el desierto del valle de Coachella ofrece una producción solar excepcional, con cielos despejados durante todo el año y un sol intenso en verano.' },
    ],
  },
  'laguna-niguel': {
    localNote: 'Laguna Niguel se ubica en las colinas del sur de Orange County, entre la costa y los valles del interior. La zona cuenta con vecindarios en laderas con excelente exposición solar e influencia costera moderada.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Laguna Niguel?', a: 'Sí. Laguna Niguel tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas para instalaciones solares residenciales. Su contratista se encarga de todo el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Laguna Niguel con las tarifas de SCE?', a: 'Sí. Los residentes de Laguna Niguel pagan tarifas de SCE de alrededor de $0.36/kWh. La ubicación en laderas con clima moderado hace que la energía solar con almacenamiento en baterías sea una inversión sólida para el ahorro y el respaldo eléctrico.' },
      { q: '¿Cuánto sol recibe Laguna Niguel para la energía solar?', a: 'Laguna Niguel recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 6/8. La ubicación en laderas ofrece una excelente exposición solar, con influencia costera moderada y una producción sólida durante todo el año.' },
    ],
  },
  'lake-elsinore': {
    localNote: 'Lake Elsinore se encuentra alrededor del lago que le da su nombre, en el suroeste del condado de Riverside, con veranos calurosos. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Lake Elsinore?', a: 'Sí. Lake Elsinore tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Lake Elsinore con las tarifas de SCE?', a: 'Sí. Los residentes de Lake Elsinore pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante las olas de calor del interior.' },
      { q: '¿Cuánto sol recibe Lake Elsinore para la energía solar?', a: 'Lake Elsinore recibe en promedio alrededor de 6.1 horas de sol pico al día en la Zona 10. La ubicación en el valle interior ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'lakeport': {
    localNote: 'Lakeport es la sede del condado, junto a Clear Lake, con excelentes condiciones para la energía solar. El grave historial de incendios forestales y los frecuentes cortes por PSPS hacen que el respaldo con baterías sea fundamental para este pueblo lacustre.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Lakeport?', a: 'Sí. Lakeport requiere permisos a través del Departamento de Desarrollo Comunitario del Condado de Lake, con un plazo típico de 2 a 4 semanas. Las zonas de alto riesgo de incendio pueden requerir un diseño resistente al fuego. Tu contratista solar se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Lakeport ante el riesgo de incendios forestales?', a: 'Fundamental. Las tarifas de PG&E son de $0.44/kWh y los cortes por PSPS son extremos en esta zona de riesgo de incendios. La energía solar residencial con respaldo de baterías ofrece energía durante eventos de PSPS de varios días y evacuaciones. Lakeport recibe 5.2 horas de sol pico, excelente para la energía solar.' },
      { q: '¿Cuánto sol recibe Lakeport para la energía solar?', a: 'Lakeport recibe en promedio 5.2 horas de sol pico al día en la Zona 2. La ubicación junto a Clear Lake trae veranos cálidos y secos con cielos despejados, ideales para la producción solar. El humo de la temporada de incendios puede reducir el rendimiento temporalmente.' },
    ],
  },
  'lakewood': {
    localNote: 'Lakewood es una comunidad planificada en el sureste del condado de LA, entre Long Beach y Downey. La zona experimenta una influencia costera moderada, con veranos cálidos y una producción solar constante.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Lakewood?', a: 'Sí. Lakewood cuenta con su propio departamento de construcción municipal. Los permisos solares residenciales suelen procesarse en 2 a 3 semanas. Su contratista gestiona el proceso de solicitud y de inspección.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Lakewood con las tarifas de SCE?', a: 'Sí. Los residentes de Lakewood pagan tarifas de SCE de alrededor de $0.36/kWh. Los sistemas solares con almacenamiento en baterías ofrecen un ahorro sólido, energía de respaldo durante los cortes y protección frente a futuros aumentos de tarifas de SCE.' },
      { q: '¿Cuánto sol recibe Lakewood para la energía solar?', a: 'Lakewood recibe un promedio de alrededor de 5.8 horas pico de sol al día en la Zona 8/9. La ubicación entre la costa y los valles del interior ofrece una producción solar constante, con condiciones cálidas y soleadas la mayor parte del año.' },
    ],
  },
  'lancaster': {
    localNote: 'Lancaster se ubica en el desierto alto del Valle de Antelope, con un calor extremo en verano y un potencial solar excepcional. El clima desértico ofrece una de las exposiciones solares más altas de California, con una demanda de climatización muy alta.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Lancaster?', a: 'Sí. Lancaster cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Lancaster con las tarifas de SCE?', a: 'Sin duda. Los residentes de Lancaster pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de climatización extremos en verano debido al calor desértico. La energía solar residencial con almacenamiento en baterías ofrece un ahorro excepcional y energía de respaldo fundamental durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Lancaster para la energía solar?', a: 'Lancaster recibe un promedio de alrededor de 6.5 horas pico de sol al día en la Zona 14. La ubicación en el desierto alto ofrece una producción solar excepcional, con veranos muy calurosos y despejados, y una mínima nubosidad durante todo el año.' },
    ],
  },
  'lathrop': {
    localNote: 'Lathrop es una ciudad en crecimiento en el sector occidental del condado de San Joaquin, con nuevos desarrollos residenciales. La zona presenta veranos calurosos con alta demanda de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Lathrop?', a: 'Sí. Lathrop cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Lathrop con las tarifas de PG&E?', a: 'Sí. Los residentes de Lathrop pagan tarifas de PG&E de alrededor de $0.44/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo.' },
      { q: '¿Cuánta luz solar recibe Lathrop para la energía solar?', a: 'Lathrop recibe en promedio 5.6 horas de sol pico al día en la Zona 12. Su ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y muy poca bruma.' },
    ],
  },
  'lemoore': {
    localNote: 'Lemoore se ubica en el sur del Valle de San Joaquín, cerca de la Estación Aeronaval de Lemoore, con veranos muy calurosos y altas cargas de climatización. El entorno agrícola de la ciudad y el terreno plano del valle ofrecen un excelente potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Lemoore?', a: 'Sí. Lemoore procesa los permisos solares a través del Departamento de Desarrollo Comunitario de la ciudad, con un plazo típico de 2 a 3 semanas. Las instalaciones estándar en techos son sencillas; su instalador solar se encarga de todo el papeleo y las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Lemoore?', a: 'Sí. Lemoore experimenta veranos muy calurosos que generan altas facturas de aire acondicionado con tarifas de electricidad de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías fija los costos de energía y proporciona energía confiable. Lemoore recibe un estimado de 5.6 horas pico de sol al día, ideal para la producción solar.' },
      { q: '¿Cuánto sol recibe Lemoore para la energía solar?', a: 'Lemoore recibe un promedio estimado de 5.6 horas pico de sol al día. La ubicación en el caluroso Valle de San Joaquín ofrece un rendimiento solar muy sólido durante todo el año, con una producción intensa en verano que coincide con la demanda máxima de aire acondicionado para un ahorro máximo.' },
    ],
  },
  'lincoln': {
    localNote: 'Lincoln es una ciudad de rápido crecimiento en el oeste del condado de Placer, con viviendas más nuevas y techos amplios. La zona experimenta veranos calurosos y secos, ideales para la generación de energía solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Lincoln?', a: 'Sí. Lincoln sigue los procedimientos de permisos de Placer County CDRA, con un tiempo de espera típico de 2 a 4 semanas. SolarAPP+ puede agilizar la aprobación hasta el mismo día para sistemas residenciales que califiquen.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Lincoln con las tarifas de PG&E?', a: 'Definitivamente. Los residentes de Lincoln enfrentan tarifas de PG&E cercanas a $0.44/kWh. La energía solar residencial con respaldo de batería elimina la mayor parte de ese costo, además de brindar protección contra cortes durante eventos de PSPS.' },
      { q: '¿Cuánto sol recibe Lincoln para la energía solar?', a: 'Lincoln disfruta de aproximadamente 5.2 horas de sol pico al día en clima de Zona 11. El terreno plano del valle y la neblina mínima favorecen una fuerte producción solar durante todo el año.' },
    ],
  },
  'live-oak': {
    localNote: 'Live Oak es un pequeño pueblo agrícola en el valle, con excelente potencial solar. Los veranos calurosos y la economía agrícola hacen que la energía solar sea atractiva para propiedades residenciales y agrícolas.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Live Oak?', a: 'Sí. Live Oak requiere permisos a través de los Servicios Comunitarios del condado de Sutter, con un procesamiento de 2 a 4 semanas. Las propiedades agrícolas pueden integrar la energía solar en las operaciones agrícolas. Su instalador se encarga de los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Live Oak con las tarifas de PG&E?', a: 'Sí. PG&E cobra $0.44/kWh y el calor del valle genera altos costos de climatización. La energía solar con respaldo de batería proporciona ahorro y resiliencia para propiedades residenciales y agrícolas. Live Oak recibe 5.3 horas pico de sol, excelente para la energía solar.' },
      { q: '¿Cuánto sol recibe Live Oak para la energía solar?', a: 'Live Oak recibe un promedio de 5.3 horas pico de sol al día en la Zona 12. La zona agrícola del valle tiene veranos calurosos con cielos despejados, ideal para la energía solar. El terreno plano simplifica las instalaciones.' },
    ],
  },
  'livermore': {
    localNote: 'Livermore es una ciudad de valle interior al este de las colinas del East Bay. La zona tiene veranos calurosos y secos con poca influencia de la capa marina, lo que la hace ideal para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Livermore?', a: 'Sí. Livermore tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Livermore con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Livermore pagan tarifas de PG&E de alrededor de $0.44/kWh, con una alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Livermore para la energía solar?', a: 'Livermore recibe en promedio alrededor de 5.4 horas de sol pico al día en la Zona 4. La ubicación en el valle interior ofrece una excelente producción solar con muy poca interferencia de la capa marina.' },
    ],
  },
  'lodi': {
    localNote: 'Lodi es una ciudad de la zona vinícola en el norte del condado de San Joaquin, rodeada de terrenos agrícolas. La zona presenta veranos calurosos con excelentes condiciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Lodi?', a: 'Sí. Lodi cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Lodi con las tarifas de PG&E?', a: 'Sí. Los residentes de Lodi pagan tarifas de PG&E de alrededor de $0.44/kWh, con alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe Lodi para la energía solar?', a: 'Lodi recibe en promedio 5.6 horas de sol pico al día en la Zona 12. Su ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'loma-linda': {
    localNote: 'Loma Linda se encuentra en el Inland Empire, con un clima cálido del interior y terreno de colinas. La zona alberga el Loma Linda University Medical Center y presenta una alta demanda de enfriamiento junto con una excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Loma Linda?', a: 'Sí. Loma Linda cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas para los permisos solares residenciales. Su instalador se encarga de todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Loma Linda con las tarifas de SCE?', a: 'Sí. Los residentes de Loma Linda pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano debido al calor del Inland Empire. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo confiable.' },
      { q: '¿Cuánta luz solar recibe Loma Linda para la energía solar?', a: 'Loma Linda recibe en promedio 6.0 horas de sol pico al día en la Zona 10. Su ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'lompoc': {
    localNote: 'Lompoc se encuentra en un valle costero cercano a la Vandenberg Space Force Base, con neblina matutina que suele disiparse hacia el mediodía. El clima suave y el uso moderado de energía de la ciudad, sumados a las tarifas de SCE, hacen que la energía solar combinada con batería sea una opción rentable.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Lompoc?', a: 'Sí. Lompoc procesa los permisos solares a través del Community Development Department de la ciudad, con un tiempo de espera habitual de 3 a 4 semanas. Las instalaciones estándar en techo son sencillas; su instalador se encarga de todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Lompoc?', a: 'Sí. Lompoc recibe un estimado de 5.1 horas de sol pico al día, ya que la neblina matutina se disipa hacia la tarde. Las tarifas de SCE de $0.40/kWh y el suave clima costero hacen que la energía solar con almacenamiento en batería resulte atractiva desde el punto de vista financiero y proporcione energía de respaldo valiosa durante los cortes.' },
      { q: '¿Cuánta luz solar recibe Lompoc para la energía solar?', a: 'Lompoc recibe un estimado de 5.1 horas de sol pico al día. Su ubicación en el valle costero trae neblina marina matutina que suele disiparse hacia el final de la mañana, lo que permite una sólida producción solar por la tarde y un rendimiento constante durante todo el año.' },
    ],
  },
  'lone-pine': {
    localNote: 'Lone Pine es un pequeño pueblo del valle de Owens, a 3,700 pies de elevación, con clima de alto desierto y vistas al monte Whitney. La exposición solar excepcional y la ubicación remota hacen que la energía solar con almacenamiento en baterías sea atractiva para la independencia energética.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Lone Pine?', a: 'Sí. Lone Pine requiere permisos a través de Inyo County Planning Department, con un procesamiento de 3 a 5 semanas. La ubicación en el alto desierto puede requerir cálculos de viento y sísmicos para las instalaciones solares. Su instalador se encarga de los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Lone Pine dada su ubicación remota?', a: 'Sí. Las tarifas de LADWP y la ubicación remota del valle de Owens hacen que la independencia energética resulte atractiva. Lone Pine recibe 6.0 horas de sol pico con cielos despejados durante todo el año, excepcional para la energía solar con respaldo de batería. El clima de alto desierto asegura una producción confiable.' },
      { q: '¿Cuánto sol recibe Lone Pine para la energía solar?', a: 'Lone Pine recibe en promedio 6.0 horas de sol al día en el alto desierto del valle de Owens, entre las mejores de California. Los cielos despejados, la alta elevación de 3,700 pies y las precipitaciones mínimas generan una producción solar excepcional. Las vistas al monte Whitney vienen acompañadas de un potencial solar de primer nivel.' },
    ],
  },
  'long-beach': {
    localNote: 'Long Beach se encuentra en la costa del Pacífico, con un clima costero moderado e influencia de la capa marina. A pesar de la niebla costera, la zona recibe una sólida producción solar, y las tarifas de SCE hacen que la economía solar sea favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Long Beach?', a: 'Sí. Long Beach cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Long Beach con las tarifas de SCE?', a: 'Sí. Los residentes de Long Beach pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo, incluso con una demanda moderada de climatización propia del clima costero.' },
      { q: '¿Cuánto sol recibe Long Beach para la energía solar?', a: 'Long Beach recibe un promedio de aproximadamente 5.7 horas pico de sol al día en la Zona 8. La capa marina afecta la producción por la mañana, pero el clima costero aún respalda una sólida generación solar durante todo el año.' },
    ],
  },
  'loomis': {
    localNote: 'Loomis es un pequeño pueblo de las estribaciones conocido por sus huertos de frutales y su carácter rural. Muchas viviendas se ubican en parcelas más grandes con árboles maduros, por lo que las evaluaciones de sombra específicas del sitio son importantes.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Loomis?', a: 'Sí. Loomis está bajo la jurisdicción de Placer County CDRA. El tiempo de espera típico es de 2 a 4 semanas, o el mismo día mediante SolarAPP+ para sistemas que califiquen. Los sitios rurales pueden requerir una revisión adicional.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Loomis con las tarifas de PG&E?', a: 'Definitivamente. Los residentes de Loomis pagan tarifas de PG&E cercanas a $0.44/kWh, y las ubicaciones de las estribaciones enfrentan cortes por PSPS. La energía solar residencial con almacenamiento en baterías ofrece tanto ahorro como un respaldo de energía confiable.' },
      { q: '¿Cuánto sol recibe Loomis para la energía solar?', a: 'Loomis recibe en promedio alrededor de 5.2 horas de sol pico al día. La producción real depende de la orientación del terreno, la sombra de los árboles y el relieve; una evaluación del sitio es fundamental para las propiedades de las estribaciones.' },
    ],
  },
  'los-angeles': {
    localNote: 'Los Ángeles recibe servicio de LADWP, una empresa municipal con tarifas más bajas que las de SCE. El valor de la energía solar proviene de la energía de respaldo durante los cortes, la independencia energética y la protección frente a futuros aumentos de tarifas, además de compensar los altos costos de climatización en los vecindarios del interior.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Los Ángeles?', a: 'Sí. La ciudad de Los Ángeles utiliza LADBS (Departamento de Edificación y Seguridad de LA) con SolarAPP+ para los sistemas residenciales elegibles en techos, lo que brinda aprobación automatizada el mismo día. Su instalador presenta la solicitud y se encarga de todo el proceso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Los Ángeles con las tarifas de LADWP?', a: 'Las tarifas de LADWP promedian $0.24/kWh, más bajas que las de SCE. El retorno de la inversión solar es más largo, pero los sistemas solares con baterías proporcionan energía de respaldo durante los cortes, protegen contra futuros aumentos de tarifas y compensan los altos costos de climatización en vecindarios del interior de LA como el Valle.' },
      { q: '¿Cuánto sol recibe Los Ángeles para la energía solar?', a: 'Los Ángeles recibe un promedio de alrededor de 5.7 horas pico de sol al día en la Zona 8/9. Las zonas costeras experimentan la capa marina, pero los vecindarios del interior (el Valle, el Este de LA) presentan una excelente producción solar durante todo el año, con veranos calurosos y despejados.' },
    ],
  },
  'los-banos': {
    localNote: 'Los Banos es una ciudad del Valle Central en el oeste del condado de Merced, con entornos agrícolas. La zona experimenta veranos calurosos con excelentes condiciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Los Banos?', a: 'Sí. Los Banos tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Los Banos con las tarifas de PG&E?', a: 'Sí. Los residentes de Los Banos pagan tarifas de PG&E de alrededor de $0.44/kWh, con una alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y respaldo de energía, especialmente valioso para propiedades agrícolas.' },
      { q: '¿Cuánto sol recibe Los Banos para la energía solar?', a: 'Los Banos recibe en promedio alrededor de 5.8 horas de sol pico al día en la Zona 13. La ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y sin capa marina.' },
    ],
  },
  'loyalton': {
    localNote: 'Loyalton es un pequeño pueblo de montaña en Sierra Valley, a 5,000 pies de elevación, con inviernos fríos y cielos despejados en verano. La ubicación remota y las tormentas de invierno hacen que la energía solar con respaldo de batería sea atractiva para la independencia energética.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Loyalton?', a: 'Sí. Loyalton requiere permisos a través del Departamento de Planificación del condado de Sierra, con un plazo de 3 a 5 semanas. La elevación de montaña requiere cálculos de carga de nieve para el sistema de montaje solar. Tu contratista se encarga de la ingeniería y los permisos para instalaciones remotas de montaña.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en la remota Loyalton?', a: 'Sí. PG&E cobra $0.44/kWh, y la ubicación remota de montaña trae tiempos de restauración de cortes más largos durante las tormentas de invierno. La energía solar con respaldo de batería ofrece independencia energética y resiliencia. Loyalton recibe 5.0 horas de sol pico, un buen nivel para la energía solar de montaña a pesar de la nieve invernal.' },
      { q: '¿Cuánto sol recibe Loyalton para la energía solar?', a: 'Loyalton recibe un promedio de 5.0 horas de sol pico al día, a 5,000 pies de elevación en Sierra Valley. El aire limpio de montaña y la alta elevación mejoran la producción solar. La nieve invernal reduce temporalmente el rendimiento, pero los ángulos pronunciados de los paneles y el fuerte sol de verano generan una producción anual viable.' },
    ],
  },
  'lynwood': {
    localNote: 'Lynwood se ubica en la región del South Bay, con un clima moderado y proximidad a importantes centros de empleo. La zona experimenta una producción solar constante durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Lynwood?', a: 'Sí. Lynwood cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas para permisos solares residenciales. Su instalador gestiona todo el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Lynwood con las tarifas de SCE?', a: 'Sí. Los residentes de Lynwood pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo confiable durante los cortes de la red.' },
      { q: '¿Cuánto sol recibe Lynwood para la energía solar?', a: 'Lynwood recibe un promedio de alrededor de 5.7 horas pico de sol al día en la Zona 8/9. La ubicación en el South Bay ofrece una sólida producción solar, con un clima moderado y un clima extremo mínimo.' },
    ],
  },
  'madera': {
    localNote: 'Madera es la sede del condado en el valle de San Joaquín, con calor extremo en verano y un terreno plano ideal para la energía solar. La economía agrícola y el calor del valle hacen que la energía solar sea atractiva para reducir los altos costos de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Madera?', a: 'Sí. Madera requiere permisos a través de Madera County Building Department, con un tiempo de espera típico de 2 a 4 semanas. La ubicación en el piso del valle simplifica la instalación, con restricciones de terreno mínimas. Su contratista solar se encarga del proceso de solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Madera con el calor extremo del valle?', a: 'Definitivamente. Las tarifas de PG&E son de $0.44/kWh y las temperaturas del valle superan regularmente los 100°F en verano, generando costos de enfriamiento extremos. La energía solar residencial con respaldo de batería ofrece ahorro en las facturas de aire acondicionado y resiliencia durante eventos de calor. Madera recibe 5.4 horas de sol pico, excelente para la energía solar.' },
      { q: '¿Cuánto sol recibe Madera para la energía solar?', a: 'Madera recibe en promedio 5.4 horas de sol al día en el valle de San Joaquín. El terreno plano y el calor extremo en verano generan una fuerte producción solar durante todo el año. La ubicación en el valle tiene neblina costera mínima, ideal para un rendimiento solar constante.' },
    ],
  },
  'mammoth-lakes': {
    localNote: 'Mammoth Lakes es un pueblo turístico de la alta Sierra, a 7,900 pies de elevación, con fuertes nevadas invernales y un sol excepcional en verano. El turismo durante todo el año y su ubicación remota en la montaña hacen que la energía solar con respaldo de batería resulte atractiva, a pesar de los desafíos del invierno.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Mammoth Lakes?', a: 'Sí. Mammoth Lakes requiere permisos a través del Town of Mammoth Lakes, con un proceso independiente del condado de Mono. La gran elevación requiere cálculos de carga de nieve para la estructura de montaje solar. Su contratista se encarga de la ingeniería y los permisos para las instalaciones de montaña.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Mammoth Lakes con la nieve invernal?', a: 'Sí, con un diseño adecuado. Las tarifas de Liberty Utilities y la ubicación remota en la montaña hacen que la independencia energética resulte atractiva. Mammoth recibe 4.8 horas de sol pico, con una producción excepcional en verano gracias a la gran elevación. Los ángulos pronunciados de los paneles facilitan el desprendimiento de nieve, y el respaldo de batería ofrece resiliencia durante las tormentas invernales.' },
      { q: '¿Cómo afecta la nieve a la energía solar en Mammoth Lakes?', a: 'Mammoth se encuentra a 7,900 pies de elevación, con fuertes nevadas invernales que cubren los paneles de forma temporal. Los ángulos pronunciados de los paneles y el desprendimiento de la nieve restauran la producción en pocos días. El sol de verano en la gran elevación es excepcionalmente intenso, lo que compensa las reducciones invernales. La producción anual promedia 4.8 horas de sol pico, un valor viable para la energía solar.' },
    ],
  },
  'manteca': {
    localNote: 'Manteca es una ciudad del Valle Central al sur de Stockton, con terreno plano y veranos calurosos. La zona presenta alta demanda de enfriamiento, ideal para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Manteca?', a: 'Sí. Manteca cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Manteca con las tarifas de PG&E?', a: 'Sí. Los residentes de Manteca pagan tarifas de PG&E de alrededor de $0.44/kWh, con alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante el calor extremo.' },
      { q: '¿Cuánta luz solar recibe Manteca para la energía solar?', a: 'Manteca recibe en promedio 5.6 horas de sol pico al día en la Zona 12. Su ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y sin influencia de neblina marina.' },
    ],
  },
  'marina': {
    localNote: 'Marina se ubica en el extremo norte de la bahía de Monterey, con terreno de dunas costeras y una niebla matutina que se disipa antes que en Monterey propiamente dicho. El trazado plano de la ciudad y su clima moderado crean condiciones ideales para las instalaciones solares en techo.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Marina?', a: 'Sí. Marina requiere permisos a través del Departamento de Construcción municipal, con un procesamiento típico de 2 a 3 semanas. Las propiedades costeras pueden necesitar una revisión adicional; tu instalador solar gestiona todos los permisos y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Marina?', a: 'Sí. Marina recibe un estimado de 5.1 horas de sol pico al día, ya que la niebla matutina se disipa antes que en zonas costeras más profundas. Las tarifas de PG&E de $0.44/kWh, combinadas con el consumo de energía moderado propio de la costa, hacen que la energía solar con almacenamiento en batería sea una excelente inversión a largo plazo.' },
      { q: '¿Cómo afecta la ubicación costera de Marina a la energía solar?', a: 'Marina experimenta capa marina matutina, pero esta suele disiparse más temprano que en Monterey propiamente dicho, debido a su posición en el extremo norte de la bahía. Esto genera un estimado de 5.1 horas de sol pico al día: un fuerte potencial de producción solar que combina bien con el clima costero templado y las altas tarifas de electricidad.' },
    ],
  },
  'mariposa': {
    localNote: 'Mariposa es el pueblo de entrada a Yosemite, a 2,000 pies de elevación, con un centro histórico y zonas residenciales en las laderas. La ubicación en las estribaciones de montaña ofrece una excelente exposición solar, aunque el riesgo de incendios forestales hace que el respaldo de batería sea fundamental.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Mariposa?', a: 'Sí. Mariposa requiere permisos a través de Mariposa County Planning Department, con un tiempo de espera típico de 3 a 5 semanas. El terreno montañoso puede requerir revisión estructural para instalaciones en laderas. Su contratista solar se encarga del proceso de solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Mariposa con el riesgo de PSPS?', a: 'Definitivamente. Las tarifas de PG&E son de $0.44/kWh y los cortes por PSPS son frecuentes durante la temporada de incendios en esta zona de entrada a Yosemite. La energía solar residencial con respaldo de batería brinda independencia energética durante cortes de varios días. Mariposa recibe 5.1 horas de sol pico, excelente para la energía solar de estribaciones de montaña.' },
      { q: '¿Cuánto sol recibe Mariposa para la energía solar?', a: 'Mariposa recibe en promedio 5.1 horas de sol al día a 2,000 pies de elevación en las estribaciones de la Sierra. Los veranos calurosos con cielos despejados y una influencia costera mínima generan una fuerte producción solar. La ubicación en las estribaciones de montaña asegura una exposición solar constante y temperaturas de panel más frescas que en las zonas del valle.' },
    ],
  },
  'markleeville': {
    localNote: 'Markleeville es la sede del condado y el único pueblo de Alpine County, a 1,680 metros de elevación. La remota ubicación en la alta Sierra Nevada y la nieve invernal hacen que la energía solar con respaldo de baterías sea esencial para la independencia energética y la resiliencia.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Markleeville?', a: 'Sí. Markleeville requiere permisos a través de Desarrollo Comunitario del Condado de Alpine, con un plazo de 3 a 5 semanas. La gran elevación de montaña requiere cálculos de carga de nieve para las estructuras solares. Su contratista se encarga de la ingeniería y los permisos para instalaciones remotas de montaña.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en la remota Markleeville?', a: 'Sin duda. Las tarifas de Liberty Utilities y la remota ubicación en la alta Sierra Nevada hacen que la independencia energética sea esencial. Markleeville recibe 5.0 horas de sol pico, con una fuerte producción en verano por la elevación. La energía solar residencial con respaldo de baterías ofrece resiliencia durante tormentas invernales, cuando el acceso a la red puede ser limitado.' },
      { q: '¿Cómo afecta la elevación de montaña a la energía solar en Markleeville?', a: 'Markleeville se ubica a 1,680 metros, con aire de montaña despejado que potencia la radiación solar. La nieve invernal reduce temporalmente la producción, pero los ángulos pronunciados de los paneles hacen que la nieve se deslice rápidamente. El sol de verano en altura es excepcionalmente fuerte, compensando las reducciones invernales. La producción anual promedia 5.0 horas de sol pico, viable para la energía solar de montaña.' },
    ],
  },
  'marysville': {
    localNote: 'Marysville es la sede del condado en el Valle de Sacramento, con excelentes condiciones solares. Los veranos calurosos y las tarifas de PG&E hacen que la energía solar resulte atractiva para reducir los costos de refrigeración.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Marysville?', a: 'Sí. Marysville requiere permisos a través del Departamento de Desarrollo Comunitario del Condado de Yuba, con un plazo típico de 2 a 4 semanas. El terreno plano del valle simplifica la instalación. Su contratista solar se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Marysville con los veranos calurosos?', a: 'Sin duda. Las tarifas de PG&E son de $0.44/kWh y el calor extremo del valle impulsa los costos de refrigeración. La energía solar residencial con respaldo de baterías genera ahorro en las facturas de aire acondicionado y resiliencia durante eventos de calor. Marysville recibe 5.3 horas de sol pico, excelente para la energía solar.' },
      { q: '¿Cuánto sol recibe Marysville para la energía solar?', a: 'Marysville recibe un promedio de 5.3 horas de sol pico al día en la Zona 12. La ubicación en el Valle de Sacramento trae veranos calurosos con cielos despejados, ideal para la producción solar. El terreno plano facilita las instalaciones orientadas al sur.' },
    ],
  },
  'mckinleyville': {
    localNote: 'McKinleyville se ubica al norte de Arcata, en la llanura costera, con neblina marina persistente. El respaldo con baterías aporta valor durante las tormentas invernales y los eventos de PSPS en esta remota comunidad costera.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en McKinleyville?', a: 'Sí. McKinleyville requiere permisos a través del Departamento de Construcción del Condado de Humboldt, con un procesamiento de 2 a 4 semanas. La exposición costera requiere equipos de grado marino. Su instalador solar se encarga de la solicitud ante el condado.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en McKinleyville con la neblina costera?', a: 'Sí. PG&E cobra $0.44/kWh y las tormentas invernales causan cortes de varios días. La energía solar con respaldo de baterías ofrece resiliencia a pesar de las 4.4 horas de sol pico por la neblina marina. Los sistemas sobredimensionados compensan el clima.' },
      { q: '¿Cuánto sol recibe McKinleyville para la energía solar?', a: 'McKinleyville recibe un promedio de 4.4 horas de sol pico al día en la Zona 1. La ubicación en la llanura costera trae neblina matutina intensa que se despeja al mediodía. El clima marino requiere paneles y estructuras resistentes a la corrosión.' },
    ],
  },
  'menifee': {
    localNote: 'Menifee es una ciudad en crecimiento en el suroeste del condado de Riverside, con veranos calurosos. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Menifee?', a: 'Sí. Menifee tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Menifee con las tarifas de SCE?', a: 'Sí. Los residentes de Menifee pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Menifee para la energía solar?', a: 'Menifee recibe en promedio alrededor de 6.1 horas de sol pico al día en la Zona 10. La ubicación en el interior ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'menlo-park': {
    localNote: 'Menlo Park es una acomodada ciudad de la Península, sobre la autopista 101, cerca de Stanford. La zona experimenta menos capa marina que las ubicaciones costeras, con una sólida producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Menlo Park?', a: 'Sí. Menlo Park cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Menlo Park con las tarifas de PG&E?', a: 'Sí. Los residentes de Menlo Park pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorro e independencia energética, con mejores condiciones solares que las zonas costeras de la Península.' },
      { q: '¿Cuánto sol recibe Menlo Park para la energía solar?', a: 'Menlo Park recibe un promedio de alrededor de 5.1 horas pico de sol al día en la Zona 3. La ubicación del interior, junto a la bahía, experimenta menos capa marina, lo que ofrece una producción solar confiable durante todo el año.' },
    ],
  },
  'merced': {
    localNote: 'Merced es la sede del condado y hogar de UC Merced. La zona experimenta veranos calurosos y secos con una demanda de enfriamiento muy alta, ideal para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Merced?', a: 'Sí. Merced tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Merced con las tarifas de PG&E?', a: 'Definitivamente. Los residentes de Merced pagan tarifas de PG&E de alrededor de $0.44/kWh, con costos de enfriamiento en verano muy altos. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante eventos de calor extremo.' },
      { q: '¿Cuánto sol recibe Merced para la energía solar?', a: 'Merced recibe en promedio alrededor de 5.8 horas de sol pico al día en la Zona 13. La ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y despejados y neblina mínima.' },
    ],
  },
  'mill-valley': {
    localNote: 'Mill Valley se encuentra al pie del monte Tamalpais, con vecindarios en las laderas y capa marina frecuente. La producción solar es viable a pesar de la influencia costera.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Mill Valley?', a: 'Sí. Mill Valley tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Mill Valley con las tarifas de PG&E?', a: 'Sí. Los residentes de Mill Valley pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorro e independencia energética a pesar de la influencia de la capa marina, además de respaldo de energía durante cortes.' },
      { q: '¿Cuánto sol recibe Mill Valley para la energía solar?', a: 'Mill Valley recibe en promedio alrededor de 4.8 horas de sol pico al día en la Zona 3. La capa marina frecuente y la sombra de las laderas afectan la producción, pero la energía solar sigue siendo viable con una evaluación adecuada del sitio.' },
    ],
  },
  'milpitas': {
    localNote: 'Milpitas se ubica en el extremo sur de la bahía de San Francisco, con zonas de colinas hacia el este. La zona experimenta veranos cálidos con excelentes condiciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Milpitas?', a: 'Sí. Milpitas cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Milpitas con las tarifas de PG&E?', a: 'Sí. Los residentes de Milpitas pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo durante las olas de calor en verano.' },
      { q: '¿Cuánto sol recibe Milpitas para la energía solar?', a: 'Milpitas recibe un promedio de aproximadamente 5.3 horas de sol pico al día en la Zona 4. La ubicación en el valle ofrece una excelente producción solar, con una interferencia mínima de la capa marina.' },
    ],
  },
  'mission-viejo': {
    localNote: 'Mission Viejo se ubica en las estribaciones del Valle de Saddleback, con clima cálido de interior. La zona experimenta una mínima influencia de la capa marina, con una excelente producción solar y demanda de refrigeración moderada a alta.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Mission Viejo?', a: 'Sí. Mission Viejo tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Mission Viejo con las tarifas de SCE?', a: 'Sí. Los residentes de Mission Viejo pagan tarifas de SCE de alrededor de $0.36/kWh, con demanda de refrigeración moderada a alta. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Mission Viejo para la energía solar?', a: 'Mission Viejo recibe un promedio de alrededor de 5.9 horas de sol pico al día en la Zona 8/10. La ubicación en las estribaciones ofrece una excelente producción solar, con veranos cálidos y mínima capa marina.' },
    ],
  },
  'modesto': {
    localNote: 'Modesto recibe servicio de MID, una empresa pública con tarifas más bajas que las de PG&E. Aquí, el valor de la energía solar proviene del respaldo eléctrico durante cortes y de la independencia energética, más que del ahorro puro en tarifas.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Modesto?', a: 'Sí. Modesto tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Modesto con las tarifas de MID?', a: 'Las tarifas de MID promedian $0.18-0.20/kWh, mucho más bajas que las de PG&E. El retorno de la inversión solar es más lento, pero los sistemas solares con baterías brindan respaldo eléctrico durante cortes en verano, protegen contra futuros aumentos de tarifas y aportan independencia energética.' },
      { q: '¿Cuánto sol recibe Modesto para la energía solar?', a: 'Modesto recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 12. La ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y despejados, y sin capa marina.' },
    ],
  },
  'montclair': {
    localNote: 'Montclair se encuentra en el sector occidental del Inland Empire, con un clima cálido del interior y vecindarios residenciales ya consolidados. La zona presenta alta demanda de enfriamiento y excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Montclair?', a: 'Sí. Montclair cuenta con su propio departamento de construcción municipal. Los permisos solares residenciales suelen tardar entre 2 y 3 semanas en procesarse. Su contratista gestiona todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Montclair con las tarifas de SCE?', a: 'Sí. Los residentes de Montclair pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano debido al calor del Inland Empire. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe Montclair para la energía solar?', a: 'Montclair recibe en promedio 6.0 horas de sol pico al día en la Zona 10. Su ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y sin influencia de neblina marina.' },
    ],
  },
  'montebello': {
    localNote: 'Montebello se ubica en el este del área de Los Ángeles, con un clima cálido del interior y vecindarios residenciales consolidados. La zona experimenta una demanda de climatización de moderada a alta con una producción solar constante.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Montebello?', a: 'Sí. Montebello cuenta con su propio departamento de construcción y seguridad. Los permisos solares residenciales suelen tardar de 2 a 3 semanas. Su instalador se encarga de la solicitud del permiso y de la coordinación.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Montebello con las tarifas de SCE?', a: 'Sí. Los residentes de Montebello pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de aire acondicionado de moderados a altos en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo.' },
      { q: '¿Cuánto sol recibe Montebello para la energía solar?', a: 'Montebello recibe un promedio de alrededor de 5.7 horas pico de sol al día en la Zona 9. La ubicación del interior ofrece una excelente producción solar, con veranos cálidos y una mínima capa marina.' },
    ],
  },
  'monterey': {
    localNote: 'Monterey se ubica en la pintoresca costa del Pacífico, con capa marina matutina que suele disiparse hacia el mediodía. La niebla costera reduce ligeramente la producción solar en comparación con las zonas del interior, pero el clima templado mantiene la demanda de energía moderada, y la energía solar sigue ofreciendo un fuerte valor durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Monterey?', a: 'Sí. La División de Construcción de la ciudad de Monterey procesa los permisos solares con un plazo típico de 2 a 4 semanas. Las propiedades en la zona costera pueden requerir una revisión ambiental adicional. Tu instalador coordina todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en la costa de Monterey?', a: 'Sí. Incluso con la niebla matutina, Monterey recibe un estimado de 5.0 horas de sol pico al día, ya que la capa marina se disipa por la tarde. Las tarifas de PG&E de $0.44/kWh y el consumo de energía moderado propio de la costa hacen que la energía solar con respaldo de batería sea una inversión inteligente para la independencia energética y el ahorro de costos.' },
      { q: '¿Cómo afecta la niebla a la energía solar en Monterey?', a: 'Monterey experimenta capa marina matutina que suele disiparse hacia el final de la mañana o principios de la tarde. Esto reduce ligeramente la producción solar en comparación con los valles del interior, pero la ciudad sigue alcanzando un estimado de 5.0 horas de sol pico al día, viable para una producción solar sólida y ahorros en las altas facturas de PG&E.' },
    ],
  },
  'moorpark': {
    localNote: 'Moorpark se ubica en colinas del interior, con veranos cálidos y poca capa marina. La zona tiene demanda de enfriamiento de moderada a alta, con excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Moorpark?', a: 'Sí. Moorpark tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Moorpark con las tarifas de SCE?', a: 'Sí. Los residentes de Moorpark pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento de moderados a altos en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Moorpark para la energía solar?', a: 'Moorpark recibe en promedio alrededor de 5.9 horas de sol pico al día en la Zona 9. La ubicación en las colinas del interior ofrece una excelente producción solar con veranos cálidos y sin capa marina.' },
    ],
  },
  'moreno-valley': {
    localNote: 'Moreno Valley se encuentra en el Inland Empire, con veranos calurosos y secos y un potencial solar excepcional. La zona experimenta una demanda de enfriamiento muy alta, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Moreno Valley?', a: 'Sí. Moreno Valley tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Moreno Valley con las tarifas de SCE?', a: 'Definitivamente. Los residentes de Moreno Valley pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano muy altos por el calor del Inland Empire. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y un respaldo de energía fundamental durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Moreno Valley para la energía solar?', a: 'Moreno Valley recibe en promedio alrededor de 6.1 horas de sol pico al día en la Zona 10. La ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y despejados y sin influencia de la capa marina.' },
    ],
  },
  'morgan-hill': {
    localNote: 'Morgan Hill es una ciudad del valle sur ubicada entre San José y Gilroy. La zona experimenta veranos calurosos con un excelente potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Morgan Hill?', a: 'Sí. Morgan Hill cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Morgan Hill con las tarifas de PG&E?', a: 'Sí. Los residentes de Morgan Hill pagan tarifas de PG&E de alrededor de $0.44/kWh, con una alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Morgan Hill para la energía solar?', a: 'Morgan Hill recibe un promedio de alrededor de 5.4 horas de sol pico al día en la Zona 4. La ubicación en el valle sur ofrece una excelente producción solar, con veranos calurosos y una capa marina mínima.' },
    ],
  },
  'mount-shasta': {
    localNote: 'Mount Shasta se ubica a 3,600 pies, en las laderas del pico volcánico, con fuertes nevadas invernales. El diseño con carga de nieve es fundamental, y el respaldo de batería aporta resiliencia durante las tormentas invernales.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Mount Shasta?', a: 'Sí. Mount Shasta requiere permisos a través del Departamento de Desarrollo Comunitario del condado de Siskiyou, con un procesamiento de 2 a 4 semanas. Los cálculos de carga de nieve para gran altitud son obligatorios. Su contratista se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Mount Shasta con nevadas intensas?', a: 'Sin duda. Las tarifas de PG&E de $0.44/kWh y los cortes frecuentes por tormentas invernales hacen que la energía solar con almacenamiento en baterías sea valiosa. El respaldo de batería proporciona energía fundamental cuando los caminos son intransitables. Los paneles clasificados para nieve soportan cargas pesadas y siguen produciendo en días de invierno despejados.' },
      { q: '¿Cuánto sol recibe Mount Shasta para la energía solar?', a: 'Mount Shasta recibe un promedio de 4.6 horas pico de sol al día, a 3,600 pies de elevación, en la Zona 1. Las fuertes nevadas invernales y el terreno de montaña reducen la producción, pero la gran altitud aporta un sol intenso en verano y viabilidad durante todo el año.' },
    ],
  },
  'mountain-view': {
    localNote: 'Mountain View es un centro tecnológico de Silicon Valley cercano a la orilla de la bahía. La zona experimenta una influencia marina moderada, pero con una fuerte producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Mountain View?', a: 'Sí. Mountain View cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Mountain View con las tarifas de PG&E?', a: 'Sí. Los residentes de Mountain View pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo durante los cortes de electricidad.' },
      { q: '¿Cuánto sol recibe Mountain View para la energía solar?', a: 'Mountain View recibe un promedio de alrededor de 5.2 horas de sol pico al día en la Zona 4. Existe cierta influencia de la capa marina, pero la producción solar se mantiene fuerte durante todo el año.' },
    ],
  },
  'murphys': {
    localNote: 'Murphys es un pintoresco pueblo de la Fiebre del Oro y un destino de la región vitivinícola, a 2,200 pies de elevación. La mayor elevación ofrece una excelente exposición solar, aunque las tormentas invernales y el riesgo de incendios forestales requieren un diseño de sistema cuidadoso.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Murphys?', a: 'Sí. Murphys requiere permisos a través del Departamento de Planificación del condado de Calaveras, con un plazo típico de 3 a 5 semanas. La mayor elevación puede requerir cálculos de carga de nieve para las estructuras de montaje solar. Su contratista se encarga de la ingeniería y los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en la región vitivinícola de Murphys?', a: 'Sin duda. Las tarifas de PG&E son de $0.44/kWh y la mayor elevación genera cortes de PSPS más largos durante la temporada de incendios. La energía solar con respaldo de batería aporta resiliencia para hogares y viñedos. Murphys recibe 5.2 horas pico de sol, excelente para la producción solar de montaña.' },
      { q: '¿Cómo afecta la elevación a la energía solar en Murphys?', a: 'Murphys se ubica a 2,200 pies, con un aire más despejado y una radiación solar más intensa que en elevaciones más bajas. La nieve invernal puede reducir temporalmente la producción, pero el rendimiento anual sigue siendo excelente, con 5.2 horas pico de sol. La mayor elevación también aporta temperaturas de panel más frescas, lo que mejora la eficiencia en verano.' },
    ],
  },
  'murrieta': {
    localNote: 'Murrieta se encuentra en el valle de Temecula, con veranos calurosos y un crecimiento residencial constante. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Murrieta?', a: 'Sí. Murrieta tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Murrieta con las tarifas de SCE?', a: 'Sí. Los residentes de Murrieta pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Murrieta para la energía solar?', a: 'Murrieta recibe en promedio alrededor de 6.0 horas de sol pico al día en la Zona 10. La ubicación en el valle ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'napa': {
    localNote: 'Napa es la sede del condado y el corazón de la región vinícola, con excelentes condiciones para la energía solar. El riesgo de incendios forestales y los eventos de PSPS hacen que el respaldo con baterías resulte atractivo para esta comunidad de alto poder adquisitivo.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Napa?', a: 'Sí. Napa requiere permisos a través del Departamento de Planificación, Construcción y Servicios Ambientales del Condado de Napa, con un plazo típico de 2 a 4 semanas. Las propiedades en laderas pueden tener requisitos adicionales. Tu contratista solar se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Napa con el riesgo de PSPS?', a: 'Muy atractivo. Las tarifas de PG&E son de $0.44/kWh y los cortes por PSPS afectan las laderas de la región vinícola. La energía solar residencial con respaldo de baterías premium ofrece energía durante eventos de PSPS y calor extremo. Napa recibe 5.1 horas de sol pico, excelente para la energía solar.' },
      { q: '¿Cuánto sol recibe Napa para la energía solar?', a: 'Napa recibe en promedio 5.1 horas de sol pico al día en la Zona 2. Los veranos calurosos del valle y los cielos despejados generan una producción solar sólida durante todo el año. Los sistemas premium combinan bien con la estética de la región vinícola.' },
    ],
  },
  'national-city': {
    localNote: 'National City se ubica justo al sur de San Diego, con influencia costera moderada y capa marina. La zona recibe una fuerte producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en National City?', a: 'Sí. National City cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en National City con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de National City pagan tarifas de SDG&E de alrededor de $0.47/kWh, entre las más altas del país. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional, a pesar de la demanda moderada de enfriamiento propia de su ubicación cercana a la costa.' },
      { q: '¿Cuánto sol recibe National City para la energía solar?', a: 'National City recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 7. La capa marina afecta la producción por la mañana, pero la generación solar se mantiene fuerte gracias al despeje de la tarde.' },
    ],
  },
  'nevada-city': {
    localNote: 'Nevada City es un pequeño pueblo histórico en las estribaciones de la Sierra, rodeado de terreno boscoso. Muchas viviendas se encuentran en lotes arbolados, por lo que la sombra de los árboles y las consideraciones sobre zonas de riesgo de incendio son importantes.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Nevada City?', a: 'Sí. Nevada City sigue los procedimientos del Nevada County Building Department, con un tiempo de espera habitual de 2 a 4 semanas. Los sitios en las estribaciones y en zonas boscosas pueden requerir una revisión adicional del terreno y de la zona de riesgo de incendio.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Nevada City con las tarifas de PG&E?', a: 'Sí. Los residentes de Nevada City pagan tarifas de PG&E cercanas a $0.44/kWh y experimentan frecuentes cortes PSPS. La energía solar residencial con almacenamiento en batería es ideal para contar con energía de respaldo durante los cortes y lograr un ahorro energético a largo plazo.' },
      { q: '¿Cuánta luz solar recibe Nevada City para la energía solar?', a: 'Nevada City recibe en promedio 5.0 horas de sol pico al día. La topografía de las estribaciones y la cobertura arbórea hacen que la producción solar varíe según la orientación del sitio y la sombra, por lo que una evaluación profesional del terreno es esencial.' },
    ],
  },
  'newport-beach': {
    localNote: 'Newport Beach se ubica en la costa del Pacífico, con influencia de la capa marina y un clima costero templado. A pesar de la neblina matutina, la zona recibe una producción solar sólida, y las viviendas de alto valor se benefician de la economía solar de SCE.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Newport Beach?', a: 'Sí. Newport Beach tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Newport Beach con las tarifas de SCE?', a: 'Sí. Los residentes de Newport Beach pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorros sólidos e independencia energética, a pesar de la demanda moderada de refrigeración propia del clima costero.' },
      { q: '¿Cuánto sol recibe Newport Beach para la energía solar?', a: 'Newport Beach recibe un promedio de alrededor de 5.6 horas de sol pico al día en la Zona 6. La capa marina afecta la producción matutina, pero la generación solar se mantiene sólida con el sol de la tarde y cielos despejados.' },
    ],
  },
  'norco': {
    localNote: 'Norco se encuentra en el oeste del condado de Riverside, con un clima interior templado y un carácter comunitario ecuestre. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Norco?', a: 'Sí. Norco tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas para permisos solares residenciales. Su contratista gestiona todo el proceso de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Norco con las tarifas de SCE?', a: 'Sí. Los residentes de Norco pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de aire acondicionado en verano por el clima interior. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y respaldo de energía.' },
      { q: '¿Cuánto sol recibe Norco para la energía solar?', a: 'Norco recibe en promedio alrededor de 6.0 horas de sol pico al día en la Zona 10. La ubicación en el interior ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'norwalk': {
    localNote: 'Norwalk se ubica en el sureste del condado de Los Ángeles, con un clima templado del interior y una influencia moderada de la capa marina. La zona experimenta veranos cálidos con un sólido potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Norwalk?', a: 'Sí. Norwalk cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Norwalk con las tarifas de SCE?', a: 'Sí. Los residentes de Norwalk pagan tarifas de SCE de alrededor de $0.36/kWh, con una demanda moderada de climatización en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Norwalk para la energía solar?', a: 'Norwalk recibe un promedio de alrededor de 5.8 horas pico de sol al día en la Zona 9. La ubicación del interior ofrece una sólida producción solar, con veranos cálidos y una capa marina moderada.' },
    ],
  },
  'novato': {
    localNote: 'Novato es la ciudad más al norte de Marin, ubicada en un valle interior. La zona experimenta veranos más cálidos y más sol que las ubicaciones de Marin junto a la bahía.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Novato?', a: 'Sí. Novato tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Novato con las tarifas de PG&E?', a: 'Sí. Los residentes de Novato pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorro y respaldo de energía, con la ubicación en el valle interior brindando mejores condiciones solares que la Marin costera.' },
      { q: '¿Cuánto sol recibe Novato para la energía solar?', a: 'Novato recibe en promedio alrededor de 5.1 horas de sol pico al día en la Zona 3. La ubicación en el valle interior del norte recibe menos capa marina que las zonas junto a la bahía, lo que favorece una fuerte producción solar.' },
    ],
  },
  'oakdale': {
    localNote: 'Oakdale es una pequeña ciudad del Valle Central al este de Modesto, con entorno agrícola. La zona experimenta veranos calurosos con excelentes condiciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Oakdale?', a: 'Sí. Oakdale tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Oakdale con las tarifas de PG&E?', a: 'Sí. Los residentes de Oakdale pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorros sólidos y respaldo eléctrico, especialmente valioso para zonas rurales y agrícolas.' },
      { q: '¿Cuánto sol recibe Oakdale para la energía solar?', a: 'Oakdale recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 12. La ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'oakhurst': {
    localNote: 'Oakhurst es una comunidad de estribaciones y puerta de entrada sur a Yosemite, a 2,300 pies de elevación. La mayor elevación ofrece una excelente exposición solar, aunque el riesgo de incendios forestales y los eventos de PSPS hacen que el respaldo de batería sea esencial.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Oakhurst?', a: 'Sí. Oakhurst requiere permisos a través de Madera County Building Department, con un tiempo de espera de 2 a 4 semanas. La ubicación en las estribaciones puede requerir normas de diseño contra incendios forestales y revisión estructural para instalaciones en laderas. Su contratista se encarga de los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Oakhurst, cerca de Yosemite?', a: 'Definitivamente. Las tarifas de PG&E son de $0.44/kWh y las zonas de incendio de las estribaciones tienen cortes por PSPS frecuentes. La energía solar con respaldo de batería brinda resiliencia durante cortes de varios días y reduce las altas facturas eléctricas. Oakhurst recibe 5.2 horas de sol pico, excelente para la energía solar de estribaciones.' },
      { q: '¿Cuánto sol recibe Oakhurst para la energía solar?', a: 'Oakhurst recibe en promedio 5.2 horas de sol al día a 2,300 pies de elevación en las estribaciones de la Sierra. Los veranos templados con cielos despejados generan una fuerte producción solar. La ubicación en las estribaciones, por encima de la neblina del valle y con temperaturas más frescas que el piso del valle, mejora la eficiencia de los paneles.' },
    ],
  },
  'oakland': {
    localNote: 'Oakland es una gran ciudad del East Bay con vecindarios diversos que van desde zonas planas junto a la bahía hasta áreas de laderas. La influencia de la capa marina es común, pero la producción solar se mantiene sólida durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Oakland?', a: 'Sí. Oakland tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Oakland con las tarifas de PG&E?', a: 'Sí. Los residentes de Oakland pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y brinda energía de respaldo durante cortes y eventos de PSPS.' },
      { q: '¿Cuánto sol recibe Oakland para la energía solar?', a: 'Oakland recibe en promedio alrededor de 5.0 horas de sol pico al día en la Zona 3. La capa marina puede reducir la producción por la mañana, pero el clima sigue permitiendo una generación solar sólida durante todo el año.' },
    ],
  },
  'oceanside': {
    localNote: 'Oceanside se ubica en la costa del Pacífico, al norte del condado de San Diego, con influencia de la capa marina y un clima costero moderado. A pesar de la niebla matutina, la zona recibe una fuerte producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Oceanside?', a: 'Sí. Oceanside cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Oceanside con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de Oceanside pagan tarifas de SDG&E de alrededor de $0.47/kWh, entre las más altas del país. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional, a pesar de la demanda moderada de enfriamiento propia del clima costero.' },
      { q: '¿Cuánto sol recibe Oceanside para la energía solar?', a: 'Oceanside recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 7. La capa marina afecta la producción por la mañana, pero la generación solar se mantiene fuerte con el sol de la tarde y cielos despejados.' },
    ],
  },
  'ontario': {
    localNote: 'Ontario se encuentra en el sector occidental del Inland Empire, con veranos calurosos y una alta demanda de enfriamiento. La zona presenta una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Ontario?', a: 'Sí. Ontario cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Ontario con las tarifas de SCE?', a: 'Sí. Los residentes de Ontario pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano debido al calor del Inland Empire. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe Ontario para la energía solar?', a: 'Ontario recibe en promedio 6.0 horas de sol pico al día en la Zona 10. Su ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'orange-city': {
    localNote: 'Orange se ubica en el centro de Orange County, cerca de las estribaciones, con clima cálido de interior. La zona experimenta una mínima influencia de la capa marina, con una producción solar sólida y demanda moderada de refrigeración.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Orange?', a: 'Sí. La ciudad de Orange tiene su propio departamento de construcción, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Orange con las tarifas de SCE?', a: 'Sí. Los residentes de Orange pagan tarifas de SCE de alrededor de $0.36/kWh, con demanda moderada de refrigeración. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico durante cortes.' },
      { q: '¿Cuánto sol recibe Orange para la energía solar?', a: 'Orange recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 8. La ubicación en el centro de Orange County, cerca de las estribaciones, ofrece una producción solar sólida, con veranos cálidos.' },
    ],
  },
  'orland': {
    localNote: 'Orland es un pequeño pueblo agrícola en el fondo del valle, con terreno abierto y una excelente exposición solar. Los eventos PSPS en zonas rurales hacen que el respaldo de batería resulte valioso para granjas y viviendas.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Orland?', a: 'Sí. Orland está bajo la jurisdicción de Glenn County Planning & Community Development Services, con un procesamiento de permisos de 2 a 4 semanas. Su contratista solar gestiona la solicitud ante el condado y las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Orland?', a: 'Sin duda. Las tarifas de PG&E de $0.44/kWh y los cortes PSPS en zonas rurales hacen que la energía solar con almacenamiento en batería resulte atractiva. El almacenamiento en batería proporciona respaldo para pozos, sistemas de riego y el hogar durante los cortes de varios días, comunes en las zonas agrícolas.' },
      { q: '¿Cuánta luz solar recibe Orland para la energía solar?', a: 'Orland recibe en promedio 5.3 horas de sol pico al día en la Zona 11. El fondo abierto del valle y el entorno agrícola ofrecen una exposición solar sin obstrucciones, con veranos calurosos y secos.' },
    ],
  },
  'oroville': {
    localNote: 'Oroville se encuentra al pie de las estribaciones de la Sierra, junto al lago Oroville, con un potencial solar propio del piso del valle. Los cortes por PSPS durante la temporada de incendios hacen que el respaldo de batería sea esencial para esta comunidad rural.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Oroville?', a: 'Sí. Oroville depende de Butte County Development Services, con un tiempo de espera del permiso de 2 a 4 semanas. Su contratista gestiona la solicitud y las inspecciones del condado.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Oroville con las tarifas de PG&E?', a: 'Sí. Las tarifas de $0.44/kWh de PG&E y los frecuentes eventos de PSPS hacen que la energía solar con almacenamiento en baterías sea atractiva. El almacenamiento en baterías brinda energía durante los cortes de varios días de la temporada de incendios, comunes en esta zona cercana a las estribaciones.' },
      { q: '¿Cuánto sol recibe Oroville para la energía solar?', a: 'Oroville recibe en promedio 5.3 horas de sol al día en la Zona 11. La ubicación en el piso del valle ofrece una producción solar constante, con veranos calurosos que superan los 100°F e inviernos templados.' },
    ],
  },
  'oxnard': {
    localNote: 'Oxnard se ubica en la costa del Pacífico, con entorno agrícola e influencia de la capa marina. A pesar de la niebla costera, la zona recibe una producción solar sólida, y las tarifas de SCE hacen que la economía solar sea favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Oxnard?', a: 'Sí. Oxnard tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Oxnard con las tarifas de SCE?', a: 'Sí. Los residentes de Oxnard pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo, a pesar de la demanda de enfriamiento moderada propia del clima costero.' },
      { q: '¿Cuánto sol recibe Oxnard para la energía solar?', a: 'Oxnard recibe en promedio alrededor de 5.6 horas de sol pico al día en la Zona 6. La capa marina afecta la producción por la mañana, pero la generación solar se mantiene sólida cuando el sol despeja la niebla por la tarde.' },
    ],
  },
  'palm-springs': {
    localNote: 'Palm Springs se encuentra en el desierto del valle de Coachella, con calor extremo en verano. La zona tiene un potencial solar excepcional, entre los mejores de California, con una demanda de enfriamiento muy alta. Los sistemas solares deben diseñarse para condiciones desérticas extremas.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Palm Springs?', a: 'Sí. Palm Springs tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo y arena. Su contratista se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Palm Springs con las tarifas de SCE?', a: 'Definitivamente. Los residentes de Palm Springs pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano extremos (110°F o más es común). La energía solar residencial con almacenamiento en baterías genera un ahorro excepcional y respaldo de energía fundamental durante las olas de calor del desierto.' },
      { q: '¿Cuánto sol recibe Palm Springs para la energía solar?', a: 'Palm Springs recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. La ubicación en el desierto ofrece una producción solar excepcional, entre las mejores de California, con cielos muy calurosos y despejados durante todo el año.' },
    ],
  },
  'palmdale': {
    localNote: 'Palmdale se ubica en el desierto alto del Valle de Antelope, con un calor extremo en verano. El clima desértico ofrece un potencial solar excepcional, entre los mejores de California, con una demanda de climatización muy alta.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Palmdale?', a: 'Sí. Palmdale cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Palmdale con las tarifas de SCE?', a: 'Sin duda. Los residentes de Palmdale pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de climatización extremos en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro excepcional y energía de respaldo durante las olas de calor del desierto.' },
      { q: '¿Cuánto sol recibe Palmdale para la energía solar?', a: 'Palmdale recibe un promedio de alrededor de 6.5 horas pico de sol al día en la Zona 14. La ubicación en el desierto alto ofrece una producción solar excepcional, con veranos muy calurosos y despejados, y una mínima nubosidad.' },
    ],
  },
  'palo-alto': {
    localNote: 'Palo Alto es una ciudad próspera en la península de San Francisco, cerca de la Universidad de Stanford. La zona experimenta una influencia marina moderada, con fuertes valores ambientales.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Palo Alto?', a: 'Sí. Palo Alto cuenta con su propio departamento de servicios públicos municipales, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Palo Alto con las tarifas de PG&E?', a: 'Sí. Los residentes de Palo Alto pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en batería ofrece ahorros y se alinea con los valores ambientales progresistas de la ciudad, además de proporcionar energía de respaldo durante los cortes de electricidad.' },
      { q: '¿Cuánto sol recibe Palo Alto para la energía solar?', a: 'Palo Alto recibe un promedio de alrededor de 5.1 horas de sol pico al día en las Zonas 3/4. La ubicación en la península presenta influencia de la capa marina, pero la producción solar se mantiene fuerte durante todo el año.' },
    ],
  },
  'paradise': {
    localNote: 'Paradise fue devastada por el incendio Camp Fire de 2018 y muchas reconstrucciones incluyen energía solar con respaldo de batería. El terreno de estribaciones y los cortes por PSPS convierten la resiliencia energética en una prioridad clave de la reconstrucción.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Paradise?', a: 'Sí. Paradise requiere permisos a través de Butte County Development Services, con un tiempo de espera de 2 a 4 semanas. Las reconstrucciones posteriores al Camp Fire suelen integrar energía solar, y el personal del condado tiene experiencia con sistemas resistentes a incendios.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Paradise después del Camp Fire?', a: 'Esencial. Las tarifas de PG&E son de $0.44/kWh y los cortes por PSPS son frecuentes en esta zona de alto riesgo de incendio. La energía solar residencial con respaldo de batería brinda energía fundamental durante evacuaciones y cortes de varios días, una lección aprendida del Camp Fire.' },
      { q: '¿Cuánto sol recibe Paradise para la energía solar?', a: 'Paradise recibe en promedio 5.0 horas de sol al día en la zona de estribaciones. La elevación de alrededor de 1,700 pies y el terreno boscoso pueden generar sombra en los techos, pero la ubicación en la cresta sigue ofreciendo una producción solar sólida durante todo el año.' },
    ],
  },
  'pasadena': {
    localNote: 'Pasadena recibe servicio de Pasadena Water & Power, una empresa municipal con tarifas más bajas que las de SCE. El valor de la energía solar proviene de la energía de respaldo, la independencia energética y la compensación de los altos costos de climatización en esta ciudad de estribaciones.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Pasadena?', a: 'Sí. Pasadena cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Pasadena con las tarifas de PWP?', a: 'Las tarifas de Pasadena Water & Power promedian $0.22/kWh, más bajas que las de SCE. El retorno de la inversión solar es más largo, pero los sistemas solares con baterías proporcionan energía de respaldo durante los cortes, fijan los costos de energía y compensan la alta demanda de climatización propia de esta ubicación en las estribaciones.' },
      { q: '¿Cuánto sol recibe Pasadena para la energía solar?', a: 'Pasadena recibe un promedio de alrededor de 5.7 horas pico de sol al día en la Zona 9/10. La ubicación en las estribaciones ofrece una sólida producción solar, con veranos calurosos y una mínima influencia de la capa marina.' },
    ],
  },
  'paso-robles': {
    localNote: 'Paso Robles se ubica en la calurosa región vitivinícola del interior, con un calor intenso en verano y una influencia costera mínima. Los viñedos y el entorno agrícola de la ciudad presentan un potencial de producción solar muy alto, alineado con la elevada demanda de climatización en verano.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Paso Robles?', a: 'Sí. Paso Robles procesa los permisos solares a través del Departamento de Desarrollo Comunitario de la ciudad, con un plazo típico de 2 a 3 semanas. El proceso de permisos sencillo y el terreno plano del valle facilitan las instalaciones; su instalador se encarga de toda la coordinación.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en la calurosa Paso Robles?', a: 'Sin duda. Paso Robles experimenta veranos muy calurosos que generan altas facturas de aire acondicionado con las tarifas de PG&E de $0.44/kWh. La energía solar residencial con almacenamiento en baterías fija los costos de energía y gestiona las cargas máximas de climatización. Paso recibe un estimado de 5.7 horas pico de sol al día, excelente para la producción solar.' },
      { q: '¿Cuánto sol recibe Paso Robles para la energía solar?', a: 'Paso Robles recibe un promedio estimado de 5.7 horas pico de sol al día, entre los más altos del condado de SLO. El clima caluroso de la región vitivinícola del interior tiene mínima niebla y un sol intenso en verano, lo que genera un rendimiento solar muy sólido durante todo el año, alineado con la alta demanda de aire acondicionado.' },
    ],
  },
  'perris': {
    localNote: 'Perris se encuentra en el Inland Empire, con veranos calurosos y secos. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Perris?', a: 'Sí. Perris tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Perris con las tarifas de SCE?', a: 'Sí. Los residentes de Perris pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano por el calor del Inland Empire. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Perris para la energía solar?', a: 'Perris recibe en promedio alrededor de 6.1 horas de sol pico al día en la Zona 10. La ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y sin capa marina.' },
    ],
  },
  'petaluma': {
    localNote: 'Petaluma se encuentra en un valle entre Santa Rosa y la bahía, con una mezcla de influencias marinas y del interior. La zona presenta temperaturas moderadas y una sólida producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Petaluma?', a: 'Sí. Petaluma cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Petaluma con las tarifas de PG&E?', a: 'Sí. Los residentes de Petaluma pagan tarifas de PG&E de alrededor de $0.44/kWh y enfrentan cortes PSPS durante la temporada de incendios. La energía solar residencial con almacenamiento en batería genera ahorro y proporciona energía de respaldo durante los cortes.' },
      { q: '¿Cuánta luz solar recibe Petaluma para la energía solar?', a: 'Petaluma recibe en promedio 5.0 horas de sol pico al día en la Zona 2. Aunque hay cierta influencia de neblina marina, la producción solar se mantiene sólida durante todo el año.' },
    ],
  },
  'pico-rivera': {
    localNote: 'Pico Rivera se ubica en el Valle de San Gabriel, con un clima cálido del interior y un carácter mixto residencial-industrial. La zona experimenta veranos calurosos con una alta demanda de climatización y un excelente potencial solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Pico Rivera?', a: 'Sí. Pico Rivera cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas para permisos solares residenciales. Su contratista gestiona todos los trámites de permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Pico Rivera con las tarifas de SCE?', a: 'Sí. Los residentes de Pico Rivera pagan tarifas de SCE de alrededor de $0.36/kWh. El clima cálido del interior genera altos costos de climatización en verano, lo que hace que la energía solar con almacenamiento en baterías sea una inversión sólida para el ahorro y el respaldo.' },
      { q: '¿Cuánto sol recibe Pico Rivera para la energía solar?', a: 'Pico Rivera recibe un promedio de alrededor de 5.8 horas pico de sol al día en la Zona 9. La ubicación en el Valle de San Gabriel ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'pismo-beach': {
    localNote: 'Pismo Beach es un pueblo turístico costero sobre el Pacífico, con capa marina matutina y un clima templado durante todo el año. El carácter de pueblo playero de la ciudad y su uso moderado de energía, junto con las altas tarifas de PG&E, hacen que la energía solar con baterías sea una opción popular.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Pismo Beach?', a: 'Sí. Pismo Beach procesa los permisos solares a través del Departamento de Desarrollo Comunitario de la ciudad, con un plazo típico de 3 a 4 semanas. Las propiedades en la zona costera requieren una revisión adicional; su instalador solar se encarga de todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en la costera Pismo Beach?', a: 'Sí. Pismo Beach recibe un estimado de 5.0 horas pico de sol al día, ya que la niebla matutina se disipa hacia la tarde. Las tarifas de PG&E de $0.44/kWh y el clima costero templado, que mantiene el uso de energía moderado, hacen que la energía solar con almacenamiento en baterías sea una inversión inteligente para el ahorro y la resiliencia.' },
      { q: '¿Cuánto sol recibe Pismo Beach para la energía solar?', a: 'Pismo Beach recibe un promedio estimado de 5.0 horas pico de sol al día. La ubicación costera trae capa marina matutina que suele disiparse hacia el mediodía, lo que permite una sólida producción solar por la tarde. Los techos orientados al sur captan un excelente sol durante todo el año para un buen rendimiento solar.' },
    ],
  },
  'pittsburg': {
    localNote: 'Pittsburg es una ciudad del delta al este del puente Carquinez, con veranos calurosos. La zona tiene alta demanda de enfriamiento y excelentes condiciones para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Pittsburg?', a: 'Sí. Pittsburg tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Pittsburg con las tarifas de PG&E?', a: 'Sí. Los residentes de Pittsburg pagan tarifas de PG&E de alrededor de $0.44/kWh, con una alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Pittsburg para la energía solar?', a: 'Pittsburg recibe en promedio alrededor de 5.3 horas de sol pico al día en las Zonas 4/12. La ubicación en el delta ofrece una excelente producción solar, con veranos calurosos y poca capa marina.' },
    ],
  },
  'placerville': {
    localNote: 'Placerville es la sede del condado, ubicada en las estribaciones más altas a lo largo de la autopista 50. La zona experimenta inviernos más fríos y nieve ocasional, lo que requiere consideraciones de carga de nieve para las instalaciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Placerville?', a: 'Sí. Placerville está bajo la jurisdicción del Departamento de Planificación y Construcción del Condado de El Dorado. El plazo típico es de 2 a 3 semanas. Los sitios de mayor elevación pueden requerir una revisión estructural adicional por carga de nieve.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Placerville con las tarifas de PG&E?', a: 'Sí. Los residentes de Placerville pagan tarifas de PG&E de alrededor de $0.44/kWh y enfrentan cortes por PSPS durante la temporada de incendios. La energía solar residencial con almacenamiento en baterías ofrece tanto ahorro como respaldo eléctrico durante tormentas invernales y cortes en verano.' },
      { q: '¿Cuánto sol recibe Placerville para la energía solar?', a: 'Placerville recibe un promedio de alrededor de 5.0 horas de sol pico al día. La mayor elevación y el terreno de estribaciones hacen que la producción solar varíe según el sitio. El desprendimiento de nieve y la sombra del terreno deben evaluarse durante el diseño del sistema.' },
    ],
  },
  'pleasanton': {
    localNote: 'Pleasanton es una ciudad próspera del Tri-Valley con casas grandes y un alto consumo de energía. La ubicación en el valle interior ofrece excelentes condiciones para la energía solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Pleasanton?', a: 'Sí. Pleasanton tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Pleasanton con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Pleasanton pagan tarifas de PG&E de alrededor de $0.44/kWh con facturas superiores al promedio. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante las olas de calor del verano.' },
      { q: '¿Cuánto sol recibe Pleasanton para la energía solar?', a: 'Pleasanton recibe en promedio aproximadamente 5.3 horas de sol pico al día en la Zona 4. La ubicación en el valle interior ofrece una excelente producción solar con veranos calurosos y poca capa marina.' },
    ],
  },
  'plymouth': {
    localNote: 'Plymouth es un pequeño pueblo de estribaciones en el corazón de la región vinícola de Amador. Las fincas vinícolas y las propiedades residenciales se benefician de una excelente exposición solar de estribaciones y una elevación alta sobre el piso del valle.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Plymouth?', a: 'Sí. Plymouth requiere permisos a través de Amador County Building Department, con un procesamiento típico de 3 a 4 semanas. Las propiedades vinícolas pueden integrar energía solar para salas de degustación u operaciones agrícolas. Su instalador se encarga de todas las solicitudes de permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en la región vinícola de Plymouth?', a: 'Sí. PG&E cobra $0.44/kWh y el riesgo de incendios forestales genera cortes por PSPS durante la temporada de incendios. La energía solar con respaldo de batería brinda resiliencia para viviendas y viñedos durante los cortes. Plymouth recibe 5.1 horas de sol pico, sólido para la producción solar de estribaciones.' },
      { q: '¿Cuánto sol recibe Plymouth para la energía solar?', a: 'Plymouth recibe en promedio 5.1 horas de sol al día en las estribaciones de la Sierra. La ubicación en la región vinícola trae veranos calurosos con cielos despejados, ideales para la energía solar. La elevación de las estribaciones, por encima de la neblina del valle, asegura una exposición solar constante desde la primavera hasta el otoño.' },
    ],
  },
  'point-arena': {
    localNote: 'Point Arena se encuentra en la remota costa sur de Mendocino, con niebla marina persistente. La energía solar funciona durante todo el año con un dimensionamiento adecuado, y el respaldo de batería ofrece resiliencia ante tormentas para esta comunidad aislada.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Point Arena?', a: 'Sí. Point Arena requiere permisos a través de Mendocino County Planning & Building, con un procesamiento de 2 a 4 semanas. La exposición costera requiere equipo de grado marino. Su instalador solar se encarga de la solicitud ante el condado.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Point Arena con la niebla?', a: 'Sí. PG&E cobra $0.44/kWh y las tormentas invernales provocan cortes de electricidad en este remoto pueblo costero. La energía solar con respaldo de batería proporciona independencia energética a pesar de las 4.6 horas de sol pico debido a la niebla marina. Los sistemas de mayor tamaño funcionan bien.' },
      { q: '¿Cuánta luz solar recibe Point Arena para la energía solar?', a: 'Point Arena recibe en promedio 4.6 horas de sol pico al día en la Zona 1. Su ubicación en la costa sur recibe un poco más de sol que el extremo norte de la costa. El clima marino requiere paneles y estructuras de montaje resistentes a la corrosión.' },
    ],
  },
  'pomona': {
    localNote: 'Pomona se ubica en el este del Valle de San Gabriel, con veranos calurosos y un clima del interior. La zona experimenta una alta demanda de climatización con excelentes condiciones para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Pomona?', a: 'Sí. Pomona cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Pomona con las tarifas de SCE?', a: 'Sí. Los residentes de Pomona pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de climatización en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Pomona para la energía solar?', a: 'Pomona recibe un promedio de alrededor de 5.9 horas pico de sol al día en la Zona 10. La ubicación en el valle del interior ofrece una excelente producción solar, con veranos calurosos y una mínima capa marina.' },
    ],
  },
  'porterville': {
    localNote: 'Porterville se ubica en el extremo este del Valle de San Joaquín, cerca de las estribaciones de Sierra Nevada, con veranos muy calurosos y altas cargas de refrigeración. La posición de la ciudad entre el valle y las estribaciones ofrece un potencial solar excepcional.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Porterville?', a: 'Sí. Porterville procesa los permisos solares a través del Departamento de Servicios de Desarrollo de la ciudad, con un plazo típico de 2 a 3 semanas. Las instalaciones estándar en techo son sencillas; su instalador solar se encarga de todos los permisos y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Porterville?', a: 'Sin duda. Porterville experimenta veranos muy calurosos que generan facturas de aire acondicionado extremadamente altas con las tarifas de SCE de $0.40/kWh. La energía solar residencial con almacenamiento en baterías fija los costos de energía y maneja las cargas intensas de refrigeración. Porterville recibe un estimado de 5.7 horas de sol pico al día, algo excepcional para la producción solar.' },
      { q: '¿Cuánto sol recibe Porterville para la energía solar?', a: 'Porterville recibe un promedio estimado de 5.7 horas de sol pico al día. La ubicación en el este del valle, cerca de las estribaciones, con mínima neblina y veranos muy calurosos, ofrece un rendimiento solar excepcional durante todo el año, con una producción intensa en verano alineada con la demanda de aire acondicionado.' },
    ],
  },
  'portola': {
    localNote: 'Portola se ubica a 4,800 pies de elevación en la alta Sierra, con intensa nieve invernal. El diseño para carga de nieve es fundamental, y el respaldo con baterías aporta resiliencia durante tormentas de invierno y eventos de PSPS.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Portola?', a: 'Sí. Portola requiere permisos a través del Departamento de Construcción del Condado de Plumas, con un procesamiento de 2 a 4 semanas. Es obligatorio calcular la carga de nieve por la gran elevación. Tu contratista solar se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Portola con la intensa nieve?', a: 'Sí. Las tarifas de PG&E promedian $0.44/kWh y las tormentas de invierno provocan cortes de varios días. La energía solar residencial con respaldo de baterías ofrece energía durante tormentas y eventos de PSPS. Los paneles certificados para nieve resisten las intensas cargas de la Sierra y siguen produciendo durante todo el año.' },
      { q: '¿Cuánto sol recibe Portola para la energía solar?', a: 'Portola recibe en promedio 4.7 horas de sol pico al día, a 4,800 pies de elevación, en la Zona 1. La intensa nieve invernal y la gran elevación reducen las horas de sol, pero los cielos despejados de la Sierra y la altitud aportan una producción solar sólida de primavera a otoño.' },
    ],
  },
  'poway': {
    localNote: 'Poway se ubica en un valle del interior al norte de San Diego, con veranos calurosos y poca influencia de la capa marina. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Poway?', a: 'Sí. Poway cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Poway con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de Poway pagan tarifas de SDG&E de alrededor de $0.47/kWh, con altos costos de enfriamiento en verano debido al calor del interior. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Poway para la energía solar?', a: 'Poway recibe un promedio de alrededor de 6.0 horas de sol pico al día en la Zona 10. La ubicación en el valle del interior ofrece una excelente producción solar, con veranos calurosos y sin capa marina.' },
    ],
  },
  'quincy': {
    localNote: 'Quincy es la sede del condado, a 3,400 pies de elevación en un valle boscoso de la Sierra. El incendio Dixie Fire de 2021 amenazó al pueblo, lo que convirtió la resiliencia ante incendios y el respaldo eléctrico durante los PSPS en prioridades fundamentales.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Quincy?', a: 'Sí. Quincy requiere permisos a través del Departamento de Construcción del Condado de Plumas, con un plazo típico de 2 a 4 semanas. Se requieren cálculos de carga de nieve para las instalaciones en la Sierra. Tu instalador se encarga de la solicitud ante el condado.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Quincy después del Dixie Fire?', a: 'Fundamental. Las tarifas de PG&E son de $0.44/kWh y los cortes por PSPS son frecuentes en esta zona boscosa de alto riesgo de incendios. La energía solar residencial con respaldo de baterías ofrece energía durante eventos de PSPS de varios días y tormentas de invierno. El Dixie Fire demostró la necesidad crítica de resiliencia energética.' },
      { q: '¿Cuánto sol recibe Quincy para la energía solar?', a: 'Quincy recibe en promedio 4.8 horas de sol pico al día, a 3,400 pies de elevación, en la Zona 1. El terreno boscoso del valle puede generar sombra, pero los sitios orientados al sur ofrecen una producción solar sólida durante todo el año. El aire despejado de la Sierra aporta una intensidad solar considerable.' },
    ],
  },
  'rancho-cordova': {
    localNote: 'Rancho Cordova se ubica al este de Sacramento, a lo largo de la autopista 50, con una mezcla de zonas residenciales y comerciales. La ciudad experimenta veranos calurosos con una demanda de enfriamiento máxima.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Rancho Cordova?', a: 'Sí. Rancho Cordova sigue los procedimientos de permisos del condado de Sacramento, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Rancho Cordova con las tarifas de SMUD?', a: 'Las tarifas de SMUD promedian $0.18/kWh, más bajas que las de PG&E. La energía solar residencial más almacenamiento en batería ofrece un retorno de inversión más lento, pero brinda respaldo y te protege ante futuros aumentos de tarifas, algo especialmente valioso en los meses calurosos de verano.' },
      { q: '¿Cuánto sol recibe Rancho Cordova para la energía solar?', a: 'Rancho Cordova disfruta de aproximadamente 5.2 horas de sol pico al día en la Zona 12. La ubicación en el valle y la escasa niebla ofrecen una producción solar constante durante todo el año.' },
    ],
  },
  'rancho-cucamonga': {
    localNote: 'Rancho Cucamonga se encuentra al pie de las montañas de San Gabriel, en el sector occidental del Inland Empire. La zona presenta veranos calurosos con alta demanda de enfriamiento, y su ubicación en las estribaciones ofrece excelentes condiciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Rancho Cucamonga?', a: 'Sí. Rancho Cucamonga cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Rancho Cucamonga con las tarifas de SCE?', a: 'Sí. Los residentes de Rancho Cucamonga pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante las olas de calor del Inland Empire.' },
      { q: '¿Cuánta luz solar recibe Rancho Cucamonga para la energía solar?', a: 'Rancho Cucamonga recibe en promedio 6.0 horas de sol pico al día en la Zona 10. Su ubicación en las estribaciones del Inland Empire ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'rancho-mirage': {
    localNote: 'Rancho Mirage se encuentra en el valle de Coachella, con carácter de resort de lujo y un clima desértico extremo. La zona experimenta una demanda de enfriamiento muy alta y una producción solar excepcional durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Rancho Mirage?', a: 'Sí. Rancho Mirage tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas para permisos solares residenciales. Su contratista gestiona todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Rancho Mirage con las tarifas de SCE?', a: 'Definitivamente. Los residentes de Rancho Mirage pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de aire acondicionado en verano extremos por el calor del desierto. La energía solar residencial con almacenamiento en baterías ofrece un ahorro excepcional y respaldo de energía.' },
      { q: '¿Cuánto sol recibe Rancho Mirage para la energía solar?', a: 'Rancho Mirage recibe en promedio alrededor de 6.5 horas de sol pico al día en la Zona 15. El clima desértico ofrece una producción solar excepcional, con cielos despejados durante todo el año y un sol intenso.' },
    ],
  },
  'red-bluff': {
    localNote: 'Red Bluff es la ciudad más grande del condado de Tehama, ubicada sobre el río Sacramento, con calurosos veranos de valle. El terreno plano y los cielos despejados ofrecen una excelente producción solar durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Red Bluff?', a: 'Sí. Red Bluff requiere permisos de construcción a través de Tehama County Planning & Building, con un plazo típico de 2 a 4 semanas. Tu instalador solar se encarga de la solicitud ante el condado y de las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Red Bluff?', a: 'Sí. Las tarifas de PG&E promedian $0.44/kWh, y el calor de verano genera altos costos de aire acondicionado. La energía solar residencial con almacenamiento en batería ofrece independencia energética y respaldo durante los cortes por PSPS, comunes en los condados rurales del norte.' },
      { q: '¿Cuánto sol recibe Red Bluff para la energía solar?', a: 'Red Bluff recibe un promedio de 5.3 horas de sol pico al día en la Zona 11. La ubicación en el fondo del valle ofrece una fuerte producción solar, con veranos que superan los 100 °F y poca nubosidad en invierno.' },
    ],
  },
  'redding': {
    localNote: 'Redding es una de las ciudades más calurosas de California, con temperaturas de verano que suelen superar los 110 °F (43 °C). Las cargas de aire acondicionado son extremas de junio a septiembre, lo que hace que el ahorro solar sea considerable.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Redding?', a: 'Sí. La Building Division de la ciudad de Redding gestiona los permisos solares, con un tiempo de espera habitual de 2 a 4 semanas. Su instalador se encarga de la solicitud y de las inspecciones municipales.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Redding con el calor extremo?', a: 'Sin duda. Las tarifas de PG&E promedian $0.44/kWh y los costos de aire acondicionado son brutales, con máximas de verano que superan los 110 °F. La energía solar residencial con respaldo de batería permite fijar los costos de energía y proporciona enfriamiento durante los cortes PSPS, justo cuando el calor resulta más peligroso.' },
      { q: '¿Cuánta luz solar recibe Redding para la energía solar?', a: 'Redding recibe en promedio 5.4 horas de sol pico al día en la Zona 11. Su ubicación en el valle del norte ofrece una producción solar excepcional, con un sol intenso en verano y muy poca niebla en invierno.' },
    ],
  },
  'redlands': {
    localNote: 'Redlands se encuentra al pie de las montañas de San Bernardino, con veranos calurosos y una alta demanda de enfriamiento. Su ubicación en las estribaciones ofrece excelentes condiciones solares, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Redlands?', a: 'Sí. Redlands cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Redlands con las tarifas de SCE?', a: 'Sí. Los residentes de Redlands pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante las olas de calor del Inland Empire.' },
      { q: '¿Cuánta luz solar recibe Redlands para la energía solar?', a: 'Redlands recibe en promedio 6.1 horas de sol pico al día en la Zona 10. Su ubicación en las estribaciones ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
  'redondo-beach': {
    localNote: 'Redondo Beach se ubica directamente en la costa del Pacífico, con un clima clásico de capa marina y temperaturas moderadas. A pesar de la niebla costera, la zona recibe una sólida producción solar y cuenta con altos valores inmobiliarios que hacen de la energía solar una inversión atractiva.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Redondo Beach?', a: 'Sí. Redondo Beach cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas para energía solar residencial. Su contratista se encarga de todas las solicitudes de permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Redondo Beach con las tarifas de SCE?', a: 'Sí. Los residentes de Redondo Beach pagan tarifas de SCE de alrededor de $0.36/kWh. Incluso con una menor demanda de climatización propia del clima costero, la energía solar con almacenamiento en baterías ofrece un ahorro sólido, energía de respaldo y aumenta el valor de la vivienda en este exclusivo mercado costero.' },
      { q: '¿Cuánto sol recibe Redondo Beach para la energía solar?', a: 'Redondo Beach recibe un promedio de alrededor de 5.6 horas pico de sol al día en la Zona 6/7. La capa marina afecta la producción por la mañana, pero el clima costero aún respalda una excelente generación solar durante todo el año, con temperaturas templadas.' },
    ],
  },
  'redwood-city': {
    localNote: 'Redwood City se ubica en la Península, junto a la bahía, sobre la autopista 101. La zona experimenta menos capa marina que las ubicaciones costeras, con una sólida producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Redwood City?', a: 'Sí. Redwood City cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Redwood City con las tarifas de PG&E?', a: 'Sí. Los residentes de Redwood City pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorro y energía de respaldo, con mejores condiciones solares que las zonas costeras de la Península.' },
      { q: '¿Cuánto sol recibe Redwood City para la energía solar?', a: 'Redwood City recibe un promedio de alrededor de 5.1 horas pico de sol al día en la Zona 3. La ubicación del interior, junto a la bahía, experimenta menos capa marina que las zonas costeras, lo que ofrece una producción solar confiable durante todo el año.' },
    ],
  },
  'reedley': {
    localNote: 'Reedley es una pequeña ciudad agrícola en el valle de San Joaquín. La zona experimenta veranos calurosos con excelentes condiciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Reedley?', a: 'Sí. Reedley cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Reedley con las tarifas de PG&E?', a: 'Sí. Los residentes de Reedley pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo, especialmente valiosa para propiedades agrícolas y rurales.' },
      { q: '¿Cuánto sol recibe Reedley para la energía solar?', a: 'Reedley recibe un promedio de alrededor de 5.9 horas de sol pico al día en la Zona 13. La ubicación en el valle ofrece una excelente producción solar, con veranos calurosos y un fuerte rendimiento durante todo el año.' },
    ],
  },
  'rialto': {
    localNote: 'Rialto se encuentra en el Inland Empire, con veranos calurosos y una alta demanda de enfriamiento. La zona presenta una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Rialto?', a: 'Sí. Rialto cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Rialto con las tarifas de SCE?', a: 'Sí. Los residentes de Rialto pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano debido al calor del Inland Empire. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe Rialto para la energía solar?', a: 'Rialto recibe en promedio 6.0 horas de sol pico al día en la Zona 10. Su ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y sin influencia de neblina marina.' },
    ],
  },
  'richmond': {
    localNote: 'Richmond se ubica en la costa de la bahía de San Francisco, con un paisaje diverso entre zonas industriales y residenciales. La influencia de la capa marina es común, pero la producción solar se mantiene sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Richmond?', a: 'Sí. Richmond tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Richmond con las tarifas de PG&E?', a: 'Sí. Los residentes de Richmond pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorro y energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Richmond para la energía solar?', a: 'Richmond recibe en promedio alrededor de 5.0 horas de sol pico al día en la Zona 3. La capa marina puede afectar la producción por la mañana, pero el clima permite una generación solar sólida durante todo el año.' },
    ],
  },
  'ridgecrest': {
    localNote: 'Ridgecrest se ubica en el Desierto de Mojave, con calor extremo en verano y un potencial solar excepcional. La zona experimenta demanda de refrigeración muy alta, y las condiciones desérticas ofrecen una de las mejores producciones solares de California.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Ridgecrest?', a: 'Sí. Ridgecrest tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Las instalaciones en el desierto requieren sistemas diseñados para calor extremo y variaciones de temperatura. Su instalador se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Ridgecrest con las tarifas de SCE?', a: 'Sin duda. Los residentes de Ridgecrest pagan tarifas de SCE de alrededor de $0.36/kWh, con costos extremos de refrigeración por el calor del desierto. La energía solar residencial con almacenamiento en baterías genera ahorros excepcionales y un respaldo eléctrico crítico durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Ridgecrest para la energía solar?', a: 'Ridgecrest recibe un promedio de alrededor de 6.5 horas de sol pico al día en la Zona 14. La ubicación en el Desierto de Mojave ofrece una producción solar excepcional, con veranos muy calurosos y despejados, y mínima nubosidad durante todo el año.' },
    ],
  },
  'riverbank': {
    localNote: 'Riverbank es una pequeña ciudad del Valle Central junto al río Stanislaus. La zona experimenta veranos calurosos con alta demanda de refrigeración.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Riverbank?', a: 'Sí. Riverbank tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Riverbank con las tarifas de PG&E?', a: 'Sí. Los residentes de Riverbank pagan tarifas de PG&E de alrededor de $0.44/kWh, con altos costos de refrigeración en verano. La energía solar residencial con almacenamiento en baterías ofrece ahorros y respaldo eléctrico.' },
      { q: '¿Cuánto sol recibe Riverbank para la energía solar?', a: 'Riverbank recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 12. La ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y sin capa marina.' },
    ],
  },
  'riverside': {
    localNote: 'Riverside recibe servicio de Riverside Public Utilities, una empresa municipal con tarifas más bajas que las de SCE. La ciudad experimenta veranos calurosos propios del Inland Empire. El valor de la energía solar proviene del respaldo de energía, la independencia energética y la compensación de los altos costos de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Riverside?', a: 'Sí. Riverside tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Riverside con las tarifas de RPU?', a: 'Las tarifas de Riverside Public Utilities promedian $0.20/kWh, más bajas que las de SCE. El retorno de la inversión solar es más lento, pero los sistemas de solar más batería brindan respaldo de energía durante cortes, fijan los costos de energía y compensan la altísima demanda de enfriamiento en verano provocada por el calor del Inland Empire.' },
      { q: '¿Cuánto sol recibe Riverside para la energía solar?', a: 'Riverside recibe en promedio alrededor de 6.0 horas de sol pico al día en la Zona 10. La ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y despejados y una exposición solar muy alta.' },
    ],
  },
  'rocklin': {
    localNote: 'Rocklin es un suburbio en crecimiento en el oeste del condado de Placer, con urbanizaciones modernas y amplio espacio en los techos. Su ubicación en el piso del valle asegura un fuerte potencial solar con una sombra mínima por el terreno.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Rocklin?', a: 'Sí. Rocklin está bajo la jurisdicción de Placer County CDRA. El tiempo de espera del permiso suele ser de 2 a 4 semanas, o el mismo día mediante SolarAPP+ para sistemas que califiquen. Su contratista gestiona el proceso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Rocklin con las tarifas de PG&E?', a: 'Sí. Con tarifas de PG&E de alrededor de $0.44/kWh, los propietarios de Rocklin pueden ahorrar de forma considerable al cambiarse a energía solar con almacenamiento en baterías, especialmente durante los meses de máxima demanda de enfriamiento en verano.' },
      { q: '¿Cuánto sol recibe Rocklin para la energía solar?', a: 'Rocklin recibe en promedio alrededor de 5.2 horas de sol pico al día, lo que la convierte en una excelente ubicación para la producción solar. El clima cálido de interior (Zona 11) impulsa una alta demanda de energía que la energía solar puede compensar de forma eficaz.' },
    ],
  },
  'rohnert-park': {
    localNote: 'Rohnert Park es una comunidad planificada ubicada entre Petaluma y Santa Rosa. La zona presenta una influencia marina moderada y un sólido potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Rohnert Park?', a: 'Sí. Rohnert Park cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Rohnert Park con las tarifas de PG&E?', a: 'Sí. Los residentes de Rohnert Park pagan tarifas de PG&E de alrededor de $0.44/kWh y enfrentan cortes PSPS. La energía solar residencial con almacenamiento en batería ofrece ahorro y energía de respaldo durante los cortes.' },
      { q: '¿Cuánta luz solar recibe Rohnert Park para la energía solar?', a: 'Rohnert Park recibe en promedio 5.1 horas de sol pico al día en la Zona 2. Aunque el lugar presenta cierta influencia de neblina marina, mantiene una producción solar sólida durante todo el año.' },
    ],
  },
  'roseville': {
    localNote: 'Roseville se encuentra en el Valle Central, con techos planos y despejados, ideales para la instalación de paneles solares. La ciudad experimenta veranos calurosos con una demanda máxima de enfriamiento de junio a septiembre.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Roseville?', a: 'Sí. Roseville está bajo la jurisdicción de Placer County CDRA. El tiempo de espera típico es de 2 a 4 semanas, aunque SolarAPP+ puede agilizar la aprobación hasta el mismo día para sistemas que califiquen. Su instalador se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Roseville con las tarifas de PG&E?', a: 'Definitivamente. Las tarifas residenciales de PG&E en Roseville promedian alrededor de $0.44/kWh, entre las más altas de California. La energía solar residencial con almacenamiento en baterías le permite fijar sus costos de energía y evitar futuros aumentos de tarifa.' },
      { q: '¿Cuánto sol recibe Roseville para la energía solar?', a: 'Roseville recibe en promedio un estimado de 5.2 horas de sol pico al día. El terreno plano del valle y la neblina mínima generan una producción solar constante durante todo el año, especialmente sólida en los meses de verano.' },
    ],
  },
  'sacramento': {
    localNote: 'Sacramento, la capital del estado, se ubica en el valle central con una exposición al sol constante. Las tarifas de SMUD son más bajas que las de PG&E, pero la energía solar sigue ofreciendo valor como respaldo y protección ante futuros aumentos de tarifas.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Sacramento?', a: 'Sí. La ciudad de Sacramento utiliza SolarAPP+ para los sistemas residenciales elegibles instalados en techo, lo que permite una aprobación automatizada en el mismo día. Tu instalador presenta la solicitud y se encarga del proceso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Sacramento con las tarifas de SMUD?', a: 'Las tarifas de SMUD promedian alrededor de $0.18/kWh, mucho más bajas que las de PG&E. El retorno de inversión solar es más lento, pero los sistemas de energía solar más batería ofrecen respaldo durante cortes de electricidad y protegen tus costos energéticos ante futuros aumentos de tarifas.' },
      { q: '¿Cuánto sol recibe Sacramento para la energía solar?', a: 'Sacramento recibe un promedio de 5.2 horas de sol pico al día en la Zona climática 12. La ubicación en el fondo del valle y los veranos calurosos generan una fuerte producción solar durante todo el año.' },
    ],
  },
  'salinas': {
    localNote: 'Salinas es la sede del condado y la capital agrícola del valle de Salinas, con veranos calurosos del interior, poca niebla y un fuerte potencial solar. El terreno plano de la ciudad y la alta demanda de enfriamiento hacen que la energía solar sea una solución energética ideal.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Salinas?', a: 'Sí. Salinas cuenta con su propio departamento de construcción que procesa los permisos solares de forma independiente al condado. El plazo típico es de 2 a 3 semanas para sistemas de techo estándar. Tu instalador solar se encarga de todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Salinas con las tarifas de PG&E?', a: 'Sin duda. PG&E cobra $0.44/kWh en Salinas, y el clima caluroso del valle genera altas facturas de aire acondicionado en verano. La energía solar residencial con almacenamiento en batería fija tus costos energéticos y ofrece resiliencia durante los cortes de red. Salinas recibe un estimado de 5.4 horas de sol pico al día, excelente para la producción solar.' },
      { q: '¿Cuánto sol recibe Salinas para la energía solar?', a: 'Salinas recibe un estimado de 5.4 horas de sol pico al día, muy por encima de la zona de niebla costera. El interior del valle de Salinas tiene una influencia mínima de la capa marina, lo que ofrece una producción solar constante durante todo el año, con un fuerte rendimiento máximo en verano alineado con la demanda de aire acondicionado.' },
    ],
  },
  'san-andreas': {
    localNote: 'San Andreas es la sede del condado, ubicada en las estribaciones a 1,000 pies de elevación. Las oficinas gubernamentales y las zonas residenciales se benefician de la exposición solar de las estribaciones, aunque el riesgo de incendios forestales genera eventos de PSPS frecuentes.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San Andreas?', a: 'Sí. San Andreas requiere permisos a través del Departamento de Planificación del condado de Calaveras, con un procesamiento de 3 a 5 semanas. La ubicación de la sede del condado puede agilizar la coordinación con los funcionarios de construcción. Su instalador se encarga de las solicitudes de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en San Andreas con el riesgo de incendios forestales?', a: 'Sí. PG&E cobra $0.44/kWh y las zonas de riesgo de incendio en las estribaciones sufren cortes de PSPS regulares. La energía solar con respaldo de batería aporta resiliencia durante los cortes y reduce las altas facturas de electricidad. San Andreas recibe 5.0 horas pico de sol, sólido para la energía solar en estribaciones.' },
      { q: '¿Cuánto sol recibe San Andreas para la energía solar?', a: 'San Andreas recibe un promedio de 5.0 horas pico de sol al día en las estribaciones inferiores de la Sierra. Los veranos cálidos con cielos despejados generan una producción solar confiable. La ubicación en las estribaciones, por encima de la niebla del valle, asegura una exposición solar constante durante todo el año.' },
    ],
  },
  'san-anselmo': {
    localNote: 'San Anselmo es un pequeño pueblo en el valle de Ross, con calles arboladas. La zona experimenta una influencia marina moderada con una producción solar confiable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San Anselmo?', a: 'Sí. San Anselmo tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en San Anselmo con las tarifas de PG&E?', a: 'Sí. Los residentes de San Anselmo pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorro y respaldo de energía, aunque la sombra de los árboles debe evaluarse con cuidado.' },
      { q: '¿Cuánto sol recibe San Anselmo para la energía solar?', a: 'San Anselmo recibe en promedio alrededor de 4.9 horas de sol pico al día en la Zona 3. La ubicación en el valle de Ross experimenta capa marina y árboles maduros, por lo que una evaluación específica del sitio es importante.' },
    ],
  },
  'san-bernardino': {
    localNote: 'San Bernardino se encuentra en el Inland Empire, con veranos calurosos y secos y una alta demanda de enfriamiento. La zona presenta una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en San Bernardino?', a: 'Sí. San Bernardino cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en San Bernardino con las tarifas de SCE?', a: 'Sin duda. Los residentes de San Bernardino pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano muy elevados debido al calor del Inland Empire. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo esencial durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe San Bernardino para la energía solar?', a: 'San Bernardino recibe en promedio 6.1 horas de sol pico al día en la Zona 10. Su ubicación en el Inland Empire ofrece una excelente producción solar, con veranos calurosos y despejados y una exposición solar muy alta.' },
    ],
  },
  'san-clemente': {
    localNote: 'San Clemente se ubica en la costa del Pacífico, en el extremo sur de Orange County, con un clima costero clásico y arquitectura colonial española. A pesar de la capa marina, la zona recibe una excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en San Clemente?', a: 'Sí. San Clemente tiene su propio departamento de construcción municipal. Los permisos solares residenciales suelen tardar de 2 a 3 semanas en procesarse. Su instalador gestiona todo el papeleo de permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en San Clemente con las tarifas de SCE?', a: 'Sí. Los residentes de San Clemente pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorros sólidos, respaldo eléctrico y aumenta el valor de la vivienda en este mercado costero premium.' },
      { q: '¿Cuánto sol recibe San Clemente para la energía solar?', a: 'San Clemente recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 6/7. La capa marina afecta las mañanas, pero el clima costero permite una generación solar sólida con temperaturas templadas durante todo el año.' },
    ],
  },
  'san-diego': {
    localNote: 'San Diego se extiende desde la costa del Pacífico hasta barrios del interior, con microclimas variados. Las zonas costeras experimentan la capa marina, pero la ciudad recibe una excelente producción solar. Las tarifas de SDG&E están entre las más altas del país, lo que hace que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San Diego?', a: 'Sí. La ciudad de San Diego cuenta con su propio Departamento de Servicios de Desarrollo, con un plazo típico de 2 a 4 semanas. Muchos sistemas residenciales califican para la aprobación en el mismo día a través de SolarAPP+. Tu instalador se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en San Diego con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de San Diego pagan tarifas de SDG&E de alrededor de $0.47/kWh, entre las más altas del país. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y energía de respaldo, con algunos de los períodos de retorno de inversión más rápidos de California.' },
      { q: '¿Cuánto sol recibe San Diego para la energía solar?', a: 'San Diego recibe un promedio de alrededor de 5.9 horas de sol pico al día en las Zonas 7/10. Los barrios costeros experimentan capa marina por la mañana, pero las zonas del interior reciben una producción solar excepcional, con tardes cálidas y despejadas durante todo el año.' },
    ],
  },
  'san-francisco': {
    localNote: 'San Francisco es una ciudad urbana y densa, con un clima costero neblinoso y microclimas variados. Los vecindarios del oeste, más nebulosos y cercanos al océano, reciben menos sol, mientras que las zonas del interior, como Mission, Noe Valley y Potrero Hill, registran una producción solar más fuerte. Las altas tarifas de PG&E y los valores ambientales hacen que la energía solar sea viable en las propiedades adecuadas.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en San Francisco?', a: 'Sí. San Francisco requiere permisos a través del Department of Building Inspection, con un tiempo de espera habitual de 3 a 5 semanas. SolarAPP+ puede agilizar la aprobación de los sistemas que califican. Los edificios multifamiliares pueden requerir la aprobación de la HOA. Su instalador solar se encarga de todos los permisos y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en la nebulosa San Francisco?', a: 'Depende de la ubicación y la orientación del techo. Los vecindarios más nebulosos del oeste registran una menor producción, pero las zonas más soleadas, como Mission y Noe Valley, reciben un estimado de 4.9 horas de sol pico al día. Las tarifas de PG&E de $0.44/kWh hacen que la energía solar sea financieramente viable en techos orientados al sur dentro de microclimas más soleados. Una evaluación del sitio determina la viabilidad.' },
      { q: '¿Cuánta luz solar recibe San Francisco para la energía solar?', a: 'San Francisco recibe un estimado de 4.9 horas de sol pico al día en toda la ciudad, con una variación significativa según el vecindario. Las zonas del oeste, cercanas al océano, son más nebulosas; los vecindarios del este y del sur, como Mission, Potrero y Noe Valley, reciben más sol. Los techos orientados al sur en las zonas más soleadas logran una producción solar viable a pesar de la niebla.' },
    ],
  },
  'san-jose': {
    localNote: 'San José es la ciudad más grande del Área de la Bahía y se extiende por el sur del valle de Santa Clara. La zona experimenta veranos calurosos con excelentes condiciones para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San José?', a: 'Sí. San José cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en San José con las tarifas de PG&E?', a: 'Sí. Los residentes de San José pagan tarifas de PG&E de alrededor de $0.44/kWh, con una alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo durante olas de calor y cortes de electricidad.' },
      { q: '¿Cuánto sol recibe San José para la energía solar?', a: 'San José recibe un promedio de aproximadamente 5.3 horas de sol pico al día en la Zona 4. La ubicación en el fondo del valle ofrece una excelente producción solar durante todo el año, con una interferencia mínima de la capa marina.' },
    ],
  },
  'san-juan-bautista': {
    localNote: 'San Juan Bautista es un histórico pueblo de misión en el Valle de San Juan, con clima templado del interior y terreno de colinas onduladas. El entorno agrícola de la ciudad y las temperaturas moderadas generan un buen potencial solar con producción durante todo el año.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San Juan Bautista?', a: 'Sí. San Juan Bautista tramita los permisos solares a través del Departamento de Construcción del Condado de San Benito, con un plazo típico de 2 a 4 semanas. Las propiedades históricas pueden requerir una revisión adicional; tu instalador solar se encarga de todos los permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en San Juan Bautista?', a: 'Sí. San Juan Bautista recibe un estimado de 5.3 horas de sol pico al día con muy poca niebla. Las tarifas de PG&E de $0.44/kWh hacen que la energía solar con almacenamiento en baterías sea una decisión financiera inteligente, que fija los costos de energía y aporta energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe San Juan Bautista para la energía solar?', a: 'San Juan Bautista recibe en promedio un estimado de 5.3 horas de sol pico al día. La ubicación en el valle interior tiene muy poca influencia de la capa marina, lo que genera una producción solar constante durante todo el año, con buen rendimiento en verano y otoño.' },
    ],
  },
  'san-leandro': {
    localNote: 'San Leandro es una ciudad junto a la bahía entre Oakland y Hayward, con terreno plano ideal para la energía solar. La zona tiene una influencia marina moderada.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San Leandro?', a: 'Sí. San Leandro tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en San Leandro con las tarifas de PG&E?', a: 'Sí. Los residentes de San Leandro pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe San Leandro para la energía solar?', a: 'San Leandro recibe en promedio alrededor de 5.0 horas de sol pico al día en la Zona 3. La ubicación junto a la bahía tiene capa marina, pero la producción solar se mantiene sólida y confiable durante todo el año.' },
    ],
  },
  'san-luis-obispo': {
    localNote: 'San Luis Obispo es una vibrante ciudad universitaria situada en un valle costero, con capa marina matutina que suele disiparse hacia el mediodía. El clima templado de la ciudad y su comunidad con conciencia ambiental impulsan una fuerte adopción de la energía solar con baterías para lograr independencia energética limpia.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San Luis Obispo?', a: 'Sí. El Departamento de Desarrollo Comunitario de la ciudad de San Luis Obispo procesa los permisos solares con un plazo típico de 3 a 4 semanas. Las instalaciones estándar en techos son sencillas; su instalador se encarga de todos los permisos y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en San Luis Obispo?', a: 'Sí. SLO recibe un estimado de 5.2 horas pico de sol al día, ya que la niebla matutina se disipa hacia la tarde. Las tarifas de PG&E de $0.44/kWh y la sólida conciencia ambiental de la ciudad hacen que la energía solar con almacenamiento en baterías sea atractiva tanto económica como ecológicamente para lograr independencia energética.' },
      { q: '¿Cuánto sol recibe San Luis Obispo para la energía solar?', a: 'San Luis Obispo recibe un promedio estimado de 5.2 horas pico de sol al día. La ubicación en el valle costero trae capa marina matutina que suele disiparse hacia el final de la mañana, lo que permite una sólida producción solar por la tarde. Las propiedades en laderas captan aún más sol para un excelente rendimiento durante todo el año.' },
    ],
  },
  'san-marcos': {
    localNote: 'San Marcos se ubica en un valle del interior con veranos cálidos y poca influencia de la capa marina. La zona experimenta una demanda de enfriamiento de moderada a alta con una excelente producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San Marcos?', a: 'Sí. San Marcos cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en San Marcos con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de San Marcos pagan tarifas de SDG&E de alrededor de $0.47/kWh, con costos de enfriamiento de moderados a altos en verano. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe San Marcos para la energía solar?', a: 'San Marcos recibe un promedio de alrededor de 5.9 horas de sol pico al día en la Zona 10. La ubicación en el valle del interior ofrece una excelente producción solar, con veranos cálidos y una capa marina mínima.' },
    ],
  },
  'san-mateo': {
    localNote: 'San Mateo es una ciudad central de la Península, sobre la autopista 101. La zona experimenta una influencia moderada de la capa marina con una producción solar confiable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San Mateo?', a: 'Sí. San Mateo cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en San Mateo con las tarifas de PG&E?', a: 'Sí. Los residentes de San Mateo pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorro y energía de respaldo, a pesar de la influencia de la capa marina.' },
      { q: '¿Cuánto sol recibe San Mateo para la energía solar?', a: 'San Mateo recibe un promedio de alrededor de 5.0 horas pico de sol al día en la Zona 3. La capa marina es común, pero la ubicación junto a la bahía respalda una producción solar confiable durante todo el año.' },
    ],
  },
  'san-rafael': {
    localNote: 'San Rafael es la sede del condado, ubicada en un valle interior con influencia marina moderada. La zona recibe más sol que las ubicaciones costeras de Marin.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San Rafael?', a: 'Sí. San Rafael tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en San Rafael con las tarifas de PG&E?', a: 'Sí. Los residentes de San Rafael pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorro y respaldo de energía, incluso con una demanda de enfriamiento moderada por la ubicación en el valle interior.' },
      { q: '¿Cuánto sol recibe San Rafael para la energía solar?', a: 'San Rafael recibe en promedio alrededor de 5.0 horas de sol pico al día en la Zona 3. La ubicación en el valle interior recibe menos capa marina que las zonas costeras, lo que ofrece una producción solar confiable durante todo el año.' },
    ],
  },
  'san-ramon': {
    localNote: 'San Ramon es una ciudad suburbana próspera del Valle de San Ramon con casas grandes y modernas. La zona tiene veranos calurosos con alta demanda de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en San Ramon?', a: 'Sí. San Ramon tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en San Ramon con las tarifas de PG&E?', a: 'Sin duda. Los residentes de San Ramon pagan tarifas de PG&E de alrededor de $0.44/kWh, con facturas altas por el tamaño de las casas y el uso de aire acondicionado. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo.' },
      { q: '¿Cuánto sol recibe San Ramon para la energía solar?', a: 'San Ramon recibe en promedio aproximadamente 5.3 horas de sol pico al día en la Zona 4. La ubicación en el valle interior ofrece una excelente producción solar con veranos calurosos.' },
    ],
  },
  'sanger': {
    localNote: 'Sanger es una pequeña ciudad del valle al este de Fresno, rodeada de zonas agrícolas. La zona experimenta veranos extremadamente calurosos con una alta demanda de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Sanger?', a: 'Sí. Sanger cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Sanger con las tarifas de PG&E?', a: 'Sí. Los residentes de Sanger pagan tarifas de PG&E de alrededor de $0.44/kWh, con costos de enfriamiento muy altos en verano. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo durante el calor extremo.' },
      { q: '¿Cuánto sol recibe Sanger para la energía solar?', a: 'Sanger recibe un promedio de alrededor de 5.9 horas de sol pico al día en la Zona 13. La ubicación en el valle de San Joaquín ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'santa-ana': {
    localNote: 'Santa Ana es la sede del condado, ubicada en el centro de Orange County, con clima cálido de interior. La zona experimenta una influencia moderada de la capa marina, con un fuerte potencial de producción solar y demanda moderada de refrigeración.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Santa Ana?', a: 'Sí. Santa Ana tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Santa Ana con las tarifas de SCE?', a: 'Sí. Los residentes de Santa Ana pagan tarifas de SCE de alrededor de $0.36/kWh, con demanda moderada de refrigeración. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico durante cortes.' },
      { q: '¿Cuánto sol recibe Santa Ana para la energía solar?', a: 'Santa Ana recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 8. La ubicación en el centro de Orange County ofrece una producción solar sólida, con veranos cálidos y una capa marina moderada.' },
    ],
  },
  'santa-barbara': {
    localNote: 'Santa Bárbara es una ciudad costera con una icónica arquitectura mediterránea y neblina matutina que suele disiparse hacia el mediodía. La comunidad de altos ingresos de la ciudad y sus valores ambientales impulsan una fuerte adopción de la energía solar combinada con batería para lograr independencia energética limpia.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Santa Bárbara?', a: 'Sí. El Community Development Department de la ciudad de Santa Bárbara procesa los permisos solares, con un tiempo de espera habitual de 3 a 4 semanas. Las propiedades costeras e históricas pueden requerir una revisión adicional; su instalador se encarga de todos los permisos y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Santa Bárbara?', a: 'Sí. Santa Bárbara recibe un estimado de 5.0 horas de sol pico al día, ya que la neblina matutina se disipa hacia la tarde. Las tarifas de SCE de $0.40/kWh y la sólida conciencia ambiental de la ciudad hacen que la energía solar con almacenamiento en batería resulte atractiva tanto económica como ecológicamente para lograr independencia energética.' },
      { q: '¿Cuánta luz solar recibe Santa Bárbara para la energía solar?', a: 'Santa Bárbara recibe un estimado de 5.0 horas de sol pico al día. La neblina marina matutina suele disiparse hacia el final de la mañana o principios de la tarde, lo que permite una sólida producción solar. Los techos orientados al sur y las propiedades en las colinas de la Riviera captan aún más sol, logrando un excelente rendimiento durante todo el año.' },
    ],
  },
  'santa-clara': {
    localNote: 'Santa Clara recibe servicio de Silicon Valley Power, una empresa municipal con tarifas más bajas que PG&E. Aquí, el valor de la energía solar proviene de la energía de respaldo, la independencia energética y la protección ante futuros aumentos de tarifas.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Santa Clara?', a: 'Sí. Santa Clara cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Santa Clara con las tarifas de Silicon Valley Power?', a: 'Las tarifas de Silicon Valley Power promedian $0.16-0.18/kWh, mucho más bajas que las de PG&E. El retorno de inversión solar es más lento, pero los sistemas de energía solar más batería ofrecen respaldo durante cortes de electricidad y protegen tus costos energéticos ante futuros aumentos de tarifas.' },
      { q: '¿Cuánto sol recibe Santa Clara para la energía solar?', a: 'Santa Clara recibe un promedio de alrededor de 5.2 horas de sol pico al día en la Zona 4. La ubicación en el valle ofrece una fuerte producción solar durante todo el año.' },
    ],
  },
  'santa-clarita': {
    localNote: 'Santa Clarita se ubica en el Valle de Santa Clarita, al norte de LA, con veranos calurosos y secos. La ubicación en el valle del interior ofrece condiciones solares excepcionales, sin capa marina y con una alta demanda de climatización.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Santa Clarita?', a: 'Sí. Santa Clarita cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Santa Clarita con las tarifas de SCE?', a: 'Sin duda. Los residentes de Santa Clarita pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de climatización muy altos en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo durante eventos de calor extremo.' },
      { q: '¿Cuánto sol recibe Santa Clarita para la energía solar?', a: 'Santa Clarita recibe un promedio de alrededor de 6.0 horas pico de sol al día en la Zona 10. La ubicación en el valle del interior ofrece una excelente producción solar, con veranos calurosos y despejados, sin interferencia de la capa marina.' },
    ],
  },
  'santa-cruz': {
    localNote: 'Santa Cruz es una ciudad costera con niebla matutina que suele disiparse hacia el mediodía, revelando un fuerte sol por la tarde. La comunidad con conciencia ambiental de la ciudad y las altas tarifas de PG&E impulsan una fuerte adopción de la energía solar más batería para la independencia energética limpia.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Santa Cruz?', a: 'Sí. El Departamento de Planificación y Desarrollo Comunitario de la ciudad de Santa Cruz procesa los permisos solares con un plazo típico de 3 a 4 semanas. Las propiedades costeras pueden requerir una revisión adicional; tu instalador se encarga de todos los permisos y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Santa Cruz con la niebla costera?', a: 'Sí. Santa Cruz recibe un estimado de 4.9 horas de sol pico al día, ya que la niebla matutina se disipa por la tarde. Las tarifas de PG&E de $0.44/kWh y los fuertes valores ambientales de la ciudad hacen que la energía solar con almacenamiento en batería sea atractiva tanto económica como ecológicamente. Los cortes por tormentas de invierno también hacen que el respaldo de batería sea muy valioso.' },
      { q: '¿Cuánto sol recibe Santa Cruz para la energía solar?', a: 'Santa Cruz recibe un estimado de 4.9 horas de sol pico al día. La capa marina matutina suele disiparse hacia el final de la mañana o principios de la tarde, lo que permite una producción solar sólida. Los techos orientados al sur y las propiedades en laderas por encima de la línea de niebla captan aún más sol, logrando un excelente rendimiento durante todo el año.' },
    ],
  },
  'santa-maria': {
    localNote: 'Santa María se encuentra en la región agrícola del Valle de Santa María, en el interior, con menos influencia de neblina marina que la costera Santa Bárbara. El clima más cálido del interior y el entorno agrícola de la ciudad ofrecen un mayor potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Santa María?', a: 'Sí. Santa María procesa los permisos solares a través del Community Development Department de la ciudad, con un tiempo de espera habitual de 3 a 4 semanas. Las instalaciones estándar en techo son sencillas; su instalador solar gestiona todos los trámites e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Santa María?', a: 'Sí. Santa María recibe un estimado de 5.3 horas de sol pico al día gracias a su ubicación en el valle del interior, con menos niebla que las zonas costeras. Las tarifas de SCE de $0.40/kWh y el clima cálido hacen que la energía solar con almacenamiento en batería sea una inversión inteligente a largo plazo para el ahorro de costos y la independencia energética.' },
      { q: '¿Cuánta luz solar recibe Santa María para la energía solar?', a: 'Santa María recibe un estimado de 5.3 horas de sol pico al día, más que la costera Santa Bárbara, debido a la menor influencia de la neblina marina. Su ubicación en el valle del interior ofrece una producción solar constante durante todo el año, con un rendimiento sólido en verano.' },
    ],
  },
  'santa-paula': {
    localNote: 'Santa Paula se ubica en el Valle interior del Río Santa Clara, con veranos calurosos y entorno agrícola. La zona tiene alta demanda de enfriamiento con excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Santa Paula?', a: 'Sí. Santa Paula tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Santa Paula con las tarifas de SCE?', a: 'Sí. Los residentes de Santa Paula pagan tarifas de SCE de alrededor de $0.36/kWh, con alta demanda de enfriamiento por el calor del valle interior. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo.' },
      { q: '¿Cuánto sol recibe Santa Paula para la energía solar?', a: 'Santa Paula recibe en promedio alrededor de 5.9 horas de sol pico al día en las Zonas 9/10. La ubicación en el valle interior ofrece una excelente producción solar con veranos calurosos y poca capa marina.' },
    ],
  },
  'santa-rosa': {
    localNote: 'Santa Rosa es la ciudad más grande del North Bay y se encuentra en un valle del interior. La zona presenta veranos cálidos con excelentes condiciones solares y frecuentes cortes PSPS durante la temporada de incendios.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Santa Rosa?', a: 'Sí. Santa Rosa cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Santa Rosa con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Santa Rosa pagan tarifas de PG&E de alrededor de $0.44/kWh y enfrentan frecuentes cortes PSPS durante la temporada de incendios. La energía solar residencial con almacenamiento en batería ofrece tanto ahorro como energía de respaldo esencial.' },
      { q: '¿Cuánta luz solar recibe Santa Rosa para la energía solar?', a: 'Santa Rosa recibe en promedio 5.2 horas de sol pico al día en la Zona 2. Su ubicación en el valle del interior ofrece una excelente producción solar, con veranos cálidos y poca influencia de neblina marina.' },
    ],
  },
  'santee': {
    localNote: 'Santee se ubica en un valle del interior al este de San Diego, con veranos calurosos y poca influencia de la capa marina. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Santee?', a: 'Sí. Santee cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Santee con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de Santee pagan tarifas de SDG&E de alrededor de $0.47/kWh, con altos costos de enfriamiento en verano debido al calor del interior. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Santee para la energía solar?', a: 'Santee recibe un promedio de alrededor de 6.1 horas de sol pico al día en la Zona 10. La ubicación en el valle del interior ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'scotts-valley': {
    localNote: 'Scotts Valley se ubica en las montañas de Santa Cruz, a mayor elevación, con temperaturas más frescas y menos capa marina que las zonas costeras. El terreno montañoso y el bosque de secuoyas de la ciudad requieren una evaluación cuidadosa del sitio, pero las propiedades orientadas al sur reciben una excelente exposición solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Scotts Valley?', a: 'Sí. Scotts Valley procesa los permisos solares a través del Departamento de Desarrollo Comunitario municipal, con un plazo típico de 3 a 4 semanas. El terreno montañoso y la sombra del bosque pueden requerir un análisis específico del sitio; tu instalador se encarga de los permisos y la evaluación del sitio.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en la montañosa Scotts Valley?', a: 'Sí. La mayor elevación de Scotts Valley la mantiene por encima de la niebla costera, alcanzando un estimado de 5.0 horas de sol pico en sitios despejados orientados al sur. Las tarifas de PG&E de $0.44/kWh y los frecuentes cortes por tormentas de invierno hacen que la energía solar con respaldo de batería sea ideal para la resiliencia energética en la montaña.' },
      { q: '¿Cómo afecta el terreno montañoso a la energía solar en Scotts Valley?', a: 'Scotts Valley se ubica en un terreno montañoso boscoso con secuoyas altas que pueden dar sombra a las laderas orientadas al norte. Las propiedades orientadas al sur por encima de la línea de árboles o en sitios despejados reciben una excelente exposición solar, con un estimado de 5.0 horas de sol pico al día. Una evaluación del sitio determina el impacto de la sombra y la ubicación óptima de los paneles.' },
    ],
  },
  'seaside': {
    localNote: 'Seaside es una comunidad costera justo tierra adentro de la bahía de Monterey, con un clima templado durante todo el año y capa marina matutina similar a la de Monterey. El consumo de energía moderado de la ciudad y las altas tarifas de PG&E hacen que la energía solar más batería sea una opción rentable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Seaside?', a: 'Sí. Seaside procesa los permisos solares a través de la División de Construcción municipal, con un plazo típico de 2 a 3 semanas. Las instalaciones de techo estándar son sencillas; tu instalador se encarga de todo el papeleo y las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Seaside con la niebla costera?', a: 'Sí. A pesar de la niebla matutina, Seaside recibe un estimado de 5.0 horas de sol pico al día, ya que la capa marina se disipa. Las tarifas de PG&E de $0.44/kWh hacen que la energía solar más almacenamiento en batería sea una decisión financiera sólida, ya que fija tus costos energéticos y ofrece energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Seaside para la energía solar?', a: 'Seaside recibe un estimado de 5.0 horas de sol pico al día. La ubicación costera trae niebla matutina que suele disiparse hacia el mediodía, lo que permite una fuerte producción solar por la tarde. El clima templado mantiene el consumo general de energía moderado, lo que mejora el retorno de la inversión solar.' },
    ],
  },
  'shafter': {
    localNote: 'Shafter se ubica en el sur del Valle de San Joaquín, al norte de Bakersfield, con carácter agrícola. La zona experimenta veranos calurosos con alta demanda de refrigeración y una excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Shafter?', a: 'Sí. Shafter tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Shafter con las tarifas de PG&E?', a: 'Sí. Los residentes de Shafter pagan tarifas de PG&E de alrededor de $0.44/kWh, con alta demanda de refrigeración en verano. La energía solar residencial con almacenamiento en baterías ofrece ahorros sólidos y respaldo eléctrico, especialmente valioso para zonas agrícolas.' },
      { q: '¿Cuánto sol recibe Shafter para la energía solar?', a: 'Shafter recibe un promedio de alrededor de 6.0 horas de sol pico al día en la Zona 13. La ubicación en el sur del valle ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'shasta-lake': {
    localNote: 'Shasta Lake se encuentra al norte de Redding, junto a la I-5, con calurosos veranos de valle y parte de terreno en estribaciones. Los cortes PSPS son comunes en esta zona adyacente al bosque nacional.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Shasta Lake?', a: 'Sí. Shasta Lake requiere permisos de construcción a través de la City Building Division, con un procesamiento habitual de 2 a 4 semanas. Su instalador gestiona la solicitud y las inspecciones municipales.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Shasta Lake ante el riesgo de cortes PSPS?', a: 'Definitivamente. Las tarifas de PG&E son de $0.44/kWh y los cortes PSPS son frecuentes cerca de las zonas boscosas. La energía solar residencial con respaldo de batería proporciona electricidad durante los cortes de varios días y los episodios de calor extremo.' },
      { q: '¿Cuánta luz solar recibe Shasta Lake para la energía solar?', a: 'Shasta Lake recibe en promedio 5.3 horas de sol pico al día en la Zona 11. Aunque puede haber algo de sombra por las estribaciones, las viviendas orientadas hacia el valle siguen registrando una sólida producción solar, con un calor intenso en verano.' },
    ],
  },
  'shingle-springs': {
    localNote: 'Shingle Springs es una pequeña comunidad de estribaciones a mayor elevación que el oeste del Condado de El Dorado. Muchas viviendas se ubican en lotes arbolados, por lo que la sombra de árboles y el terreno deben evaluarse cuidadosamente.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Shingle Springs?', a: 'Sí. Shingle Springs sigue los procedimientos del Departamento de Planificación y Construcción del Condado de El Dorado, con un plazo típico de 2 a 3 semanas. Los sitios en estribaciones pueden requerir una revisión adicional por zonas de incendio y consideraciones estructurales.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Shingle Springs con las tarifas de PG&E?', a: 'Sí. Los residentes de Shingle Springs pagan tarifas de PG&E cercanas a $0.44/kWh y enfrentan cortes por PSPS en zonas de incendio de estribaciones. La energía solar residencial con almacenamiento en baterías es ideal para el respaldo eléctrico y el ahorro a largo plazo.' },
      { q: '¿Cuánto sol recibe Shingle Springs para la energía solar?', a: 'Shingle Springs recibe un promedio de alrededor de 5.1 horas de sol pico al día. La topografía de las estribaciones y la cobertura de árboles hacen que la producción solar varíe significativamente según la orientación del sitio y la sombra; una evaluación profesional del sitio es esencial.' },
    ],
  },
  'simi-valley': {
    localNote: 'Simi Valley se ubica en un valle interior con veranos calurosos y poca capa marina. La zona tiene alta demanda de enfriamiento con excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Simi Valley?', a: 'Sí. Simi Valley tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Simi Valley con las tarifas de SCE?', a: 'Sí. Los residentes de Simi Valley pagan tarifas de SCE de alrededor de $0.36/kWh, con alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Simi Valley para la energía solar?', a: 'Simi Valley recibe en promedio alrededor de 5.9 horas de sol pico al día en la Zona 9. La ubicación en el valle interior ofrece una excelente producción solar con veranos calurosos y sin interferencia de la capa marina.' },
    ],
  },
  'sonoma': {
    localNote: 'Sonoma es un histórico pueblo de la zona vinícola, ubicado en el Valle de Sonoma, al este de Petaluma. La zona presenta veranos cálidos con excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Sonoma?', a: 'Sí. Sonoma cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Sonoma con las tarifas de PG&E?', a: 'Sí. Los residentes de Sonoma pagan tarifas de PG&E de alrededor de $0.44/kWh y enfrentan cortes PSPS durante la temporada de incendios. La energía solar residencial con almacenamiento en batería genera ahorro y proporciona energía de respaldo.' },
      { q: '¿Cuánta luz solar recibe Sonoma para la energía solar?', a: 'Sonoma recibe en promedio 5.2 horas de sol pico al día en la Zona 2. Su ubicación en el valle ofrece una excelente producción solar, con veranos cálidos y el sol característico de la zona vinícola.' },
    ],
  },
  'sonora': {
    localNote: 'Sonora es la sede del condado y centro de la región de Mother Lode, a 550 metros de elevación. El histórico centro urbano y las zonas residenciales en laderas se benefician de una fuerte exposición solar en las estribaciones, aunque el riesgo de incendios forestales hace que el respaldo con baterías sea fundamental.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Sonora?', a: 'Sí. Sonora requiere permisos a través de la Agencia de Recursos Comunitarios del Condado de Tuolumne, con un plazo típico de 3 a 5 semanas. El terreno de estribaciones puede requerir revisión estructural para instalaciones en laderas. Su contratista solar se encarga del proceso de solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Sonora con el riesgo de PSPS?', a: 'Sin duda. Las tarifas de PG&E son de $0.44/kWh y los cortes por PSPS son frecuentes durante la temporada de incendios. La energía solar residencial con respaldo de baterías ofrece independencia energética durante cortes de varios días y ahorro a largo plazo. Sonora recibe 5.1 horas de sol pico, excelente para una producción constante durante todo el año.' },
      { q: '¿Cuánto sol recibe Sonora para la energía solar?', a: 'Sonora recibe un promedio de 5.1 horas de sol pico al día en las estribaciones de Sierra Nevada. Los veranos calurosos con cielos despejados y mínima influencia costera generan una producción solar sólida. La elevación de las estribaciones asegura una exposición solar constante por encima de la neblina y las capas de inversión del valle.' },
    ],
  },
  'south-san-francisco': {
    localNote: 'South San Francisco se ubica en la Península, junto a la bahía, con zonas industriales y residenciales. La zona experimenta la influencia de la capa marina, pero con una producción solar confiable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en South San Francisco?', a: 'Sí. South San Francisco cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en South San Francisco con las tarifas de PG&E?', a: 'Sí. Los residentes de South San Francisco pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece ahorro y energía de respaldo a pesar de la influencia de la capa marina.' },
      { q: '¿Cuánto sol recibe South San Francisco para la energía solar?', a: 'South San Francisco recibe un promedio de alrededor de 4.8 horas pico de sol al día en la Zona 3. La capa marina es común, pero la producción solar se mantiene confiable durante todo el año.' },
    ],
  },
  'st-helena': {
    localNote: 'St. Helena es un pueblo de primer nivel en la región vinícola, con excelente potencial solar. El riesgo de incendios forestales y los eventos de PSPS hacen que el respaldo con baterías resulte atractivo para las propiedades vinícolas de alto valor.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en St. Helena?', a: 'Sí. St. Helena requiere permisos a través del Departamento de Planificación, Construcción y Servicios Ambientales del Condado de Napa, con un procesamiento de 2 a 4 semanas. Los sitios en viñedos de laderas pueden tener requisitos adicionales. Tu instalador solar se encarga de la solicitud ante el condado.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en St. Helena con el riesgo de PSPS?', a: 'Muy atractivo. PG&E cobra $0.44/kWh y los cortes por PSPS afectan los viñedos en laderas. La energía solar premium con respaldo de baterías ofrece energía durante eventos de PSPS y calor extremo. St. Helena recibe 5.1 horas de sol pico, excelente para la energía solar.' },
      { q: '¿Cuánto sol recibe St. Helena para la energía solar?', a: 'St. Helena recibe en promedio 5.1 horas de sol pico al día en la Zona 2. Los sitios del valle y de laderas con viñedos reciben veranos calurosos con cielos despejados, ideales para la producción solar. Los sistemas premium combinan bien con la estética de la región vinícola.' },
    ],
  },
  'stockton': {
    localNote: 'Stockton es una ciudad importante del Valle Central, con veranos calurosos y secos y un terreno plano ideal para la energía solar. La zona presenta calor extremo en verano y una demanda de enfriamiento muy alta.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Stockton?', a: 'Sí. Stockton cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Stockton con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Stockton pagan tarifas de PG&E de alrededor de $0.44/kWh, con costos de enfriamiento en verano muy elevados. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante los episodios de calor extremo.' },
      { q: '¿Cuánta luz solar recibe Stockton para la energía solar?', a: 'Stockton recibe en promedio 5.6 horas de sol pico al día en la Zona 12. Su ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y despejados, y sin influencia de neblina marina.' },
    ],
  },
  'sunnyvale': {
    localNote: 'Sunnyvale es una ciudad de Silicon Valley con una mezcla de zonas residenciales y oficinas tecnológicas. La zona experimenta veranos cálidos con un fuerte potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Sunnyvale?', a: 'Sí. Sunnyvale cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Sunnyvale con las tarifas de PG&E?', a: 'Sí. Los residentes de Sunnyvale pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo durante los cortes de electricidad.' },
      { q: '¿Cuánto sol recibe Sunnyvale para la energía solar?', a: 'Sunnyvale recibe un promedio de alrededor de 5.2 horas de sol pico al día en la Zona 4. La ubicación en el valle ofrece una excelente producción solar, aunque puede haber cierta influencia de la capa marina.' },
    ],
  },
  'susanville': {
    localNote: 'Susanville se ubica a 1,280 metros de elevación en el desierto alto, con inviernos fríos y nevados. La ubicación remota y las tormentas invernales hacen que el respaldo con baterías sea esencial para la resiliencia energética.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Susanville?', a: 'Sí. Susanville requiere permisos a través de Planificación y Construcción del Condado de Lassen, con un plazo típico de 2 a 4 semanas. Se requieren cálculos de carga de nieve por la gran elevación. Su instalador se encarga de la solicitud ante el condado.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Susanville dada su ubicación remota?', a: 'Sí. La ubicación remota de Susanville, en el desierto alto, hace que la energía solar con almacenamiento en baterías resulte atractiva para la independencia energética. El respaldo con baterías proporciona energía durante tormentas invernales y cortes. Los sistemas diseñados para nieve manejan las condiciones de clima frío y siguen produciendo durante todo el año.' },
      { q: '¿Cuánto sol recibe Susanville para la energía solar?', a: 'Susanville recibe un promedio de 4.9 horas de sol pico al día a 1,280 metros de elevación en la Zona 1. La elevación del desierto alto ofrece una producción solar sólida con cielos despejados durante todo el año. Los inviernos fríos y la gran altitud aportan una intensidad de sol fuerte.' },
    ],
  },
  'sutter-creek': {
    localNote: 'Sutter Creek es un encantador pueblo de la fiebre del oro con una histórica calle principal y zonas residenciales en las laderas. El terreno de estribaciones, a 1,200 pies de elevación, ofrece una excelente exposición solar, aunque la orientación del techo hacia el sur importa más en lotes en pendiente.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Sutter Creek?', a: 'Sí. Sutter Creek requiere permisos a través de Amador County Building Department, con un procesamiento de 3 a 4 semanas. El centro histórico puede tener revisión de diseño para instalaciones visibles. Su instalador se encarga de la coordinación de permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Sutter Creek con los eventos de PSPS?', a: 'Sí. PG&E cobra $0.44/kWh y el riesgo de incendios en las estribaciones genera cortes frecuentes. La energía solar con respaldo de batería brinda resiliencia durante cortes de varios días y reduce las altas facturas eléctricas. Sutter Creek recibe 5.1 horas de sol pico, sólido para la energía solar de estribaciones.' },
      { q: '¿Cómo afecta el terreno a la energía solar en Sutter Creek?', a: 'Sutter Creek se ubica en un terreno de laderas con muchas pendientes orientadas al sur, ideales para paneles solares. Los techos orientados al norte o los lotes muy sombreados pueden tener una producción reducida. Una evaluación del sitio determina la mejor ubicación de los paneles. La ubicación en las estribaciones, por encima de la neblina del valle, ofrece un sol confiable.' },
    ],
  },
  'tehachapi': {
    localNote: 'Tehachapi se ubica en las montañas, a mayor elevación, con temperaturas más frescas que en el fondo del valle, pero con un fuerte potencial solar. La zona es conocida por la energía eólica, pero también recibe una excelente exposición solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Tehachapi?', a: 'Sí. Tehachapi tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Tehachapi con las tarifas de SCE?', a: 'Sí. Los residentes de Tehachapi pagan tarifas de SCE de alrededor de $0.36/kWh, con demanda moderada de refrigeración y calefacción debido a la elevación montañosa. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico durante cortes.' },
      { q: '¿Cuánto sol recibe Tehachapi para la energía solar?', a: 'Tehachapi recibe un promedio de alrededor de 6.2 horas de sol pico al día en la Zona 14/16. La ubicación montañosa ofrece una excelente producción solar con cielos despejados, aunque la mayor elevación implica temperaturas más frescas que en zonas desérticas.' },
    ],
  },
  'tehama': {
    localNote: 'Tehama es una pequeña comunidad rural al este de Red Bluff, a lo largo del río Sacramento. El terreno abierto del valle y el entorno agrícola ofrecen una exposición solar ideal.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Tehama?', a: 'Sí. Tehama requiere permisos a través de Tehama County Planning & Building, con un plazo típico de 2 a 4 semanas. Tu instalador solar coordina la solicitud ante el condado y las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Tehama?', a: 'Sí. Las tarifas de PG&E promedian $0.44/kWh, y los cortes por PSPS son comunes en las zonas rurales. La energía solar residencial con almacenamiento en batería ofrece independencia energética y respaldo para pozos y riego durante los cortes.' },
      { q: '¿Cuánto sol recibe Tehama para la energía solar?', a: 'Tehama recibe un promedio de 5.3 horas de sol pico al día en la Zona 11. La ubicación en el fondo del valle, junto al río, ofrece una excelente producción solar, con veranos calurosos y una sombra de terreno mínima.' },
    ],
  },
  'temecula': {
    localNote: 'Temecula se encuentra en la región vinícola del valle de Temecula, en el suroeste, con veranos calurosos. La zona experimenta una alta demanda de enfriamiento con una excelente producción solar, y las tarifas de SCE hacen que la economía solar sea sólida.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Temecula?', a: 'Sí. Temecula tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Temecula con las tarifas de SCE?', a: 'Sí. Los residentes de Temecula pagan tarifas de SCE de alrededor de $0.36/kWh, con una alta demanda de enfriamiento en verano. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Temecula para la energía solar?', a: 'Temecula recibe en promedio alrededor de 6.0 horas de sol pico al día en la Zona 10. La ubicación en el valle ofrece una excelente producción solar, con veranos calurosos y despejados.' },
    ],
  },
  'thousand-oaks': {
    localNote: 'Thousand Oaks se ubica en el Valle de Conejo, con un clima cálido del interior y casas grandes. La zona tiene veranos calurosos con poca interferencia de la capa marina y alta demanda de enfriamiento.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Thousand Oaks?', a: 'Sí. Thousand Oaks tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Thousand Oaks con las tarifas de SCE?', a: 'Sí. Los residentes de Thousand Oaks pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento de moderados a altos en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Thousand Oaks para la energía solar?', a: 'Thousand Oaks recibe en promedio alrededor de 5.9 horas de sol pico al día en la Zona 9. La ubicación en el valle interior ofrece una excelente producción solar con veranos cálidos y poca capa marina.' },
    ],
  },
  'torrance': {
    localNote: 'Torrance se ubica en el South Bay, cerca de la costa, con una influencia moderada de la capa marina. A pesar de la niebla costera, las tarifas de SCE y una sólida producción solar hacen que la economía solar sea favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Torrance?', a: 'Sí. Torrance cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Torrance con las tarifas de SCE?', a: 'Sí. Los residentes de Torrance pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo, a pesar de la demanda moderada de climatización propia del clima costero.' },
      { q: '¿Cuánto sol recibe Torrance para la energía solar?', a: 'Torrance recibe un promedio de alrededor de 5.7 horas pico de sol al día en la Zona 8. La capa marina afecta la producción por la mañana, pero la generación solar se mantiene sólida durante todo el año.' },
    ],
  },
  'tracy': {
    localNote: 'Tracy es una ciudad en crecimiento en el sector occidental del condado de San Joaquin, con nuevos desarrollos residenciales y calor extremo en verano. La zona presenta una demanda de enfriamiento muy alta, ideal para compensar con energía solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Tracy?', a: 'Sí. Tracy cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Tracy con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Tracy pagan tarifas de PG&E de alrededor de $0.44/kWh, con costos de enfriamiento en verano extremos. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe Tracy para la energía solar?', a: 'Tracy recibe en promedio 5.7 horas de sol pico al día en la Zona 12. Su ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y despejados, y muy poca bruma.' },
    ],
  },
  'truckee': {
    localNote: 'Truckee es un pueblo de montaña en la alta Sierra, cerca del Lago Tahoe, con fuertes nevadas invernales y temperaturas frías. Las instalaciones solares requieren ingeniería de carga de nieve y un diseño que facilite su desprendimiento.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Truckee?', a: 'Sí. Truckee está bajo la jurisdicción del Nevada County Building Department. El tiempo de espera habitual es de 2 a 4 semanas, aunque los sitios de gran elevación requieren cálculos de carga de nieve y una revisión estructural, lo que puede extender los plazos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Truckee con las tarifas de PG&E?', a: 'Sí. Los residentes de Truckee pagan tarifas de PG&E de alrededor de $0.44/kWh, con altas cargas de calefacción. La energía solar residencial con almacenamiento en batería proporciona energía de respaldo durante las tormentas invernales y los eventos PSPS, aunque la producción en invierno se reduce por la cobertura de nieve.' },
      { q: '¿Cuánta luz solar recibe Truckee para la energía solar?', a: 'Truckee recibe en promedio 4.8 horas de sol pico al día, dentro del clima de la Zona 16. La cobertura de nieve invernal reduce la producción, pero el intenso sol de verano y la alta demanda energética durante todo el año (por calefacción) siguen haciendo viable la energía solar con un diseño adecuado para el desprendimiento de nieve.' },
    ],
  },
  'tulare': {
    localNote: 'Tulare es una ciudad agrícola en el corazón del Valle de San Joaquín, con veranos muy calurosos y alta demanda de refrigeración. El terreno plano del valle y el calor intenso de la ciudad ofrecen un potencial de producción solar excepcional.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Tulare?', a: 'Sí. Tulare procesa los permisos solares a través del Departamento de Desarrollo Comunitario de la ciudad, con un plazo típico de 2 a 3 semanas. Las instalaciones estándar en techo son sencillas; su instalador solar gestiona todo el papeleo y las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Tulare?', a: 'Sí. Tulare experimenta veranos muy calurosos que generan facturas de aire acondicionado extremadamente altas con las tarifas de SCE de alrededor de $0.40/kWh. La energía solar residencial con almacenamiento en baterías fija los costos de energía y ofrece un suministro confiable. Tulare recibe un estimado de 5.7 horas de sol pico al día, algo excepcional para la producción solar.' },
      { q: '¿Cuánto sol recibe Tulare para la energía solar?', a: 'Tulare recibe un promedio estimado de 5.7 horas de sol pico al día. El clima muy caluroso del valle agrícola ofrece un rendimiento solar excepcional durante todo el año, con una producción intensa en verano que coincide con el pico de demanda de aire acondicionado y energía agrícola, maximizando el ahorro.' },
    ],
  },
  'turlock': {
    localNote: 'Turlock es una ciudad del Valle Central atendida por PG&E, con veranos calurosos y secos. La zona experimenta calor extremo en verano con demanda de refrigeración muy alta.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Turlock?', a: 'Sí. Turlock tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Turlock con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Turlock pagan tarifas de PG&E de alrededor de $0.44/kWh, con costos muy altos de refrigeración en verano. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico durante eventos de calor extremo.' },
      { q: '¿Cuánto sol recibe Turlock para la energía solar?', a: 'Turlock recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 13. La ubicación en el Valle Central ofrece una excelente producción solar, con veranos calurosos y despejados, y mínima neblina.' },
    ],
  },
  'tustin': {
    localNote: 'Tustin se ubica en el centro de Orange County, con clima cálido de interior y zonas residenciales consolidadas, incluyendo el histórico Old Town y desarrollos más nuevos. La zona experimenta demanda de refrigeración moderada a alta.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Tustin?', a: 'Sí. Tustin tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas para instalaciones solares residenciales. Su instalador presenta la solicitud del permiso y coordina todas las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Tustin con las tarifas de SCE?', a: 'Sí. Los residentes de Tustin pagan tarifas de SCE de alrededor de $0.36/kWh. El clima cálido de interior genera costos moderados a altos de refrigeración en verano, lo que hace que la energía solar con almacenamiento en baterías sea una inversión sólida.' },
      { q: '¿Cuánto sol recibe Tustin para la energía solar?', a: 'Tustin recibe un promedio de alrededor de 5.8 horas de sol pico al día en la Zona 8. La ubicación en el centro de Orange County ofrece una excelente producción solar, con veranos cálidos y mínima neblina costera.' },
    ],
  },
  'twain-harte': {
    localNote: 'Twain Harte es una comunidad de montaña y destino recreativo a 1,100 metros de elevación. La mayor elevación aporta una excelente exposición solar, aunque la nieve invernal y los pinos altos requieren una evaluación cuidadosa del sitio e ingeniería para carga de nieve.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Twain Harte?', a: 'Sí. Twain Harte requiere permisos a través de la Agencia de Recursos Comunitarios del Condado de Tuolumne, con un procesamiento de 3 a 5 semanas. La elevación de montaña requiere cálculos de carga de nieve para las estructuras solares. Su contratista se encarga de la ingeniería y los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Twain Harte con las tormentas invernales?', a: 'Sí. PG&E cobra $0.44/kWh y las zonas de montaña presentan tiempos de restauración más largos durante tormentas y eventos de PSPS. La energía solar con respaldo de baterías ofrece independencia energética durante todo el año. Twain Harte recibe 5.0 horas de sol pico, algo sólido para la energía solar de montaña a pesar de la nieve invernal.' },
      { q: '¿Cómo afecta la nieve a la energía solar en Twain Harte?', a: 'Twain Harte se ubica a 1,100 metros, con nevadas invernales que cubren temporalmente los paneles. La nieve se desliza de los paneles con ángulos pronunciados en pocos días, y la producción anual se mantiene excelente con 5.0 horas de sol pico. El sol de verano en altura aporta un mayor rendimiento que compensa las reducciones invernales.' },
    ],
  },
  'ukiah': {
    localNote: 'Ukiah es la sede del condado, ubicada en un cálido valle del interior con excelentes condiciones solares. El grave riesgo de incendios forestales y los frecuentes cortes PSPS hacen que el respaldo de batería sea fundamental para este pueblo de la zona vinícola.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Ukiah?', a: 'Sí. Ukiah requiere permisos a través de Mendocino County Planning & Building, con un tiempo de espera habitual de 2 a 4 semanas. Las zonas de riesgo de incendio pueden requerir un diseño resistente al fuego. Su contratista solar se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Ukiah ante el riesgo de cortes PSPS?', a: 'Es esencial. Las tarifas de PG&E son de $0.44/kWh y los cortes PSPS son frecuentes en esta zona de riesgo de incendio. La energía solar residencial con respaldo de batería proporciona electricidad durante los eventos PSPS de varios días y en el calor extremo. Ukiah recibe 5.2 horas de sol pico, excelentes para la energía solar.' },
      { q: '¿Cuánta luz solar recibe Ukiah para la energía solar?', a: 'Ukiah recibe en promedio 5.2 horas de sol pico al día en la Zona 2. Su ubicación en el valle del interior trae veranos calurosos y secos, y cielos despejados, ideales para la producción solar. El humo de los incendios forestales puede reducir el rendimiento durante la temporada de incendios.' },
    ],
  },
  'upland': {
    localNote: 'Upland se encuentra al pie de las montañas de San Gabriel, en el sector occidental del Inland Empire. La zona presenta veranos calurosos con alta demanda de enfriamiento, y su ubicación en las estribaciones ofrece excelentes condiciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Upland?', a: 'Sí. Upland cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas. Su instalador se encargará de gestionar el proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Upland con las tarifas de SCE?', a: 'Sí. Los residentes de Upland pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de enfriamiento en verano debido al calor del Inland Empire. La energía solar residencial con almacenamiento en batería genera un ahorro considerable y proporciona energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánta luz solar recibe Upland para la energía solar?', a: 'Upland recibe en promedio 6.0 horas de sol pico al día en la Zona 10. Su ubicación en las estribaciones del Inland Empire ofrece una excelente producción solar, con veranos calurosos y sin influencia de neblina marina.' },
    ],
  },
  'vacaville': {
    localNote: 'Vacaville es una ciudad en crecimiento junto a la I-80, entre Sacramento y el Área de la Bahía. La ubicación en el valle interior tiene veranos calurosos y secos, ideales para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Vacaville?', a: 'Sí. Vacaville tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Vacaville con las tarifas de PG&E?', a: 'Sí. Los residentes de Vacaville pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante las olas de calor del verano.' },
      { q: '¿Cuánto sol recibe Vacaville para la energía solar?', a: 'Vacaville recibe en promedio aproximadamente 5.2 horas de sol pico al día. La ubicación en el valle interior, en la Zona 12, ofrece una producción solar sólida con muy poca variación estacional.' },
    ],
  },
  'vallejo': {
    localNote: 'Vallejo se ubica en la costa de la bahía de San Francisco, con un clima más fresco e influenciado por la capa marina que el interior del condado de Solano. La zona sigue recibiendo una producción solar sólida, a pesar de las temperaturas más moderadas.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Vallejo?', a: 'Sí. Vallejo tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu instalador se encargará del proceso de solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Vallejo con las tarifas de PG&E?', a: 'Sí. Los residentes de Vallejo pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable incluso con una demanda de enfriamiento moderada, además de energía de respaldo durante los cortes.' },
      { q: '¿Cuánto sol recibe Vallejo para la energía solar?', a: 'Vallejo recibe en promedio alrededor de 5.0 horas de sol pico al día. La ubicación junto a la bahía tiene más influencia marina que las zonas del interior, pero aun así permite una producción solar sólida en la Zona 12.' },
    ],
  },
  'ventura': {
    localNote: 'Ventura se ubica en la costa del Pacífico, con influencia de la capa marina y un clima costero moderado. A pesar de la niebla matutina, la zona recibe una producción solar sólida, y las tarifas de SCE hacen que la economía solar sea favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Ventura?', a: 'Sí. Ventura tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Ventura con las tarifas de SCE?', a: 'Sí. Los residentes de Ventura pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo, a pesar de la demanda de enfriamiento moderada propia de la ubicación costera.' },
      { q: '¿Cuánto sol recibe Ventura para la energía solar?', a: 'Ventura recibe en promedio alrededor de 5.7 horas de sol pico al día en la Zona 6. La capa marina afecta la producción por la mañana, pero la generación solar se mantiene sólida gracias al despeje por la tarde y las brisas del océano.' },
    ],
  },
  'victorville': {
    localNote: 'Victorville se encuentra en el alto desierto, con cambios extremos de temperatura: veranos muy calurosos e inviernos fríos. La zona cuenta con un potencial solar excepcional y una demanda de enfriamiento muy alta. Los sistemas deben diseñarse para soportar las condiciones extremas del desierto.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Victorville?', a: 'Sí. Victorville cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas. Las instalaciones en el alto desierto requieren sistemas diseñados para soportar cambios extremos de temperatura. Su instalador se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Victorville con las tarifas de SCE?', a: 'Sin duda. Los residentes de Victorville pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano muy elevados debido al calor del desierto. La energía solar residencial con almacenamiento en batería genera un ahorro excepcional y proporciona energía de respaldo esencial durante el calor extremo.' },
      { q: '¿Cuánta luz solar recibe Victorville para la energía solar?', a: 'Victorville recibe en promedio 6.5 horas de sol pico al día en la Zona 14. Su ubicación en el alto desierto ofrece una producción solar excepcional, con veranos muy calurosos y despejados, y muy poca nubosidad durante todo el año.' },
    ],
  },
  'visalia': {
    localNote: 'Visalia es la sede del condado y la ciudad más grande de Tulare County, con veranos muy calurosos y temperaturas que superan regularmente los 38°C. El terreno agrícola plano de la ciudad y el calor intenso crean condiciones excepcionales para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Visalia?', a: 'Sí. Visalia procesa los permisos solares a través del Departamento de Desarrollo Comunitario de la ciudad, con un plazo típico de 2 a 3 semanas. Las instalaciones estándar en techo son sencillas; su instalador solar se encarga de todos los permisos y coordina las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en la muy calurosa Visalia?', a: 'Sin duda. Visalia experimenta veranos muy calurosos que generan facturas de aire acondicionado extremadamente altas con las tarifas de SCE de $0.40/kWh. La energía solar residencial con almacenamiento en baterías fija los costos de energía y maneja las cargas intensas de refrigeración. Visalia recibe un estimado de 5.7 horas de sol pico al día, algo excepcional para la producción solar.' },
      { q: '¿Cuánto sol recibe Visalia para la energía solar?', a: 'Visalia recibe un promedio estimado de 5.7 horas de sol pico al día, entre los más altos de California. El clima muy caluroso del Valle Central, con mínima neblina, ofrece una producción solar excepcional durante todo el año, con un rendimiento intenso en verano que se alinea perfectamente con la demanda de aire acondicionado.' },
    ],
  },
  'vista': {
    localNote: 'Vista se ubica en el norte del condado de San Diego, con un clima templado del interior e influencia moderada de la capa marina. La zona recibe una excelente producción solar, y las tarifas de SDG&E hacen que la economía solar sea excepcionalmente favorable.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Vista?', a: 'Sí. Vista cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Vista con las tarifas de SDG&E?', a: 'Sin duda. Los residentes de Vista pagan tarifas de SDG&E de alrededor de $0.47/kWh. La energía solar residencial con almacenamiento en batería ofrece un ahorro excepcional y energía de respaldo, con algunos de los períodos de retorno de inversión más rápidos de California.' },
      { q: '¿Cuánto sol recibe Vista para la energía solar?', a: 'Vista recibe un promedio de alrededor de 5.9 horas de sol pico al día en las Zonas 7/10. La ubicación en el interior ofrece una fuerte producción solar, con veranos cálidos y una capa marina moderada.' },
    ],
  },
  'walnut-creek': {
    localNote: 'Walnut Creek es una ciudad próspera del East Bay con casas grandes y un alto consumo de energía. La ubicación en el valle interior ofrece excelentes condiciones para la energía solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Walnut Creek?', a: 'Sí. Walnut Creek tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Walnut Creek con las tarifas de PG&E?', a: 'Sin duda. Los residentes de Walnut Creek pagan tarifas de PG&E de alrededor de $0.44/kWh con facturas superiores al promedio. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante las olas de calor del verano.' },
      { q: '¿Cuánto sol recibe Walnut Creek para la energía solar?', a: 'Walnut Creek recibe en promedio alrededor de 5.2 horas de sol pico al día en la Zona 4. La ubicación en el valle interior ofrece una excelente producción solar con veranos calurosos y poca capa marina.' },
    ],
  },
  'wasco': {
    localNote: 'Wasco se ubica en el sur del Valle de San Joaquín, con entorno agrícola y veranos calurosos. La zona experimenta alta demanda de refrigeración, con un excelente potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Wasco?', a: 'Sí. Wasco tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Wasco con las tarifas de PG&E?', a: 'Sí. Los residentes de Wasco pagan tarifas de PG&E de alrededor de $0.44/kWh, con altos costos de refrigeración en verano. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos y respaldo eléctrico, especialmente valioso para propiedades agrícolas.' },
      { q: '¿Cuánto sol recibe Wasco para la energía solar?', a: 'Wasco recibe un promedio de alrededor de 6.0 horas de sol pico al día en la Zona 13. La ubicación en el valle ofrece una excelente producción solar, con veranos calurosos y mínima nubosidad.' },
    ],
  },
  'watsonville': {
    localNote: 'Watsonville se ubica algo tierra adentro de la costa, en la región agrícola del valle de Pajaro, con menos influencia de la capa marina que la costera Santa Cruz. El clima más cálido del interior y el entorno agrícola de la ciudad ofrecen un mayor potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Watsonville?', a: 'Sí. Watsonville procesa los permisos solares a través del Departamento de Desarrollo Comunitario municipal, con un plazo típico de 3 a 4 semanas. Las instalaciones de techo estándar son sencillas; tu instalador solar gestiona todo el papeleo y las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Watsonville?', a: 'Sí. Watsonville recibe un estimado de 5.1 horas de sol pico al día, gracias a su ubicación en el valle del interior con menos niebla que las zonas costeras. Las tarifas de PG&E de $0.44/kWh y el clima cálido, que impulsa un uso moderado de aire acondicionado, hacen que la energía solar con almacenamiento en batería sea una inversión inteligente a largo plazo.' },
      { q: '¿Cuánto sol recibe Watsonville para la energía solar?', a: 'Watsonville recibe un estimado de 5.1 horas de sol pico al día, más que la costera Santa Cruz, debido a la menor influencia de la capa marina. La ubicación en el valle de Pajaro ofrece una producción solar constante durante todo el año, con un fuerte rendimiento en verano alineado con la demanda de enfriamiento.' },
    ],
  },
  'weaverville': {
    localNote: 'Weaverville es la sede del condado y el pueblo más grande de Trinity County, ubicado en un valle de montaña rodeado de bosque denso. El pueblo experimenta veranos calurosos con un fuerte potencial solar en sitios despejados orientados al sur, aunque la sombra del bosque requiere una evaluación cuidadosa del sitio. Los frecuentes cortes por PSPS hacen que el respaldo de batería sea esencial.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Weaverville?', a: 'Sí. Weaverville requiere permisos a través del Departamento de Construcción del condado de Trinity, con un procesamiento típico de 2 a 4 semanas. El terreno de montaña y la sombra del bosque pueden requerir un análisis específico del sitio. Tu instalador solar se encarga de todos los permisos y la evaluación del sitio.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en la remota Weaverville?', a: 'Sin duda. Weaverville experimenta frecuentes cortes por PSPS relacionados con incendios forestales y cortes por tormentas de invierno debido a su ubicación remota de montaña. La energía solar residencial con almacenamiento en batería ofrece una resiliencia energética crítica y fija tus costos frente a las tarifas de $0.44/kWh de PG&E. Weaverville recibe un estimado de 5.2 horas de sol pico en sitios despejados orientados al sur.' },
      { q: '¿Cómo afecta el terreno boscoso a la energía solar en Weaverville?', a: 'Weaverville se ubica en un terreno montañoso boscoso con pinos y abetos altos que pueden dar sombra a las laderas orientadas al norte. Las propiedades orientadas al sur en sitios despejados o por encima de la línea de árboles reciben una excelente exposición solar, con un estimado de 5.2 horas de sol pico al día. Una evaluación del sitio determina el impacto de la sombra y la ubicación óptima de los paneles en terreno de montaña.' },
    ],
  },
  'weed': {
    localNote: 'Weed se ubica a 3,400 pies de elevación, sobre la autopista I-5, con inviernos fríos y requisitos de carga de nieve. Los cortes de PSPS y las tormentas invernales hacen que el respaldo de batería sea esencial para esta comunidad de montaña.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Weed?', a: 'Sí. Weed requiere permisos a través del Departamento de Desarrollo Comunitario del condado de Siskiyou, con un plazo típico de 2 a 4 semanas. Se requieren cálculos de carga de nieve para las instalaciones a gran altitud. Su instalador gestiona el proceso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Weed con inviernos de montaña?', a: 'Sí. Las tarifas de PG&E promedian $0.44/kWh y las tormentas invernales causan cortes frecuentes. La energía solar residencial con respaldo de batería proporciona energía durante tormentas de varios días y eventos de PSPS. Los sistemas clasificados para nieve soportan cargas invernales pesadas.' },
      { q: '¿Cuánto sol recibe Weed para la energía solar?', a: 'Weed recibe un promedio de 4.7 horas pico de sol al día, a 3,400 pies, en la Zona 1. La elevación de montaña y la nieve invernal reducen las horas de sol, pero los cielos despejados y la gran altitud ofrecen una sólida producción solar en verano y otoño.' },
    ],
  },
  'west-covina': {
    localNote: 'West Covina se ubica en el este del Valle de San Gabriel, con veranos calurosos y un clima del interior. La zona experimenta una alta demanda de climatización con excelentes condiciones para la producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en West Covina?', a: 'Sí. West Covina cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en West Covina con las tarifas de SCE?', a: 'Sí. Los residentes de West Covina pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de climatización en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe West Covina para la energía solar?', a: 'West Covina recibe un promedio de alrededor de 5.9 horas pico de sol al día en la Zona 10. La ubicación en el valle oriental ofrece una excelente producción solar, con veranos calurosos y una mínima capa marina.' },
    ],
  },
  'west-sacramento': {
    localNote: 'West Sacramento se encuentra justo al otro lado del río Sacramento, frente a la capital del estado. La ciudad ha crecido rápidamente en los últimos años, con nuevos desarrollos residenciales y comerciales.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en West Sacramento?', a: 'Sí. West Sacramento sigue los procedimientos de permisos de su departamento de construcción municipal, con un plazo típico de alrededor de 2 semanas. Tu instalador se encargará del proceso de solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en West Sacramento con las tarifas de PG&E?', a: 'Sí. Los residentes de West Sacramento pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante los períodos de demanda pico en verano.' },
      { q: '¿Cuánto sol recibe West Sacramento para la energía solar?', a: 'West Sacramento recibe en promedio aproximadamente 5.2 horas de sol pico al día. La ubicación plana del valle, en la Zona 12, ofrece una excelente producción solar durante todo el año con muy poca niebla.' },
    ],
  },
  'westminster': {
    localNote: 'Westminster se ubica en el centro de Orange County, con clima templado entre la costa y las zonas del interior. La comunidad cuenta con vecindarios residenciales diversos y una producción solar constante.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Westminster?', a: 'Sí. Westminster tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas para permisos solares residenciales. Su contratista se encarga de todas las presentaciones de permisos e inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Westminster con las tarifas de SCE?', a: 'Sí. Los residentes de Westminster pagan tarifas de SCE de alrededor de $0.36/kWh. La energía solar residencial con almacenamiento en baterías genera ahorros sólidos, respaldo eléctrico durante cortes y protección ante futuros aumentos de tarifas de SCE.' },
      { q: '¿Cuánto sol recibe Westminster para la energía solar?', a: 'Westminster recibe un promedio de alrededor de 5.7 horas de sol pico al día en la Zona 8. La ubicación en el centro de Orange County ofrece una excelente producción solar, con clima moderado y veranos cálidos.' },
    ],
  },
  'wheatland': {
    localNote: 'Wheatland es un pequeño pueblo del valle con excelente potencial solar. Los veranos calurosos y la proximidad a las estribaciones hacen que la energía solar con respaldo de baterías resulte atractiva para la independencia energética.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Wheatland?', a: 'Sí. Wheatland requiere permisos a través del Departamento de Desarrollo Comunitario del Condado de Yuba, con un procesamiento de 2 a 4 semanas. La ubicación en el valle simplifica la instalación. Su instalador se encarga de los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Wheatland con las tarifas de PG&E?', a: 'Sí. PG&E cobra $0.44/kWh y el calor del valle impulsa altos costos de refrigeración. La energía solar con respaldo de baterías ofrece ahorro y resiliencia. Wheatland recibe 5.3 horas de sol pico, excelente para la producción solar.' },
      { q: '¿Cuánto sol recibe Wheatland para la energía solar?', a: 'Wheatland recibe un promedio de 5.3 horas de sol pico al día en la Zona 12. La ubicación en el valle tiene veranos calurosos con cielos despejados, ideales para la energía solar. El terreno plano simplifica las instalaciones.' },
    ],
  },
  'whittier': {
    localNote: 'Whittier se ubica en las colinas de Puente Hills, con un clima cálido del interior y terreno de colinas. La zona experimenta una demanda de climatización de moderada a alta con un excelente potencial de producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Whittier?', a: 'Sí. Whittier cuenta con su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Whittier con las tarifas de SCE?', a: 'Sí. Los residentes de Whittier pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de climatización de moderados a altos en verano. La energía solar residencial con almacenamiento en baterías ofrece un ahorro sólido y energía de respaldo durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Whittier para la energía solar?', a: 'Whittier recibe un promedio de alrededor de 5.8 horas pico de sol al día en la Zona 9/10. La ubicación en las colinas ofrece una sólida producción solar, con veranos cálidos y una mínima capa marina.' },
    ],
  },
  'wildomar': {
    localNote: 'Wildomar se encuentra en el suroeste del condado de Riverside, con veranos templados y un crecimiento residencial constante. La zona experimenta una demanda de enfriamiento moderada a alta con una excelente producción solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Wildomar?', a: 'Sí. Wildomar tiene su propio departamento de construcción municipal, con un tiempo de espera típico de 2 a 3 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Wildomar con las tarifas de SCE?', a: 'Sí. Los residentes de Wildomar pagan tarifas de SCE de alrededor de $0.36/kWh, con costos de enfriamiento en verano moderados a altos. La energía solar residencial con almacenamiento en baterías genera un ahorro considerable y respaldo de energía durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Wildomar para la energía solar?', a: 'Wildomar recibe en promedio alrededor de 6.0 horas de sol pico al día en la Zona 10. La ubicación en el interior ofrece una excelente producción solar, con veranos templados y cielos despejados.' },
    ],
  },
  'williams': {
    localNote: 'Williams es un pequeño pueblo agrícola junto a la autopista I-5, con un terreno plano de valle ideal para la energía solar. Los eventos rurales de PSPS y las altas tarifas de PG&E impulsan la adopción de la energía solar.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Williams?', a: 'Sí. Williams depende de la jurisdicción de Colusa County Community Development, con un procesamiento de permisos de 2 a 4 semanas. Tu contratista gestiona la solicitud y las inspecciones del condado.' },
      { q: '¿Vale la pena la energía solar residencial más almacenamiento en batería en Williams?', a: 'Sin duda. Las tarifas de $0.44/kWh de PG&E y los cortes rurales por PSPS hacen que la energía solar con almacenamiento en batería sea atractiva. El almacenamiento en batería proporciona respaldo de energía para pozos, riego y aire acondicionado durante cortes de varios días.' },
      { q: '¿Cuánto sol recibe Williams para la energía solar?', a: 'Williams recibe un promedio de 5.3 horas de sol pico al día en la Zona 11. El valle agrícola abierto ofrece una exposición solar sin obstrucciones, con veranos calurosos, secos y cielos despejados.' },
    ],
  },
  'willits': {
    localNote: 'Willits se encuentra en el interior, en una región de colinas boscosas entre la costa y el Valle de Ukiah. Sus horas de sol moderadas y el grave riesgo de cortes PSPS hacen que el respaldo de batería sea fundamental para este pueblo de acceso a la región.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Willits?', a: 'Sí. Willits requiere permisos a través de Mendocino County Planning & Building, con un tiempo de espera habitual de 2 a 4 semanas. El terreno boscoso puede requerir un diseño resistente al fuego. Su contratista se encarga de las solicitudes.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Willits ante el riesgo de incendios forestales?', a: 'Sin duda. Las tarifas de PG&E promedian $0.44/kWh y los cortes PSPS son frecuentes en esta zona boscosa de riesgo de incendio. La energía solar residencial con respaldo de batería proporciona electricidad durante los eventos PSPS de varios días. Willits recibe 5.0 horas de sol pico, un valor sólido para las colinas del interior.' },
      { q: '¿Cuánta luz solar recibe Willits para la energía solar?', a: 'Willits recibe en promedio 5.0 horas de sol pico al día en la Zona 2. Su ubicación en las colinas del interior trae veranos más cálidos que en la costa, con una producción solar moderada. El terreno boscoso requiere sitios orientados al sur para evitar la sombra.' },
    ],
  },
  'willows': {
    localNote: 'Willows es la sede del condado de Glenn, con un terreno de valle plano ideal para la energía solar. El entorno agrícola y rural hace que la independencia energética resulte atractiva para bombas de pozo y sistemas de riego.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Willows?', a: 'Sí. Willows requiere permisos a través de Glenn County Planning & Community Development Services, con un tiempo de espera habitual de 2 a 4 semanas. Su instalador se encarga de la solicitud ante el condado y de las inspecciones.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Willows para las necesidades agrícolas?', a: 'Sí. Las tarifas de PG&E promedian $0.44/kWh y los cortes PSPS afectan a las zonas rurales. La energía solar residencial con respaldo de batería proporciona independencia energética y respaldo para bombas de pozo, sistemas de riego y aire acondicionado durante los cortes de varios días.' },
      { q: '¿Cuánta luz solar recibe Willows para la energía solar?', a: 'Willows recibe en promedio 5.3 horas de sol pico al día en la Zona 11. El valle agrícola plano ofrece una excelente producción solar, con veranos calurosos que a menudo superan los 100 °F y muy poca nubosidad.' },
    ],
  },
  'windsor': {
    localNote: 'Windsor es un pueblo en crecimiento al norte de Santa Rosa, con desarrollos residenciales más nuevos. La zona presenta veranos cálidos con excelentes condiciones solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Windsor?', a: 'Sí. Windsor cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 4 semanas. Su contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Windsor con las tarifas de PG&E?', a: 'Sí. Los residentes de Windsor pagan tarifas de PG&E de alrededor de $0.44/kWh y enfrentan cortes PSPS durante la temporada de incendios. La energía solar residencial con almacenamiento en batería genera ahorro y proporciona energía de respaldo.' },
      { q: '¿Cuánta luz solar recibe Windsor para la energía solar?', a: 'Windsor recibe en promedio 5.2 horas de sol pico al día en la Zona 2. Su ubicación en el valle del interior ofrece una excelente producción solar, con veranos cálidos.' },
    ],
  },
  'woodland': {
    localNote: 'Woodland es una ciudad pequeña al norte de Davis, con carácter agrícola. El terreno plano del valle y la exposición constante al sol facilitan la instalación de sistemas solares.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Woodland?', a: 'Sí. Woodland sigue los procedimientos de permisos de su departamento de construcción municipal, con un plazo típico de alrededor de 2 semanas. Tu contratista se encarga de la solicitud del permiso.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Woodland con las tarifas de PG&E?', a: 'Sí. Los residentes de Woodland pagan tarifas de PG&E de alrededor de $0.44/kWh. La energía solar residencial con almacenamiento en baterías ofrece un ahorro considerable y energía de respaldo durante las olas de calor del verano y los cortes.' },
      { q: '¿Cuánto sol recibe Woodland para la energía solar?', a: 'Woodland recibe en promedio alrededor de 5.2 horas de sol pico al día. La ubicación plana del valle, en la Zona 12, ofrece una producción solar sólida con muy poca variación estacional.' },
    ],
  },
  'yorba-linda': {
    localNote: 'Yorba Linda se ubica en las colinas del noreste de Orange County, con clima cálido de interior y vecindarios residenciales en laderas. El terreno elevado ofrece una excelente exposición solar y mayor demanda de refrigeración.',
    faq: [
      { q: '¿Necesito un permiso para instalar solar en Yorba Linda?', a: 'Sí. Yorba Linda tiene su propio departamento de construcción municipal, con un plazo típico de 2 a 3 semanas para permisos solares residenciales. Su contratista se encarga de todos los trámites de permisos por usted.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Yorba Linda con las tarifas de SCE?', a: 'Sí. Los residentes de Yorba Linda pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de refrigeración en verano debido a la ubicación en laderas del interior. La energía solar residencial con almacenamiento en baterías ofrece ahorros sólidos y respaldo eléctrico durante las olas de calor.' },
      { q: '¿Cuánto sol recibe Yorba Linda para la energía solar?', a: 'Yorba Linda recibe un promedio de alrededor de 5.9 horas de sol pico al día en la Zona 9/10. La ubicación en laderas y el clima de interior ofrecen una producción solar excepcional, con veranos calurosos y despejados.' },
    ],
  },
  'yreka': {
    localNote: 'Yreka es la sede del condado, a 2,600 pies de elevación, con inviernos fríos y nevados. Los sistemas solares requieren un diseño con carga de nieve, y el respaldo de batería es fundamental ante los cortes por tormentas invernales.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Yreka?', a: 'Sí. Yreka requiere permisos a través del Departamento de Desarrollo Comunitario del condado de Siskiyou, con un plazo típico de 2 a 4 semanas. Las instalaciones a gran altitud requieren cálculos de carga de nieve. Su instalador se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Yreka con nieve e inviernos fríos?', a: 'Sí. Las tarifas de PG&E promedian $0.44/kWh y las tormentas invernales causan cortes de varios días. La energía solar residencial con respaldo de batería proporciona energía durante las tormentas y los eventos de PSPS. Los sistemas clasificados para nieve soportan las cargas invernales y siguen produciendo durante todo el año.' },
      { q: '¿Cuánto sol recibe Yreka para la energía solar?', a: 'Yreka recibe un promedio de 4.8 horas pico de sol al día en la Zona 1. La elevación de montaña, a 2,600 pies, reduce las horas de sol en comparación con el valle, pero las altas tarifas de PG&E y las necesidades energéticas del clima frío siguen haciendo que la energía solar sea económicamente viable.' },
    ],
  },
  'yuba-city': {
    localNote: 'Yuba City es la sede del condado, en el Valle de Sacramento, con excelentes condiciones solares. Los veranos calurosos y las tarifas de PG&E hacen que la energía solar sea atractiva para reducir los costos de climatización.',
    faq: [
      { q: '¿Necesito un permiso para instalar energía solar en Yuba City?', a: 'Sí. Yuba City requiere permisos a través de los Servicios Comunitarios del condado de Sutter, con un plazo típico de 2 a 4 semanas. El terreno plano del valle simplifica la instalación. Su contratista solar se encarga de la solicitud.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en baterías en Yuba City con veranos calurosos?', a: 'Sin duda. Las tarifas de PG&E son de $0.44/kWh y el calor extremo del valle genera altos costos de climatización. La energía solar residencial con respaldo de batería proporciona ahorro en las facturas de aire acondicionado y resiliencia durante los eventos de calor. Yuba City recibe 5.3 horas pico de sol, excelente para la energía solar.' },
      { q: '¿Cuánto sol recibe Yuba City para la energía solar?', a: 'Yuba City recibe un promedio de 5.3 horas pico de sol al día en la Zona 12. La ubicación en el Valle de Sacramento trae veranos calurosos con cielos despejados, ideal para la producción solar. El terreno plano facilita las instalaciones orientadas al sur.' },
    ],
  },
  'yucaipa': {
    localNote: 'Yucaipa se encuentra en un valle al este de Redlands, con un clima cálido del interior y un entorno montañoso. La zona presenta alta demanda de enfriamiento, excelente producción solar y un pintoresco terreno de colinas.',
    faq: [
      { q: '¿Necesito un permiso para instalar paneles solares en Yucaipa?', a: 'Sí. Yucaipa cuenta con su propio departamento de construcción municipal, con un tiempo de espera habitual de 2 a 3 semanas para los permisos solares residenciales. Su instalador se encarga de todos los permisos.' },
      { q: '¿Vale la pena la energía solar residencial con almacenamiento en batería en Yucaipa con las tarifas de SCE?', a: 'Sí. Los residentes de Yucaipa pagan tarifas de SCE de alrededor de $0.36/kWh, con altos costos de aire acondicionado en verano debido al clima del valle del interior. La energía solar residencial con almacenamiento en batería ofrece un ahorro considerable y energía de respaldo.' },
      { q: '¿Cuánta luz solar recibe Yucaipa para la energía solar?', a: 'Yucaipa recibe en promedio 6.1 horas de sol pico al día en la Zona 10. Su ubicación en el valle del interior ofrece una excelente producción solar, con veranos calurosos y cielos despejados.' },
    ],
  },
};
