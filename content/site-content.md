# Site Content

This file is the single source of truth for the website content.
Edit the JSON inside each section, then commit and push to `main` to publish the update.

## site

```json
{
  "kicker": "Personal Academic Website",
  "footerName": "Congrong Pan",
  "footerLastUpdated": "March 2026",
  "navigation": [
    { "href": "/", "label": "Home" },
    { "href": "/research", "label": "Research" },
    { "href": "/resume", "label": "CV" }
  ]
}
```

## home

```json
{
  "title": "Congrong Pan",
  "subtitle": "Incoming PhD student in Emory Econ · IO and Health Economics",
  "profileImage": {
    "src": "/images/profile-avatar.png",
    "alt": "Avatar image for Congrong Pan"
  },
  "campusImage": {
    "src": "/images/emory-campus.webp",
    "alt": "Campus building at Emory University"
  },
  "hero": {
    "sectionTitle": "Research Interests",
    "body": "My research focuses on industrial organization and health economics. I study technological diffusion within hospitals, drug development, the effects of AI adoption in hospitals, interactions among physicians, and productivity within hospitals."
  },
  "ctaButtons": [
    { "href": "/research", "label": "View Research", "variant": "primary" },
    { "href": "/resume", "label": "View CV", "variant": "secondary" }
  ],
  "metaItems": [
    { "label": "Affiliation", "value": "Emory University" },
    { "label": "Email", "value": "pancrecon123@gmail.com" },
    { "label": "Status", "value": "Research Assistant" },
    { "label": "Location", "value": "Beijing" }
  ],
  "recentUpdatesTitle": "Recent Updates",
  "recentUpdates": [
    "May 2025 - Present: Research Assistant for Prof. Panle Barwick at UW-Madison.",
    "July 2025 - Present: Full-time Research Assistant for Prof. Cong Peng at NSD, Peking University."
  ],
  "recommendedLinks": {
    "sectionTitle": "Recommended Links",
    "groups": [
      {
        "title": "Institutions",
        "links": [
          {
            "label": "School of Economics, Shandong University",
            "href": "http://www.soe.sdu.edu.cn"
          },
          {
            "label": "Department of Economics, UW-Madison",
            "href": "https://econ.wisc.edu/"
          },
          {
            "label": "Department of Economics, Emory University",
            "href": "https://economics.emory.edu/"
          },
          {
            "label": "National School of Development, Peking University",
            "href": "https://en.nsd.pku.edu.cn/"
          }
        ]
      },
      {
        "title": "Researchers",
        "links": [
          {
            "label": "Cong Peng",
            "href": "https://www.congpeng.org"
          },
          {
            "label": "Panle Barwick",
            "href": "https://panlebarwick.github.io/index.html"
          },
          {
            "label": "Tianli Xia",
            "href": "https://simon.rochester.edu/faculty/tianli-xia"
          },
          {
            "label": "Hongyuan Xia",
            "href": "https://hongyuan-xia.github.io"
          },
          {
            "label": "Lutz Sager",
            "href": "https://faculty.essec.edu/en/cv/sager-lutz/"
          }
        ]
      }
    ]
  }
}
```

## research

```json
{
  "title": "Research / Papers",
  "subtitle": "Working Papers, Publications, and Ongoing Projects",
  "workingPapersTitle": "Working Papers",
  "papers": [
    {
      "title": "Gaming the Metric: Ratio-Based Surgery Targets and Hospital Behavior in China",
      "meta": "Working Paper · Solo Author",
      "summary": "This paper studies distortions in Chinese hospitals after a 2019 reform tied presidents' evaluations to the share of high-complexity surgeries. Using surgical records and a regression discontinuity design around a 2020 leadership transition, I find reductions in routine surgeries and increased Level-4 coding intensity."
    },
    {
      "title": "Can Credit Collections on Traffic Violations Save Lives? Evidence from Chinese Auto Insurance Market",
      "href": "https://www.dropbox.com/scl/fi/4u5oc5xnglbl7cyadyjul/Credit.pdf?rlkey=mxqnt2oi349s1ssl3rrebf0x0&st=9ekqtrg7&dl=0",
      "meta": "R&R (Resubmitted) in Regional Science and Urban Economics · with Ying Liu, Lihua Qin, Fangjie Zhang",
      "summary": "Using a quasi-experimental policy change and individual underwriting/claims data in the Chinese auto insurance market, we estimate the causal effect of credit-based traffic-violation sanctions on road safety. The policy significantly reduced fatalities and injuries."
    },
    {
      "title": "Can Air Pollution Affect Our Sentiments: Social Media Evidence from Japan",
      "href": "https://www.dropbox.com/scl/fi/ckhp4eq5tq1ufbrblibao/cesifo1_wp12030.pdf?rlkey=qvnazf0ih85r4eidet603jlux&st=07teihue&dl=0",
      "meta": "CESifo Working Paper No. 12030 · with Zehao Lin, Ying Liu, Lutz Sager",
      "summary": "This study identifies the impact of air pollution on sentiment using city-day panel data from Japanese cities and wind-based instruments for PM2.5/PM10. The findings show sizable declines in sentiment, especially for negative emotions such as anger, anxiety, and sadness."
    }
  ]
}
```

## resume

```json
{
  "title": "CV",
  "subtitle": "Education, Research Experience, and Skills",
  "educationTitle": "Education",
  "education": [
    {
      "time": "Starting 08/2026",
      "institution": "Emory University",
      "detail": "Ph.D. in Economics · Atlanta, GA, USA"
    },
    {
      "time": "01/2024 - 12/2024",
      "institution": "University of Wisconsin-Madison",
      "detail": "M.S. in Economics · Madison, WI, USA"
    },
    {
      "time": "09/2022 - 06/2026",
      "institution": "Shandong University",
      "detail": "M.S. in Economics · Jinan, China"
    },
    {
      "time": "09/2016 - 06/2020",
      "institution": "Shandong University of Finance and Economics",
      "detail": "B.A. in Economics · Jinan, China"
    }
  ],
  "fieldsTitle": "Fields of Interests",
  "fields": [
    "Industrial Organization",
    "Health Economics"
  ],
  "experienceTitle": "Research Experience",
  "experience": [
    "Research Assistant for Prof. Panle Barwick, University of Wisconsin-Madison (05/2025 - Present)",
    "Full-time Research Assistant, National School of Development, Peking University (07/2025 - Present)"
  ],
  "skillsTitle": "Other Skills",
  "skills": [
    "Languages: Mandarin Chinese (Native), English (Fluent)",
    "Programming: R, Python, Stata, ArcGIS, QGIS, LaTeX"
  ]
}
```
