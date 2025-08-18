CREATE TABLE IF NOT EXISTS "users" ("id" VARCHAR(255) NOT NULL, "name" VARCHAR(255) NOT NULL, "username" VARCHAR(255) NOT NULL, "password" VARCHAR(255) NOT NULL , PRIMARY KEY ("id"));
CREATE INDEX "users_name_index" ON "users"("name");
CREATE INDEX "users_username_index" ON "users"("username");
DROP TABLE IF EXISTS "user"