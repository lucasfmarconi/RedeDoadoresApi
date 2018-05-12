// if (!process.env.CLOUDANT_URL) {
//     console.error("Please put the URL of your Cloudant instance in an environment variable 'CLOUDANT_URL'");
//     process.exit(1);
// }

var dbNecessidadeConfig = function (dbName) {
    return {
        user: 'ithiscruslebysiblyesewas	',
        host: 'https://1bdefb1a-b263-426d-a330-b68e5434e175-bluemix.cloudant.com/',
        database: dbName,
        password: '39c40c748b91efc2e954cda2b7f2682fda4beaaa',
        url: 'https://ithiscruslebysiblyesewas:39c40c748b91efc2e954cda2b7f2682fda4beaaa@1bdefb1a-b263-426d-a330-b68e5434e175-bluemix.cloudant.com/',
    }
};

module.exports = function (dbName) {
    return dbNecessidadeConfig(dbName);
}