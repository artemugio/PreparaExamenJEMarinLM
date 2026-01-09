# 📚 Guía de Estudio - PreparaExamenJEMarinLM

## 🎯 Siguiendo las Indicaciones del Profesor

El profesor ha dejado claro que el examen será **práctico y guiado**, enfocado en:

1. ✅ **Identificar problemas** en fragmentos de código
2. ✅ **Aplicar patrones** que ya hemos practicado
3. ✅ **Justificar soluciones** (explicar el por qué)

Este juego está diseñado exactamente para eso.

---

## 📅 Plan de Estudio de 4 Semanas

### **SEMANA 1: APRENDIZAJE FUNDAMENTAL**

**Objetivo**: Entender los conceptos básicos

**Lunes-Miércoles: Fundamentos XML**
- Estudio: Lee apuntes sobre XML bien formado
- Práctica: Juega seleccionando SOLO tema "XML Básico" - Dificultad "Fácil"
- Enfoque: Identifica los 3 errores más comunes

**Jueves-Viernes: DTD y Validación**
- Estudio: Aprende la sintaxis DTD
- Práctica: Juega tema "DTD" - Dificultad "Fácil"
- Meta: 80% de aciertos

**Sábado: Repaso**
- Juega "XML Básico" + "DTD" mezclado
- Anota errores recurrentes

### **SEMANA 2: EXPANDIR HORIZONTES**

**Objetivo**: Cubrir todos los temas

**Lunes-Martes: XSD**
- Juega tema "XSD" - Dificultad "Fácil"

**Miércoles-Jueves: XPath + XQuery**
- Juega "XPath" solo
- Juega "XQuery" solo
- Nota: Diferencias entre XPath (seleccionar) y XQuery (consultar)

**Viernes: XSLT**
- Juega tema "XSLT" - Dificultad "Fácil"
- Crea un "chuletario mental":
  - Plantillas básicas
  - value-of vs copy-of
  - for-each vs apply-templates

**Sábado: HTML5 + CSS**
- Juega temas "HTML5" y "CSS"
- Memoriza: 3 etiquetas semánticas + 3 propiedades CSS

**Domingo: Resumen**
- Juega TODO pero solo dificultad "Fácil"

### **SEMANA 3: PRÁCTICA INTENSIVA**

**Objetivo**: Dominar conceptos prácticos

**Lunes-Viernes: Simulacros diarios**
- Cada día: Juega 10-15 preguntas - Dificultad "Medio"
- Después de cada pregunta mal: Anota por qué fallaste
- Tema del día:
  - Lunes: XML + DTD
  - Martes: XSD + XPath
  - Miércoles: XQuery + XSLT
  - Jueves: HTML5 + CSS
  - Viernes: Todo mezclado

**Sábado-Domingo: Repaso profundo**
- Juega preguntas "Difícil"
- Toma nota de cada respuesta para justificarla después
- Anota "chuletarios" por tema

---

### **SEMANA FINAL: PREPARACIÓN PARA EL EXAMEN**

**Objetivo**: Simular condiciones reales

**Lunes-Miércoles: Simulacros cronometrados**
- Juega 20 preguntas - Dificultad "Difícil"
- Tiempo: 90 minutos (como el examen real)
- Simula el ambiente del examen
- SIN pistas, SIN pausas

**Jueves: Repaso de errores**
- Juega solo las preguntas en las que fallaste
- Escribe la respuesta correcta A MANO
- Explica por qué es correcta

**Viernes: Descanso activo**
- Juega 5-10 preguntas relajadamente
- Repasa tus "chuletarios mentales"
- Duerme bien

**Sábado: Último repaso**
- Juega 10 preguntas "Difícil" por la mañana
- Descansa por la tarde
- No hagas preguntas en la noche anterior

---

## 🧠 "Chuletarios Mentales" por Tema

### XML BIEN FORMADO
```
1. Un elemento raíz que contenga todo
2. Etiquetas cerradas correctamente
3. Atributos entre comillas
4. Caracteres especiales como entidades
5. Declaración XML: <?xml version="1.0" encoding="UTF-8"?>
```

### DTD
```
Estructura: <!ELEMENT nombre (hijos)>
#PCDATA = texto
+ = uno o más
? = cero o uno
* = cero o más
#REQUIRED = obligatorio
#IMPLIED = opcional
```

### XSD
```
xmlns:xs="http://www.w3.org/2001/XMLSchema"
xs:sequence = orden importa
xs:all = cualquier orden
minOccurs / maxOccurs = cuántas veces
xs:restriction = limitar valores
```

### XPath
```
/ = desde raíz
// = desde cualquier nivel
@ = atributo
[] = predicado (condición)
//elemento[atributo='valor']
```

### XQuery FLWOR
```
for $variable in //elemento
where condición
order by campo
return resultado
```

### XSLT
```
<xsl:template match="/">
<xsl:for-each select="//elemento">
<xsl:value-of select="campo"/>
</xsl:for-each>
</xsl:template>
```

