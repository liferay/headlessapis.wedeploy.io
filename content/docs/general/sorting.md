---
mainPage: false
title: Sorting
description: Sorting with Liferay Headless APIs
weight: 2
---

## Sorting

Not all collections allow sorting.

<!---
Not all collections allow sorting. The ones that support it will contain the 
optional parameter `{lb}?sort{rb}` in their template.
-->

e.g. Given a URL for a Collection (such as `http://localhost:8080/o/api/p/content-space/20199/structured-contents`)
It is possible to sort the results by title appending to the URL `?sort=title`

By default, the sorting is in ascending order. (0-1-A-Z). However, this can be changed
adding `desc` after the parameter name separated with a `:`.

e.g. To sort the results by title descending, appending to the url `?sort=title:desc`

It is also possible to sort by more than one field, separating the fields by commas.
In this situation, the first parameter found is used to sort, and in case of coincidence,
the following parameter in the list is used to sort and so on. 

e.g. To sort the results by the title of the Structured Content, and in case of coincidence
then order by the Date of creation appending this to the url: `sort=title,dateCreated`

If It is needed to change the order to descending for one of the fields, then It is necessary 
to separate the parameters in this way:

`?sort=title:desc,dateCreated:asc`
