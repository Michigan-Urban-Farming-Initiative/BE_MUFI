# Strapi application

# MUFI Michigan Urban Farming Initiative

---

## Table of Contents

[Contributors](https://github.com/Michigan-Urban-Farming-Initiative/MUFI#mufi-contributors)
[Project Overview](https://github.com/Michigan-Urban-Farming-Initiative/MUFI#save-this-job-project-overview)
[Teck Stack](https://github.com/Michigan-Urban-Farming-Initiative/MUFI#tech-stack)
[Testing](https://github.com/Michigan-Urban-Farming-Initiative/MUFI#testing-front-end)
[Git Flow Procedures](https://github.com/Michigan-Urban-Farming-Initiative/MUFI#gitflo-procedures-and-guidlines)
[Front-end Docs](https://github.com/Michigan-Urban-Farming-Initiative/MUFI/tree/main/mufi-fe#readme)

---

## 2️⃣ Endpoints

#### Base URL https://mufi-back-end.herokuapp.com/

#### Events Routes

| Method | Endpoint        | Description                  |
| ------ | --------------- | ---------------------------- |
| GET    | `/events`       | Returns all events.          |
| GET    | `/events/:id`   | Returns specific event by id |
| GET    | `/events/count` | Returns count of events.     |
| POST   | `/events`       | Create event                 |
| DELETE | `/events/:id`   | Delete an event              |
| PUT    | `/events/:id`   | Updates event                |

#### Press Release Routes

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/presses`       | Returns all PR's.         |
| GET    | `/presses/count` | Returns specific PR by id |
| GET    | `/presses/:id`   | Returns count of PR's.    |
| POST   | `/presses`       | Create Press release      |
| DELETE | `/presses/:id`   | Delete Press release      |
| PUT    | `/presses/:id`   | Update Press Release      |

# Data Models

#### Events

    {
    id: INTEGER,
    event_name: STRING,
    date: DATE,
    start_time: TIME,
    end_time: TIME,
    description: RICH-TEXT,
    location: STRING,
    cost: DECIMAL,
    age_restriction: BOOLEAN,
    event_capacity: INTEGER,
    categories: [CATEGORIES COLLECTION],
    sponsors: [SPONSORS COLLECTION],
    mufi_contacts: [MUFI-CONTACTS COLLECTION],
    }

---

#### Press Release

    {
    id: INTEGER,
    title: STRING,
    date_released: DATE,
    author: STRING,
    article_link: STRING,
    source: STRING,
    image: FILE,

    }

## Tech Stack

#### Back end:

- Strapi

## Testing

- Jest
- Supertest

## npm install then npm start :exclamation:

Installs all of the dependencies after cloning project. npm ONLY!

## GIT FLOW PROCEDURES and GUIDELINES

:octocat:

### Branch Guidlines

## MAIN

- Only the Staging branch will be merged into MAIN
- Only reviewed and merged by Michelle or Mike

## Staging

- Only Development branch merged into staging branch.
- 1 Reviewers before merge.

## Development

- Do 'git pull origin' from Development unless otherwise noted
- Feature branches will be merged into the development branch
- Must be reviewed by 1 reviewer before merging

## Feature branches

- Use the correct tag for the feature branch when creating a pull request:
  - Feature
  - Bugfix
  - Help needed
  - Refactor
  - Documentation (readme)
  - Configuration
- Naming convention should be ⇒ feature/branch-name
- Once the branch has been merged, delete the branch in Github

### Pull Request Guidelines

- Tag
  - Use an appropriate tag that matches the feature
- Compare to the Development branch
- Name
  - What is the feature
- Description
  - Why is the feature needed?
  - What problem does it solve?
  - What does it do?
- Is the code free of unnecessary comments/console logs?
- Are there TO-DO's, or is the feature complete?
- Has the feature been tested?
- Is there help needed on the feature?
  - What is the issue?
- Put a link to the Trello card of feature
- Choose appropriate reviewers

### Merge Procedures

- Make sure all reviews are commented, even if the comment is 'great job'
- If the reviewer is uncertain of any code, put a question in the comments
- Once a conversation has been concluded, click the button to complete the conversation
- The final reviewer does merge and deletes the branch

## Issue/Bug Request

-

-
