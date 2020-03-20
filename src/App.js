import React from 'react';
import { connect } from 'react-redux';
import { fetchEmojiData } from './redux/actions/emojis';
import Menu from './menu';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchEmojiData();
  }

  render() {
    return (
        <div>
          <Menu data={this.props.emojis && this.props.emojis.data}/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchEmojiData: () => dispatch(fetchEmojiData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
