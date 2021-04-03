import { Component } from "react";

interface IProps {
  url: string;
}

interface IState {
  isLoaded: boolean;
  items: {
    id: number;
    scores: number;
    report: {
      id: number;
      title: string;
      media_title: string;
      edition_level_choicer: string;
      co_author_quantity: number;
      date: string;
    };
  }[];
}

class SocConnection extends Component<IProps, IState> {
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
        <h4>Social Part</h4>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.scores} | report: [ <br />
              {item.report.title} <br />
              {item.report.media_title} <br />
              {item.report.edition_level_choicer} <br />
              {item.report.co_author_quantity} <br />
              {item.report.date} <br />]
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SocConnection;
