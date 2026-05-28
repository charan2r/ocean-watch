const { pgTable, uuid, varchar, text } = require("drizzle-orm/pg-core");

const categories = pgTable("categories", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", { length: 100 }).notNull().unique(),

  description: text("description"),
});

module.exports = { categories };
