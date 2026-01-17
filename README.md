# 🎓 PreparaExamenJEMarinLM - Juego Interactivo LMSGI

Un juego web interactivo de **última generación** para prepararse para el examen de **Lenguajes de Marcas e Interfaces (LMSGI)**. Diseñado específicamente según los requisitos del profesor, con 50 preguntas prácticas sobre XML, DTD, XSD, XPath, XQuery, XSLT, HTML5 y CSS.

## ✨ Características Principales

✅ **50 preguntas completas** organizadas por temas y dificultad  
✅ **Interfaz moderna y responsiva** - funciona en desktop, tablet y móvil  
✅ **Sistema de puntuación dinámico** - gana puntos según la dificultad  
✅ **Temporizador por pregunta** - gestiona tu tiempo  
✅ **Selección de temas** - elige qué estudiar  
✅ **3 niveles de dificultad** - fácil, medio, difícil  
✅ **Feedback visual inmediato** - respuestas correctas/incorrectas en tiempo real  
✅ **Estadísticas guardadas** - registra tu progreso  
✅ **Sistema de pistas** - obtén ayuda cuando la necesites  
✅ **Modo pausa** - controla tu flujo de estudio  

## 📊 Cobertura de Temas

- **XML Básico (8 preguntas)**: Elementos, atributos, entidades, bien formado
- **DTD (7 preguntas)**: Declaraciones, validación, tipos de datos
- **XSD (5 preguntas)**: Esquemas XML, tipos complejos, restricciones
- **XPath (6 preguntas)**: Expresiones, predicados, navegación
- **XQuery (5 preguntas)**: FLWOR, variables, consultas
- **XSLT (5 preguntas)**: Plantillas, transformaciones, elementos
- **HTML5 (10 preguntas)**: Etiquetas semánticas, estructura, accesibilidad
- **CSS (10 preguntas)**: Propiedades, selectores, modelo de caja
- **Conceptos Generales (5 preguntas)**: Espacios de nombres, XHTML, CDATA

**Total: 50 preguntas tipo examen**

## 🚀 Inicio Rápido

### 1. Clonar o descargar el repositorio

```bash
git clone https://github.com/tu-usuario/PreparaExamenJEMarinLM.git
cd PreparaExamenJEMarinLM
```

### 2. Ejecutar en navegador

**Opción A: Archivo local**
- Abre `index.html` directamente en tu navegador

**Opción B: Servidor local** (recomendado)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Luego accede a `http://localhost:8000`

## 📖 Cómo Usar

1. **Pantalla de Inicio**: 
   - Selecciona los temas que quieres estudiar
   - Elige el nivel de dificultad (5, 10 o 20 preguntas)
   - Haz clic en "Comenzar Juego"

2. **Durante el Juego**:
   - Lee la pregunta cuidadosamente
   - Selecciona tu respuesta haciendo clic
   - Usa "Pista" si la necesitas (-50 puntos)
   - Haz clic en "Confirmar Respuesta" cuando estés listo
   - Usa "Saltar" para pasar sin responder

3. **Después del Juego**:
   - Visualiza tus resultados y estadísticas
   - Revisa qué respuestas fueron correctas/incorrectas
   - Comparte tu puntuación
   - Juega nuevamente o vuelve al menú

## 📁 Estructura del Proyecto

```
PreparaExamenJEMarinLM/
├── index.html          # Interfaz web completa
├── style.css           # Estilos responsivos (2000+ líneas)
├── script.js           # Lógica del juego (400+ líneas)
├── questions.js        # Base de datos de 50 preguntas
├── README.md           # Este archivo
├── .gitignore          # Configuración de Git
└── assets/             # Recursos adicionales
    ├── images/         # (opcional) Imágenes
    └── sounds/         # (opcional) Efectos de sonido
```

## 🎮 Características Técnicas

### Puntuación
- **Preguntas Fáciles**: 10 puntos
- **Preguntas Medias**: 15 puntos  
- **Preguntas Difíciles**: 20 puntos
- **Pista**: -50 puntos

