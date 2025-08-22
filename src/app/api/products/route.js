import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(req) {
  try {
    const body = await req.json();
    await client.connect();
    const db = client.db("nextjs_project"); // আপনার database
    const collection = db.collection("products");

    const result = await collection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Product added!", id: result.insertedId }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  } finally {
    await client.close();
  }
}

export async function GET() {
  try {
    await client.connect();
    const db = client.db("nextjs_project");
    const collection = db.collection("products");

    const products = await collection.find({}).toArray();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  } finally {
    await client.close();
  }
}
