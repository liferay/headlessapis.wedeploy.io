---
mainPage: false
title: Examples
description: Examples with Liferay Headless APIs
weight: 1
---

## Examples

These examples can be executed using [Postman](https://www.getpostman.com/).

## Prepare environment

Before execute the examples, you need to follow the steps:
- Import the demo data included in this [repository](https://github.com/liferay-labs/headless-apio-demo).
- Configure the [Postman Environment](https://learning.getpostman.com/docs/postman/environments_and_globals/manage_environments/) with the next variables:

| Variable               | How find the value?                                                          |
|------------------------|------------------------------------------------------------------------------|
| username               | Your liferay username. e.g. test@liferay.com                                 |
| password               | Your liferay password. e.g. test                                             |
| contentSpaceId         | The id of your Content Space/Site. List all the [Contet Space](/docs/contet-space/index.html) and pick the identifier of the content space you want to query|
| roleId                 | The id of the Role. List all the [Roles](/docs/roles/index.html) and pickt he identifier of the role you want to query|
| userId                 | The id of the User. List all the [User Accounts](/docs/user-account/index.html) and pick the identifier of the user you want to query|
| organizationId         | The id of the Organization. List all the [Organizations](/docs/organization/index.html) and pick the identifier of the organization you want to query| |
| structuredContentId    | The id of the Structured Content. List all the [Structured Content](/docs/content-space/structuredContents/index.html) and pick the identifier of the structured content you want to query|
| eventResultStructureId | The id of the Event Result Content Structure. List all the [Content Structures](/docs/content-structure/index.html) and pick the `Event Result` id|
| formId                 | The id of the form. | 

### Postman collections

* Root Endpoint [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/4eaef9d6ba43fe179a15)

* My User Account [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d0d8c0f27a04d22ba3f7)

* Content Spaces [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/625390af8a347edae5c9)

* Content Structures [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/203e52fd8ab013b9273d)

* Structured Content [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/fd09da20da25956af16e)

* Workflow [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/ff849ad861374e6676c3)

* Blog postings [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/323d7a1b588133b01b5d)