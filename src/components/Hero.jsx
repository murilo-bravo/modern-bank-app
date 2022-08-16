import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStart from './GetStart'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-xl mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> de Desconto  {" "}
            <span className='text-white'>1º Mês</span>  de Conta
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white animate__animated animate__slideInLeft'>
            A Próxima<br className='sm:block hidden' /> {" "} 
            <span className='text-gradient'>
              Geração
            </span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0 ml-8'>
            <GetStart />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white animate__animated animate__slideInLeft'>De Meios de Pagementos.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 animate__animated animate__zoomIn`}>Nosso time de especialistas utilizam uma metodologia para identificar os cartões de créditos com o maior encaixe para suas necessidades. Nós examinamos todas as taxas e tarifas anuais.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-full h-full relative z-[5]' />

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[50%] h-[50%] rounded-full bottom-20 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} `}>
        <GetStart />
      </div>
    </section>
  )
}

export default Hero