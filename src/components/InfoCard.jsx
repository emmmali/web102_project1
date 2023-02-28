import React from "react";
import { Link } from "react-router-dom";
import {Button} from '@mui/material';
import { brown } from '@mui/material/colors';

const brownShade = brown[200];

const InfoCard = (props) => {



        return (

                <td className={'Name ' + props.color}>

                <h5>
                <img src={props.picture} 
                        width="300" 
                        height="200"/>
                </h5> 

                <h5>
                 {props.name}  
                </h5>

                <h6>
                  📍{props.location}  
                </h6>

                <h5>
                        {/* <Link to="https://coffeehouse.rice.edu/">
                                <button>Posts</button>
                        </Link> */}
                        {/* 
                        <a href="https://coffeehouse.rice.edu/" target="_blank" rel="noopener noreferrer">
                        <button>Take me there!</button>
                        </a> */}

                        <Button  variant="outlined" href={props.link} color="primary" sx={{textTransform: "none"}}>
                                menu & more
                        </Button>
                </h5>

                <h6>
                  {props.description}     
                </h6>

                <h5>

                </h5>



                </td>
        )

}

export default InfoCard;