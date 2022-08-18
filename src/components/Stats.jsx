import { stats } from "../constants"
import styles from "../style"

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap  sm:mb-20 my-6 animate__animated animate__slideInRight`}>
      {stats.map((stat) => (
        <div key={stat.id} className='flex-1 flex justify-start items-center flex-row m-3' data-aos="fade-left">
          <h4 className="text-white font-poppins font-semibold xs:text-4xl text-3xl xs:leading-[53px] leading-[43px]">{stat.value}</h4>
          <p className="text-gradient uppercase ml-3 font-poppins font-normal xs:text-xl text-base xs:leading-6 leading-5">{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats