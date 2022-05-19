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
             message_id AS "messageId"
            ,sender_id AS "senderId"
            ,chat_id AS "chatId"
            ,create_dttm AS "createDttm"
            ,message_text AS "messageText"
            ,parent_message_id AS "parentMessageId"
        FROM
            messages
        WHERE
            TRUE
            /*messageId: AND message_id = :messageId */
        /*offset: OFFSET :offset*/
        LIMIT :limit;`,
};
