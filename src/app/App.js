import React from 'react';
import SearchWidget from './SearchWidgetV3';
import ResultPanel from './ResultPanel'
import response from '../common/ApiData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      inputSelected: false
    }
  }
  updateSearchTitle = (title) => {
    this.setState({ inputValue: title, inputSelected: true })
  }
  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <SearchWidget
          updateSearchTitle={this.updateSearchTitle}
          inputSelected={this.state.inputSelected}
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
