# Configuración para GitHub Pages

Este proyecto está optimizado para ejecutarse en **GitHub Pages** sin configuración adicional.

## 🚀 Desplegar en GitHub Pages

### 1. Crear un repositorio en GitHub

```bash
git init
git add .
git commit -m "Inicial: PreparaExamenJEMarinLM v2.0.0"
git branch -M main
git remote add origin https://github.com/tu-usuario/PreparaExamenJEMarinLM.git
git push -u origin main
```

### 2. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. Bajo "Source", selecciona **main branch**
4. Haz clic en **Save**

Tu sitio estará disponible en: `https://tu-usuario.github.io/PreparaExamenJEMarinLM/`

### 3. Verificar el despliegue

- Espera 2-3 minutos
- Visita `https://tu-usuario.github.io/PreparaExamenJEMarinLM/`
- ¡Listo! Tu juego estará disponible online

## 📝 Nota sobre localStorage

El juego usa `localStorage` para guardar estadísticas. Esto funciona perfectamente en GitHub Pages, pero:

- Las estadísticas se guardan **localmente en cada navegador**
- Los datos NO se envían a servidores
- Cada usuario tiene sus propias estadísticas
- Los datos persisten aunque cierres el navegador

## 🔒 Privacidad

- ✅ Sin cookies
- ✅ Sin análisis
- ✅ Sin servidores
- ✅ 100% privado

El código es completamente público y auditable.
