
# NoX Wiki

**Write privately. Publish deliberately. Share knowledge beautifully.**

NoX Wiki is a self-hosted Markdown knowledge base designed for creating, organizing, connecting, and publishing knowledge.

It combines a private writing workspace with a separate public documentation website, giving you control over what you write, what you publish, and when your readers see it.

Whether you're building technical documentation, a personal knowledge base, a fictional universe, or a collection of interconnected notes, NoX Wiki provides a structured home for your content.

**Self-hosted · Markdown-native · Git versioning · Connected knowledge · Open source**

---

## What is NoX Wiki?

Knowledge rarely exists in isolation.

One document leads to another. Concepts reference people, places, projects, or ideas. Over time, those connections become just as valuable as the documents themselves.

NoX Wiki is designed around that principle.

Rather than treating Markdown files as isolated pages, it turns them into a navigable, interconnected knowledge base that readers can explore through links, search, contextual navigation, and visual relationships.

Behind the public website is a dedicated writing workspace where you can create, edit, preview, organize, and publish content without exposing unfinished work.

The two experiences are intentionally separate:

| Public Wiki | Admin Workspace |
| --- | --- |
| Read published knowledge | Create and edit Markdown pages |
| Navigate folders and articles | Organize, rename, and move documents |
| Explore links and relationships | Preview changes before publishing |
| Search published content | Search drafts and published content |
| Browse a read-only website | Review Git history and compare revisions |
| Receive published updates | Publish individual pages or multiple changes |

**Your writing stays private until you decide to publish it.**

## Features

### A complete Markdown knowledge base

Build your documentation using ordinary Markdown files.

NoX Wiki automatically organizes files into a browsable structure, preserving your folders and document names.

Features include:

- Nested folders and unlimited levels of document organization.
- Automatic navigation generated from your Markdown directory.
- Clean, readable page URLs without `.md` extensions.
- A table of contents generated from article headings.
- Internal links between notes, sections, and documents.
- Support for local images and common Markdown formatting.
- Responsive layouts for desktop, tablet, and mobile.

You don't need to manually configure navigation whenever you create a new page. Documents become part of the knowledge base through their location in the directory.

The root `home.md` document serves as the wiki's home page.

### A dedicated writing workspace

NoX Wiki includes a separate administrative interface for managing your knowledge base.

From the workspace, you can:

- Create new Markdown documents.
- Edit existing pages.
- Switch between Markdown source and rendered preview.
- Save unfinished changes without publishing them.
- Rename and move documents.
- Delete pages while retaining their Git history.
- Review previous revisions.
- Compare changes between versions.

The editor uses the same Markdown rendering engine as the reader, allowing you to preview how your content will appear before publishing.

Changes are tracked automatically through Git when saved.

You can continue refining a document while visitors see its previously published version.

### Drafts and controlled publishing

NoX Wiki separates **saving** from **publishing**.

Saving a document creates a new working revision. Publishing makes a specific saved revision available to readers.

Pages have three publication states:

| Status | Meaning |
| --- | --- |
| **Draft** | The page exists in the workspace but has never been published. |
| **Published** | The currently saved version matches the public version. |
| **Unpublished changes** | The page has saved changes that have not yet been published. |

This allows you to develop content over time without exposing incomplete notes or experimental changes.

You can publish a single page or use **Server actions → Publish pending pages** to review and publish multiple saved changes together.

Batch publication creates one updated public snapshot. Drafts and unsaved editor changes are never included automatically.

Published pages remain available while you work on new versions.

### Connected notes and Wikilinks

Create connections between concepts using familiar Obsidian-style Wikilinks.

For example:

```markdown
The city of [[Tidebreak]] was built near the mountains.

Learn more about [[History/The First Age]].

The [[Stoneborn|People of Stone]] were among the first races.

See [[Magic#Origins]] for more details.
```

NoX Wiki understands these references and resolves them into navigable links.

Supported features include:

- `[[Page]]` links to other documents.
- `[[Page|Display text]]` for custom link labels.
- `[[Folder/Page]]` for explicit document paths.
- `[[Page#Heading]]` for links to specific sections.
- `[[#Heading]]` for references within the current page.

Renaming or moving a document preserves its identity and previously known addresses, helping existing references remain accessible.

Links to missing, ambiguous, or unpublished destinations are handled without exposing private pages to public readers.

### Interactive knowledge graph

Explore the relationships between your documents visually.

NoX Wiki includes an interactive local knowledge graph in the desktop reader sidebar.

The currently selected document appears at the center, surrounded by directly connected notes.

- See outgoing links and incoming backlinks.
- Discover which pages reference the current document.
- Click connected nodes to navigate between articles.
- Drag nodes to explore their relationships.
- Pan and zoom around the graph.
- Use zoom and fit controls to adjust the view.
- Inspect relationships associated with specific headings.

