- Create custom fields
- Edit custom fields
- Item view
- List view
- List detail view
- Manage custom fields (control display)

Need way to group custom fields, corresponding to section names in the various places that custom fields can be used:

- Job Posting
- Resumes
- Applications
- Candidates
- Job Seeker Profile
- Employer Profile
- Recruiter Profile

Spec has the following database schema:

- Required / not required
- Published / unpublished
- Data type of field (date, currency, etc.)
- Section to display in
- Order

Store as EAV in the back-end, and have a standard key name for the nested object to be used in each relevant view:

```
{ "fields" : { "section1": { "field1": "value1" } } }
```

