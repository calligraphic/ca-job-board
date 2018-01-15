## Connector Program

- Dashboard view for connectors - what points they have earned, access to connector funjctions like entering an email address of an applicant
- List view - "Leaderboard"
- List view detail
- Admin Edit view
- Admin Create view
- Management module for employers / recruiters to add private notes / ratings to Connector profiles.
- Modal to ask for referrals

All users automatically have a Connector profile. The system should create a Connector profile if a user accesses Connector functionality, and doesn't a profile created yet.

An "Employee Referrals" that seems similar to what our Connectors feature will be:

![connector1](../../../../public/images/connector1.png)



##### Goals

Following are some goals for connectors to reach for rewards:

- Enter email address of applicant.
- Attract inbound visit to the site from a Connector’s backlink, social, or email share.
- Connect someone who applies for a job
- Connect someone who is hired
- Get a new connector to sign up

##### Enabling a Connector Profile for a User

Users can opt-in to being a Connector similar to how you turn on a wiki or project for Github - a simple button to turn it on, and a help page explaining it. All users automatically have a Connector attached to their user profile, based on UID. Connectors should have a "do not contact" option for Connectors, either for everybody or for particular Employers / Recruiters. This could be set in their Connector profile, and enforced by the system messaging system.

##### Employer / Recruiter Notes and Log for Connectors

Employers and Recruiters can attach Connector notes to any user profiles, whether or not that user has opted in to the Connector tools. These notes need to restrict visibility to the person / organization that entered them, and anyone they give access to (like Recruiters).

Notes log should have a filtering option to show just contacts made to a Connector, so recruiters can moderate their approaches to connectors.

Employers and Recruiters need the ability to show a rating for Connectors, maybe in a list view of Connectors as a RBAC access controlled field (limiting visibility to just that employer or recruiter's notes).

##### Employer Bounty

This is a feature of the Awards system, but is controlled by the Connector Program. It should allow employers to set a bounty on a job posting, and then for the employer to be able to control which connectors can see the bounty and push a notification to those connectors. Available only for Premium jobs.

##### Admin Edit of Connector Profile

Admin can edit a connector profile that is visible to Employers and Recruiters before a Connector opt-ins to setting up their Connector profile, particularly with a checkbox for the types of jobs this Connector can match jobs for.

##### Social Media Tracking

> Whether it is someone who is recommending someone through the recruiter dashboard, or if it is on the front end connector using a social share button, we need to track future applicants.  For sharing jobs, make the social share buttons have additional parts to the URL that ties back to the Connector.  Kind of like how Amazon has a referral id, but the social share link would also have that sort of link if the job was being viewed by a connector.  That way, we can see which people come in from those links.

##### Leaderboard

The leaderboard could rank people based solely on defined goals, but could also rank based on subjective ratings. Following are ranking metrics for influencers in marketing:

- **Market reach** – the number of people an individual has the ability to connect with. 
- **Independence** – whether an influencer has a vested interest in promoting a particular point of view. 
- **Frequency of Impact** – the number of opportunities an individual has to influence buying decisions. 
- **Expertise** – how much of a subject matter expert is the influencer. 
- **Persuasiveness** – the degree of consequence in ignoring an influencer's advice. 
- **Thoroughness of role** – the extent to which influence is exerted across the decision lifecycle. 

##### Automatic Reach-Out

Should be able to automatically send them an email saying, "Do you happen to know anyone who would be interested in this job?". Connectors will need a way to opt out of this type of email.

Also, when Connectors create a job alert, it should ask them if they want to auto-post onto their social media accounts. This allows both true Connectors to push jobs to their networks, and a convenience function for regular job seekers (since every user has a Connector profile).

##### Modal for All Site Users

Configure frequency that each registered user sees modals. Configure frequency for anonymous users, based on IP address. Need to truncate table with cron so it doesn't grow out of control.

Track jobs that have pushed modals, only show once per job to each registered user and anonymous user based on IP.

Design of modal:

- Show employer photo, employer can configure whether to allow this.
- Personalize the message with first name if user is a member. Have different messages to cycle through (at least four) so it's not repetitious.
- Actions: "I don't know anyone" (left side button), "Job details" (middle button), "Share".

Share can push to social accounts (Facebook, Linkedin, Twitter, Instagram), or to email via an email text field to enter into (no body text for email). Need to allow tracking of shares for analytics. Tie share behavior into Awards and Connector Program.



