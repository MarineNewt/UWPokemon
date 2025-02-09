import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

const dynamoDB = new DynamoDBClient({
  region: "us-west-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Set Access Key in environment variables
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Set Secret Key in environment variables
  },
}); 

const TABLE_NAME = "KeyUsers"; // Replace with your actual table name

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "data value is required" });
  }

  try {
    if(data.type == "About"){
      const command = new UpdateItemCommand({
        TableName: TABLE_NAME,
        Key: {
          keyUsers_id: { S: '10' },
        },
        UpdateExpression: "SET data_home = :value",
        ExpressionAttributeValues: {
          ":value": { S: data.datas },
        },
      });

      await dynamoDB.send(command);
    }


    return res.status(200).json({ message: "data_home updated successfully" });
  } catch (error) {
    console.error("Error updating data_home:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
