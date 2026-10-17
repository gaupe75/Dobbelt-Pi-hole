/*
 * Dobbelt-Pi-hole language pack - TRANSLATION TEMPLATE
 * ====================================================
 * Thank you for translating! Send this file back when you are done.
 *
 * HOW TO TRANSLATE
 *  1. Change the code below ("xx") to your language code, e.g. "fr", "nl", "pl".
 *     Use 2-3 lowercase letters. "da" and "en" are built in and cannot be used.
 *  2. Set "label" to the name of your language IN that language (e.g. "Français").
 *  3. Set "locale" to a BCP 47 locale for number/date formats (e.g. "fr-FR", "nl-NL").
 *  4. Set "author" to the name you want shown next to the language selector.
 *  5. Replace every English text in "messages" with your translation.
 *     Only change the text on the right-hand side of each line. NEVER change a key.
 *
 * VALIDATION RULES (the page rejects a pack that breaks these rules)
 *  - All keys must be present, and no extra keys may be added.
 *  - Keep every {placeholder} exactly as written (e.g. {server}, {count}, {error}).
 *    You may move a placeholder within the sentence to fit your grammar.
 *  - No text may be empty.
 *
 * TRANSLATION GUIDELINES
 *  - Plural forms: keys ending in ".one" are used when Intl.PluralRules says "one",
 *    ".other" for every other number. Translate both. If your language has more
 *    plural forms, use the form that fits best for ".other".
 *  - Keep the text plain. Do not add HTML tags. Escape a quote as \" or use typographic quotes.
 *  - Keep the file as UTF-8.
 *
 * TO TEST: back up any existing language.js first. Save this file as language.js
 * next to index.html and reload the page. Restore your original file afterwards.
 * To keep several languages, combine their entries in the same language.js file.
 * Your language appears in the language selector if the pack is valid.
 *
 * Released under the project's MIT licence. See LICENSE.
 */