### Temporizador
- **Por defecto**: 30 segundos por pregunta
- **Automático**: Pasa a la siguiente si se acaba el tiempo
- **Indicador visual**: Cambia a rojo con 5 segundos o menos

### Almacenamiento
- Usa `localStorage` para guardar estadísticas
- Las estadísticas se mantienen entre sesiones
- Accede desde "Ver Estadísticas" en el menú

## 🎯 Enfoque Educativo

Este juego sigue las recomendaciones del profesor para preparar el examen:

✅ **Ejercicios prácticos acotados** - no completos desde cero  
✅ **Enfoque en procedimientos** - justificación de respuestas  
✅ **Corrección de errores** - identifica problemas comunes  
✅ **Patrones reutilizables** - aplica lo que ya conoces  
✅ **Sin JavaScript exclusivo** - el examen no incluye JS  
✅ **Feedback inmediato** - aprende de tus errores al instante

## 🛠️ Personalización

### Cambiar colores
Edita las variables en `style.css`:
```css
:root {
    --primary-color: #4361ee;
    --secondary-color: #3a0ca3;
    --success-color: #4caf50;
    --error-color: #f72585;
    /* ... más colores */
}
```

### Agregar nuevas preguntas
Añade objetos al array en `questions.js`:
```javascript
{
    id: 51,
    topic: "xml",
    difficulty: "easy",
    question: "Tu pregunta aquí?",
    options: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correct: 0,
    explanation: "Explicación de por qué es correcta",
    points: 10
}
```

### Modificar tempo de juego
En `script.js`:
```javascript
gameState.timePerQuestion = 30; // Segundos por pregunta
gameState.totalQuestions = 10;  // Preguntas por defecto
```

## 📊 Estadísticas y Análisis

El juego registra:
- Fecha y hora de cada intento
- Puntuación total
- Porcentaje de aciertos
- Tiempo por pregunta
- Tema y dificultad de cada pregunta

Accede a tus estadísticas desde el botón "Ver Estadísticas" en el menú principal.

## 🌐 Compatibilidad

- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Navegadores móviles modernos (iOS Safari, Chrome Mobile)

## 📱 Versión Móvil

El juego es completamente responsivo:
- Interfaz optimizada para pantallas pequeñas
- Botones redimensionados para touch
- Textos legibles en todos los tamaños
- Completo soporte para orientación vertical y horizontal

## � Resumen por Temas

### 🌐 HTML (HyperText Markup Language)

**¿Qué es?** Es el lenguaje para crear las estructuras básicas de una página web. Piensa en él como los "huesos" de una casa - sin él, no hay estructura.

**Lo Básico:**
- Se escribe con **etiquetas** que van entre `< >`
- Casi todas las etiquetas se abren `<etiqueta>` y se cierran `</etiqueta>`
- Las etiquetas pueden tener **atributos** (información adicional)

**Etiquetas HTML5 Más Utilizadas:**

```html
<!-- Estructura básica -->
<!DOCTYPE html>                    <!-- Define que es HTML5 -->
<html lang="es">                  <!-- Contiene todo el documento -->
<head>                            <!-- Info del documento (no se ve) -->
  <meta charset="UTF-8">          <!-- Codificación de caracteres -->
  <meta name="viewport">          <!-- Para móviles -->
  <title>Mi Página</title>         <!-- Título en la pestaña -->
</head>
<body>                            <!-- Lo que ves en pantalla -->
  
  <!-- Etiquetas semánticas (le dicen al navegador qué es cada cosa) -->
  <header>Mi Encabezado</header>   <!-- Lo de arriba de la página -->
  <nav>Menu de navegación</nav>    <!-- Menú de enlaces -->
  <main>Contenido principal</main> <!-- Lo importante -->
  <article>Un artículo</article>   <!-- Un artículo independiente -->
  <section>Una sección</section>   <!-- Agrupa contenido relacionado -->
  <aside>Información extra</aside> <!-- Barra lateral -->
  <footer>Pie de página</footer>   <!-- Lo de abajo -->
  
  <!-- Etiquetas comunes -->
  <h1>Título más importante</h1>   <!-- h1 a h6, de mayor a menor importancia -->
  <p>Un párrafo de texto</p>       <!-- Párrafo -->
  <a href="url">Enlace</a>         <!-- Enlace a otra página -->
  <img src="imagen.jpg" alt="Desc"><!-- Imagen -->
  <button>Botón</button>           <!-- Botón clickeable -->
  <ul><li>Ítem</li></ul>           <!-- Lista sin orden -->
  <ol><li>Ítem</li></ol>           <!-- Lista con orden (1, 2, 3) -->
  <form>                           <!-- Formulario -->
    <input type="text" placeholder="Escribe"> <!-- Campo de texto -->
    <select><option>Opción</option></select>   <!-- Desplegable -->
    <textarea></textarea>          <!-- Área de texto grande -->
  </form>
  
</body>
</html>
```

**Por qué se usan estas etiquetas:**
- **`<header>`, `<nav>`, `<main>`**: El navegador entiende la estructura
- **Accesibilidad**: Las personas con discapacidad usan lectores de pantalla
- **SEO**: Google entiende mejor tu página para posicionamiento
- **Mantenimiento**: Tu código es más organizado y fácil de entender

---

### 🎨 CSS (Cascading Style Sheets)

**¿Qué es?** Es el lenguaje para hacer bonita una página. Si HTML son los "huesos", CSS es la "ropa y maquillaje".

**Lo Básico:**
- Se escribe con **selectores** (a qué le aplico el estilo) y **propiedades** (qué cambio)
- Las propiedades van en `{ }` con formato `propiedad: valor;`

**Sintaxis Básica:**

```css
/* Selector por etiqueta */
p {
  color: blue;                    /* Color del texto */
  font-size: 16px;                /* Tamaño de letra */
  margin: 10px;                   /* Espacio alrededor (todo) */
  padding: 10px;                  /* Espacio dentro (todo) */
}

/* Selector por clase (con punto) */
.destaque {
  background-color: yellow;       /* Color de fondo */
  font-weight: bold;              /* Letra gruesa */
}

/* Selector por ID (con almohadilla) */
#principal {
  width: 100%;                    /* Ancho */
  height: 500px;                  /* Alto */
  border: 2px solid black;        /* Borde */
}

/* Selectores más específicos */
div > p {                         /* Solo los p que son hijos de div */
  color: red;
}

div p {                           /* Todos los p dentro de div */
  color: green;
}

/* Pseudo-clases (estados) */
a:hover {                         /* Cuando pasas el ratón */
  color: orange;
  text-decoration: underline;
}

button:active {                   /* Cuando haces clic */
  transform: scale(0.95);
}

/* Respuestas a tamaños de pantalla */
@media (max-width: 600px) {       /* Si pantalla es ≤ 600px */
  body {
    font-size: 14px;
  }
}
```

**Propiedades CSS Más Usadas:**

| Propiedad | Para qué | Ejemplo |
|-----------|----------|---------|
| `color` | Color del texto | `color: red;` |
| `background-color` | Color de fondo | `background-color: blue;` |
| `font-size` | Tamaño de letra | `font-size: 20px;` |
| `font-family` | Tipo de letra | `font-family: Arial, sans-serif;` |
| `margin` | Espacio FUERA del elemento | `margin: 10px;` |
| `padding` | Espacio DENTRO del elemento | `padding: 10px;` |
| `width` / `height` | Ancho y alto | `width: 300px;` |
| `border` | Borde | `border: 2px solid red;` |
| `display` | Cómo se muestra | `display: flex;` (alineación) |
| `justify-content` | Alinea horizontalmente | `justify-content: center;` |
| `align-items` | Alinea verticalmente | `align-items: center;` |
| `flex-direction` | Dirección en flexbox | `flex-direction: row;` (horizontal) |

