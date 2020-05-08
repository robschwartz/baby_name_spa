## Solve.is Tech Challenge

# Core Requirements
● Upon first visit, Users should default to working on a new distinct list.
● A user’s list should have an ID (alphanumeric 12-character string) that uniquely identifies
it.
● The URL upon first visit should include (?list_id=) and the auto-generated list_id.
● If a user goes to “/” they should be redirected to “/?list_id=xxxxxxxxxx” (a new list)
● Users can return to a list by visiting a URL with their distinct list_id parameter
● Users should be able to add as many names as they would like in a list.
● Whitespace should be trimmed from both ends of the submitted names.
● Duplicate names (case-insensitive, per-list) should be prevented and result in
appropriate error messaging to the user.
● Use PostgreSQL for your database engine
● SPA is fully static and implemented using ReactJS
