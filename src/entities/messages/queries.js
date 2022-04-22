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
            TRUE
            /*userId: AND user_id = :userId*/
            /*chatId: AND chat_id = :chatId*/
            /*offset: OFFSET :offset*/
        LIMIT :limit;`,
};
