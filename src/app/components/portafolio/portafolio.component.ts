
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as rxjs from 'rxjs';
import Typed from 'typed.js';
import {MatDialog} from '@angular/material/dialog';
import * as AOS from 'aos';
import { GeneralService } from '../../services/general.service';
import { ProductoComponent } from '../producto/producto.component';



@Component({
  selector: 'app-portofolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {


  /**
   * Objeto que contendra tus habilidades
   */
  HABILIDADES = {
    HTML : {
      value: 'HTML',
      descripcion : '+Cuatro años de experiencia',
      porcentaje : 100
    },
    CSS : {
      value: 'CSS',
      descripcion : '+Cuatro años de experiencia',
      porcentaje : 90
    },
    JAVASCRIPT : {
      value: 'JAVASCRIPT',
      descripcion : 'Año y medio de experiencia',
      porcentaje : 80
    },
    PHP : {
      value: 'PHP',
      descripcion : 'Año y medio de experiencia',
      porcentaje : 80
    },
    WORDPRESS : {
      value: 'WORDPRESS/CMS',
      descripcion : '+Tres años trabajando con la cms',
      porcentaje : 90
    },
    ANGULAR : {
      value: 'ANGULAR',
      descripcion : 'Curso de Udemy (Angular de 0 a experto)',
      porcentaje : 60
    },
  };

  /**
   * Array que contendra las categorias de los proyectos que has realizado
   * Se utilizara para filtrar por los distintos proyectos.
   * La categoría all se debera mantener si quieres una opcion de mostrar todos los proyectos
   */
  categoriasPortofolio: string[] = ['all', 'webs', 'logos'];

  /**
   * Objeto que contendra tus ultimos estudios
   */

  ULTIMO_TITULO = {
    nombre : 'Desarrollo Aplicaciones Web',
    nivel : 'Ciclo Superior'
  };

  /**
   * Array que contendra las palabras las cuales te definirias
   */

  QUE_ERES = ['Developer', 'Programmer', 'Freelancer'];

  /**
   * Explicación de la persona quien es o que es o como llego a ser lo que es...
   */

  RESUMEN = 'Desde hace 4 años estoy metido en el mundo de la programación, empece indagando poco a poco con las cms de wordpress y joomla, con las cuales aprendí un poco de HTML y CSS. A raiz de ahí me matricule en el ciclo superior de Desarrollo Aplicaciones Web, en el he obtenido conocimientos en lenguaje de marcas, estilos, lenguajes de programación (Java, JS, PHP, PL) y frameworks (Laravel, Bootstrap, Angular, Jquery).';

  /**
   * Servicios que ofrece la persona
   */

  SERVICIOS = {
    servicio1: {
      titulo: 'Desarrollo Web',
      descripcion : 'Desarrollo su proyecto al gusto propio, con un diseño responsivo y limitado a cada uno de los clientes. Genero documentación general y de usuario, plazos de entrega y precios de cada plazo.',
      icon : `<i class='bx bx-devices' ></i>`
    },
    servicio2: {
      titulo: 'Optimizador Web',
      descripcion : 'Realizo auditorias para revisar su web y indicarle que es lo que esta haciendo que no funcione correctamente. De ser posible optimizaría la velocidad de carga de su web.',
      icon : `<i class='bx bxs-timer'></i>`
    },
    servicio3: {
      titulo: 'SEO Web',
      descripcion : 'Trabajo con el SEO de tu web, busco errores, mejoro el SEO Onpage, mejoro la velocidad de tu web, hago auditoria de tu web, busco estrategias de keys.',
      icon: `<i class='bx bx-bar-chart-alt' ></i>`
    },
    servicio4: {
      titulo: 'Optimización de imagenes',
      descripcion : 'Optimizo tus imagenes para insertarlas en la web y que su tiempo de carga disminuyaa.',
      icon: `<i class='bx bxs-image-alt'></i>`
    },
    servicio5: {
      titulo: 'Presupuestos económicos',
      descripcion : 'Presupuestos económicos, pagos por fases y documentación de cada una de las fases, presupuesto desglosado en los gastos.',
      icon: `<i class='bx bxs-paper-plane' ></i>`
    },
    servicio6: {
      titulo: 'Puntualidad con la entrega',
      descripcion : 'Proyectos entregados en el periodo de tiempo indicado y acordado, sin retrasos ni problemas.',
      icon: `<i class='bx bx-time' ></i>`
    },
  };

  /**
   * Proyectos realizados por la persona
   * - En la opción tipo indicar una de las categorias de proyecto insertada, para poder filtrar por ellas.
   */

  PROYECTOS = {
    Uportofolio  : {
      nombre : 'Uportofolio',
      descripcion : 'Tema para Bootstrap y Angular, tema para usar como portafolio. Este tema ha sido generado apartir de un tema auxiliar, llamado iPortfolio. ',
      tecnologias: ['Angular', 'Jquery', 'Bootstrap'],
      imagen : 'uportofolio.png',
      tipo : this.categoriasPortofolio[1],
      alt : 'Portofolio para Angular y Bootstrap',
      enlace : 'https://github.com/Unluucky04/uPortafolio',
    },
    PracticesIn : {
      nombre : 'PracticesIn',
      descripcion: 'Red social de trabajadores, orientado a becarios y empresas que quieran contratar becarios. En esta red social la idea principal, es que una persona recien salida de sus estudios tenga la posibilidad de encontrar trabajo. Proyecto final de Ciclo. ',
      tecnologias: ['Laravel', 'Jquery', 'Bootstrap', 'Ajax', 'PHP'],
      imagen : 'practicesin.png',
      tipo : this.categoriasPortofolio[1],
      alt : 'Proyecto de fin de ciclo de Jose Alberto Galera Sánchez',
      enlace : '#'
    },
    Fgame : {
      nombre : 'FGAME',
      descripcion: 'Tienda online de venta de periféricos informáticos, proyecto en wordpress, con ayuda de jquery y css, realizado para un cliente. ',
      tecnologias: ['Wordpres', 'CSS', 'JQUERY'],
      imagen : 'fgame.png',
      tipo : this.categoriasPortofolio[1],
      alt : 'Tienda online de periféricos gaming',
      enlace : 'https://www.4thegam3.com/'
    },
    RoqueMove : {
      nombre : 'RoqueBus',
      descripcion: 'Logo realizado para un proyecto de Roquetas de Mar, este proyecto era una app que se utilizaría para englobar el sistema local de transporte público. ',
      tecnologias: ['PhotoShop CS'],
      imagen : 'roquebus.png',
      tipo : this.categoriasPortofolio[2],
      alt : 'Logo de roquebus, proyecto de Roquetas de Mar',
      enlace : '#'
    }
  };

  /**
   * Objeto que contendra los estudios obtenidos.
   * Titulos/Estudios que has completado o que tienes en tu curriculum
   */

  TITULOS = {
    daw : {
      titulo : 'Desarrollo de Aplicaciones Web',
      descripcion : 'Ciclo en el cual me han formado en distintos lenguajes de programación (Java, PHP, JavaScript, PL), lenguajes de marcas (HTML, CSS, XML) y frameworks (JQUERY, Bootstrap, Angular, Laravel).',
      nivel : 'Grado Superior',
      nota : '9.5',
      premio : 'En el primer año de este ciclo superior, me apunte a un concurso de programación de videojuegos en Scratch junto a dos compañeros, el cual conseguimos el primer premio que fue un prize pool de 300€.',
      tiempo : '2018 - 2020'
    },
    smr : {
      titulo : 'Sistemas MicroInformaticos y Redes',
      descripcion : 'Ciclo en el cual me han formado para la reparación de equipos, administración de servidores, administración y gestión de redes.',
      nivel : 'Grado Medio',
      nota : '9',
      premio : 'En el primer año de este ciclo medio, me dieron la oportunidad de realizar un ERASMUS a Italia, el cual se trataba de hacer 2 semanas de practicas en una empresa italiana del sector de la informática.',
      tiempo : '2016 - 2018'
    },
  };

  /**
   * Objeto que contendra la experiencia laboral.
   * Experiencia laboral
   */

  TRABAJOS = {
    twenix : {
      nombre : 'Assistant Software Engineer ',
      empresa : 'Twenix',
      enlace : 'https://twenix.es/',
      contrato : 'Practicas',
      descripcion : 'Programador, actualmente trabajando con distintos proyectos en Angular y Wordpress, trabajando con las interfaces de interacción del usuario.',
      tiempo : '05-2020 - PRESENTE'
    },
    alferaz : {
      nombre : 'Administrador/Técnico de Sistemas y Redes',
      empresa : 'Alferaz Consultores',
      contrato : 'Cuatro Meses',
      enlace: 'https://alferaz-mantenimientos-informaticos.es/',
      descripcion : 'Técnico de sistemas y redes, trabajando con distintas empresas creando/administrado sus redes de internet, administrando usuarios/servidores, reparación/administración de equipos.  ',
      tiempo : '06-2019 - 09-2019'
    },
    alferaz_practicas : {
      nombre : 'Técnico de Sistemas y Redes',
      empresa : 'Alferaz Consultores',
      contrato : 'Practicas',
      enlace: 'https://alferaz-mantenimientos-informaticos.es/',
      descripcion : 'Técnico de sistemas y redes, trabajando con distintas empresas creando/administrado sus redes de internet, administrando usuarios/servidores, reparación/administración de equipos.  ',
      tiempo : '03-2018 - 06-2018'
    },
    simpletek : {
      nombre : 'Técnico de Sistemas',
      empresa : 'Simpletek Italy',
      contrato : 'Practicas',
      enlace : 'https://www.simpletek.net/',
      descripcion : 'Reparación de dispositivos y sistemas, reparación de periféricos.',
      tiempo : '05-2017 - 06-2017'
    }

  };




  arrayProyectos: any[]; // Array que contendra las keys del objeto de proyectos
  arrayHabilidades: any[]; // Array que contendra las keys del objeto de habilidades
  arrayServicios: any[]; // Array que contendra las keys del objeto de servicios
  arrayTitulos: any[]; // Array que contendra las keys del objeto de titulos
  arrayTrabajos: any[]; // Array que contendra las keys del objeto de trabajos

  constructor(public servicioGeneral: GeneralService , public dialog: MatDialog) {
    this.arrayProyectos = (Object.keys(this.PROYECTOS));
    this.arrayHabilidades = (Object.keys(this.HABILIDADES));
    this.arrayServicios = (Object.keys(this.SERVICIOS));
    this.arrayTitulos = (Object.keys(this.TITULOS));
    this.arrayTrabajos = (Object.keys(this.TRABAJOS));



   }


  ngOnInit(): void {
    AOS.init();
    document.getElementById('bot').innerHTML = `<df-messenger
    chat-title="Soporte | ¿En que te puedo ayudar?"
    intent="WELCOME"
    agent-id="4e3a2423-eedd-4132-a623-943513e96d18"
    language-code="es"
  ></df-messenger>`;

    this.servicioGeneral.addSeo();


  }

  /**
   * Función que se encargara de cambiar el color del portofolio
   * @param tipo string - Color al que vamos a cambiar (dark/light).
   */

  changeColor(tipo){
    this.servicioGeneral.changeColor(tipo);
  }

  /**
   * Función que te abrira la información del proyecto realizado el cual hemos clickado
   * @param proyecto string - Proyecto el cual queremos ver su información.
   */

  openDialog(proyecto) {

    const PROYECTO_SELECCIONADO = this.PROYECTOS[proyecto];
    /**
     * Mostramos la información del proyecto
     */
    const dialogRef = this.dialog.open(ProductoComponent, {
      data: {proyecto: PROYECTO_SELECCIONADO}
    });
    /**
     * Cambiamos la ruta que se muestra por la del proyecto
     */
    setTimeout(() => {
      window.history.replaceState({}, '', `/producto/${PROYECTO_SELECCIONADO.nombre}`);
    });
    /**
     * Despues de cerrar la información volvemos a la ruta general del proyecto
     */
    dialogRef.afterClosed().subscribe(result => {

      window.history.replaceState({}, '', `/portafolio`);
    });
  }





}
