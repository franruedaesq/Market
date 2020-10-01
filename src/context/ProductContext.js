import React from 'react';

// Aca creamos el contexto
const ProductContext = React.createContext({})

// Aca creamos y exportamos el provider 
export const ProductProvider = ProductContext.Provider;

// Exportamos el contexto
export default ProductContext;

