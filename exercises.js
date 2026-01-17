// ===== EJERCICIOS INTERACTIVOS - DIFERENTES ESTILOS =====
// Ejercicios de: Completar código, Verdadero/Falso, Emparejar, Ordenar, Identificar errores

const exercises = [
    // === EJERCICIOS TIPO 1: COMPLETAR CÓDIGO XML ===
    {
        id: 1,
        type: "complete",
        topic: "xml",
        difficulty: "easy",
        title: "Completar estructura XML básica",
        instruction: "Completa el documento XML. Selecciona la opción correcta para cada espacio en blanco:",
        content: "&lt;?xml version=\"___1___\"?&gt;\n&lt;___2___&gt;\n  &lt;libro&gt;\n    &lt;titulo&gt;XML Avanzado&lt;/titulo&gt;\n  &lt;/libro&gt;\n&lt;/___2___&gt;",
        blanks: [
            {
                blankId: "___1___",
                options: ["\"1.0\"", "\"2.0\"", "\"3.0\""],
                correct: 0,
                explanation: "La versión XML siempre es 1.0"
            },
            {
                blankId: "___2___",
                options: ["catalogo", "biblioteca", "coleccion"],
                correct: 0,
                explanation: "El elemento raíz contiene todos los demás elementos"
            }
        ],
        explanation: "✅ Correcto. La declaración XML siempre va primero con version=\"1.0\", luego el elemento raíz (en este caso 'catalogo') que contiene todos los demás.",
        tip: "💡 Recuerda: XML siempre empieza con la declaración, luego un elemento raíz único que contiene todo lo demás.",
        points: 15
    },
    {
        id: 2,
        type: "complete",
        topic: "xsd",
        difficulty: "medium",
        title: "Completar definición XSD",
        instruction: "Completa la definición del atributo en XSD. Selecciona las opciones correctas:",
        content: "&lt;xs:attribute name=\"___1___\" type=\"___2___\" use=\"___3___\"/&gt;",
        blanks: [
            {
                blankId: "___1___",
                options: ["email", "nombre", "edad"],
                correct: 0,
                explanation: "El nombre del atributo es 'email'"
            },
            {
                blankId: "___2___",
                options: ["xs:string", "xs:integer", "xs:date"],
                correct: 0,
                explanation: "Un email es un texto, por lo que usa xs:string"
            },
            {
                blankId: "___3___",
                options: ["optional", "required", "forbidden"],
                correct: 1,
                explanation: "El 'use' en XSD define si es obligatorio (required) u opcional (optional)"
            }
        ],
        explanation: "✅ Correcto. Un atributo email de tipo string es obligatorio en XSD.",
        tip: "💡 En XSD: 'required' (obligatorio), 'optional' (opcional). Los atributos se definen con xs:attribute.",
        points: 20
    },

    // === EJERCICIOS TIPO 2: VERDADERO/FALSO ===
    {
        id: 3,
        type: "trueFalse",
        topic: "xml",
        difficulty: "easy",
        statement: "Los atributos en XML siempre deben ir entre comillas.",
        correct: true,
        explanation: "Correcto. Los atributos XML deben usar comillas: atributo=\"valor\"",
        tip: "💡 Esta es una regla de XML bien formado: los valores de atributos SIEMPRE van entre comillas simples o dobles.",
        points: 10
    },
    {
        id: 4,
        type: "trueFalse",
        topic: "dtd",
        difficulty: "medium",
        statement: "Un elemento con * en DTD puede aparecer de 1 a muchas veces.",
        correct: false,
        explanation: "Incorrecto. El * significa 0 o más veces. Para 1 o más, se usa el operador +",
        tip: "💡 Operadores DTD: * (0+), + (1+), ? (0-1), sin símbolo (exactamente 1). Aprende estos!",
        points: 15
    },
    {
        id: 5,
        type: "trueFalse",
        topic: "xpath",
        difficulty: "medium",
        statement: "XPath //elemento selecciona todos los elementos 'elemento' desde cualquier nivel.",
        correct: true,
        explanation: "Correcto. // busca en cualquier profundidad del árbol XML.",
        tip: "💡 // es muy potente en XPath: busca descendientes sin importar profundidad. / busca solo hijos directos.",
        points: 15
    },
    {
        id: 6,
        type: "trueFalse",
        topic: "xslt",
        difficulty: "hard",
        statement: "En XSLT, xsl:variable permite cambiar su valor después de ser asignada.",
        correct: false,
        explanation: "Incorrecto. Las variables en XSLT son inmutables. Una vez asignadas, no pueden cambiar.",
        tip: "💡 XSLT es un lenguaje funcional: las variables son como constantes inmutables. No se pueden reasignar.",
        points: 20
    },
    {
        id: 7,
        type: "trueFalse",
        topic: "css",
        difficulty: "medium",
        statement: "CSS Grid y CSS Flexbox sirven para lo mismo.",
        correct: false,
        explanation: "Incorrecto. Flexbox es unidimensional (filas O columnas), Grid es bidimensional (filas Y columnas).",
        tip: "💡 Usa Flexbox para layouts simples 1D, Grid para layouts complejos 2D. A veces los combinas!",
        points: 15
    },
    {
        id: 8,
        type: "trueFalse",
        topic: "html",
        difficulty: "easy",
        statement: "El elemento <article> debe tener siempre un <header>.",
        correct: false,
        explanation: "Incorrecto. <article> es independiente y no requiere <header>. El <header> es opcional.",
        tip: "💡 <article> es autosuficiente. El <header> es útil pero opcional dentro de <article>.",
        points: 10
    },

    // === EJERCICIOS TIPO 3: EMPAREJAR / MATCHING ===
    {
        id: 9,
        type: "matching",
        topic: "xml",
        difficulty: "medium",
        title: "Emparejar operadores DTD con su significado",
        instruction: "Empareja cada operador con su significado:",
        pairs: [
            {
                id: "op1",
                left: "+",
                rightOptions: ["Una o más veces", "Cero o más veces", "Exactamente una vez", "Cero o una vez"],
                correct: 0
            },
            {
                id: "op2",
                left: "*",
                rightOptions: ["Una o más veces", "Cero o más veces", "Exactamente una vez", "Cero o una vez"],
                correct: 1
            },
            {
                id: "op3",
                left: "?",
                rightOptions: ["Una o más veces", "Cero o más veces", "Exactamente una vez", "Cero o una vez"],
                correct: 3
            },
            {
                id: "op4",
                left: "(sin operador)",
                rightOptions: ["Una o más veces", "Cero o más veces", "Exactamente una vez", "Cero o una vez"],
                correct: 2
            }
        ],
        explanation: "Los operadores DTD controlan la frecuencia de aparición de elementos.",
        tip: "💡 DTD frecuencia: + es 'al menos uno', * es 'cero o más'. El + es más estricto que el *.",
        points: 20
    },
    {
        id: 10,
        type: "matching",
        topic: "xpath",
        difficulty: "medium",
        title: "Emparejar funciones XPath",
        instruction: "Empareja cada función con su descripción:",
        pairs: [
            {
                id: "func1",
                left: "count()",
                rightOptions: ["Convierte a string", "Cuenta nodos", "Devuelve el último", "Suma valores"],
                correct: 1
            },
            {
                id: "func2",
                left: "string()",
                rightOptions: ["Convierte a string", "Cuenta nodos", "Devuelve el último", "Suma valores"],
                correct: 0
            },
            {
                id: "func3",
                left: "last()",
                rightOptions: ["Convierte a string", "Cuenta nodos", "Devuelve el último", "Suma valores"],
                correct: 2
            },
            {
                id: "func4",
                left: "sum()",
                rightOptions: ["Convierte a string", "Cuenta nodos", "Devuelve el último", "Suma valores"],
                correct: 3
            }
        ],
        explanation: "Las funciones XPath manipulan y transforman datos de documentos XML.",
        tip: "💡 count() cuenta, string() convierte, last() devuelve el final, sum() suma. Nombres descriptivos!",
        points: 20
    },

    // === EJERCICIOS TIPO 4: ORDENAR ELEMENTOS ===
    {
        id: 11,
        type: "ordering",
        topic: "xml",
        difficulty: "medium",
        title: "Ordenar estructura XML correctamente",
        instruction: "Ordena los componentes de un documento XML en el orden correcto:",
        items: [
            "<?xml version=\"1.0\"?>",
            "<!DOCTYPE libro SYSTEM \"libro.dtd\">",
            "<libro>",
            "  <titulo>Guía de XML</titulo>",
            "</libro>"
        ],
        correctOrder: [0, 1, 2, 3, 4],
        explanation: "El orden correcto es: declaración XML → declaración DOCTYPE → elemento raíz con contenido.",
        tip: "💡 La declaración XML siempre va PRIMERO. Luego DOCTYPE, luego el elemento raíz.",
        points: 20
    },
    {
        id: 12,
        type: "ordering",
        topic: "xslt",
        difficulty: "hard",
        title: "Ordenar transformación XSLT",
        instruction: "Ordena los elementos XSLT en el orden correcto:",
        items: [
            "<xsl:for-each select=\"//libro\">",
            "  <libro>{{ $libro/titulo }}</libro>",
            "</xsl:for-each>",
            "<xsl:variable name=\"libro\" select=\".\"/>"
        ],
        correctOrder: [3, 0, 1, 2],
        explanation: "Primero se define la variable, luego se itera, luego se construye y cierra.",
        tip: "💡 En XSLT: define variables ANTES de usarlas, luego itera, luego construye el resultado.",
        points: 25
    },

    // === EJERCICIOS TIPO 5: IDENTIFICAR ERRORES ===
    {
        id: 13,
        type: "errorIdentification",
        topic: "xml",
        difficulty: "medium",
        title: "Identificar errores en XML",
        instruction: "Selecciona la línea que contiene un error:",
        code: [
            { line: 1, content: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" },
            { line: 2, content: "<biblioteca>" },
            { line: 3, content: "  <libro id=123>" },
            { line: 4, content: "    <titulo>XML Básico</titulo>" },
            { line: 5, content: "  </libro>" },
            { line: 6, content: "</biblioteca>" }
        ],
        errorLine: 3,
        explanation: "Línea 3: El atributo id debe estar entre comillas: id=\"123\"",
        tip: "💡 En XML bien formado, TODOS los atributos deben tener sus valores entre comillas.",
        points: 15
    },
    {
        id: 14,
        type: "errorIdentification",
        topic: "html",
        difficulty: "easy",
        title: "Identificar errores en HTML",
        instruction: "Selecciona la línea que contiene un error:",
        code: [
            { line: 1, content: "<!DOCTYPE html>" },
            { line: 2, content: "<html lang=\"es\">" },
            { line: 3, content: "  <head>" },
            { line: 4, content: "    <meta charset=UTF-8>" },
            { line: 5, content: "  </head>" },
            { line: 6, content: "</html>" }
        ],
        errorLine: 4,
        explanation: "Línea 4: El valor del atributo debe estar entre comillas: charset=\"UTF-8\"",
        tip: "💡 HTML requiere valores de atributos entre comillas, igual que XML. Esto es un error común!",
        points: 10
    },
    {
        id: 15,
        type: "errorIdentification",
        topic: "css",
        difficulty: "medium",
        title: "Identificar errores en CSS",
        instruction: "Selecciona la línea que contiene un error:",
        code: [
            { line: 1, content: ".container {" },
            { line: 2, content: "  display: flex;" },
            { line: 3, content: "  justify-content center;" },
            { line: 4, content: "  gap: 1rem;" },
            { line: 5, content: "}" }
        ],
        errorLine: 3,
        explanation: "Línea 3: Falta los dos puntos (:) después del nombre de la propiedad. Debe ser 'justify-content: center;'",
        tip: "💡 Sintaxis CSS: propiedad: valor; Los dos puntos son OBLIGATORIOS después del nombre de la propiedad.",
        points: 15
    },

    // === EJERCICIOS TIPO 6: RELLENAR BLANCOS (MULTILINEA) ===
    {
        id: 16,
        type: "fillBlanks",
        topic: "xquery",
        difficulty: "hard",
        title: "Completar consulta XQuery",
        instruction: "Completa la consulta XQuery FLWOR:",
        template: "___1___ $libro in //libros/libro\n___2___ $libro/precio > 20\n___3___ $libro/titulo/text()",
        blanks: [
            { blankId: 1, options: ["for", "let", "where"], correct: 0, label: "Cláusula de iteración" },
            { blankId: 2, options: ["for", "let", "where"], correct: 2, label: "Cláusula de filtro" },
            { blankId: 3, options: ["return", "select", "output"], correct: 0, label: "Cláusula de resultado" }
        ],
        explanation: "FLWOR = For (iteración), Let (variables), Where (filtro), Order by, Return (resultado)",
        tip: "💡 Recuerda: For itera, Let define variables, Where filtra. Luego Order by, finalmente Return.",
        points: 25
    },
    {
        id: 17,
        type: "fillBlanks",
        topic: "xpath",
        difficulty: "medium",
        title: "Completar expresión XPath",
        instruction: "Completa la expresión XPath:",
        template: "//libro[___1___]___2___",
        blanks: [
            { blankId: 1, options: ["@id='123'", "id='123'", "@id"], correct: 0, label: "Predicado" },
            { blankId: 2, options: ["/titulo", "titulo", "@titulo"], correct: 0, label: "Ruta" }
        ],
        explanation: "Los atributos en XPath se prefijan con @. El predicado va en corchetes.",
        tip: "💡 @ en XPath = atributo. Sin @ = elemento. Los predicados van en [corchetes].",
        points: 15
    },

    // === EJERCICIOS TIPO 7: MÚLTIPLE RESPUESTA (NO ÚNICA) ===
    {
        id: 18,
        type: "multipleCorrect",
        topic: "xsd",
        difficulty: "hard",
        question: "¿Cuáles son restricciones válidas en XSD? (Selecciona todas las correctas)",
        options: [
            { text: "minLength", correct: true },
            { text: "maxWeight", correct: false },
            { text: "pattern", correct: true },
            { text: "maxLength", correct: true },
            { text: "minWidth", correct: false },
            { text: "enumeration", correct: true }
        ],
        explanation: "Las restricciones válidas son: minLength, maxLength, pattern, enumeration, minInclusive, maxInclusive, etc.",
        tip: "💡 XSD restricciones comunes: minLength/maxLength (longitud), pattern (formato), enumeration (lista de valores).",
        points: 20
    },
    {
        id: 19,
        type: "multipleCorrect",
        topic: "html",
        difficulty: "medium",
        question: "¿Cuáles son elementos semánticos de HTML5? (Selecciona todas las correctas)",
        options: [
            { text: "<section>", correct: true },
            { text: "<div>", correct: false },
            { text: "<article>", correct: true },
            { text: "<span>", correct: false },
            { text: "<nav>", correct: true },
            { text: "<aside>", correct: true }
        ],
        explanation: "Elementos semánticos: <section>, <article>, <nav>, <aside>, <header>, <footer>, <main>",
        tip: "💡 Semánticos: section, article, nav, aside, header, footer, main. Genéricos: div, span.",
        points: 20
    },

    // === SEGUNDA TANDA DE EJERCICIOS (20-37) ===
    
    // === TIPO COMPLETAR: NIVEL AVANZADO ===
    {
        id: 20,
        type: "complete",
        topic: "xslt",
        difficulty: "hard",
        title: "Completar transformación XSLT",
        instruction: "Completa la plantilla XSLT. Selecciona las opciones correctas:",
        content: "&lt;xsl:template ___1___ =\"/libro\"&gt;\n  &lt;html&gt;\n    &lt;body&gt;\n      &lt;h1&gt;&lt;xsl:___2___ ___3___=\"titulo\"/&gt;&lt;/h1&gt;\n      &lt;p&gt;&lt;xsl:___4___ select=\"autor\"/&gt;&lt;/p&gt;\n    &lt;/body&gt;\n  &lt;/html&gt;\n&lt;/xsl:template&gt;",
        blanks: [
            {
                blankId: "___1___",
                options: ["match", "select", "name"],
                correct: 0,
                explanation: "Template match se usa para seleccionar qué elementos procesar"
            },
            {
                blankId: "___2___",
                options: ["value-of", "copy-of", "for-each"],
                correct: 0,
                explanation: "value-of extrae el valor de un elemento"
            },
            {
                blankId: "___3___",
                options: ["select", "mode", "match"],
                correct: 0,
                explanation: "select especifica la ruta XPath a procesar"
            },
            {
                blankId: "___4___",
                options: ["value-of", "copy-of", "for-each"],
                correct: 0,
                explanation: "También usamos value-of para extraer el autor"
            }
        ],
        explanation: "✅ En XSLT:\n- template match=\"/libro\" → procesa elementos libro\n- xsl:value-of select=\"titulo\" → extrae el valor de titulo\n- xsl:value-of select=\"autor\" → extrae el valor de autor",
        tip: "💡 Recuerda: match selecciona QUÉ elementos procesar, select (en value-of) selecciona QUÉ valor extraer usando XPath.",
        points: 25
    },
    {
        id: 21,
        type: "complete",
        topic: "xpath",
        difficulty: "hard",
        title: "Completar expresión XPath compleja",
        instruction: "Completa la expresión XPath:",
        content: "//libro[___1___]/___2___[___3___=\\\"Cervantes\\\"]/___4___",
        blanks: [
            {
                blankId: "___1___",
                options: ["@año>2000", "@año<2000", "@año=2000"],
                correct: 0
            },
            {
                blankId: "___2___",
                options: ["autor", "titulo", "precio"],
                correct: 0
            },
            {
                blankId: "___3___",
                options: ["text()", ".", "name()"],
                correct: 1
            },
            {
                blankId: "___4___",
                options: ["titulo", "texto()", "valor"],
                correct: 0
            }
        ],
        explanation: "Los predicados filtran por atributos (@atrib), el punto (.) referencia al nodo actual.",
        tip: "💡 XPath: @ para atributos, [predicado] para filtrar, . para nodo actual, text() para contenido.",
        points: 25
    },

    // === TIPO VERDADERO/FALSO: NIVEL AVANZADO ===
    {
        id: 22,
        type: "truefalse",
        topic: "dtd",
        difficulty: "hard",
        question: "En DTD, el operador ? significa 'exactamente cero o uno'. ¿Verdadero o Falso?",
        correct: true,
        explanation: "Correcto. El operador ? en DTD indica 'opcional' (0 ó 1 aparición).",
        tip: "💡 ? = opcional (0 ó 1). * = 0 o más. + = 1 o más. Sin símbolo = exactamente 1.",
        points: 10
    },
    {
        id: 23,
        type: "truefalse",
        topic: "xsd",
        difficulty: "hard",
        question: "Las facetas de restricción en XSD se aplican directamente al tipo base sin crear un nuevo tipo. ¿Verdadero o Falso?",
        correct: false,
        explanation: "Falso. Para usar restricciones, se debe crear un nuevo tipo derivado usando simpleType con restriction.",
        tip: "💡 XSD: para restringir, debes crear un nuevo simpleType con restriction. No modifiques el tipo base!",
        points: 10
    },
    {
        id: 24,
        type: "truefalse",
        topic: "xpath",
        difficulty: "medium",
        question: "La función string-length() en XPath devuelve el número de caracteres en una cadena. ¿Verdadero o Falso?",
        correct: true,
        explanation: "Correcto. string-length() cuenta caracteres incluyendo espacios y caracteres especiales.",
        tip: "💡 string-length() cuenta TODO: letras, números, espacios, caracteres especiales. Todo!",
        points: 10
    },
    {
        id: 25,
        type: "truefalse",
        topic: "xquery",
        difficulty: "hard",
        question: "En XQuery, la cláusula 'where' evalúa condiciones después de agrupar elementos. ¿Verdadero o Falso?",
        correct: false,
        explanation: "Falso. 'where' evalúa condiciones durante la iteración, no después. El orden es: for, let, where, order by, return.",
        tip: "💡 Orden FLWOR: FOR (itera) → LET (variables) → WHERE (filtra) → ORDER BY → RETURN. Fijo!",
        points: 10
    },
    {
        id: 26,
        type: "truefalse",
        topic: "css",
        difficulty: "medium",
        question: "La especificidad en CSS de un ID (#id) es mayor que la de 10 clases (.class). ¿Verdadero o Falso?",
        correct: true,
        explanation: "Correcto. Especificidad: elemento=1, clase=10, ID=100. Un ID supera 10 clases.",
        tip: "💡 Especificidad CSS: elemento (1) < clase (10) < ID (100). Los IDs ganan siempre!",
        points: 10
    },

    // === TIPO EMPAREJAR: NIVEL INTERMEDIO/AVANZADO ===
    {
        id: 27,
        type: "matching",
        topic: "xsd",
        difficulty: "medium",
        title: "Emparejar tipos de datos XSD con ejemplos",
        instruction: "Empareja cada tipo XSD con su ejemplo válido:",
        pairs: [
            {
                id: "xsdtype1",
                left: "xs:date",
                rightOptions: ["2024-01-15", "15/01/2024", "2024/01/15", "January 15, 2024"],
                correct: 0
            },
            {
                id: "xsdtype2",
                left: "xs:boolean",
                rightOptions: ["true", "1", "yes", "sí"],
                correct: 0
            },
            {
                id: "xsdtype3",
                left: "xs:positiveInteger",
                rightOptions: ["0", "100", "-50", "25.5"],
                correct: 1
            },
            {
                id: "xsdtype4",
                left: "xs:decimal",
                rightOptions: ["3.14", "tres", "3/4", "3e2"],
                correct: 0
            }
        ],
        explanation: "Tipos XSD tienen formatos específicos: dates en ISO 8601, booleanos true/false, números sin decimales o con.",
        tip: "💡 Formatos XSD: dates (AAAA-MM-DD), booleanos (true/false), decimales (puntos, no comas).",
        points: 20
    },
    {
        id: 28,
        type: "matching",
        topic: "xquery",
        difficulty: "hard",
        title: "Emparejar funciones XQuery con su descripción",
        instruction: "Empareja cada función con su propósito:",
        pairs: [
            {
                id: "xqfn1",
                left: "distinct-values()",
                rightOptions: ["Elimina duplicados", "Cuenta elementos", "Ordena valores", "Crea secuencia"],
                correct: 0
            },
            {
                id: "xqfn2",
                left: "avg()",
                rightOptions: ["Promedio de valores", "Máximo valor", "Mínimo valor", "Suma total"],
                correct: 0
            },
            {
                id: "xqfn3",
                left: "subsequence()",
                rightOptions: ["Obtiene sub-secuencia", "Divide secuencia", "Combina secuencias", "Invierte orden"],
                correct: 0
            },
            {
                id: "xqfn4",
                left: "doc()",
                rightOptions: ["Accede documento XML", "Crea documento", "Valida documento", "Exporta documento"],
                correct: 0
            }
        ],
        explanation: "XQuery proporciona funciones específicas para manipular y analizar documentos XML.",
        tip: "💡 XQuery: distinct-values (sin duplicados), avg (promedio), subsequence (parte de secuencia), doc (carga XML).",
        points: 20
    },

    // === TIPO ORDENAR: NIVEL MEDIO ===
    {
        id: 29,
        type: "ordering",
        topic: "xsd",
        difficulty: "medium",
        title: "Ordenar estructura de validación XSD",
        instruction: "Ordena los pasos correctamente para crear un elemento restrictivo en XSD:",
        items: [
            "1. Abrir elemento <xs:element>",
            "2. Definir <xs:simpleType> para el tipo",
            "3. Dentro, crear <xs:restriction base=\"xs:string\">",
            "4. Agregar facetas: minLength, maxLength, pattern",
            "5. Cerrar restriction, simpleType y element"
        ],
        correctOrder: [0, 1, 2, 3, 4],
        explanation: "La estructura XSD sigue un orden jerárquico: elemento → tipo → restricción → facetas.",
        tip: "💡 XSD orden: element → simpleType → restriction → facetas. Siempre en este orden jerárquico.",
        points: 20
    },
    {
        id: 30,
        type: "ordering",
        topic: "xquery",
        difficulty: "hard",
        title: "Ordenar cláusulas FLWOR correctamente",
        instruction: "Ordena las cláusulas FLWOR en el orden correcto:",
        items: [
            "for $libro in doc('libros.xml')//libro",
            "let $precio := $libro/precio",
            "where $precio > 20",
            "order by $libro/titulo",
            "return <libro>{$libro/titulo/text()}</libro>"
        ],
        correctOrder: [0, 1, 2, 3, 4],
        explanation: "El orden FLWOR es: For → Let → Where → Order By → Return. Este es el orden lógico obligatorio.",
        tip: "💡 FLWOR rígido: For (itera) → Let (variables) → Where (filtra) → Order By (ordena) → Return (resultado).",
        points: 20
    },

    // === TIPO IDENTIFICAR ERRORES: NIVEL MEDIO/AVANZADO ===
    {
        id: 31,
        type: "errorIdentification",
        topic: "xml",
        difficulty: "medium",
        title: "Identificar errores en documento XML",
        instruction: "Identifica todos los errores en este documento XML:",
        code: "<?xml version=\"1.0\"?>\n<catalogo>\n  <libro id=\"1\">\n    <titulo>XML Basics</titulo\n    <autor>García</autor>\n  </libro\n  <libro id=2>\n    <titulo>XSD Guide</titulo>\n    <precio>€25.99</precio>\n  </libro>\n</catalogo>",
        errors: [
            "Línea 4: Falta '>' al cerrar <titulo",
            "Línea 6: Falta '>' al cerrar </libro",
            "Línea 7: El atributo id debe estar entre comillas: id=\"2\"",
            "Línea 9: Carácter especial € debe estar escapado como &euro; o número"
        ],
        explanation: "XML requiere: cierre correcto de etiquetas, atributos entrecomillados, caracteres especiales escapados.",
        tip: "💡 XML bien formado: etiquetas cerradas (</), atributos con comillas, caracteres especiales con & (& &lt; &gt; &quot; &apos;).",
        points: 20
    },
    {
        id: 32,
        type: "errorIdentification",
        topic: "xsd",
        difficulty: "hard",
        title: "Identificar errores en esquema XSD",
        instruction: "¿Cuál es el error en esta definición XSD?",
        code: "<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\">\n  <xs:element name=\"producto\">\n    <xs:complexType>\n      <xs:sequence>\n        <xs:element name=\"nombre\" type=\"xs:string\"/>\n        <xs:element name=\"precio\" type=\"xs:integer\" minOccurs=\"0\"/>\n        <xs:attribute name=\"id\" type=\"xs:string\" use=\"required\"/>\n      </xs:sequence>\n    </xs:complexType>\n  </xs:element>\n</xs:schema>",
        errors: [
            "Los atributos deben ir después de la secuencia en un complexType",
            "Debería ser: xs:sequence, luego xs:attribute (no dentro de la secuencia)"
        ],
        explanation: "En XSD, el orden en complexType es: grupo de modelo (sequence/choice/all) → atributos.",
        tip: "💡 XSD complexType: PRIMERO sequence/choice/all, LUEGO attributes. Nunca atributos dentro de sequence!",
        points: 20
    },

    // === TIPO RELLENAR BLANCOS: NIVEL MEDIO ===
    {
        id: 33,
        type: "fillBlanks",
        topic: "html",
        difficulty: "medium",
        title: "Rellenar código HTML semántico",
        instruction: "Completa el documento HTML5 con etiquetas semánticas:",
        blanks: [
            {
                text: "El elemento _____ contiene el contenido principal de la página.",
                answer: "main",
                options: ["main", "section", "article", "container"]
            },
            {
                text: "Para definir la barra de navegación usamos _____.",
                answer: "nav",
                options: ["nav", "menu", "header", "ul"]
            },
            {
                text: "El elemento _____ representa contenido relacionado o una barra lateral.",
                answer: "aside",
                options: ["aside", "section", "div", "sidebar"]
            },
            {
                text: "Para pie de página usamos _____.",
                answer: "footer",
                options: ["footer", "bottom", "end", "section"]
            }
        ],
        explanation: "HTML5 tiene elementos semánticos que describen el significado del contenido.",
        tip: "💡 HTML5 semánticos: <main> (contenido principal), <nav> (navegación), <aside> (lateral), <footer> (pie).",
        points: 20
    },
    {
        id: 34,
        type: "fillBlanks",
        topic: "css",
        difficulty: "medium",
        title: "Rellenar propiedades CSS",
        instruction: "Completa las propiedades CSS:",
        blanks: [
            {
                text: "Para cambiar el tipo de fuente usamos _____.",
                answer: "font-family",
                options: ["font-family", "font-type", "text-font", "typeface"]
            },
            {
                text: "La propiedad _____ controla el espacio interior de un elemento.",
                answer: "padding",
                options: ["padding", "margin", "spacing", "indent"]
            },
            {
                text: "Para hacer un elemento invisible pero ocupando espacio usamos _____:hidden.",
                answer: "visibility",
                options: ["display", "visibility", "hidden", "opacity"]
            }
        ],
        explanation: "CSS ofrece propiedades para controlar tipografía, espaciado y visibilidad.",
        tip: "💡 CSS: font-family (tipo de letra), padding (interior), visibility (invisible pero espacio), display (ocultar sin espacio).",
        points: 20
    },

    // === TIPO MÚLTIPLES CORRECTAS: NIVEL MEDIO/AVANZADO ===
    {
        id: 35,
        type: "multipleCorrect",
        topic: "xpath",
        difficulty: "medium",
        question: "¿Cuáles de las siguientes son expresiones XPath válidas? (Selecciona todas las correctas)",
        options: [
            { text: "//elemento[@atributo]", correct: true },
            { text: "//elemento[1]", correct: true },
            { text: "//elemento[@atributo='valor']", correct: true },
            { text: "//elemento[@]", correct: false },
            { text: "//elemento[text()='contenido']", correct: true },
            { text: "//[elemento]", correct: false }
        ],
        explanation: "XPath válido: predicados con atributos, posiciones, valores. No válido: atributo sin nombre, selectores inversos.",
        tip: "💡 XPath válido: [@atributo], [1], [@attr='valor'], [text()='...'] . Inválido: [@], //[elemento].",
        points: 20
    },
    {
        id: 36,
        type: "multipleCorrect",
        topic: "xslt",
        difficulty: "hard",
        question: "¿Cuáles de las siguientes son buenas prácticas en XSLT? (Selecciona todas las correctas)",
        options: [
            { text: "Usar plantillas con match para parámetros documentales", correct: true },
            { text: "Evitar mode para evitar complejidad", correct: false },
            { text: "Usar xsl:key para búsquedas frecuentes", correct: true },
            { text: "Procesar todos los nodos con un único for-each", correct: false },
            { text: "Reutilizar plantillas con parámetros (xsl:param)", correct: true },
            { text: "Mezclar lógica XML con templates sin separación", correct: false }
        ],
        explanation: "XSLT efectivo: usa templates, modes, keys, parámetros. Evita: procesamiento lineal, lógica mezclada.",
        tip: "💡 XSLT bueno: templates reutilizables, keys para búsquedas rápidas, parámetros flexibles, modes para casos complejos.",
        points: 25
    },
    {
        id: 37,
        type: "multipleCorrect",
        topic: "markup",
        difficulty: "medium",
        question: "¿Cuáles de estas son características de un buen markup? (Selecciona todas las correctas)",
        options: [
            { text: "Separación de contenido y presentación", correct: true },
            { text: "Etiquetas semánticas que describen el contenido", correct: true },
            { text: "Uso de demasiados divs anidados para estructura", correct: false },
            { text: "Validación contra un esquema (DTD o XSD)", correct: true },
            { text: "Caracteres especiales sin escapar para simplificar", correct: false },
            { text: "Estructura bien formada y documentada", correct: true }
        ],
        explanation: "Buen markup: semántico, válido, bien estructurado, escalable. Evita: mezcla de estilos, caracteres sin escapar.",
        tip: "💡 Markup de calidad: semántico (describe significado), válido (sin errores), accesible, mantenible. Nada de hacks!",
        points: 20
    },

    // ===== BATERÍA NUEVA: IDENTIFICAR ERRORES EN CÓDIGO =====
    // XML - Errores Comunes
    {
        id: 38,
        type: "errorIdentification",
        topic: "xml",
        difficulty: "medium",
        title: "Error en declaración XML",
        instruction: "Selecciona la línea que contiene un error y explica por qué:",
        code: [
            { line: 1, content: "<?xml version=\"1.0\" encoding=\"UTF-8?>" },
            { line: 2, content: "<documento>" },
            { line: 3, content: "  <contenido>Hola Mundo</contenido>" },
            { line: 4, content: "</documento>" }
        ],
        errorLine: 1,
        explanation: "❌ Línea 1: Falta cerrar correctamente la declaración XML. Debe ser: <?xml version=\"1.0\" encoding=\"UTF-8\"?>",
        tip: "💡 La declaración XML SIEMPRE debe terminar con ?> (con cierre correcto)",
        points: 10
    },
    {
        id: 39,
        type: "errorIdentification",
        topic: "xml",
        difficulty: "medium",
        title: "Error: Etiqueta no cerrada",
        instruction: "¿Dónde está el error en este XML?",
        code: [
            { line: 1, content: "<?xml version=\"1.0\"?>" },
            { line: 2, content: "<personas>" },
            { line: 3, content: "  <persona>" },
            { line: 4, content: "    <nombre>Juan</nombre>" },
            { line: 5, content: "    <edad>25</edad>" },
            { line: 6, content: "</personas>" }
        ],
        errorLine: 3,
        explanation: "❌ Línea 3: La etiqueta <persona> se abre pero nunca se cierra con </persona>. Debe haber </persona> antes de cerrar </personas>",
        tip: "💡 En XML bien formado, TODA etiqueta abierta DEBE cerrarse. Verifica que cada < tenga su correspondiente </",
        points: 15
    },
    {
        id: 40,
        type: "errorIdentification",
        topic: "xml",
        difficulty: "easy",
        title: "Error: Espacios en nombres de elementos",
        instruction: "Identifica el error:",
        code: [
            { line: 1, content: "<?xml version=\"1.0\"?>" },
            { line: 2, content: "<mi documento>" },
            { line: 3, content: "  <titulo>XML Errors</titulo>" },
            { line: 4, content: "</mi documento>" }
        ],
        errorLine: 2,
        explanation: "❌ Línea 2: Los nombres de elementos NO pueden tener espacios. Debe ser: <mi_documento> o <miDocumento>",
        tip: "💡 Nombres válidos: usa _ o camelCase. Inválidos: espacios, caracteres especiales, empezar con números",
        points: 10
    },
    {
        id: 41,
        type: "errorIdentification",
        topic: "xml",
        difficulty: "medium",
        title: "Error: Caracteres especiales sin escapar",
        instruction: "¿Qué línea tiene el error?",
        code: [
            { line: 1, content: "<?xml version=\"1.0\"?>" },
            { line: 2, content: "<mensaje>" },
            { line: 3, content: "  <texto>El precio es 5 < 10 pesos</texto>" },
            { line: 4, content: "</mensaje>" }
        ],
        errorLine: 3,
        explanation: "❌ Línea 3: El carácter < debe escaparse como &lt;. Correcto: El precio es 5 &lt; 10 pesos",
        tip: "💡 Caracteres especiales en XML: < es &lt;, > es &gt;, & es &amp;, \" es &quot;, ' es &apos;",
        points: 15
    },

    // DTD - Errores Comunes
    {
        id: 42,
        type: "errorIdentification",
        topic: "dtd",
        difficulty: "medium",
        title: "Error en declaración DTD",
        instruction: "Selecciona la línea con el error:",
        code: [
            { line: 1, content: "<?xml version=\"1.0\"?>" },
            { line: 2, content: "<!DOCTYPE libro [" },
            { line: 3, content: "  <!ELEMENT libro (titulo, autor+" },
            { line: 4, content: "  <!ELEMENT titulo (#PCDATA)>" },
            { line: 5, content: "]>" },
            { line: 6, content: "<libro><titulo>XML Pro</titulo><autor>Juan</autor></libro>" }
        ],
        errorLine: 3,
        explanation: "❌ Línea 3: Falta cerrar la declaración del elemento. Debe ser: <!ELEMENT libro (titulo, autor+)>",
        tip: "💡 En DTD: <!ELEMENT nombre (contenido)> - Recuerda cerrar SIEMPRE con >",
        points: 15
    },
    {
        id: 43,
        type: "errorIdentification",
        topic: "dtd",
        difficulty: "medium",
        title: "Error: Operador DTD inválido",
        instruction: "¿Cuál es el error?",
        code: [
            { line: 1, content: "<!ELEMENT persona (nombre, apellido*)>" },
            { line: 2, content: "<!ELEMENT nombre (#PCDATA)>" },
            { line: 3, content: "<!ELEMENT apellido (#PCDATA)>" },
            { line: 4, content: "<!ATTLIST persona id ID & REQUIRED>" }
        ],
        errorLine: 4,
        explanation: "❌ Línea 4: El operador es incorrecto. Debe ser: <!ATTLIST persona id ID #REQUIRED> (# no &)",
        tip: "💡 En DTD: #REQUIRED (obligatorio), #IMPLIED (opcional), #FIXED (fijo). El # es importante!",
        points: 15
    },

    // XSD/Schema - Errores Comunes
    {
        id: 44,
        type: "errorIdentification",
        topic: "xsd",
        difficulty: "medium",
        title: "Error en declaración XSD",
        instruction: "Identifica el error en el esquema:",
        code: [
            { line: 1, content: "<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\">" },
            { line: 2, content: "  <xs:element name=\"persona\" type=\"Persona\" />" },
            { line: 3, content: "  <xs:complexType name=\"Persona\"" },
            { line: 4, content: "    <xs:sequence>" },
            { line: 5, content: "      <xs:element name=\"nombre\" type=\"xs:string\" />" },
            { line: 6, content: "    </xs:sequence>" },
            { line: 7, content: "  </xs:complexType>" },
            { line: 8, content: "</xs:schema>" }
        ],
        errorLine: 3,
        explanation: "❌ Línea 3: Falta cerrar correctamente la etiqueta. Debe ser: <xs:complexType name=\"Persona\">",
        tip: "💡 En XSD: usa > para abrir, </xs:complexType> para cerrar. No uses />",
        points: 15
    },
    {
        id: 45,
        type: "errorIdentification",
        topic: "xsd",
        difficulty: "medium",
        title: "Error en restricción XSD",
        instruction: "¿Dónde está el error?",
        code: [
            { line: 1, content: "<xs:element name=\"edad\" type=\"xs:integer\">" },
            { line: 2, content: "  <xs:simpleType>" },
            { line: 3, content: "    <xs:restriction base=\"xs:integer\">" },
            { line: 4, content: "      <xs:minInclusive value=\"0\" />" },
            { line: 5, content: "      <xs:maxInclusive value=100 />" },
            { line: 6, content: "    </xs:restriction>" },
            { line: 7, content: "  </xs:simpleType>" },
            { line: 8, content: "</xs:element>" }
        ],
        errorLine: 5,
        explanation: "❌ Línea 5: El valor debe estar entre comillas. Debe ser: value=\"100\"",
        tip: "💡 En XSD, TODOS los atributos necesitan comillas: value=\"100\", no value=100",
        points: 15
    },

    // XPath - Errores Comunes
    {
        id: 46,
        type: "errorIdentification",
        topic: "xpath",
        difficulty: "medium",
        title: "Error en expresión XPath",
        instruction: "¿Cuál es la expresión XPath incorrecta?",
        code: [
            { line: 1, content: "// Búsqueda correcta:" },
            { line: 2, content: "//libro[autor=\"Cervantes\"]" },
            { line: 3, content: "// Búsqueda incorrecta:" },
            { line: 4, content: "//libro[author=\"Cervantes\"]" }
        ],
        errorLine: 4,
        explanation: "❌ Línea 4: El atributo es 'autor', no 'author'. Debe ser: //libro[autor=\"Cervantes\"]",
        tip: "💡 En XPath, debe coincidir EXACTAMENTE con el nombre del elemento en el XML",
        points: 15
    },
    {
        id: 47,
        type: "errorIdentification",
        topic: "xpath",
        difficulty: "easy",
        title: "Error: Confundir / y //",
        instruction: "¿Cuál expresión es incorrecta para buscar 'titulo' en cualquier 'libro'?",
        code: [
            { line: 1, content: "// Correcto - busca en cualquier profundidad:" },
            { line: 2, content: "//libro/titulo" },
            { line: 3, content: "// Incorrecto - solo busca hijos directos:" },
            { line: 4, content: "/biblioteca/libro/titulo" }
        ],
        errorLine: 4,
        explanation: "❌ Línea 4: Si hay niveles entre biblioteca y libro, no funcionará. La línea 4 es DEMASIADO específica",
        tip: "💡 Usa // para flexibilidad: //libro/titulo encuentra libros a cualquier profundidad",
        points: 10
    },

    // XQuery - Errores Comunes
    {
        id: 48,
        type: "errorIdentification",
        topic: "xquery",
        difficulty: "medium",
        title: "Error en sintaxis FLWOR",
        instruction: "Identifica el error en la consulta XQuery:",
        code: [
            { line: 1, content: "for $libro in //libro" },
            { line: 2, content: "let $precio := $libro/precio" },
            { line: 3, content: "where $libro/año > 2000" },
            { line: 4, content: "order by $libro/titulo" },
            { line: 5, content: "return $libro/titulo" }
        ],
        errorLine: 1,
        explanation: "❌ Línea 1: Falta el documento/contexto. Si no hay un doc(), debe indicar dónde buscar: for $libro in doc('libros.xml')//libro",
        tip: "💡 XQuery FLWOR: for (itera), let (asigna), where (filtra), order by (ordena), return (resultado)",
        points: 20
    },
    {
        id: 49,
        type: "errorIdentification",
        topic: "xquery",
        difficulty: "medium",
        title: "Error: Variable no declarada",
        instruction: "¿Cuál es el error?",
        code: [
            { line: 1, content: "let $total := sum(//libro/precio)" },
            { line: 2, content: "for $libro in //libro" },
            { line: 3, content: "let $porcentaje := ($libro/precio div $total) * 100" },
            { line: 4, content: "return <libro precio-porcentaje=\"{$porcentaje}\">{$libro/titulo}</libro>" }
        ],
        errorLine: 2,
        explanation: "❌ Línea 2: El 'for' debe estar ANTES del 'let $total'. En FLWOR: primero for, luego let. Correcto: for $libro in ... let $total := ...",
        tip: "💡 Orden FLWOR: FOR primero (iteración), LUEGO LET (asignación). Recuerda: F-L-W-O-R",
        points: 20
    },

    // BaseX - Errores Comunes
    {
        id: 50,
        type: "errorIdentification",
        topic: "general",
        difficulty: "hard",
        title: "Error en comando BaseX",
        instruction: "¿Cuál es el comando BaseX incorrecto?",
        code: [
            { line: 1, content: "CREATE DATABASE libros 'libros.xml'" },
            { line: 2, content: "OPEN libros" },
            { line: 3, content: "INSERT <libro>...</libro> INTO /biblioteca" },
            { line: 4, content: "REPLACE //libro[1] WITH <nuevo></nuevo>" }
        ],
        errorLine: 1,
        explanation: "❌ Línea 1: La sintaxis de CREATE es diferente. Debe ser: CREATE DATABASE libros = 'libros.xml' o load the file. Comprueba: CREATE DATABASE db input.xml",
        tip: "💡 BaseX: CREATE DB nombre; CREATE DB nombre input.xml; OPEN nombre; INSERT; REPLACE; DELETE; EXPORT",
        points: 20
    },
    {
        id: 51,
        type: "errorIdentification",
        topic: "general",
        difficulty: "hard",
        title: "Error en query BaseX",
        instruction: "¿Cuál línea tiene el error?",
        code: [
            { line: 1, content: "for $x in //libro[precio < 50]" },
            { line: 2, content: "let $count := count(//capitulo)" },
            { line: 3, content: "return <resultado>{$x/titulo} ({$count})</resultado>" }
        ],
        errorLine: 1,
        explanation: "❌ Línea 1: El predicado numérico debe usar comparación con comillas en strings. Mejor: for $x in //libro[xs:decimal(precio) < 50]",
        tip: "💡 En BaseX XQuery: tipos de datos son importantes. Compara tipos compatible",
        points: 20
    },
    {
        id: 52,
        type: "errorIdentification",
        topic: "xpath",
        difficulty: "hard",
        title: "Error en predicado XPath",
        instruction: "¿Cuál expresión XPath es incorrecta?",
        code: [
            { line: 1, content: "// Buscar posición:" },
            { line: 2, content: "//libro[1]" },
            { line: 3, content: "// Buscar atributo específico:" },
            { line: 4, content: "//libro[@isbn=\"123\"]" },
            { line: 5, content: "// Error - falta @:" },
            { line: 6, content: "//libro[isbn=\"123\"]" }
        ],
        errorLine: 6,
        explanation: "❌ Línea 6: Para atributos, SIEMPRE necesitas @. Debe ser: //libro[@isbn=\"123\"] no //libro[isbn=\"123\"]",
        tip: "💡 XPath: elementos con etiqueta, atributos con @. //titulo busca elemento, //@id busca atributo",
        points: 20
    },
    {
        id: 53,
        type: "errorIdentification",
        topic: "xquery",
        difficulty: "hard",
        title: "Error: Función XQuery incorrecta",
        instruction: "¿Cuál es el error?",
        code: [
            { line: 1, content: "let $libros := //libro[año > 2000]" },
            { line: 2, content: "let $cantidad := count($libros)" },
            { line: 3, content: "let $promedio := average($libros/precio)" },
            { line: 4, content: "return {cantidad: $cantidad, promedio: $promedio}" }
        ],
        errorLine: 3,
        explanation: "❌ Línea 3: La función se llama 'avg()' no 'average()'. Debe ser: avg($libros/precio)",
        tip: "💡 Funciones XQuery: count(), sum(), avg(), min(), max(), distinct-values(), etc.",
        points: 20
    },
    {
        id: 54,
        type: "errorIdentification",
        topic: "xml",
        difficulty: "hard",
        title: "Error: Espacio de nombres (Namespace)",
        instruction: "¿Dónde está el error?",
        code: [
            { line: 1, content: "<libro xmlns=\"http://ejemplo.com/libros\">" },
            { line: 2, content: "  <titulo>XML Pro</titulo>" },
            { line: 3, content: "  <ns:autor xmlns:ns=\"http://ejemplo.com\">Juan</ns:autor>" },
            { line: 4, content: "</libro>" }
        ],
        errorLine: 3,
        explanation: "❌ Línea 3: El prefijo 'ns:' no coincide con el namespace declarado. Si quieres usar ns, debe ser consistente",
        tip: "💡 Namespaces: xmlns define el default, xmlns:prefijo define un prefijo. Deben ser usados consistentemente",
        points: 25
    },
    {
        id: 55,
        type: "errorIdentification",
        topic: "dtd",
        difficulty: "hard",
        title: "Error: Elemento ANY en DTD",
        instruction: "¿Cuál es el error?",
        code: [
            { line: 1, content: "<!ELEMENT documento (titulo, contenido+)>" },
            { line: 2, content: "<!ELEMENT titulo (#PCDATA)>" },
            { line: 3, content: "<!ELEMENT contenido (CUALQUIERcosa)>" },
            { line: 4, content: "<!ELEMENT parrafo (#PCDATA)>" }
        ],
        errorLine: 3,
        explanation: "❌ Línea 3: Para permitir cualquier contenido, se usa ANY no (CUALQUIERcosa). Debe ser: <!ELEMENT contenido ANY>",
        tip: "💡 DTD: (#PCDATA) solo texto, (elemento) secuencia, (a|b) opción, ANY cualquier cosa",
        points: 20
    }
];

// Función para obtener ejercicios por tema
function getExercisesByTopic(topic) {
    return exercises.filter(ex => ex.topic === topic);
}

// Función para obtener ejercicios por tipo
function getExercisesByType(type) {
    return exercises.filter(ex => ex.type === type);
}

// Función para obtener ejercicio aleatorio
function getRandomExercise() {
    return exercises[Math.floor(Math.random() * exercises.length)];
}

// Función para obtener ejercicios por dificultad
function getExercisesByDifficulty(difficulty) {
    return exercises.filter(ex => ex.difficulty === difficulty);
}
