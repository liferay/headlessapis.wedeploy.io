---
mainPage: true
title: Workflow Logs
description: Workflow Logs Endpoint documentation
weight: 2
---

## The Workflow Logs Model

The following fields are currently supported:

* **dateCreated**: creation date of the workflow log.
* **commentLog**: comment of the workflow log.
* **previousState**: if exists, state before the current one.
* **state**: state of the workflow log.
* **type**: workflow log type (e.g.: `TASK_ASSIGNMENT`, `TASK_COMPLETION`, `TASK_UPDATE`).

Also this model offers the following links:

* **auditPerson**: 
* **person**: person assigned to the workflow task.
* **previousPerson**: if exists, person assigned before the current one.
* **task**: workflow task which the log belongs.

This is an example of the request: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/p/workflow-tasks/36564/workflow-logs \
  --header 'Accept: application/hal+json'
```

The response in `json HAL` format will contain inside the `_embedded` section, the workflow log under the key `WorkflowLog`.

```json
{
    "total": 1,
    "count": 1,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/p/workflow-tasks/51632/workflow-logs?page=1&per_page=30"
        },
        "first": {
            "href": "http://localhost:8080/o/api/p/workflow-tasks/51632/workflow-logs?page=1&per_page=30"
        },
        "last": {
            "href": "http://localhost:8080/o/api/p/workflow-tasks/51632/workflow-logs?page=1&per_page=30"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/p/workflow-tasks/51632/workflow-logs"
        }
    },
    "_embedded": {
        "WorkflowLog": [
            {
                "dateCreated": "2018-12-03T14:19Z",
                "commentLog": "Assigned initial task.",
                "state": "review",
                "type": "TASK_ASSIGNMENT",
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/p/workflow-logs/51641"
                    },
                    "auditPerson": {
                        "href": "http://localhost:8080/o/api/p/user-account/20139"
                    },
                    "person": {
                        "href": "http://localhost:8080/o/api/p/user-account/0"
                    },
                    "previousPerson": {
                        "href": "http://localhost:8080/o/api/p/user-account/0"
                    },
                    "task": {
                        "href": "http://localhost:8080/o/api/p/workflow-tasks/51632"
                    }
                }
            }
        ]
    }
}
```
When navigating through the list of entities, the link to each entity can be found with the rel `self`.

You can found more examples in the following [link](/docs/my-user-account/workflow/workflow-logs/examples.html).