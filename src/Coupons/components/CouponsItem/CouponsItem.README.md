From Job Spec Sheet:

> **Coupon options.  Options for each coupon:**
>
> **a. Name of coupon**
> **b. Number of uses per member**
> **c. Discount**
> **d. Items the coupon can be applied to**
> **e. Description**
> **f. Published yes/no**

Would be nice to keep the Voucherify API in mind in designing our coupon API, so the back-end coupon engine can be swapped out

AwoCoupon has these features:

- Product(s) specific discounts
- Customer(s) specific discounts
- The ability to only trigger coupons if a minimum cart total is reached
- Ability to set expiration dates for coupons
- Restrict the number of times a coupon can be used by any given user
- Easy management of all coupons
- Gift Certificate style coupons

Fields on coupons for AwoCoupon:

Coupon Code enter a unique coupon code of up to 32 characters 

**Published** Options 
Published: active coupon 
Unpublished: inactive coupon 

**Function Type** Options 
**Coupon:** used as a normal coupon. If number of uses is set to 2, then all users can use the coupon a total of 2 times each. 
**Gift Certificate:** used as a gift certificate. If number of uses is set to 2, then the coupon can be used for a total of 2 times, no matter who uses it. 

**Number of uses** Number: the number of times a coupon/gift certificate can be used. This number is dependent on the function type. If set to 0 or is left blank (only valid for function type of coupon), there is no limit. 

**Percent or Total** Options 
**Percent:** coupon takes a percent of value 
**Total:** coupon is an actual figure that is subtracted from total 

**Discount Type** Options 
This option can only be used if a product is selected AND the Percent or Total field is selected as a Percent. Otherwise it defaults to "Overall":

**Overall:** The discount is calculated as a percentage of the overall total in the shopping cart 

**Specific:** The discount is calculated as a percentage of the total of the products configured in the coupon that are in the shopping cart 

**Value Number:** this is the value of the coupon and is dependent on the Percent or Total field to determine how it is calculated 

**Minimum Value Number:** this is the minimum value of the shopping cart before this coupon can take effect. If set to 0 or is left blank, then there is no minimum value 

**Expiration Date:** the date the coupon expires. If left blank, then it never expires. 

**Customers** A multiple select box of all your Virtuemart customers. Selection of customers will activate the coupon only for those customers. 

**Products** A multiple select box of all your Virtuemart products. Selection of products will limit the activation of the coupon to those specific products. 

------

Send single-use codes for individual offers. If your code needs to stay in its channel, use a single-use code or a link-based code that activates an offer in the shopping cart, and limit the duration. This will mitigate the problem of a code appearing on an unintended coupon site.

Use landing pages for offline partners. Printed coupons are long-term by nature, and their inability to be canceled can cause problems. Rather than run a code in a magazine or other print medium, direct readers to a landing page that engages a link-based offer. Not only will this approach save money, but it will also ensure the publication’s ROI is being measured actively and accurately.

 Create and optimize a coupon code landing page on your site. Understandably, merchants are often bothered when searches for their coupons and brand lead to a coupon site rather than to their own. Correct this by creating a landing page on your company website that features coupon codes with a URL structure that looks like this: www.site.com/coupon-promo-code.

 Next, optimize your landing page and keep it fresh with content — chances are it will rank high and bring more users to your site. As evidenced by the below graphic, landing pages can also deliver 12 times more leads, making this a great approach for attracting and converting customers. 

Voucherify can create separate coupon campaigns for each partner/marketing channel. In this way, if something good or bad happens to one of the promotions, you’ll be able to figure out the attribution right away. If you need more deals for the same partner, you can create a campaign for each deal and still group them by partner with categories. What you get is a greater level of granularity while still having a clear-cut view on individual partners. Because each campaign can have different parameters, including discount type, expiration date, or number of possible redemptions, you can launch completely isolated experiments with each of your vendors.

Mapping different marketing channels with separate campaigns is an excellent first step towards building your monitoring infrastructure. Once you know which coupon campaign belongs to which partner/deal, you can closely observe the number of redemptions and ultimately calculate ROI.

Dashboard - operating on a selected timeframe and showing you several useful charts including total number of redemptions or a list of the most recent redemptions with their status. A nice quick way to get a bird’s eye overview of your deals.

Coupon browser -  a powerful viewer to inspect each and every coupon campaign’s performance. Thanks to extensive filtering capabilities you can list and sort coupons by:

- Discount type,
- Category,
- Activity status,
- Start date,
- Number of redemptions.

