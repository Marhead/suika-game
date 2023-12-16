import {dbClient} from "@/config"

const dynamoDB = new AWS.DynamoDB({accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, region: process.env.AWS_REGION});
const tableName = "dobunojo";


// Define your data types
interface ScoreData {
    Nickname: string;
    PhoneNumber: string;
    Score: string;
}

// Example function to put an item into DynamoDB
async function writeToDynamoDB(data: ScoreData) {

    console.log(data);

    const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
        TableName: tableName,
        Item: {
            "PhoneNumber": {
                "S": data.PhoneNumber
            },
            "Score": {
                "S": data.Score
            },
            "Nickname": {
                "S": data.Nickname
            },
        },
    };

    await dynamoDB.putItem(params).promise();
}

// Example function to get an item from DynamoDB
async function readFromDynamoDB(key: any) {
    const params: AWS.DynamoDB.DocumentClient.GetItemInput = {
        TableName: tableName,
        Key: key,
    };

    const result = await dynamoDB.getItem(params).promise();
    return result.Item;
}

export {writeToDynamoDB, readFromDynamoDB};