import styles from './sectionCard.module.css'
import Link from 'next/link'
import Card from './card'
import {useRouter} from 'next/router'

const SectionCards = (props)=>{
    const router = useRouter();
    const {title,videos,size}=props
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((vid)=>{
                    console.log(vid);
                    return (
                        <div onClick={()=>{
                            router.push(`videos/${vid.videoId}`)
                        }}>
                            <Card id={vid.videoId} key={vid.videoId} image={vid.imgUrl} size={size} />
                        </div>
                        )
                })}
            </div>
        </section>
    )
}

export default SectionCards;