**Por qué se organizan así:**
- **Cascada**: Los estilos posteriores sobrescriben los anteriores
- **Especificidad**: `#id` > `.clase` > `etiqueta`
- **Responsive**: `@media` hace que funcione en móviles

---

### ⚙️ JavaScript (JS)

**¿Qué es?** Es el lenguaje para hacer que las páginas sean INTERACTIVAS. Si HTML es la estructura y CSS el diseño, JS es el "cerebro" que responde a lo que hace el usuario.

**Lo Básico:**
- Se ejecuta en el navegador (no en el servidor)
- Puede cambiar HTML y CSS sin recargar la página
- Responde a eventos (clicks, escritura, etc.)

**Sintaxis y Conceptos Clave:**

```javascript
// VARIABLES - Guardan información
let nombre = "Juan";              // Variable que puede cambiar
const edad = 25;                  // Variable que NO puede cambiar
var ciudad = "Madrid";            // Forma antigua (evitar)

// TIPOS DE DATOS
let numero = 42;                  // Número
let decimal = 3.14;               // Decimal
let texto = "Hola mundo";         // Texto
let verdadero = true;             // Boolean (sí/no)
let lista = [1, 2, 3];            // Array/Lista
let objeto = { nombre: "Juan", edad: 25 }; // Objeto

// OPERADORES
let suma = 5 + 3;                 // 8
let texto2 = "Hola " + "Mundo";   // "Hola Mundo"
let igual = 5 === 5;              // true (triple = compara bien)

// CONDICIONALES - Tomar decisiones
if (edad >= 18) {
  console.log("Eres mayor");
} else if (edad >= 13) {
  console.log("Eres adolescente");
} else {
  console.log("Eres niño");
}

// BUCLES - Repetir código
for (let i = 0; i < 5; i++) {
  console.log(i);                 // Imprime 0, 1, 2, 3, 4
}

// FUNCIONES - Código reutilizable
function saludar(nombre) {
  return "Hola " + nombre;        // Devuelve un resultado
}
console.log(saludar("Maria"));    // "Hola Maria"

// EVENTOS - Responder a acciones del usuario
let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
  console.log("¡Botón clickeado!");
});

// MANIPULAR HTML
let elemento = document.getElementById("id");     // Buscar por ID
let elementos = document.querySelectorAll(".clase"); // Buscar por clase

elemento.textContent = "Nuevo texto";             // Cambiar texto
elemento.innerHTML = "<p>HTML nuevo</p>";        // Cambiar HTML
elemento.style.color = "red";                    // Cambiar CSS
elemento.classList.add("destaque");              // Añadir clase
elemento.classList.remove("viejo");              // Quitar clase

// ARRAYS - Trabajar con listas
let frutas = ["manzana", "plátano", "naranja"];
frutas.push("pera");              // Añadir al final
frutas.pop();                      // Quitar el último
frutas.forEach(function(fruta) {
  console.log(fruta);              // Hacer algo con cada elemento
});

// JSON - Guardar datos
let datos = JSON.stringify({nombre: "Juan", edad: 25});
// datos = '{"nombre":"Juan","edad":25}'
let obj = JSON.parse(datos);       // Convertir de vuelta
```

**Patrones Comunes:**

```javascript
// Validar un formulario
let email = document.getElementById("email").value;
if (email.includes("@")) {
  console.log("Email válido");
}

// Guardar datos en el navegador
localStorage.setItem("usuario", "Juan");
let usuario = localStorage.getItem("usuario"); // "Juan"

// Hacer algo después de un tiempo
setTimeout(function() {
  console.log("Pasaron 3 segundos");
}, 3000);

// Repetir algo cada cierto tiempo
setInterval(function() {
  console.log("Cada 2 segundos");
}, 2000);
```

