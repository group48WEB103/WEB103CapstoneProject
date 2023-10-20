# Ticket Seller

CodePath WEB103 Final Project

Designed and developed by: Dawit Alemu, Zakariya Ahmed

🔗 Link to deployed app:

## About

### Description and Purpose

A ticket selling application that allows users to buy bundles with access to multiple stadiums. Purpose of this application will be to allow access to as many tickets to events as needed by users.

### Inspiration

Inspiration for this application came from popularity of sports in current society.

## Tech Stack

Frontend: React, Next.js, Javascript

Backend: Node.js, Express, Vercel

## Features

### Backend-Features: One-to-Many relational database

User can purchase one ticket that offers multiple events/locations.

| TicketID | TicketName   | Price |
|---------|--------------|-------|
| 1       | Bundle A     | 50    |
| 2       | Bundle B     | 75    |
| 3       | Bundle C     | 60    |

| EventLocationID | TicketID | EventLocationName    |
|-----------------|----------|----------------------|
| 1               | 1        | Event 1              |
| 2               | 1        | Event 2              |
| 3               | 1        | Location A           |
| 4               | 2        | Event 3              |
| 5               | 2        | Location B           |
| 6               | 3        | Event 4              |
| 7               | 3        | Event 5              |
| 8               | 3        | Location C           |


### Backend-Features: RESTful API with response to at least of each type of Request (CRUD)

User can CREATE/READ/UPDATE/DELETE their shopping list of tickets.


### Frontend Features
The web app implements at least one redirection.
The web app implements at least one interaction that the user can initiate and complete on the same page without navigating to a new page.
The web app uses dynamic frontend routes created with React Router.
The web app uses hierarchically designed React components:
Components are broken down into categories, including page and component types.
Corresponding container components and presenter components as appropriate.


### [ADDITIONAL FEATURES GO HERE - ADD ALL FEATURES HERE IN THE FORMAT ABOVE; you will check these off and add gifs as you complete them]

## Installation Instructions


[instructions go here]