This view also gives you the ability to manage the lifecycle of the coupon, e.g. you can see the details of every coupon code, edit its details, or even disable and delete it at any point in time.

**Views:**

![coupon1](../../../../public/images/coupon1.png)



![coupon2](../../../../public/images/coupon2.png)

Coupon compliance monitoring view:

![coupon3](../../../../public/images/coupon3.png)

Failed redemptions monitoring - this section not only groups the failed redemptions, but it also shows the reason for the failure. Imagine that you’re seeing a ‘failed because the coupon has expired’ message time after time. In this case, we may suspect that one of your partners hasn’t updated your deal. What’s more, you can prevent such a situation by allowing your partner to list the up-to-date collection of coupons you want to share with them. 

Redemption limit - you can cap the redemption number when creating a campaign. In this way, you ensure that the promotion won’t kill your stock. You can also use it to increase user engagement by running promotions similar to: “$20 off for the first 200 shoppers with the code ACME2017”.
Real-time deactivation - Finally, in cases of fraud, you can disable a particular coupon (or the whole campaign of unique codes), so the customers won’t be able to get any discount when trying to redeem it.

And the good thing is, due to having separate campaigns, you can apply different levels of precaution for different channels.

Coupon code pattern issues. Voucherify gives you the ability to precisely define the code pattern. It helps your team track and manage codes when the campaign is live. You can customize:

prefix, suffix, charset, random part - # - is replaced by random char (eg. +00-###-##-## -> +00-rGT-39-gb).

Performance monitoring:

Voucherify makes this really straightforward; the dashboard will show the redemption numbers of all campaigns so you can compare them at a glance. By doing so, you’ll easily figure out the key parameters of your successful campaigns and you’ll be able to fine-tune new campaigns so that they get better and better, generating more traffic down the road. 

![coupon4](../../../../public/images/coupon4.png)

In case of any unexpected issues, you can activate and deactivate the whole campaign or even a single code at any point in time. Imagine that your campaign is so successful that your stock can’t keep up with the demand. Or, you’ve noticed that one of the codes is either being misused or has been lost by the customer. You can quickly track it down and disable it in the Voucherify admin interface.

![coupon5](../../../../public/images/coupon5.png)

Another valuable feature is the detailed redemption tracking, not only does it list all the valid redemptions within a given timeframe, it also shows all the failed ones. Hence, you can catch them immediately and fix the issue before a customer complaint appears in the system.

![coupon6](../../../../public/images/coupon6.png)

Distribution for coupons:  CSV/Excel export, Mailchimp (using merge tags), email/SMS, dynamic codes (publish a coupon in a site ad and mark the coupon code as used).

Distribution targeting. If you want to achieve higher granularity for your voucher campaigns, you should use discount rules. This feature makes it possible to trigger different coupon offers based on predetermined buying scenarios. Several purchase dimensions are taken into account:

- Customer segment - once you activate customer tracking, you can make your offer valid only to a certain segment
- Product items - improve your sales efforts by pushing out coupons related to a specific product or a variant
- Cart volume - this parameter gives you the ability to create discounts based on the number of items ordered or the total amount in the cart

![coupon7](../../../../public/images/coupon7.png)

Vauchar works like this:

Creating the campaign involves several steps. It generally involves the following:

- Selecting the third party email provider from where you are sending the emails to your customers. See a few pages down for more distribution channel options.
- Selecting the list available under your email provider to whom you will be sending the email.
- Entering the details of the discount vouchers which will be created for this campaigns.

After the campaign is created, a Campaign Link is generated for every campaign which looks something like:

```
http://vauchar.com/redeem/campaigns/cam-150460828759ae801fa65d0/mailchimp?email=*|EMAIL|*&unique_id=*|UNIQID|*
```

You need to insert this Campaign Link while creating the emails on third party email provider.

Now, when the link is clicked on the email by your customers, they will be redirected to a landing page on our system where the discount code will be generated on the fly and will be shown to the customers.

![coupon8](../../../../public/images/coupon8.png)

Issues concerning the box to enter the promo code. One problem is that people will abandon shopping carts to go look for codes from affiliates. When they use those codes, affiliates get commissions they didn’t earn.

Don’t make the entry area a box, but a button:

![coupon9](../../../../public/images/coupon9.png)

Use targeted selling rules. Suppress the coupon entry field for visitors unless they have arrived via an affiliate link or email campaign. These visitors are identified by a URL parameter which is stored in the shopper’s session. At checkout page, the parameter is looked up and the discount is either auto-applied or the entry field appears for the customer to fill in.

