console.log("Expo funcionando 🚀");

/* NAVBAR */

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#47071b";

    } else {

        navbar.style.background = "rgba(71,7,27,0.95)";

    }

});

/* =========================
   ESPECIALIDADES
========================= */

const especialidades = {

    da: {

        titulo:"📱 Desarrollo Móvil",

        descripcion:
        "Especialidad enfocada en el desarrollo de aplicaciones móviles, sitios web y soluciones digitales utilizando programación y diseño de interfaces.",

        info:
        `
        <div>
        <h4>📚 Lo que se aprende</h4>

        <ul>
            <li>Programación</li>
            <li>Desarrollo Web</li>
            <li>Diseño UX/UI</li>
            <li>Bases de datos</li>
            <li>Lógica computacional</li>
            <li>Diseño de interfaces</li>
            <li>Trabajo en equipo</li>
        </ul>
        </div>

        <div>
        <h4>💡 Habilidades</h4>

        <ul>
            <li>Pensamiento lógico</li>
            <li>Creatividad</li>
            <li>Diseño digital</li>
            <li>Resolución de problemas</li>
        </ul>
        </div>

        <div>
        <h4>🚀 Proyecto realizado</h4>

        <p>
        En el año 2025 los pasantes realizaron una página web del colegio utilizando WordPress.
        </p>
        </div>
        `,

        imagen:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070"

    },

    co: {

        titulo:"💵 Contabilidad",

        descripcion:
        "Especialidad orientada al manejo financiero, administración de recursos y análisis económico empresarial.",

        info:
        `
        <div>
        <h4>📚 Lo que se aprende</h4>

        <ul>
            <li>Contabilidad financiera</li>
            <li>Presupuestos</li>
            <li>Impuestos</li>
            <li>Auditoría</li>
            <li>Registro de operaciones</li>
            <li>Gestión empresarial</li>
        </ul>
        </div>

        <div>
        <h4>💡 Habilidades</h4>

        <ul>
            <li>Análisis financiero</li>
            <li>Organización</li>
            <li>Precisión</li>
            <li>Administración</li>
        </ul>
        </div>
        `,

        imagen:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011"

    },

    al: {

        titulo:"🚚 Administración y Logística",

        descripcion:
        "Se enfoca en organizar procesos empresariales, distribución de productos e inventarios.",

        info:
        `
        <div>
        <h4>📚 Lo que se aprende</h4>

        <ul>
            <li>Inventarios</li>
            <li>Logística empresarial</li>
            <li>Distribución</li>
            <li>Organización administrativa</li>
            <li>Gestión de operaciones</li>
        </ul>
        </div>

        <div>
        <h4>💡 Habilidades</h4>

        <ul>
            <li>Liderazgo</li>
            <li>Organización</li>
            <li>Gestión del tiempo</li>
            <li>Trabajo colaborativo</li>
        </ul>
        </div>
        `,

        imagen:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"

    },

    so: {

        titulo:"🛡️ Salud Ocupacional",

        descripcion:
        "Especialidad enfocada en proteger la salud y seguridad dentro del ambiente laboral.",

        info:
        `
        <div>
        <h4>📚 Lo que se aprende</h4>

        <ul>
            <li>Prevención de riesgos</li>
            <li>Seguridad laboral</li>
            <li>Primeros auxilios</li>
            <li>Normativa de seguridad</li>
            <li>Bienestar ocupacional</li>
        </ul>
        </div>

        <div>
        <h4>💡 Habilidades</h4>

        <ul>
            <li>Liderazgo</li>
            <li>Observación</li>
            <li>Prevención</li>
            <li>Trabajo bajo normas</li>
        </ul>
        </div>

        <div>
        <h4>🚀 Proyectos realizados</h4>

        <p>
        Actividades de protocolos, simulacros y primeros auxilios.
        </p>
        </div>
        `,

        imagen:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070"

    },

    ec: {

        titulo:"📈 Ejecutivo Comercial",

        descripcion:
        "Especialidad orientada a negocios, ventas, marketing y atención al cliente.",

        info:
        `
        <div>
        <h4>📚 Lo que se aprende</h4>

        <ul>
            <li>Marketing</li>
            <li>Negociación</li>
            <li>Ventas</li>
            <li>Servicio al cliente</li>
            <li>Comunicación empresarial</li>
        </ul>
        </div>

        <div>
        <h4>💡 Habilidades</h4>

        <ul>
            <li>Comunicación</li>
            <li>Liderazgo</li>
            <li>Negociación</li>
            <li>Creatividad comercial</li>
        </ul>
        </div>

        <div>
        <h4>🚀 Proyectos realizados</h4>

        <p>
        Proyectos de emprendimiento y ExpoTécnica.
        </p>
        </div>
        `,

        imagen:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070"

    }

};

