

import clientPromise from "@/app/lib/mongo";

export async function GET(req) {
  try {
    const client = await clientPromise;  // Get MongoDB client
    const db = client.db('TESTDB');  // Connect to the database

    // Query the users collection and get all users
    const users = await db.collection('TESTMONGODB').find({}).toArray();

    // Return the list of users as a JSON response
    return new Response(JSON.stringify(users), {
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