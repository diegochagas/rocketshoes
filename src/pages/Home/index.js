import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_zoom1.jpg" alt="Shoe"/>

        <strong>Nice shoe</strong>

        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_zoom1.jpg" alt="Shoe"/>

        <strong>Nice shoe</strong>

        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_zoom1.jpg" alt="Shoe"/>

        <strong>Nice shoe</strong>

        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_zoom1.jpg" alt="Shoe"/>

        <strong>Nice shoe</strong>

        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_zoom1.jpg" alt="Shoe"/>

        <strong>Nice shoe</strong>

        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}
