module.exports = {
    createMessage: `
        INSERT INTO messages (
             sender_id
            ,chat_id
            ,message_text
            /*parentMessageId: ,parent_message_id*/
        )
        VALUES (
             :senderId
            ,:chatId
            ,:messageText
            /*parentMessageId: ,:parentMessageId*/
        )
        RETURNING message_id AS "messageId";`,

    getMessages: `
        SELECT
             msg.message_id AS "messageId"
            ,msg.sender_id AS "senderId"
            ,msg.chat_id AS "chatId"
            ,msg.create_dttm AS "createDttm"
            ,msg.message_text AS "messageText"
            ,msg.parent_message_id AS "parentMessageId"
            ,ch.recipient_id AS "recipientId"
            ,us.ws_session_id AS "wsSessionId"
        FROM
            messages AS msg
            INNER JOIN chats AS ch ON msg.chat_id = ch.chat_id
            LEFT JOIN users AS us ON
                ch.recipient_id = user_id AND ch.recipient_id != msg.sender_id
                OR ch.sender_id = user_id AND ch.sender_id != msg.sender_id
        WHERE
            TRUE
            /*chatId: AND msg.chat_id = :chatId */
            /*messageId: AND msg.message_id = :messageId */
        /*offset: OFFSET :offset*/
        LIMIT :limit;`,
};
