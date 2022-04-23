module.exports = {
    createChat: `
        INSERT INTO
                chats (
                     first_user_id
                    ,second_user_id
                )
                VALUES (
                     :firstUserId
                    ,:secondUserId
                )
        ON CONFLICT DO NOTHING
        RETURNING chat_id AS "chatId";`,

    getChats: `
        SELECT
             chat_id AS "chatId"
            ,first_user_id AS "firstUserId"
            ,second_user_id AS "secondUserId"
            ,create_dttm AS "createDttm"
            ,modify_dttm AS "modifyDttm"
            ,ARRAY(
                SELECT
                    json_build_object(
                         'messageId', message_id
                        ,'userId', user_id
                        ,'chatId', chat_id
                        ,'createDttm', create_dttm
                        ,'modifyDttm', modify_dttm
                        ,'text', text
                        ,'parentMessageId', parent_message_id
                    )
                FROM
                    messages
                WHERE
                    chat_id = :chatId
            ) AS messages
        FROM
            chats
        WHERE
            TRUE
            /*userId: AND first_user_id = :userId OR second_user_id = :userId*/
            /*chatId: AND chat_id = :chatId*/
            /*firstUserId: AND first_user_id = :firstUserId*/
            /*secondUserId: AND second_user_id = :secondUserId*/
            /*createDttm: AND create_dttm = :createDttm*/
            /*modifyDttm: AND modify_dttm = :modifyDttm*/
            /*offset: OFFSET :offset*/
        OFFSET :offset
        LIMIT :limit;`,
};
