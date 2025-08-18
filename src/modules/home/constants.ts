export const PROJECT_TEMPLATES = [
  {
    emoji: "🎬",
    title: "Build a Netflix clone",
    prompt:
      "Create a modern, dark-mode UI for a Netflix-style homepage. The layout should include: 1. A full-width hero section with a gradient overlay. 2. A navigation bar at the top with a logo and user controls. 3. Horizontal scrolling sections of movie/show cards. The cards should be responsive and use the Shadcn Card component. 4. Implement a modal using Shadcn Dialog for displaying details when a card is clicked. Use local state to manage mock data and dark mode throughout the app.",
  },
  {
    emoji: "📦",
    title: "Build an admin dashboard",
    prompt:
      "Build a professional kanban board. The UI must feature three columns: 'To-Do', 'In Progress', and 'Completed'. Implement drag-and-drop functionality for tasks between columns using react-beautiful-dnd. Each task should be a Shadcn Card component. Include controls to add new tasks and delete existing ones, managing all state locally. The design should prioritize clean, consistent spacing, and include subtle hover effects on tasks and columns.",
  },
  {
    emoji: "📋",
    title: "Build a kanban board",
    prompt:
      "Build a kanban board with drag-and-drop using react-beautiful-dnd and support for adding and removing tasks with local state. Use consistent spacing, column widths, and hover effects for a polished UI.",
  },
  {
    emoji: "🗂️",
    title: "Build a file manager",
    prompt:
      "Build a file manager with folder list, file grid, and options to rename or delete items using mock data and local state. Focus on spacing, clear icons, and visual distinction between folders and files.",
  },
  {
    emoji: "📺",
    title: "Build a YouTube clone",
    prompt:
      "Build a YouTube-style homepage with mock video thumbnails, a category sidebar, and a modal preview with title and description using local state. Ensure clean alignment and a well-organized grid layout.",
  },
  {
    emoji: "🛍️",
    title: "Build a store page",
    prompt:
      "Build a store page with category filters, a product grid, and local cart logic to add and remove items. Focus on clear typography, spacing, and button states for a great e-commerce UI.",
  },
  {
    emoji: "🏡",
    title: "Build an Airbnb clone",
    prompt:
      "Build an Airbnb-style listings grid with mock data, filter sidebar, and a modal with property details using local state. Use card spacing, soft shadows, and clean layout for a welcoming design.",
  },
  {
    emoji: "🎵",
    title: "Build a Spotify clone",
    prompt:
      "Build a Spotify-style music player with a sidebar for playlists, a main area for song details, and playback controls. Use local state for managing playback and song selection. Prioritize layout balance and intuitive control placement for a smooth user experience. Use dark mode.",
  },
] as const;
