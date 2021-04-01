

import React,{Component} from 'react'
import '../../App.css'

interface PostComponentProps {

}

interface PostComponentState {
    isLoaded: boolean
    items: {
        id: number,
        fieldA: string,
        fieldB: string,
        another: string,
    }[]
}

class SportConnectionComponent extends React.Component<PostComponentProps, PostComponentState>{
    constructor(props: PostComponentProps) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://1365a251a33b.ngrok.io/api/educ_part/example', {mode: 'cors'})
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

        !isLoaded ? (
            return <div>Loading..........</div>
    )
            return (
                <div className="container">
                    <h4>Culture Part</h4>
                    <ul >
                        {items.map(item =>(
                            <li key = {item.id}> {item.fieldA} | {item.fieldB} | {item.another}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default SportConnectionComponent;