Node sizes reflect how many distinct notes link to them.

The graph focuses on the selected page and its immediate connections rather than attempting to display the entire knowledge base at once.

For accessibility and precise navigation, the **Links / Backlinks** section also provides a structured list of relationships.

In the Admin workspace, missing or unresolved links can be inspected to identify gaps in the knowledge base.

### Full-text search

Find information across your knowledge base without manually navigating its folders.

NoX Wiki includes built-in full-text search with:

- Case-insensitive and accent-insensitive matching.
- Multi-word queries.
- Relevance-ranked results.
- Matching text highlighted in search results.
- A quick-search panel displaying the most relevant pages.
- A dedicated results page for larger searches.
- Navigation directly to matching passages.
- Keyboard navigation and browser history support.

Search covers both document content and relevant note identities.

The public search only includes published documents, while the Admin workspace can also search saved drafts.

Search results update when content is saved or published.

No external search service is required.

### Git-powered version history

Every saved change becomes part of your wiki's Git history.

This provides a record of how documents evolve over time.

From the Admin workspace, you can:

- Browse a document's revision history.
- See when changes were made.
- View the original Markdown from previous revisions.
- Read rendered historical versions.
- Compare any two revisions.
- Inspect added, removed, and unchanged content.
- Access historical versions of deleted documents.

Page identity is preserved across moves and renames.

History is available in the private workspace and is not exposed through the public reader.

The current interface supports viewing and comparing historical revisions; restoring a revision directly from the UI is not yet included.

### NoX Sync integration

Bring existing knowledge from your Obsidian vaults into NoX Wiki through **NoX Sync**.

The Admin workspace includes a dedicated import workflow that connects to an existing NoX Sync backend.

From **Server actions → NoX Sync**, you can:

1. Enter your NoX Sync server URL and API key.
2. Connect to the backend and select a vault.
3. Browse available notes and folders.
4. Select individual notes or entire folders.
5. Review new, changed, unchanged, and conflicting content.
6. Confirm the import.

Referenced local images are included automatically when supported.

Imported documents preserve their Markdown and vault-relative paths, making it easier to bring existing collections into the wiki.

**Imported content remains private by default.**

Newly imported notes become drafts. Updates to previously published notes also remain unpublished until explicitly approved.

When local and remote versions differ, NoX Wiki lets you compare the content and choose whether to retain the local version or replace the draft.

The integration is read-only toward NoX Sync: it does not modify your original vault, automatically synchronize changes, or delete local pages when source notes disappear.

### Obsidian image support

NoX Wiki understands Obsidian-style image references.

For example:

```markdown
![[landscape.png]]

![[places/mountain.png]]

![[landscape.png|400]]

![[landscape.png|400x300]]
```

Images can be resolved from the wiki's `_images` directory.

When an image reference is missing or ambiguous, the Admin workspace provides a warning and supports selecting an existing image to repair the reference.

NoX Sync imports also support associated image assets, with imported image versions kept private until referenced by published content.

This helps maintain the relationship between your notes and their illustrations without requiring you to rewrite every image reference.

Image selection repairs references to files already on the server; it is not a general-purpose image uploader.

### Live publishing

Readers don't need to manually refresh the website whenever you publish new content.

NoX Wiki uses live server events to notify connected browsers about published changes.

When a new public snapshot becomes available, open reader sessions can refresh their content and navigation accordingly.

Only published changes are delivered.

Saved drafts remain invisible to public readers.

### Customizable appearance and branding

Make your knowledge base feel like your own.

NoX Wiki supports configuration for:

- Website name and branding.
- Custom logo.
- Interface language.
- URL prefix.
- Theme colors.
- Typography.

The theme system supports configurable colors and font stacks, with changes applied across the wiki, including the reader, Admin workspace, and relationship graph.

Custom light and dark palettes can be configured without modifying the application's components.

Localization is also supported through translation dictionaries, with English as the default fallback.

See the [Theme Configuration Guide](docs/theme-contract.md) for available options.

### Responsive reading experience

NoX Wiki is designed for reading and navigating long-form content across different screen sizes.

The reader provides a structured layout with document navigation, article content, and contextual tools.

On desktop, readers can browse folders, read an article, and explore its relationships or table of contents.

On smaller screens, navigation adapts into collapsible drawers, keeping the article itself as the primary focus.

The Admin workspace also adapts its editing and action panels for mobile and tablet use.

---

## How NoX Wiki works

NoX Wiki uses two separate applications that share the same document collection.

### Public Reader

The public-facing website is a read-only experience.

Visitors can:

- Browse published documents.
- Search available knowledge.
- Follow internal links and backlinks.
- Explore the relationship graph.
- Navigate article headings.
- Read updated content as it is published.

