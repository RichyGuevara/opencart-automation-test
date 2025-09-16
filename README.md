# 🛠 Prueba Técnica - Automatización y API

Este repositorio contiene la solución de la prueba técnica dividida en **dos partes**:

- **Punto 1** → Pruebas funcionales de API y pruebas de carga y estrés con JMeter.  
- **Punto 2** → Automatización web con Playwright (flujo de compra en OpenCart).  

Cada parte está organizada en carpetas separadas y contiene sus instrucciones específicas.

---

## Punto 2 - Automatización con Playwright

En esta parte se implementa un **flujo de compra en OpenCart**:
1. Login de usuario.  
2. Agregar productos al carrito.  
3. Eliminar un producto.  
4. Actualizar la cantidad de un producto a 2.  
5. Validar el contenido final del carrito.
6. Realizar una compra exitosa.  

### 🔧 Dependencias
- [Node.js](https://nodejs.org/) v18 o superior  
- [Playwright](https://playwright.dev/)  

### 📥 Instalación
```bash
cd quality-control-prueba/PUNTO2
npm install
npx playwright install
