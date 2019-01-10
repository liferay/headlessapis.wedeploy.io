---
mainPage: false
title: Examples
description: Examples with Liferay Headless APIs
weight: 1
---

## Examples

| Collection                                                       | Examples Link                                           |
|------------------------------------------------------------------|---------------------------------------------------------|
| [Blogs](/docs/content-space/blogPosts/)                          | https://documenter.getpostman.com/view/6033677/RznCpeaY |
| [Content Spaces](/docs/content-space/)                           | https://documenter.getpostman.com/view/6060345/RznBPgKy |
| Content Structure                                                | https://documenter.getpostman.com/view/6060345/RznCpeet |
| [Documents](/docs/content-space/documentsRepository/documents/)  | https://documenter.getpostman.com/view/5930647/RznFqJca |
| [Documents Repository](/docs/content-space/documentsRepository/) | https://documenter.getpostman.com/view/5930647/Rzn9sgTb |
| [Folders](/docs/content-space/documentsRepository/folders/)      | https://documenter.getpostman.com/view/5930647/RznCqeii |
| Forms                                                            | https://documenter.getpostman.com/view/6029310/RznFqdwg |
| [My User Account](/docs/my-user-account/)                        | https://documenter.getpostman.com/view/6029310/RznEMfGh |
| Organization                                                     | https://documenter.getpostman.com/view/6060345/RznFqdwm |
| Roles                                                            | https://documenter.getpostman.com/view/6060345/RznFqe2C |
| [Root](/docs/general/)                                           | https://documenter.getpostman.com/view/6029310/RznCpeaX |
| [Structured Contents](/docs/content-space/structuredContents/)   | https://documenter.getpostman.com/view/6060345/RznBPg2G |
| [User Account](/docs/user-account/)                              | https://documenter.getpostman.com/view/6060345/RznFqJTp |
| [Workflow](/docs/my-user-account/workflow-tasks/)                | https://documenter.getpostman.com/view/6029310/RznFqdsD |

## Advanced Examples with Postman

These examples can be executed using [Postman](https://www.getpostman.com/).

### Prepare Your Environment

Before executing the examples, you must follow these steps: 

- Import the demo data included in [this repository](https://github.com/liferay-labs/headless-apio-demo).
- Configure the [Postman environment](https://learning.getpostman.com/docs/postman/environments_and_globals/manage_environments/) with these variables (it is important to notice that the value should be set as `CURRENT VALUE` no `INITIAL VALUE`):

| Variable               | Description                                                                  |
|------------------------|------------------------------------------------------------------------------|
| `username`             | Your Liferay username (e.g., test@liferay.com)                               |
| `password`             | Your Liferay password (e.g., test)                                           |
| `contentSpaceId`       | The ID of your content space/site. Send a request to the [`content-spaces` endpoint](/docs/content-space/index.html) to get a list of your available content spaces and their IDs. |
| `documentId`           | The document's ID. Send a request to the [`document` endpoint](/docs/content-space/documents-repository/documents/index.html) to get a list of your available documents and their IDs. |
| `folderId`             | The folder's ID. Send a request to the [`folder` endpoint](/docs/content-space/documents-repository/folders/index.html) to get a list of your available folders and their IDs. |
| `roleId`               | The role's ID. Send a request to the [`roles` endpoint](/docs/roles/index.html) to get a list of your available roles and their IDs. |
| `userId`               | The user's ID. Send a request to the [`user-account` endpoint](/docs/user-account/index.html) to get a list of your available users and their IDs. |
| `organizationId`       | The organization's ID. Send a request to the [`organization` endpoint](/docs/organization/index.html) to get a list of your available organizations and their IDs. |
| `structuredContentId`  | The structured content's ID. Send a request to the [`structured-contents` endpoint](/docs/content-space/structuredContents/index.html) to get a list of your available structured contents and their IDs. |
| `eventResultStructureId` | The ID of the event result in the content structure. Send a request to the [`content-structures` endpoint](/docs/content-structure/index.html) to get a list of your available event results (`Event Result`) and their IDs. |
| `formId`                 | The form's ID. | 

### Postman Collections

| Collection           | Postman Link                                                                                                         |
|----------------------|----------------------------------------------------------------------------------------------------------------------|
| Blogs                | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/323d7a1b588133b01b5d) |
| Content Spaces       | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/625390af8a347edae5c9) |
| Content Structures   | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/203e52fd8ab013b9273d) |
| Documents            | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a46ae881ce951ee6262b) |
| Documents Repository | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d3e58a5899c098a21ebb) |
| Folders              | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/dce4a5ad7b52311b5fb3) |
| Forms                | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/873245aeebb453e9d236) |
| My User Account      | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d0d8c0f27a04d22ba3f7) |
| Organization         | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a4bca01d4cea9f671e53) |
| Roles                | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a0d85e5160b24a2c4bb8) |
| Root Endpoint        | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/4eaef9d6ba43fe179a15) |
| Structured Content   | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/fd09da20da25956af16e) |
| User Account         | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a78d14116b6327df2199) |
| Workflow             | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/ff849ad861374e6676c3) |