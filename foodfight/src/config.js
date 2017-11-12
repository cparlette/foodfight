export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: "notes-cparlette-test"
  },
  apiGateway: {
    URL: "https://vopwrk2tik.execute-api.us-east-1.amazonaws.com/prod/",
    REGION: "us-east-1"
  },
  cognito: {
    USER_POOL_ID: "us-east-1_62I0VfrtF",
    APP_CLIENT_ID: "636doki25mo484vct1lbrtvo81",
    REGION: "us-east-1",
    IDENTITY_POOL_ID: "us-east-1:1b0f2e37-0c8b-42ce-a81c-26a3f358f13a"
  }
};

