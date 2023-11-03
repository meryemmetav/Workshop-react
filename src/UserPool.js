import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_rDmxNzFmY",
    ClientId: "3nliaben0l30vi36udq2le0jop"
}

export default new CognitoUserPool(poolData);