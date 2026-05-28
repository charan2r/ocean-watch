const {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
} = require("drizzle-orm/pg-core");

const education = pgTable("education", {
  id: uuid("id").defaultRandom().primaryKey(),

  title: varchar("title", { length: 150 }),
  type: varchar("type", { length: 30 }),
  // species | threat | project | article

  content: text("content"),
  imageUrl: text("image_url"),

  createdAt: timestamp("created_at").defaultNow(),
});

module.exports = { education };
