import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_vPTmou7LQ",
    ClientId: "cm9u685btahag6euug6d92284"
}

export default new CognitoUserPool(poolData);