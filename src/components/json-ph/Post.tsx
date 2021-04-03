import { Component } from "react";
import Comment from "./Comment";

interface IProps {}
interface IState {
  number: number;
  items: {
    id: number;
    title: string;
    body: string;
  }[];
}

class Post extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      number: 0,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((r) => {
      r.json().then((data) => {
        this.setState({ items: data });
      });
    });
  }

  render() {
    return (
      <div className="container">
        <p className="sosiska">Nachalo Sosiska</p>
        {this.state.items.splice(0, 10).map((a) => (
          <div className="border_post">
            <div>
              <h2>
                {a.id.toString()}. <i>{a.title}</i>
              </h2>
              <p>{a.body}</p>
            </div>
            <h5>Comments:</h5>
            <Comment postId={a.id} />
          </div>
        ))}
        <p className="sosiska">sosiska konets</p>
      </div>
    );
  }
}

export default Post;
