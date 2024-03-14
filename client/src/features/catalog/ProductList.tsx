import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <Grid container spacing={4}>
      {products.map((p: Product) => (
        <Grid key={p.id} item xs={3}>
          <ProductCard key={p.id} product={p} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
