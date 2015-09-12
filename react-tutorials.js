

var HelloWorld = React.createClass({

    getDefaultProps:function(){
        return {
            initialTxt: "Nadda Supplied, 0, zilch, etc."
        }
    },
    update:function(){

        this.setState({

        });
    }
    getInitialState: function(){
        return {
            txt: this.props.initialTxt
        };
    },
    render:function(){
        var txt = this.state.txt;
        return(
        <div>
            <h1>{txt}</h1>
            <h2>{txt}</h2>
            <h3>{txt}</h3>
            <h4>{txt}</h4>
            <h5>{txt}</h5>
            <h6>{txt}</h6>
            <p>{txt}</p>
        </div>
        )
    },
});

React.render(<HelloWorld initialTxt="Initial text no hello world yet"/>, document.body);
