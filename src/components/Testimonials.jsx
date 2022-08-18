import { feedback } from "../constants"
import styles from "../style"
import CardDeal from "./CardDeal"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center flex-col md:flex-row sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>O que os clientes estão <br className="sm:block hidden" /> falando sobre nós</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[470px]`}>
            A melhor empresa possui os melhores clientes, confira como estamaos ajudando nossos clientes.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-between justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />                        
        ))}
      </div>
    </section>
  )
}

export default Testimonials