# Double Pi-hole dashboard

**English** | [Dansk](README.DA.md)

A lightweight dashboard for managing two, three or four Pi-hole v6 instances from one
interface. The solution consists of a single self-contained `index.html` with
no backend, database or build process. The browser communicates directly with
the active Pi-hole instances' REST APIs through an nginx reverse proxy.

The dashboard includes:

- Combined statistics and charts
- A combined query log with filtering and sorting
- Management of allowed and blocked domains
- Local DNS records with differences between the instances clearly shown
- Known clients and suggestions for unknown devices
- Adlist management
- Gravity updates on each instance, including the time of the last update
- Actions that can be applied to one or all active instances
- Danish, English, Norwegian Bokmål and Nynorsk user interfaces

The Pi-hole instances remain independent DNS servers. This project does not
provide failover, a virtual IP address, a primary or secondary server, or
automatic background replication. Its purpose is to make it easy to maintain
the relevant settings consistently from a single dashboard.

![Pi-hole dashboard](images/dashboard.png)

## Lightweight by design

The dashboard is deliberately simple:

- One HTML file containing HTML, CSS and JavaScript
- No backend
- No database
- No build process
- No Node.js, PHP or Python
- Server count and default names shared across browsers are configured in the HTML file; custom names and interface preferences are stored locally in the browser
- Direct communication with the Pi-hole v6 APIs through nginx

Chart.js is loaded as a separate local file and is only used for charts.

## Requirements

- Two to four Pi-hole **v6** instances with the REST API. The dashboard does not work
  with the old Pi-hole v5 PHP API.
- nginx or a similar reverse proxy in front of the dashboard. Requests to
  `/api1/...` and `/api2/...`, plus `/api3/...` and `/api4/...` when used,
  must be forwarded to their corresponding Pi-hole instances. This avoids CORS issues.
- An app password for each Pi-hole. Create it under **Settings → API** in each
  Pi-hole's own web interface.

### Installation with Docker

Download `compose.yml` and place it in an empty directory. Set the addresses and display names for your Pi-hole instances. Choose HTTP or HTTPS to match your setup and adjust the certificate verification settings.

Open a terminal in that directory and start the dashboard:

```bash
docker compose up -d
```

Docker automatically downloads the prebuilt image containing the dashboard, nginx and Chart.js. Then open `http://YOUR-SERVER-IP:8080`.

Update to the latest image with:

```bash
docker compose pull
docker compose up -d
```