/* MODAL */

function abrirEspecialidad(id){

    const e = especialidades[id];

    document.getElementById("modalTitulo").innerHTML = e.titulo;

    document.getElementById("modalDescripcion").innerHTML =
    e.descripcion;

    document.getElementById("modalPuntos").innerHTML =
    e.info;

    document.getElementById("modalImagen").src =
    e.imagen;

    const modal = new bootstrap.Modal(
        document.getElementById("modalEspecialidad")
    );

    modal.show();

}

/* =========================
   TEST VOCACIONAL
========================= */

const preguntas = [

    {
        pregunta:"¿Qué actividad te llama más la atención?",
        opciones:[
            {texto:"Crear aplicaciones y tecnología", valor:"da"},
            {texto:"Administrar dinero y presupuestos", valor:"co"},
            {texto:"Organizar inventarios y productos", valor:"al"},
            {texto:"Proteger la seguridad de personas", valor:"so"},
            {texto:"Vender productos y negociar", valor:"ec"}
        ]
    },

    {
        pregunta:"¿Qué habilidad sentís más fuerte en vos?",
        opciones:[
            {texto:"Creatividad digital", valor:"da"},
            {texto:"Precisión y orden", valor:"co"},
            {texto:"Liderazgo organizacional", valor:"al"},
            {texto:"Prevención y observación", valor:"so"},
            {texto:"Comunicación", valor:"ec"}
        ]
    },

    {
        pregunta:"¿Qué tipo de trabajo te gustaría tener?",
        opciones:[
            {texto:"Programador o diseñador web", valor:"da"},
            {texto:"Contador o auditor", valor:"co"},
            {texto:"Administrador logístico", valor:"al"},
            {texto:"Inspector de seguridad", valor:"so"},
            {texto:"Ejecutivo de ventas", valor:"ec"}
        ]
    },

    {
        pregunta:"¿Cuál ambiente laboral preferís?",
        opciones:[
            {texto:"Tecnología e innovación", valor:"da"},
            {texto:"Oficinas financieras", valor:"co"},
            {texto:"Empresas y bodegas", valor:"al"},
            {texto:"Espacios seguros y protocolos", valor:"so"},
            {texto:"Empresas comerciales", valor:"ec"}
        ]
    },

    {
        pregunta:"¿Qué actividad disfrutarías más?",
        opciones:[
            {texto:"Diseñar una app", valor:"da"},
            {texto:"Analizar ganancias", valor:"co"},
            {texto:"Coordinar operaciones", valor:"al"},
            {texto:"Aplicar protocolos", valor:"so"},
            {texto:"Crear campañas de ventas", valor:"ec"}
        ]
    }

];

let preguntaActual = 0;

let puntajes = {
    da:0,
    co:0,
    al:0,
    so:0,
    ec:0
};

function cargarPregunta(){

    if(preguntaActual >= preguntas.length){

        mostrarResultado();
        return;

    }

    const pregunta = preguntas[preguntaActual];

    document.getElementById("pregunta").innerHTML =
    pregunta.pregunta;

    const opcionesDiv =
    document.getElementById("opciones");

    opcionesDiv.innerHTML = "";

    pregunta.opciones.forEach(opcion => {

        opcionesDiv.innerHTML +=
        `
        <button
        class="btn-opcion"
        onclick="seleccionarRespuesta('${opcion.valor}')">

        ${opcion.texto}

        </button>
        `;

    });

}

function seleccionarRespuesta(valor){

    puntajes[valor]++;

    preguntaActual++;

    cargarPregunta();

}

function mostrarResultado(){

    let ganador = "da";

    for(let carrera in puntajes){

        if(puntajes[carrera] > puntajes[ganador]){

            ganador = carrera;

        }

    }

    document.getElementById("pregunta").innerHTML =
    "Tu especialidad ideal es:";

    document.getElementById("resultado").innerHTML =
    `
    <div>

        <h1>
            ${especialidades[ganador].titulo}
        </h1>

        <button
        class="btn btn-vino mt-4"
        onclick="reiniciarTest()">

        Hacer el test otra vez

        </button>

    </div>
    `;

    document.getElementById("opciones").innerHTML = "";

}
cargarPregunta();

function reiniciarTest(){

    preguntaActual = 0;

    puntajes = {

        da:0,
        co:0,
        al:0,
        so:0,
        ec:0

    };

    document.getElementById("resultado").innerHTML = "";

    cargarPregunta();

}