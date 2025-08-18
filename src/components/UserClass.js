import react from "react";

class UserClass extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "test",
        location: "test location",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/manoj");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Name:{name}</h1> */}
        <h1>Name:{this.state.userInfo.name}</h1>
        <h1>Count:{count}</h1>
        <button onClick={() => this.setState({ count: count + 1 })}></button>
        <h2>Contact:manoj@gmail.com</h2>
        {/* <h3>Location:{location}</h3> */}
        <h3>Location:{this.state.userInfo.location}</h3>
        <img
          src={this.state.userInfo.avatar_url}
          alt="User Avatar"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    );
  }
}

export default UserClass;