### HTML5
```
Semánticas: <header> <nav> <article> <section> <footer>
<!DOCTYPE html>
<html lang="es">
<meta charset="UTF-8">
```

### CSS
```
margin = espacio FUERA
padding = espacio DENTRO
color = texto
background = fondo
font-size = tamaño
```

---

## ⚠️ ERRORES MÁS COMUNES (Y CÓMO EVITARLOS)

### XML
❌ Atributos sin comillas: `<libro id=123>`  
✅ Correcto: `<libro id="123">`

❌ Etiqueta no cerrada: `<libro>`  
✅ Correcto: `</libro>` o `<libro/>`

❌ Caracteres especiales sin escapar: `<contenido>a < b</contenido>`  
✅ Correcto: `<contenido>a &lt; b</contenido>`

### DTD
❌ Olvidar paréntesis: `<!ELEMENT libro titulo, autor>`  
✅ Correcto: `<!ELEMENT libro (titulo, autor)>`

❌ Confundir #REQUIRED con #IMPLIED  
✅ Estudia: Obligatorio vs Opcional

### XPath
❌ Confundir `/libro` con `//libro`  
✅ Prueba ambas en el juego y ve la diferencia

❌ Olvidar `@` para atributos: `//libro[id='3']`  
✅ Correcto: `//libro[@id='3']`

### CSS
❌ Confundir margin y padding  
✅ Recuerda: margin es AFUERA, padding es ADENTRO

❌ Selectores incorrectos: `.clase` vs `#id`  
✅ Punto para clases, almohadilla para IDs

---

## 🎮 Cómo Usar Este Juego para Estudiar

### OPCIÓN 1: Aprendizaje (Semana 1-2)
```
1. Abre un tema
2. Lee cada pregunta cuidadosamente
3. Selecciona una respuesta
4. LEE LA EXPLICACIÓN aunque sea correcta
5. Anota conceptos nuevos
```

### OPCIÓN 2: Práctica (Semana 3)
```
1. Selecciona dificultad MEDIA
2. Cubre la opción con un papel
3. Escribe la respuesta A MANO
4. Luego selecciona en el juego
5. Compara lo que escribiste con la opción
```

### OPCIÓN 3: Simulacro (Semana 4)
```
1. Selecciona dificultad DIFÍCIL
2. Cronómetrate: 90 minutos para 20 preguntas
3. NO uses pistas
4. Cuando termines, anota tus errores
5. Justifica por qué te equivocaste
```

---

## ✨ TIPS ESPECIALES DEL PROFESOR

> "No será un 'arranca desde cero'. Sí habrá ejercicios prácticos, pero serán acotados y guiados: completar fragmentos, corregir errores, justificar soluciones."

**Estrategia**: En este juego:
- ✅ Lees fragmentos (como en el examen)
- ✅ Escoges la respuesta correcta (es decir, identificas el error/la solución)
- ✅ Lees por qué (desarrollas justificación)

Cuando llegue el examen:
- Reconocerás los patrones
- Sabrás qué está mal
- Podrás explicarlo

---

## 📝 Hoja de Seguimiento

Copia esto y rellena cada día:

```
SEMANA 1 - FECHA: ___________

Lunes:   XML Básico - Fácil - Aciertos: __/10 - Errores a revisar: ________
Martes:  XML Básico - Fácil - Aciertos: __/10 - Errores a revisar: ________
Miércoles: DTD - Fácil - Aciertos: __/10 - Errores a revisar: ________
...

NOTAS:
- Concepto que no entendí: ________________
- Lo que voy a repasar: ________________
- Progreso: ☐ Lento ☐ Normal ☐ Rápido
```

---

## 🎯 Objetivos Realistas

**Semana 1**: 60% de aciertos (estás aprendiendo)  
**Semana 2**: 70% de aciertos (dominas conceptos)  
**Semana 3**: 80% de aciertos (lo tienes)  
**Semana 4**: 85%+ de aciertos (estás listo)

Si no llegas a estos objetivos, no te desanimes. Ajusta tu ritmo.

---

## 💪 MOTIVACIÓN FINAL

Recuerda que el profesor dijo:

> "Mi intención no es pillar a nadie, sino que podáis demostrar lo que habéis aprendido. Si estudiáis con este enfoque (procedimiento + lógica + justificación), estáis preparando exactamente lo que se va a pedir."

**Traducción**: El profesor QUIERE que apruebes. Solo tienes que demostrar que lo entiendes.

Este juego es exactamente eso: una forma de demostrar que lo entiendes.

---

## 📞 ¿DUDAS?

Si mientras juegas:
- No entiendes una pregunta: Lee la explicación 2-3 veces
- No encuentras el concepto: Busca en tus apuntes la palabra clave
- Tienes una duda nueva: Anótala y pregunta al profesor

**Recuerda**: Cada error en el juego es una oportunidad de aprender. En el examen real, NO habrá explicaciones, así que aprovecha.

---

## 🎓 ¡A POR ELLO!

**Última actualización**: Enero 2026  
Creado para ti con ❤️ por JEMarinLM
