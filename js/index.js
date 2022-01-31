const btnF = document.getElementById('F');
const btnO = document.getElementById('O');
const btnD = document.getElementById('D');
const btnA = document.getElementById('A');
const btnClose = document.getElementById('close');
const modal_container = document.getElementById('modal_container');
const TituloModal = document.getElementById('Titulo_Modal');
const Tabla = document.getElementById('Tabla_Campo');
const BtnDicernimiento = document.getElementById('Dicernimiento');
const Dicernimiento = document.getElementById('_Dicernimiento');
const Btnmagis = document.getElementById('magis');
const magis = document.getElementById('_magis');
function disableScroll(){  
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
  window.onscroll = null;
}

btnF.addEventListener('click',() => {
  TituloModal.innerHTML= "Fortalezas";

  let FormatoTabla = `
  <tr>
  <th class="TITULOS_TABLA">
      Campo
  </th>
  <th class="TITULOS_TABLA">
      Descripción
  </th>
</tr>
<tr>
  <th  class="Descripcion_tabla">
      Academico
  </th>
  <th class="Descripcion_tabla">
  Me desempeño muy bien en el area de programación.
  </th>
</tr>
<tr>
  <th class="Descripcion_tabla">
      Familiar
  </th>
  <th class="Descripcion_tabla">
      Tengo una buena relación con toda mi familia.
  </th>
</tr>
<tr>
  <th class="Descripcion_tabla">
      Social
  </th>
  <th class="Descripcion_tabla">
      A las personas que conozco por primera vez les caigo muy bien.
  </th>
</tr>`;
Tabla.innerHTML= FormatoTabla;
window.addEventListener('scroll', disableScroll);
  modal_container.classList.add('show');  
})
btnO.addEventListener('click',() => {
  TituloModal.innerHTML= "Oportunidades";
  let FormatoTabla = `
  <tr>
  <th class="TITULOS_TABLA">
      Campo
  </th>
  <th class="TITULOS_TABLA">
      Descripción
  </th>
</tr>
<tr>
  <th  class="Descripcion_tabla">
      Academico
  </th>
  <th class="Descripcion_tabla">
  Puedo aplicar a una pasantia en Microsoft asi como tambien poder sumergirme más a fondo en mis planes de emprender
  </th>
</tr>
<tr>
  <th class="Descripcion_tabla">
      Familiar
  </th>
  <th class="Descripcion_tabla">
      Poder viajar a xela a visitar a todos mis familiares asi como a mi abuela paterna.
  </th>
</tr>
<tr>
  <th class="Descripcion_tabla">
      Social
  </th>
  <th class="Descripcion_tabla">
      Poder ser más sociable.
  </th>
</tr>`;
Tabla.innerHTML= FormatoTabla;
window.addEventListener('scroll', disableScroll);
  modal_container.classList.add('show');  
})
btnD.addEventListener('click',() => {
  TituloModal.innerHTML= "Debilidades";
  let FormatoTabla = `
  <tr>
  <th class="TITULOS_TABLA">
      Campo
  </th>
  <th class="TITULOS_TABLA">
      Descripción
  </th>
</tr>
<tr>
  <th  class="Descripcion_tabla">
      Academico
  </th>
  <th class="Descripcion_tabla">
      No soy muy bueno en las matemáticas.
  </th>
</tr>
<tr>
  <th class="Descripcion_tabla">
      Familiar
  </th>
  <th class="Descripcion_tabla">
    Tenemos el mal habito de no hacer algo en familia si no es requerido
  </th>
</tr>
<tr>
  <th class="Descripcion_tabla">
      Social
  </th>
  <th class="Descripcion_tabla">
      Soy muy timido para relacionarme con las demas personas.
  </th>
</tr>`;
Tabla.innerHTML= FormatoTabla;
window.addEventListener('scroll', disableScroll);
  modal_container.classList.add('show');  
})
btnA.addEventListener('click',() => {
  TituloModal.innerHTML= "Aptitudes";
  let FormatoTabla = `
  <tr>
  <th class="TITULOS_TABLA">
      Campo
  </th>
  <th class="TITULOS_TABLA">
      Descripción
  </th>
</tr>
<tr>
  <th  class="Descripcion_tabla">
      Academico
  </th>
  <th class="Descripcion_tabla">
      Mis soluciones propuestas pueden ser no muy efectiva.
  </th>
</tr>
<tr>
  <th class="Descripcion_tabla">
      Familiar
  </th>
  <th class="Descripcion_tabla">
      Mi madre no tiene trabajo asi que puede dificultarse el ir a xela.
  </th>
</tr>
<tr>
  <th class="Descripcion_tabla">
      Social
  </th>
  <th class="Descripcion_tabla">
     Soy cerrado a conocer personas nuevas si no lo es necesario.
  </th>
</tr>`;
Tabla.innerHTML= FormatoTabla;
window.addEventListener('scroll', disableScroll);
  modal_container.classList.add('show');  
})

btnClose.addEventListener('click', () => {
  Tabla.innerHTML= "";
  modal_container.classList.remove('show');
  window.removeEventListener('scroll', disableScroll);  
  window.addEventListener('scroll',enableScroll);
});
const arrow = document.querySelector('#arrow');
const scroll = VanillaScrollspy(arrow);
const navbar = document.querySelector('#Menu');
const scrollspy = VanillaScrollspy(navbar);
scroll.init();
scrollspy.init();