const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

const flow5 = addKeyword ('5')
.addAnswer('Aguarde unos segundos...⏳')     
.addAnswer('*(Valor x año + CENAT)*',{
    media: 'https://firebasestorage.googleapis.com/v0/b/alojamiento-e7d29.appspot.com/o/ARANCELES.png?alt=media&token=b9540e8d-5672-4cd6-8de9-464659b52ae2'})
.addAnswer(['☝️Ver Imagen☝️','escribir la palabra *Volver* para regresar al *Menú Principal* ']

	)

const flow4 = addKeyword ('4')     
.addAnswer('Aguarde unos segundos...⏳')
.addAnswer(['*Estos son los requisitos*: 📰Duplicado📰','*CATEGORIAS PARTICULARES*',
'*1)* FOTOCOPIA DEL DNI Y ORIGINAL',
'*2)* ORIGINAL Y COPIA LICENCIA DE CONDUCIR',
'*3)* DENUNCIA POLICIAL DE EXTRAVIO O ROBO',
'*4)* BOLETA DE CENAT IMPRESA Y PAGADA (impacto inmediato en rapipago o pago fácil):➡️ https://boletadepago.seguridadvial.gob.ar/ '])
.addAnswer(['*CATEGORIAS PROFESIONALES D1 – D2 – D3*',
'*1)* FOTOCOPIA DEL DNI Y ORIGINAL',
'*2)* DENUNCIA POLICIAL DE EXTRAVIO O ROBO',
'*3)* CERTIFICADO DE BUENA CONDUCTA EMITIDO POR LA POLICÍA PROVINCIAL:➡️ http://www.policiadetucuman.gov.ar/certificados_antecedentes.htm',
'*4)* CERTIFICADO DE REINCIDENCIA Y PEDIDO DEL CERTIFICADO:➡️ https://www.argentina.gob.ar/justicia/reincidencia',
'*5)* BOLETA DE CENAT IMPRESA Y PAGADA (impacto inmediato en rapipago o pago fácil):➡️ https://boletadepago.seguridadvial.gob.ar/ ',
'escribir la palabra *Volver* para regresar al *Menú Principal* ']
)

const flow3 = addKeyword ('3')     
.addAnswer('Aguarde unos segundos...⏳')
.addAnswer(['*Estos son los requisitos*: 📃Ampliación o Cambio de Clase📃','*CATEGORIAS PARTICULARES*',
'*1)* FOTOCOPIA DEL DNI Y ORIGINAL',
'*2)* ORIGINAL Y COPIA LICENCIA DE CONDUCIR',
'*3)* COPIA DE LA TARJETA VERDE',
'*4)* CERTIFICADO Y BOLETA DE PAGO DEL CENAT:➡️ https://boletadepago.seguridadvial.gob.ar/ '])
.addAnswer(['*CATEGORIAS PROFESIONALES D1 – D2 – D3*',
'*1)* FOTOCOPIA DEL DNI Y ORIGINAL',
'*2)* ORIGINAL Y COPIA LICENCIA DE CONDUCIR',
'*3)* CERTIFICADO DE BUENA CONDUCTA EMITIDO POR LA POLICÍA PROVINCIAL:➡️ http://www.policiadetucuman.gov.ar/certificados_antecedentes.htm',
'*4)* CERTIFICADO DE REINCIDENCIA Y PEDIDO DEL CERTIFICADO:➡️ https://www.argentina.gob.ar/justicia/reincidencia',
'*5)* BOLETA DE CENAT IMPRESA Y PAGADA (impacto inmediato en rapipago o pago fácil):➡️ https://boletadepago.seguridadvial.gob.ar/ ',
'escribir la palabra *Volver* para regresar al *Menú Principal* ']

)

const flow2 = addKeyword ('2')     
.addAnswer('Aguarde unos segundos...⏳')
.addAnswer(['*La renocación no debe exeder los 90 días del vencimiento*:','*CATEGORIAS PARTICULARES*',
'*1)* FOTOCOPIA DEL DNI Y ORIGINAL',
'*2)* ORIGINAL Y COPIA LICENCIA DE CONDUCIR VENCIDA',
'*3)* COPIA DE LA TARJETA VERDE',
'*4)* CERTIFICADO Y BOLETA DE PAGO DEL CENAT:➡️ https://boletadepago.seguridadvial.gob.ar/ '])
.addAnswer(['*CATEGORIAS PROFESIONALES D1 – D2 – D3*',
'*1)* FOTOCOPIA DEL DNI Y ORIGINAL',
'*2)* ORIGINAL Y COPIA LICENCIA DE CONDUCIR VENCIDA',
'*3)* CERTIFICADO DE BUENA CONDUCTA EMITIDO POR LA POLICÍA PROVINCIAL:➡️ http://www.policiadetucuman.gov.ar/certificados_antecedentes.htm',
'*4)* CERTIFICADO DE REINCIDENCIA Y PEDIDO DEL CERTIFICADO:➡️ https://www.argentina.gob.ar/justicia/reincidencia',
'*5)* BOLETA DE CENAT IMPRESA Y PAGADA (impacto inmediato en rapipago o pago fácil):➡️ https://boletadepago.seguridadvial.gob.ar/ ',
'escribir la palabra *Volver* para regresar al *Menú Principal* ']

)