See the [Docker project](https://github.com/tursoe/Dobbelt-Pi-hole-Docker) for additional settings and documentation.

## Setup with nginx

1. Copy `index.html` to the directory served by nginx, for example
   `/srv/web/pihole-dashboard/index.html`.
   Copy `language.js` to the same directory to enable German and other contributed languages.
2. Download Chart.js to the same directory:

   ```bash
   cd /srv/web/pihole-dashboard
   curl -o chart.umd.min.js https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js
   ```

3. Copy `nginx.conf.example` to your nginx configuration.
4. Adjust the domain, Pi-hole addresses, certificate paths and web root.
   Set `DEFAULT_SERVER_COUNT` in `index.html` to `2`, `3` or `4`.
   The nginx example enables `/api1/` and `/api2/` by default. Uncomment and
   adjust the `/api3/` block for three instances. For four instances, enable
   and adjust both `/api3/` and `/api4/`.
5. Test and reload nginx:

   ```bash
   nginx -t && systemctl reload nginx
   ```

6. Open the dashboard URL and log in to each active Pi-hole instance with its
   app password.

## Server count and names

The number of active Pi-hole instances is set **only in `index.html`**:

```js
const DEFAULT_SERVER_COUNT = 2; // 2, 3 eller 4
```

The first two, three or four entries in `DEFAULT_SERVERS` are used. The API
paths are `/api1`, `/api2`, `/api3` and `/api4`; configure nginx with a proxy
for each active instance. Actual host names or IP addresses belong in nginx,
not in the browser settings.

Default display names shared across browsers are set using `label` in `DEFAULT_SERVERS`:

```js
const DEFAULT_SERVERS = [
    { id: "1", label: "Pi-hole 1", base: "/api1", color: "c-1", chip: "s1" },
    { id: "2", label: "Pi-hole 2", base: "/api2", color: "c-2", chip: "s2" },
    { id: "3", label: "Pi-hole 3", base: "/api3", color: "c-3", chip: "s3" },
    { id: "4", label: "Pi-hole 4", base: "/api4", color: "c-4", chip: "s4" },
];
```

Server colours are blue, yellow, purple and orange, respectively. The layout
adapts to the configured number and the screen width, up to a maximum page
width of 1900 px.

Names can also be changed under **Settings** for the active instances. These
names are saved in the browser's `localStorage` and override the file's default
names in that browser. The server count and API paths cannot be changed under
Settings. Changing the defaults in the file does not overwrite locally saved
names.

## Languages

The user interface is available in **English**, **Dansk**, **Norwegian Bokmål** and **Nynorsk**.
The language selector at the top of the dashboard changes the interface
immediately, including dialog text, dynamic messages, tables and charts.
Numbers, percentages, dates and times follow the selected language.

Roy-Magne Mo contributed the Norwegian Bokmål and Nynorsk translations,
based on commit `8e90275`. His name appears beside the language selector
when either Norwegian language is selected.

The initial language is selected in this order:

1. A supported language previously selected and saved in the browser's
   `localStorage`.
2. The first supported language in the browser's ordered language preferences.
   Regional variants such as `de-DE`, `de-AT`, `en-GB` and `da-DK` are supported.
3. English if no supported language is found.

Danish, English, Norwegian Bokmål and Nynorsk are built into `index.html`. The optional [language.js](language.js)
adds German and can register further contributed languages. Place it beside
`index.html` to enable them. If the file is missing or cannot be loaded, the
dashboard continues with the built-in languages. Unavailable languages are omitted
from the selector. An unavailable saved language falls back to a supported
browser language, then English.

Each language in `window.PIHOLE_LANGUAGES` supplies `label` (the language's native
name), `locale`, `author` and `messages`. Copy the complete English catalog from
`I18N.en` in `index.html`, translate the values and retain every key and named
parameter. Complete, valid contributions are added automatically. Incomplete
or invalid contributions are skipped. This file cannot replace the built-in languages. Update `index.html` and `language.js` together
when message keys change.

Use [language.template.js](language.template.js) as the template for a new language.
It contains every message key and instructions for translators. Catalogs use
`.one` for the language's singular category and `.other` for all remaining
numbers, including zero, two, few and many plural categories.

Translations use stable message keys and named parameters. Additional languages
need no backend, build process or extra dependencies. User-supplied values such
as domains, names and comments are never translated.

**Credits:** Daniel Dietz contributed the key-based localization engine and
German translation. This version builds on his work through commit `4a32733`.
His name is also shown beside the language selector when German is selected.
Other translators can be credited through the language's `author` field.

Setup instructions and nginx examples are available in Danish and English:

| Language | Documentation | nginx example |
| --- | --- | --- |
| English | [README.md](README.md) | [nginx.conf.example](nginx.conf.example) |
| Dansk | [README.DA.md](README.DA.md) | [nginx.conf.DA.example](nginx.conf.DA.example) |

## Security

- API and login requests reject HTTP redirects. Configure nginx to proxy directly to the final Pi-hole API URL, including the correct HTTP or HTTPS scheme.
- The dashboard is intended for personal use or for people you trust. Anyone
  who can log in receives administrative access to the connected Pi-hole
  instances.
- Login sessions are stored in the browser's `sessionStorage` and disappear
  when the tab is closed. Passwords are not stored.
- Untrusted values such as client names, domains and comments are escaped
  before being displayed.
- JavaScript is embedded directly in the HTML file. This limits how restrictive
  a Content Security Policy can be. See the comment in
  `nginx.conf.example`.
- When hosting the dashboard on a Synology NAS, a DSM access control profile
  can restrict access to selected IP addresses or local networks.

The dashboard should not be exposed directly to the internet without suitable
access control in front of it.

## Roadmap

- **v1.1.005:** Complete Danish and English interfaces and documentation
- **v1.2.006:** Support for two, three or four Pi-hole instances
- **v1.3.007:** Language engine rewritten to use message keys, with additional languages in language.js
- **v1.4.008:** Docker image and simplified installation
- **v1.4.010:** Added Norwegian Bokmål and Nynorsk and prepared update checking for Docker installations. Query log time ranges are now limited to 1, 6 and 24 hours.


The dashboard supports two to four active instances. Additional instances
require both the matching server count in `index.html` and a proxy route in nginx.

## Contributing

**Development language:** Source comments and fallback HTML text are maintained in Danish. Translation catalogs keep their respective languages. Existing function names, API fields and message keys are retained for compatibility.

Issues and pull requests are welcome. Contributions may include bug fixes,
suggestions and translations into additional languages. Keep message keys and
named parameters consistent across all language catalogs, and include
translations for static text, dynamic states and accessibility labels.

## License

Copyright © 2023–2026 Christian Kragh Jessen  
https://christiankragh.dk

The project was originally developed for Pi-hole v5 in 2023 and updated for
Pi-hole v6 in 2026.

The project is released under the MIT License and may be used, copied, modified
and redistributed in accordance with its terms. See `LICENSE`.

Chart.js is not included and must be downloaded separately as described in the
setup instructions. Chart.js is an independent third-party project with its
own license.
