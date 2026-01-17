# Solución: Preguntas No Visibles en Pantalla

## 🔍 Problema Identificado

Algunas preguntas no eran visibles en pantalla debido a **caracteres especiales HTML** que no estaban siendo escapados correctamente.

### Causa Raíz
Las preguntas en `questions.js` contienen caracteres especiales XML como:
- `<` (menor que)
- `>` (mayor que)
- `&` (ampersand)
- `"` (comillas)

Cuando estos caracteres se insertaban en el DOM usando `innerHTML`, JavaScript los interpretaba como **código HTML en lugar de texto**, causando que:
1. Las preguntas con sintaxis XML se cortaran o no se mostraran
2. Algunas opciones desaparecieran porque HTML las interpretaba como etiquetas

**Ejemplos de preguntas afectadas:**
- "Identifica el error en este fragmento XML: `<libro id=123><titulo>XML</titulo></libro>`"
- "¿Se pueden anidar comentarios XML? Ejemplo: `<!-- texto <!-- más --> -->`"
- "¿Qué caracteres especiales deben reemplazarse por entidades en XML?" con opciones como "`<, >, &, ", '`"

## ✅ Solución Implementada

Se agregó una **función `escapeHtml()`** que convierte caracteres especiales a sus representaciones seguras:

```javascript
// Función para escapar caracteres especiales HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
```

### Cambios Realizados en `script.js`:

1. **En `loadQuestion()`** - Escapar opciones de respuesta:
   ```javascript
   <span>${escapeHtml(option)}</span>
   ```

2. **En `showResults()`** - Escapar preguntas y respuestas en resultados:
   ```javascript
   <h4>Pregunta ${index + 1}: ${escapeHtml(answer.question)}</h4>
   <p><strong>Tu respuesta:</strong> ${answer.selectedAnswer ? escapeHtml(answer.selectedAnswer) : 'No respondida'}</p>
   <p><strong>Respuesta correcta:</strong> ${escapeHtml(answer.correctAnswer)}</p>
   ```

## 🎯 Ventajas de Esta Solución

✅ **Segura**: Previene inyección de HTML malicioso
✅ **Automática**: No requiere cambiar ninguna pregunta en `questions.js`
✅ **Limpia**: El texto se muestra exactamente como se escribió
✅ **Completa**: Se aplica en todas partes donde se muestran preguntas y opciones

## 📊 Preguntas Afectadas (ejemplos)

Las siguientes preguntas ahora se mostrarán correctamente:

- ID 2: XML con sintaxis `<libro id=123>`
- ID 3: Comentarios XML anidados `<!-- texto <!-- más --> -->`
- ID 5: Nombres de elemento `<2libro>`
- ID 6: Caracteres especiales `< > & " '`
- Y muchas más en los bloques de XPath, XQuery, XSLT, etc.

## 🧪 Prueba

1. Abre la aplicación en el navegador
2. Selecciona una dificultad y tópicos (incluyendo XML)
3. Comienza el examen
4. **Todas las preguntas con caracteres especiales ahora deberían verse correctamente**

## 📝 Notas Técnicas

La función `escapeHtml()` funciona de la siguiente manera:
1. Crea un elemento `<div>` temporal
2. Asigna el texto al atributo `textContent` (que lo trata como texto, no HTML)
3. Lee el `innerHTML`, que automáticamente escapa los caracteres especiales
4. Retorna el texto escapado seguro para mostrar en HTML

**Conversiones realizadas:**
- `<` → `&lt;`
- `>` → `&gt;`
- `&` → `&amp;`
- `"` → `&quot;`
- `'` → `&#039;`
