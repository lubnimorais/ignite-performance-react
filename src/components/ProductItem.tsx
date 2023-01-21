import { memo, useCallback, useState } from "react";
import dynamic from "next/dynamic";
// import { AddProductToWishList } from "./AddProductToWishList";

import { IAddProductToWishList } from "./AddProductToWishList";

const AddProductToWishList = dynamic<IAddProductToWishList>(async () => {
  // RETORNA A IMPORTAÇÃO DE QUAL COMPONENTE QUEREMOS
  
  /** NOTE - 
   * Como o AddProductToWishList não está com export default, precisamos
   * fazer o .then(), para retornar o componente que queremos.
   * Caso não precisaria somente colocar assim import ('./AddProductToWishList');
   */
  return import ('./AddProductToWishList').then(mod => mod.AddProductToWishList);
}, {
  loading: () => <span>Carregando...</span>,
});

interface IProduct {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
}

interface IProductItemProps {
  product: IProduct
  onAddToWishList: (id: number) => void;
}

const ProductItemComponent = ({ product, onAddToWishList }: IProductItemProps) => {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => { setIsAddingToWishList(true) }}>Adicionar aos favoritos</button>

      {
        isAddingToWishList && (
          <AddProductToWishList
            onAddToWishList={() => { onAddToWishList(product.id) }}
            onRequestClose={() => {
              setIsAddingToWishList(false);
            }}
          />
        )
      }
    </div>
  )
}

const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});

export { ProductItem }