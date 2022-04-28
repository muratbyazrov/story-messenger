module.exports = {
    createChat: `
        INSERT INTO
                chats (
                     sender_id
                    ,recipient_id
                )
                VALUES (
                     :senderId
                    ,:recipientId
                )
        ON CONFLICT DO NOTHING
        RETURNING chat_id AS "chatId";`,

    getChats: `
        SELECT
             chat_id AS "chatId"
            ,sender_id AS "senderId"
            ,recipient_id AS "recipientId"
            ,create_dttm AS "createDttm"
            ,modify_dttm AS "modifyDttm"
        FROM
            chats
        WHERE
            sender_id = :userId OR recipient_id = :userId
            /*chatId: AND chat_id = :chatId*/
            /*createDttm: AND create_dttm = :createDttm*/
            /*modifyDttm: AND modify_dttm = :modifyDttm*/
            /*offset: OFFSET :offset*/
        LIMIT :limit;`,
};
