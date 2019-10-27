module.exports =  {

    database : 'monitor',
    username : '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'monitor-db.sqlite',
        define: {
            underscore: true
        },
        operatorsAliases: false
    }
}