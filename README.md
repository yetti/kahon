# kahon

A board game collection manager.

"kahon" means "box" in Tagalog.

## Development

### Pre-requisites

* PostgresSQL 14
* Redis 6.0
* Ruby 3.1.2

### Setup

1. Pull down the app from version control
2. Make sure you have Postgres running
3. Make sure you have Redis running
4. bin/setup

## Running The App

1. bin/dev

<details>
<summary>Dockerised development</summary>

1. Install the [dip](https://github.com/bibendi/dip) gem
2. `dip provision`
3. `dip rails dev` to start the app

</details>

## Tests and CI

1. `bin/ci` contains all the tests and checks for the app
2. `tmp/test.log` will use the production logging format *not* the development one.

## Production

* All runtime configuration should be supplied in the UNIX environment
* Rails logging uses lograge.  bin/setup help can tell you how to see this locally
