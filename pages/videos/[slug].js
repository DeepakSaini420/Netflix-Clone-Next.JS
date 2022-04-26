// import styles from '../../styles/video.component.css'
import { useRouter } from "next/router";

const VideoPage = ()=>{
    const router = useRouter();

    return(
        <div style={{
            display: "flex",
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            height: '100vh'
        }}>
            <iframe src={`https://www.youtube.com/embed/${router.query.slug}`} style={{
                width: '800px',
                height: '500px'
            }}>
            </iframe>
            <div>
                <div>
                    <h1>Title</h1>
                </div>
                <div>
                    <p>Description</p>
                </div>
            </div>
        </div>
    )
}

export default VideoPage;