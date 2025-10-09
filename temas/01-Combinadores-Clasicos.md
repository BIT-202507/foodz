# Combinadores

## Combinadores Clásicos

### Descendiente (A B)

Selecciona cualquier B dentro de A en cualquier nivel de anidación.

```HTML
<div>
  <p>Parrafo dentro de div</p>
  <section>
    <p>Parrafo dentro de section dentro de div</p>
  </section>
</div>
```
```CSS
div p {
  color: red;
}
```

### Hijo directo (A > B)

Selecciona solo B que sea hijo inmediato de A.

```HTML
<div>
  <p>Hijo directo</p>
  <section>
    <p>Nieto (no aplica)</p>
  </section>
</div>
```
```CSS
div > p {
  color: blue;
}
```

### Hermano adyacente (A + B)

Selecciona el B que aparece inmediatamente después de A.

```HTML
<h1>Título</h1>
<p>Párrafo después del título (se aplica)</p>
<p>Otro párrafo (no aplica)</p>
```
```CSS
h1 + p {
  font-weight: bold;
}
```

### Hermanos generales (A ~ B)

Selecciona todos los B que aparecen después de A en el mismo nivel.

```HTML
<h1>Título</h1>
<p>Primer párrafo después (se aplica)</p>
<p>Segundo párrafo después (también aplica)</p>
```
```CSS
h1 ~ p {
  color: gray;
}
```

### Columna (A || B)

Selecciona elementos en la misma columna de tablas o CSS Grid.

```HTML
<table>
  <colgroup>
    <col class="highlight">
  </colgroup>
  <tr>
    <td>Celda 1</td>
    <td>Celda 2</td>
  </tr>
</table>
```
```CSS 
col.highlight || td {
  background: yellow;
}
```
