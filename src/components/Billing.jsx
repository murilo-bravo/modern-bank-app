import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billings = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-full h-full relative z-[5]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient' />
      </div>

      <div className={`${layout.sectionInfo} ml-9`}>
        <h2 className={styles.heading2}>Controle facilmente<br className='sm:block hidden' />  suas contas e faturas</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Com o cartão de crédito certo, você pode melhorar sua vida financeira construindo crédito, ganhando recompensas e economizando dinheiro.
        </p>

        <div className='flex flex-row sm:mt-12 mt-8'>
          <img src={apple} alt="apple_store" className='w-32 h-11 mr-5 object-contain cursor-pointer' />
          <img src={google} alt="google_play" className='w-32 h-11 mr-5 object-contain cursor-pointer' />
          
        </div>
      </div>
    </section>
  )
}

export default Billings