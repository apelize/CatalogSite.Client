import { AdminProductContext } from '../../ContextProviders/adminProductContextProvider'
import { Product } from '../../Entities/product'
import './adminproductdesc.sass'
import {useContext} from 'react'


const AdminProductDesc  = () => {

    let {adminProduct} = useContext(AdminProductContext)

  return (


    <div className='admin-product'>
        
    </div>
  )
}

export default AdminProductDesc