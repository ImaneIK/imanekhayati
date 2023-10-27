import clientPromise from "/lib/mongodb";

async function fetchProjects() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const projects = await db
      .collection("projects")
      .find({})
      .sort({ metacritic: -1 })
      .toArray();

    return JSON.parse(JSON.stringify(projects));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export { fetchProjects };
