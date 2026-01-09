# 📋 EJEMPLOS DE PREGUNTAS - PreparaExamenJEMarinLM

Aquí puedes ver ejemplos de las **50 preguntas** incluidas en el juego, organizadas por tema y dificultad.

---

## 🟢 NIVEL FÁCIL (Preguntas 1-20)

### XML Básico - Ejemplo 1
**Pregunta**: ¿Qué elemento es obligatorio en todo documento XML bien formado?

**Opciones**:
- [ ] Una declaración DOCTYPE
- [ ] Espacios de nombres
- [x] Un elemento raíz único ← **CORRECTA**
- [ ] Al menos un comentario

**Explicación**: Todo documento XML debe tener un elemento raíz único que contenga todos los demás elementos. Sin él, no es bien formado.

---

### XML Básico - Ejemplo 2
**Pregunta**: Identifica el error en este fragmento XML:
```xml
<libro id=123>
  <titulo>XML Básico</titulo>
</libro>
```

**Opciones**:
- [x] El atributo id debe ir entre comillas ← **CORRECTA**
- [ ] Falta la declaración XML
- [ ] Las etiquetas están mal cerradas
- [ ] No hay error

**Explicación**: Los atributos en XML siempre deben ir entre comillas: `id="123"`

---

### DTD - Ejemplo 3
**Pregunta**: ¿Qué significa #PCDATA en un DTD?

**Opciones**:
- [ ] Predefined Character Data
- [x] Parsed Character DATA ← **CORRECTA**
- [ ] Processed Character Data
- [ ] Primary Character Data

**Explicación**: #PCDATA significa Parsed Character DATA - datos de texto que serán analizados por el parser.

---

### HTML5 - Ejemplo 4
**Pregunta**: ¿Qué atributo especifica el idioma en `<html>`?

**Opciones**:
- [x] `<html lang="es">` ← **CORRECTA**
- [ ] `<html language="es">`
- [ ] `<html locale="es">`
- [ ] `<html xml:lang="es">`

**Explicación**: El atributo 'lang' especifica el idioma, importante para accesibilidad y SEO.

---

### CSS - Ejemplo 5
**Pregunta**: ¿Qué propiedad CSS crea espacio entre borde y contenido?

**Opciones**:
- [ ] margin
- [x] padding ← **CORRECTA**
- [ ] border-spacing
- [ ] gap

**Explicación**: 'padding' es espacio interior. 'margin' es espacio exterior.

---

## 🟡 NIVEL MEDIO (Preguntas 21-40)

### XPath - Ejemplo 6
**Pregunta**: ¿Qué selecciona la expresión XPath: `//libro/autor`?

**Opciones**:
- [ ] Solo bajo 'libro' en la raíz
- [x] Todos los 'autor' que sean descendientes de 'libro' ← **CORRECTA**
- [ ] El primer autor de cualquier libro
- [ ] Solo libros que contengan autor

**Explicación**: El operador `//` selecciona nodos en cualquier nivel del documento.

---

### XQuery - Ejemplo 7
**Pregunta**: ¿Qué significa FLWOR en XQuery?

**Opciones**:
- [ ] Filter, List, Where, Order, Result
- [x] For, Let, Where, Order by, Return ← **CORRECTA**
- [ ] Function, Language, Web, Output, Request
- [ ] Format, Load, Write, Organize, Retrieve

**Explicación**: FLWOR es el acrónimo de For, Let, Where, Order by, Return - la estructura de las consultas XQuery.

---

### XSLT - Ejemplo 8
**Pregunta**: Diferencia entre `<xsl:value-of>` y `<xsl:copy-of>`:

**Opciones**:
- [ ] `<xsl:value-of>` copia nodos; `<xsl:copy-of>` extrae texto
- [x] `<xsl:value-of>` extrae texto; `<xsl:copy-of>` copia nodo completo ← **CORRECTA**
- [ ] Son idénticos
- [ ] `<xsl:copy-of>` es más rápido

**Explicación**: `<xsl:value-of>` obtiene solo el texto. `<xsl:copy-of>` copia la estructura completa.

---

### DTD - Ejemplo 9
**Pregunta**: Diferencia entre `#REQUIRED` y `#IMPLIED` en DTD:

**Opciones**:
- [ ] `#REQUIRED` es opcional, `#IMPLIED` obligatorio
- [x] `#REQUIRED` es obligatorio, `#IMPLIED` opcional ← **CORRECTA**
- [ ] Ambos son obligatorios
- [ ] Ambos son opcionales

**Explicación**: `#REQUIRED` → atributo obligatorio. `#IMPLIED` → atributo opcional.

---

### General - Ejemplo 10
**Pregunta**: ¿Cuál es la diferencia entre documento XML 'bien formado' y 'válido'?