**Por qué se usa:**
- **Validación**: Comprobar datos antes de enviar
- **Interactividad**: Cambios sin recargar la página
- **Mejora de UX**: Respuestas inmediatas al usuario

---

### 📋 XML (Extensible Markup Language)

**¿Qué es?** Es un lenguaje para GUARDAR y TRANSPORTAR información. No es para mostrar en pantalla como HTML, sino para estructurar datos de forma clara.

**Lo Básico:**
- Se parece a HTML pero **tú defines las etiquetas**
- Está pensado para ser legible por máquinas y personas
- Se usa para intercambiar datos entre sistemas

**Ejemplo de XML:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
  <libro>
    <titulo>El Quijote</titulo>
    <autor>Cervantes</autor>
    <año>1605</año>
    <disponible>true</disponible>
  </libro>
  
  <libro>
    <titulo>Cien años de soledad</titulo>
    <autor>García Márquez</autor>
    <año>1967</año>
    <disponible>false</disponible>
  </libro>
</biblioteca>
```

**Reglas de XML (IMPORTANTE):**

```xml
<!-- BIEN FORMADO -->
<persona>                         <!-- Se abre -->
  <nombre>Juan</nombre>           <!-- Se cierra -->
  <edad>25</edad>
</persona>

<!-- MAL (errores comunes) -->
<persona>                         <!-- No se cierra --> ❌
<nombre>Juan</nombre>
<nombre>Juan                      <!-- Etiqueta no cerrada --> ❌
<nombre>Juan<nombre>              <!-- Etiqueta cerrada mal --> ❌
<nombre>Juan</nombre>
<nombre>Juan</nombre>
<nombre>Juan</nombre>

<!-- CON ATRIBUTOS -->
<persona id="1" tipo="estudiante">
  <nombre>Juan</nombre>
</persona>

<!-- ELEMENTOS VACÍOS -->
<imagen src="foto.jpg" />          <!-- Se cierra solo con / -->
```

**Conceptos Importantes:**

| Concepto | Qué es | Ejemplo |
|----------|--------|---------|
| **Elemento** | Etiqueta con contenido | `<nombre>Juan</nombre>` |
| **Atributo** | Información de la etiqueta | `<persona id="1">` |
| **Valor** | Lo que contiene | `Juan` es el valor |
| **Nodo** | Cada parte del árbol | Un elemento, atributo, etc |
| **Bien formado** | Sigue las reglas | Abiertas y cerradas correctamente |

**Validación (DTD vs XSD):**
- **DTD**: Define qué etiquetas son válidas (forma antigua)
- **XSD**: Lo mismo pero más potente (recomendado)

---

### 📍 XPath (XML Path Language)

**¿Qué es?** Es un lenguaje para BUSCAR y NAVEGAR dentro de archivos XML. Imagínalo como "direcciones de correo" para elementos XML.

**Lo Básico:**
- Se usa para encontrar elementos específicos en XML
- Es como hacer una búsqueda inteligente en un documento

**Rutas Básicas:**

```xpath
<!-- PADRE/HIJO -->
/biblioteca/libro              <!-- De raíz a libro (dirección exacta) -->
//libro                        <!-- Cualquier libro en el documento -->
/biblioteca//titulo            <!-- Título en cualquier nivel bajo biblioteca -->

<!-- ATRIBUTOS -->
//@id                          <!-- Todos los atributos id -->
//libro[@id]                   <!-- Libros que TIENEN atributo id -->
//libro[@id="2"]               <!-- Libros con id exactamente 2 -->

<!-- POSICIÓN -->
/biblioteca/libro[1]           <!-- Primer libro -->
/biblioteca/libro[last()]      <!-- Último libro -->
/biblioteca/libro[position()>1]<!-- Libro 2 en adelante -->

<!-- PREDICADOS (Condiciones) -->
//libro[disponible="true"]     <!-- Libros disponibles -->
//libro[año > 1900]            <!-- Libros después de 1900 -->
//libro[autor="Cervantes"]     <!-- Libros de Cervantes -->

<!-- COMBINADAS (Lo más común en examen) -->
//libro[disponible="true"]/titulo    <!-- Título de libros disponibles -->
//libro[author="García Márquez"]/@id <!-- ID de libros de García Márquez -->
//libro[precio < 20]/titulo          <!-- Título de libros baratos -->
```

**Operadores XPath:**

| Operador | Significa | Ejemplo |
|----------|-----------|---------|
| `/` | Separador de niveles | `/biblioteca/libro` |
| `//` | Cualquier nivel | `//libro` |
| `..` | Padre | `../..` (sube dos niveles) |
| `@` | Atributo | `@id`, `@tipo` |
| `[predicado]` | Condición | `[año>1900]` |
| `=` | Igual | `[@id="1"]` |
| `!=` | Diferente | `[año!=2020]` |
| `<`, `>` | Mayor/Menor | `[precio<20]` |
| `and`, `or` | Lógica | `[@id="1" and año>1900]` |

**Ejemplos Prácticos:**

```xml
<!-- XML de ejemplo -->
<biblioteca>
  <libro id="1">
    <titulo>El Quijote</titulo>
    <autor>Cervantes</autor>
    <año>1605</año>
  </libro>
  <libro id="2">
    <titulo>Cien años de soledad</titulo>
    <autor>García Márquez</autor>
    <año>1967</año>
  </libro>
</biblioteca>
```

```xpath
/biblioteca/libro[1]/titulo
/* Resultado: "El Quijote" */

//libro[@id="2"]/autor
/* Resultado: "García Márquez" */

//libro[año > 1900]/titulo
/* Resultado: "El Quijote", "Cien años de soledad" */

//libro[author="Cervantes"]/@id
/* Resultado: "1" */
```

---

### 🔍 XQuery (XML Query Language)

**¿Qué es?** Es un lenguaje más potente que XPath para CONSULTAR y TRANSFORMAR XML. Es como SQL pero para XML.

**Lo Básico:**
- Permite búsquedas más complejas
- Puede transformar los datos
- Estructura FLWOR (For, Let, Where, Order by, Return)

**Sintaxis FLWOR (La más importante):**

```xquery
(: Comentario en XQuery :)

(: Estructura básica: FOR-LET-WHERE-ORDER-RETURN :)
for $libro in //libro           (: FOR: Itera cada libro :)
let $precio := $libro/precio    (: LET: Guarda un valor :)
where $libro/año > 1900         (: WHERE: Filtra :)
order by $libro/titulo ascending (: ORDER: Ordena :)
return $libro/titulo            (: RETURN: Qué devuelve :)

(: Resultado: Títulos de libros después de 1900, ordenados A-Z :)
```

**Ejemplos más detallados:**

```xquery
(: Buscar todos los libros disponibles :)
for $libro in //libro[disponible="true"]
return $libro/titulo

(: Lo anterior en XML :)
for $libro in //libro[disponible="true"]
return 
  <libro>
    <titulo>{$libro/titulo}</titulo>
    <autor>{$libro/autor}</autor>
  </libro>

(: Contar algo (funciones) :)
count(//libro)                  (: Cuántos libros hay :)
sum(//libro/precio)             (: Suma de precios :)
avg(//libro/precio)             (: Precio promedio :)

(: Condicionales dentro de XQuery :)
for $libro in //libro
return 
  if ($libro/precio > 30)
  then <caro>{$libro/titulo}</caro>
  else <barato>{$libro/titulo}</barato>

(: VARIABLE (importante) :)
let $x := 100
let $libros := //libro[precio < $x]
for $libro in $libros
return $libro/titulo

(: Ordenar por múltiples criterios :)
for $libro in //libro
order by $libro/autor ascending, $libro/año descending
return $libro/titulo
```

**Funciones comunes XQuery:**

