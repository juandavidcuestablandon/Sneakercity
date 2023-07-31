import NovedadesInfo from "./NovedadesInfo"


const Novedades = () => {
  return (
      <>
      <h3 className="m-5">Actualidad</h3>

      <div className="d-flex justify-content-center">

    
       <NovedadesInfo 
      nombre={'“LA OPORTUNIDAD DE CO-CREAR EL FUTURO DE NIKE.” '}
      descripcion={' Si estás al tanto de las últimas novedades y dentro del entorno digital sabrás que esta definición es la de .SWHOOSH, la última plataforma que Nike ha creado con ...'}
      imagen={'https://i.pinimg.com/564x/49/41/d4/4941d4c5c9c194fa533f50984042f667.jpg'}
      btn={'https://www.sneakersmagazine.es/reportajes/una-nueva-experiencia-comunitaria-disenada-para-darte-la-oportunidad-de-co-crear-el-futuro-de-nike'}
    />


    <NovedadesInfo 
      nombre={'LAS AIR JORDAN 1 QUE HOMENAJEAN EL 20 ANIVERSARIO DEL QUAI 54'}
      descripcion={' Las Air Jordan 1 que homenajean el 20 aniversario del mayor torneo de Streetball del mundo El torneo de streetball francés cumple 20 años y Nike se ha encargado de ...'}
      imagen={'https://i.pinimg.com/564x/4b/3c/5d/4b3c5dfba31bad821c2a9402dd8cef35.jpg'}
      btn={'https://www.sneakersmagazine.es/news/llega-la-colaboracion-de-la-firma-japonesa-tightboot-junto-son-nike-sb'}
    />


  <NovedadesInfo 
      nombre={'LLEGA LA COLABORACIÓN DE LA FIRMA JAPONESA TIGHTBOOTH JUNTO CON NIKE SB'}
      descripcion={' LLLEGA LA COLABORACIÓN JAPONESA DE TIGHTBOOTH CON NIKE SB DUNK LOW El grupo japonés TIGHTBOOTH ha cambiado mucho desde su fundación allá por el 2005 por el skater profesional Shinpei ...'}
      imagen={'https://www.sneakersmagazine.es/wp-content/uploads/2023/07/raul-3-620x420.png'}
      btn={'https://www.sneakersmagazine.es/news/las-air-jordan-1-que-homenajean-el-20-aniversario-del-quai-54'}
    />


<NovedadesInfo 
      nombre={'BAD BUNNY X ADIDAS LANZAN LAS TRIPLE BLACK RESPONSE'}
      descripcion={' Bad Bunny lanza las nuevas Adidas Response Triple Black un año después de lucirlas en la Cinemacon   Bad bunny lo ha vuelto a hacer: unas nuevas adidas Response CL ...'}
      imagen={'https://i.pinimg.com/564x/32/15/f9/3215f98840b960cc6a5db7db59bfda0f.jpg'}
      btn={'https://www.sneakersmagazine.es/news/bad-bunny-x-adidas-lanzan-las-triple-black-response'}
    />



    

      </div>


      </>
   
  )
}

export default Novedades