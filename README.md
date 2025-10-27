## 🗻 Hiking Gallery

A beautiful hiking photo gallery built with Next.js 15, React 19, and Tailwind CSS, using Unsplash API for fetching stunning hiking photos.

Explore breathtaking landscapes, mountains, forests, and trails with a responsive and modern UI.

## ✨ Features

- **Home Page & Listing**
  - Display a gallery of hiking photos
  - Responsive design with Tailwind CSS
  - Fetch photos dynamically from Unsplash API

- **Photo Detail Modal**
  - Open photos in a modal using parallel routes (app/(home)/@modal/(.)photos/[id]/page.tsx).
  - Show additional photo info (description and photographer name).
  - Reserved space for images (width and height) prevents layout shift.

- **Dedicated Photo Pages**
  - Each photo has a dedicated page (/photos/[id]/page.tsx) for SEO and shareable links.
  - Dynamic metadata based on photo data (title, description, openGraph images).

- **Custom Fonts**
  - Primary font: Rubik (sans-serif rounded), monospace font: Geist Mono
  - font-display: swap for fast text rendering before fonts load.

- **Theme Toggle**
  - Light/Dark mode toggle (ThemeToggle component).
  - User selected theme stored in localStorage.

- **API Helpers**
  - fetchPhotos.ts for Unsplash API requests.

## 🛠️ Implementation Details

**Task Overview**

In this task, a set of images is fetched from the Unsplash API. The user can:

- Visit a page displaying a gallery of images sourced from Unsplash.
- Click any image to open a modal showing a larger version of that photo.
- Refresh the page or share its URL to view the image on a standalone page, outside of the modal.
- Tailwind CSS is used for styling and responsive layout.

**File Structure & Responsibilities**

`src/app/(home)/page.tsx`

This page displays a gallery of photos fetched from the API. Each photo links to its dedicated page where it can be viewed in a larger format.

`src/app/(home)/layout.tsx`

Layouts can accept slots, and in this case, our slot is used for modals.

Both `page.tsx` and `layout.tsx` are encapsulated within the (home) folder.
Modals are intended to appear only on the home page that lists the photos. To achieve this, we use route groups to isolate layouts and slots, enabling additional layouts without affecting other subdirectories.

`src/app/(home)/@modals/default.tsx`

When the layout initially loads, Next.js doesn’t yet have any slot state because no routes have been dynamically intercepted. In this case, it falls back to the `default.tsx` file located at the root of the slot directory.

Since we don’t want to render anything by default, this file simply returns null.

`src/app/(home)/@modals/(.)photos/[id]/page.tsx`

In this route, the modal appears over the home page. This page contains the modal, which should not be displayed on the individual photo’s dedicated page.

When navigating to an individual photo via `src/app/photos/[id]/page.tsx`, users continue their experience on the current page without the modal.

## 🏗️ Tech Stack

- Next.js 15

- React 19

- TypeScript

- Tailwind CSS 4

- Unsplash API

- Next Font Google for custom fonts

## ⚙️ Installation

1. Clone the repository:

```
git clone https://github.com/mohadese-sh/hiking-gallery-task.git
cd hiking-gallery

```

2. Install dependencies:

```
npm install
```

3. Add Unsplash API key:

   Create a .env file:

```
UNSPLASH_ACCESS_KEY= 'N75WUOk1_O5K7ifj2-U3c03IdL8oyyIDPV4eONMinI0'
UNSPLASH_SECRET_KEY= 'Y4BS9_BpJpHSo676CYQyNGDRQTUwhZBlqq1OKjGJXzI'
```

💡 Note:
If images fail to load or the Unsplash API returns an error, your network might be restricted from accessing Unsplash.
In that case, please use a VPN or proxy connection to enable access.

4. Run the development server:

```
npm run dev
```

The app will be available at http://localhost:3000

## 📁 Project Structure

```
/src
    /app
        /(home)
            /@modal
                /(.)photos
                    /[id]
                        page.tsx
            default.tsx
            loading.tsx
        error.tsx
        layout.tsx
        page.tsx

        /photos
            /[id]
                error.tsx
                loading.tsx
                page.tsx
        /fonts
        layout.tsx
        globals.css

    /components
        Modal
        PhotoDetail
        ThemeToggle

    /libraries
        fetchPhotos.ts

    /types
        IPhoto.ts
```

## 💡 Usage

- Visit the homepage and click Go to Gallery

- Browse hiking photos in Masonry grid

- Click a photo to open modal with photo details

- Enjoy responsive layout and smooth loading experience

First, run the development server:

## 💻 Scripts

```
pnpm run dev
pnpm run build
pnpm run start
pnpm run lint
pnpm run prettify
pnpm run lint-staged
pnpm run verify
```
