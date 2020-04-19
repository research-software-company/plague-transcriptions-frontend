# Deployment of the frontend

The frontend is deployed to an S3 bucket (s3://jews-and-plagues) that is served to the world via a CloudFront distribution. The deployment is accessible through https://plagues.researchsoftwarehosting.org .

The Azure pipeline takes care of deployment to S3, and is quite straightforward. AWS credentials are stored outside of this repository, obviously.