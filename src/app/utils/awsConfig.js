// src/awsConfig.js

import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_S3_REGION',
});

const s3 = new AWS.S3();

export default s3;
