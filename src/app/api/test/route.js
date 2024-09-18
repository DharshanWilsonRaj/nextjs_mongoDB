import clientPromise from "@/app/lib/mongo";

export async function GET(req) {
  try {
    const db = client.db('TESTDB');  // Connect to the database
    const client = await clientPromise;  // Get MongoDB client

    // Query the neighborhoods collection and get all restaurants
    const neighborhoods = await db.collection('TESTMONGODB').find({}).toArray();

    // Return the list of neighborhoods as a JSON response
    return new Response(JSON.stringify(neighborhoods), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'MongoDB connection or query failed', error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
