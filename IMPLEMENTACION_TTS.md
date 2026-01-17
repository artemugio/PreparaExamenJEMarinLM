# 🎙️ Implementación de TTS (Text-to-Speech) - Guía Completa

## ✅ Cambios Realizados

### 1. **HTML (index.html)**
Se agregó una nueva sección de configuración de TTS en la pantalla inicial:

```html
<!-- Configuración de TTS -->
<div class="options-section">
    <h3>🎙️ Configuración de Voz:</h3>
    <div class="tts-config">
        <label class="tts-checkbox">
            <input type="checkbox" id="enableTTS" checked>
            <span>Activar lectura de voz</span>
        </label>
        
        <div id="ttsOptions" class="tts-options">
            <div class="tts-control">
                <label for="ttsVoice">Voz:</label>
                <select id="ttsVoice">
                    <option value="default">Automática</option>
                </select>
            </div>

            <div class="tts-control">
                <label for="ttsRate">Velocidad:</label>
                <div class="slider-container">
                    <span class="slider-label">Lenta</span>
                    <input type="range" id="ttsRate" min="0.5" max="2" step="0.25" value="1" class="slider">
                    <span class="slider-label">Rápida</span>
                </div>
            </div>

            <div class="tts-control">
                <label for="ttsPitch">Tono:</label>
                <div class="slider-container">
                    <span class="slider-label">Bajo</span>
                    <input type="range" id="ttsPitch" min="0.5" max="2" step="0.25" value="1" class="slider">
                    <span class="slider-label">Alto</span>
                </div>
            </div>

            <div class="tts-control">
                <label for="ttsVolume">Volumen:</label>
                <div class="slider-container">
                    <span class="slider-label">Bajo</span>
                    <input type="range" id="ttsVolume" min="0" max="1" step="0.1" value="1" class="slider">
                    <span class="slider-label">Alto</span>
                </div>
            </div>

            <button id="testTtsBtn" class="btn btn-secondary btn-small">🔊 Prueba de Voz</button>
        </div>
    </div>
</div>
```

También se agregó un botón "Repetir" en la pantalla de preguntas:
```html
<button id="repeatBtn" class="btn-repeat" title="Repetir pregunta">🔊</button>
```

---

### 2. **CSS (style.css)**
Se agregaron estilos para los controles TTS:

- `.tts-config` - Contenedor principal con fondo destacado
- `.tts-checkbox` - Checkbox para activar/desactivar TTS
- `.tts-options` - Opciones de configuración (solo visible cuando TTS está activo)
- `.tts-control` - Cada control individual (Voz, Velocidad, Tono, Volumen)
- `.slider-container` - Contenedor de sliders con etiquetas
- `.slider` - Estilos del slider (funcionan en Chrome, Firefox, Safari)
- `.btn-repeat` - Botón circular en pantalla de preguntas
- `@keyframes pulse` - Animación de pulso cuando está hablando

**Características CSS:**
- Estilos personalizados para sliders (thumb y track)
- Animación de pulso cuando la voz está activa
- Diseño responsivo
- Colores consistentes con el tema de la aplicación

---

### 3. **JavaScript (script.js)**

#### A. Estado Global Extendido
```javascript
gameState = {
    ...
    ttsEnabled: true,
    ttsRate: 1,
    ttsPitch: 1,
    ttsVolume: 1,
    ttsVoice: null,
    currentUtterance: null
}
```

#### B. Elementos del DOM
Se agregaron referencias a todos los elementos de TTS:
```javascript
const repeatBtn = document.getElementById('repeatBtn');
const enableTTSCheckbox = document.getElementById('enableTTS');
const ttsOptions = document.querySelector('.tts-options');
const ttsVoiceSelect = document.getElementById('ttsVoice');
const ttsRateSlider = document.getElementById('ttsRate');
const ttsPitchSlider = document.getElementById('ttsPitch');
const ttsVolumeSlider = document.getElementById('ttsVolume');
const testTtsBtn = document.getElementById('testTtsBtn');
```

#### C. Event Listeners
Se agregaron listeners para:
- **enableTTSCheckbox**: Activa/desactiva TTS y muestra/oculta opciones
- **ttsRateSlider**: Controla la velocidad de lectura (0.5x a 2x)
- **ttsPitchSlider**: Controla el tono de voz (0.5 a 2)
- **ttsVolumeSlider**: Controla el volumen (0 a 1)
- **ttsVoiceSelect**: Selecciona la voz disponible
- **testTtsBtn**: Reproduce una frase de prueba
- **repeatBtn**: Repite la pregunta actual

#### D. Funciones TTS

**`initializeTTSVoices()`**
- Obtiene las voces disponibles del sistema
- Llena el dropdown de voces
- Se ejecuta automáticamente cuando las voces están listas

**`speakText(text)`**
- Cancela cualquier síntesis anterior
- Crea una nueva `SpeechSynthesisUtterance`
- Aplica configuración de velocidad, tono, volumen
- Maneja eventos: `onstart`, `onend`, `onerror`
- Agrega animación al botón de repetir

**`speakCurrentQuestion()`**
- Obtiene la pregunta actual
- Llama a `speakText()` con el texto de la pregunta

**`loadQuestion()` modificado**
- Ahora lee automáticamente la pregunta si TTS está activo
- Usa `setTimeout` para no solapara con otros sonidos

---

## 🎯 Funcionalidades Incluidas

### ✅ En Pantalla Inicial
1. **Checkbox "Activar lectura de voz"**
   - Habilita/deshabilita todas las funciones TTS
   - Por defecto: activado ✓

