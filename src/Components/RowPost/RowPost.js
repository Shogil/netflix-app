import React,{useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../Constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlid, setUrlId]= useState('')

    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(error => {
            //alert('Network error')
        })
    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const handleMovie = (id) => {
          console.log(id)
          axios.get('/3/movie/436969/videos?api_key=61a47c0a9f14788a36e3f47cd0f073b3&language=en-US').then(response=>{
              console.log(response.data)
          })

      }
    return(
        <div className="row">
         <h2>{props.title}</h2>
         <div className="posters">
             {movies.map((obj) => 
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path}`}/>
             )}
            
            
        </div>
          <Youtube opts={opts} videoId="2g811Eo7K8U" />
        </div>
    )
}
export default RowPost
