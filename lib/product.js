import sql from "better-sqlite3";

const db = sql("product.db");

export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return db.prepare("SELECT * FROM products").all();
}

export async function getProduct(slug) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return db.prepare("SELECT * FROM products WHERE slug = ?").get(slug);
}

export async function getUsers() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db
    .prepare("SELECT id, name, email, img, role, createdAt FROM users")
    .all();
}

export async function getUserByEmail(email) {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}

export async function createUser(user) {
  const stmt = db.prepare(`
    INSERT INTO users (name, email, password, img, role) 
    VALUES (@name, @email, @password, @img, @role)
  `);
  return stmt.run(user);
}

export async function updateUserRole(id, role) {
  return db.prepare("UPDATE users SET role = ? WHERE id = ?").run(role, id);
}
