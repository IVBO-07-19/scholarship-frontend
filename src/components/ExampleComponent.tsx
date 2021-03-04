import React from "react";

interface ExampleComponentProps {
    name: string,
    lastName: string,
    age: number
}
interface ExampleComponentState {
    number: number
    items: {id: number, body: string}[]
}


class ExampleComponent extends React.Component<ExampleComponentProps, ExampleComponentState> {
    constructor(props: ExampleComponentProps) {
        super(props);
        this.state = {
            number: 0,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(r => {
                r.json().then(data => {
                    this.setState({items: data})
                })
            });
    }

    // async componentDidMount() {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    //     const json = await response.json();
    //     this.setState({items: json})
    // }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={e => { this.setState({ number: this.state.number + 1  })}}>Click me!</button>
                <p>Name: {this.props.name}</p>
                {this.state.items.map(a => <div key={a.id.toString()}>
                    <p>{a.body}</p>
                </div>)}
            </div>
        );
    }
}

export default ExampleComponent;