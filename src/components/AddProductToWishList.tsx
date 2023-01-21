export interface IAddProductToWishList {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

const AddProductToWishList = ({ 
  onAddToWishList, 
  onRequestClose 
}: IAddProductToWishList) => {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )  
}

export { AddProductToWishList }