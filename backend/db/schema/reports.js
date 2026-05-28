const {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  decimal,
} = require("drizzle-orm/pg-core");

const { users } = require("./users");
const { categories } = require("./categories");
const { ecosystems } = require("./ecosystems");
const { species } = require("./species");

const reports = pgTable("reports", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: uuid("user_id").references(() => users.id),
  categoryId: uuid("category_id").references(() => categories.id),

  speciesId: uuid("species_id").references(() => species.id),
  ecosystemId: uuid("ecosystem_id").references(() => ecosystems.id),

  title: varchar("title", { length: 150 }),
  description: text("description"),

  latitude: decimal("latitude", { precision: 10, scale: 8 }).notNull(),
  longitude: decimal("longitude", { precision: 11, scale: 8 }).notNull(),

  status: varchar("status", { length: 20 }).default("pending"),
  // pending | approved | rejected

  severity: varchar("severity", { length: 20 }).default("low"),
  // low | medium | high

  trustScore: decimal("trust_score", { precision: 5, scale: 2 }).default("0"),
  riskScore: decimal("risk_score", { precision: 5, scale: 2 }).default("0"),

  createdAt: timestamp("created_at").defaultNow(),
});

module.exports = { reports };
