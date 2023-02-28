import React from "react";
import InfoCard from './InfoCard'
import RiceCofeehouse from '../assets/RiceCoffeehouse.jpeg'
import Audreys from '../assets/Audreys.jpeg'
import Segundo from '../assets/Segundo.jpeg'
import Ola from '../assets/Ola.jpeg'
import ElGato from '../assets/ElGato.jpeg'
import A2ndCup from '../assets/A2ndCup.jpeg'
import BrassTacks from '../assets/BrassTacks.jpeg'
import MLouise from '../assets/MLouise.jpeg'
import Siphon from '../assets/Siphon.jpeg'
import Agora from '../assets/Agora.jpeg'
import BittyBeaus from '../assets/BittyBeaus.jpeg'
import CommonBond from '../assets/CommonBond.jpeg'

const CardTable = () => {


        return (

                <div className="CardTable">

                <table>

                        <tbody>

                        {/* Create a table with 3 rows & 4 columns */}

                        <tr>
                                
                                <InfoCard name='Rice Coffeehouse' picture={RiceCofeehouse} color='beige' location='Rice University'description='AKA Chaus, on-campus favorite for good vibes, good prices, and squirrel-themed drinks 🐿️. Grab a friend to chat during those long wait times.' link="https://coffeehouse.rice.edu/" />
                                
                                <InfoCard name="Audrey's" color='blue' picture={Audreys} location='Rice University' description='Best drinks on Rice campus (sorry Chaus 😬). Will always find business bros coffee chatting. Best study spots and music. Birds of Paradise is a must-try.'link="https://www.yelp.com/biz/audrey-s-houston"/>
                

                                <InfoCard name='Segundo Coffee Lab' picture={Segundo}color='pastelgreen' location='Second Ward' description='Amazing themed drinks. Cool warehouse vibes, good lighting, nice industrial seating. Super cool mini thrift shops and other popups to explore inside after a long study session. 10/10.' link="https://www.yelp.com/biz/segundo-coffee-lab-houston"/>

                                <InfoCard name='Ola' color='yellow' picture={Ola} location='Midtown' description='Asian-inspired drinks including dalgona and sparkling matcha lemonade. Immaculate and bright interior. Super friendly staff. Gave me free pumpkin bread :D.'link="https://www.olaland.com/"/>
                                <p></p>
                                <p></p>
                        </tr>


                        <tr>
                                <InfoCard name='El Gato Coffeehouse' picture={ElGato}color='yellow' location='The Heights'description='CAT CAFE!!! Adoptable pets from local Houston shelters and drinks for a small entrance fee. Very very worth it. ' link="http://www.elgatocoffeehouse.com/"/>

                                <InfoCard name='A 2nd Cup' picture={A2ndCup}color='pastelgreen' location='The Heights'description='Mission-driven coffeeshop dedicated to raising awareness for human trafficking. Super cool specialty drinks and many plants inside! ' link="https://a2ndcup.com/"/>

                                <InfoCard name='Brass Tacks' picture={BrassTacks}color='beige' location='Second Ward'description='A classic. Cool booths to sit in and a rustic aesthetic with bricks and metal. Pretty much your quintessential coffeeshop. ' link="http://brasstackshouston.com/"/>

                                <InfoCard name='Mademoiselle Louise' picture={MLouise}color='blue' location='Downtown'description='French pastry place that also has good coffee! Go for the baguettes, croissants, tarts, and sandwiches.' link="https://www.yelp.com/biz/mademoiselle-louise-houston"/>
                                <p></p>
                                <p></p>
                        </tr>


                        <tr>
                                <InfoCard name='Siphon' picture={Siphon}color='blue' location='Montrose / Midtown'description='Nice interior, peaceful atmosphere. Good place to get stuff done.' link="https://www.yelp.com/biz/siphon-coffee-houston"/>

                                <InfoCard name='Agora' picture={Agora}color='yellow' location='Montrose'description='A Montrose favorite. Extensive menu and eclectic guests. My friend said she saw a snake performer and belly dancer here??' link="https://www.agorahouston.com/"/>

                                <InfoCard name='Common Bond Cafe' picture={CommonBond}color='pastelgreen' location='Montrose'description='Very standard coffeeshop with a good location and nice selection of food and drink.' link="https://www.commonbondcafe.com/"/>

                                <InfoCard name="Bitty & Beau's Coffee" picture={BittyBeaus}color='beige' location='Rice Village'description='Conveniently located in Rice Village and dedicated to supporting people with special needs. A very sweet place.' link="https://www.bittyandbeauscoffee.com/location/houston/"/>
                                <p></p>
                                <p></p>
                        </tr>

                        </tbody>
                 </table>


                </div>
        )

}

export default CardTable;