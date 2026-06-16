observations

id (uuid)
user_id (fk -> users.id)

species_id (fk -> species.id, nullable)

image_url
ai_top_prediction (text)   
ai_confidence (float)

status (pending | verified | rejected)

location_text (nullable)   
notes (nullable)

created_at
updated_at