// <ChatRoom room="general" />
// connect = (room) => socket
// socket.on('message', ...)
// socket.emit('message', )

const App = () => {
  const room = "... (from state)";

  return (
    <>
      <select onChange={changeRoom}>...</select>
      <ChatRoom room={room} />
    </>
  );
};

const ChatRoom = ({ room }) => {
  const [messages, setMessages] = useState([]);

  socket = useRef();
  useEffect(() => {
    socket.current = connect(room);
    socket.current.emit("request-messages" /* setMessages(...) */);
    socket.current.on("message" /* setMessages(...) */);
    return () => {
      socket.current.disconnect();
    };
  }, [room]);

  return (
    <form onSubmit={(e) => socket.current?.emit("message" /* ... */)}>...</form>
  );
};

class ChatRoom extends Component {
  socket = null;

  connect() {
    this.socket = connect(this.props.room);
    socket.current.emit("request-messages" /* setMessages(...) */);
    socket.current.on("message" /* setMessages(...) */);
  }

  componentDidMount() {
    this.connect();
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.room !== this.props.room) {
      this.socket.disconnect();
      this.connect();
    }
  }

  render() {
    return (
      <form onSubmit={(e) => this.socket?.emit("message" /* ... */)}>...</form>
    );
  }
}
