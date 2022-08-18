import { clients } from "../constants"
import styles from "../style"

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} md:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className="md:w-[192px] w-[100px] cursor-pointer hover:brightness-200" />
          </div>
        ))}
      </div>
        
    </section>
  )
}

export default Clients