| Función | Para qué |
|---------|----------|
| `count()` | Contar elementos |
| `sum()` | Sumar valores |
| `avg()` | Promedio |
| `min()` / `max()` | Mínimo/Máximo |
| `substring()` | Parte de un texto |
| `contains()` | Si contiene una palabra |
| `upper-case()` | Mayúsculas |
| `lower-case()` | Minúsculas |

---

### 🗄️ BaseX (XML Database)

**¿Qué es?** Es una base de datos especializada en XML. Permite guardar, buscar y manipular archivos XML de forma profesional.

**Instalación (Windows):**

```bash
1. Descargar desde www.basex.org
2. Descomprimir en una carpeta
3. Ejecutar basex.bat (para interfaz gráfica)
   o basexserver.bat (para servidor)
```

**Usando BaseX - Conceptos Básicos:**

```bash
# INICIAR EL SERVIDOR (en terminal)
basexserver.bat                 # Windows
basexserver                     # Mac/Linux

# ABRIR LA INTERFAZ (otra terminal)
basex                           # Abre el cliente interactivo
```

**Comandos BaseX Más Usados:**

```basex
(: Crear una base de datos con un archivo XML :)
CREATE DATABASE mibase input.xml    (: Crea DB desde archivo :)
OPEN mibase                         (: Abre la DB :)

(: Ejecutar consultas XPath/XQuery :)
//libro                             (: Buscar todos los libros :)
//libro[@id="1"]                   (: Buscar por atributo :)
for $x in //libro return $x/titulo (: XQuery completo :)

(: Insertar datos :)
INSERT <libro id="3"><titulo>Nuevo</titulo></libro> 
INTO /biblioteca

(: Actualizar datos :)
REPLACE //libro[@id="1"]/titulo WITH <titulo>Actualizado</titulo>

(: Eliminar datos :)
DELETE //libro[@id="1"]

(: Exportar a archivo :)
EXPORT database.xml                 (: Guarda toda la DB :)

(: Ver información :)
INFO                                (: Info de la DB actual :)
LIST                                (: Lista todas las DB :)

(: Listar todas las bases de datos :)
SHOW DATABASES
```

**Ejemplo Completo en BaseX:**

```basex
(: Crear DB :)
CREATE DATABASE biblioteca "<?xml version='1.0'?>
<biblioteca>
  <libro id='1'>
    <titulo>El Quijote</titulo>
    <autor>Cervantes</autor>
  </libro>
</biblioteca>"

OPEN biblioteca

(: Consultas :)
//libro                          (: Muestra todos los libros :)
//libro[1]/titulo               (: Primer libro :)
for $x in //libro return $x/titulo    (: Solo títulos :)

(: Actualizar :)
INSERT <libro><titulo>Nuevo</titulo></libro> 
INTO /biblioteca/libros

(: Eliminar todo y cerrar :)
DROP DATABASE biblioteca
```

**Por qué usar BaseX:**
- **Búsquedas rápidas**: Indexa automáticamente
- **Escalable**: Puede manejar archivos grandes
- **Profesional**: Se usa en empresas reales
- **XQuery nativo**: Ejecuta XQuery con todo su poder

---

### 🔗 Relación entre Todos los Temas

```
┌─────────────────────────────────────┐
│  BASE DATOS (XML)                   │
│  - Guarda información estructurada  │
│  - Bien formada (reglas XML)        │
│  - Se valida con DTD/XSD            │
└──────────────┬──────────────────────┘
               │
    ┌──────────┴──────────┐
    │                     │
┌───▼──────────────┐  ┌───▼──────────┐
│  ACCEDER (XPath) │  │ BUSCAR-TRANS │
│  XPath: Simple   │  │ XQuery: Avanzado
│  Busqueda básica │  │ FLWOR loops │
│  /libro/titulo  │  │ for...return │
└───┬──────────────┘  └───┬──────────┘
    │                     │
    └──────────────┬──────┘
                   │
         ┌─────────▼────────┐
         │  GUARDAR EN DB   │
         │  BaseX           │
         │ - INSERT         │
         │ - REPLACE        │
         │ - DELETE         │
         └──────────────────┘
               │
         ┌─────▼──────────────┐
         │ MOSTRAR EN WEB     │
         │ HTML + CSS + JS    │
         │ - Estructura (HTML)│
         │ - Diseño (CSS)     │
         │ - Interacción (JS) │
         └────────────────────┘
```

