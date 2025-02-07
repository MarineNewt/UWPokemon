import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
const bcrypt = require('bcrypt');
const saltRounds = 10;

const dynamoDB = new DynamoDBClient({
  region: "us-west-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Set Access Key in environment variables
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Set Secret Key in environment variables
  },
}); 

const TABLE_NAME = "KeyUsers"; 

export default async function handler(req, res){
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  try {
    // Fetch stored password hash from DynamoDB
    const command = new GetItemCommand({
      TableName: TABLE_NAME,
      Key: {
        keyUsers_id: { S: '10' }, 
      },
    });

    const data = await dynamoDB.send(command);
    if (!data.Item || !data.Item.password) {
      return res.status(500).json({ message: "Password not found in database" });
    }

    const storedHash = data.Item.password.S; // DynamoDB stores strings under the 'S' property

    // Compare input password with stored hash
    const result = await bcrypt.compare(password, storedHash);
    if(result){
      return res.status(200).json({ data, message: 'Password Verified' });
    }else{
      return res.status(401).json({ message: 'Incorrect Password' });
    }
  } catch (error) {
    console.error("Error validating password:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}