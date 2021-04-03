import { Component } from "react";

interface IProps {
  url: string;
}

interface IState {
  isLoaded: boolean;
  items: {
    id: number;
    name: string;
    level: string;
    degree: string;
    place: number;
    date: string;
  }[];
}

class SportConnection extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(this.props.url, { mode: "cors" })
      .then((r) => {
        r.json().then((data) => {
          this.setState({
            items: data,
            isLoaded: true,
          });
        });
      })
      .catch(() => console.log("error!"));
  }

  render() {
    var { isLoaded, items } = this.state;

    return !isLoaded ? (
      <div>Loading...</div>
    ) : (
      <div className="container">
        <h4>Sport Part</h4>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {" "}
              {item.name} | {item.level} | {item.degree} | {item.place} |{" "}
              {item.date}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SportConnection;
