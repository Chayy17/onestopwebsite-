# One Stop Property Solutions website

This is the website for One Stop Property Solutions: junk removal and property cleanouts in Deer Park, TX and the Houston area.

It's one simple web page. There's nothing to install and no server to run. GitHub hosts it for free with **GitHub Pages**.

## What's in this folder

| File / folder | What it is |
|---|---|
| `index.html` | The whole homepage. Most of your edits happen here. |
| `css/style.css` | Colors, fonts and layout. You usually won't need to touch this. |
| `js/main.js` | Small scripts for the ZIP box and the 4-step estimate booking form. You won't need to touch this. |
| `images/` | Logos, photos and icons. |

---

## Step 1: Find everything you need to replace

Every placeholder in `index.html` has a **TODO** note next to it. Open `index.html` and search for `TODO` (Ctrl+F on Windows, Cmd+F on Mac) to jump to each one.

### How to edit files on GitHub (no software needed)
1. Go to your repository on github.com.
2. Click the file (for example `index.html`).
3. Click the **pencil icon** (✏️ "Edit this file") in the top right.
4. Make your changes.
5. Click **Commit changes…**, then **Commit changes** again.

Your live site updates about 1 minute later.

---

## Step 2: Put in your phone number and email

The phone number shows up in a lot of places (call buttons, text buttons, footer), so use **find and replace** to change them all at once.

**Easiest way:** on your repository page, press the **`.`** (period) key. GitHub opens a full editor in your browser. Open `index.html`, then press **Ctrl+H** (Windows) or **Cmd+Option+F** (Mac) to find and replace:

| Find this | Replace with | Example |
|---|---|---|
| `+12815550123` | Your number with +1 and no spaces or dashes | `+12815551234` |
| `(281) 555-0123` | Your number the way people read it | `(281) 555-1234` |
| `+1-281-555-0123` | Your number with dashes (used for Google) | `+1-281-555-1234` |
| `info@example.com` | Your email | `hello@onestoppropertysolutions.com` |

Click **Replace All** for each one. Then commit the change (the source control icon on the left side → type a short note → ✓ Commit & Push).

**Hours:** search for `Mon – Sat` in `index.html` to change the hours in the footer. Also search for `openingHoursSpecification` near the top and change the days, `"opens"` and `"closes"` times (24-hour time, so 7pm = `19:00`). That's what Google reads.

**Cities:** search for `SERVICE AREA` to edit the city list in the footer. Also update `areaServed` near the top of the file. That's what Google reads.

**ZIP codes:** when someone types a ZIP, the site says "Great news, we serve your area!" for any ZIP starting with `77` (the Houston area). Everyone can still send a request either way. To list only your exact ZIPs, open `js/main.js`, find `SERVICE_ZIPS = null` and change it to a list like `SERVICE_ZIPS = ['77536', '77502', '77571']`.

---

## Step 3: Swap in your own photos

All photos are in the `images` folder. The easiest way to swap a photo is to **upload a new photo with the exact same file name**. It replaces the placeholder automatically.

| File name | What it should be | Best size |
|---|---|---|
| `og-image.jpg` | The preview picture when someone shares your link on Facebook or by text | Exactly 1200 × 630 |

**The picture at the top of the page** is a drawing of a truck (`images/hero-illustration.svg`), so the site looks finished before you have photos. When you have a good photo of your truck or crew on a job:
1. Name it `hero.jpg` and upload it to the `images` folder (landscape, about 1200 × 900).
2. In `index.html`, search for `hero-illustration`. Right above it is a note with the exact line to paste in its place.

**On phones,** the truck drawing is hidden to keep the page short. They only show on computers and tablets. To show something on phones again, search `index.html` for `hide-on-phone` and delete that word from the element.

**How to upload:**
1. Open the `images` folder on GitHub.
2. Click **Add file → Upload files**.
3. Drag in your photos. **Rename them on your computer first** so they match the names above (like `og-image.jpg`).
4. Click **Commit changes**.

