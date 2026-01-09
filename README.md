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

## 🔒 Seguridad y Privacidad

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
#   P r e p a r a E x a m e n J E M a r i n L M  
 #   P r e p a r a E x a m e n J E M a r i n L M  
 