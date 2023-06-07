var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];
  var cuentaSeleccionada = null;
  
  function ingresar() {
    var seleccion = document.getElementById("cuentas").value;
    var password = document.getElementById("password").value;
  
    if (seleccion !== "" && password !== "") {
      if (password === "1234") { 
        cuentaSeleccionada = parseInt(seleccion);
        document.getElementById("opciones").style.display = "block";
        document.getElementById("password").value = "";
      } else {
        alert("Contraseña incorrecta. Inténtalo nuevamente.");
      }
    } else {
      alert("Selecciona una cuenta y escribe el password.");
    }
  }
  
  function consultarSaldo() {
    var saldo = cuentas[cuentaSeleccionada].saldo;
    document.getElementById("saldo").textContent = "Saldo actual: $" + saldo;
  }
  
  function ingresarMonto() {
    var monto = parseInt(document.getElementById("montoIngresar").value);
  
    if (!isNaN(monto) && monto > 0) {
      var saldoActual = cuentas[cuentaSeleccionada].saldo;
      var nuevoSaldo = saldoActual + monto;
  
      if (nuevoSaldo <= 990) {
        cuentas[cuentaSeleccionada].saldo = nuevoSaldo;
        document.getElementById("saldo").textContent = "Monto ingresado: $" + monto + " | Nuevo saldo: $" + nuevoSaldo;
      } else {
        alert("No se puede ingresar el monto. La cuenta excederá el límite permitido.");
      }
    } else {
      alert("Ingresa un monto válido.");
    }
  
    document.getElementById("montoIngresar").value = "";
  }
  
  function retirarMonto() {
    var monto = parseInt(document.getElementById("montoRetirar").value);
  
    if (!isNaN(monto) && monto > 0) {
      var saldoActual = cuentas[cuentaSeleccionada].saldo;
      var nuevoSaldo = saldoActual - monto;
  
      if (nuevoSaldo >= 10) {
        cuentas[cuentaSeleccionada].saldo = nuevoSaldo;
        document.getElementById("saldo").textContent = "Monto retirado: $" + monto + " | Nuevo saldo: $" + nuevoSaldo;
      } else {
        alert("No se puede retirar el monto. La cuenta no debe tener menos de $10.");
      }
    } else {
      alert("Ingresa un monto válido.");
    }
  
    document.getElementById("montoRetirar").value = "";
  }
  