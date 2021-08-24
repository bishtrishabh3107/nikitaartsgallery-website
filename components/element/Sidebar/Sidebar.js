import React from 'react';
import Sidebar from 'react-sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';

class SidebarClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <div>
            <div className="flex flex-row bg-gray-800 h-14 px-2 pt-1">
              <h1 className="lg:mx-1 text-xl font-bold text-blue-200 xl:text-4xl lg:text-3xl md:text-2xl">
                NIKI
              </h1>
              <h1 className="lg:mx-1 text-base font-bold text-red-300 xl:text-2xl lg:text-xl md:text-lg">
                Arts
              </h1>
              <h1 className="lg:mx-1 text-xl font-bold text-blue-200 xl:text-4xl lg:text-3xl md:text-2xl">
                GALLERY
              </h1>
            </div>
            <hr />
            <a href="/" className="px-2 py-4 font-bold lg:px-14">
              SPIRITUAL PAINTINGS
            </a>
            <br />
            <hr />
            <a href="/" className="px-2 py-4 font-bold lg:px-14">
              ABSTRACT PAINTINGS
            </a>
            <br />
            <hr />
            <a href="/" className="px-2 py-4  font-bold lg:px-14">
              CARTOON PAINTINGS
            </a>
            <br />
            <hr />
            <a href="/" className="px-2 py-4 font-bold lg:px-14">
              PAINTING PRODUCTS
            </a>
            <hr />
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: 'white' } }}
      >
        <button
          onClick={() => this.onSetSidebarOpen(true)}
          className="text-gray-100 text-xl xl:text-3xl lg:text-3xl md:text-2xl p-4"
        >
          <GiHamburgerMenu />
        </button>
      </Sidebar>
    );
  }
}

export default SidebarClass;
