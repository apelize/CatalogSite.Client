import { useContext } from 'react'
import { CatalogContext } from '../../ContextProviders/catalogContextProvider'
import AdminPanelProduct from '../adminpanelproduct/adminpanelproduct'
import './adminpanel.sass'

const AdminPanel = () => {

    let {products} = useContext(CatalogContext)
    
    let ListAdminPanel =  () =>{
        return products.map(prod => {return <AdminPanelProduct key={prod.productId} product={prod}/>})
    }

  return (
    <div className='admin-panel'>
        {ListAdminPanel()}
    </div>
  )
}

export default AdminPanel