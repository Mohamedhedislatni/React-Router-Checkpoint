import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Description(props) {

    let id = props.match.params.id;
    let movie = props.films.find((movie) => movie.id == id)

    return (
        <div className='desc'>
            <Link to='/'><img src='https://www.pngjoy.com/pngl/335/6267573_home-button-icon-white-house-black-background-png.png' style={{height:40,width:50,marginTop:20}}></img></Link>
            <h1 style={{ color: 'red', fontSize:'100px' }}>{movie.title}</h1>
            <img style={{width:'300px', height:'350px'}} src={movie.posterUrl}></img>
            <h3 style={{ color: 'white', fontSize:'40px', marginBottom:'50px' }}>{movie.description}</h3>
            <iframe width="600" height="350" src={movie.trailer} title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>

        </div>
    )
}

export default withRouter (Description)