Issue private promo codes. Private promo codes are sent only to select individuals rather than shared with affiliates, social networks or posted on coupon sites. They are associated with an email address or account profile and may be single-use or ongoing. Since they can’t be shared, there’s no risk in showing the box in checkout – there will be no offers to pinch off coupon sites. You could also selectively show the option based on saving info about what coupons a user has in the system.

Macy’s uses a “Find One Now” option that takes you to a list of all current promos, instead of people going off-site:

![coupon10](../../../../public/images/coupon10.png)



![coupon11](../../../../public/images/coupon11.png)

Another Voucherify screen:

![coupon12](../../../../public/images/coupon12.png)

Advice on creating coupon codes for individual targeting (bulk unique as opposed to public fixed code coupons):

- **Don’t make it too long** - Usually, an 8-12 chars string should be un-guessable and unique enough.
- **Avoid ambiguous characters** - It’s difficult to see the difference between O and 0 in the random string. I (upper case i) and l (lower case L) is even more tricky. We all recall the feelings when forced to try different combinations over and over again. So, you’d better prevent this before it hits your customer service team. Just exclude them from the charset. 
- **Cut the code into a few small parts**, e.g. ABCD-1234-XYZ - It’s a subtle change but it simplifies typing at the checkout view. This adds up to the overall buying experience and customer satisfaction.
- **Prefix and Suffix** - To handle different campaigns separately and to help further data crunching, it’s reasonable to extend your codes with a proper prefix or suffix from the first campaign. For example: XMAS-ABCD-1234. 

Voucherify supports 3 types of discounts: 

- Amount (e.g. $10 off)
- Percentage (e.g. 20% off)
- Unit (e.g. 2 free piano classes).

One of the most common tricks to push customers to redeem is to put a limit on your coupon code. With Voucherify, you can achieve this in 2 ways:

- Limiting the number of redemptions
- Setting the expiry date

You can seamlessly introduce another factor to your coupon experiments and incentivize customers with promotions like “Today only!” or “Get one before September ends!”.

![coupon13](../../../../public/images/coupon13.png)

Generate bulk unique coupons with Voucherify:

![coupon14](../../../../public/images/coupon14.png)

Then exporting them:

![coupon15](../../../../public/images/coupon15.png)

Distribution channel options:

- Export to CSV
- Distribute with MailChimp (using Merge Tags feature)
- Send emails or SMS
- Use Intercom as a distribution channel
- Dynamic publish

You can customize the coupon distribution on 2 levels:

- **channel** – one of the above channel options
- **trigger** - you can distribute coupons manually or define when Voucherify should automatically trigger a send out

These levels can be mixed, so you do both:

- a manual send out of emails,
- or activate the following scenario: every time a customer joins one of your MailChimp lists, take a unique code from a campaign and assign it to him through a merge tag.

Every time you deliver the coupon code Voucherify marks this information in the system. In this way you know:

- To whom the code was delivered
- when it was pushed out
- through which channel

Metrics in Voucherify:

![coupon16](../../../../public/images/coupon16.png)



![coupon17](../../../../public/images/coupon17.png)

Voucherify imports customers pro grammatically or via CSV file. You can create “segments” of the customers to use to feed into a coupon campaign, filtering by any criteria like join day (new sign-ups, loyal customers), geo-location, or anything else:

![coupon18](../../../../public/images/coupon18.png)

The customer edit screen to create segments:

![coupon19](../../../../public/images/coupon19.png)

Works by “adding a validation rule” in the “Vouchers” creation screen.

![coupon20](../../../../public/images/coupon20.png)



![coupon21](../../../../public/images/coupon21.png)

You can also add other validation rules, like minimum cart size to give discounts on minimum orders:

![coupon22](../../../../public/images/coupon22.png)

Voucherify also lets you do product-specific campaigns. Probably have to build the validation logic into the app to make sure the product from the Voucherify coupon is the same as what someone’s trying to buy.

![coupon23](../../../../public/images/coupon23.png)

These are screen grabs from a Joomla coupon extension:

![coupon24](../../../../public/images/coupon24.png)



![coupon25](../../../../public/images/coupon25.png)



![coupon26](../../../../public/images/coupon26.png)



![coupon27](../../../../public/images/coupon27.png)



![coupon28](../../../../public/images/coupon28.png)



![coupon29](../../../../public/images/coupon29.png)



![coupon30](../../../../public/images/coupon30.png)

