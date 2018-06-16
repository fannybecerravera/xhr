const btn = document.querySelector('button');//se llama al boton a traves queryselector se guarda en la constante
const img = document.getElementById('photo');//se llama al id de img se guarda en una costante
const url = 'https://dog.ceo/api/breeds/image/random';//esta es la url de la API donde haremos la peticion y se guarda en una constante como string ente comillas
//desde aqui siempre es lo mismo eso si cambia los parametros dependiendo y lo guardremos en una constante
//haremos la llamada a XHR
const getJSON = (url, callback) => {//recibira el los parametros la url de la API y al calback que era una funcion dentro de una funcion y esta esperando la respuesta
  //crear instancia del objeto XMLHttpRequest y lo guardamos en la constante
const request = new XMLHttpRequest();
//a xhr le agregaremos un metodo el onload que nos dice cuando se cargue la respuesta pasara esto, verificara si se hizo la peticion correctamente
request.onload = () => {
  //4; la peticion se termino y la respuesta esta lista
  //200:status esta ok estos dos metodos reconocen que la peticion fue correcta
  if(request.readyState === 4 && request.status === 200);{
    callback(request.responseText);//cuando este lista la peticion a  callback se le pasara la respuesta echa strings esa propiedad de hacer string lo hace responseText
  }
}
//open se encarga de preprarar la solisitud
request.open('GET', url); //y recbe como parametro a get porque esta pidiendo datos, esta listo para recibirla y la url de donde sacara los datos y hara la peticion
//send
request.send();// enviara la solicitud
}
//ahora vamos a ejecutar la respuesta a traves del evento click del boton
btn.addEventListener('click', () =>{
getJSON(url,response => {//toda nuestra peticion se guardo en una variable que fue getJSON  y funcionara con el url y la respuesta que recivimos que es response estos son sus parametros
let doggie = JSON.parse(response).message;//ahora Json.parse (es un metodo)tomara la respueta entregada como string y la pasara a objeto, .message esta recibiendo la nueva imagen
console.log(doggie);// para verificar el parseo
img.src = doggie; //debemos remplazar la imagen del html por la de la API
})
});