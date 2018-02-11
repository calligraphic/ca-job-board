My profile Layout (employer profile) Profile page should show current jobs for employer.

WPJobus uses a Bootstrap-style Company Profile template, similar to theJomsocial profiles.

TheWP Jobus categories on the company profile:

- Profile
  - JobOffers
- Clients
- Portfolio
- Contact

Display **custom fields**. Item view needs a **section organization**, so the custom fields know where to display.

Some ideas to "put a face to the company":

- video sections to describe the business & culture
- employee testimonials
- photo gallery
- and a perks section help share a sense of work life
- Hero images

Should show jobs being listed by this employer.

##### Notes:

- Users can have multiple profiles (Recruiter, Employer, multiple Employers, Job Seeker, etc.) and multiple individual profiles in each defined profile (i.e., one user can belong to many employers)..
- Provide a "profile completion" progress bar that shows on the user's Dashboard view.
- Each Employer Profile can have many Departments, which can correspond to properties. Each Employer Profile has a "default" Department that is used if no other Departments are defined. Users can belong to many Departments. Departments can own other Departments and inherit all privileges of those other Departments.
- Each Employer has a single "owner". This is a super-user for the company, who can then grant super-user permissions to other users registered with the Employer profile.

##### Employer Access Roles

Need different roles within an Employer, to control access to job postings. Access control is based on Employer Departments that a user is assigned to, so that an employer can configure who can post jobs by assigning their users to departments and other privileged activities.

##### Signup Scenarios based on Role

**Signup Scenario 1:**  Company Head of HR signs up first:  This is the easiest and most straight-forward.  The ultimate decision maker sets up the company, and has highest level admin privilidges over both the company and properties, as well as add/removing/setting access levels for users in the company.

**Signup Scenario 2:**  Property Manager signs up first:  They would set up the company profile, but then we have a problem that they have much too much control.  I suppose in this instance, it wouldn't be horrible for them to have complete control until someone else approaches us about taking over.  

**Signup Scenario 3:**  Head of HR signs up second/later:  The company profile is already there, but now they need to get control of it.  

**Signup Scenario 4:**  Property Manager signs up second/later:  So they company profile is already there, and either a rightful controller of the company profile is in charge, or it is another property manager.  How do they get approved to join the company without ruining the flow and timing
  (I.e., if they have to wait to get approved, they may never come back to post their job.)

**Signup Scenario 5:**  Property Manager signs up later, but with different company:  So let's say that a property manager signs up later on, but instead of trying to get added to the existing company, they end up accidentally creating their own company.  So now we have "XYZ Management" and "XYZ Management, LLC". 

##### Employer Premium Profiles

Glassdoor has the following features for all of their employer accounts:

- Update basic company information
- Respond to reviews
- See who's viewing your profile

And includes the following with their premium employer accounts, with options concerning advertising on other job board employer's profiles removed, as well as analytics that are available to all accounts on CA job board:

- Promote your employer brand with customized content
- Attract candidates with branded content on your job posts
- Showcase your culture with a featured review and interview
- Attract candidates with targeted job advertising
- Personalize your profile and sponsored jobs for up to 4 audiences
- Get quarterly industry benchmarking reports
- Analyze your interview feedback over time

Significant is the "targeted job advertising", this would be PPC advertising via Google adwords or social media controlled by the system. See PPC module.

Features of a premium profile from the spec:

- Way to upload videos for employee testimonials, videos about how great it is to work at the company, etc.
- Pictures (basic profile includes also, but limited
)
- Awards received by the company
- Templates for different look - custom color scheme
- External URL - site using custom URL that employers can share as their online home for careers.