**Photo tips**
- Keep each photo under about **300 KB** so the site loads fast on phones. Before uploading, you can shrink photos for free at [squoosh.app](https://squoosh.app) or [tinypng.com](https://tinypng.com).
- Photos must be `.jpg` (not `.jpeg`, `.png` or `.heic`). If your phone saves `.heic` files, squoosh.app can convert them.
- When you add a photo to the page, give it a short description in its `alt="..."` text, like *"Garage in Pasadena TX after a full cleanout."* Google reads these descriptions, and they help visually impaired visitors.

---

## Step 4: Add your real reviews

The reviews section is **hidden** for now because it only has sample reviews. When you have real ones, follow these steps, then show the section by searching `index.html` for `id="reviews"` and deleting the word `hidden` at the end of that line.

1. In `index.html`, search for `REVIEWS`.
2. For each review card, replace the text between the `"quotes"` with a real customer review, and replace `Customer Name · Deer Park` with their first name (or first name + last initial) and city.
3. Delete the line `<span class="sample-tag">Sample review</span>` from each card.
4. Find the "Read More Reviews on Google" button and replace `https://www.google.com/maps` with your Google Business Profile review link.

⚠️ Only use real reviews from real customers, with their permission. Made-up reviews are against FTC rules and Google's policies.

---

## Step 5: Turn on the quote form (Formspree)

GitHub Pages can't send emails by itself, so the quote form uses a free service called **Formspree** to email you each request.

1. Go to [formspree.io](https://formspree.io) and create a free account (use the email where you want to get quote requests).
2. Click **+ New Form**, name it "Quote Requests," and click **Create Form**.
3. Formspree shows you an address like `https://formspree.io/f/abcdwxyz`. The ID is the part at the end (`abcdwxyz`).
4. In `index.html`, search for `YOUR_FORM_ID` and replace it with your ID. It should look like:
   `action="https://formspree.io/f/abcdwxyz"`
5. Commit the change, wait a minute, and send yourself a test request from the live site. Formspree may ask you to confirm the first one by email.

**About photos:** Formspree's **free plan doesn't accept file uploads**, so the form has no photo field. Instead, step 2 of the form has a "Text them to (832) 444-7217" link so customers can text photos.

Until you add your Formspree ID, the form shows visitors a message asking them to call or text instead, so nobody gets stuck.

---

## Step 6: Social media links

Search `index.html` for `YOUR-PAGE` and `YOUR-HANDLE` and replace them with your real Facebook, Instagram and TikTok links. They show up in two places: the footer icons and the `sameAs` list near the top. Update both.

If you don't use one of these platforms, delete that whole `<li>…</li>` line in the footer.

---

## Step 7: Turn on GitHub Pages (make the site live)

1. On your repository page on github.com, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, pick **main** and **/ (root)**, then click **Save**.
5. Wait 1–2 minutes and refresh. A box at the top shows your site's address, something like:
   **https://chayy17.github.io/onestopwebsite-/**

> Make sure all these files are on the **main** branch. If they're on a different branch, merge them into main first (or pick that branch in step 4).

### Your domain: onestopproperty.solutions
The site uses the custom domain **https://onestopproperty.solutions/**. The `CNAME` file in this folder tells GitHub Pages which domain to use. Don't delete it.

**DNS records** (set at the company where you bought the domain):

| Type | Name / Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `chayy17.github.io` |

Then in **Settings → Pages**, make sure **Custom domain** says `onestopproperty.solutions`, and check **Enforce HTTPS** once it's available.

---

## Your logo files

| File | Use it for |
|---|---|
| `images/logo.svg` | Main logo (black + orange on white). Website header, flyers, business cards, truck doors. |
| `images/logo-white.svg` | White version for dark backgrounds, like a dark-colored truck, shirts or photos. |
| `images/logo-square.svg` / `logo-square.png` | Square logo for your Facebook, Instagram, TikTok and Google profile pictures. Upload the **.png** to social sites. |
| `images/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | The little icon in the browser tab and on phone home screens. |

**For truck wraps, signs or printing:** send the printer `logo.svg`. SVG files can be enlarged to any size without getting blurry. The lettering is already built into the logo as shapes, so it prints exactly as designed on any printer.

**Brand colors** (to give your printer, sign shop or designer):
- Black: `#111111`
- Orange: `#F7801F`

---

## After you go live (free things that bring in more calls)

- **Google Business Profile:** set it up at [google.com/business](https://www.google.com/business) and add your website link. This is the #1 thing for showing up in "junk removal near me" searches.
- **Google Search Console:** add your site at [search.google.com/search-console](https://search.google.com/search-console) so Google indexes it faster.
- **Test your share preview:** paste your site link into the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to check how it looks in ads and posts.
- **Ask every happy customer for a Google review.** More reviews mean more calls.
