---
title: Custom Actions
description: Workflow Tasks Custom Actions Documentation
order: 1
---

## Workflow Tasks Custom Actions

In responses that contain a workflow task, the `self` rel contains the workflow task's URL. The `_embedded` section contains the URL and type  of the object that the workflow task applies to. For example, the workflow task in this response is accessible at `http://localhost:8080/o/api/workflow-tasks/51632`, and applies to a `BlogPosting` accessible at `http://localhost:8080/o/api/blog-posting/51621`: 

```json
{
    "completed": false,
    "dateCreated": "2018-12-03T14:19Z",
    "definitionName": "Single Approver",
    "name": "review",
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/workflow-tasks/51632"
        },
        "logs": {
            "href": "http://localhost:8080/o/api/workflow-tasks/51632/workflow-logs"
        }
    },
    "_embedded": {
        "object": {
            "identifier": "http://localhost:8080/o/api/blog-posting/51621",
            "resourceType": "BlogPosting"
        }
    }
}
```

## Assign a Workflow Task to Me

To assign a workflow task to yourself, send a `POST` request to the workflow task's `assign-to-me` endpoint. You don't need any other attributes to perform this action. Here's an example of such a request: 

```bash
curl --request POST \
  --url http://localhost:8080/o/api/c/workflow-tasks/42499/assign-to-me \
  --header 'Content-Type: application/json' \
  --data '{}'
```

## Assign a Workflow Task to a User

To assign a workflow task to a specific user, you must send a `POST` request to the workflow task's `assign-to-user` endpoint, and include that user's URL in the request's `assigneeId` attribute. Here's an example of such a request: 

```bash
curl --request POST \
  --url http://localhost:8080/o/api/c/workflow-tasks/42499/assign-to-user \
  --header 'Content-Type: application/json' \
  --data '{"assigneeId": "http://localhost:8080/o/api/user-account/20139"}'
```

## Change a Workflow Task's Transition

To change a workflow task's transition, you must send a `POST` request to the workflow task's `change-transition` endpoint, and include the new transition name (e.g., `approve`, `reject`, etc.) in the request's `transition` attribute. Note that the new transition must be available in the workflow task. Here's an example of such a request: 

```bash
curl --request POST \
  --url http://localhost:8080/o/api/c/workflow-tasks/36633/change-transition \
  --header 'Content-Type: application/json' \
  --data '{"transition": "approve"}'
```

## Add/Update a Workflow Task's Due Date

To add or update a workflow task's due date, you must send a `POST` request to the workflow task's `update-due-date` endpoint. You must also include these attributes with the request: 

* `dueDate`: The workflow task's new due date.
* `comment`: A (optional) comment for the workflow log.

Here's an example of such a request: 

```bash
curl --request POST \
  --url http://localhost:8080/o/api/c/workflow-tasks/36704/update-due-date \
  --header 'Content-Type: application/json' \
  --data '{"dueDate": "2018-12-31T23:59Z", "comment": "This is a comment"}'
```

You can find more examples [here](/docs/my-user-account/workflow-tasks/custom-actions/examples.html). 
