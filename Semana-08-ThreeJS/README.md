# Semana-08-ThreeJS

## 📌 Descripción

En esta semana se introducen los fundamentos de **Three.js**, explorando cómo construir una escena 3D desde cero.

Se abordará todo el flujo básico: desde la inclusión de la librería, hasta la creación de escenas, cámaras, luces, objetos, materiales y controles de navegación.

Esta semana es clave, ya que establece las bases necesarias para luego integrar Three.js en experiencias web más complejas.

---

## 🎯 Objetivo

Comprender los fundamentos de Three.js y construir una escena 3D funcional con navegación interactiva.

---

## 🧠 Conceptos clave

### Configuración inicial

* Inclusión de Three.js (CDN o módulos)
* Estructura base del proyecto
* Uso de `canvas` en el DOM


 <script type="importmap">
    {
        "imports": {
            "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
            "three/examples/jsm/loaders/GLTFLoader.js": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js"
        }
    }
</script>


---

### Elementos fundamentales

* Escena (`Scene`)
* Cámara (`PerspectiveCamera`)
* Renderizador (`WebGLRenderer`)

---

### Geometrías primitivas

* Cubo (`BoxGeometry`)
* Esfera (`SphereGeometry`)
* Plano (`PlaneGeometry`)
* Cilindro (`CylinderGeometry`)

---

### Materiales

* `MeshBasicMaterial`
* `MeshStandardMaterial`
* Uso de color
* Introducción a iluminación

---

### Luces

* `AmbientLight`
* `DirectionalLight`
* Concepto de iluminación en tiempo real

---

### Objetos 3D

* `Mesh`
* Posición, rotación y escala
* Jerarquías básicas

---

### Controles de cámara

* `OrbitControls`
* Navegación en la escena
* Interacción básica del usuario

---

### Loop de animación

* `requestAnimationFrame`
* Render continuo
* Animación de objetos

---