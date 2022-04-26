import data from '../data/video.json'
export default async function  getVideo(category) {
    const key = 'AIzaSyAsvy7-Fkx47DTCSH8iJ7UAXjEFmqxVStY';
    try{
            const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${category}&key=${key}`);
            const response = await data.json();
        
            return response?.items.map(item =>{
                return {
                    title:item.snippet.title,
                    imgUrl:item.snippet.thumbnails.high.url,
                    videoId : item.id.videoId
                }
            })
    }catch(err){
        return data.items.map(item=>{
            return{
                title:item.snippet.title,
                imgUrl:item.snippet.thumbnails.high.url,
                videoId : item.id.videoId,
                description: item.snippet.description
            }
        })
    }
}