window.PIHOLE_LANGUAGES = window.PIHOLE_LANGUAGES || {};
window.PIHOLE_LANGUAGES["xx"] = {
  "label": "Language name in your language",
  "locale": "en-GB",
  "author": "Your name",
  "messages": {
    /* Page title and general */
    "app.title": "Dobbelt-Pi-hole v{version} · Dashboard",
    "app.description": "A combined dashboard for two, three or four Pi-hole v6 instances.",
    "app.headingSuffix": "· dashboard",
    "app.language": "Language",
    "app.themeToggle": "Switch between light and dark mode",

    /* Tabs */
    "tabs.dashboard": "Dashboard",
    "tabs.queries": "Queries",
    "tabs.domains": "Domains",
    "tabs.hosts": "Local DNS",
    "tabs.clients": "Clients",
    "tabs.lists": "Lists",
    "tabs.gravity": "Gravity",
    "tabs.settings": "Settings",

    /* Common texts */
    "common.loading": "Loading…",
    "common.never": "never",
    "common.error": "An error occurred: {error}",
    "common.serverError": "{server}: {error}",
    "common.both": "Both",
    "common.all": "All",

    /* Login and connection status */
    "auth.checking": "checking…",
    "auth.connected": "connected",
    "auth.notConnected": "not logged in",
    "auth.notConnectedOn": "Not logged in to {server}",
    "auth.login": "Log in",
    "auth.logout": "Log out",
    "auth.password": "Password / app password",
    "auth.passwordFor": "Password / app password for {server}",
    "auth.loginFailed": "Login failed",
    "auth.loggedIn": "Logged in to {server}",
    "auth.loggedOut": "Logged out of {server}",

    /* Pagination */
    "pagination.showing": "Showing {shown} of {total}",
    "pagination.previous": "‹ Previous",
    "pagination.next": "Next ›",
    "pagination.page": "Page {page} / {pages}",

    /* Dashboard */
    "dashboard.notLoggedIn": "Not logged in.",
    "dashboard.statusUnavailable": "Could not load status.",
    "dashboard.blockingEnabled": "blocking",
    "dashboard.blockingDisabled": "disabled",
    "dashboard.queriesToday.one": "query today",
    "dashboard.queriesToday.other": "queries today",
    "dashboard.blocked": "Blocked",
    "dashboard.blocklistDomains": "Domains on blocklist",
    "dashboard.clients": "Clients",
    "dashboard.clientsSummary.one": "{count} active / {total} total",
    "dashboard.clientsSummary.other": "{count} active / {total} total",
    "dashboard.gravityUpdated": "Last Gravity update",
    "dashboard.disableBlocking": "Disable blocking",
    "dashboard.enableBlocking": "Enable blocking",
    "dashboard.logout": "Log out",
    "dashboard.total": "COMBINED",
    "dashboard.totalQueriesToday.one": "query today (all active servers)",
    "dashboard.totalQueriesToday.other": "queries today (all active servers)",
    "dashboard.blockedTotal": "Total blocked",
    "dashboard.blockedPercent": "Blocked %",
    "dashboard.totalHint": "These figures are the sum of all active Pi-holes. Use the Gravity tab to update blocklists and the Queries tab for a combined log.",
    "dashboard.blockingEnabledToast": "{server}: blocking enabled",
    "dashboard.blockingDisabledToast": "{server}: blocking disabled",
    "dashboard.serverError": "{server}: {error}",
    "dashboard.noData": "No data.",
    "dashboard.details": "details",
    "dashboard.topAllowedDomains": "Top allowed domains",
    "dashboard.topBlockedDomains": "Top blocked domains",
    "dashboard.topClients": "Top clients",

    /* Charts */
    "charts.queryTypes": "Query types",
    "charts.libraryUnavailable": "The chart library (Chart.js) could not be loaded from the local file {chartFile}. Check that the file is in the same folder as {pageFile} on the server and that nginx can read it. The rest of the dashboard works normally.",
    "charts.queriesOverTime": "Queries over time",
    "charts.clientActivityOverTime": "Client activity over time",
    "charts.upstreamServers": "Upstream servers",
    "charts.blocked": "Blocked",
    "charts.cached": "Cached",
    "charts.forwarded": "Forwarded",
    "charts.other": "Other",
    "charts.otherClients.one": "Other client ({count})",
    "charts.otherClients.other": "Other clients ({count})",
    "charts.unknownUpstream": "unknown",

    /* Queries */
    "queries.timeRange": "Time range",
    "queries.rangeHours.one": "Last hour",
    "queries.rangeHours.other": "Last {count} hours",
    "queries.rangeDays.one": "Last day",
    "queries.rangeDays.other": "Last {count} days",
    "queries.domainClientFilter": "Filter domain/client",
    "queries.domainClientPlaceholder": "e.g. netflix.com or 192.168...",
    "queries.server": "Server",
    "queries.all": "All",
    "queries.client": "Client",
    "queries.allClients": "All clients",
    "queries.type": "Type",
    "queries.allTypes": "All types",
    "queries.pageSize": "Rows per page",
    "queries.reload": "Reload",
    "queries.loading": "Loading…",
    "queries.loginRequired": "Log in to at least one server to view queries.",
    "queries.empty": "No queries found for the selected time range and filters.",
    "queries.time": "Time",
    "queries.status": "Status",
    "queries.domain": "Domain",
    "queries.serverError": "{server}: {error}",
    "queries.loadingMore.one": "{count} query loaded quickly – loading the rest of the time range in the background…",
    "queries.loadingMore.other": "{count} queries loaded quickly – loading the rest of the time range in the background…",
    "queries.total.one": "{count} query in total for the selected time range.",
    "queries.total.other": "{count} queries in total for the selected time range.",
    "queries.truncated.one": "{count} query loaded for the selected time range – more queries may be available. Narrow the time range for complete results.",
    "queries.truncated.other": "{count} queries loaded for the selected time range – more queries may be available. Narrow the time range for complete results.",

    /* Domains */
    "domains.loading": "Loading…",
    "domains.domain": "Domain",
    "domains.type": "Type",
    "domains.kind": "Match type",
    "domains.comment": "Comment",
    "domains.missing": "missing",
    "domains.add": "Add",
    "domains.delete": "Delete",
    "domains.empty": "No domains have been added yet.",
    "domains.addTitle": "Add domain",
    "domains.domainOrRegex": "Domain (or regular expression)",
    "domains.domainPlaceholder": "e.g. ads.example.com",
    "domains.allow": "Allow",
    "domains.block": "Block",
    "domains.exact": "Exact",
    "domains.regex": "Regex",
    "domains.optional": "optional",
    "domains.addTo": "Add to",
    "domains.title": "Domain lists",
    "domains.reload": "Reload",
    "domains.loginRequired": "Log in to view domain lists.",
    "domains.active": "active",
    "domains.deactivate": "Disable",
    "domains.ruleBlock": "Block",
    "domains.ruleRegex": "Regex",
    "domains.notLoggedIn": "{server}: not logged in",
    "domains.added": "{server}: domain added",
    "domains.updated": "{server}: domain updated",
    "domains.confirmDelete": "Delete the domain \"{domain}\" from {servers}?",
    "domains.deleted": "Deleted from {servers}",
    "domains.disabled": "disabled",
    "domains.activate": "Enable",

    /* Local DNS */
    "hosts.addTitle": "Add local DNS record",
    "hosts.ipAddress": "IP address",
    "hosts.domainName": "Domain name",
    "hosts.hostnamePlaceholder": "nas.home",
    "hosts.addTo": "Add to",
    "hosts.add": "Add",
    "hosts.title": "Local DNS records",
    "hosts.reload": "Reload",
    "hosts.loading": "Loading…",
    "hosts.empty": "No local DNS records have been defined yet.",
    "hosts.active": "active",
    "hosts.missing": "missing",
    "hosts.delete": "Delete",
    "hosts.exampleIntro": "For example, for a device on your home network:",
    "hosts.exampleRecord": "192.168.1.50 nas.home",
    "hosts.loginRequired": "Log in to view local DNS records.",
    "hosts.nameHeading": "Domain name",
    "hosts.useSource": "Use {source} on {target}",
    "hosts.confirmReplace": "Replace the IP address for \"{name}\" on {target}?\n\n{oldIp} will be changed to {newIp} from {source}.",
    "hosts.updated": "{server}: DNS record updated to {ip}",
    "hosts.restoredAfterFailure": "{server}: the change failed and the original record was restored",
    "hosts.restoreFailed": "{server}: the change failed and the original record could not be restored",
    "hosts.confirmDelete": "Delete the DNS record \"{name}\" from {servers}?",
    "hosts.deleted": "Deleted from {servers}",
    "hosts.notLoggedIn": "{server}: not logged in",
    "hosts.promptIp": "IP address for {name} on {server}:",
    "hosts.added": "{server}: DNS record added",

    /* Clients */
    "clients.addTitle": "Add known client",
    "clients.identifierHelp": "IP address, IP range (CIDR), MAC address or hostname.",
    "clients.client": "Client",
    "clients.description": "Description",
    "clients.descriptionPlaceholder": "e.g. Living room TV",
    "clients.addTo": "Add to",
    "clients.add": "Add",
    "clients.title": "Clients",
    "clients.pageSize": "Show per page",
    "clients.all": "All",
    "clients.reload": "Reload",
    "clients.loading": "Loading…",
    "clients.unknownTitle": "Unknown devices on the network",
    "clients.unknownHelp": "Devices that have sent queries to Pi-hole but have not yet been added as clients. Give them a name and add them.",
    "clients.empty": "No clients have been added yet.",
    "clients.active": "active",
    "clients.missing": "missing",
    "clients.delete": "Delete",
    "clients.unknownEmpty": "No unknown devices — all devices known to Pi-hole have already been added as clients.",
    "clients.identifier": "Identifier",
    "clients.knownNames": "Known names",
    "clients.vendor": "Vendor",
    "clients.seenBy": "Seen by",
    "clients.name": "Name",
    "clients.clientHeading": "Client",
    "clients.descriptionHeading": "Description",
    "clients.notLoggedIn": "{server}: not logged in",
    "clients.added": "{server}: client added",
    "clients.confirmDelete": "Delete client {client} from {servers}?",
    "clients.deleted.one": "The client was deleted from {count} server",
    "clients.loginRequired": "Log in to view clients.",
    "clients.deleted.other": "The client was deleted from {count} servers",

    /* Lists */
    "lists.loading": "Loading…",
    "lists.url": "URL",
    "lists.type": "Type",
    "lists.comment": "Comment",
    "lists.missing": "missing",
    "lists.add": "Add",
    "lists.delete": "Delete",
    "lists.empty": "No lists have been added yet.",
    "lists.addTitle": "Add blocklist / allowlist",
    "lists.block": "Block",
    "lists.allow": "Allow",
    "lists.optional": "optional",
    "lists.addTo": "Add to",
    "lists.title": "Lists",
    "lists.reload": "Reload",
    "lists.loginRequired": "Log in to view lists.",
    "lists.active": "active",
    "lists.ruleAllow": "Allow",
    "lists.confirmDelete": "Delete the list \"{url}\" from {servers}?",
    "lists.deleted": "Deleted from {servers}",
    "lists.notLoggedIn": "{server}: not logged in",
    "lists.added": "{server}: list added",
    "lists.disabled": "disabled",

    /* Gravity */
    "gravity.title": "Gravity",
    "gravity.lastUpdate": "Last Gravity update",
    "gravity.loading": "Loading…",
    "gravity.notLoggedIn": "Not logged in.",
    "gravity.statusError": "Could not retrieve status.",
    "gravity.updateServer": "Update Gravity – {server}",
    "gravity.ready": "Ready.",
    "gravity.running": "Updating Gravity…",
    "gravity.done": "Done",
    "gravity.httpError": "Error: HTTP {status}",
    "gravity.error": "Error: {error}",

    /* Settings */
    "settings.helpSummary": "Setup – read this if you encounter \"CORS\" or \"Failed to fetch\" errors",
    "settings.proxyRequirement": "Each active Pi-hole requires its own proxy path on the same domain as the dashboard:",
    "settings.proxyExample": "nginx example (repeat for each active Pi-hole):",
    "settings.proxyConfiguration": "Change API paths in DEFAULT_SERVERS and the corresponding nginx configuration.",
    "settings.appPasswordTitle": "Use an app password instead of your regular password",
    "settings.appPasswordHelp": "In each Pi-hole admin interface, open Settings → API and create an app password. Enter it here instead of your regular password.",
    "settings.sessionsTitle": "Sessions",
    "settings.sessionsHelp": "The login session (SID) is stored only in the browser’s sessionStorage. It is removed when you close the tab. Passwords are never stored.",
    "settings.title": "Pi-hole",
    "settings.namesHelp": "Names are saved only in this browser. Set default names in DEFAULT_SERVERS in the file.",
    "settings.server": "Pi-hole {id}",
    "settings.label": "Label",
    "settings.save": "Save",
    "settings.saved": "Saved. Reloading status…",

    /* Domains */
    "domains.requestError": "{server}: {error}",

    /* Local DNS */
    "hosts.requestError": "{server}: {error}",

    /* Clients */
    "clients.requestError": "{server}: {error}",

    /* Lists */
    "lists.requestError": "{server}: {error}",

    /* Common texts */
    "common.networkError": "The connection to the Pi-hole API failed. Check the network and proxy configuration. HTTP redirects are not accepted.",
    "common.languageCredit": "Translation: {author}"
  }
};
