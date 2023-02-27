import React from "react";

const InfoCard = (props) => {



        return (

                <td className={'Name ' + props.color}>

                <h5>
                 {props.name}  
                </h5>

                <h6>
                   {props.description}     
                </h6>


                </td>
        )

}

export default InfoCard;