2. **Dropdown de Voces**
   - "Automática" (usa voz predeterminada del SO)
   - Todas las voces instaladas del sistema
   - Se actualiza automáticamente

3. **Slider de Velocidad**
   - Rango: 0.5x a 2x
   - Por defecto: 1x (velocidad normal)
   - Paso: 0.25

4. **Slider de Tono**
   - Rango: 0.5 a 2
   - Por defecto: 1 (tono normal)
   - Paso: 0.25

5. **Slider de Volumen**
   - Rango: 0 a 1
   - Por defecto: 1 (volumen máximo)
   - Paso: 0.1

6. **Botón de Prueba**
   - Reproduce una frase de prueba con la configuración actual
   - Permite verificar voz, velocidad, tono y volumen

### ✅ En Pantalla de Preguntas
1. **Lectura Automática**
   - Cuando se carga una pregunta, se lee automáticamente si TTS está activo
   - Se espera 300ms para que la UI se renderice

2. **Botón Repetir (🔊)**
   - Ubicado en la esquina superior junto al timer
   - Repite la pregunta actual
   - Se anima (pulso) mientras habla
   - Función: `speakCurrentQuestion()`

---

## 🔧 Compatibilidad

### Navegadores Soportados
- ✅ **Chrome/Chromium** - Excelente soporte
- ✅ **Edge** - Excelente soporte
- ✅ **Safari** - Buen soporte
- ⚠️ **Firefox** - Soporte limitado (algunas voces pueden no funcionar)

### Idiomas
- **Español**: Principal idioma configurado (`es-ES`)
- Automáticamente detecta y usa voces del sistema instaladas

### Requisitos
- Navegador moderno (2020 o más reciente)
- Web Speech API soportada
- Conexión a internet: **NO requerida** (todo local)

---

## 📝 Cómo Usar

### Para el Estudiante

1. **Al iniciar el examen:**
   - Verá el checkbox "🎙️ Configuración de Voz"
   - Por defecto está activado ✓
   - Si quiere desactivarlo, solo desmarcar

2. **Configurar preferencias:**
   - **Voz**: Seleccionar de las disponibles
   - **Velocidad**: Ajustar con el slider (Lenta ← → Rápida)
   - **Tono**: Ajustar con el slider (Bajo ← → Alto)
   - **Volumen**: Ajustar con el slider (Bajo ← → Alto)

3. **Probar la configuración:**
   - Hacer clic en "🔊 Prueba de Voz"
   - Escuchar cómo suena con la configuración actual
   - Ajustar si es necesario

4. **Durante el examen:**
   - Las preguntas se leen automáticamente
   - Si quiere escuchar de nuevo, hacer clic en 🔊 (botón Repetir)
   - Mientras se lee, el botón 🔊 pulsea

---

## 🎓 Beneficios para la Aplicación

1. **Accesibilidad**
   - Ayuda a estudiantes con discapacidad visual
   - Refuerza el aprendizaje auditivo

2. **Flexibilidad**
   - Control total sobre voz, velocidad, tono, volumen
   - Adaptable a preferencias personales

3. **Tecnología Local**
   - Web Speech API nativa del navegador
   - No requiere servidor
   - No hay límites de uso
   - No hay costos

4. **Experiencia Mejorada**
   - Lectura automática reduce carga de lectura
   - Botón de repetir para claridad
   - Animaciones visuales durante síntesis

---

## 🔮 Mejoras Futuras Posibles

1. **Lectura de Opciones**
   ```javascript
   // Leer también las opciones de respuesta
   const optionTexts = question.options.join(". ");
   speakText(`${question.question}. Opciones: ${optionTexts}`);
   ```

2. **Ajustes por Pregunta**
   - Permitir cambiar velocidad mientras se lee
   - Pausa/Reanuda lectura

3. **Historial de Configuración**
   - Guardar preferencias en localStorage
   - Restaurar automáticamente

4. **Notificaciones Sonoras**
   - Sonido cuando se responde correctamente/incorrectamente
   - Sonido de alerta cuando falta poco tiempo

5. **Análisis de Rendimiento**
   - Medir si TTS afecta positivamente el aprendizaje
   - Estadísticas de uso

---

## 🧪 Testing

Para probar manualmente:

1. Abrir `index.html` en navegador
2. Ver la sección "🎙️ Configuración de Voz"
3. Ajustar controles
4. Hacer clic en "🔊 Prueba de Voz"
5. Escuchar el resultado
6. Comenzar examen y verificar lectura automática
7. Hacer clic en 🔊 durante preguntas para repetir

---

## 📊 Información Técnica

### Web Speech API
- **Estándar**: W3C Web Speech API
- **Documentación**: https://www.w3.org/TR/speech-api/
- **Métodos usados**:
  - `window.speechSynthesis.speak()`
  - `window.speechSynthesis.cancel()`
  - `SpeechSynthesisUtterance` constructor

### Configuración de SpeechSynthesisUtterance
```javascript
const utterance = new SpeechSynthesisUtterance(text);
utterance.rate = 0.5 to 2.0;      // Velocidad
utterance.pitch = 0.5 to 2.0;     // Tono
utterance.volume = 0 to 1;        // Volumen
utterance.lang = 'es-ES';         // Idioma
utterance.voice = voiceObject;    // Voz específica
```

---

## ✨ Conclusión

El sistema TTS está completamente integrado y funcional:
- ✅ Panel de configuración en inicio
- ✅ Lectura automática de preguntas
- ✅ Botón repetir con animación
- ✅ Control total del usuario
- ✅ Compatible con navegadores modernos
- ✅ Uso completamente local (sin servidor)
- ✅ Mejora significativa de accesibilidad
