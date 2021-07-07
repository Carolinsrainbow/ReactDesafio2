import productData from "../../productos.json";

type Producto = {
title: string;
}
const Productos = () => {
const productos: Producto[] = productData;

return (
<ul>{productos.map((producto: Producto, index: number) => (
<li key={index}>
{producto.title}
</li>
))}</ul>
);
}