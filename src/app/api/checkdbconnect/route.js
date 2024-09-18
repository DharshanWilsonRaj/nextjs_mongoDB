import clientPromise from "@/app/lib/mongo";

export async function GET(req) {
  try {
    const client = await clientPromise;  // Get MongoDB client
    const db = client.db();  // Connect to the database

    // Perform MongoDB ping to check the connection
    await db.command({ ping: 1 });

    return new Response(JSON.stringify({ message: 'MongoDB is connected!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'MongoDB connection failed', error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
