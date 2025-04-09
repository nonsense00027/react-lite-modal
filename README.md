# React Lite Modal

A lightweight, accessible, and customizable modal package for React. This package provides a headless modal container with an overlay and focus-trapping behavior. It’s designed to be flexible, allowing integrators to control the modal content while ensuring full accessibility.

## Features

- Lightweight and minimalistic.
- Customizable overlay and content area.
- Focus trapping to ensure accessibility.
- Close modal on overlay click (optional).
- ARIA roles for screen reader accessibility.

## Installation

### npm
`npm install react-lite-modal`

### yarn
`yarn add react-lite-modal`

## How to Render the Modal

Our modal component requires a `div` with the `id="modal-root"` in your HTML. This is where the modal will be appended to the DOM. By rendering it outside the normal DOM flow, it helps ensure that the modal's overlay and content are displayed above other content without being affected by the parent component's z-index or overflow properties.

### Step 1: Add the Modal Root to `public/index.html`

In your `public/index.html` file, add the following `div` just inside the `<body>` tag:

```html
<body>
    <div id="root"></div>
    <div id="modal-root"></div>
</body>
```

## Usage

Here’s a basic example of how to use the modal component:

```tsx
import React, { useState } from 'react';
import { ModalOverlay } from 'react-lite-modal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      {isModalOpen && (
        <ModalOverlay
          closeOnOverlayClicked={true}
          isActive={isModalOpen}
          onClose={handleClose}
        >
          <div>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </ModalOverlay>
      )}
    </>
  );
};
```


## WCAG Accessibility Compliance

This package follows WCAG 2.1 accessibility guidelines to ensure an inclusive experience for all users:
- Focus Management: Automatically traps the focus within the modal to prevent users from interacting with the background content. The first focusable element is automatically focused when the modal opens.
- Keyboard Navigation: Ensures that users can navigate through the modal content using the Tab and Shift+Tab keys.
- ARIA Roles:
- role="dialog": The modal is announced as a dialog by screen readers.
- aria-modal="true": Indicates that the modal is a modal window, preventing users from interacting with background content.
- aria-labelledby and aria-describedby: These attributes should be used to reference the modal’s title and description for screen reader users.
- 
## Props

| Prop                    | Type                | Default Value | Description                                                   |
| ----------------------- | ------------------- | ------------- | ------------------------------------------------------------- |
| `isOpen`              | `boolean`           | `false`       | Controls whether the modal is open or closed.                 |
| `closeOnOverlayClicked` | `boolean`           | `true`        | Determines if the modal closes when the overlay is clicked.   |
| `onClose`               | `() => void`        | `undefined`   | Callback function to close the modal.                                   |

Note: props for HTML div element attributes are included
