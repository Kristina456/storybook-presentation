# Storybook project

## Getting started

### Technologies

- Node 17.3.0+
- NPM 8.3.0+
- Next.js 13.4.2
- Storybook 7.0.12
- Chromatic 6.19.9

### Development

1. Clone the repository
2. `npm install`
3. `npm run dev`
4. Optional Chromatic: We are using Chromatic free publishing service made for Storybook that documents, versions, and indexes your UI components securely in the cloud. 
   - Navigate to the [Chromatic page](https://www.chromatic.com/?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook). Sign up with your GitHub, GitLab, Bitbucket, or email and generate a unique project-token for your project.
   - Run the test publish command again to upload your UI tweaks and have Chromatic catch your changes. <br>
     `npx chromatic --project-token=xxx`

## Scripts

  ### `dev`
  
Starts the development server

  ### `storybook`

Starts the storybook server
  
  ### `build-storybook`

Build Storybook as a static web application

  ### `web-server`

Storybook will create a static web application capable of being served by any web server