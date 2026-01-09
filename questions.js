// ===== BASE DE DATOS COMPLETA DE PREGUNTAS LMSGI =====
// 100 preguntas sobre: XML, DTD, XSD, XPath, XQuery, XSLT, HTML5, CSS, Lenguajes de Marcas, RSS/Sindicalización

const questions = [
    // === BLOQUE 1: XML BÁSICO (8 preguntas) ===
    {
        id: 1,
        topic: "xml",
        difficulty: "easy",
        question: "¿Qué elemento es obligatorio en todo documento XML bien formado?",
        options: ["Un elemento raíz único", "Una declaración DOCTYPE", "Al menos un comentario", "Espacios de nombres"],
        correct: 0,
        explanation: "Todo documento XML debe tener un elemento raíz único que contenga todos los demás elementos.",
        points: 10
    },
    {
        id: 2,
        topic: "xml",
        difficulty: "easy",
        question: "Identifica el error en este fragmento XML: <libro id=123><titulo>XML</titulo></libro>",
        options: ["El atributo id debe ir entre comillas", "Falta la declaración XML", "Las etiquetas están mal cerradas", "No hay error"],
        correct: 0,
        explanation: "Los atributos en XML siempre deben ir entre comillas: id=\"123\"",
        points: 10
    },
    {
        id: 3,
        topic: "xml",
        difficulty: "medium",
        question: "¿Se pueden anidar comentarios XML? Ejemplo: <!-- texto <!-- más --> -->",
        options: ["Sí, cualquier número de veces", "No, los comentarios no se pueden anidar", "Solo dos niveles", "Depende del procesador"],
        correct: 1,
        explanation: "Los comentarios XML no se pueden anidar. Esta sintaxis causaría un error.",
        points: 15
    },
    {
        id: 4,
        topic: "xml",
        difficulty: "easy",
        question: "Escribe la declaración XML estándar con codificación UTF-8:",
        options: ["<?xml version=\"1.0\"?>", "<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "<!DOCTYPE xml>", "<?xml encoding=\"UTF-8\"?>"],
        correct: 1,
        explanation: "La declaración completa incluye version=\"1.0\" y encoding=\"UTF-8\".",
        points: 10
    },
    {
        id: 5,
        topic: "xml",
        difficulty: "medium",
        question: "¿Es válido este nombre de elemento: <2libro>?",
        options: ["Sí, porque comienza con número", "No, porque no puede comenzar con número", "Sí, si está en minúsculas", "Depende del DTD"],
        correct: 1,
        explanation: "Los nombres de elementos XML no pueden comenzar con números. Deben empezar con una letra o guión bajo.",
        points: 15
    },
    {
        id: 6,
        topic: "xml",
        difficulty: "medium",
        question: "¿Qué caracteres especiales deben reemplazarse por entidades en XML?",
        options: ["Solo < y >", "<, >, &, \", '", "Todos los símbolos", "Ninguno"],
        correct: 1,
        explanation: "Entidades: < → &lt;, > → &gt;, & → &amp;, \" → &quot;, ' → &apos;",
        points: 15
    },
    {
        id: 7,
        topic: "xml",
        difficulty: "easy",
        question: "Diferencia entre <?xml ...?> y <!DOCTYPE ...>",
        options: ["<?xml ...?> es declaración de tipo de documento", "<?xml ...?> declara versión/codificación; <!DOCTYPE ...> es para DTD", "Son lo mismo", "<?xml ...?> es obsoleto"],
        correct: 1,
        explanation: "<?xml ...?> es la declaración XML. <!DOCTYPE ...> es la declaración de tipo de documento.",
        points: 15
    },
    {
        id: 8,
        topic: "xml",
        difficulty: "easy",
        question: "¿Puede un documento XML no tener declaración XML?",
        options: ["No, es obligatoria", "Sí, pero es recomendable incluirla", "Solo si tiene DTD", "Depende del navegador"],
        correct: 1,
        explanation: "La declaración XML no es obligatoria, pero es recomendable para especificar versión y codificación.",
        points: 10
    },

    // === BLOQUE 2: DTD (7 preguntas) ===
    {
        id: 9,
        topic: "dtd",
        difficulty: "easy",
        question: "¿Qué significa #PCDATA en un DTD?",
        options: ["Predefined Character Data", "Parsed Character DATA", "Processed Character Data", "Primary Character Data"],
        correct: 1,
        explanation: "#PCDATA significa Parsed Character DATA - datos de texto que serán analizados por el parser.",
        points: 10
    },
    {
        id: 10,
        topic: "dtd",
        difficulty: "easy",
        question: "¿Cómo se define que un elemento es obligatorio en DTD?",
        options: ["Con ?", "Con *", "Sin operador o con +", "Con #"],
        correct: 2,
        explanation: "Sin modificador o + significa que es obligatorio (debe aparecer al menos una vez).",
        points: 10
    },
    {
        id: 11,
        topic: "dtd",
        difficulty: "medium",
        question: "¿Qué significa * en una declaración DTD de elemento?",
        options: ["Es obligatorio", "Puede aparecer cero o más veces", "Aparece exactamente una vez", "Es un comentario"],
        correct: 1,
        explanation: "* significa que el elemento es opcional y puede repetirse múltiples veces (0 o más).",
        points: 15
    },
    {
        id: 12,
        topic: "dtd",
        difficulty: "medium",
        question: "¿Cuál es la estructura correcta de una declaración DTD de atributo?",
        options: ["<!ATTRIBUTE>", "<!ATTLIST elemento atributo tipo valor>", "<!ATTR>", "<!FIELD>"],
        correct: 1,
        explanation: "<!ATTLIST elemento atributo tipo valor_por_defecto>",
        points: 15
    },
    {
        id: 13,
        topic: "dtd",
        difficulty: "medium",
        question: "¿Qué significa #REQUIRED en DTD?",
        options: ["El atributo es opcional", "El atributo es obligatorio", "El atributo debe ser un número", "El atributo es un ID"],
        correct: 1,
        explanation: "#REQUIRED significa que el atributo debe estar presente obligatoriamente.",
        points: 15
    },
    {
        id: 14,
        topic: "dtd",
        difficulty: "medium",
        question: "¿Cómo se define un elemento vacío en DTD?",
        options: ["<!ELEMENT nombre EMPTY>", "<!ELEMENT nombre VOID>", "<!ELEMENT nombre NULL>", "No se puede"],
        correct: 0,
        explanation: "EMPTY especifica que el elemento no puede contener contenido ni elementos anidados.",
        points: 15
    },
    {
        id: 15,
        topic: "dtd",
        difficulty: "hard",
        question: "¿Qué significa el operador | en una declaración DTD?",
        options: ["Aparece una sola vez", "O uno u otro elemento (alternancia)", "Y además otro elemento", "Repetición"],
        correct: 1,
        explanation: "| especifica que uno u otro elemento debe aparecer, pero no ambos.",
        points: 20
    },

    // === BLOQUE 3: XSD (5 preguntas) ===
    {
        id: 16,
        topic: "xsd",
        difficulty: "easy",
        question: "¿Qué es XML Schema (XSD)?",
        options: ["Un comentario en XML", "Un lenguaje para definir la estructura y validar documentos XML", "Una versión de XML", "Un tipo de atributo"],
        correct: 1,
        explanation: "XSD define reglas de estructura, tipos de datos, restricciones para XML.",
        points: 10
    },
    {
        id: 17,
        topic: "xsd",
        difficulty: "medium",
        question: "¿Cuál es el elemento raíz de un archivo XSD?",
        options: ["<schema>", "<xs:schema>", "<xsd:schema>", "<root>"],
        correct: 1,
        explanation: "El elemento raíz es <xs:schema> (o <xsd:schema>).",
        points: 15
    },
    {
        id: 18,
        topic: "xsd",
        difficulty: "medium",
        question: "¿Cómo se vincula un documento XML con un XSD?",
        options: ["Automáticamente", "Con xsi:schemaLocation en XML", "Con un comentario", "No se puede vincular"],
        correct: 1,
        explanation: "Se usa atributo xsi:schemaLocation: xsi:schemaLocation=\"URI\"",
        points: 15
    },
    {
        id: 19,
        topic: "xsd",
        difficulty: "hard",
        question: "¿Qué es minInclusive y maxInclusive en XSD?",
        options: ["Nombres de elementos", "Restricciones numéricas: min y max inclusivos", "Atributos de XML", "Comentarios"],
        correct: 1,
        explanation: "minInclusive/maxInclusive definen rangos válidos para números.",
        points: 20
    },
    {
        id: 20,
        topic: "xsd",
        difficulty: "medium",
        question: "¿Qué es maxLength en XSD?",
        options: ["Número máximo de elementos", "Longitud máxima permitida de una cadena", "Ancho máximo", "Profundidad máxima"],
        correct: 1,
        explanation: "maxLength define el número máximo de caracteres en un texto.",
        points: 15
    },

    // === BLOQUE 4: XPath (6 preguntas) ===
    {
        id: 21,
        topic: "xpath",
        difficulty: "medium",
        question: "¿Qué devuelve la expresión XPath //libro?",
        options: ["Solo el primer libro", "Todos los elementos <libro> en cualquier nivel", "El atributo libro", "Nada"],
        correct: 1,
        explanation: "// selecciona en cualquier nivel de profundidad.",
        points: 15
    },
    {
        id: 22,
        topic: "xpath",
        difficulty: "medium",
        question: "¿Cuál es la diferencia entre /libro y //libro?",
        options: ["No hay diferencia", "/: raíz; //: cualquier nivel", "/ es para atributos", "Ambas seleccionan lo mismo"],
        correct: 1,
        explanation: "/: desde raíz específicamente; //: en cualquier profundidad.",
        points: 15
    },
    {
        id: 23,
        topic: "xpath",
        difficulty: "medium",
        question: "¿Qué devuelve //libro[@id]?",
        options: ["Todos los libros", "Libros que tengan atributo id", "El atributo id", "Ninguno"],
        correct: 1,
        explanation: "[@id] es predicado que filtra por existencia del atributo.",
        points: 15
    },
    {
        id: 24,
        topic: "xpath",
        difficulty: "hard",
        question: "¿Qué devuelve //libro[@id='123']/titulo/text()?",
        options: ["El elemento titulo", "El texto del titulo de libro con id 123", "El atributo id", "Nada"],
        correct: 1,
        explanation: "/text() selecciona solo el contenido de texto de un nodo.",
        points: 20
    },
    {
        id: 25,
        topic: "xpath",
        difficulty: "medium",
        question: "¿Para qué sirve . y .. en XPath?",
        options: ["Separadores", ". es nodo actual, .. es nodo padre", "Son operadores", "No sirven para nada"],
        correct: 1,
        explanation: ". = nodo actual; .. = nodo padre.",
        points: 15
    },
    {
        id: 26,
        topic: "xpath",
        difficulty: "hard",
        question: "¿Cuál es el resultado de //libro[position()=1]?",
        options: ["Todos los libros", "El primer libro encontrado", "El último libro", "Nada"],
        correct: 1,
        explanation: "position() devuelve posición; [1] selecciona el primero.",
        points: 20
    },

    // === BLOQUE 5: XQuery (5 preguntas) ===
    {
        id: 27,
        topic: "xquery",
        difficulty: "easy",
        question: "¿Qué es XQuery?",
        options: ["Un lenguaje para consultar documentos XML", "Un tipo de XML", "Un validador", "Un navegador"],
        correct: 0,
        explanation: "XQuery es lenguaje de consulta funcional para XML, similar a SQL para bases de datos.",
        points: 10
    },
    {
        id: 28,
        topic: "xquery",
        difficulty: "medium",
        question: "¿Qué significa FLWOR en XQuery?",
        options: ["Flower (flor)", "For, Let, Where, Order by, Return", "File, Line, Word, Output, Retrieve", "Forward, Link, Web, Object, Record"],
        correct: 1,
        explanation: "FLWOR: For (iteración), Let (variable), Where (filtro), Order by (orden), Return (resultado).",
        points: 15
    },
    {
        id: 29,
        topic: "xquery",
        difficulty: "medium",
        question: "¿Cuál es la diferencia entre for y let en XQuery?",
        options: ["No hay diferencia", "for: itera; let: asigna variable sin iterar", "let es más rápido", "for es para filtrar"],
        correct: 1,
        explanation: "for itera sobre cada item; let asigna el resultado completo a una variable.",
        points: 15
    },
    {
        id: 30,
        topic: "xquery",
        difficulty: "hard",
        question: "¿Cuál es la estructura correcta de una consulta FLWOR?",
        options: ["for let where order return", "for/let where order by return", "return order where for let", "let for where return order"],
        correct: 1,
        explanation: "Orden: FOR → LET → WHERE → ORDER BY → RETURN",
        points: 20
    },
    {
        id: 31,
        topic: "xquery",
        difficulty: "medium",
        question: "En XQuery, ¿qué hace order by en FLWOR?",
        options: ["Ordena los resultados", "Ordena los elementos a procesar", "Filtra elementos", "Agrupa resultados"],
        correct: 0,
        explanation: "order by ordena los resultados finales del return.",
        points: 15
    },

    // === BLOQUE 6: XSLT (5 preguntas) ===
    {
        id: 32,
        topic: "xslt",
        difficulty: "easy",
        question: "¿Qué es XSLT?",
        options: ["Un lenguaje para validar XML", "Un lenguaje para transformar XML en otros formatos", "Un tipo de XML", "Un servidor web"],
        correct: 1,
        explanation: "XSLT es XSL Transformations, lenguaje para transformar documentos XML.",
        points: 10
    },
    {
        id: 33,
        topic: "xslt",
        difficulty: "medium",
        question: "¿Cuál es el elemento raíz de una hoja de estilos XSLT?",
        options: ["<xsl>", "<stylesheet>", "<xsl:stylesheet> o <xsl:transform>", "<transform>"],
        correct: 2,
        explanation: "El elemento raíz debe ser <xsl:stylesheet> o <xsl:transform>.",
        points: 15
    },
    {
        id: 34,
        topic: "xslt",
        difficulty: "medium",
        question: "¿Cuál es la diferencia entre <xsl:value-of> y <xsl:copy-of>?",
        options: ["No hay diferencia", "value-of: extrae texto; copy-of: copia el nodo completo", "copy-of es más rápido", "value-of copia nodos"],
        correct: 1,
        explanation: "value-of extrae el valor/texto; copy-of copia la estructura XML completa.",
        points: 15
    },
    {
        id: 35,
        topic: "xslt",
        difficulty: "hard",
        question: "¿Qué es una plantilla (template) en XSLT?",
        options: ["Un archivo CSS", "Un patrón con reglas para transformar nodos del documento XML", "Un comentario", "Un atributo"],
        correct: 1,
        explanation: "<xsl:template match=\"patrón\"> define reglas para transformar elementos que coincidan.",
        points: 20
    },
    {
        id: 36,
        topic: "xslt",
        difficulty: "medium",
        question: "¿Cómo se accede a un atributo en XSLT?",
        options: [".@atributo", "@atributo", "#atributo", "atributo::"],
        correct: 1,
        explanation: "@atributo accede al atributo de un elemento.",
        points: 15
    },

    // === BLOQUE 7: HTML5 (10 preguntas) ===
    {
        id: 37,
        topic: "html",
        difficulty: "easy",
        question: "¿Cuál es la estructura básica de un documento HTML5?",
        options: ["<html><body></body></html>", "<!DOCTYPE html><html><head><body></body></html>", "<documento>", "No necesita estructura"],
        correct: 1,
        explanation: "HTML5 comienza con <!DOCTYPE html> y tiene <head> y <body>.",
        points: 10
    },
    {
        id: 38,
        topic: "html",
        difficulty: "easy",
        question: "¿Para qué sirve la etiqueta <meta charset=\"UTF-8\">?",
        options: ["Define el tipo de lenguaje", "Define la codificación de caracteres", "Define el viewport", "Define el título"],
        correct: 1,
        explanation: "charset especifica la codificación: UTF-8 soporta caracteres internacionales.",
        points: 10
    },
    {
        id: 39,
        topic: "html",
        difficulty: "medium",
        question: "¿Para qué sirve <meta name=\"viewport\">?",
        options: ["Define el título", "Optimiza visualización en dispositivos móviles", "Define estilos", "Carga scripts"],
        correct: 1,
        explanation: "Viewport controla escala y tamaño en dispositivos móviles.",
        points: 15
    },
    {
        id: 40,
        topic: "html",
        difficulty: "medium",
        question: "¿Cuál es la estructura semántica correcta de un HTML5?",
        options: ["<body>, <main>, <section>, <article>, <aside>, <footer>", "<div>, <span>, <p>", "<table>, <tr>, <td>", "No importa la estructura"],
        correct: 0,
        explanation: "HTML5 introduce elementos semánticos: header, nav, main, section, article, aside, footer.",
        points: 15
    },
    {
        id: 41,
        topic: "html",
        difficulty: "hard",
        question: "¿Cuál es la diferencia entre <article> y <section> en HTML5?",
        options: ["No hay diferencia", "<article>: contenido independiente; <section>: agrupa contenido temático", "Son lo mismo", "<section> es más importante"],
        correct: 1,
        explanation: "<article> es contenido que podría ser distribuido independientemente.",
        points: 20
    },
    {
        id: 42,
        topic: "html",
        difficulty: "medium",
        question: "¿Para qué sirve el atributo 'lang' en HTML?",
        options: ["Define estilos", "Especifica el idioma del documento para navegadores y buscadores", "Carga scripts", "Define color"],
        correct: 1,
        explanation: "lang=\"es\" especifica idioma español para accesibilidad y SEO.",
        points: 15
    },
    {
        id: 43,
        topic: "html",
        difficulty: "easy",
        question: "¿Cuál es la etiqueta correcta para un formulario en HTML5?",
        options: ["<form>", "<formulario>", "<input>", "<field>"],
        correct: 0,
        explanation: "<form> es la etiqueta estándar HTML5 para formularios.",
        points: 10
    },
    {
        id: 44,
        topic: "html",
        difficulty: "medium",
        question: "¿Para qué sirve <meta name=\"description\">?",
        options: ["Define el título", "Proporciona descripción para motores de búsqueda", "Define estilos", "Carga imágenes"],
        correct: 1,
        explanation: "Meta description es utilizada por buscadores para mostrar resumen en resultados.",
        points: 15
    },
    {
        id: 45,
        topic: "html",
        difficulty: "medium",
        question: "¿Por qué usar <section> en lugar de <div> en HTML5?",
        options: ["Porque section es más rápido", "Porque es semánticamente significativo, mejora accesibilidad y SEO", "Porque <div> es obsoleto", "No hay diferencia"],
        correct: 1,
        explanation: "<section> indica contenido temáticamente relacionado, mejorando estructura y accesibilidad.",
        points: 15
    },
    {
        id: 46,
        topic: "html",
        difficulty: "medium",
        question: "¿Cuál es la función de <nav> en HTML5?",
        options: ["Define navegación del usuario entre páginas", "Define un párrafo", "Define un título", "Define un formulario"],
        correct: 0,
        explanation: "<nav> es para menús de navegación principal, breadcrumbs, índices.",
        points: 15
    },

    // === BLOQUE 8: CSS (10 preguntas) ===
    {
        id: 47,
        topic: "css",
        difficulty: "easy",
        question: "¿Cuál es la propiedad CSS para cambiar el tipo de letra?",
        options: ["text-style", "font-family", "letter-type", "typeface"],
        correct: 1,
        explanation: "font-family especifica la familia tipográfica del texto.",
        points: 10
    },
    {
        id: 48,
        topic: "css",
        difficulty: "easy",
        question: "¿Cuál es la diferencia entre margin y padding en CSS?",
        options: ["No hay diferencia", "margin: espacio externo; padding: espacio interno", "Son lo mismo", "Ambos son externos"],
        correct: 1,
        explanation: "margin es espacio fuera del borde; padding es espacio dentro del borde.",
        points: 15
    },
    {
        id: 49,
        topic: "css",
        difficulty: "medium",
        question: "¿Cómo se selecciona un elemento por ID en CSS?",
        options: [".id", "#id", "@id", "$id"],
        correct: 1,
        explanation: "#nombre_id selecciona el elemento con id=\"nombre_id\".",
        points: 15
    },
    {
        id: 50,
        topic: "css",
        difficulty: "medium",
        question: "¿Cómo se selecciona una clase en CSS?",
        options: ["#clase", ".clase", "@clase", ":clase"],
        correct: 1,
        explanation: ".nombre_clase selecciona elementos con class=\"nombre_clase\".",
        points: 15
    },
    {
        id: 51,
        topic: "css",
        difficulty: "medium",
        question: "¿Qué es Flexbox en CSS?",
        options: ["Un tipo de fuente", "Un modelo de diseño flexible para distribuir elementos", "Una animación", "Un color"],
        correct: 1,
        explanation: "Flexbox permite crear diseños flexibles y responsivos fácilmente.",
        points: 15
    },
    {
        id: 52,
        topic: "css",
        difficulty: "hard",
        question: "¿Para qué sirve display: grid en CSS?",
        options: ["Crea una lista", "Crea un sistema de grid bidimensional", "Define formato de texto", "Oculta elementos"],
        correct: 1,
        explanation: "Grid permite crear layouts complejos en 2D (filas y columnas).",
        points: 20
    },
    {
        id: 53,
        topic: "css",
        difficulty: "medium",
        question: "¿Qué es una media query en CSS?",
        options: ["Una pregunta en HTML", "Una consulta para aplicar estilos según dispositivo/pantalla", "Un tipo de fuente", "Un color"],
        correct: 1,
        explanation: "Media queries permiten diseños responsivos según tamaño de pantalla.",
        points: 15
    },
    {
        id: 54,
        topic: "css",
        difficulty: "easy",
        question: "¿Cuál es la propiedad para cambiar color de texto en CSS?",
        options: ["text-color", "color", "font-color", "letter-color"],
        correct: 1,
        explanation: "color define el color del texto.",
        points: 10
    },
    {
        id: 55,
        topic: "css",
        difficulty: "medium",
        question: "¿Cómo se especifica una fuente personalizada en CSS?",
        options: ["<font>", "@font-face", "@import font", "#font"],
        correct: 1,
        explanation: "@font-face permite importar y usar fuentes personalizadas.",
        points: 15
    },
    {
        id: 56,
        topic: "css",
        difficulty: "hard",
        question: "¿Qué es la especificidad en CSS?",
        options: ["Una regla de validación", "El peso/prioridad de los selectores CSS", "Un tipo de animación", "Un formato de fuente"],
        correct: 1,
        explanation: "Especificidad determina qué estilos se aplican cuando hay conflictos.",
        points: 20
    },

    // === BLOQUE 9: LENGUAJES DE MARCAS PROFUNDIZACIÓN (8 preguntas) ===
    {
        id: 57,
        topic: "markup",
        difficulty: "easy",
        question: "¿Cuál es la diferencia entre un lenguaje de marcas y un lenguaje de programación?",
        options: ["No hay diferencia", "Marcas: describen contenido; Programación: implementan lógica", "Marcas: son más complejos", "Programación: usa XML"],
        correct: 1,
        explanation: "Lenguajes de marcas describen estructura; lenguajes de programación implementan instrucciones lógicas.",
        points: 10
    },
    {
        id: 58,
        topic: "markup",
        difficulty: "medium",
        question: "¿Qué caracteriza a SGML (Standard Generalized Markup Language)?",
        options: ["Es un lenguaje de programación", "Es un estándar internacional para definir lenguajes de marcas", "Es una versión mejorada de HTML", "Es un tipo de XML"],
        correct: 1,
        explanation: "SGML es el estándar base del cual derivan XML y HTML.",
        points: 15
    },
    {
        id: 59,
        topic: "markup",
        difficulty: "medium",
        question: "¿Cuál es la relación entre HTML y SGML?",
        options: ["HTML es versión mejorada de SGML", "HTML es una aplicación de SGML", "SGML es una aplicación de HTML", "No hay relación"],
        correct: 1,
        explanation: "HTML es una aplicación específica de SGML definida con un DTD.",
        points: 15
    },
    {
        id: 60,
        topic: "markup",
        difficulty: "easy",
        question: "¿Qué es una etiqueta XML?",
        options: ["Un símbolo matemático", "Un par de marcas que delimitan contenido: <nombre>contenido</nombre>", "Un atributo de seguridad", "Un tipo de comentario"],
        correct: 1,
        explanation: "Las etiquetas XML delimitan contenido con pares: apertura <nombre> y cierre </nombre>.",
        points: 10
    },
    {
        id: 61,
        topic: "markup",
        difficulty: "medium",
        question: "¿Qué es un atributo en un elemento XML?",
        options: ["Contenido del elemento", "Información adicional en la etiqueta de apertura", "Un comentario", "Una etiqueta anidada"],
        correct: 1,
        explanation: "Atributo es información en <elemento atributo=\"valor\"> que describe el elemento.",
        points: 15
    },
    {
        id: 62,
        topic: "markup",
        difficulty: "medium",
        question: "¿Es válido este XML? <elemento atributo='valor'>contenido</elemento>",
        options: ["No, los atributos no pueden tener valor", "Sí, las comillas simples también son válidas", "No, los atributos deben ir sin valor", "Depende del DTD"],
        correct: 1,
        explanation: "En XML se aceptan comillas simples (') y dobles (\") para valores de atributos.",
        points: 15
    },
    {
        id: 63,
        topic: "markup",
        difficulty: "hard",
        question: "¿Cuál es la diferencia entre una entidad general y una entidad de parámetro en XML?",
        options: ["No hay diferencia", "General: texto sustituible; Parámetro: usado en DTDs", "General: es XML", "Parámetro: es para comentarios"],
        correct: 1,
        explanation: "General: se usa en documento; Parámetro: se usa en DTD/declaraciones.",
        points: 20
    },
    {
        id: 64,
        topic: "markup",
        difficulty: "medium",
        question: "¿Qué es una entidad predefinida en XML?",
        options: ["Una etiqueta especial", "Un símbolo predefinido como &lt; &gt; &amp; &quot; &apos;", "Un comentario", "Un espacio de nombres"],
        correct: 1,
        explanation: "Entidades predefinidas: &lt; (<), &gt; (>), &amp; (&), &quot; (\"), &apos; (').",
        points: 15
    },

    // === BLOQUE 10: SINDICACIÓN DE CONTENIDOS (10 preguntas) ===
    {
        id: 65,
        topic: "syndication",
        difficulty: "easy",
        question: "¿Qué es RSS (Really Simple Syndication)?",
        options: ["Un navegador web", "Un formato XML para distribuir contenido actualizado", "Un lenguaje de programación", "Un servidor de correo"],
        correct: 1,
        explanation: "RSS es formato XML que permite sindicar (distribuir) contenido como noticias.",
        points: 10
    },
    {
        id: 66,
        topic: "syndication",
        difficulty: "easy",
        question: "¿Cuál es la estructura básica de un feed RSS?",
        options: ["<html><body></body></html>", "<rss><channel><item></item></channel></rss>", "<xml><data></data></xml>", "<feed><post></post></feed>"],
        correct: 1,
        explanation: "RSS usa <rss> como raíz, <channel> para metadatos, <item> para contenido.",
        points: 10
    },
    {
        id: 67,
        topic: "syndication",
        difficulty: "medium",
        question: "¿Qué elementos son obligatorios en un canal RSS?",
        options: ["Solo <title>", "title, link, description", "Todos los elementos", "Ninguno"],
        correct: 1,
        explanation: "Elementos obligatorios en <channel>: title, link, description.",
        points: 15
    },
    {
        id: 68,
        topic: "syndication",
        difficulty: "medium",
        question: "¿Cuál es la diferencia entre RSS y Atom?",
        options: ["No hay diferencia", "RSS es XML, Atom es JSON", "Atom es alternativa moderna de RSS con especificación más clara", "RSS es más moderno"],
        correct: 2,
        explanation: "Atom es formato alternativo a RSS con especificación RFC más clara y estructurada.",
        points: 15
    },
    {
        id: 69,
        topic: "syndication",
        difficulty: "medium",
        question: "¿Qué significa la versión en <rss version=\"2.0\">?",
        options: ["Es software requerido", "Es especificación de RSS utilizada", "Es versión del navegador", "Es versión del servidor"],
        correct: 1,
        explanation: "Especifica qué versión de RSS se utiliza (2.0 es la más común).",
        points: 15
    },
    {
        id: 70,
        topic: "syndication",
        difficulty: "easy",
        question: "¿Para qué sirve un agregador de RSS?",
        options: ["Para crear videos", "Para compilar feeds de múltiples fuentes", "Para programar ordenadores", "Para escribir código"],
        correct: 1,
        explanation: "Agregador recopila y muestra contenido de múltiples feeds RSS en un solo lugar.",
        points: 10
    },
    {
        id: 71,
        topic: "syndication",
        difficulty: "medium",
        question: "¿Qué etiqueta en RSS especifica el URL del sitio web?",
        options: ["<site>", "<link>", "<url>", "<href>"],
        correct: 1,
        explanation: "<link> en RSS especifica URL del sitio o artículo.",
        points: 15
    },
    {
        id: 72,
        topic: "syndication",
        difficulty: "hard",
        question: "¿Cómo se especifica contenido HTML/XHTML dentro de RSS?",
        options: ["Se incluye directamente", "Se escapa con CDATA o se usa <content:encoded>", "No es posible", "Se usa un atributo especial"],
        correct: 1,
        explanation: "Se usa CDATA: <![CDATA[<html>]]> o extensión <content:encoded>.",
        points: 20
    },
    {
        id: 73,
        topic: "syndication",
        difficulty: "medium",
        question: "¿Para qué sirve la etiqueta <pubDate> en RSS?",
        options: ["Define el título", "Especifica fecha de publicación del artículo", "Define el autor", "Define la categoría"],
        correct: 1,
        explanation: "<pubDate> indica cuándo fue publicado el artículo (formato RFC 822).",
        points: 15
    },
    {
        id: 74,
        topic: "syndication",
        difficulty: "medium",
        question: "¿Qué significa OPML en relación a RSS?",
        options: ["Un tipo de fuente", "Formato para exportar/importar colecciones de feeds RSS", "Un navegador", "Un protocolo de red"],
        correct: 1,
        explanation: "OPML (Outline Processor Markup Language) almacena múltiples feeds en un archivo.",
        points: 15
    },

    // === BLOQUE 11: XPATH PROFUNDIZACIÓN (8 preguntas) ===
    {
        id: 75,
        topic: "xpath",
        difficulty: "medium",
        question: "¿Cómo se seleccionan todos los atributos de un elemento en XPath?",
        options: ["//elemento@", "//elemento@*", "//elemento/*", "//elemento[@*]"],
        correct: 1,
        explanation: "@* selecciona todos los atributos.",
        points: 15
    },
    {
        id: 76,
        topic: "xpath",
        difficulty: "easy",
        question: "¿Qué devuelve /elemento/subelemento?",
        options: ["Todos los subelementos", "Subelementos directos del elemento", "El elemento solo", "Nada"],
        correct: 1,
        explanation: "/ selecciona elementos secundarios directos del elemento especificado.",
        points: 10
    },
    {
        id: 77,
        topic: "xpath",
        difficulty: "hard",
        question: "¿Cuál es la sintaxis correcta para usar operadores lógicos en XPath?",
        options: ["and, or, not", "AND, OR, NOT", "&&, ||, !", "todas son válidas"],
        correct: 0,
        explanation: "XPath usa and, or, not (minúsculas) para operadores lógicos.",
        points: 20
    },
    {
        id: 78,
        topic: "xpath",
        difficulty: "medium",
        question: "¿Qué devuelve el predicado [posición] en XPath?",
        options: ["Todos los elementos", "El elemento en esa posición dentro del conjunto nodal", "El primer elemento", "El último elemento"],
        correct: 1,
        explanation: "[2] selecciona el segundo elemento, [last()] el último, etc.",
        points: 15
    },
    {
        id: 79,
        topic: "xpath",
        difficulty: "medium",
        question: "¿Para qué sirve la función count() en XPath?",
        options: ["Ordena elementos", "Cuenta el número de nodos", "Filtra contenido", "Agrupa resultados"],
        correct: 1,
        explanation: "count(nodos) devuelve el número de nodos en el conjunto.",
        points: 15
    },
    {
        id: 80,
        topic: "xpath",
        difficulty: "hard",
        question: "¿Qué devuelve //elemento[atributo > 5]?",
        options: ["Todos los elementos", "Elementos cuyo atributo tiene valor mayor a 5", "El atributo solo", "Nada"],
        correct: 1,
        explanation: "Los predicados pueden usar operadores de comparación (>, <, =, !=).",
        points: 20
    },
    {
        id: 81,
        topic: "xpath",
        difficulty: "medium",
        question: "¿Cuál es la función para obtener el último nodo en XPath?",
        options: ["last()", "end()", "final()", "ultimo()"],
        correct: 0,
        explanation: "last() devuelve la posición del último nodo en el conjunto.",
        points: 15
    },
    {
        id: 82,
        topic: "xpath",
        difficulty: "hard",
        question: "¿Qué devuelve //libro/descendant::*?",
        options: ["Los libros solo", "Todos los descendientes de cualquier nivel bajo libro", "Los hijos directos", "Nada"],
        correct: 1,
        explanation: "descendant:: selecciona todos los descendientes en cualquier profundidad.",
        points: 20
    },

    // === BLOQUE 12: XQUERY Y XSLT AVANZADO (10 preguntas) ===
    {
        id: 83,
        topic: "xquery",
        difficulty: "hard",
        question: "¿Cómo se concatenan strings en XQuery?",
        options: ["Operador +", "Operador ||", "Función concat()", "Separador ,"],
        correct: 2,
        explanation: "concat() o también operador || en algunos procesadores XQuery.",
        points: 20
    },
    {
        id: 84,
        topic: "xquery",
        difficulty: "hard",
        question: "¿Para qué sirven las llaves {} en XQuery dentro de construcción XML?",
        options: ["Para comentarios", "Para insertar dinámicamente valores de variables", "No sirven", "Para delimitación"],
        correct: 1,
        explanation: "Se usan en construcción directa: <libro>{$variable}</libro> para insertar contenido dinámico.",
        points: 20
    },
    {
        id: 85,
        topic: "xslt",
        difficulty: "hard",
        question: "¿Para qué sirve <xsl:for-each> en XSLT?",
        options: ["Para comentarios", "Para iterar sobre conjuntos de nodos", "Para crear bucles infinitos", "Para definir variables"],
        correct: 1,
        explanation: "<xsl:for-each> itera sobre cada nodo en el conjunto seleccionado.",
        points: 20
    },
    {
        id: 86,
        topic: "xslt",
        difficulty: "medium",
        question: "¿Qué hace <xsl:apply-templates>?",
        options: ["Aplica estilos CSS", "Aplica plantillas a nodos seleccionados", "Copia archivos", "Valida XML"],
        correct: 1,
        explanation: "<xsl:apply-templates> busca plantillas que coincidan con nodos.",
        points: 15
    },
    {
        id: 87,
        topic: "xslt",
        difficulty: "hard",
        question: "¿Para qué sirve <xsl:choose> en XSLT?",
        options: ["Para seleccionar elementos", "Para crear lógica condicional (if/else)", "Para iterar", "Para crear variables"],
        correct: 1,
        explanation: "<xsl:choose>, <xsl:when>, <xsl:otherwise> implementan condicionales.",
        points: 20
    },
    {
        id: 88,
        topic: "xslt",
        difficulty: "medium",
        question: "¿Cómo se define una variable en XSLT?",
        options: ["<variable>", "<xsl:variable>", "<var>", "<xsl:var>"],
        correct: 1,
        explanation: "<xsl:variable name=\"var\" select=\"expresión\"/> define variables.",
        points: 15
    },
    {
        id: 89,
        topic: "xslt",
        difficulty: "hard",
        question: "¿Qué significa mode en <xsl:template>?",
        options: ["Define estilos", "Agrupa plantillas para diferentes modos de procesamiento", "Define atributos", "Especifica formato"],
        correct: 1,
        explanation: "mode permite usar diferentes plantillas para el mismo elemento en contextos distintos.",
        points: 20
    },
    {
        id: 90,
        topic: "xslt",
        difficulty: "medium",
        question: "¿Para qué sirve <xsl:key> en XSLT?",
        options: ["Para definir claves de acceso", "Para crear índices de búsqueda rápida", "Para autenticación", "Para encriptación"],
        correct: 1,
        explanation: "<xsl:key> define índices para búsquedas eficientes con key().",
        points: 15
    },

    // === BLOQUE 13: CONCEPTOS GENERALES AVANZADOS (10 preguntas) ===
    {
        id: 91,
        topic: "general",
        difficulty: "medium",
        question: "¿Para qué sirve xmlns en XML?",
        options: ["Para declarar variables", "Para declarar espacios de nombres", "Para escribir comentarios", "Para definir atributos"],
        correct: 1,
        explanation: "Espacios de nombres evitan conflictos de nombres en XML.",
        points: 15
    },
    {
        id: 92,
        topic: "general",
        difficulty: "medium",
        question: "¿Cuál es la diferencia entre documento XML 'bien formado' y 'válido'?",
        options: ["Bien formado: cumple reglas XML; Válido: además cumple DTD/XSD", "Son lo mismo", "Válido: es más flexible", "Bien formado: tiene DOCTYPE"],
        correct: 0,
        explanation: "Bien formado: sintaxis correcta. Válido: bien formado + cumple reglas DTD/XSD.",
        points: 15
    },
    {
        id: 93,
        topic: "general",
        difficulty: "medium",
        question: "¿Qué es XHTML?",
        options: ["HTML con sintaxis XML más estricta", "Una versión mejorada de HTML", "JavaScript con XML", "Un tipo de servidor web"],
        correct: 0,
        explanation: "XHTML es HTML reformulado como XML, con sintaxis más rigurosa.",
        points: 15
    },
    {
        id: 94,
        topic: "general",
        difficulty: "easy",
        question: "Nombra 3 lenguajes basados en XML:",
        options: ["RSS, SVG, MathML", "HTML, CSS, JavaScript", "Python, Java, C++", "MySQL, PostgreSQL, SQLite"],
        correct: 0,
        explanation: "Ejemplos: RSS (sindicación), SVG (gráficos), MathML (matemáticas), KML (geolocalización).",
        points: 15
    },
    {
        id: 95,
        topic: "general",
        difficulty: "medium",
        question: "¿Para qué se usa una sección CDATA en XML?",
        options: ["Para incluir comentarios", "Para incluir texto que NO sea analizado por el parser", "Para definir atributos", "Para validar contenido"],
        correct: 1,
        explanation: "CDATA (<![CDATA[ ... ]]>) permite contenido sin ser procesado por el parser.",
        points: 15
    },
    {
        id: 96,
        topic: "general",
        difficulty: "hard",
        question: "¿Qué es una entidad predefinida en XML y cuáles son las 5 principales?",
        options: ["Variables", "Símbolos predefinidos: &lt; &gt; &amp; &quot; &apos;", "Funciones", "Atributos"],
        correct: 1,
        explanation: "&lt; (<), &gt; (>), &amp; (&), &quot; (\"), &apos; (') son las 5 entidades predefinidas.",
        points: 20
    },
    {
        id: 97,
        topic: "general",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de XML?",
        options: ["Reemplazar HTML", "Almacenar y transportar datos de forma estructurada y legible", "Programar aplicaciones", "Crear estilos"],
        correct: 1,
        explanation: "XML es un lenguaje para descripción de datos, enfocado en portabilidad e interoperabilidad.",
        points: 15
    },
    {
        id: 98,
        topic: "general",
        difficulty: "hard",
        question: "¿Qué es una declaración de tipo de documento (DOCTYPE) y para qué sirve?",
        options: ["Define variables", "Especifica la DTD y versión de documento que se usa", "Define estilos", "Carga recursos"],
        correct: 1,
        explanation: "<!DOCTYPE> declara qué DTD valida el documento y permite procesamiento específico.",
        points: 20
    },
    {
        id: 99,
        topic: "general",
        difficulty: "medium",
        question: "¿Cuál es la diferencia entre una aplicación XML y una aplicación de XML?",
        options: ["No hay diferencia", "Aplicación XML: usa XML como lenguaje base (RSS, SVG); de XML: procesa archivos XML", "Son lo mismo", "Aplicación XML es más simple"],
        correct: 1,
        explanation: "Aplicación XML: lenguaje basado en XML. Aplicación de XML: software que procesa XML.",
        points: 15
    },
    {
        id: 100,
        topic: "general",
        difficulty: "hard",
        question: "¿Cuál es la relación entre XML, XPath, XQuery y XSLT?",
        options: ["No hay relación", "XML es datos; XPath y XQuery consultan; XSLT transforma", "Son lo mismo", "Son lenguajes de programación"],
        correct: 1,
        explanation: "XML: formato de datos. XPath/XQuery: consultan XML. XSLT: transforma XML a otros formatos.",
        points: 20
    }
];

// Función para obtener preguntas aleatorias
function getShuffledQuestions(count = questions.length) {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Función para barajar opciones de una pregunta
function shuffleOptions(question) {
    const options = [...question.options];
    const correctAnswer = options[question.correct];
    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    
    return {
        ...question,
        options: shuffledOptions,
        correct: newCorrectIndex
    };
}
