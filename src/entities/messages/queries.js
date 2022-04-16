module.exports = {
    createMessage: `
        INSERT INTO messages (
             user_id
            ,chat_id
            ,text
            /*parentMessageId: ,parent_message_id*/
        )
        VALUES (
             :userId
            ,:chatId
            ,:text
            /*parentMessageId: ,parentMessageId*/
        );`,

    getMessages: `
        SELECT
             message_id AS "messageId"
            ,user_id AS "userId"
            ,chat_id AS "chatId"
            ,create_dttm AS "createDttm"
            ,modify_dttm AS "modifyDttm"
            ,text
            ,parent_message_id AS "parentMessageId"
        FROM
            messages
        WHERE
            user_id = :userId
            AND chat_id = :chatId
        OFFSET :offset
        LIMIT :limit;`
}