---
title: "Blog Posts"
description: "Blog posts Endpoint documentation"
order: 1
---

## Model

The following fields are currently supported for this model:

* **alternativeHeadline**: The blog post's subtitle.
* **articleBody**: The blog post's content.
* **dateCreated**: The blog post's creation date.
* **dateModified**: The date the blog post was last modified.
* **datePublished**: The blog post's publication date.
* **encodingFormat**: The blog post's encoding format.
* **friendlyUrlPath**: The blog post's friendly URL. Note that this is a relative URL.
* **headline**: The blog post's title.
* **keywords**: The blog post's keywords.

This model also contains these links:

* **creator**: The user who created the blog post.
* **contentSpace**: The content space that the blog post belongs to.
* **aggregateRating**: The blog post's average rating.
* **image**: The blog post's cover image.
* **category**: The collection of categories assigned to the blog post.
* **comment**: The blog post's comments.

## Example

This API supports [pagination](/docs/general/pagination.html).

In the response, the `_embedded` section contains the `BlogPosting` key. This key contains the list of blog posts.

Here's an example of a request to this endpoint, where `{{contentSpaceId}}` is the ID of the content space that the blog post belongs to:

```bash request
curl --request GET \
  --url http://localhost:8080/o/api/content-space/{{contentSpaceId}}/blog-posting?page=1&per_page=1
```