const flow1 = addKeyword ('1')     
.addAnswer('Aguarde unos segundos...⏳')
.addAnswer(['*Estos son los requisitos*: 💳Primera vez💳','*CATEGORIAS PARTICULARES*',
'*1)* 1 UNA FOTOCOPIA DEL DNI Y ORIGINAL',
'*2)* CERTIFICADO DE GRUPO SANGUINEO FIRMADO POR PROFESIONAL MEDICO O BIOQUIMICO',
'*3)* COPIA DE LA TARJETA VERDE',
'*4)* CERTIFICADO Y BOLETA DE PAGO DEL CENAT:➡️ https://boletadepago.seguridadvial.gob.ar/ '])
.addAnswer(['*CATEGORIAS PROFESIONALES D1 – D2 – D3*',
'*1)* 1 UNA FOTOCOPIA DEL DNI Y ORIGINAL',
'*2)* 1 UNA FOTOCOPIA DE LA LICENCIA O CERTIFICACION QUE ACREDITE UN AÑO DE ANTIGÜEDAD EN CONDUCCION DE AUTO PARTICULAR',
'*3)* CERTIFICADO DE BUENA CONDUCTA EMITIDO POR LA POLICÍA PROVINCIAL:➡️ http://www.policiadetucuman.gov.ar/certificados_antecedentes.htm',
'*4)* CERTIFICADO DE REINCIDENCIA Y PEDIDO DEL CERTIFICADO:➡️ https://www.argentina.gob.ar/justicia/reincidencia',
'*5)* CERTIFICADO DE GRUPO SANGUINEO FIRMADO POR PROFESIONAL MEDICO O BIOQUIMICO',
'*6)* COPIA DE LA TARJETA VERDE',
'*7)* BOLETA DE CENAT IMPRESA Y PAGADA (impacto inmediato en rapipago o pago fácil):➡️ https://boletadepago.seguridadvial.gob.ar/ '])
.addAnswer(['*MENORES PARTICULARES* ',
'*1)* 1 UNA FOTOCOPIA DEL DNI Y ORIGINAL',
'*2)* CERTIFICADO DE GRUPO SANGUINEO FIRMADO POR PROFESIONAL MEDICO O BIOQUIMICO',
'*3)* COPIA DE LA TARJETA VERDE',
'*4)* AUTORIZACIÓN DE LOS PADRES O TUTORES',
'*5)* BOLETA DE CENAT IMPRESA Y PAGADA (impacto inmediato en rapipago o pago fácil):➡️ https://boletadepago.seguridadvial.gob.ar/ ',
'escribir la palabra *Volver* para regresar al *Menú Principal* ' ]

)


const flowLicencia = addKeyword (['Licencia','licencia'])
.addAnswer('Requisitos para Obtener la Licencia')     
.addAnswer(['👇 *Selecciona la Opcion* 👇',
' *1* 💳Primera vez💳',
' *2* 📑Renovación📑',
' *3* 📃Ampliación o Cambio de Clase📃',
' *4* 📰Duplicado📰',
' *5* 👉🏻Aranceles👈🏻',
],
  null,
  null,
    [flow1,flow2,flow3,flow4,flow5]
)

const flowNormativa = addKeyword(['Normativa', 'normativa'])
    .addAnswer('Aguarde unos segundos...⏳')
.addAnswer('☝️ *Puedes Descargar el video* ☝️',{
    media: 'https://firebasestorage.googleapis.com/v0/b/alojamiento-e7d29.appspot.com/o/videoplayback.mp4?alt=media&token=92bb86d1-220a-4594-9a6e-93b2c5243ee5'})
.addAnswer('Ley Nacional de Transito N° 24.449, Art. 40')
.addAnswer('escribir la palabra *Volver* para regresar al *Menú Principal* ')

const flowCategorias = addKeyword (['Categorias','Categorías','categorías','categorias','categoria','Categoria'])     
.addAnswer('Aguarde unos segundos...⏳')
.addAnswer('*Categorias y Sub-Categorias*',{
    media: 'https://villaurquiza.gob.ar/wp-content/uploads/2021/02/categorias.jpg-2.png'})
.addAnswer(['☝️Ver Imagen☝️', 'escribir la palabra *Volver* para regresar al *Menú Principal* ']

)

const flowPrincipal = addKeyword(['Hola', 'Buen dia', 'Buenas noches', 'Buenas tardes','Volver'])
    .addAnswer(['👋 Hola, bienvenido/a al 🤖*Chatbot de Transito*🤖,te ayudaré a responder tu consulta:'])
    .addAnswer(
        [
            '👇 *Escribí tu consulta* 👇',
        
            '👉 *Licencia*',
            '👉 *Normativa*',
            '👉 *Categorias*'],
        
        null,
        null,
        [flowLicencia, flowCategorias, flowNormativa]
    )

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()