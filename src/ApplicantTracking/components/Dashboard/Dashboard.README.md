Application Tracking System General Features:

- **Outbound Functions:**
  - Job Listings (Career Portal)
  - Advertise Jobs
- **Inbound Functions:**
  - Candidate Sourcing
- **Core Functions:**
  - Candidate Management
- **Support Functions:**
  - Email & Scheduling
  - Team Collaboration
  - Reporting & Analytics


See **ScoreCards**, **Scheduling**, and **Candidates** for specific ATS functionality implementations.

##### Candidate Management Support Offerings

- Automated reference checking (breezy is using the scorecards per reference it looks like);
- Background checks (workable.com uses Checkr - SSN validity, address history, sex offender list, global watchlist, national criminal search, motor vehicle search;
- Electronic signatures for offers, maybe Digital Signature Standard (DSS);

##### Candidate Pipeline Configuration

See **Email PipelineNotifications**.

Should have configurable notifications triggered when candidate moves between stages (Sending out additional assessments and questionnaires, e-mails for automated Thank you or Disqualification emails, moving hires into employer's HRIS). Should also have a task manager function, be able to assign tasks to different users:

![candidate6](../../../../public/images/candidate6.png)

Workable.com's pipeline configuration screen for employers:

![candidate7](../../../../public/images/candidate7.png)

##### ATS Integration

Job Postings has spec concerning mass imports of job postings from ATS systems (XML). Should allow other integrations that are possible (candidate import, resume import, etc.). Sample list of major ATS systems to integrate with:

- jobvite (Monarch uses them)
- iCIMS  (Gables uses them)
- Greenhouse ATS
- Ceridian Dayforce (Steadfast uses them)
- Newton (Finlay & Main Street Renewal uses them)