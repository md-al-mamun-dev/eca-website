"use client"
import styles from './styles.module.css'
import Image from 'next/image'

// icon import
// *************
import phone_icon from 'public/icon/phone-calling.svg'
import mail_icon from 'public/icon/letter.svg'
import address_icon from 'public/icon/home.svg'

// social icon import
// ******************
import fb_icon from 'public/icon/social-fb.svg'
import instagram_icon from 'public/icon/social-instagram.svg'
import linkedin_icon from 'public/icon/social-linkedin.svg'
import whatsapp_icon from 'public/icon/social-whatsapp.svg'
import youtube_icon from 'public/icon/social-youtube.svg'


const ContactUs = () => {
  return (
    <div id='contact' className={`container ${styles.container} `}>

        <div className={`${styles.contact_us_header}`}>
            <h2 className={`txt-center f-semi-bold`}>Get in touch</h2>
            <div className={` round_10 hr-bar ${styles.hr_bar} w-60 h-center`} />
        </div>
        

      <div className={`round_10  ${styles.contacts}`}>
        <div className={` ${styles.contact_informations}`}>
            <div className={` ${styles.infos}`}>
                <div className={`${styles.info_header}`}>
                    <h3 className={`${styles.header_text}`}>Contact Information</h3>
                    <div className={` round_10 hr-bar ${styles.hr_bar}`} />
                </div>            

                <div className={` ${styles.contact_info_items}`}>
                    <div className={`${styles.contact_info_item}`}>
                        <div className={`${styles.icon_container}`}>
                            <Image 
                                src={phone_icon}
                                fill
                                />
                        </div>

                        <p> +880 01629 414216</p>
                    </div>

                    <div className={`${styles.contact_info_item}`}>
                        <div className={`${styles.icon_container}`}>
                            <Image 
                                src={mail_icon}
                                fill
                                />
                        </div>

                        <p>demo_mail@gmail.com</p>
                    </div>

                    <div className={`${styles.contact_info_item}`}>
                        <div className={`${styles.icon_container}`}>
                            <Image 
                                src={address_icon}
                                fill
                                />
                        </div>

                        <p> 24/1 Pallabi Mirpur 12, <br/> Dhaka-1216 bangladesh</p>
                    </div>
                </div>

                <div className={`w-60 h-1 h-center hr-bar ${styles.hr_bar}`} />
                <div className={` ${styles.social_links}`}>
                    <div className={`${styles.social_icon_container}`}>
                        <Image 
                            src={fb_icon}
                            fill
                            />
                    </div>

                    <div className={`${styles.social_icon_container}`}>
                        <Image 
                            src={youtube_icon}
                            fill
                            />
                    </div>

                    <div className={`${styles.social_icon_container}`}>
                        <Image 
                            src={instagram_icon}
                            fill
                            />
                    </div>
                    
                    <div className={`${styles.social_icon_container}`}>
                        <Image 
                            src={whatsapp_icon}
                            fill
                            />
                    </div>
                    
                    <div className={`${styles.social_icon_container}`}>
                        <Image 
                            src={linkedin_icon}
                            fill
                            />
                    </div>
                </div>
            </div>

        </div>

        <div className={`${styles.input_container}`}>
            <p className={`${styles.input_title} txt-center `}>
                Any question or remarks?
            <br/>
            Just send us...!</p>

            <form className={`${styles.input_form}`}>                
                <div className={`${styles.form_item} ${styles.form_name}`}>
                    <label for="name"><b>Name</b></label>
                    <input type="text" placeholder="Type your Name" name="name" id="name" required />
                </div>

                <div className={`${styles.form_item} ${styles.form_email}`}>
                    <label for="email"><b>Email</b></label>
                    <input className={`${styles.form_input}`} type="text" placeholder="Provide your Email" name="email" id="email"  />
                </div>

                    <div  className={` ${styles._txt_or}`}>
                        <p>or</p>
                    </div>

                <div className={`${styles.form_item} ${styles.form_phone_number}`}>
                    <label for="phone">Phone number</label>
                    <input type="tel" placeholder='phone number' id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>

                <div className={`${styles.form_item} ${styles.form_message}`}>
                        <label for="w3review">Your message</label>
                        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Please type your complaine, feedback,  message or any suggession to us....!'/>
                    </div>

                <div className={`${styles.form_item} ${styles.form_send_btn}`}>
                    <button  className={`btn ${styles.send_btn}`} type="submit">Send</button>
                </div>
                
            </form>            
        </div>

        {/* <div className={` container `}>
        <p className={`txt-center`}>
            Any question or remarks?
        <br/>
         Just send us...!</p>

            <form className={`v-center ${styles.contact_form}`}>
                <div className={`${styles.form_item} ${styles.form_name}`}>
                    <label for="name"><b>Name</b></label>
                    <input type="text" placeholder="Type your Name" name="name" id="name" required />
                </div>

                <div className={`${styles.form_item} ${styles.form_email}`}>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Provide your Email" name="email" id="email"  />
                </div>

                <div  className={`${styles.form_item} ${styles._txt_or}`}>
                    <p>or</p>
                </div>

                <div className={`${styles.form_item} ${styles.form_phone_number}`}>
                    <label for="phone">Phone number</label>
                    <input type="tel" placeholder='phone number' id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>


                <div className={`${styles.form_item} ${styles.form_message}`}>
                    <label for="w3review">Your message</label>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Please type your complaine, feedback,  message or any suggession to us....!'/>
                </div>
                <div className={`${styles.form_item} ${styles.form_send_btn}`}>
                    <button  className={`btn ${styles.send_btn}`} type="submit">Send</button>
                </div>                    
            </form>
        </div> */}
      </div>
    </div>
  )
}

export default ContactUs