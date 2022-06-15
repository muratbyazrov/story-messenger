module.exports = {
    createAccount: `
        INSERT INTO accounts (
             account_id
            ,login
            ,password
            ,ws_session_id
            ,first_name
            ,age
            ,photo_url
        )
        VALUES (
             :accountId
            ,:login
            ,:password
            ,:wsSessionId
            ,:firstName
            ,:age
            ,:photoUrl
        )
        ON CONFLICT (account_id) DO UPDATE SET ws_session_id = :wsSessionId;`,

    getAccounts: `
        SELECT
             account_id AS "accountId"
            ,ws_session_id AS "wsSessionId"
        FROM
            accounts
        WHERE
            account_id = :accountId
        /*offset: OFFSET :offset*/
        LIMIT :limit;`,

    modifyAccounts: `
        
    `,
};
