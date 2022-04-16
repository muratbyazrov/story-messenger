CREATE TABLE IF NOT EXISTS chats (
    chat_id BIGSERIAL UNIQUE NOT NULL,
    first_user_id TEXT NOT NULL,
    second_user_id TEXT NOT NULL,
    create_dttm TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    modify_dttm TIMESTAMP WITH TIME ZONE,
    UNIQUE (first_user_id, second_user_id)
);

CREATE TABLE IF NOT EXISTS messages (
    message_id BIGSERIAL,
    user_id TEXT NOT NULL,
    chat_id BIGINT NOT NULL REFERENCES chats(chat_id),
    create_dttm TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    modify_dttm TIMESTAMP WITH TIME ZONE,
    text TEXT NOT NULL,
    parent_message_id BIGINT
);