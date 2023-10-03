import React from "react";

// extends is used because we are inheriting few thing from React
class User extends React.Component {
  // class based component is basically
  //   normal js class that return jsx element

  //   ----------
  // constructor is called first
  constructor(props) {
    super(props);
    // we use super to access props inside constructor
    //   ----------
    console.log(props);

    // state is reserved word
    this.state = {
      userInfo: null,
      count: 0,
    };

    // behind the scenes
    // even -> const [count,setcount] = useState(0) gets converted to this.state={count:0}

    // here we have to define state
  }

  //   didMount is called third, after render and DOM manipulation
  async componentDidMount() {
    // this.setState can't be called inside contructor
    // this.setState function is provided by react
    this.setState({
      userInfo: {
        name: "swap",
      },
      count: 2,
    });
    // more than one state can be updated like this

    // we can call api here but we have to use
    // async before componentDidMount
  }

  //   didUpdate is called after re-render and after DOM update
  componentDidUpdate() {}

  //   render is called second
  render() {
    const { userInfo } = this.state;
    const { contact } = this.props;
    return (
      <>
        <h1>Name: {userInfo?.name}</h1>
        <h2>Location: {userInfo?.location}</h2>
        <h2>Contact: {contact}</h2>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increase count
        </button>
      </>
    );
  }
}

export default User;
