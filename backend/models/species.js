const {
  pgTable,
  uuid,
  varchar,
  text,
  boolean,
  timestamp,
} = require("drizzle-orm/pg-core");
const { users } = require("./users");
const { ecosystems } = require("../db/schema/ecosystems");

const species = pgTable("species", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", { length: 150 }).notNull(),
  scientificName: varchar("scientific_name", { length: 200 }),
  description: text("description"),
  category: text("category"),

  habitat: text("habitat"),
  conservationStatus: varchar("conservation_status", { length: 50 }),
  imageUrl: text("image_url"),
  verified: boolean("verified").default(false),

  discoveredBy: uuid("discovered_by").references(() => users.id),
  ecosystemId: uuid("ecosystem_id").references(() => ecosystems.id),

  createdAt: timestamp("created_at").defaultNow(),
});

module.exports = { species };
