# Combinadores usando Seudo-clases
Una seudo-clase es una palabra clave que se añade a un selector y define un estado especial de un elemento. 

Sirven para seleccionar elementos según condiciones dinámicas: interacción del usuario, posición en el DOM o características del elemento que no se pueden describir solo con etiquetas o clases.

## 1. Seudo-clases dinámicas (interacción del usuario)
### :hover

Cuando el puntero pasa sobre el elemento.
```HTML
<button>Botón</button>
```
```CSS
button:hover {
  background: lightblue;
}
```

### :active
Mientras el elemento está siendo presionado (clic).
```CSS
button:active {
  background: darkblue;
  color: white;
}
```

### :focus

Cuando un elemento recibe foco (ejemplo: input activo).
```HTML
<input type="text" placeholder="Escribe aquí">
```
```CSS
input:focus {
  border: 2px solid green;
}
```

### :visited y :link

Estados de enlaces.

### :link → enlaces no visitados.

### :visited → enlaces visitados.
```HTML
<a href="#">Enlace</a>
```
```CSS
a:link { color: blue; }
a:visited { color: purple; }
```

## 2. Seudo-clases estructurales (posición en el DOM)
### :first-child

El primer hijo de su padre.
```HTML
<ul>
  <li>Primer ítem</li>
  <li>Segundo ítem</li>
</ul>
```
```CSS
li:first-child {
  font-weight: bold;
}
```

### :last-child

El último hijo de su padre.
```CSS
li:last-child {
  color: red;
}
```

### :nth-child(n)

Selecciona elementos según su posición.

```CSS
li:nth-child(2) {
  background: yellow; /* segundo li */
}
li:nth-child(odd) { background: #eee; } /* impares */
li:nth-child(even) { background: #ccc; } /* pares */
```

### :nth-of-type(n)

Igual que :nth-child, pero solo cuenta un tipo de elemento específico.
```HTML
<p>Texto 1</p>
<span>Span 1</span>
<p>Texto 2</p>
```
```CSS
p:nth-of-type(2) {
  color: blue; /* segundo <p> */
}
```

### :only-child

Elemento que es el único hijo de su padre.
```HTML
<div><p>Único hijo</p></div>
```
```CSS
p:only-child {
  border: 1px solid red;
}
```

## 3. Seudo-clases de estado UI (formularios)
### :checked

Elementos seleccionados en inputs (checkbox, radio).
```HTML
<input type="checkbox" checked> Aceptar
```
```CSS
input:checked {
  outline: 2px solid green;
}
```

### :disabled y :enabled

Inputs habilitados o deshabilitados.
```HTML
<input type="text" disabled>
<input type="text">
```
```CSS
input:disabled { background: #ddd; }
input:enabled { background: white; }
```

### :required y :optional

Campos obligatorios u opcionales.
```HTML
<input type="text" required>
```
```CSS
input:required { border: 2px solid red; }
input:optional { border: 1px solid gray; }
```
### :valid y :invalid

Dependen de la validación del input (ej: email válido).
```HTML
<input type="email" placeholder="correo@ejemplo.com">
```
```CSS
input:valid { border: 2px solid green; }
input:invalid { border: 2px solid red; }
```
## 4. Seudo-clases modernas
### :is()

Agrupa selectores sin aumentar especificidad.
```CSS
:is(h1, h2, h3) { color: navy; }
```
### :where()
Igual que :is(), pero especificidad = 0.
```CSS
:where(h1, h2, h3) { margin: 0; }
```

### :has()

Selecciona un elemento si contiene otro.
```CSS
article:has(img) { border: 1px solid black; }
```
### :not()

Excluye elementos del selector.
```CSS
p:not(.importante) { color: gray; }
```