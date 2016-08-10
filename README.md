# react-print
React Components for making print CSS templates cleaner and easier to manage

# Installation

```javascript
   npm install react-print
```

# Demo

After running npm-install or webpack, open index.html in the demo directory and hit Ctrl + P on Windows or CMD + P on Mac to open the Print Preview in Chrome to see how your changes will be applied.

# Usage

Create your own markup structure in explicitly named components (e.g., InvoicePrint). You can nest child components within these as well. If you already have all the data you need in a store, grab it in componentDidMount(). If you need to get different or extra data, make a call to the server and pass it in as props or as part of componentDidMount().