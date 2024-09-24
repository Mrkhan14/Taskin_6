import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
export class Loading extends Component {
   render() {
      const { heightStyle, classStyle } = this.props;
      return (
         <div
            className={`loading-page ` + this.props.classStyle}
            style={{ height: this.props.heightStyle }}
         >
            <Spinner animation='border' role='status'>
               <span className='visually-hidden'>Loading...</span>
            </Spinner>
         </div>
      );
   }
}

export default Loading;
