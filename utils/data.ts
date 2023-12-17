import {dbClient} from "@/config";
import {PutCommand} from "@aws-sdk/lib-dynamodb";

const tableName = "dobunojo";

interface ScoreData {
    Nickname: string;
    PhoneNumber: string;
    Score: string;
}

async function create(data: ScoreData) {

    const command = new PutCommand({
        "TableName": tableName,
        "Item": {
            PhoneNumber: data.PhoneNumber,
            Score: data.Score,
            Nickname: data.Nickname,
        },
    })

    const response = await dbClient.send(command);
    return response;
}

async function readFromDynamoDB(key: any) {
    // const params: AWS.DynamoDB.DocumentClient.GetItemInput = {
    //     TableName: tableName,
    //     Key: key,
    // };
    //
    // const result = await dbClient.getItem(params).promise();
    // return result.Item;
    return null;
}

export {create, readFromDynamoDB};