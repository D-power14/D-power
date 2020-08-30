//TODO: Haciendo cosas de html y css con jquery, muy util (no es sarcasmo )

/*$(document).ready(function () {
    $('#parrafo').text('Holi')
    $('.saludo').css({ 'background-color': 'red' })
})*/

//ALL: usando el ready, para que es? ejecutar apenas comienza tal cosa, apenas cargar h1 darle color rojo entre muchos otras funciones xd

/*$().ready(function () {
    alert('hola')
})*/

//TODO: Condicional con ready, para manejar errores en su mayoria

/* $.when($.ready, $.getScript('Jqui.js'))
    .then(function () {
        console.log('pasó') //El if
    })
    .catch(function () {
        console.log('No pasó') // el else
    })
*/

//TODO: getters y setters (ver y asignar cosas)

/* var getters = $('h1').attr('id', 'hola') // obtener valor de esa clase, attr obtener y asignar un valor
alert(getters)
*/

//TODOS: hasclass y addclass, lo que hice para el projecto "abuela petra"

/* if ($('#parrafo').hasClass('saludo')) {
    alert('hola')
    $('#parrafo').removeClass('saludo')
} else {
    alert('no tiene la saludo')
    $('div').addClass('hola')
} */

//TODO:show and hide

/* $(function () {
    $('.saludo').css({ 'background-color': 'red', 'text-align': 'center' })
    if ($('#parrafo').hasClass('saludo')) {
        $(alert('si tiene la clase saludo'))
        $('#parrafo').show(3000) // Mostrando parrafo poco a poco en lo que dure 3 segundos
    } else {
        alert('no tiene la saludo')
        $('div').hide(3000) //esconder elementos
    }
}) */

//TODO: each y for, Iterando elementos

/* $(function () {
    var numbers = [1, 2, 4, 4, 4, 6, 67, 3, 4, 5]
    $.each(numbers, function (i, value) {
        console.log(i + ':' + value)

    })

    //mostrar con un for todo el array (numbers)

    console.log('tamaño del arreglo:' + numbers.length)
    for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
    }
})*/

//TODO: Iterar elementos for of, muestra arreglo(objetos), para ver info de objetos

/* var numbers = [1, 4, 6, 2] //me muestra todo los valores de este array 
for (let num of numbers) {
    console.log(num)
} */

//profundizando en for of

/*var colors = [
    {
        colors: [
            {
                colorName: 'red',
                hexValue: 'F00',
            },
            {
                colorName: 'green',
                hexValue: '0F0',
            },
            {
                colorName: 'blue',
                hexValue: '00f',
            },
        ],
    },
]
for (let color of colors) {
    console.log(color) //poner .-nombre del objeto- [elemento\s que quieras] si se necesita especificar, poner . despues de lo anterior para acceder a dato de un valor
    console.log(color) //poner .-nombre del objeto- [elemento\s que quieras] si se necesita especificar, poner . despues de lo anterior para acceder a dato de un valor
}*/

//TODO: Metodo attr, modificando cosas de una etiqueta, esta muy guay
$('#coc').click(function () {
    $('#coc').attr('width', 300)
    $('#coc').attr('src', 'Frank, el buen frank.jpg')
})