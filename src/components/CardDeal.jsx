import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>A melhor opção <br className='sm:block hidden' /> em poucos passos.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Faça todas suas análises de maneira rápida e tome decisões mais acertivas, te acompanharemos em toda a jornada.
          </p>

          <Button styles='mt-10'/>
        </div>

        <div className={layout.sectionImg}>
          <img src={card} alt="cards" className='w-full h-full relative' />
        </div>
    </section>
  )
}

export default CardDeal