const {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
} = require("drizzle-orm/pg-core");

const zones = pgTable("zones", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", { length: 150 }),
  zoneType: varchar("zone_type", { length: 50 }),

  boundary: text("boundary"),

  riskLevel: varchar("risk_level", { length: 20 }).default("low"),
  // low | medium | high | critical

  createdAt: timestamp("created_at").defaultNow(),
});

module.exports = { zones };
