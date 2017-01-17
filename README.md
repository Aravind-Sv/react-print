# react-print
React Components for making print CSS templates cleaner and easier to manage

# Installation

```javascript
   npm install react-print
```

# Usage

Create your own markup structure in explicitly named components (e.g., InvoicePrint). You can nest child components within these as well. If you already have all the data you need in a store, grab it in componentDidMount(). If you need to get different or extra data, make a call to the server and pass it in as props or as part of componentDidMount().

# Example

```html
<div id="react-no-print"></div> <!-- stuff to hide on print -->
<div id="print-mount"></div> <!—react mount point for markup to show ON print-->
```
```javascript
PrintTemplate = React.createClass({
    render() {
       return (
           <div id="react-print">
                <h3>All markup for showing on print</h3>
                <p>Write all of your "HTML" (really JSX) that you want to show
                on print, in here</p>
                <p>If you need to show different data, you could grab that data 
                via AJAX on componentWill/DidMount or pass it in as props</p>
                <p>The CSS will hide the original content and show what is in your 
                Print Template.</p>
           </div>
       )
    }
});

React.render(React.createElement(PrintTemplate, {}), document.getElementById('print-mount'));
```
