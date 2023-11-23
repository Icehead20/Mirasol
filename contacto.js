function calcularEdad(fechaNacimiento) {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    return edad;
}
function mostrarMensajeExito(datos) {
    const mensajeExito = document.getElementById("mensaje-exito");
    mensajeExito.style.display = "block";
    const mensajeHTML = `
    <h2>Formulario De Contratación</h2>
    <p>Nombre: ${datos.nombre}</p>
    <p>Email: ${datos.email}</p>
    <p>Fecha De Nacimiento: ${datos.fechaNacimiento}</p>
    <p>Edad: ${datos.edad} años</p>
    <p>Rango De Ingreso: ${datos.rangoIngreso}</p>
    <p>Género: ${datos.genero}</p>
    <p>Grado Académico: ${datos.gradoAcademico}</p>
    `;
    mensajeExito.innerHTML = mensajeHTML;
}
function mostrarMensajeError(mensaje) {
    const mensajeError = document.querySelector('.modal-body');
    mensajeError.innerHTML = `
    <h2>Error</h2>
    <p>${mensaje}</p>
    `;
    $('#modalMensaje').modal('show');
}
function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    const rangoIngreso = document.getElementById("rango-ingreso").value;
    const genero = document.querySelector('select#genero').value;
    const gradoAcademicoOptions = document.querySelectorAll('select#grado-academico option:checked');
    const gradoAcademico = Array.from(gradoAcademicoOptions).map(option => option.value);
    const edad = calcularEdad(fechaNacimiento);
    if (!nombre || !email || !fechaNacimiento || gradoAcademico.length === 0) {
        mostrarMensajeError('Verifique que todos los campos estén llenos y con datos correctos.');
    } else {
		if(email.includes('@') && email.includes('.')){
			const datosFormulario = {
				nombre,
				email,
				fechaNacimiento,
				rangoIngreso,
				genero,
				gradoAcademico,
				edad,
			};
			const mensajeExito = document.querySelector('.modal-body');
			mensajeExito.innerHTML = `
			<h2>Formulario De Contratación</h2>
			<p>Nombre: ${datosFormulario.nombre}</p>
			<p>Email: ${datosFormulario.email}</p>
			<p>Fecha De Nacimiento: ${datosFormulario.fechaNacimiento}</p>
			<p>Edad: ${datosFormulario.edad} años</p>
			<p>Rango De Ingreso: ${datosFormulario.rangoIngreso}</p>
			<p>Género: ${datosFormulario.genero}</p>
			<p>Grado Académico: ${datosFormulario.gradoAcademico.join(', ')}</p>
			<p>Su Solicitud fue enviada, espere a que nos contactemos devuelta con usted!</p>
			`;
			$('#modalMensaje').modal('show');
		}else{
			mostrarMensajeError('El Email Debe incluir @ y un punto .');
		}
    }
}
document.getElementById("enviar").addEventListener("click", function () {
    enviarFormulario();
});
document.getElementById("modalCerrar").addEventListener("click", function () {
    $('#modalMensaje').modal('hide');
});