**Ejemplo de Flujo Completo:**

1. **XML**: Tienes datos sobre libros en `biblioteca.xml`
2. **XPath**: Buscas todos los libros disponibles: `//libro[disponible="true"]`
3. **XQuery**: Transformas esos datos: `for $x in //libro[disponible="true"] return <item>{$x/titulo}</item>`
4. **BaseX**: Guardas esto en una base de datos profesional
5. **HTML**: Creas una página con `<ul><li>Títulos</li></ul>`
6. **CSS**: La haces bonita con colores y estilos
7. **JS**: Añades interactividad (filtros, búsqueda en tiempo real)

---

## �🔒 Seguridad y Privacidad

- ✅ Sin conexión a servidores externos
- ✅ Sin recopilación de datos personales
- ✅ Los datos se guardan solo en tu navegador (localStorage)
- ✅ Código 100% transparente y auditable

## 🎓 Preparación para el Examen

### Consejos del Profesor

1. **Repite los ejercicios** - haz las preguntas varias veces
2. **Tapa las opciones** - intenta responder sin ayuda
3. **Crea "chuletarios mentales"** - resume pasos y procedimientos
4. **Justifica siempre** - explica por qué es correcta la respuesta
5. **Si te quedas en blanco** - escribe la estructura general primero

### Estrategia de Estudio

**Semana 1-2: Aprender**
- Estudia los apuntes tema por tema
- Juega seleccionando UN tema a la vez
- Enfócate en entender los conceptos

**Semana 3-4: Practicar**
- Juega con todos los temas
- Intenta sin seleccionar dificultad (mezcla fácil+media+difícil)
- Revisa tus errores después de cada sesión

**Semana Final: Refinar**
- Juega solo con dificultad "Difícil"
- Toma tiempo para justificar mentalmente cada respuesta
- Simula el tempo real del examen (90 minutos)

## 📧 Autor y Créditos

Creado por **JEMarinLM** para preparación de examen LMSGI 2026

Basado en:
- Apuntes de clase del profesor
- Estándares W3C
- Mejores prácticas en educación web

## 📄 Licencia

Este proyecto está bajo licencia **MIT**.

Eres libre de:
- ✅ Usar el código libremente
- ✅ Modificarlo según tus necesidades
- ✅ Distribuirlo con atribución
- ✅ Usarlo en proyectos personales y educativos

## 🐛 Reportar Errores

Si encuentras un error o tienes una sugerencia:
1. Abre un issue en GitHub
2. Describe el problema con detalle
3. Proporciona pasos para reproducirlo

## 🚀 Futuras Mejoras

- [ ] Modo offline con Service Workers
- [ ] Examen simulado cronometrado de 90 minutos
- [ ] Gráficos de progreso más detallados
- [ ] Explicaciones en video
- [ ] Exportar resultados a PDF
- [ ] Sincronización entre dispositivos
- [ ] Modo competitivo multijugador
- [ ] Dark mode

## 💡 Consejos Finales

> "El examen evaluará que sepas identificar el problema, aplicar el patrón que ya has usado, y justificar lo que haces. No necesitas memorizar cada palabra."
> 
> — Tu Profesor

**Este juego te prepara exactamente para eso.**

---

**¡Buena suerte en tu examen! 🎓**

Última actualización: Enero 2026  
Versión: 2.0.0
#   P r e p a r a E x a m e n J E M a r i n L M 
 
 #   P r e p a r a E x a m e n J E M a r i n L M 
 
 