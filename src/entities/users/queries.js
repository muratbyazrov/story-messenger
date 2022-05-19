module.exports = {
    createUser: `
        INSERT INTO users (
             user_id
            ,ws_session_id
        )
        VALUES (
             :userId
            ,:wsSessionId
        )
        ON CONFLICT (user_id) DO UPDATE SET 
            ws_session_id = :wsSessionId;`,

    getUsers: `
        SELECT
             user_id AS "userId"
            ,ws_session_id AS "wsSessionId"
        FROM
            users
        WHERE
            user_id = :userId
        /*offset: OFFSET :offset*/
        LIMIT :limit;`,
};
