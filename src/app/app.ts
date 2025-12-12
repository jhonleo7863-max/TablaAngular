import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: false
})
export class AppComponent {
  title = 'Tabla Simple en Angular';

  // Datos para la tabla
  personas = [
    { id: 1, nombre: 'Ana García', edad: 28, ciudad: 'Madrid', email: 'ana@ejemplo.com' },
    { id: 2, nombre: 'Carlos López', edad: 35, ciudad: 'Barcelona', email: 'carlos@ejemplo.com' },
    { id: 3, nombre: 'María Rodríguez', edad: 22, ciudad: 'Valencia', email: 'maria@ejemplo.com' },
    { id: 4, nombre: 'David Fernández', edad: 41, ciudad: 'Sevilla', email: 'david@ejemplo.com' },
    { id: 5, nombre: 'Laura Martínez', edad: 31, ciudad: 'Bilbao', email: 'laura@ejemplo.com' },
    { id: 6, nombre: 'Javier Sánchez', edad: 26, ciudad: 'Málaga', email: 'javier@ejemplo.com' },
    { id: 7, nombre: 'Sofía Pérez', edad: 29, ciudad: 'Zaragoza', email: 'sofia@ejemplo.com' },
    { id: 8, nombre: 'Daniel Gómez', edad: 38, ciudad: 'Murcia', email: 'daniel@ejemplo.com' }
  ];

  // Columnas a mostrar
  columnas = [
    { key: 'id', nombre: 'ID' },
    { key: 'nombre', nombre: 'Nombre' },
    { key: 'edad', nombre: 'Edad' },
    { key: 'ciudad', nombre: 'Ciudad' },
    { key: 'email', nombre: 'Email' }
  ];

  // Método para obtener la persona más joven
  getPersonaMasJoven(): string {
    if (this.personas.length === 0) return 'No hay datos';

    const personaMasJoven = this.personas.reduce((prev, current) =>
      (prev.edad < current.edad) ? prev : current
    );

    return personaMasJoven.nombre + ' (' + personaMasJoven.edad + ' años)';
  }

  // Método para obtener la persona mayor
  getPersonaMayor(): string {
    if (this.personas.length === 0) return 'No hay datos';

    const personaMayor = this.personas.reduce((prev, current) =>
      (prev.edad > current.edad) ? prev : current
    );

    return personaMayor.nombre + ' (' + personaMayor.edad + ' años)';
  }
}
