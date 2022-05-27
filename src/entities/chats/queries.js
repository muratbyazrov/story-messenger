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
            ,us.user_id AS "senderId"
            ,us.first_name AS "senderName"
            ,us.age AS "senderAge"
            ,us.photo_url AS "senderPhotoUrl"
        FROM
            chats AS ch
            INNER JOIN users AS us ON
                (ch.sender_id = us.user_id AND ch.sender_id != :userId)
                OR (ch.recipient_id = us.user_id AND ch.recipient_id != :userId)
        WHERE
            sender_id = :userId OR recipient_id = :userId
            /*chatId: AND chat_id = :chatId*/
            /*createDttm: AND create_dttm = :createDttm*/
            /*modifyDttm: AND modify_dttm = :modifyDttm*/
            /*offset: OFFSET :offset*/
        LIMIT :limit;`,
};
