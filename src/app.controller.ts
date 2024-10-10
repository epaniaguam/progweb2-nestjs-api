import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';
import { DatosFormDTO } from './datosForm.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('curso')
  getCurso(): string {
    return this.appService.getCurso();
  }

  @Get('google')
  @Redirect('https://google.com')
  getIrGoogle() {
    //Hara todo esto antes de redirigir a google
    const nombre: string = 'Elias';
    console.log(nombre);
  }

  // Recibir parametros por URL /datos/valor
  @Get('datos/:nombre')
  getDatos(@Param() datos: any) {
    console.log('parametros', datos);
    return 'Datos de la BD: ' + datos + ' | ' + datos.nombre;
  }

  // Recibimos por params datosparams?nombre=valor
  @Get('datosparams')
  getDatosParams(@Query('nombre') nombre: string) {
    console.log('nombre:', nombre);
    return `Datos Params BD: ${nombre}`;
  }

  // Pedir datos obligatorios
  @Get('formulario')
  formularioPersona() {
    return `
      <form action="/sendDatos" method="POST">
        <input type="text" name="nombre" placeholder="Nombre">
        <input type="text" name="edad" placeholder="Edad">
        <input type="submit" value="Enviar">
      </form>
    `;
  }

  // @Post('sendDatos')
  // Guardar(@Body() datos) {
  //   console.log('Datos', datos);
  //   return 'Datos Guardados: ' + datos.nombre + ' | ' + datos.edad;
  // }

  @Post('sendDatos')
  Guardar(@Body() datos: DatosFormDTO) {
    console.log('Datos', datos);
    return (
      'Datos Guardados: ' +
      datos.nombre +
      ' | ' +
      datos.edad +
      ' | ' +
      datos.fechaNacimiento
    );
  }
}
