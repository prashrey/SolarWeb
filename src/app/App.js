import React from 'react';
import SearchWidget from './SearchWidgetV3';
import ResultPanel from './ResultPanel'
import response from '../common/ApiData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  updateSearchTitle = (title) => {
    this.setState({ inputValue: title })
  }
  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <SearchWidget
          updateSearchTitle={this.updateSearchTitle}
        />
        <ResultPanel
          arrAlbum={response.results.albummatches}
          title={this.state.inputValue}
        />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}
export default App;
