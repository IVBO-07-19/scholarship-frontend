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

class ConnectionComponent extends React.Component<PostComponentProps, PostComponentState>{
    constructor(props: PostComponentProps) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://desolate-tundra-66059.herokuapp.com/api/sport/example/', {mode: 'cors'})
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
                    <ul>
                        {items.map(item =>(
                            <li key = {item.id}> {item.name} | {item.level} | {item.degree} | {item.place} | {item.date}</li>
                        ))};
                    </ul>
                </div>
            );
        }
    }
}

export default ConnectionComponent;
