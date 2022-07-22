import {Component} from 'react'
import "./product-slider.css";


import Odigo from "../../../public/img/svg/odigo_icon";
import Guide from "../../../public/img/svg/guide_icon";
import Local from "../../../public/img/svg/local_icon";

export default class MultipleRows extends Component {
  render() {
    const settings = {

    };
    return (
      <div className="product">
        <ProductText/>
      <div>
        <Slider {...settings}>
          {serverData.map((card) =>(
            <ProductCard key={card.id} {...card} />
          )
          )}
          {/* <div>
            <h3><ProductCard /></h3>
          </div> */}
          {/* <div>
            <h3><ProductCard /></h3>
          </div>
          <div>
            <h3><ProductCard /></h3>
          </div> */}
          {/* <div>
            <h3><ProductCard /></h3>
          </div> */}
          {/* <div>
            <h3><ProductCard /></h3>
          </div>
          <div>
            <h3><ProductCard /></h3>
          </div>
          <div>
            <h3><ProductCard /></h3>
          </div>
          <div>
            <h3><ProductCard /></h3>
          </div> */}
          
        </Slider>
      </div>
      </div>
    );
  }
}



// class ProductSlider  extends Component {

//         render() {
//           return (
//            <div className="product">
//             <ProductText/>
//             <SliderItem/>
//         </div>
//         );
//       }
//     }
    

// class SliderItem extends Component {
//     render() {
//         return <div className="slider">
     
//             {serverData.map((snippet, id) => <ProductCard key={id} {...snippet} />)}
//         </div>;
//     }
// }

const serverData = [
  {name: "Welcome to Odigo!", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.", src:Odigo,id:1},
  {name: "Your Personal Japan Guide", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.", src: Guide,id:2},
  {name: "Promoting Local Businesses", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.", src: Local,id:3},
  
]


class BenefitsCard extends Component  {
  render() {
   const {name, price, description,src} = this.props;
    return(
    <div className="slider__item">
        <div className="product__img">
           <img src={src} alt={name} className="product__image"/>
        </div>
     <div className="product__content">
         <div className="product__price price product__price">{price}</div>
          <h1 className="product__name product__name">{name}</h1>
          <h2 className="product__description product__description">{description}</h2>
          <div className="product__btn">
            <button className="product__btn desc">MORE</button>
          </div>
       </div>
   </div>
)}}
