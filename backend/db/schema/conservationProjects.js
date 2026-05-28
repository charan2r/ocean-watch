const {
  pgTable,
  uuid,
  text,
  varchar,
  timestamp,
  numeric,
  jsonb,
} = require("drizzle-orm/pg-core");
const { users } = require("./users");
const { ecosystems } = require("./ecosystems");

const conservationProjects = pgTable("conservation_projects", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),

  projectType: varchar("project_type", { length: 50 }),

  organization: varchar("organization", { length: 255 }),

  location: jsonb("location"),

  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),

  status: varchar("status", { length: 20 }).default("ongoing"),

  fundingGoal: numeric("funding_goal", { precision: 12, scale: 2 }),
  amountRaised: numeric("amount_raised", { precision: 12, scale: 2 }),
  ecosystemId: uuid("ecosystem_id").references(() => ecosystems.id),

  gallery: text("gallery").array(),

  progressUpdates: jsonb("progress_updates"),

  volunteers: text("volunteers").array(),

  createdBy: uuid("created_by").references(() => users.id),

  createdAt: timestamp("created_at").defaultNow(),
});

module.exports = { conservationProjects };
