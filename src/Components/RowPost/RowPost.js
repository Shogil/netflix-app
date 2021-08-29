import React,{useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl, API_KEY} from '../../Constants/Constants'
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
          axios.get(`/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
              if(response.data.results.length!==0){
                  setUrlId(response.data.results[0])
              }
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
