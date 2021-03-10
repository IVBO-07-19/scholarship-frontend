import React from "react";

interface CommentComponentProps {
    postId: number
}
interface CommentComponentState {
    number: number
    items: {
        id: number,
        name: string,
        postId: number
        email: string,
        body: string}[]
}


class CommentComponent extends React.Component<CommentComponentProps, CommentComponentState> {
    constructor(props: CommentComponentProps) {
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

    render() {
        let comms: any[] = []
        this.state.items.forEach(element => {
            
            if(this.props.postId == element.postId){
                //console.log(this.props.postId, element.postId);
                //console.log(element);
                comms.push(element);
            }
        });
        console.log(comms);


        return ( 
            <div>
                {comms.map(el => 
                    //console.log("Hello? ======>", el.postId);
                        
                        <div className="comment_style">
                            <div>
                                <p><i>Name: {el.name}</i></p>
                                <p>Email: {el.email}</p>
                            </div>
                            <p>Body: {el.body}</p>
                        </div>
                    )
                }
            
            </div>

        );
    }
}
export default CommentComponent;