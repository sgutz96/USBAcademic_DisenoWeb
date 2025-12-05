Write-Host "Creando estructura del Curso de Diseno Web..."

# Array de clases: numero|tema|proyecto|tarea
$clases = @(
  "1|Introduccion a diseno web, historia, HTML, Git y GitHub|Primera pagina HTML + publicacion en GitHub Pages|Crear su propia pagina HTML y subirla a GitHub Pages"
  "2|CSS Basico|Tarjeta o mini landing hecha con CSS|Replicar una tarjeta o diseno entregado"
  "3|Responsive + Media Queries|Layout que cambia entre movil, tablet y desktop|Adaptar su tarjeta a 3 breakpoints"
  "4|Flexbox + Grid|Galeria o dashboard con grid y flex|Crear una galeria responsive usando grid"
  "5|Tailwind (Bootstrap opcional)|Hero + botones + cards en Tailwind|Construir un hero o banner usando Tailwind"
  "6|Entrega 1 + Introduccion a JS|Revision landing + demo de variables y funciones|Completar la landing y subirla al repositorio"
  "7|JS: funciones, clases, DOM y eventos|Menu hamburguesa funcional o modal dinamico|Crear un menu interactivo con JS"
  "8|DOM avanzado + localStorage + fetch basico|To-do list persistente|Crear una to-do list con localStorage"
  "9|APIs|Pequena app consumiendo API publica|Consumir una API y mostrar tarjetas"
  "10|Three.js basico|Escena + camara + cubo rotando|Crear una escena simple con un objeto animado"
  "11|Three.js avanzado|Cargar modelo glTF + iluminacion|Cargar un modelo 3D e interactuar con el"
  "12|Entrega 2 + Que es un framework?|Presentacion del proyecto 3D|Subir su demo 3D con Three.js"
  "13|Introduccion a Vue + primer proyecto|Lista reactiva (tareas o notas)|Crear un contador y un input reactivo en Vue"
  "14|Vue: componentes, props y eventos|Componentes tipo Card reutilizables|Crear un componente Card con props"
  "15|Vue Router + consumo de APIs|Mini SPA (2 a 3 vistas)|Crear una mini SPA con routing y consumo de API"
  "16|Entrega final|Presentacion del proyecto final|Entregar proyecto completo del curso"
)

foreach ($clase in $clases) {
    $parts = $clase -split "\|"
    $numero = $parts[0]
    $tema = $parts[1]
    $proyecto = $parts[2]
    $tarea = $parts[3]

    # Crear carpeta con formato clase-01, clase-02, etc.
    $carpeta = "clase-{0:d2}" -f [int]$numero

    Write-Host "Creando carpeta $carpeta..."
    New-Item -ItemType Directory -Force -Path $carpeta | Out-Null

    # Crear README.md
    $contenido = @"
# Clase $($numero): $($tema)

## Objetivo de la clase

En esta clase aprenderemos sobre: $($tema)

## Proyecto en clase

$($proyecto)

### Pasos a seguir:

1. Paso 1 - descripcion
2. Paso 2 - descripcion
3. Paso 3 - descripcion

## Tarea para la casa

$($tarea)

### Requisitos:

- [ ] Requisito 1
- [ ] Requisito 2
- [ ] Requisito 3

### Entrega:

- Fecha limite: [Fecha]
- Subir el proyecto a GitHub
- Compartir el link de GitHub Pages (si aplica)

## Recursos adicionales

- Recurso 1
- Recurso 2
- Recurso 3

## Tips y buenas practicas

- Tip 1
- Tip 2
- Tip 3

---
"@

    $contenido | Out-File -Encoding UTF8 "$carpeta\README.md"

    Write-Host "Carpeta $carpeta creada correctamente."
}

Write-Host ""
Write-Host "Estructura creada exitosamente."
Write-Host "Carpetas generadas:"
Get-ChildItem -Directory "clase-*"
