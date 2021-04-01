import React,{Component} from 'react'

interface PostComponentProps {

}

interface PostComponentState {
    isLoaded: boolean
    items: {
        id: number,
        name: string,
        level: string,
        degree: string,
        place: number,
        date: string}[]
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
        fetch('http://65ac626e08ac.ngrok.io/api/sport/global_event', {mode: 'cors'})
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

        if(!isLoaded){
            return <div>Loading..........</div>
        }
        else{
            return (
                <div className="container">
                    <h4>Social Part</h4>
                    <ul>
                        {items.map(item =>(
                            <li key = {item.id}> {item.name} | {item.level} | {item.degree} | {item.place} | {item.date}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default SportConnectionComponent;
