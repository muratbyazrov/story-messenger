module.exports = {
    createChat: `
        INSERT INTO chats (
             first_user_id
            ,second_user_id
        )
        VALUES (
             :firstUserId
            ,:secondUserId
        );`,
}