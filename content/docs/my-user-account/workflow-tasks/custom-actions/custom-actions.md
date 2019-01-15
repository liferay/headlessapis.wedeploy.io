---
title: Custom Actions
description: Workflow Tasks Custom Actions documentation
order: 1
---

## Workflow Tasks Custom Actions

The responses will contain inside the `_embedded` section, the workflow task under the key `WorkflowTask`.

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

When navigating through a list of entities, the `self` rel contains the link to each entity.

### Assign workflow task to me

To perform this action, you don't need any additional attibute.

This is an example of the request: 

```bash
curl --request POST \
  --url http://localhost:8080/o/api/c/workflow-tasks/42499/assign-to-me \
  --header 'Content-Type: application/json' \
  --data '{}'
```

### Assign workflow task to user

To perform this action, you need:

* **assigneeId**: user identifier (e.g.: `http://localhost:8080/o/api/user-account/20139`).

This is an example of the request: 

```bash
curl --request POST \
  --url http://localhost:8080/o/api/c/workflow-tasks/42499/assign-to-user \
  --header 'Content-Type: application/json' \
  --data '{"assigneeId": ""}'
```

### Change workflow task transition

To perform this action, you need:

* **transition**: transition name available in the workflow task. (e.g.: `approve`, `reject`). If the transition is empty, the custom actions will take the default one in the workflow definition.

This is an example of the request: 

```bash
curl --request POST \
  --url http://localhost:8080/o/api/c/workflow-tasks/36633/change-transition \
  --header 'Content-Type: application/json' \
  --data '{"transition": ""}'
```

### Add/Update workflow task due date

To perform this action, you need:

* **dueDate**: due date of the workflow task.
* **comment** (_Optional_): additional comment for the workflow log.

This is an example of the request: 

```bash
curl --request POST \
  --url http://localhost:8080/o/api/c/workflow-tasks/36704/update-due-date \
  --header 'Content-Type: application/json' \
  --data '{"dueDate": "2018-12-31T23:59Z", "comment": "This is a comment"}'
```

When navigating through the list of entities, the link to each entity can be found with the rel `self`.

You can found more examples in the following [link](/docs/my-user-account/workflow-tasks/custom-actions/examples.html).