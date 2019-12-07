global.window = {document: {createElementNS: () => {return {}} }};
global.navigator = {};
global.btoa = () => {};
global.atob= require('atob')

const fs = require('fs')
const jsPDF = require('jspdf/dist/jspdf.node.min')

function getpdf(nombre, dni, programa, curso, per_academico, hrs, importe){
    // Default export is a4 paper, portrait, using milimeters for units
    var doc = new jsPDF('p','mm',[650,560])



    var x1 = 10
    var y1 = 20
    var x2 = 190
    var y2=20
    var f = 14
    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.setFontSize(46)
    doc.setTextColor('#FB3207')
    doc.text(x1, y1, 'SIGAP')


    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.setFontSize(24)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +15, 'Registro Pago Planilla')


    doc.setLineWidth(1.5)
    doc.line(x1, y1 +20 , x2, y1 +20)

    doc.setLineWidth(1)
    doc.line(x1, y1 +5 , x2, y1 +5)

    doc.setLineWidth(0.5)
    doc.line(x1, y1 + 23, x2, y1 + 23)


    //doc.setDrawColor(255, 0, 0)

    doc.setFont('courier')
    doc.setFontType('bold')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +40, 'Name:  '+ nombre)

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +50, 'Nro DNI:  '+ dni)

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +60, 'E-mail:  '+'grupodecaqui@gmail.com')

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +70, 'Enterprise:  '+'UNMSM')

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +80, 'Nro Celular:  '+'981046310')

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +90, 'Date:  '+per_academico)

    doc.setFont('courier')
    doc.setFontType('bold')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +100, 'Program:  '+programa)

    doc.setFont('courier')
    doc.setFontType('bold')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +110, 'Course:  '+ curso)

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +120, 'Cant. Alumnos:  30')

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +130, 'Cant. Hrs: ' + hrs)


    doc.setFont('courier')
    doc.setFontType('bold')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +140, 'Importe  TOTAL:  ' + importe)

    doc.setLineWidth(1.5)
    doc.line(x1, y1 +150 , x2, y1 +150)
    doc.setLineWidth(1)
    doc.line(x1, y1 +153 , x2, y1 +153)
    doc.setLineWidth(0.5)
    doc.line(x1, y1 +156 , x2, y1 +156)

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +163, 'Taller de Construccion de Sistemas de Informacion')

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +173, 'Universidad Nacional Mayor de San Marcos - UNMSM')

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +183, 'Facultad de Ingeniera de Sistemas e Informatica')


    doc.setFont('courier')
    doc.setFontType('normal')
    doc.setFontSize(f)
    doc.setTextColor('#000000')
    doc.text(x1, y1 +193, 'DEVMASTER : Desarrolladores Full Stack')
    /*
    doc.setLineWidth(1)
    doc.line(x1, y1 +110 , x2, y1 +110)
    doc.setLineWidth(1)
    doc.line(x1, y1 +130 , x2, y1 +130)
    doc.setLineWidth(1)
    doc.line(x1, y1 +150 , x2, y1 +150)
    doc.setLineWidth(1)
    doc.line(x1, 140 , x1, 180)
    doc.setLineWidth(1)
    doc.line(x2, 140 , x2, 180)*/



    fs.writeFileSync('./output.pdf', doc.output())
    // doc.save('a4.pdf')

}

delete global.window;
delete global.navigator;
delete global.btoa;

module.exports = {
    getpdf
}