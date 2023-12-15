import * as AWS from "aws-sdk";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables

const getDynamoDBClient = (): AWS.DynamoDB => {
    const config = {
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
        tableName: "dobunojo",
    };

    return new AWS.DynamoDB(config);
};

export const dynamodbClient = getDynamoDBClient(); // Pre-initialize and export client