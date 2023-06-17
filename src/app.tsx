import Header from "./components/Header";
import ProductView from "./components/Product";
import { product } from "./data";

export function App() {
  return (
    <div class="relative mx-auto desktop:container">
      <Header />
      <ProductView product={product} />
    </div>
  );
}
