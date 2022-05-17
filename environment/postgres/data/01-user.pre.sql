CREATE USER "story-messenger" WITH PASSWORD 'test';
\connect "story-messenger";
GRANT ALL PRIVILEGES ON SCHEMA "story-messenger" TO "story-messenger";
