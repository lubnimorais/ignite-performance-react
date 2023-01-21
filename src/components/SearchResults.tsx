import { List, ListRowRenderer } from 'react-virtualized'

import { ProductItem } from "./ProductItem";

interface IProduct {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
}

interface ISearchResultProps {
  totalPrice: number;
  results: Array<IProduct>;
  onAddToWishList: (id: number) => void;
}

const SearchResults = ({ totalPrice, results, onAddToWishList }: ISearchResultProps) => {
  // const totalPrice = useMemo(() => {
  //   return results.reduce((total, product) => total + product.price, 0);
  // }, [results])

  /** NOTE 
   * SEMPRE QUE UTILIZAR O rowRenderer tem que ter uma div por fora
   * O style é o que vai controlar se o elemento está ou não visível na tela
   */
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results[index]} onAddToWishList={onAddToWishList} />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        width={900}
        height={300}
        rowHeight={30}
        /** NOTE 
         * passa o número de quantos itens queremos que a aplicação deixe pré-carregado
         * tanto para cima como para baixo
         */
        overscanRowCount={5}
        rowCount={results.length}
        // Função para renderizar cada item
        rowRenderer={rowRenderer}
      />

      {/* {results.map(result => {
        return (
          
        )
      })} */}
    </div>
  )
}

export { SearchResults }