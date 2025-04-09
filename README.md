React Lite Modal

A lightweight, accessible, and customizable modal package for React. This package provides a headless modal container with an overlay and focus-trapping behavior. It’s designed to be flexible, allowing integrators to control the modal content while ensuring full accessibility.

Features
• Lightweight: Minimal CSS and JavaScript for better performance.
• Overlay: Includes an overlay that can be customized by the integrator.
• Focus Trapping: Automatically traps focus inside the modal, ensuring that keyboard navigation remains within the modal content.
• Accessibility:
• ARIA roles: role="dialog" and aria-modal="true" for proper screen reader announcements.
• Focusable Element: Automatically focuses the first focusable element when the modal opens.
• Keyboard Navigation: Ensures users can navigate using the Tab and Shift+Tab keys to cycle through focusable elements inside the modal.
• Overlay Click to Close: Close the modal by clicking on the overlay (optional via configuration).

Installation

npm install react-lite-modal
yarn add react-lite-modal

Usage

WCAG Accessibility Compliance

This package follows WCAG 2.1 accessibility guidelines to ensure an inclusive experience for all users:
• Focus Management: Automatically traps the focus within the modal to prevent users from interacting with the background content. The first focusable element is automatically focused when the modal opens.
• Keyboard Navigation: Ensures that users can navigate through the modal content using the Tab and Shift+Tab keys.
• ARIA Roles:
• role="dialog": The modal is announced as a dialog by screen readers.
• aria-modal="true": Indicates that the modal is a modal window, preventing users from interacting with background content.
• aria-labelledby and aria-describedby: These attributes should be used to reference the modal’s title and description for screen reader users.
