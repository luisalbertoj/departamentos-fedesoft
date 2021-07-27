const puebloCiudad = () => {
  ubicacion = prompt("Ingresa pueblo o ciudad o salir para terminar");
  ubicacion = ubicacion.toLowerCase();

  if (
    ubicacion == "cucuta" ||
    ubicacion == "chinacota" ||
    ubicacion == "pamplona" ||
    ubicacion == "bochalema"
  ) {
    return alert("El departamento es norte de santander");
  }
  if (
    ubicacion == "medellin" ||
    ubicacion == "jardin" ||
    ubicacion == "jerico" ||
    ubicacion == "guatape"
    ) {
    return alert("El departamento antioquia");
  }
  if (
    ubicacion == "cali" ||
    ubicacion == "buenaventura" ||
    ubicacion == "calima" ||
    ubicacion == "palmira"
    ) {
    return alert("El departamento es valle del cauca");
  }
  if (
    ubicacion == "zipaquira" ||
    ubicacion == "suesca" ||
    ubicacion == "soacha" ||
    ubicacion == "facatativa"
  ) {
    return alert("El departamento es cundinamarca");
  }
  return alert("La ciudad o pueblo no esta en la lista");
};
let ubicacion = "";
while (ubicacion != "salir") {
  puebloCiudad();
}