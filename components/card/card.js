import styles from './card.module.css'
import Image from 'next/image';
import { motion } from "framer-motion"
import cls from 'classnames' ;
const Card = (props)=>{

    let {image,size}=props;
    if(image==''){
        image='https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    }
    const classMap = {
        large:styles.smItem,
        medium:styles.mdItem,
        small:styles.lgItem
    }
    return(
        <div className={styles.container}>
            <motion.div
            whileHover={{ scale: 1.1 }}
            className={cls(styles.imgMotionWrapper,classMap[size])}>
                <Image src={image} alt='img' layout='fill' className={styles.cardImg}/>
            </motion.div>
        </div>
    )
}

export default Card;