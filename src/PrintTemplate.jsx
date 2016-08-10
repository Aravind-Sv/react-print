var React = require('react');

export default class PrintTemplate extends React.Component {
    render() {
        return (
            <div id="react-print">{this.props.children}</div>
        )
    }
};