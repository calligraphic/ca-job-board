Display **custom fields**. Item view needs a **section organization**, so the custom fields know where to display.

Employer should be able to attach private notes and files to a job posting, and have visibility restricted to themselves. Also, need access control so employer can permit recruiters access to some or all information in the job posting, or access to create job postings under the employer's account

Specs mention need to have several configurable templates for the job posting list view - a "traditional list view" and an "image based" list view. Should have functionality to support various list detail views, with a configuration option in the admin section.

Should zoom into job seeker's area, by showing listings sorted by distance from the Job Seeker.

Spec mentions this, not sure how to implement:

> We should have two list layouts.  One is traditional list oriented.  The other would be image oriented, with the image pulled from either the department or the company.  

WP JobBoard shows date job was posted to the right of its line item. It also in the middle shows two lines, with Location on top and Part Time or Full Time below that. The left is just the job title and company name below it. It shows featured jobs by using a different background color for the whole rectangle the job sits in, and puts them at the top.

![jobPostingList1](../../../../public/images/jobPostingList1.png)

In the above job posting list view, hovering over the colored button (FULL TIME, etc.) changes it to “view job offer” in place of “FULL TIME”, etc., and an eye icon instead of the offer.

Qualified Job Seekers should see a "Quick Apply" link next to each job posting detail in the list view.

Needs to have a priority weighting, so admin or the "Premium" packages can boost a posting in the listing (affects search also).

Links on Item view:

- Apply
- Save Job
- Create alert button
- Share options
- Notes created by job seeker
- Similar jobs

Suggestion to use headlines for job listings, instead of a job title – something to grab reader in, like “Head Wrangler of Horse Operation”, instead of just farm worker or something.

Qualified Job Seekers should see a "Quick Apply" link in each job posting item view.

WPJobus uses a Bootstrap template similar to Jomsocial user profiles for each job listing. It has a banner graphic at top. Intro:

![jobListing1](../../../../public/images/jobListing1.png)

Has the following sections:

- Overview (image above)
- Qualifications
- Sallary & Benefits
- Job Application

Qualifications:

![jobListing2](../../../../public/images/jobListing2.png)

And the benefits section:

![jobListing3](../../../../public/images/jobListing3.png)

Could also have discounts, memberships, ping pong table, free meals, etc.

The botttom of the Jobus job listing detail page has “A Brief Overview of the Company which posted this job offer”

WP Job Board has following info on their job listing detail page, as well as an Apply Online button at the bottom:

1. Location
2. Date Posted
3. Category
4. Job Type
5. Description
6. Requirements
7. Education

Has the following listed in the Employer job posting create form:

Job Title, State, Looking For, Hours, Client Industry, Candidate Requirements, Computer, Client Tools, Immediate Tasks Needed, Win, How to Apply, BELAY Contact Information – email and logo, Listing Type (with buttons for FREE and $10, first is Visible 15 Days and the second Visible 30 Days and Featured)

Preview button at bottom of form.

See note in Job Seeker Panel, registered job seekers should get a "Save" button on Job Listing Item View so they can save the job to do something with later.

Nice job listing item view from another board:

![jobListing4](../../../../public/images/jobListing4.png)

Spec has this database schema:

1. Job ID
2. Company
3. Department
4. Job title
5. Location
6. Number of Views
7. Applications (linked to application list for that job)
8. If the job is using an external link for applications, then we will track the number of clicks of that outbound apply link, and count that as an application for this purpose.
9. Apply Type
10. This is a code that tells us if they are premium or standard, and if they used our app system or an external link.  
11. Status
12. Publish Date

**Departments**

Job Item and List views should control visibility by access control based on the user's assigned department, when accessing these views from an Employer Dashboard (and not the publicly-viewable job postings).

Job Postings are owned by Departments of an Employer Profile. The Subscriptions and Credits modules will track open slots to display job postings.

Viewing job postings from the Employer's panel should show which user created the job.

##### Job Listing Templates

Allow a way for employers to create standard templates for their job listings. This will allow companies to save a job as a template, so that they can use the same basic listing for all property manager positions, for example.

Could also include:

- custom section organization;
- standard fields that can be turned on and off for visibility;
- custom fields;
- choice of fonts.

Need to work on how the templating feature could be best implemented.

##### Premium Jobs

Premium jobs should be listed at the beginning of main list of jobs for X days.  (i.e., if user does not use a filter to narrow down jobs, it will show all jobs in the system - premium jobs will be at the top of this list for X days), and visually distinguished from standard jobs.

Specs mention custom pricing for different types of jobs. This might be best handled by having multiple premium job packets, and requiring certain premium packages for certain job categories. See Subscriptions and Credits.

**Sort by Employer Jobs View**

WP Job Board has Listings linked off of the Employer Panel:

![jobPostingEmployerList](../../../../public/images/jobPostingEmployerList.png)

Leftmost icon is number of applications in the system for that job, and an alert to new ones



*sort by Candidate Saved Jobs* (linked to from Job Seeker Panel -> "My Jobs")

> In jobboardmount.com, "Job seekers can save jobs for later viewing and application. Saved jobs are accessed via job seeker account."

![joblistsaved1](../../../../public/images/joblistsaved1.png)



![joblistsaved1](../../../../public/images/joblistsaved2.png)



##### Job Status

Possible job states:

- **Draft:** Job posting process was started, but not completed. A **copy** button will copy the job into a **Draft** status.
- **Awaiting Approval:**  Job is awaiting admin approval prior to going live.
- **Active:** Job is published and displaying on your site. Button to move job to **Active** status is either **Publish** (if the employer has existing credits) or **Payment** (if they do not have credits).
- **Expired:** Job has reached its expiration date and is no longer appearing on your site.
- **Unpublished:** Job has not yet expired, but has been unpublished.

##### Audio Job Posting Item

Premium feature for job listings. The idea is to provide a short interview with the person posting the job in order to get more information and give that job a “voice” The audio, which I host with Soundcloud, can then be embbedded into the job listing like this. Each Jobcast is about 3 minutes long. I will create the script, host the file and provide you with the iFrame code to embed. Your job board should allow for HTML access on its job description pages for this to work so be aware of that.

##### ![audio](../../../../public/images/audio.png)



##### Import (XML)

Employers should be able to import job listings from output from their internal ATS system.  From Spec:

1. Allow us to create a new job import source via XML, where we enter their feed into the system, then we map the fields
2. Jobs that are auto-imported need to be defined in the admin area for each job
3. Tie this into the paid system where employers can pay to have all their jobs constantly imported.

See Subscriptions for offers tailored to encourage mass imports.