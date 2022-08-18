import { features } from "../constants"
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-2xl ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="text-white font-poppins font-semibold text-lg leading-6 mb-2">
        {title}
      </h4>
      <p className="text-dimWhite font-poppins font-normal text-base leading-6">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Você faz o negócio, <br className="sm:block hidden" /> 
        nós cuidamos do dinheiro.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Com o meio de pagamento certo, você pode melhorar sua vida financeira criando crédito, ganhando recompensas e economizando dinheiro.</p>

        <Button styles='mt-10'/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature}  index={index} />
        ))}

      </div>
    </section>
  )
}

export default Business