The Public Reader has no editing interface and does not expose administrative operations.

### Admin Workspace

The workspace is the private management environment.

It handles editing, Git versioning, publication, document management, and NoX Sync imports.

It can be started only when you need to work on your knowledge base, independently of the public website.

| Capability | Public Reader | Admin Workspace |
| --- | :---: | :---: |
| Read published pages | Yes | Yes |
| Navigate linked documents | Yes | Yes |
| Search content | Published | Drafts + Published |
| Explore relationships | Yes | Yes |
| Create and edit pages | — | Yes |
| Preview unpublished changes | — | Yes |
| Publish content | — | Yes |
| View Git history | — | Yes |
| Import from NoX Sync | — | Yes |

Both applications use the same Markdown collection, but the public service receives only a published snapshot.

This separation allows you to keep the public website running without keeping the editing workspace permanently active.

## Getting started

### Requirements

NoX Wiki supports self-hosted deployment using:

- Docker Engine or Docker Desktop
- Docker Compose
- A local filesystem for documents and application state

Alternatively, it can run directly using Node.js 24+ and Git.

### Installation with Docker

Clone the repository:

```bash
git clone https://github.com/mapherez/nox-wiki-codex.git
```

This downloads the project source without changing any running services.

Enter the repository directory:

```bash
cd nox-wiki-codex
```

Create the state directory:

```bash
mkdir -p state
```

This directory stores private workspace state, Git history, and publication metadata. Existing contents are preserved.

Start the Admin workspace:

```bash
docker compose -f compose-admin.yml up -d --build
```

This builds and starts the local Admin service using the repository's Compose configuration.

Then start the Public Reader:

```bash
docker compose -f compose.yml up -d --build
```

This builds and starts the separate read-only public service. It does not replace your document collection.

Open the applications:

| Application | Default address |
| --- | --- |
| **Public Reader** | <http://localhost:3000> |
| **Admin Workspace** | <http://localhost:3001> |

Both services bind to the host's loopback interface by default.

### Publish your first page

On initial startup, the Admin workspace imports existing Markdown files as drafts and creates their initial Git history.

To make the wiki available to readers:

1. Open the Admin workspace.
2. Select `home.md` from the navigation.
3. Review or edit its content.
4. Save any changes.
5. Select **Publish** from the page actions.

Your home page is now available through the Public Reader.

Continue by creating new pages or publishing the other documents in your collection.

Alternatively, use **Publish pending pages** to publish multiple saved drafts in one reviewed operation.

### Example document organization

NoX Wiki uses an ordinary Markdown directory:

```text
dist/
├── home.md
├── introduction.md
├── guides/
│   ├── getting-started.md
│   └── configuration.md
├── concepts/
│   ├── overview.md
│   └── architecture.md
└── assets/
    └── references.md
```

Folders become navigation groups, while Markdown files become pages.

For example:

`dist/guides/getting-started.md`

becomes a readable URL resembling:

`/wiki/guides/getting-started`

You can keep your existing folder structure or organize documents directly from the Admin workspace.

## Managing your wiki

### Creating and editing pages

Open the Admin workspace and use **Server actions → New page** to create a document.

Specify its Markdown path, write your content, and save it.

For an existing document, open its page actions and select **Edit**.

The editor offers two views:

- **Markdown** — Edit the original source.
- **Rendered** — Preview the result without saving or publishing.

When finished, save the document to create a Git revision.

Select **Publish** when you're ready for the public website to reflect that version.

### Organizing documents

The Admin workspace provides actions to rename, move, and delete documents.

Moving a page preserves its underlying identity and Git history.

Its published address only changes when the updated page is published.

Deleting a page requires confirmation and removes the active working and published page while retaining its historical revisions.

The root `home.md` is protected from ordinary move and delete actions.

### Publishing multiple changes

For larger documentation updates, open **Server actions → Publish pending pages**.

The workspace displays eligible new drafts and saved changes that have not yet been published.

Review the selection and confirm to update the public snapshot.

This makes it possible to prepare several related articles privately before publishing them together.

## Configuration and deployment

### Site settings

NoX Wiki uses `config/site.json` for website configuration.

A basic configuration looks like:

```json
{
  "locale": "en",
  "brand": {
    "name": "NoX Wiki",
    "logoUrl": null
  },
  "basePath": "",
  "gitAuthor": {
    "name": "NoX",
    "email": "wiki@localhost"
  },
  "maxPageBytes": 1048576,
  "publicationPollMs": 500
}
```

You can customize the brand name, logo, language, path prefix, and other supported settings.

Theme overrides can be added to the same configuration.

### Environment variables

The included [.env.example](.env.example) documents the available deployment settings.

