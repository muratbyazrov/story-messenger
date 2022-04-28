CREATE TABLE IF NOT EXISTS chats (
    chat_id BIGSERIAL UNIQUE NOT NULL,
    sender_id TEXT NOT NULL,
    recipient_id TEXT NOT NULL,
    create_dttm TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    modify_dttm TIMESTAMP WITH TIME ZONE,
    UNIQUE (recipient_id, sender_id)
);

CREATE TABLE IF NOT EXISTS messages (
    message_id BIGSERIAL,
    sender_id TEXT NOT NULL,
    chat_id BIGINT NOT NULL REFERENCES chats(chat_id),
    create_dttm TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    message_text TEXT NOT NULL,
    parent_message_id BIGINT
);