**Opciones**:
- [x] Bien formado: cumple reglas XML; Válido: además cumple DTD/XSD ← **CORRECTA**
- [ ] Son lo mismo
- [ ] Válido: es más flexible
- [ ] Bien formado: tiene DOCTYPE

**Explicación**: Bien formado: sintaxis correcta. Válido: bien formado + cumple reglas DTD/XSD.

---

## 🔴 NIVEL DIFÍCIL (Preguntas 41-50)

### XSD - Ejemplo 11
**Pregunta**: ¿Cómo se define un elemento 'edad' que solo acepte valores entre 0 y 120 en XSD?

**Opciones**:
- [ ] Con atributos min y max
- [x] Con xs:restriction y xs:minInclusive/xs:maxInclusive ← **CORRECTA**
- [ ] Con pattern regex
- [ ] Con xs:length

**Explicación**: Se usa `xs:restriction base="xs:integer"` con `xs:minInclusive` y `xs:maxInclusive`.

---

### XPath Avanzado - Ejemplo 12
**Pregunta**: Escribe un XPath para libros después de 2000 con categoría 'novela':

**Opciones**:
- [x] `//libro[año > 2000 and @categoria='novela']` ← **CORRECTA**
- [ ] `//libro[año > 2000 or @categoria='novela']`
- [ ] `//libro[año > 2000 AND categoria='novela']`
- [ ] `//libro{año > 2000, categoria='novela'}`

**Explicación**: Se combinan predicados con 'and'. Elementos sin @, atributos con @.

---

### XQuery FLWOR Completo - Ejemplo 13
**Pregunta**: Escribe consulta FLWOR completa de libros de 'ficción' ordenados por título:

**Opciones**:
- [ ] `for $l in //libro[@genero='ficcion'] order by $l/titulo return $l`
- [ ] `for $l in //libro where @genero='ficcion' order by titulo return $l`
- [x] `for $libro in //libro[@categoria='ficcion'] order by $libro/titulo return $libro` ← **CORRECTA**
- [ ] `select * from libro where categoria='ficcion'`

**Explicación**: Estructura: `for` (iteración) - `order by` (ordenamiento) - `return` (resultado).

---

### HTML5 Semántico - Ejemplo 14
**Pregunta**: ¿Por qué usar `<section>` en lugar de `<div>` en HTML5?

**Opciones**:
- [ ] Porque section es más rápido
- [x] Porque es semánticamente significativo, mejora accesibilidad y SEO ← **CORRECTA**
- [ ] Porque `<div>` es obsoleto
- [ ] No hay diferencia

**Explicación**: `<section>` indica contenido temáticamente relacionado, mejorando estructura y accesibilidad.

---

### XSLT - Ejemplo 15
**Pregunta**: ¿Cuál es el espacio de nombres obligatorio para XSLT?

**Opciones**:
- [x] `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"` ← **CORRECTA**
- [ ] `xmlns:xslt="http://www.w3.org/XSL"`
- [ ] `xmlns:transform="http://www.w3.org/XSL"`
- [ ] `xmlns:stylesheet="http://www.w3.org/2001/XMLSchema"`

**Explicación**: El espacio de nombres estándar es `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"`.

---

## 📊 Distribución Total

| Tema | Fácil | Medio | Difícil | Total |
|------|-------|-------|---------|-------|
| XML Básico | 5 | 2 | 1 | 8 |
| DTD | 3 | 2 | 2 | 7 |
| XSD | 1 | 2 | 2 | 5 |
| XPath | 2 | 2 | 2 | 6 |
| XQuery | 1 | 2 | 2 | 5 |
| XSLT | 2 | 2 | 1 | 5 |
| HTML5 | 5 | 3 | 2 | 10 |
| CSS | 5 | 3 | 2 | 10 |
| General | 2 | 2 | 1 | 5 |
| **TOTAL** | **26** | **20** | **15** | **50** |

---

## 🎯 Estrategia de Estudio Recomendada

### Para Principiantes
1. **Semana 1-2**: Juega solo nivel "FÁCIL"
2. Enfócate en entender los conceptos básicos
3. Lee cada explicación con cuidado

### Para Nivel Intermedio
1. **Semana 3-4**: Juega nivel "MEDIO"
2. Intenta responder sin opciones
3. Anota conceptos clave

### Para Preparación Final
1. **Última semana**: Juega nivel "DIFÍCIL"
2. Simula el examen real (90 minutos)
3. Justifica cada respuesta por escrito

---

## 💡 Consejo del Profesor

> "El examen evaluará que sepas identificar el problema, aplicar el patrón que ya has usado, y justificar lo que haces."

**Nuestro juego entrena exactamente eso:**
1. ✅ Lees un fragmento o pregunta (identifica el problema)
2. ✅ Seleccionas la respuesta correcta (aplicas el patrón)
3. ✅ Lees la explicación (justificas por qué)

---

Última actualización: Enero 2026
