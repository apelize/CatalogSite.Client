import React, { FC } from 'react'
import './adminpanelproduct.sass'
import {Product} from '../../Entities/product'

interface AdminPanelProductProps {
    product: Product
}

const AdminPanelProduct : FC<AdminPanelProductProps> = ({product}) => {
    return (
    <div className='admin-panel-product-wrapper'>
        <div className='wrap'>
            <img src={product.productImage} alt="placehold.co/400x300"/>
            <div className='product-description'>
                <p>{product.productName}</p>
                <p>{product.productPrice}р</p>
            </div>
        </div>
        <div className='buttons'>
            <button>Удалить</button>
            <button>Изменить</button>
        </div>
    </div>
  )
}

export default AdminPanelProduct