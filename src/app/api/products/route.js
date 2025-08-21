import fs from "fs";
import path from "path";

export async function POST(req) {
  const body = await req.json();

  const filePath = path.join(process.cwd(), "data", "products.json");
  const products = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const newProduct = {
    id: products.length + 1,
    ...body,
  };

  products.push(newProduct);

  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

  return new Response(JSON.stringify({ message: "Product added!" }), {
    status: 200,
  });
}
