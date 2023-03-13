const dbConnection = require('./mongodb');

const deleteData = async () => {
    console.log('Delete Data');
    let data = await dbConnection();

    // delete single data
    // let result = await data.deleteOne({
    //     name: 'V 21'
    // })

    // delete multiple data
    let result = await data.deleteMany({
        name: 'Nord 2'
    })

    if(result.acknowledged) {
        console.log('record deleted')
    }

    console.log(result);
}

deleteData();