| Variable | Default | Description |
| --- | --- | --- |
| `PUBLIC_PORT` | `3000` | Public Reader host port. |
| `ADMIN_PORT` | `3001` | Admin Workspace host port. |
| `CONTENT_DIR` | `./dist` | Markdown document directory. |
| `STATE_DIR` | `./state` | Private Git and workspace state. |
| `SITE_CONFIG_FILE` | `./config/site.json` | Website configuration file. |
| `NOX_WIKI_TAG` | `latest` | Image tag used by GHCR deployment Compose files. |

Both applications must use the same content directory and site configuration.

### Published Docker images

NoX Wiki has separate container images for its two applications:

| Service | Image |
| --- | --- |
| Public Reader | `ghcr.io/mapherez/nox-wiki-public` |
| Admin Workspace | `ghcr.io/mapherez/nox-wiki-admin` |

Prebuilt-image deployments use:

- [`compose.deploy.yml`](compose.deploy.yml)
- [`compose-admin.deploy.yml`](compose-admin.deploy.yml)

The standard Compose files build directly from the repository source.

Image publication is controlled through the project's GitHub Actions workflow. Deployment and updates are not automatic.

### Reverse proxy and public access

NoX Wiki can be exposed through an existing reverse proxy or Cloudflare Tunnel.

The intended configuration exposes only the **Public Reader**.

Keep the Admin workspace local and accessible only from a trusted environment.

When using Cloudflare Tunnel, route traffic to the public service and preserve any configured URL prefix.

Avoid caching dynamic HTML or API responses, and ensure that live update connections are not buffered.

NoX Wiki does not create or configure the tunnel automatically.

## Security and privacy

NoX Wiki separates public reading from private editing at the application and deployment levels.

**Public Reader**

- Read-only access to published content.
- No administrative editing routes.
- No access to private Git history or workspace state.
- Unpublished notes and imported private images remain inaccessible through the public publication interface.

**Admin Workspace**

- Access to source documents, Git history, and publication controls.
- Local-only network binding by default.
- Separate container network from the public service.
- Request origin validation and CSRF protection.
- Private storage for NoX Sync credentials.

**Important:** The Admin workspace currently does not provide user login or account-based authentication. Its security model depends on keeping it accessible only through trusted local access.

Do not expose the Admin port publicly without an appropriate independent authentication and access-control layer.

### Backups

Back up the following together:

- `dist/` — Markdown documents and associated content.
- `state/` — Git history, publication state, and private import metadata.
- Site configuration and any custom localization files.

Stop the Admin workspace before taking a consistent backup.

Preserving only the Markdown documents does not preserve the complete editing history or publication state.

## For developers

NoX Wiki is built with TypeScript, Svelte 5, Node.js, and Git.

Its architecture separates the Public Reader, Admin Workspace, document processing, and shared components.

| Component | Technology |
| --- | --- |
| Frontend | Svelte 5, TypeScript |
| Backend | Node.js, Express |
| Markdown rendering | markdown-it |
| Version history | Git |
| Knowledge graph | D3 |
| Search | Built-in in-memory indexing |
| Localization | i18next |
| Deployment | Docker Compose |
| Container architectures | Linux AMD64 and ARM64 |

### Embeddable reader

The Markdown reader is also available as a reusable Svelte component.

Applications using Svelte can integrate `CodexReader` with their own routing and navigation behavior.

This makes it possible to reuse NoX Wiki's reading experience in another compatible application rather than maintaining a separate Markdown renderer.

The reusable entrypoint is:

`apps/web/src/lib/reader/index.ts`

The integration currently exposes a Svelte component rather than a packaged framework-independent Web Component.

### Development

Install dependencies with `npm ci`, then use the repository's scripts for checking, testing, building, and starting the applications.

| Script | Purpose |
| --- | --- |
| `npm run check` | TypeScript and Svelte validation. |
| `npm test` | Automated tests. |
| `npm run build` | Build server, Public Reader, and Admin Workspace. |
| `npm start` | Start the public service. |
| `npm run admin` | Start the Admin workspace. |
| `npm run dev:ui` | Start the development UI server. |

Only one Admin process should manage a particular document and state directory at a time.

## Project scope

NoX Wiki focuses on personal and self-hosted knowledge publishing.

It is designed for individuals and projects that want direct ownership of their Markdown files, version history, and publishing infrastructure.

Some capabilities are intentionally outside its current scope, including:

- Multi-user accounts and role-based editorial permissions.
- Automatic bidirectional synchronization with NoX Sync.
- A complete global knowledge graph spanning every document simultaneously.
- One-click restoration of historical revisions from the Admin interface.
- General-purpose media uploads through the editor.
- Collaborative real-time editing between multiple authors.

The current experience emphasizes Markdown ownership, deliberate publishing, and structured exploration of interconnected knowledge.
