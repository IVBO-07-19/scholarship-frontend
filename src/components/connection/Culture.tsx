import { Component } from "react";
import "../../App.css";

interface IProps {
  url: string;
}

interface IState {
  isLoaded: boolean;
  items: {
    id: number;
    fieldA: string;
    fieldB: string;
    another: string;
  }[];
}

class CultConnection extends Component<IProps, IState> {
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
        <h4>Culture Part</h4>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.fieldA} | {item.fieldB} | {item.another}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CultConnection;
