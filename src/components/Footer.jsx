import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start'>
          <img src={logo} alt="logo_image" className="w-[192px]" />
          <p className={`${styles.paragraph} max-w-[320px] mt-6`}>Uma nova maneira de tornar os pagamentos fáceis, confiáveis e seguros.</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className="text-white font-poppins font-medium text-lg leading-7">{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link) => (
                  <li key={link.name} className='text-dimWhite font-poppins font-normal text-base leading-6 hover:text-secondary cursor-pointer mt-4'>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
            
          ))}
        </div>
      </div>
      

      <div className="flex md:flex-row flex-col justify-between items-center w-full pt-6 border-t-[1px] border-[#3F3E45]">
        <p className="text-white font-poppins font-normal text-center text-base leading-6">
          Copyright © 2021 HooBank. Todos os Direitos Reservados.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'} cursor-pointer`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer