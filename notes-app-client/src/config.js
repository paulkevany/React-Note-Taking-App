export default{

	MAX_ATTACHMENT_SIZE: 5000000,

	s3: {
		REGION: "eu-west-1",
		BUCKET: "notepad-app-upload"

	},

	apiGateway: {

		REGION: "eu-west-1",
		URL: "https://yoxbpyrbcb.execute-api.eu-west-1.amazonaws.com/prod"
	},

	cognito: {

		REGION: "eu-west-1",
		USER_POOL_ID: "eu-west-1_UdsLQC4tB",
		APP_CLIENT_ID: "39b988iutnkut80en0gmp47m17",
		IDENTITY_POOL_ID: "eu-west-1:618d940e-352d-4dbb-945a-16a399643491"


	}
}
