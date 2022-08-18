import styles from "../style"
import { arrowUp } from "../assets"
import 'animate.css';

const GetStart = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer hover:scale-110 transition-transform`}>
      <div className={`${styles.flexCenter} flex-col w-full h-full bg-primary rounded-full`}>
        <div className={`${styles.flexStart}`}>
          <p className="font-poppins font-medium text-[18px] leading-6 mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow" className="w-6 h-6 object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-6">
            <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStart