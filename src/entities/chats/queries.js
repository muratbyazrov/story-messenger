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
             ch.chat_id AS "chatId"
            ,ch.create_dttm AS "createDttm"
            ,ch.modify_dttm AS "modifyDttm"
            ,ch.modify_dttm AS "modifyDttm"
            ,ac.account_id AS "senderId"
            ,ac.first_name AS "senderName"
            ,ac.age AS "senderAge"
            ,ac.photo_url AS "senderPhotoUrl"
        FROM
            chats AS ch
            INNER JOIN accounts AS ac ON
                (ch.sender_id = ac.account_id AND ch.sender_id != :accountId)
                OR (ch.recipient_id = ac.account_id AND ch.recipient_id != :accountId)
        WHERE
            sender_id = :accountId OR recipient_id = :accountId
            /*chatId: AND chat_id = :chatId*/
            /*createDttm: AND create_dttm = :createDttm*/
            /*modifyDttm: AND modify_dttm = :modifyDttm*/
            /*offset: OFFSET :offset*/
        LIMIT :limit;`,
};
