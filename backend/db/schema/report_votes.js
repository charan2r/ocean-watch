const { pgTable, uuid, varchar, timestamp } = require("drizzle-orm/pg-core");

const { users } = require("./users");
const { reports } = require("./reports");

const reportVotes = pgTable("report_votes", {
  id: uuid("id").defaultRandom().primaryKey(),

  reportId: uuid("report_id").references(() => reports.id),
  userId: uuid("user_id").references(() => users.id),

  voteType: varchar("vote_type", { length: 10 }),
  // approve | reject

  createdAt: timestamp("created_at").defaultNow(),
});

module.exports = { reportVotes };
