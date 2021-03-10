import React from "react"
import RegularButton from './UI/RegularButton'
import CommentComponent from './CommentComponent'

interface PostComponentProps {
    
}
interface PostComponentState {
    number: number
    items: {
        id: number, 
        title: string, 
        body: string}[]
}

class PostComponent extends React.Component<PostComponentProps, PostComponentState> {
    
    
    
    constructor(props: PostComponentProps) {
        super(props);
        this.state = {
            number: 0,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(r => {
                r.json().then(data => {
                    this.setState({items: data})
                })
            });
    }

    render() {
        return (            
            <div className="container">
                <p className="sosiska" >Nachalo Sosiska</p>
                {this.state.items.splice(0, 10).map(a => 
                    <div className="border_post">
                        <div>
                            <h2>{a.id.toString()}. <i>{a.title}</i></h2>
                            <p>{a.body}</p>
                        </div>
                        <h5>Comments:</h5> 
                        <CommentComponent postId={a.id}/>
                    </div>
                )} 
                <p className="sosiska">sosiska konets</p>
            </div>
        );
    }
}

export default PostComponent;