```json response
{
    "total": 2,
    "count": 2,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/content-space/20126/blog-posting?page=1&per_page=30"
        },
        "first": {
            "href": "http://localhost:8080/o/api/content-space/20126/blog-posting?page=1&per_page=30"
        },
        "last": {
            "href": "http://localhost:8080/o/api/content-space/20126/blog-posting?page=1&per_page=30"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/content-space/20126/blog-posting"
        }
    },
    "_embedded": {
        "BlogPosting": [
            {
                "dateCreated": "2018-12-20T09:48Z",
                "dateModified": "2018-12-20T09:49Z",
                "datePublished": "2018-12-20T09:47Z",
                "alternativeHeadline": "Awesome subtitle!",
                "articleBody": "<p><strong>Today</strong> I’m writing to announce several new and exciting initiatives within the Liferay Community. &nbsp;We consider this to be the starting point for a completely revamped community experience. We also have other changes in the works and can’t wait to share the details of what we have been working on. Read on for more details and let us know what you think.</p>\n\n<p>&nbsp;</p>\n\n<h2>Advocates</h2>\n\n<p>Our first initiative is to create a new team of Developer Advocates to reassure our commitment with the community. Their mission is to inspire, educate, assist and encourage our community to build amazing applications using Liferay open source technology. We believe it’s important to have a dedicated group of people that can listen to you and take action.</p>\n\n<p><br />\n<img alt=\"\" src=\"https://web.liferay.com/documents/11056/90725000/next-team.jpg/511f0e8c-5804-4dc3-8df5-541d325c0d67?t=1497570713150\" /></p>\n\n<p>&nbsp;</p>\n\n<p>This doesn’t mean that they are now the only ones responsible for the community. For us to have a healthy and vibrant ecosystem, we need everybody to have a sense of ownership, we need everybody to care. But the Advocates will make sure the “wheels are greased” to keep things in the community moving forward.&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p><a href=\"https://community.liferay.com/news/introducing-the-liferay-developer-relations-team/\">Read more about the Liferay Developer Relations team</a></p>\n\n<p>&nbsp;</p>\n\n<h2>New Home</h2>\n\n<p>We want to revamp the overall community experience and we’re starting it by announcing a completely new site for the community!</p>\n\n<p>&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://web.liferay.com/documents/11056/90725000/next-site.png/10229556-9d22-4ee1-9f16-802ece552256?t=1497570831501\" /></p>\n\n<p>&nbsp;</p>\n\n<p>The old Community Home page was primarily focused on Liferay Portal, but Liferay has now grown to support several open source projects (and communities), like Sennajs, Metal, and Electric. Our new Community Home will help you discover new Liferay open source projects, stay connected to important announcements, and get in touch with other community members. This a new beginning with huge potential to grow.</p>\n\n<p>&nbsp;</p>\n\n<p><a href=\"https://community.liferay.com/news/announcing-the-new-liferay-community-site/\">Read more about the new Liferay Community site</a></p>\n\n<p>&nbsp;</p>\n\n<h2>Chat</h2>\n\n<p>Today, there are pretty much two main channels that community members use to communicate. Technical questions are often asked on the&nbsp;<a href=\"https://web.liferay.com/community/forums\">Forums</a>. Stories and tutorials are often written on the&nbsp;<a href=\"https://web.liferay.com/community/blogs/highlighted\">Blogs</a>.</p>\n\n<p>&nbsp;</p>\n\n<p>Those places are great and serve their purposes really well, but we kind of miss a more instant channel. Because of that, we’re introducing a new chat that will allow people to communicate in a quick and direct way.</p>\n\n<p>&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://web.liferay.com/documents/11056/90725000/chat-screenshot.png/25a4114f-f186-4216-a76f-389fab443dd0?t=1497571077513\" /></p>\n\n<p>&nbsp;</p>\n\n<p>Chat will foster ongoing conversations among community members, help us feel closer together, and let you answer quick questions for each other.</p>\n\n<p>&nbsp;</p>\n\n<p><a href=\"https://community.liferay.com/news/a-new-way-to-connect-with-the-liferay-community/\">Read more about the new chat room</a></p>\n\n<p>&nbsp;</p>\n\n<h2>Forums</h2>\n\n<p>Our forums have always been a good place for people to ask questions and get answers. As of today, we’ve seen more than 363,100 posts from 33,296 different participants over there.</p>\n\n<p>&nbsp;</p>\n\n<p>Although those numbers can show how vibrant this community is, we know we can do better, especially when it comes to the number of unanswered questions.</p>\n\n<p>&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://web.liferay.com/documents/11056/90725000/next-forums.png/22691719-0cc0-4bc2-9392-e5dc44b107c7?t=1497570873027\" /></p>\n\n<p>&nbsp;</p>\n\n<p>In order to identify opportunities and drive more engagement on our forums, we signed a contract with&nbsp;<a href=\"http://networkactivator.com/\">Network Activator</a>. Their tool allow us to list experts in each area and automatically assign questions to them.</p>\n\n<p>&nbsp;</p>\n\n<p>Before Network Activator we had an average of 30 unanswered questions/week. After, we had an average of 10-15 unanswered questions/week. This 67% reduction is great, but need to decrease it even more.</p>\n\n<p>&nbsp;</p>\n\n<p>We’re even thinking about how to identify experts in the community so you can help us answer questions, too.&nbsp;Your participation is crucial for this to work. Keep asking, keep answering!</p>\n\n<p>&nbsp;</p>\n\n<h2>Bug Reporting</h2>\n\n<p>As you may know, many of our projects use&nbsp;<a href=\"https://issues.liferay.com/\">Jira</a>&nbsp;for issue tracking. Recently, we upgraded our self-hosted Jira instance from 6.4.10 to 7.3.3. It may not sound very interesting, but&nbsp;<a href=\"https://www.atlassian.com/software/jira/whats-new?tab=new-features-in-server\">this update comes with several improvements</a>&nbsp;that will be useful for bug reporters, including a better experience for editing issue descriptions.</p>\n\n<p>&nbsp;</p>\n\n<p>We have also created a new&nbsp;<a href=\"https://issues.liferay.com/secure/Dashboard.jspa?selectPageId=26374\">Community Dashboard</a>&nbsp;that will summarize how we are doing responding to Community bug reports.</p>\n\n<p>&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://web.liferay.com/documents/11056/90725000/next-dashboard.png/fbc4f83f-8a8a-469c-bf94-63fff1158757?t=1497574120433\" /></p>\n\n<p>&nbsp;</p>\n\n<p>Besides that, our product management team has grown in the last year. That means more people resposible to filter what is being reported and taking action. They are identifying bugs reported by the community and prioritizing them. Last week, for example, 13 bugs were reported by community members, and now only 5 of them remain open.</p>\n\n<p>&nbsp;</p>\n\n<h2>Code Contributions</h2>\n\n<p>Modularity has been a very important topic to us for many reasons. By splitting our code into small pieces we think there's a lot of potential for increasing open source participation in Liferay by lowering the barrier to entry for new contributors.</p>\n\n<p>&nbsp;</p>\n\n<p>As a result of that work, you can now see&nbsp;<a href=\"http://github.com/liferay?utf8=%E2%9C%93&amp;q=com-liferay\">97 public repositories</a>&nbsp;that were extracted from&nbsp;<a href=\"https://github.com/liferay/liferay-portal\">Liferay Portal Community Edition</a>.</p>\n\n<p>&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://web.liferay.com/documents/11056/90725000/next-repos.png/c8fc7302-39cf-4f3a-8e21-395fbc0c721c?t=1497570859980\" /></p>\n\n<p>In addition, we’re currently evaluating the contribution process for all our open source projects. We've already identified opportunities for improvements, from documenting core development to signing the contributor's agreement, and we'll announce these changes in the near future.</p>\n\n<p>&nbsp;</p>\n\n<h2>User Groups</h2>\n\n<p>One of the most exciting parts of belonging to a community is meeting other members in person. In fact, we believe that personal contact is the richest experience, not matched by any media or technology. That's why we like user groups so much.</p>\n\n<p>&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://web.liferay.com/documents/11056/90725000/next-user-group.jpg/dd101e1f-37ce-48cc-af6b-db876ef5ed4a?t=1497570840636\" /></p>\n\n<p>&nbsp;</p>\n\n<p>Today, there are more than 44 Liferay user groups in 32 different countries, but not all of them are active.</p>\n\n<p>&nbsp;</p>\n\n<p>In the next couple weeks, we’ll reach out to organizers to see how we can help their groups to be up and running. If they can’t find places to meet, we could help. If they can’t find speakers, we could help. If there’s anything that you need as a user group organizer or if you want to become one, please let us know.</p>\n\n<p>&nbsp;</p>\n\n<h2>Conferences Worldwide</h2>\n\n<p>Liferay conferences are a great way to network with other community members from all around the globe. They also provide an excellent way to meet with Liferay engineers and experts face to face to ask questions and provide direct feedback on your projects.</p>\n\n<p>&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://web.liferay.com/documents/11056/90725000/next-events.jpg/1f7a5d79-6cdd-4653-8a11-a9f18e544c2b?t=1497570849845\" /></p>\n\n<p>&nbsp;</p>\n\n<p>This year we’re continuing with our three core conference formats: LDSF is primarily for business or “digital transformation” audiences, DevCon is deeply technical, and Symposium is a healthy mix of both.</p>\n\n<p>&nbsp;</p>\n\n<p>All conferences are an excellent opportunity to learn about upcoming new features and to learn best practices to help your projects be successful.&nbsp;We’ll be in 11 different countries this year so I hope to see you there!</p>\n\n<p>&nbsp;</p>\n\n<h2>Special Activities</h2>\n\n<p>In the past we launched several special activities like BugSquad, Liferay Ideas, Community Expedition, Top Contributors, Community Pulse Awards, Official User Groups, and Community Verifiers.</p>\n\n<p>&nbsp;</p>\n\n<p>Those initiatives helped with engagement and provided some clear guidelines for participating within the Liferay community.</p>\n\n<p>&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://web.liferay.com/documents/11056/90725000/next-pulse-awards.jpg/76d67040-a70d-43f1-8960-f3c1ec20df50?t=1497570882495\" /></p>\n\n<p>&nbsp;</p>\n\n<p>We’ll be reviving some of these programs, which were crucial in improving product quality, building relationships, and recognizing and rewarding our community's talent.</p>\n\n<p>&nbsp;</p>\n\n<h2>Clustering</h2>\n\n<p>On a very pragmatic note, we are working on a new clustering module for Liferay Portal Community Edition. After speaking with many of you throughout the last 14 months, we came to the conclusion that we can find a way to meet the clustering needs of the community and still&nbsp;<a href=\"https://web.liferay.com/web/bryan.cheung/blog/-/blogs/liferay-portal-7-ce-app-server-database-clustering-support\">address the issues</a>&nbsp;that originally led to our decision to ship Liferay Portal Community Edition without clustering. Please stay tuned for more details regarding this!<br />\n&nbsp;</p>\n\n<h2>Conclusion</h2>\n\n<p>We’ll continue to do our best to understand your needs, see how the market responds, and make adjustments as necessary. We are taking seriously our commitment to invest our success back in our community, and excited to do much more.</p>\n\n<p>&nbsp;</p>",
                "encodingFormat": "text/html",
                "friendlyUrlPath": "what-s-next-for-the-liferay-community-",
                "headline": "What’s next for the Liferay Community?",
                "keywords": [
                    "liferay"
                ],
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/blog-posting/37033"
                    },
                    "contentSpace": {
                        "href": "http://localhost:8080/o/api/content-space/20126"
                    },
                    "aggregateRating": {
                        "href": "http://localhost:8080/o/api/aggregate-rating/24501:37033"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/user-account/20139"
                    },
                    "image": {
                        "href": "http://localhost:8080/o/api/document/0"
                    },
                    "category": {
                        "href": "http://localhost:8080/o/api/blog-posting/37033/categories"
                    },
                    "comment": {
                        "href": "http://localhost:8080/o/api/blog-posting/37033/comment"
                    }
                }
            },
            {
                "dateCreated": "2018-12-20T09:45Z",
                "dateModified": "2018-12-20T09:49Z",
                "datePublished": "2018-12-20T09:45Z",
                "articleBody": "<p>The world is big and diverse. Right now there are around 7.6 billion people in the world, 4 billion with an internet access. When you’re improving a Design System for a product used worldwide, like Lexicon for Liferay, you should take this simple statement into account. Cultural, religious and regional concerns need to be considered. It may sound obvious, but the true fact is that we sometimes forget about it.</p>\n\n<p>I’m going to explain how we redesigned and tested empty states illustrations for Liferay products.</p>\n\n<h2>1. The&nbsp;past</h2>\n\n<p>Let’s put a bit of context around this story. As you may know, an empty state illustration is shown when there is not any other info to display and capture the user’s attention. A friendly face looking around, smiling, or winking was the animation family for empty states in Lexicon 1 by&nbsp;<a href=\"https://dribbble.com/marcoscv\">Marcos Castro</a>. They were created to give feedback in a memorable way and provide a pleasurable experience for the user but the fact was that the smiling face animation caused some cultural issues.</p>\n\n<p>In some cultures a wink could be understood in a sexual way. Of course, we fixed that ASAP. For our next version,&nbsp;<a href=\"https://lexicondesign.io/\">Lexicon 2</a>, we wanted to avoid possible misunderstandings and make sure that our set of animations are universal, appropriate, understandable and polite for every culture in different geographical localizations all over the world.</p>\n\n<h2>2. The&nbsp;theme</h2>\n\n<p>How did we select a common theme? Firstly, the subject was very carefully chosen. It should suggest the emptiness in a pleasurable and descriptive way. Think about it, but the way of representing emptiness is not so obvious. In fact, we started crafting ideas around the desert concept but at the end the selected topic was outer space. The reason behind this decision was that the space is usually related with curiosity, technology and challenges in a good way unlike the desert which is normally related to death.</p>\n\n<h2>3. Visual&nbsp;identity</h2>\n\n<p>With the topic selected, it was the turn for visual design, where&nbsp;<a href=\"https://twitter.com/EmilianoGCicero\">Emiliano Cicero</a>&nbsp;turned concepts into illustrations.</p>\n\n<p>Regarding the visual guidelines, it was necessary to make a clear, understandable design, with clean shapes that show the idea with simple animations to catch the user attention but without being too aggressive. We created 3 illustrations as part of the collection: a satellite surrounded by asteroids, the moon with comets and a spaceship launch.</p>\n\n<p>The idea was to tell a story that accompanies users in their journey using the product, giving consistency through different animations depending on the interface status but totally related to a common topic, outer space.</p>\n\n<h2>4. The&nbsp;test</h2>\n\n<p>Next step was the testing stage to validate the new concept and design. For the test, we chose different profiles of Liferay workers all around the world, representing different regions, cultures, and religions. Then they were requested to fill a questionnaire to make sure that the illustrations couldn’t be interpreted as offensive, obscene, inappropriate, menacing, insulting or impolite for anyone in their culture or region. We asked participants to answer the questions with specific comments, ideas or feelings on why they thought the animation could be appropriate and understandable or not. Moreover, we included the description of future possible ideas to use in new illustrations related with outer space, as an astronaut arriving to the moon, an astronaut putting a flag, a comet, a spaceship flying or planets orbiting around a star. All these scenes together create the story.</p>\n\n<p>As a summary of the test results, 100% of the answers agreed that the images weren’t offensive, obscene, inappropriate, impolite, menacing or insulting for them, their regions or their cultures. Nevertheless, 40% pointed that the pictures didn’t necessarily mean an empty state because of the presence of many elements. And comments on other possible scenes related to the space gave us lot of information on what to do and what to avoid.</p>\n\n<h2>5. Design iteration</h2>\n\n<p>Regarding all the information provided by participants, we iterated the design again, refining and polishing details to get to the new empty state animations set. We took into account the importance of having a universal, appropriate, understandable and polite design for each of the possible users for our product. As an example, we reduced the number of elements based on the feedback and we changed the powerful bright colors to a grayscale to not be so intense but still eye-catching.</p>\n\n<h2>6. The&nbsp;result</h2>\n\n<p>As an outcome of all this study and design process we created three animated illustrations for our empty states.</p>\n\n<p>A telescope looking into the sky for the empty search/filter action when there are not&nbsp;results.</p>\n\n<p>A satellite when there are no elements yet in a&nbsp;dataset.</p>\n\n<p>A spaceship launch when the user has emptied the dataset for a good end, for example, when the notifications list has been cleared&nbsp;out.</p>\n\n<p>Our animations set for empty states conformed a collection that makes users feel comfortable and part of the story. This is just the beginning and we expect to expand the family as our needs grow. We expect the experience using Liferay products will be more pleasurable, memorable, understandable and universal.</p>\n\n<p>What do you think?</p>",
                "encodingFormat": "text/html",
                "friendlyUrlPath": "designing-animations-for-a-multicultural-product",
                "headline": "Designing animations for a multicultural product",
                "keywords": [
                    "design",
                    "product"
                ],
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/blog-posting/37021"
                    },
                    "contentSpace": {
                        "href": "http://localhost:8080/o/api/content-space/20126"
                    },
                    "aggregateRating": {
                        "href": "http://localhost:8080/o/api/aggregate-rating/24501:37021"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/user-account/20139"
                    },
                    "image": {
                        "href": "http://localhost:8080/o/api/document/0"
                    },
                    "category": {
                        "href": "http://localhost:8080/o/api/blog-posting/37021/categories"
                    },
                    "comment": {
                        "href": "http://localhost:8080/o/api/blog-posting/37021/comment"
                    }
                }
            }
        ]
    }
}
```

When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/content-space/blogPosts/examples.html).
