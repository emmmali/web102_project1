import React from "react";
import InfoCard from './InfoCard'

const CardTable = () => {



        return (

                <div className="CardTable">

                <table>

                        <tbody>

                        {/* Create a table with 3 rows & 4 columns */}

                        <tr>
                                
                                <InfoCard name='Rice Coffeehouse' color='green' description='On-campus favorite for good vibes, good prices, and squirrel-themed drinks'/>
                                <InfoCard name='Rice Coffeehouse' color='green' description='On-campus favorite for good vibes, good prices, and squirrel-themed drinks'/>
                                <InfoCard/>
                                <InfoCard/>
                        </tr>


                        <tr>
                                <InfoCard/>
                                <InfoCard/>
                                <InfoCard/>
                                <InfoCard/>
                        </tr>


                        <tr>
                                <InfoCard/>
                                <InfoCard/>
                                <InfoCard/>
                                <InfoCard/>
                        </tr>




                        </tbody>
                 </table>


                </div>
        )

}

export default CardTable;