import React, { createContext, FC, ReactNode, useState } from 'react'
import { Product } from '../Entities/product'

interface AdminProductProps{
    adminProduct: Product | undefined
    setAdminProduct: (prod: Product) => void
}

export const AdminProductContext = createContext<AdminProductProps>({adminProduct: undefined, setAdminProduct: () => {}})

type Props ={
    children: ReactNode
}

const AdminProductContextProvider : FC<Props> = ({children}) => {
    const [adminProduct, setAdminProduct] = useState<Product>()
  return (
    <AdminProductContext.Provider value = {{adminProduct: adminProduct, setAdminProduct: setAdminProduct}}>
        {children}
    </AdminProductContext.Provider>
  )
}

export default AdminProductContextProvider