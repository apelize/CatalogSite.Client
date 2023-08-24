import { useContext } from 'react'
import { DescriptionContext } from '../../ContextProviders/productDescriptionContextProvider';
import './description.sass'

const ProductDescription = () => {
    let {active,  setActive, product} = useContext(DescriptionContext);

  return (
    <div id={active? "description-wrapper" : "not-active"} onClick={() => setActive(false)}>
      <div className='description' onClick={(event) => {event?.stopPropagation()}}>
        <p>{product?.productName}</p>
        <hr/>
        <p>{product?.productDescription}</p>
        <iframe title="Model Description"
          src="https://www.youtube.com/embed/wN-mZtbX2Pg?si=UIc-77HdOZ6W8sJz">
        </iframe>
      </div>
  </div>
  )
}

export default ProductDescription