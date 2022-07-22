import {Component} from 'react'
import "./BenefitsCard.css";



import Odigo from "./odigo_icon.svg";
import Guide from "./guide_icon.svg";
import Local from "./local_icon.svg";

// export default class BenefitsCard extends Component {
//   render() {
// ;
//     return (
//       <div className="product">
//       <div>
//         <Slider {...settings}>
//           {serverData.map((card) =>(
//             <Card key={card.id} {...card} />
//           )
//           )}

//         </Slider>
//       </div>
//       </div>
//     );
//   }
// }



// class BenefitsCards  extends Component {

//         render() {
//           return (
//            <div className="product">
//             <SliderItem/>
//         </div>
//         );
//       }
//     }
    

class BenefitsCards extends Component {
    render() {
        return <div className="slider">
     
            {serverData.map((snippet, id) => <Card key={id} {...snippet} />)}
        </div>;
    }
}

const serverData = [
  {name: "Welcome to Odigo!", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.", src:Odigo,id:1},
  {name: "Your Personal Japan Guide", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.", src: Guide,id:2},
  {name: "Promoting Local Businesses", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.", src: Local,id:3},
  
]


class Card extends Component  {
  render() {
   const {name,descr,src} = this.props;
    return(
    <div className="slider__item">
        <div className="product__img">
           <img src={src} alt={name} className="product__image"/>
        </div>
     <div className="product__content">
          <h1 className="product__name product__name">{name}</h1>
          <h2 className="product__description product__description">{descr}</h2>
          <div className="product__btn">
            <button className="product__btn desc">MORE</button>
          </div>
       </div>
   </div>
)}}

export default BenefitsCards;