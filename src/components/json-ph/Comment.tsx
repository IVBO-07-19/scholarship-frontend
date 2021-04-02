import { Component } from "react";

interface IProps {
  postId: number;
}
interface IState {
  number: number;
  items: {
    id: number;
    name: string;
    postId: number;
    email: string;
    body: string;
  }[];
}

class Comment extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      number: 0,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((r) => {
        r.json().then((data) => {
          this.setState({ items: data });
        });
      });
  }

  render() {
    let comms: any[] = [];
    this.state.items.forEach((element) => {
      if (this.props.postId == element.postId) {
        comms.push(element);
      }
    });
    console.log(comms);

    return (
      <div>
        {comms.map((el) => (
          <div className="comment_style">
            <div>
              <p>
                <i>Name: {el.name}</i>
              </p>
              <p>Email: {el.email}</p>
            </div>
            <p>Body: {el.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Comment;
