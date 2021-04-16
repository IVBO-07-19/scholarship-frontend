

import React,{Component} from 'react'
import '../../App.css'

interface PostComponentProps {

}

interface PostComponentState {
    isLoaded: boolean
    items: {
        id: number,
        field1: string,
        field2: string,
    }[]
}

class EduConnectionComponent extends React.Component<PostComponentProps, PostComponentState>{
    constructor(props: PostComponentProps) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://1365a251a33b.ngrok.io/api/educ_part/example', {mode: 'cors'})
            .then(r => {
                r.json().then(data => {
                    this.setState({
                        items: data,
                        isLoaded: true
                    })
                })
            })
            .catch(() => console.log("error!"));
    }

    render() {
        var {isLoaded, items} = this.state;

        return (
            !isLoaded ? (
                <div>re..dd........</div>
            ) : (
                <div className="container">
                    <h4>Edu! Part</h4>
                    <ul >
                        {items.map(item =>(
                            <li key = {item.id}> {item.field1} | {item.field2} | {item.id}</li>
                        ))}
                    </ul>
                </div>
            )
    )
    }
}

export default EduConnectionComponent;
