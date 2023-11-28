"use client"
import styles from './styles.module.css'
import Image from 'next/image'
import hamburger_menu from 'public/icon/hamburger-menu.svg'
import { useState } from 'react'



const Navbar = () => {

  const [activeNavigation, setActiveNavigation] = useState("home")


  const changeNavigation = ( nav ) =>{
    setActiveNavigation(nav)
  }


  return (
    <>
      <div className={`${styles.navbar}`}>
        <div className={`${styles.menu_btn}`}>
          <Image 
            src={hamburger_menu}
            height={30}
            width={30}/>
        </div>
          <ul className={`${styles.navlist} `}>
              <li className={`${styles.nav_item}`}>
                <a className={`   ${activeNavigation === "home" ? styles.active  :" "} `} href="/#home" onClick={()=>setActiveNavigation('home')}>Home</a></li>
              <li className={`${styles.nav_item} `}>
                <a href="#aboutus" 
                  className={`${activeNavigation === "aboutus" ? styles.active  :" "}`}
                  onClick={()=>setActiveNavigation('aboutus')}>
                About Us</a>
              </li>
              <li className={`${styles.nav_item}`}>
                <a href="#sector" >Sectors</a>
                <ul className={`${styles.nav_menu}`} >
                  <li className={`${styles.nav_sub_menu}`}>
                    Climate Change
                    <div className={`${styles.description}`}>
                        <h1 className={` ${styles.description_tilte}`}>Climate Change</h1>
                        <p className={`${styles.description_txt}`}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Tenetur impedit, quia adipisci tempora assumenda optio harum magni 
                          voluptate nihil rerum vitae sapiente nemo ducimus nostrum sed rem incidunt. 
                          Sint asperiores dolores laborum quis quo quaerat id accusamus, enim odio beatae 
                          possimus tempora explicabo voluptate illum molestiae vitae ratione aut aspernatur, 
                          magni eius hic, fugiat doloremque! Voluptates blanditiis exercitationem, 
                          architecto necessitatibus repellendus impedit aperiam minima nisi nobis explicabo 
                          harum assumenda fugit maiores ab nihil non expedita, adipisci excepturi cum delectus 
                          accusamus quisquam? Sit, repellendus eum rem dolor ipsa praesentium architecto 
                          eligendi perferendis voluptate dolorem. Rerum, animi modi explicabo doloremque 
                          ea neque quo veniam. Deserunt placeat, aliquid, temporibus, obcaecati dignissimos 
                          velit incidunt ad laudantium veniam recusandae quasi ab maxime ut eum illo 
                          minima autem voluptatibus! Autem expedita molestias earum veniam, et, recusandae 
                          at consequatur id accusantium quis omnis asperiores dolores totam alias voluptatem 
                          assumenda quaerat quod natus, nostrum impedit veritatis quidem dolore amet unde. 
                          Vitae dolorum earum animi soluta omnis voluptatum ut doloribus dolore quisquam iure, 
                          voluptates hic, nam eaque placeat, praesentium quibusdam quos corporis aliquid 
                          rerum explicabo minus quam consequatur! Fugiat nulla atque delectus aut quis 
                          voluptatem fuga odio placeat mollitia sunt velit doloremque culpa veritatis 
                          quo obcaecati, libero magni ratione, quasi nostrum eum hic recusandae? Aliquid 
                          numquam voluptatem ab tempore suscipit magnam doloremque, quaerat impedit 
                          facilis natus tenetur facere. Facilis perspiciatis repudiandae quidem nam 
                          labore officia blanditiis amet error molestiae eaque exercitationem expedita 
                          praesentium, dolorem ab, ratione corrupti perferendis fugiat. 
                        </p>
                    </div>
                  </li>
                  <li className={`${styles.nav_sub_menu}`}>DRR
                    <div className={`${styles.description}`}>
                        <h1 className={` ${styles.description_tilte}`}>DRR</h1>
                        <p className={`${styles.description_txt}`}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Tenetur impedit, quia adipisci tempora assumenda optio harum magni 
                          voluptate nihil rerum vitae sapiente nemo ducimus nostrum sed rem incidunt. 
                          Sint asperiores dolores laborum quis quo quaerat id accusamus, enim odio beatae 
                          possimus tempora explicabo voluptate illum molestiae vitae ratione aut aspernatur, 
                          magni eius hic, fugiat doloremque! Voluptates blanditiis exercitationem, 
                          architecto necessitatibus repellendus impedit aperiam minima nisi nobis explicabo 
                          harum assumenda fugit maiores ab nihil non expedita, adipisci excepturi cum delectus 
                          accusamus quisquam? Sit, repellendus eum rem dolor ipsa praesentium architecto 
                          eligendi perferendis voluptate dolorem. Rerum, animi modi explicabo doloremque 
                          ea neque quo veniam. Deserunt placeat, aliquid, temporibus, obcaecati dignissimos 
                          velit incidunt ad laudantium veniam recusandae quasi ab maxime ut eum illo 
                          minima autem voluptatibus! Autem expedita molestias earum veniam, et, recusandae 
                          at consequatur id accusantium quis omnis asperiores dolores totam alias voluptatem 
                          assumenda quaerat quod natus, nostrum impedit veritatis quidem dolore amet unde. 
                          Vitae dolorum earum animi soluta omnis voluptatum ut doloribus dolore quisquam iure, 
                          voluptates hic, nam eaque placeat, praesentium quibusdam quos corporis aliquid 
                          rerum explicabo minus quam consequatur! Fugiat nulla atque delectus aut quis 
                          voluptatem fuga odio placeat mollitia sunt velit doloremque culpa veritatis 
                          quo obcaecati, libero magni ratione, quasi nostrum eum hic recusandae? Aliquid 
                          numquam voluptatem ab tempore suscipit magnam doloremque, quaerat impedit 
                          facilis natus tenetur facere. Facilis perspiciatis repudiandae quidem nam 
                          labore officia blanditiis amet error molestiae eaque exercitationem expedita 
                          praesentium, dolorem ab, ratione corrupti perferendis fugiat. 
                        </p>
                    </div>
                  </li>
                  <li className={`${styles.nav_sub_menu}`}>Costal Zone Management
                    <div className={`${styles.description}`}>
                        <h1 className={` ${styles.description_tilte}`}>Costal Zone Management</h1>
                        <p className={`${styles.description_txt}`}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Tenetur impedit, quia adipisci tempora assumenda optio harum magni 
                          voluptate nihil rerum vitae sapiente nemo ducimus nostrum sed rem incidunt. 
                          Sint asperiores dolores laborum quis quo quaerat id accusamus, enim odio beatae 
                          possimus tempora explicabo voluptate illum molestiae vitae ratione aut aspernatur, 
                          magni eius hic, fugiat doloremque! Voluptates blanditiis exercitationem, 
                          architecto necessitatibus repellendus impedit aperiam minima nisi nobis explicabo 
                          harum assumenda fugit maiores ab nihil non expedita, adipisci excepturi cum delectus 
                          accusamus quisquam? Sit, repellendus eum rem dolor ipsa praesentium architecto 
                          eligendi perferendis voluptate dolorem. Rerum, animi modi explicabo doloremque 
                          ea neque quo veniam. Deserunt placeat, aliquid, temporibus, obcaecati dignissimos 
                          velit incidunt ad laudantium veniam recusandae quasi ab maxime ut eum illo 
                          minima autem voluptatibus! Autem expedita molestias earum veniam, et, recusandae 
                          at consequatur id accusantium quis omnis asperiores dolores totam alias voluptatem 
                          assumenda quaerat quod natus, nostrum impedit veritatis quidem dolore amet unde. 
                          Vitae dolorum earum animi soluta omnis voluptatum ut doloribus dolore quisquam iure, 
                          voluptates hic, nam eaque placeat, praesentium quibusdam quos corporis aliquid 
                          rerum explicabo minus quam consequatur! Fugiat nulla atque delectus aut quis 
                          voluptatem fuga odio placeat mollitia sunt velit doloremque culpa veritatis 
                          quo obcaecati, libero magni ratione, quasi nostrum eum hic recusandae? Aliquid 
                          numquam voluptatem ab tempore suscipit magnam doloremque, quaerat impedit 
                          facilis natus tenetur facere. Facilis perspiciatis repudiandae quidem nam 
                          labore officia blanditiis amet error molestiae eaque exercitationem expedita 
                          praesentium, dolorem ab, ratione corrupti perferendis fugiat. 
                        </p>
                    </div>
                  </li>
                  <li className={`${styles.nav_sub_menu}`}>Blue Economy
                    <div className={`${styles.description}`}>
                        <h1 className={` ${styles.description_tilte}`}>Blue Economy</h1>
                        <p className={`${styles.description_txt}`}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Tenetur impedit, quia adipisci tempora assumenda optio harum magni 
                          voluptate nihil rerum vitae sapiente nemo ducimus nostrum sed rem incidunt. 
                          Sint asperiores dolores laborum quis quo quaerat id accusamus, enim odio beatae 
                          possimus tempora explicabo voluptate illum molestiae vitae ratione aut aspernatur, 
                          magni eius hic, fugiat doloremque! Voluptates blanditiis exercitationem, 
                          architecto necessitatibus repellendus impedit aperiam minima nisi nobis explicabo 
                          harum assumenda fugit maiores ab nihil non expedita, adipisci excepturi cum delectus 
                          accusamus quisquam? Sit, repellendus eum rem dolor ipsa praesentium architecto 
                          eligendi perferendis voluptate dolorem. Rerum, animi modi explicabo doloremque 
                          ea neque quo veniam. Deserunt placeat, aliquid, temporibus, obcaecati dignissimos 
                          velit incidunt ad laudantium veniam recusandae quasi ab maxime ut eum illo 
                          minima autem voluptatibus! Autem expedita molestias earum veniam, et, recusandae 
                          at consequatur id accusantium quis omnis asperiores dolores totam alias voluptatem 
                          assumenda quaerat quod natus, nostrum impedit veritatis quidem dolore amet unde. 
                          Vitae dolorum earum animi soluta omnis voluptatum ut doloribus dolore quisquam iure, 
                          voluptates hic, nam eaque placeat, praesentium quibusdam quos corporis aliquid 
                          rerum explicabo minus quam consequatur! Fugiat nulla atque delectus aut quis 
                          voluptatem fuga odio placeat mollitia sunt velit doloremque culpa veritatis 
                          quo obcaecati, libero magni ratione, quasi nostrum eum hic recusandae? Aliquid 
                          numquam voluptatem ab tempore suscipit magnam doloremque, quaerat impedit 
                          facilis natus tenetur facere. Facilis perspiciatis repudiandae quidem nam 
                          labore officia blanditiis amet error molestiae eaque exercitationem expedita 
                          praesentium, dolorem ab, ratione corrupti perferendis fugiat. 
                        </p>
                    </div>
                  </li>
                  <li className={`${styles.nav_sub_menu}`}>GIS & RS 
                    <div className={`${styles.description}`}>
                        <h1 className={` ${styles.description_tilte}`}>GIS & RS </h1>
                        <p className={`${styles.description_txt}`}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Tenetur impedit, quia adipisci tempora assumenda optio harum magni 
                          voluptate nihil rerum vitae sapiente nemo ducimus nostrum sed rem incidunt. 
                          Sint asperiores dolores laborum quis quo quaerat id accusamus, enim odio beatae 
                          possimus tempora explicabo voluptate illum molestiae vitae ratione aut aspernatur, 
                          magni eius hic, fugiat doloremque! Voluptates blanditiis exercitationem, 
                          architecto necessitatibus repellendus impedit aperiam minima nisi nobis explicabo 
                          harum assumenda fugit maiores ab nihil non expedita, adipisci excepturi cum delectus 
                          accusamus quisquam? Sit, repellendus eum rem dolor ipsa praesentium architecto 
                          eligendi perferendis voluptate dolorem. Rerum, animi modi explicabo doloremque 
                          ea neque quo veniam. Deserunt placeat, aliquid, temporibus, obcaecati dignissimos 
                          velit incidunt ad laudantium veniam recusandae quasi ab maxime ut eum illo 
                          minima autem voluptatibus! Autem expedita molestias earum veniam, et, recusandae 
                          at consequatur id accusantium quis omnis asperiores dolores totam alias voluptatem 
                          assumenda quaerat quod natus, nostrum impedit veritatis quidem dolore amet unde. 
                          Vitae dolorum earum animi soluta omnis voluptatum ut doloribus dolore quisquam iure, 
                          voluptates hic, nam eaque placeat, praesentium quibusdam quos corporis aliquid 
                          rerum explicabo minus quam consequatur! Fugiat nulla atque delectus aut quis 
                          voluptatem fuga odio placeat mollitia sunt velit doloremque culpa veritatis 
                          quo obcaecati, libero magni ratione, quasi nostrum eum hic recusandae? Aliquid 
                          numquam voluptatem ab tempore suscipit magnam doloremque, quaerat impedit 
                          facilis natus tenetur facere. Facilis perspiciatis repudiandae quidem nam 
                          labore officia blanditiis amet error molestiae eaque exercitationem expedita 
                          praesentium, dolorem ab, ratione corrupti perferendis fugiat. 
                        </p>
                    </div>
                  </li>
                  <li className={`${styles.nav_sub_menu}`}>Community Development
                    <div className={`${styles.description}`}>
                        <h1 className={` ${styles.description_tilte}`}>Community Development</h1>
                        <p className={`${styles.description_txt}`}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Tenetur impedit, quia adipisci tempora assumenda optio harum magni 
                          voluptate nihil rerum vitae sapiente nemo ducimus nostrum sed rem incidunt. 
                          Sint asperiores dolores laborum quis quo quaerat id accusamus, enim odio beatae 
                          possimus tempora explicabo voluptate illum molestiae vitae ratione aut aspernatur, 
                          magni eius hic, fugiat doloremque! Voluptates blanditiis exercitationem, 
                          architecto necessitatibus repellendus impedit aperiam minima nisi nobis explicabo 
                          harum assumenda fugit maiores ab nihil non expedita, adipisci excepturi cum delectus 
                          accusamus quisquam? Sit, repellendus eum rem dolor ipsa praesentium architecto 
                          eligendi perferendis voluptate dolorem. Rerum, animi modi explicabo doloremque 
                          ea neque quo veniam. Deserunt placeat, aliquid, temporibus, obcaecati dignissimos 
                          velit incidunt ad laudantium veniam recusandae quasi ab maxime ut eum illo 
                          minima autem voluptatibus! Autem expedita molestias earum veniam, et, recusandae 
                          at consequatur id accusantium quis omnis asperiores dolores totam alias voluptatem 
                          assumenda quaerat quod natus, nostrum impedit veritatis quidem dolore amet unde. 
                          Vitae dolorum earum animi soluta omnis voluptatum ut doloribus dolore quisquam iure, 
                          voluptates hic, nam eaque placeat, praesentium quibusdam quos corporis aliquid 
                          rerum explicabo minus quam consequatur! Fugiat nulla atque delectus aut quis 
                          voluptatem fuga odio placeat mollitia sunt velit doloremque culpa veritatis 
                          quo obcaecati, libero magni ratione, quasi nostrum eum hic recusandae? Aliquid 
                          numquam voluptatem ab tempore suscipit magnam doloremque, quaerat impedit 
                          facilis natus tenetur facere. Facilis perspiciatis repudiandae quidem nam 
                          labore officia blanditiis amet error molestiae eaque exercitationem expedita 
                          praesentium, dolorem ab, ratione corrupti perferendis fugiat. 
                        </p>
                    </div>
                  </li>
                </ul>
              </li>


              <li className={`${styles.nav_item}`}>
                <a href="/#research" 
                className={`${activeNavigation === "research" ? styles.active  :" "}`}
                onClick={()=>setActiveNavigation('research')}>Research</a></li>
              <li className={`${styles.nav_item}`}><a href="/#contact"
                className={`${activeNavigation === "contact" ? styles.active  :" "}`}
                onClick={()=>setActiveNavigation('contact')}>Get in Touch</a></li>
          </ul>
          <div className={` ${styles.hr_bar}`} />    
      </div>
    
    </>
    
  )
}

export default Navbar