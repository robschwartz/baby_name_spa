## Solve.is Tech Challenge

# Core Requirements
- Upon first visit, Users should default to working on a new distinct list.
- A user’s list should have an ID (alphanumeric 12-character string) that uniquely identifies
it.
- The URL upon first visit should include (?list_id=) and the auto-generated list_id.
- If a user goes to “/” they should be redirected to “/?list_id=xxxxxxxxxx” (a new list)
- Users can return to a list by visiting a URL with their distinct list_id parameter
- Users should be able to add as many names as they would like in a list.
- Whitespace should be trimmed from both ends of the submitted names.
- Duplicate names (case-insensitive, per-list) should be prevented and result in
appropriate error messaging to the user.
- Use PostgreSQL for your database engine
- SPA is fully static and implemented using ReactJS

# Running the Application
- Navigate to https://hardcore-visvesvaraya-33a645.netlify.app. Entering a name the first time might not immediately work since the API might be in sleep mode. It should work after attempting the first name.
- You should be redirected to a url with a unique list_id parameter on the URL. Save this id if you want to view your list in the future.

# TODO
- Clicking on a name crosses it out (and clicking again un-crosses it out). This crossed-out
state should persist across sessions and between users viewing the same list.
- Only allow names with letters and (at most) one space.
- Good: ‘Sally Lou’, ’Stanley’, ‘JoeBob Pringles’
- Bad: ‘C3P0’, ’Stan the Man’
- Real-time updates when multiple people are working on the same list
- Client-side sorting of names (Alphabetical, By Input Time, By Length)
- Allow the user to manually prioritize the list using drag-and-drop functionality
