---
mainPage: false
title: Filtering
description: Filtering with Liferay Headless APIs
order: 4
---

It's often useful to filter large collections for the exact data that you need. Not all collections, however, allow filtering. 
<!---
Not all collections allow filtering. The ones that support it will contain the 
optional parameter `?filter` in their template.
-->

To filter a collection based on the value of one or more fields, use the optional parameter `filter` following a subset of the oData standard.

## Comparison Operators

| Operator  | Description          | Example                             |
|---------- |--------------------- |-------------------------------------|
| eq        | Equal                | addressLocality eq 'Redmond'        |
|           | Equal null           | addressLocality eq null             |
| ne        | Not equal            | addressLocality ne 'London'         |
|           | Not null             | addressLocality ne null             |
| gt        | Greater than         | price gt 20                         |
| ge        | Greater than or equal| price ge 10                         |
| lt        | Less than            | dateCreated lt 2018-02-13T12:33:12Z |
| le        | Less than or equal   | dateCreated le 2012-05-29T09:13:28Z |

## Logical Operators

| Operator  | Description | Example                      |
|---------- |------------ |------------------------------|
|and|Logical and |price le 200 and price gt 3.5          |
|or |Logical or |price le 3.5 or price gt 200            |
|not' |Logical not |not (price le 3.5)|

The `not` operator needs a space character after it.

## Grouping Operators

| Operator  | Description | Example                      |
|---------- |------------ |------------------------------|
|( ) |Precedence grouping |(price eq 5) or (addressLocality eq 'London')  |

## String functions

| Function  | Description | Example                      |
|---------- |------------ |------------------------------|
| contains  | Contains    |contains(title,'edmon')|

## Lambda Operators

Lambda operators evaluate a boolean expression on a collection. They must be prepended with a navigation path that identifies a collection.

| Lambda Operator  | Description | Example                                |
|----------------- |------------ |----------------------------------------|
| any              | Any         |keywords/any(k: contains(k,'substring1')|

The `any` operator applies a boolean expression to each collection member and evaluates to `true` if the expression is true for any member. 

## Escaping in Queries

You can escape a single quote in a value by adding another single quote. 

For example, to filter for a company whose name is `L'Oreal`:
```
?filter=(title eq 'L''Oreal')
```
