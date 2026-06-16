species_corrections

id (uuid)

observation_id (fk)
user_id (fk)

original_species_id (fk, nullable)
correct_species_id (fk)

ai_confidence_at_time (float)

notes (text)

created_at