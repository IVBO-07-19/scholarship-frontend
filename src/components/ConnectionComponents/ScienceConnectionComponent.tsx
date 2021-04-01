import React,{Component} from 'react'
import '../../App.css'

interface PostComponentProps {

}

interface PostComponentState {
    isLoaded: boolean
    items: {
        id: number,
        status: string,
        place: number,
    }[]
}

class ScienceConnectionComponent extends React.Component<PostComponentProps, PostComponentState>{
    constructor(props: PostComponentProps) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://ea18da147d49.ngrok.io/api/science/myproject/', {mode: 'cors'})
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
                <div>Loading...</div>
            ) : (
                <div className="container">
                    <h4>Science Part</h4>
                    <ul >
                        {items.map(item =>(
                            <li key = {item.id}> {item.status} | {item.place}</li>
                        ))}
                    </ul>
                </div>
            )
        )
    }
}

export default ScienceConnectionComponent;
